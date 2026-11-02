/**
 * auth.js —— 登录与登录态
 * 需求是固定账号，故账号密码写在常量里；界面上不展示账密。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  // 修改这里即可更换账号
  const ACCOUNT = 'admin';
  const PASSWORD = '123456';
  // 顶栏展示的身份名称
  const DISPLAY_NAME = '管理员';

  const Auth = {
    ACCOUNT,
    DISPLAY_NAME,

    /**
     * 登录校验
     * @returns {{ok: boolean, error?: string}}
     */
    login(username, password) {
      const name = String(username || '').trim();
      const pass = String(password || '');

      if (!name || !pass) {
        return { ok: false, error: '请输入账号和密码' };
      }
      // 账号密码错误统一提示，不区分是哪一个错了
      if (name !== ACCOUNT || pass !== PASSWORD) {
        return { ok: false, error: '账号或密码错误' };
      }

      KY.Store.setUser({
        username: name,
        displayName: DISPLAY_NAME,
        loginAt: new Date().toISOString(),
      });

      // 关键：确认登录态真的写进去了，否则跳转首页会被路由守卫立刻踢回来
      const saved = KY.Store.getUser();
      if (!saved || saved.username !== name) {
        return { ok: false, error: '登录状态保存失败，请检查浏览器的隐私/存储设置' };
      }

      return { ok: true, persistent: KY.Store.isPersistent() };
    },

    logout() {
      KY.Store.clearUser();
    },

    currentUser() {
      return KY.Store.getUser();
    },

    isLoggedIn() {
      const user = KY.Store.getUser();
      return !!(user && user.username);
    },

    /** 页面入口处调用：未登录直接踢回登录页，返回是否通过 */
    require() {
      if (this.isLoggedIn()) return true;
      KY.Router.go('/');
      return false;
    },
  };

  KY.Auth = Auth;
})(window.KY);
