/**
 * login.js —— 登录页
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;

  class LoginPage {
    render() {
      // 已登录直接进首页
      if (KY.Auth.isLoggedIn()) {
        KY.Router.replace('/home');
        return;
      }

      const app = document.getElementById('app');
      app.innerHTML = `
        <div class="login">
          <div class="login__box">
            <div class="login__brand">
              <div class="login__logo">师</div>
              <div class="login__title">高校教师资格证 · 刷题系统</div>
              <div class="login__sub">高等教育学 / 高等教育心理学 / 高等教育法规 / 教师职业道德修养</div>
            </div>

            <div class="login__card">
              <form class="login__form" id="login-form" novalidate>
                <div class="field">
                  <label class="field__label" for="username">账号</label>
                  <input class="input" id="username" name="username" type="text"
                         autocomplete="username" placeholder="请输入账号" />
                </div>
                <div class="field">
                  <label class="field__label" for="password">密码</label>
                  <input class="input" id="password" name="password" type="password"
                         autocomplete="current-password" placeholder="请输入密码" />
                </div>
                <div class="login__error" id="login-error"></div>
                ${KY.Store.isPersistent() ? '' : `
                <div class="login__warn" id="login-warn">
                  当前浏览器禁止了本地存储（常见于 Safari 直接打开本地文件）。
                  可以正常刷题，但刷新后登录状态与进度会丢失。建议改用 Chrome 打开，或按 README 用本地服务访问。
                </div>`}
                <button class="btn btn--primary btn--lg btn--block" type="submit">登 录</button>
              </form>
            </div>

            <div class="login__foot">数据仅保存在本机浏览器 · 无需联网</div>
          </div>
        </div>`;

      this.bind();
    }

    bind() {
      const form = document.getElementById('login-form');
      const error = document.getElementById('login-error');
      const username = document.getElementById('username');

      username.focus();

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        error.textContent = '';

        const account = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const result = KY.Auth.login(account, password);

        if (!result.ok) {
          error.textContent = result.error;
          document.getElementById('password').value = '';
          document.getElementById('password').focus();
          return;
        }

        if (!result.persistent) {
          KY.Toast.warn('临时模式：可以刷题，但刷新后进度会丢失');
        } else {
          KY.Toast.ok('登录成功');
        }
        KY.Router.go('/home');
      });
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.Login = LoginPage;
})(window.KY);
