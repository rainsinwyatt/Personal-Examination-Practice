/**
 * schema.js —— 题库录入格式
 *
 * 题库是纯 JS 数据，不经过网络请求，双击 index.html 也能用。
 * 所有题目由下面的构造器生成，字段统一，data/index.js 会做完整性校验。
 *
 * 题型：
 *   single   单选题（4 个选项，answer 为选项字母）
 *   multiple 多选题（4 个选项，answer 为字母数组）
 *   judge    判断题（固定"正确/错误"两个选项，answer 为 'A' 或 'B'）
 *   blank    填空题（answer 为可接受答案数组，比对时做归一化）
 *   short    简答题（主观题，按 keywords 采分点给参考分）
 */
window.KYData = window.KYData || {
  subjects: [],
  banks: [],
  questions: [],
};

(function (KYData) {
  'use strict';

  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function toOptions(list, questionId) {
    if (!Array.isArray(list)) throw new TypeError(questionId + '：选项必须是数组');
    return list.map((item, index) => {
      const key = LETTERS[index];
      const object = item !== null && typeof item === 'object' && !Array.isArray(item);
      const text = typeof item === 'string' ? item : object ? item.text : undefined;
      if (!key || (object && item.key !== undefined && item.key !== key)) {
        throw new TypeError(questionId + '：选项键与顺序不符，须核对答案映射');
      }
      if (typeof text !== 'string' || !text.trim() || text.includes('[object Object]')) {
        throw new TypeError(questionId + '：选项 ' + key + ' 缺少有效文字');
      }
      return { key, text };
    });
  }

  const Q = {
    /**
     * 单选题
     * @param {string} id 题号，形如 ped-001
     * @param {string} bankId 所属题库
     * @param {string} chapterId 所属章节
     * @param {string} kpId 主知识点
     * @param {string} stem 题干
     * @param {(string|{key?:string,text:string})[]} options 选项文本或选项对象
     * @param {string} answer 正确选项字母
     * @param {number} points 分值
     * @param {string} explanation 解析
     * @param {string} [difficulty] easy / medium / hard
     */
    single(id, bankId, chapterId, kpId, stem, options, answer, points, explanation, difficulty) {
      return {
        id,
        type: 'single',
        bankId,
        chapterId,
        kpId,
        stem,
        options: toOptions(options, id),
        answer,
        points,
        difficulty: difficulty || 'medium',
        explanation,
      };
    },

    /** 多选题：answer 传字母数组，如 ['A','C'] */
    multiple(id, bankId, chapterId, kpId, stem, options, answer, points, explanation, difficulty) {
      return {
        id,
        type: 'multiple',
        bankId,
        chapterId,
        kpId,
        stem,
        options: toOptions(options, id),
        answer: answer.slice().sort(),
        points,
        difficulty: difficulty || 'medium',
        explanation,
      };
    },

    /** 判断题：isTrue 为 true 表示"正确" */
    judge(id, bankId, chapterId, kpId, stem, isTrue, points, explanation, difficulty) {
      return {
        id,
        type: 'judge',
        bankId,
        chapterId,
        kpId,
        stem,
        options: [
          { key: 'A', text: '正确' },
          { key: 'B', text: '错误' },
        ],
        answer: isTrue ? 'A' : 'B',
        points,
        difficulty: difficulty || 'easy',
        explanation,
      };
    },

    /** 填空题：answers 传可接受答案数组 */
    blank(id, bankId, chapterId, kpId, stem, answers, points, explanation, difficulty) {
      return {
        id,
        type: 'blank',
        bankId,
        chapterId,
        kpId,
        stem,
        options: [],
        answer: answers.slice(),
        points,
        difficulty: difficulty || 'medium',
        explanation,
      };
    },

    /**
     * 简答题（主观题）
     * @param {string} reference 参考答案
     * @param {string[]} keywords 采分点，命中比例决定机评分
     */
    short(id, bankId, chapterId, kpId, stem, reference, keywords, points, explanation, difficulty) {
      return {
        id,
        type: 'short',
        bankId,
        chapterId,
        kpId,
        stem,
        options: [],
        answer: reference,
        keywords: keywords.slice(),
        points,
        difficulty: difficulty || 'hard',
        explanation,
      };
    },
  };

  /** 批量入题：addQ(q1, q2, ...) */
  window.addQ = function addQ() {
    for (let i = 0; i < arguments.length; i += 1) {
      KYData.questions.push(arguments[i]);
    }
  };

  window.Q = Q;
})(window.KYData);
