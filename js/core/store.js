/**
 * store.js —— localStorage 封装（带内存兜底）
 *
 * 浏览器可能禁用本地存储（Safari 打开 file:// 页面、无痕模式、企业策略等），
 * 这时 setItem 会抛 SecurityError。为了让功能不整体失效，这里做两件事：
 *   1. 启动时探测一次，不可用就切到内存模式，本次会话仍可正常刷题；
 *   2. 把"是否持久化"告诉上层，登录页据此给出提示，而不是静默失败。
 *
 * 题库本身在 data/*.js 里，不占 localStorage。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const PREFIX = 'gxjszg.';

  const KEYS = {
    user: 'user',
    sessions: 'sessions',
    results: 'results',
    wrong: 'wrong',
    settings: 'settings',
    schema: 'schema',
  };

  // 数据结构版本：字段有破坏性变更时 +1
  const SCHEMA_VERSION = 1;

  // 会话与结果最多保留的条数，防止 localStorage 撑爆
  const MAX_SESSIONS = 100;
  const MAX_RESULTS = 100;

  /* ---------------- 存储模式 ---------------- */

  // 'local' = localStorage 可用；'memory' = 不可用，退回内存（刷新即丢）
  let mode = 'local';
  let probed = false;
  let warned = false;

  // 内存兜底数据
  const memory = Object.create(null);

  function fullKey(key) {
    return PREFIX + key;
  }

  function clone(value) {
    if (value === undefined) return undefined;
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (err) {
      return value;
    }
  }

  /** 探测 localStorage 是否真的可写（Safari 的 file:// 会在这里抛错） */
  function probe() {
    if (probed) return mode;
    probed = true;
    try {
      const key = fullKey('__probe__');
      window.localStorage.setItem(key, '1');
      window.localStorage.removeItem(key);
      mode = 'local';
    } catch (err) {
      mode = 'memory';
      console.warn('[store] 本地存储不可用，已切换为内存模式：', err && err.name);
    }
    return mode;
  }

  /**
   * 降级到内存前，把 localStorage 里已有的应用数据复制到内存，
   * 否则切换后登录态、错题、历史记录会"瞬间丢失"（其实还在磁盘上）。
   */
  function migrateToMemory() {
    try {
      Object.keys(KEYS).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(memory, key)) return;
        const raw = window.localStorage.getItem(fullKey(key));
        if (raw === null) return;
        try {
          memory[key] = JSON.parse(raw);
        } catch (err) {
          // 单条损坏就跳过，不影响其它数据
        }
      });
    } catch (err) {
      console.warn('[store] 迁移已有数据到内存失败：', err && err.name);
    }
  }

  /** 只提示一次，避免每次写都弹 */
  function warnOnce(message, tries) {
    if (warned) return;
    warned = true;
    const attempt = tries || 0;
    if (window.KY && KY.Toast) {
      KY.Toast.warn(message);
      return;
    }
    // Toast 还没加载完时稍后重试
    if (attempt < 10) {
      setTimeout(() => warnOnce(message, attempt + 1), 300);
    }
  }

  const Store = {
    KEYS,
    SCHEMA_VERSION,

    /** 当前存储模式：'local' | 'memory' */
    mode() {
      return probe();
    },

    /** 数据是否能持久化（刷新后还在） */
    isPersistent() {
      return probe() === 'local';
    },

    /** 读：解析失败或不存在时返回 fallback */
    read(key, fallback) {
      if (probe() === 'memory') {
        if (Object.prototype.hasOwnProperty.call(memory, key)) return memory[key] === undefined ? fallback : clone(memory[key]);
        // 内存里没有时，再尝试读一次磁盘（只读兜底，不写回）
        try {
          const raw = window.localStorage.getItem(fullKey(key));
          if (raw !== null) return JSON.parse(raw);
        } catch (err) {
          // 读不到就用 fallback
        }
        return fallback;
      }
      try {
        const raw = window.localStorage.getItem(fullKey(key));
        if (raw === null) return fallback;
        return JSON.parse(raw);
      } catch (err) {
        console.warn('[store] 读取失败，已回退到默认值：', key, err);
        return fallback;
      }
    },

    /** 写：失败时降级到内存，保证当前会话继续可用 */
    write(key, value) {
      if (probe() === 'memory') {
        memory[key] = clone(value);
        return true;
      }
      try {
        window.localStorage.setItem(fullKey(key), JSON.stringify(value));
        return true;
      } catch (err) {
        // 配额超限或权限被拒，都退到内存模式
        mode = 'memory';
        migrateToMemory();
        memory[key] = clone(value);
        const isQuota =
          err && (err.name === 'QuotaExceededError' || err.name === 'NS_ERROR_DOM_QUOTA_REACHED' || err.code === 22);
        warnOnce(
          isQuota
            ? '本地存储空间不足，已切换为临时模式：本次记录不会保存'
            : '浏览器禁止了本地存储，已切换为临时模式：本次记录不会保存'
        );
        console.warn('[store] 写入失败，已降级到内存：', key, err && err.name);
        return true;
      }
    },

    remove(key) {
      if (probe() === 'memory') {
        // 保留删除标记，避免只读磁盘兜底让已退出的用户或已删除记录重新出现。
        memory[key] = undefined;
        return;
      }
      try {
        window.localStorage.removeItem(fullKey(key));
      } catch (err) {
        delete memory[key];
      }
    },

    /** 首次启动时写入版本号；未来做迁移就挂在这里 */
    ensureSchema() {
      const current = this.read(KEYS.schema, null);
      if (current !== SCHEMA_VERSION) {
        this.write(KEYS.schema, SCHEMA_VERSION);
      }
    },

    /* ---------------- 登录态 ---------------- */

    getUser() {
      return this.read(KEYS.user, null);
    },

    setUser(user) {
      this.write(KEYS.user, user);
    },

    clearUser() {
      this.remove(KEYS.user);
    },

    /* ---------------- 练习会话 ---------------- */

    getSessions() {
      const list = this.read(KEYS.sessions, []);
      return Array.isArray(list) ? list : [];
    },

    saveSession(session) {
      const list = this.getSessions();
      const index = list.findIndex((item) => item.id === session.id);
      if (index >= 0) {
        list[index] = session;
      } else {
        list.unshift(session);
      }
      this.write(KEYS.sessions, list.slice(0, MAX_SESSIONS));
    },

    getSession(id) {
      return this.getSessions().find((item) => item.id === id) || null;
    },

    removeSession(id) {
      this.write(KEYS.sessions, this.getSessions().filter((item) => item.id !== id));
    },

    /** 只保留未提交的会话，用于首页"继续上次练习" */
    getDraftSessions() {
      return this.getSessions().filter((item) => !item.submitted && (item.questionIds || []).length > 0);
    },

    /* ---------------- 结果 ---------------- */

    getResults() {
      const list = this.read(KEYS.results, []);
      return Array.isArray(list) ? list : [];
    },

    saveResult(result) {
      const list = this.getResults();
      const index = list.findIndex((item) => item.id === result.id);
      if (index >= 0) {
        list[index] = result;
      } else {
        list.unshift(result);
      }
      this.write(KEYS.results, list.slice(0, MAX_RESULTS));
    },

    getResultBySession(sessionId) {
      return this.getResults().find((item) => item.sessionId === sessionId) || null;
    },

    /* ---------------- 错题 ---------------- */

    getWrongList() {
      const list = this.read(KEYS.wrong, []);
      return Array.isArray(list) ? list : [];
    },

    saveWrongList(list) {
      this.write(KEYS.wrong, list);
    },

    /* ---------------- 设置 ---------------- */

    getSettings() {
      return this.read(KEYS.settings, {});
    },

    saveSettings(patch) {
      const next = Object.assign({}, this.getSettings(), patch);
      this.write(KEYS.settings, next);
      return next;
    },

    /** 清空全部学习数据（保留登录态），用于设置页的"重置" */
    clearLearningData() {
      this.remove(KEYS.sessions);
      this.remove(KEYS.results);
      this.remove(KEYS.wrong);
    },
  };

  KY.Store = Store;
})(window.KY);
