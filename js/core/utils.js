/**
 * utils.js —— 通用工具函数
 * 只放纯函数，不涉及业务与 DOM 结构
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = {
    /** 查询单个元素 */
    $(selector, root) {
      return (root || document).querySelector(selector);
    },

    /** 查询多个元素并转成数组 */
    $$(selector, root) {
      return Array.from((root || document).querySelectorAll(selector));
    },

    /** HTML 转义：所有用户可见文本都先过这一层，避免注入与标签错乱 */
    esc(value) {
      if (value === null || value === undefined) return '';
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },

    /** 转义 + 保留换行（题干、解析用） */
    text(value) {
      return U.esc(value).replace(/\n/g, '<br>');
    },

    /** 秒 → 00:00:00 / 00:00 */
    fmtTime(totalSeconds) {
      const s = Math.max(0, Math.floor(Number(totalSeconds) || 0));
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const sec = s % 60;
      const pad = (n) => String(n).padStart(2, '0');
      return h > 0 ? `${pad(h)}:${pad(m)}:${pad(sec)}` : `${pad(m)}:${pad(sec)}`;
    },

    /** ISO 时间 → 2026-11-02 00:44 */
    fmtDate(iso) {
      if (!iso) return '—';
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return '—';
      const pad = (n) => String(n).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    },

    /** 唯一 id */
    uid(prefix) {
      return `${prefix || 'id'}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
    },

    /** 百分比，保留整数 */
    pct(part, total) {
      if (!total) return 0;
      return Math.round((part / total) * 100);
    },

    /** 限制范围 */
    clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    },

    /** 防抖 */
    debounce(fn, wait) {
      let timer = null;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), wait);
      };
    },

    /** 按字段分组 → { key: [items] } */
    groupBy(list, keyFn) {
      return list.reduce((acc, item) => {
        const key = keyFn(item);
        (acc[key] = acc[key] || []).push(item);
        return acc;
      }, {});
    },

    /** 稳定排序：按顺序数组给对象排序 */
    sortByOrder(list, order, keyFn) {
      return list.slice().sort((a, b) => {
        const ia = order.indexOf(keyFn(a));
        const ib = order.indexOf(keyFn(b));
        return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
      });
    },

    /** 把 hash 里的查询串解析成对象：?a=1&b=2 */
    parseQuery(queryString) {
      const result = {};
      const raw = (queryString || '').replace(/^\?/, '');
      if (!raw) return result;
      raw.split('&').forEach((pair) => {
        if (!pair) return;
        const idx = pair.indexOf('=');
        const key = decodeURIComponent(idx < 0 ? pair : pair.slice(0, idx));
        const val = idx < 0 ? '' : decodeURIComponent(pair.slice(idx + 1));
        result[key] = val;
      });
      return result;
    },

    /** 生成查询串，忽略空值 */
    toQuery(params) {
      const parts = Object.keys(params || {})
        .filter((k) => params[k] !== undefined && params[k] !== null && params[k] !== '')
        .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`);
      return parts.length ? `?${parts.join('&')}` : '';
    },
  };

  KY.U = U;
})(window.KY);
