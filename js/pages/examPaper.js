/**
 * examPaper.js —— 考试作答页
 * 直接复用刷题页的布局与作答组件；倒计时、自动交卷由 session.type 触发。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  class ExamPaperPage extends KY.Pages.Practice {
    render() {
      const session = KY.Session.get(this.sessionId);

      if (!session || !/^exam/.test(session.type || '')) {
        KY.Toast.bad('考试不存在或已结束');
        KY.Router.replace('/exam');
        return;
      }

      super.render();
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.ExamPaper = ExamPaperPage;
})(window.KY);
