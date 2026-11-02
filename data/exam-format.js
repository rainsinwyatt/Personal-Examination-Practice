/**
 * exam-format.js —— 按正式卷面精简题型（v1.24）
 *
 * 正式考试只考单选、多选、判断，因此加载时统一移除填空题和简答题，
 * 题库、练习与组卷都不再出现这两类题。
 */
(function (D) {
  'use strict';
  D.questions = D.questions.filter(function (q) {
    return q.type !== 'blank' && q.type !== 'short';
  });
})(window.KYData);
