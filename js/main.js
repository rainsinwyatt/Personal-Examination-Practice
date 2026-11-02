/**
 * main.js —— 启动入口
 * 注册路由、挂载全局事件、暴露自检方法。
 */
(function (KY) {
  'use strict';

  // 先探测存储：Safari 打开 file:// 时 localStorage 会被禁用，应用自动切内存模式
  const persistent = KY.Store.isPersistent();
  KY.Store.ensureSchema();
  KY.UI.bindGlobal();

  // 页面脚本缺失或运行时报错时，给出可见提示，避免"点了没反应"
  let reported = false;
  window.addEventListener('error', (event) => {
    console.error('[exam] 页面异常：', event.error || event.message);
    if (reported || !KY.Toast) return;
    reported = true;
    KY.Toast.bad('页面出现异常，请打开控制台查看详情');
  });
  window.addEventListener('unhandledrejection', (event) => {
    console.error('[exam] 未处理的异步异常：', event.reason);
  });

  KY.Router
    .add('/', KY.Pages.Login)
    .add('/home', KY.Pages.Home)
    .add('/banks/:subjectId', KY.Pages.BankList)
    .add('/questions/:bankId/:chapterId', KY.Pages.QuestionList)
    .add('/practice/:sessionId', KY.Pages.Practice)
    .add('/exam', KY.Pages.ExamHome)
    .add('/exam/:sessionId', KY.Pages.ExamPaper)
    .add('/wrongbook', KY.Pages.Wrongbook)
    .add('/result/:sessionId', KY.Pages.Result)
    .start();

  // 控制台自检：KY.validate() 返回空数组表示题库完整
  window.KY.validate = function validate() {
    if (!window.KYData || typeof window.KYData.validate !== 'function') {
      return ['题库未加载'];
    }
    return window.KYData.validate();
  };

  console.info(
    `[exam] 已启动 · 存储模式：${persistent ? 'localStorage' : '内存（临时，刷新后进度丢失）'} · 题库 ${window.KYData.index.totalQuestions} 题`
  );
})(window.KY);
