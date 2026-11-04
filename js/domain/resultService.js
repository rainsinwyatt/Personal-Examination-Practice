/**
 * resultService.js —— 交卷后的结果统计
 * 一次会话 → 一份结果（含逐题、题型、知识点三个维度的分析），同时把错题收进错题本。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;
  const Grader = KY.Grader;
  const Store = KY.Store;

  const Results = {
    /** 该会话是否已经生成过结果 */
    forSession(sessionId) {
      return Store.getResultBySession(sessionId);
    },

    /** 自评后统一重算所有派生统计，保留原机评分供对照。 */
    recalculate(result) {
      const types = {}, kps = {};
      let earned=0, points=0, machine=0, correct=0, answered=0;
      result.items.forEach(item => {
        earned += item.earned; points += item.points;
        machine += item.machineEarned === undefined ? item.earned : item.machineEarned;
        if (item.status === 'correct') correct++;
        if (item.status !== 'empty') answered++;
        const key = `${item.bankId}::${item.kpId}`;
        if (!types[item.type]) types[item.type] = {type:item.type,total:0,correct:0,earned:0,points:0};
        if (!kps[key]) kps[key] = {bankId:item.bankId,kpId:item.kpId,name:Data.kpName(item.bankId,item.kpId),total:0,correct:0,earned:0,points:0};
        [types[item.type],kps[key]].forEach(row => {
          row.total++; row.earned+=item.earned; row.points+=item.points;
          if (item.status==='correct') row.correct++;
        });
      });
      result.totalQuestions=result.items.length; result.answeredCount=answered; result.correctCount=correct;
      result.rawScore=Math.round(earned*100)/100; result.totalPoints=points;
      result.score=points ? Math.round(earned/points*100) : 0;
      result.machineRawScore=Math.round(machine*10)/10;
      result.typeAnalysis=Object.values(types);
      result.kpAnalysis=Object.values(kps).map(row => Object.assign(row,{rate:row.total?Math.round(row.correct/row.total*100):0})).sort((a,b)=>a.rate-b.rate);
      return result;
    },

    selfGrade(sessionId, questionId, score) {
      const result=this.forSession(sessionId);
      const item=result && result.items.find(i=>i.questionId===questionId);
      if (!item || item.type!=='short' || item.status==='empty') throw new Error('只能对已作答的简答题自评');
      if (typeof score!=='number' || !Number.isFinite(score) || score<0 || score>item.points || !Number.isInteger(score*2)) {
        throw new Error(`请输入0至${item.points}之间的分数，步长为0.5分`);
      }
      if (item.machineEarned===undefined) { item.machineEarned=item.earned; item.machineStatus=item.status; }
      item.selfScore=score;
      // 机评与自评各50%，保留两位小数，避免0.25分被再次四舍五入吞掉。
      item.earned=Math.round((item.machineEarned+score)/2*100)/100;
      item.status=item.earned>=item.points?'correct':item.earned>0?'partial':'wrong';
      result.selfReviewedAt=new Date().toISOString();
      this.recalculate(result); Store.saveResult(result);
      return result;
    },

    clearSelfGrade(sessionId, questionId) {
      const result=this.forSession(sessionId);
      const item=result && result.items.find(i=>i.questionId===questionId);
      if (!item || item.machineEarned===undefined) return result;
      item.earned=item.machineEarned; item.status=item.machineStatus;
      delete item.selfScore; delete item.machineEarned; delete item.machineStatus;
      this.recalculate(result); Store.saveResult(result);
      return result;
    },

    /**
     * 生成结果对象（不落库）
     * @param {Object} session 练习会话
     */
    build(session) {
      const questions = Data.questionsByIds(session.questionIds);
      const items = [];
      const typeMap = {};
      const kpMap = {};

      let correctCount = 0;
      let answeredCount = 0;
      let earned = 0;
      let totalPoints = 0;

      // 正式卷面按板块给分（如单选 1 分、多选 1.5 分），覆盖题目自身的练习分值
      const subject = Data.getSubject(session.subjectId);
      const examPoints = {};
      if (/^exam/.test(session.type || '') && subject && subject.paperStructure) {
        subject.paperStructure.sections.forEach((section) => {
          if (section.points != null) examPoints[section.type] = section.points;
        });
      }

      questions.forEach((question) => {
        const answer = session.answers ? session.answers[question.id] : undefined;
        const points = examPoints[question.type] != null ? examPoints[question.type] : question.points;
        const graded = Grader.grade(Object.assign({}, question, { points }), answer);

        if (graded.status !== 'empty') answeredCount += 1;
        if (graded.status === 'correct') correctCount += 1;
        earned += graded.earned;
        totalPoints += graded.points;

        items.push({
          questionId: question.id,
          contentRevision: question.contentRevision || null,
          type: question.type,
          bankId: question.bankId,
          chapterId: question.chapterId,
          kpId: question.kpId,
          answer: answer === undefined ? null : answer,
          status: graded.status,
          earned: graded.earned,
          points: graded.points,
          hit: graded.hit,
          miss: graded.miss,
        });

        // 题型维度
        if (!typeMap[question.type]) {
          typeMap[question.type] = { type: question.type, total: 0, correct: 0, earned: 0, points: 0 };
        }
        const t = typeMap[question.type];
        t.total += 1;
        t.points += graded.points;
        t.earned += graded.earned;
        if (graded.status === 'correct') t.correct += 1;

        // 知识点维度：不同题库可能有同名 kpId，必须和 bankId 一起作为分组键
        const kpKey = `${question.bankId}::${question.kpId}`;
        if (!kpMap[kpKey]) {
          kpMap[kpKey] = {
            kpId: question.kpId,
            bankId: question.bankId,
            name: Data.kpName(question.bankId, question.kpId),
            total: 0,
            correct: 0,
            earned: 0,
            points: 0,
          };
        }
        const k = kpMap[kpKey];
        k.total += 1;
        k.points += graded.points;
        k.earned += graded.earned;
        if (graded.status === 'correct') k.correct += 1;
      });

      const start = session.startTime ? new Date(session.startTime).getTime() : Date.now();
      const end = session.endTime ? new Date(session.endTime).getTime() : Date.now();
      const timeSpent = Math.max(0, Math.round((end - start) / 1000));

      return {
        id: U.uid('result'),
        sessionId: session.id,
        subjectId: session.subjectId,
        bankId: session.bankId,
        chapterId: session.chapterId || 'all',
        mode: session.type || 'practice',
        title: session.title || '练习',
        totalQuestions: questions.length,
        answeredCount,
        correctCount,
        score: totalPoints ? Math.round((earned / totalPoints) * 100) : 0,
        rawScore: Math.round(earned * 10) / 10,
        totalPoints: Math.round(totalPoints * 10) / 10,
        timeSpent,
        items,
        typeAnalysis: Object.keys(typeMap).map((key) => typeMap[key]),
        kpAnalysis: Object.keys(kpMap)
          .map((key) => {
            const k = kpMap[key];
            return Object.assign({}, k, {
              rate: k.total ? Math.round((k.correct / k.total) * 100) : 0,
            });
          })
          .sort((a, b) => a.rate - b.rate), // 掌握最弱的排前面
        createdAt: new Date().toISOString(),
      };
    },

    /** 交卷：生成结果 + 保存 + 收错题 */
    submit(session) {
      // 幂等：同一会话只生成一份结果，避免重复交卷产生两份成绩/重复累计错题
      const existing = Store.getResultBySession(session.id);
      if (existing) return existing;

      const result = this.build(session);
      Store.saveResult(result);
      this.collectWrong(session, result);
      return result;
    },

    /** 把答错的客观题收进错题本（简答题只在完全没得分时收录） */
    collectWrong(session, result) {
      const list = Store.getWrongList();
      const now = new Date().toISOString();
      // 错题重做的会话：答对即视为掌握，答错则继续留在待掌握
      const isRedo = session.type === 'wrong';

      result.items.forEach((item) => {
        const index = list.findIndex((entry) => entry.questionId === item.questionId);

        if (item.status === 'wrong') {
          const question = Data.getQuestion(item.questionId);
          if (!question) return;

          if (index >= 0) {
            const existing = list[index];
            existing.attempts = (existing.attempts || 1) + 1;
            existing.lastAnswer = item.answer;
            existing.contentRevision = question.contentRevision || null;
            existing.lastAt = now;
            existing.mastered = false;
            delete existing.masteredAt;
          } else {
            list.push({
              questionId: item.questionId,
              subjectId: question.subjectId,
              bankId: question.bankId,
              chapterId: question.chapterId,
              kpId: question.kpId,
              lastAnswer: item.answer,
              contentRevision: question.contentRevision || null,
              attempts: 1,
              firstAt: now,
              lastAt: now,
              mastered: false,
            });
          }
          return;
        }

        // 重做答对：归入已掌握
        if (isRedo && item.status === 'correct' && index >= 0) {
          list[index].mastered = true;
          list[index].masteredAt = now;
          list[index].lastAt = now;
        }
      });

      Store.saveWrongList(list);
    },

    /** 首页概览：练习次数、平均得分率、累计答题量 */
    summary() {
      const results = Store.getResults();
      if (!results.length) {
        return { count: 0, avgScore: 0, answered: 0, correct: 0 };
      }
      // 累计答题只算真正作答的题；旧数据没有 answeredCount 时退回总题数
      const answered = results.reduce((sum, r) => {
        const value = typeof r.answeredCount === 'number' ? r.answeredCount : r.totalQuestions;
        return sum + value;
      }, 0);
      const correct = results.reduce((sum, r) => sum + r.correctCount, 0);
      const avgScore = Math.round(
        results.reduce((sum, r) => sum + r.score, 0) / results.length
      );
      return { count: results.length, avgScore, answered, correct };
    },

    /** 最近 N 条记录，首页列表用 */
    recent(limit) {
      return Store.getResults().slice(0, limit || 5);
    },

    /** 结果页标题用的范围描述 */
    scopeLabel(session) {
      const bank = Data.getBank(session.bankId);
      const subject = Data.getSubject(session.subjectId);
      const chapter =
        session.chapterId && session.chapterId !== 'all'
          ? Data.getChapter(session.bankId, session.chapterId)
          : null;
      return [
        subject ? subject.name : '',
        bank ? bank.name : '',
        chapter ? chapter.name : '',
      ]
        .filter(Boolean)
        .join(' · ');
    },

    /** 把秒数格式化成"x 分 y 秒" */
    durationText(seconds) {
      const s = Math.max(0, Math.round(seconds || 0));
      if (s < 1) return '不到 1 秒';
      return s >= 60 ? `${Math.floor(s / 60)} 分 ${s % 60} 秒` : `${s} 秒`;
    },

    /** 日期展示，交给 utils */
    dateText(iso) {
      return U.fmtDate(iso);
    },
  };

  KY.Results = Results;
})(window.KY);
