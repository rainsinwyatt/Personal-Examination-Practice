/**
 * toast.js —— 轻提示
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;

  const Toast = {
    /**
     * @param {string} message 文本
     * @param {'info'|'ok'|'bad'|'warn'} type 类型
     * @param {number} duration 毫秒
     */
    show(message, type, duration) {
      const root = document.getElementById('toast-root');
      if (!root) return;

      const el = document.createElement('div');
      el.className = `toast${type && type !== 'info' ? ` toast--${type}` : ''}`;
      el.textContent = message;
      root.appendChild(el);

      const life = duration || 2600;
      setTimeout(() => {
        el.classList.add('is-out');
        setTimeout(() => el.remove(), 220);
      }, life);
    },

    ok(message) {
      this.show(message, 'ok');
    },

    bad(message) {
      this.show(message, 'bad');
    },

    warn(message) {
      this.show(message, 'warn');
    },
  };

  KY.Toast = Toast;

  // 兼容 store 中的调用
  window.showToast = (message, type) => Toast.show(message, type);
})(window.KY);
