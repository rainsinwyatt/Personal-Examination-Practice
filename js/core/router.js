/**
 * router.js —— hash 路由
 * 路由表用 /a/:b 的形式声明，支持 ?query 参数。
 * 页面类约定：constructor(params, query) + render() + 可选 destroy()。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;

  class Router {
    constructor() {
      this.routes = [];
      this.page = null;
      this.currentHash = null;
      this.navigating = null;
      this.started = false;
      this.notFound = null;
    }

    /**
     * 注册路由
     * @param {string} pattern 形如 '/banks/:subjectId'
     * @param {Function} Page 页面类
     */
    add(pattern, Page) {
      const keys = [];
      const regexSource = pattern
        .split('/')
        .map((seg) => {
          if (seg.startsWith(':')) {
            keys.push(seg.slice(1));
            return '([^/]+)';
          }
          return seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        })
        .join('/');
      this.routes.push({
        pattern,
        Page,
        keys,
        regex: new RegExp(`^${regexSource}$`),
      });
      return this;
    }

    onNotFound(Page) {
      this.notFound = Page;
      return this;
    }

    /** 跳转（会写 hash，触发 hashchange） */
    go(path) {
      const target = path.startsWith('#') ? path.slice(1) : path;
      if (this.currentHash === target) {
        this.resolve(); // 同地址重复点击：强制重渲染
        return;
      }
      // 标记"正在导航"，hashchange 正常触发时由 resolve 清掉，避免重复渲染
      this.navigating = target;
      location.hash = target;

      // 兜底：个别浏览器/扩展可能吞掉 hashchange，等一拍后仍未渲染就手动解析
      setTimeout(() => {
        if (this.navigating === target) {
          this.navigating = null;
          this.resolve();
        }
      }, 80);
    }

    /** 替换当前地址，不产生历史记录（登录守卫用） */
    replace(path) {
      const target = path.startsWith('#') ? path.slice(1) : path;
      location.replace(`${location.pathname}${location.search}#${target}`);
      this.resolve();
    }

    start() {
      if (this.started) return;
      this.started = true;
      window.addEventListener('hashchange', () => this.resolve());
      this.resolve();
    }

    /** 解析当前 hash：路径 + 参数 + 查询串 */
    parse() {
      const raw = location.hash.slice(1) || '/';
      const qIndex = raw.indexOf('?');
      const path = qIndex >= 0 ? raw.slice(0, qIndex) : raw;
      const query = U.parseQuery(qIndex >= 0 ? raw.slice(qIndex) : '');
      return { path: path || '/', query };
    }

    match(path) {
      for (const route of this.routes) {
        const m = path.match(route.regex);
        if (!m) continue;
        const params = {};
        route.keys.forEach((key, i) => {
          params[key] = decodeURIComponent(m[i + 1]);
        });
        return { route, params };
      }
      return null;
    }

    resolve() {
      const { path, query } = this.parse();
      this.navigating = null;
      this.currentHash = location.hash.slice(1) || '/';

      // 登录守卫：除登录页外，一律要求登录
      if (path !== '/' && !KY.Auth.isLoggedIn()) {
        this.replace('/');
        return;
      }

      const matched = this.match(path);
      const Page = matched ? matched.route.Page : this.notFound;

      if (!Page) {
        this.renderFallback(path);
        return;
      }

      const params = matched ? matched.params : {};

      // 销毁上一个页面，释放定时器等资源
      if (this.page && typeof this.page.destroy === 'function') {
        try {
          this.page.destroy();
        } catch (err) {
          console.error('[router] 页面销毁异常：', err);
        }
      }

      this.page = new Page(params, query);
      document.getElementById('app').innerHTML = '';
      try {
        this.page.render();
      } catch (err) {
        console.error('[router] 页面渲染异常：', err);
        this.renderFallback(path, err);
        return;
      }

      if (KY.UI && KY.UI.syncSidebar) KY.UI.syncSidebar();
      window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
    }

    renderFallback(path, err) {
      const app = document.getElementById('app');
      app.innerHTML = `
        <div class="login">
          <div class="login__box" style="text-align:center">
            <div class="login__logo" style="margin:0 auto 14px">!</div>
            <h2>页面不存在</h2>
            <p class="muted mt-8">没有找到路由 <code>${U.esc(path)}</code></p>
            ${err ? `<p class="dim mt-8" style="font-size:12px">${U.esc(err.message)}</p>` : ''}
            <a class="btn btn--primary mt-20" href="#/home">回到首页</a>
          </div>
        </div>`;
    }
  }

  KY.Router = new Router();
})(window.KY);
