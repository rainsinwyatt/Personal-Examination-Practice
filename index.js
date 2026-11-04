/**
 * index.js —— 题库汇总、索引、完整性校验
 *
 * 页面永远通过 KY.Data（domain/questionService.js）访问数据，
 * 这里只负责把分散的 data/*.js 拼成可直接查询的结构。
 */
(function (KYData) {
  'use strict';

  const subjects = KYData.subjects;
  const banks = KYData.banks;
  const questions = KYData.questions;

  /* ---------------- 基础索引 ---------------- */
  const subjectById = {};
  const bankById = {};
  const questionById = {};

  subjects.forEach((s) => { subjectById[s.id] = s; });
  banks.forEach((b) => { bankById[b.id] = b; });

  // 录入时知识点 id 只在章节内唯一（k1、k2…），这里统一补成「章节-知识点」，
  // 避免不同章节的 k1 在索引里互相覆盖。
  banks.forEach((bank) => {
    (bank.chapters || []).forEach((chapter) => {
      (chapter.kps || []).forEach((kp) => {
        if (!kp.id.startsWith(`${chapter.id}-`)) {
          kp.id = `${chapter.id}-${kp.id}`;
        }
      });
    });
  });
  questions.forEach((q) => {
    if (!q.kpId.startsWith(`${q.chapterId}-`)) {
      q.kpId = `${q.chapterId}-${q.kpId}`;
    }
  });

  // 给每道题补上 subjectId，并统计归属
  questions.forEach((q) => {
    const bank = bankById[q.bankId];
    if (bank) q.subjectId = bank.subjectId;
    questionById[q.id] = q;
  });

  /* ---------------- 章节 / 知识点索引 ---------------- */
  // key 统一用 bankId::chapterId，避免不同题库的同名字段互相覆盖
  const chapterIndex = {};
  const kpIndex = {};

  banks.forEach((bank) => {
    bank.chapterList = (bank.chapters || []).map((chapter) => {
      const chapterKey = `${bank.id}::${chapter.id}`;
      const kpList = (chapter.kps || []).map((kp) => {
        const kpKey = `${bank.id}::${kp.id}`;
        const record = {
          id: kp.id,
          name: kp.name,
          bankId: bank.id,
          chapterId: chapter.id,
          subjectId: bank.subjectId,
          key: kpKey,
          questionCount: 0,
        };
        kpIndex[kpKey] = record;
        return record;
      });

      const record = {
        id: chapter.id,
        name: chapter.name,
        bankId: bank.id,
        subjectId: bank.subjectId,
        key: chapterKey,
        kps: kpList,
        questionCount: 0,
      };
      chapterIndex[chapterKey] = record;
      return record;
    });

    bank.questionCount = 0;
  });

  // 题目计数
  questions.forEach((q) => {
    const bank = bankById[q.bankId];
    if (bank) bank.questionCount += 1;

    const chapter = chapterIndex[`${q.bankId}::${q.chapterId}`];
    if (chapter) chapter.questionCount += 1;

    const kp = kpIndex[`${q.bankId}::${q.kpId}`];
    if (kp) kp.questionCount += 1;
  });

  // 学科题量
  subjects.forEach((subject) => {
    subject.banks = banks.filter((b) => b.subjectId === subject.id);
    subject.questionCount = subject.banks.reduce((sum, b) => sum + b.questionCount, 0);
  });

  /* ---------------- 对外暴露 ---------------- */
  KYData.index = {
    subjects,
    banks,
    questions,
    subjectById,
    bankById,
    questionById,
    chapterIndex,
    kpIndex,
    totalQuestions: questions.length,
  };

  /**
   * 数据自检：控制台执行 KYData.validate()，返回 [] 表示完整
   * 主要防止手写题库时出现：题号重复、答案不在选项里、章节写错等
   */
  KYData.validate = function validate() {
    const errors = [];
    const seenQ = new Set();
    const seenChapter = new Set();

    if (!subjects.length) errors.push('没有学科数据');

    subjects.forEach((s) => {
      if (!s.id || !s.name) errors.push(`学科字段缺失：${JSON.stringify(s)}`);
    });

    banks.forEach((b) => {
      if (!subjectById[b.subjectId]) errors.push(`题库 ${b.id} 的学科不存在：${b.subjectId}`);
      if (!b.chapters || !b.chapters.length) errors.push(`题库 ${b.id} 没有章节`);

      (b.chapters || []).forEach((c) => {
        const chapterKey = `${b.id}::${c.id}`;
        if (seenChapter.has(chapterKey)) errors.push(`章节重复：${chapterKey}`);
        seenChapter.add(chapterKey);
        if (!c.kps || !c.kps.length) errors.push(`章节 ${chapterKey} 没有知识点`);

        (c.kps || []).forEach((kp) => {
          if (!kp.id || !kp.name) errors.push(`知识点字段缺失：${chapterKey} / ${kp.id}`);
        });
      });
    });

    questions.forEach((q) => {
      const tag = `题目 ${q.id}`;
      if (seenQ.has(q.id)) errors.push(`题号重复：${q.id}`);
      seenQ.add(q.id);

      if (!bankById[q.bankId]) errors.push(`${tag} 的题库不存在：${q.bankId}`);
      if (!chapterIndex[`${q.bankId}::${q.chapterId}`]) {
        errors.push(`${tag} 的章节不存在：${q.bankId} / ${q.chapterId}`);
      }
      if (!kpIndex[`${q.bankId}::${q.kpId}`]) {
        errors.push(`${tag} 的知识点不存在：${q.bankId} / ${q.kpId}`);
      }
      if (!(q.points > 0)) errors.push(`${tag} 分值必须大于 0`);
      if (!q.stem) errors.push(`${tag} 缺少题干`);

      if (q.type === 'single' || q.type === 'multiple') {
        if (!Array.isArray(q.options)) {
          errors.push(tag + ' 选项必须是数组');
          return;
        }
        q.options.forEach((option, index) => {
          if (!option || typeof option !== 'object' ||
              typeof option.text !== 'string' || !option.text.trim() ||
              option.text.includes('[object Object]')) {
            errors.push(tag + ' 选项 ' + (index + 1) + ' 缺少有效文字');
          }
        });
        const letters = q.options.map((o) => o && o.key);
        if (new Set(letters).size !== letters.length) errors.push(tag + ' 选项键重复');
        if (letters.length < 2) errors.push(`${tag} 选项不足`);
        if (q.type === 'single') {
          if (typeof q.answer !== 'string' || !letters.includes(q.answer)) {
            errors.push(`${tag} 单选答案不在选项中：${q.answer}`);
          }
        } else {
          if (!Array.isArray(q.answer) || q.answer.length < 2) {
            errors.push(`${tag} 多选答案至少两个`);
          }
          (q.answer || []).forEach((a) => {
            if (!letters.includes(a)) errors.push(`${tag} 多选答案 ${a} 不在选项中`);
          });
        }
      }

      if (q.type === 'judge' && !['A', 'B'].includes(q.answer)) {
        errors.push(`${tag} 判断答案只能是 A（正确）或 B（错误）`);
      }

      if (q.type === 'blank') {
        if (!Array.isArray(q.answer) || !q.answer.length) errors.push(`${tag} 填空缺少答案`);
      }

      if (q.type === 'short') {
        if (!q.keywords || !q.keywords.length) errors.push(`${tag} 简答缺少采分点`);
        if (typeof q.answer !== 'string' || !q.answer.trim()) errors.push(`${tag} 简答缺少参考答案`);
      }
    });

    // 每科至少 20 题，避免出现"空科目"（综合卷跨科取题，单独校验）
    subjects.forEach((s) => {
      if (s.examOnly) return;
      if (s.questionCount < 20) errors.push(`学科 ${s.name} 题量过少：${s.questionCount}`);
    });

    return errors;
  };
})(window.KYData);
