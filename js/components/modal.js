/**
 * modal.js —— 确认框 / 提示框
 * 支持焦点陷阱、Escape 关闭、关闭后焦点归还触发控件。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  let seq = 0;

  function focusables(root) {
    return Array.from(
      root.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.disabled && el.offsetParent !== null);
  }

  function open(options) {
    return new Promise((resolve) => {
      const root = document.getElementById('modal-root');
      const opener = document.activeElement;
      const titleId = `modal-title-${++seq}`;
      const mask = document.createElement('div');
      mask.className = 'modal-mask';
      mask.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="${titleId}">
          <div class="modal__head" id="${titleId}">${U.esc(options.title || '提示')}</div>
          <div class="modal__body">${U.text(options.body || '')}</div>
          <div class="modal__foot">
            ${options.cancelText === null ? '' : `<button class="btn btn--ghost" data-act="cancel">${U.esc(options.cancelText || '取消')}</button>`}
            <button class="btn ${options.danger ? 'btn--danger' : 'btn--primary'}" data-act="ok">${U.esc(options.okText || '确定')}</button>
          </div>
        </div>`;
      root.appendChild(mask);

      const modal = mask.querySelector('.modal');
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const close = (result) => {
        mask.remove();
        document.removeEventListener('keydown', onKey);
        document.body.style.overflow = previousOverflow;
        if (opener && typeof opener.focus === 'function' && document.contains(opener)) {
          opener.focus();
        }
        resolve(result);
      };

      // 只处理 Escape 与 Tab 焦点循环；Enter 交给当前聚焦按钮的原生行为，
      // 避免用户在取消按钮或正文上按 Enter 时被误当作“确定”。
      const onKey = (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          close(false);
          return;
        }
        if (event.key !== 'Tab') return;
        const items = focusables(modal);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };

      mask.addEventListener('click', (event) => {
        if (event.target === mask) {
          close(false);
          return;
        }
        const act = event.target.closest('[data-act]');
        if (!act) return;
        close(act.dataset.act === 'ok');
      });

      document.addEventListener('keydown', onKey);
      setTimeout(() => {
        const ok = mask.querySelector('[data-act="ok"]');
        if (ok) ok.focus();
      }, 30);
    });
  }

  const Modal = {
    confirm(options) {
      return open(Object.assign({ cancelText: '取消', okText: '确定' }, options));
    },
    alert(options) {
      return open(Object.assign({ cancelText: null, okText: '知道了' }, options));
    },
  };

  KY.Modal = Modal;
})(window.KY);
