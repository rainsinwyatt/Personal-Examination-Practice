/**
 * paperService.js —— 模拟考试组卷
 *
 * 大测试：按试卷结构（大卷题量）抽题，整卷作答；
 * 小测试：每个板块取 40%（向上取整），时长同步按 40% 折算。
 *
 * 抽题规则：按题型分别抽样，同一份卷内不重复；某板块题量不足时降级取现有题量，
 * 并在返回值里带上 missing，入口页会提示实际题量。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const Data = KY.Data;

  const Papers = {
    /** 试卷结构配置 */
    config(subjectId) {
      const subject = Data.getSubject(subjectId);
      return subject ? subject.paperStructure : null;
    },

    /**
     * 生成一份卷子的题单（不落库）
     * @param {string} subjectId
     * @param {'large'|'small'} type
     */
    plan(subjectId, type) {
      const subject = Data.getSubject(subjectId);
      if (!subject || !subject.paperStructure) return null;

      const cfg = subject.paperStructure;
      const ratio = type === 'small' ? cfg.smallRatio || 0.4 : 1;

      // 综合卷跨多个学科取题；普通科目只取本学科
      const poolOf = (qtype) => {
        const ids = subject.combinedFrom || [subjectId];
        return ids.reduce((acc, id) => acc.concat(qtype ? Data.questionsOfSubject(id, qtype) : Data.questionsOfSubject(id)), []);
      };

      const questionIds = [];
      const sections = [];
      const missing = [];
      const used = new Set();
      let totalPoints = 0;

      // 组卷先为每个章节预留一道题，保证整卷覆盖全部章节；剩余名额再按题型补足，
      // 因此大小卷的题量、分值和题型结构都不变。
      const reservedByType = new Map();
      {
        const all = poolOf();
        const wants = {};
        cfg.sections.forEach((section) => {
          wants[section.type] = Math.max(1, Math.ceil(section.count * ratio));
        });
        const chapterIds = [...new Set(all.map((question) => question.chapterId))];
        const chapterOptions = chapterIds.map((chapterId) => ({
          chapterId,
          types: cfg.sections
            .map((section) => section.type)
            .filter((type) => wants[type] > 0 && all.some((question) => question.chapterId === chapterId && question.type === type)),
        }));
        chapterOptions.sort((a, b) => a.types.length - b.types.length);
        const remaining = { ...wants };
        const assignments = [];
        const assignChapters = (index) => {
          if (index === chapterOptions.length) return true;
          const current = chapterOptions[index];
          const choices = Data.sample(current.types, current.types.length)
            .filter((type) => remaining[type] > 0)
            .sort((a, b) => remaining[b] - remaining[a]);
          for (const type of choices) {
            remaining[type] -= 1;
            assignments.push({ chapterId: current.chapterId, type });
            if (assignChapters(index + 1)) return true;
            assignments.pop();
            remaining[type] += 1;
          }
          return false;
        };

        if (assignChapters(0)) {
          assignments.forEach(({ chapterId, type }) => {
            const candidates = all.filter((question) => question.chapterId === chapterId && question.type === type);
            const question = Data.sample(candidates, 1)[0];
            if (!reservedByType.has(type)) reservedByType.set(type, []);
            reservedByType.get(type).push(question);
            used.add(question.id);
          });
        }
      }

      cfg.sections.forEach((section) => {
        const want = Math.max(1, Math.ceil(section.count * ratio));
        const pool = poolOf(section.type);
        const reserved = reservedByType.get(section.type) || [];
        const available = pool.filter((question) => !used.has(question.id));
        const picked = reserved.concat(Data.sample(available, Math.min(Math.max(0, want - reserved.length), available.length)));

        if (picked.length < want) {
          missing.push({ name: section.name, want, got: picked.length });
        }

        picked.forEach((question) => {
          used.add(question.id);
          questionIds.push(question.id);
          totalPoints += section.points != null ? section.points : question.points;
        });

        sections.push({
          type: section.type,
          name: section.name,
          count: picked.length,
          want,
          points: section.points != null ? picked.length * section.points : picked.reduce((sum, q) => sum + q.points, 0),
        });
      });

      return {
        subjectId,
        type,
        label: type === 'small' ? '小测试' : '大测试',
        title: `${subject.name} · 模拟考试（${type === 'small' ? '小测试' : '大测试'}）`,
        questionIds,
        sections,
        missing,
        totalQuestions: questionIds.length,
        totalPoints,
        durationSec: Math.round(cfg.duration * ratio) * 60,
      };
    },

    /** 供入口页展示：只算题量与分值，不真正抽题 */
    preview(subjectId, type) {
      const subject = Data.getSubject(subjectId);
      if (!subject || !subject.paperStructure) return null;
      const cfg = subject.paperStructure;
      const ratio = type === 'small' ? cfg.smallRatio || 0.4 : 1;
      const poolOf = (qtype) => {
        const ids = subject.combinedFrom || [subjectId];
        return ids.reduce((acc, id) => acc.concat(qtype ? Data.questionsOfSubject(id, qtype) : Data.questionsOfSubject(id)), []);
      };

      let totalQuestions = 0;
      let totalPoints = 0;
      const sections = cfg.sections.map((section) => {
        const pool = poolOf(section.type);
        const count = Math.min(pool.length, Math.max(1, Math.ceil(section.count * ratio)));
        const unit = section.points != null ? section.points : (pool.length ? pool[0].points : 0);
        totalQuestions += count;
        totalPoints += count * unit;
        return { type: section.type, name: section.name, count, points: count * unit };
      });

      return {
        type,
        label: type === 'small' ? '小测试' : '大测试',
        sections,
        totalQuestions,
        totalPoints,
        durationSec: Math.round(cfg.duration * ratio) * 60,
      };
    },

    /** 开考：组卷 + 建会话 */
    start(subjectId, type) {
      const plan = this.plan(subjectId, type);
      if (!plan || !plan.questionIds.length) return null;

      return KY.Session.create({
        type: type === 'small' ? 'exam-small' : 'exam-large',
        subjectId,
        bankId: (Data.banksOf(subjectId)[0] || {}).id || null,
        title: plan.title,
        questionIds: plan.questionIds,
        sections: plan.sections,
        durationSec: plan.durationSec,
        totalPoints: plan.totalPoints,
      });
    },
  };

  KY.Papers = Papers;
})(window.KY);
