/**
 * result.js —— 结果分析页
 * 得分总览 + 题型得分 + 知识点掌握度 + 逐题解析。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  class ResultPage {
    constructor(params) {
      this.sessionId = params.sessionId;
      this.result = null;
    }

    render() {
      if (!KY.Auth.require()) return;

      const session = KY.Session.get(this.sessionId);

      // 未交卷不允许直接看结果，返回答题页（避免提前看答案 / 提前写成绩）
      if (session && !session.submitted) {
        KY.Toast.warn('这份练习还没有交卷');
        const prefix = /^exam/.test(session.type || '') ? '/exam/' : '/practice/';
        KY.Router.replace(`${prefix}${session.id}`);
        return;
      }

      let result = KY.Results.forSession(this.sessionId);
      // 容错：已交卷但结果丢失时补算一次
      if (!result && session && session.submitted) {
        result = KY.Results.submit(session);
      }
      if (!result) {
        KY.Toast.bad('没有找到这次练习的结果');
        KY.Router.replace('/home');
        return;
      }

      this.result = result;
      const isExam = /^exam/.test(result.mode || '');
      const isWrong = result.mode === 'wrong';
      const subject = Data.getSubject(result.subjectId);
      const tone = result.score >= 85 ? 'var(--ok)' : result.score >= 60 ? 'var(--accent)' : 'var(--bad)';

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: isExam ? 'exam' : isWrong ? 'wrong' : subject ? subject.id : 'home',
        content: `
          ${KY.UI.crumb([
            { label: '首页', href: '#/home' },
            { label: subject ? subject.name : '题库', href: `#/banks/${result.subjectId}` },
            { label: isExam ? '考试成绩' : isWrong ? '错题重做结果' : '结果分析' },
          ])}

          <div class="result-hero">
            <div class="score-ring" style="--p:${result.score};--ring-color:${tone}">
              <div class="score-ring__inner">
                <span class="score-ring__num">${result.score}</span>
                <span class="score-ring__unit">分</span>
              </div>
            </div>
            <div class="result-hero__main">
              <h1>
                ${isExam ? '考试完成' : isWrong ? '错题重做完成' : result.score >= 85 ? '掌握得不错' : result.score >= 60 ? '继续巩固' : '还需要加强'}
                ${isExam ? '<span class="badge badge--accent" style="vertical-align:middle;margin-left:8px">模拟考试</span>' : ''}
                ${isWrong ? '<span class="badge" style="vertical-align:middle;margin-left:8px">错题重做</span>' : ''}
              </h1>
              <p>${U.esc(result.title)} · ${U.fmtDate(result.createdAt)}</p>
              <div class="result-stats">
                ${KY.UI.stat(`${result.correctCount}/${result.totalQuestions}`, '答对题数')}
                ${KY.UI.stat(`${result.rawScore}/${result.totalPoints}`, '原始得分')}
                ${KY.UI.stat(KY.Results.durationText(result.timeSpent), '用时')}
                ${KY.UI.stat(`${result.answeredCount}/${result.totalQuestions}`, '已作答')}
              </div>
            </div>
          </div>

          <div class="grid grid--2 mt-16">
            ${this.typeCard(result)}
            ${this.kpCard(result)}
          </div>

          <div class="card mt-16">
            <div class="card__head">
              <h3>逐题解析</h3>
              <span class="dim" style="font-size:12.5px">共 ${result.totalQuestions} 题</span>
            </div>
            <div class="card__body" id="result-review">${this.reviewList(result)}</div>
          </div>

          <div class="row gap-10 mt-16">
            ${isExam
              ? '<button class="btn btn--primary" id="exam-btn">返回考试中心</button>'
              : isWrong
              ? '<button class="btn btn--primary" id="wrong-btn">返回错题本</button>'
              : '<button class="btn btn--primary" id="retry-btn">再练一次</button>'}
            <button class="btn btn--ghost" id="home-btn">返回首页</button>
          </div>
        `,
      });

      this.bind(session);
    }

    typeCard(result) {
      if (!result.typeAnalysis.length) {
        return `<div class="card card--pad">${KY.UI.empty('暂无题型数据')}</div>`;
      }
      return `
        <div class="card card--pad">
          <h3 class="mb-12">题型得分</h3>
          ${result.typeAnalysis
            .map((item) => {
              const percent = item.points ? Math.round((item.earned / item.points) * 100) : 0;
              return `
                <div class="mt-8">
                  ${KY.UI.progressLine(`${Data.typeName(item.type)} ${item.correct}/${item.total}`, percent, percent >= 70 ? 'ok' : percent >= 40 ? '' : 'bad')}
                </div>`;
            })
            .join('')}
        </div>`;
    }

    kpCard(result) {
      if (!result.kpAnalysis.length) {
        return `<div class="card card--pad">${KY.UI.empty('暂无知识点数据')}</div>`;
      }
      return `
        <div class="card card--pad">
          <h3 class="mb-12">知识点掌握度</h3>
          ${result.kpAnalysis
            .map(
              (item) => `
              <div class="kp-line">
                <span class="kp-line__name" title="${U.esc(item.name)}">${U.esc(item.name)}</span>
                <span class="progress"><span class="progress__fill${item.rate >= 70 ? ' progress__fill--ok' : item.rate >= 40 ? '' : ' progress__fill--bad'}" style="width:${item.rate}%"></span></span>
                <span class="kp-line__rate">${item.correct}/${item.total}</span>
              </div>`
            )
            .join('')}
        </div>`;
    }

    reviewList(result) {
      return result.items
        .map((item, index) => {
          const question = Data.getQuestion(item.questionId);
          if (!question) return `<div class="review"><div class="review__stem">第 ${index + 1} 题已从题库撤下，历史得分 ${U.esc(item.earned)}/${U.esc(item.points)} 分保留。</div></div>`;

          const statusBadge =
            item.status === 'correct'
              ? '<span class="badge badge--ok">正确</span>'
              : item.status === 'partial'
              ? '<span class="badge badge--warn">部分得分</span>'
              : item.status === 'empty'
              ? '<span class="badge">未作答</span>'
              : '<span class="badge badge--bad">错误</span>';

          const kpName = Data.kpName(question.bankId, question.kpId);
          const mine = KY.Grader.displayAnswer(question, item.answer);
          const correct = KY.Grader.displayCorrect(question);
          const revisionNotice = question.contentRevision && item.contentRevision !== question.contentRevision
            ? '<p class="dim mt-8">此题已完成内容复核，以下展示现行题目。历史作答与得分保留；题干或选项可能与作答时版本不同，建议重新练习。</p>'
            : '';

          const shortExtra =
            question.type === 'short'
              ? `<div class="mt-8 row gap-6" style="flex-wrap:wrap" aria-label="机评采分点">
                   ${(item.hit || [])
                     .map((kw) => `<span class="badge badge--ok">命中 · ${U.esc(kw)}</span>`)
                     .join('')}
                   ${(item.miss || [])
                     .map((kw) => `<span class="badge">未提 · ${U.esc(kw)}</span>`)
                     .join('')}
                 </div>`
              : '';

          return `
            <div class="review">
              <div class="review__head">
                ${statusBadge}
                <span class="review__no">第 ${String(index + 1).padStart(2, '0')} 题</span>
                <span class="badge">${Data.typeName(question.type)}</span>
                <span class="dim" style="font-size:12px">${U.esc(kpName)} · ${item.earned}/${item.points} 分</span>
              </div>

              <div class="review__stem">${U.text(question.stem)}</div>

              ${revisionNotice}
              <div class="review__answers">
                <div class="answer-box ${item.status === 'correct' ? 'answer-box--ok' : 'answer-box--bad'}">
                  <div class="answer-box__label">你的答案</div>
                  <div>${U.text(mine)}</div>
                </div>
                <div class="answer-box answer-box--ok">
                  <div class="answer-box__label">正确答案</div>
                  <div>${U.text(correct)}</div>
                </div>
              </div>

              ${shortExtra}
              ${question.type === 'short' && item.status !== 'empty' ? `
                <form class="self-grade mt-12" data-self-question="${question.id}">
                  <p class="dim">机评 ${item.machineEarned === undefined ? item.earned : item.machineEarned}/${item.points} 分；填写自评后，机评与自评各占50%。自评只调整成绩统计，错题本保留原作答记录。</p>
                  <div class="row gap-8 mt-8">
                    <label>自评分 <input class="input" type="number" name="score" aria-label="第${index+1}题自评分" min="0" max="${item.points}" step="0.5" required value="${item.selfScore === undefined ? '' : item.selfScore}"></label>
                    <button class="btn btn--soft btn--sm" type="submit">保存自评</button>
                    ${item.selfScore === undefined ? '' : `<button class="btn btn--ghost btn--sm" type="button" data-clear-self="${question.id}">恢复机评</button>`}
                  </div>
                  ${item.selfScore === undefined ? '' : `<p class="dim mt-8">自评 ${item.selfScore} 分 · 加权后 ${item.earned} 分</p>`}
                </form>` : ''}

              ${question.explanation ? `<div class="explain"><b>解析：</b>${U.text(question.explanation)}</div>` : ''}
              ${question.source ? `<div class="dim mt-8" style="font-size:11.5px">来源：${U.esc(question.source)}${/自编/.test(question.source) ? '' : '（原卷未附解析）'}</div>` : ''}
            </div>`;
        })
        .join('');
    }

    bind(session) {
      const review=document.getElementById('result-review');
      const refresh=()=>{ const y=window.scrollY; this.render(); window.scrollTo({top:y,behavior:'auto'}); };
      review.addEventListener('submit',event=>{
        const form=event.target.closest('[data-self-question]'); if (!form) return;
        event.preventDefault();
        try {
          const input=form.querySelector('[name="score"]');
          if (!input.value.trim()) throw new Error('请输入自评分');
          KY.Results.selfGrade(this.sessionId,form.dataset.selfQuestion,Number(input.value));
          refresh(); KY.Toast.ok('自评已保存，成绩统计已更新');
        } catch(err) { KY.Toast.bad(err.message); }
      });
      review.addEventListener('click',event=>{
        const button=event.target.closest('[data-clear-self]'); if (!button) return;
        KY.Results.clearSelfGrade(this.sessionId,button.dataset.clearSelf); refresh();
      });
      const homeBtn = document.getElementById('home-btn');
      const retryBtn = document.getElementById('retry-btn');
      const examBtn = document.getElementById('exam-btn');

      homeBtn.addEventListener('click', () => KY.Router.go('/home'));

      if (examBtn) {
        examBtn.addEventListener('click', () => KY.Router.go('/exam'));
        return;
      }

      const wrongBtn = document.getElementById('wrong-btn');
      if (wrongBtn) {
        wrongBtn.addEventListener('click', () => KY.Router.go('/wrongbook'));
        return;
      }

      retryBtn.addEventListener('click', () => {
        if (!session) {
          KY.Toast.warn('原始练习已不存在，请回到题库重新开始');
          return;
        }
        const next = KY.Session.create({
          subjectId: session.subjectId,
          bankId: session.bankId,
          chapterId: session.chapterId,
          kpIds: session.kpIds,
          questionIds: session.questionIds,
          title: session.title,
        });
        KY.Router.go(`/practice/${next.id}`);
      });
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.Result = ResultPage;
})(window.KY);
