/**
 * layout.js —— 应用外壳：左侧导航 + 顶部工具条 + 页面容器
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  const NAV = [
    { key: 'home', label: '首页', href: '#/home' },
    { key: 'banks', label: '题库浏览', href: '#/banks/pedagogy' },
    { key: 'exam', label: '模拟考试', href: '#/exam' },
    { key: 'wrong', label: '错题本', href: '#/wrongbook' },
  ];

  const ICONS = {
    home: '<path d="M4 11.5 12 5l8 6.5M6 10.5V20h12v-9.5"/>',
    banks: '<rect x="5" y="4" width="11" height="13" rx="1.6"/><path d="M8 4V2.8h11V16h-1.2"/>',
    exam: '<circle cx="12" cy="12" r="7.5"/><path d="M12 7.5V12l3 2"/>',
    wrong: '<path d="M6 3.5h9l3 3v14H6z"/><path d="M9 9h6M9 13h6M9 17h4"/>',
  };

  const UI = {
    shell(active, content, wide) {
      const user = KY.Auth.currentUser() || {};
      const subjects = Data.subjects().filter((subject) => !subject.examOnly);
      const subjectIds = subjects.map((s) => s.id);
      const nav = NAV.map((item) => {
        const on = active === item.key || (item.key === 'banks' && subjectIds.includes(active));
        return `<a class="side-nav__item${on ? ' is-on' : ''}" href="${item.href}">
          <svg class="side-nav__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[item.key]}</svg>
          <span>${U.esc(item.label)}</span>
        </a>`;
      }).join('');

      const activeSubject = subjects.find((s) => s.id === active);
      const crumbLabel = active === 'exam' ? '模拟考试' : active === 'wrong' ? '错题本' : activeSubject ? activeSubject.name : '学习概览';
      const subjectLinks = subjects
        .map((subject) => {
          const on = active === subject.id;
          return `<a class="side-subject${on ? ' is-on' : ''}" href="#/banks/${subject.id}">
            <span class="side-subject__dot" style="background:${subject.color}"></span>
            <span>${U.esc(subject.name)}</span>
          </a>`;
        })
        .join('');

      return `
        <div class="app">
          <div class="sidebar-mask" data-action="menu-close"></div>
          <aside class="sidebar" id="sidebar" aria-label="主导航">
            <a class="brand" href="#/home">
              <span class="brand__mark">学</span>
              <span class="brand__text">
                <strong>高校教师资格</strong>
                <em>学习与备考</em>
              </span>
            </a>
            <div class="side-label">工作台</div>
            <nav class="side-nav">${nav}</nav>
            <div class="side-rule"></div>
            <div class="side-label">学习科目</div>
            <div class="side-subjects">${subjectLinks}</div>
            <div class="side-foot">
              <span class="side-foot__avatar">同</span>
              <span class="side-foot__text">
                <strong>本地学习空间</strong>
                <em>进度保存在此设备</em>
              </span>
            </div>
          </aside>

          <div class="app-main">
            <header class="topline">
              <button class="menu-btn" data-action="menu" aria-label="打开导航" aria-controls="sidebar" aria-expanded="false">
                <span></span><span></span><span></span>
              </button>
              <div class="topline__crumb">
                江西备考
                <span class="topline__sep">/</span>
                <strong>${U.esc(crumbLabel)}</strong>
              </div>
              <div class="topline__right">
                <form class="search" id="global-search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></svg>
                  <input id="global-search-input" type="search" placeholder="搜索科目、章节或知识点" autocomplete="off" />
                </form>
                <details class="backup-menu">
                  <summary class="tool-btn">学习数据备份</summary>
                  <div class="backup-menu__items">
                    <button class="btn btn--ghost btn--sm" data-action="backup-export">导出学习JSON</button>
                    <button class="btn btn--ghost btn--sm" data-action="backup-import">导入学习JSON</button>
                  </div>
                </details>
                <span class="topline__user">
                  <span class="avatar">${U.esc((user.displayName || '管理员').slice(0, 1))}</span>
                  <span class="topline__name">${U.esc(user.displayName || '管理员')}</span>
                </span>
                <button class="tool-btn tool-btn--quiet" data-action="logout">退出</button>
              </div>
            </header>
            <main class="page${wide ? ' page--wide' : ''}">${content}</main>
          </div>
        </div>`;
    },

    topbar() { return ''; },

    page(options) {
      const { content, active, wide } = options;
      return this.shell(active, content, wide);
    },

    crumb(items) {
      return `<nav class="crumb">${items
        .map((item, index) => {
          const isLast = index === items.length - 1;
          const node = item.href && !isLast
            ? `<a href="${item.href}">${U.esc(item.label)}</a>`
            : `<span class="${isLast ? 'crumb__current' : ''}">${U.esc(item.label)}</span>`;
          return index === 0 ? node : `<span class="crumb__sep">/</span>${node}`;
        })
        .join('')}</nav>`;
    },

    empty(title, desc, icon) {
      return `
        <div class="empty">
          ${icon ? `<div class="empty__icon">${U.esc(icon)}</div>` : ''}
          <div class="empty__title">${U.esc(title)}</div>
          ${desc ? `<div class="empty__desc">${U.esc(desc)}</div>` : ''}
        </div>`;
    },

    typeBadge(type) {
      return `<span class="badge">${U.esc(Data.typeName(type))}</span>`;
    },

    difficultyBadge(difficulty) {
      const map = {
        easy: ['基础', 'badge--ok'],
        medium: ['进阶', 'badge--warn'],
        hard: ['高频', 'badge--bad'],
      };
      const [label, cls] = map[difficulty] || ['常规', ''];
      return `<span class="badge ${cls}">${label}</span>`;
    },

    progressLine(text, percent, tone) {
      const cls = tone === 'ok' ? ' progress__fill--ok' : tone === 'bad' ? ' progress__fill--bad' : '';
      return `
        <div class="progress-line">
          <span class="progress-line__label">${U.esc(text)}</span>
          <span class="progress"><span class="progress__fill${cls}" style="width:${U.clamp(percent, 0, 100)}%"></span></span>
          <span class="progress-line__value">${percent}%</span>
        </div>`;
    },

    stat(value, label) {
      return `<div class="stat"><span class="stat__value">${U.esc(value)}</span><span class="stat__label">${U.esc(label)}</span></div>`;
    },
  };

  KY.UI = UI;

  const MOBILE = typeof window.matchMedia === 'function'
    ? window.matchMedia('(max-width: 860px)')
    : { matches: false, addEventListener() {} };

  /** 同步侧栏的 inert / aria-expanded 状态 */
  UI.syncSidebar = function syncSidebar() {
    const btn = document.querySelector('[data-action="menu"]');
    const sidebar = document.getElementById('sidebar');
    if (!btn || !sidebar) return;
    const mobile = MOBILE.matches;
    const open = document.body.classList.contains('sidebar-open');
    if (!mobile) {
      document.body.classList.remove('sidebar-open');
      sidebar.removeAttribute('inert');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', '打开导航');
      return;
    }
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
    if (open) sidebar.removeAttribute('inert');
    else sidebar.setAttribute('inert', '');
  };

  UI.openSidebar = function openSidebar() {
    document.body.classList.add('sidebar-open');
    UI.syncSidebar();
    const sidebar = document.getElementById('sidebar');
    const first = sidebar && sidebar.querySelector('a, button');
    if (first) first.focus();
  };

  UI.closeSidebar = function closeSidebar(restoreFocus) {
    document.body.classList.remove('sidebar-open');
    UI.syncSidebar();
    if (restoreFocus) {
      const btn = document.querySelector('[data-action="menu"]');
      if (btn) btn.focus();
    }
  };

  UI.bindGlobal = function bindGlobal() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('[data-action="menu"]')) {
        if (document.body.classList.contains('sidebar-open')) UI.closeSidebar(true);
        else UI.openSidebar();
        return;
      }
      if (event.target.closest('[data-action="menu-close"]')) {
        UI.closeSidebar(true);
        return;
      }
      if (event.target.closest('.side-nav__item, .side-subject, .brand')) {
        UI.closeSidebar(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (!document.body.classList.contains('sidebar-open')) return;
      event.preventDefault();
      UI.closeSidebar(true);
    });

    MOBILE.addEventListener('change', UI.syncSidebar);

    document.addEventListener('submit', (event) => {
      const form = event.target.closest('#global-search');
      if (!form) return;
      event.preventDefault();
      const input = document.getElementById('global-search-input');
      const term = ((input && input.value) || '').trim().toLowerCase();
      if (!term) return;
      const subjects = Data.subjects().filter((s) => !s.examOnly);
      for (const subject of subjects) {
        for (const bank of subject.banks) {
          for (const chapter of bank.chapterList) {
            const kp = chapter.kps.find((item) => item.name.toLowerCase().includes(term));
            if (chapter.name.toLowerCase().includes(term) || kp) {
              const suffix = kp ? `?kp=${encodeURIComponent(kp.id)}` : '';
              if (input) input.value = '';
              KY.Router.go(`/questions/${bank.id}/${chapter.id}${suffix}`);
              return;
            }
          }
        }
      }
      KY.Toast.bad('没有找到匹配的章节或知识点');
    });

    document.addEventListener('click', (event) => {
      const btn = event.target.closest('[data-action]');
      if (!btn) return;
      if (btn.dataset.action === 'backup-export' || btn.dataset.action === 'backup-import') {
        const menu = btn.closest('details');
        if (menu) menu.open = false;
        if (btn.dataset.action === 'backup-export') KY.Backup.exportFile();
        else KY.Backup.chooseFile();
        return;
      }
      if (btn.dataset.action !== 'logout') return;
      KY.Auth.logout();
      KY.Toast.show('已退出登录', 'ok');
      KY.Router.go('/');
    });
  };
})(window.KY);
