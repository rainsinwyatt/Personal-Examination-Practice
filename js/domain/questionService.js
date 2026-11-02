/**
 * questionService.js —— 题库查询
 * 页面不直接碰 KYData，统一走这里，方便以后换数据源。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const idx = window.KYData.index;

  const Data = {
    /** 全部学科 */
    subjects() {
      return idx.subjects;
    },

    getSubject(subjectId) {
      return idx.subjectById[subjectId] || null;
    },

    /** 某学科下的题库 */
    banksOf(subjectId) {
      return idx.banks.filter((bank) => bank.subjectId === subjectId);
    },

    getBank(bankId) {
      return idx.bankById[bankId] || null;
    },

    /** 某题库的章节（带题量） */
    chaptersOf(bankId) {
      const bank = this.getBank(bankId);
      return bank ? bank.chapterList : [];
    },

    getChapter(bankId, chapterId) {
      return idx.chapterIndex[`${bankId}::${chapterId}`] || null;
    },

    /** 知识点列表；传 chapterId 则限定在该章 */
    kpsOf(bankId, chapterId) {
      const chapters = this.chaptersOf(bankId);
      const list = chapterId
        ? chapters.filter((c) => c.id === chapterId)
        : chapters;
      return list.reduce((acc, chapter) => acc.concat(chapter.kps), []);
    },

    getKp(bankId, kpId) {
      return idx.kpIndex[`${bankId}::${kpId}`] || null;
    },

    kpName(bankId, kpId) {
      const kp = this.getKp(bankId, kpId);
      return kp ? kp.name : '未分类';
    },

    /**
     * 按范围取题
     * @param {{bankId: string, chapterId?: string, kpIds?: string[]}} scope
     */
    questionsOf(scope) {
      const { bankId, chapterId, kpIds } = scope || {};
      const kpSet = kpIds && kpIds.length ? new Set(kpIds) : null;
      return idx.questions.filter((q) => {
        if (q.bankId !== bankId) return false;
        if (chapterId && chapterId !== 'all' && q.chapterId !== chapterId) return false;
        if (kpSet && !kpSet.has(q.kpId)) return false;
        return true;
      });
    },

    /** 某学科（可按题型）的全部题目，组卷用 */
    questionsOfSubject(subjectId, type) {
      return idx.questions.filter((q) => {
        if (q.subjectId !== subjectId) return false;
        if (type && q.type !== type) return false;
        return true;
      });
    },

    getQuestion(id) {
      return idx.questionById[id] || null;
    },

    /** 按 id 列表取题，保持传入顺序 */
    questionsByIds(ids) {
      return (ids || []).map((id) => idx.questionById[id]).filter(Boolean);
    },

    /** 学科整体规模，首页展示用 */
    subjectStat(subjectId) {
      const subject = this.getSubject(subjectId);
      const banks = this.banksOf(subjectId);
      const chapters = banks.reduce((sum, b) => sum + b.chapterList.length, 0);
      const kps = banks.reduce(
        (sum, b) => sum + b.chapterList.reduce((s, c) => s + c.kps.length, 0),
        0
      );
      return {
        questionCount: subject ? subject.questionCount : 0,
        bankCount: banks.length,
        chapterCount: chapters,
        kpCount: kps,
      };
    },

    /** 洗牌后取前 n 道，P6 组卷会用到 */
    sample(list, n) {
      const copy = list.slice();
      for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = copy[i];
        copy[i] = copy[j];
        copy[j] = tmp;
      }
      return copy.slice(0, Math.min(n, copy.length));
    },

    /** 题型中文名 */
    typeName(type) {
      const map = {
        single: '单选题',
        multiple: '多选题',
        judge: '判断题',
        blank: '填空题',
        short: '简答题',
      };
      return map[type] || type;
    },
  };

  KY.Data = Data;
})(window.KY);
