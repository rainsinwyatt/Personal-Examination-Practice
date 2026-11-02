/**
 * grader.js —— 判分
 * 客观题（单选/多选/判断/填空）按答案比对；简答题按采分点命中比例给参考分。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  /** 归一化：去空格、全角转半角、去常见标点、统一小写 */
  function normalize(value) {
    if (value === null || value === undefined) return '';
    let text = String(value);
    // 全角字符 → 半角
    text = text.replace(/[\uFF01-\uFF5E]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
    );
    text = text.replace(/\u3000/g, ' ');
    return text
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[，。；：、,.;:!?！？"'“”‘’（）()《》【】\[\]<>·—\-_/\\]/g, '');
  }

  /** 判断是否算"未作答" */
  function isEmpty(question, answer) {
    if (question.type === 'multiple') {
      return !Array.isArray(answer) || answer.length === 0;
    }
    if (question.type === 'blank' || question.type === 'short') {
      return !answer || !String(answer).trim();
    }
    return !answer;
  }

  const Grader = {
    normalize,

    /**
     * 判一道题
     * @returns {{status:string, earned:number, points:number, ratio:number, hit:string[], miss:string[]}}
     * status: empty（未作答）/ correct / partial（简答部分命中）/ wrong
     */
    grade(question, answer) {
      const points = Number(question.points) || 0;

      if (isEmpty(question, answer)) {
        return {
          status: 'empty',
          earned: 0,
          points,
          ratio: 0,
          hit: [],
          miss: question.type === 'short' ? question.keywords.slice() : [],
        };
      }

      // 单选 / 判断
      if (question.type === 'single' || question.type === 'judge') {
        const ok = String(answer) === String(question.answer);
        return {
          status: ok ? 'correct' : 'wrong',
          earned: ok ? points : 0,
          points,
          ratio: ok ? 1 : 0,
          hit: [],
          miss: [],
        };
      }

      // 多选：必须完全一致，多选少选都算错
      if (question.type === 'multiple') {
        const user = (Array.isArray(answer) ? answer : [answer])
          .map(String)
          .sort()
          .join('');
        const correct = (question.answer || []).map(String).sort().join('');
        const ok = user === correct;
        return {
          status: ok ? 'correct' : 'wrong',
          earned: ok ? points : 0,
          points,
          ratio: ok ? 1 : 0,
          hit: [],
          miss: [],
        };
      }

      // 填空：任一可接受答案命中即对
      if (question.type === 'blank') {
        const user = normalize(answer);
        const ok = (question.answer || []).some((item) => normalize(item) === user);
        return {
          status: ok ? 'correct' : 'wrong',
          earned: ok ? points : 0,
          points,
          ratio: ok ? 1 : 0,
          hit: [],
          miss: [],
        };
      }

      // 简答：按采分点命中比例给分，0.5 分取整
      // 采分点支持同义写法：数组表示任一写法命中即可，例如 ["合格教师", "合格的教师"]
      if (question.type === 'short') {
        const text = normalize(answer);
        const keywords = question.keywords || [];

        const labelOf = (kw) => (Array.isArray(kw) ? kw[0] : kw);
        const isHit = (kw) => {
          const alternatives = Array.isArray(kw) ? kw : [kw];
          return alternatives.some((alt) => text.includes(normalize(alt)));
        };

        const hit = keywords.filter(isHit).map(labelOf);
        const miss = keywords.filter((kw) => !isHit(kw)).map(labelOf);
        const ratio = keywords.length ? hit.length / keywords.length : 0;
        // 命中率过低时不给分，避免"写几个字就得分"
        const earned = ratio < 0.2 ? 0 : Math.round(points * ratio * 2) / 2;
        let status = 'partial';
        if (earned <= 0) status = 'wrong';
        else if (earned >= points) status = 'correct';
        return { status, earned, points, ratio, hit, miss };
      }

      return { status: 'wrong', earned: 0, points, ratio: 0, hit: [], miss: [] };
    },

    /** 用户作答的可读文本，用于结果页展示 */
    displayAnswer(question, answer) {
      if (isEmpty(question, answer)) return '（未作答）';

      if (question.type === 'multiple') {
        return (Array.isArray(answer) ? answer : [answer]).join('、');
      }
      if (question.type === 'blank' || question.type === 'short') {
        return String(answer);
      }
      // 单选/判断显示「B. 选项内容」
      const option = (question.options || []).find((o) => o.key === answer);
      return option ? `${option.key}. ${option.text}` : String(answer);
    },

    /** 正确答案的可读文本 */
    displayCorrect(question) {
      if (question.type === 'blank') {
        return (question.answer || []).join(' / ');
      }
      if (question.type === 'short') {
        return question.answer;
      }
      if (question.type === 'multiple') {
        return (question.answer || [])
          .map((key) => {
            const option = (question.options || []).find((o) => o.key === key);
            return option ? `${option.key}. ${option.text}` : key;
          })
          .join('\n');
      }
      const option = (question.options || []).find((o) => o.key === question.answer);
      return option ? `${option.key}. ${option.text}` : String(question.answer);
    },
  };

  KY.Grader = Grader;
})(window.KY);
