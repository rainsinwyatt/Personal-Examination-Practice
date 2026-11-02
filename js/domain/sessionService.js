/**
 * sessionService.js —— 练习会话
 * 一次刷题 = 一条会话，记录题目范围、作答、标记与时间，刷新后可恢复。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Store = KY.Store;

  const Session = {
    /**
     * 新建会话
     * @param {{subjectId:string, bankId:string, chapterId?:string, kpIds?:string[],
     *          questionIds:string[], title:string, type?:string}} options
     */
    create(options) {
      const session = {
        id: U.uid('s'),
        type: options.type || 'practice',
        subjectId: options.subjectId,
        bankId: options.bankId,
        chapterId: options.chapterId || 'all',
        kpIds: options.kpIds || [],
        title: options.title || '练习',
        questionIds: (options.questionIds || []).slice(),
        answers: {},
        flags: {},
        startTime: new Date().toISOString(),
        endTime: null,
        submitted: false,
      };

      // 模拟考试才有：限时与卷面总分
      if (options.durationSec) session.durationSec = options.durationSec;
      if (options.totalPoints) session.totalPoints = options.totalPoints;
      if (options.sections) session.sections = options.sections;

      Store.saveSession(session);
      return session;
    },

    get(id) {
      return Store.getSession(id);
    },

    save(session) {
      Store.saveSession(session);
      return session;
    },

    /** 题库撤题后续做旧草稿：跳过已撤题，进度和卷面按有效题重算。历史成绩不变。 */
    reconcileQuestions(session) {
      if (!session || session.submitted) return 0;
      const oldIds = session.questionIds || [];
      const questions = KY.Data.questionsByIds(oldIds);
      if (questions.length === oldIds.length) return 0;
      const currentId = oldIds[session.currentIndex || 0];
      const valid = new Set(questions.map(q => q.id));
      session.questionIds = questions.map(q => q.id);
      session.answers = Object.fromEntries(Object.entries(session.answers || {}).filter(([id]) => valid.has(id)));
      session.flags = Object.fromEntries(Object.entries(session.flags || {}).filter(([id]) => valid.has(id)));
      const current = session.questionIds.indexOf(currentId);
      session.currentIndex = current >= 0 ? current : Math.max(0, Math.min(session.currentIndex || 0, questions.length - 1));
      if (/^exam/.test(session.type || '')) {
        session.totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
        (session.sections || []).forEach(section => {
          const picked = questions.filter(q => q.type === section.type);
          section.count = picked.length;
          section.points = picked.reduce((sum, q) => sum + q.points, 0);
        });
      }
      this.save(session);
      return oldIds.length - questions.length;
    },

    /** 记录作答（多选传数组） */
    setAnswer(session, questionId, answer) {
      session.answers[questionId] = answer;
      this.save(session);
    },

    /** 标记/取消标记某题 */
    toggleFlag(session, questionId) {
      if (session.flags[questionId]) {
        delete session.flags[questionId];
      } else {
        session.flags[questionId] = true;
      }
      this.save(session);
      return !!session.flags[questionId];
    },

    /** 已作答题数 */
    answeredCount(session) {
      return Object.keys(session.answers || {}).filter((key) => {
        const value = session.answers[key];
        if (Array.isArray(value)) return value.length > 0;
        return value !== null && value !== undefined && String(value).trim() !== '';
      }).length;
    },
  };

  KY.Session = Session;
})(window.KY);
