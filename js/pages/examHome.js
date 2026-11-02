/**
 * examHome.js —— 模拟考试入口
 * 大/小测试方案对比、未完成考试续考、历史考试记录。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  class ExamHomePage {
    constructor(params, query) {
      this.subjectId = (query && query.subject) || null;
    }

    render() {
      if (!KY.Auth.require()) return;

      const subjects = Data.subjects().filter((s) => ['pedagogy', 'psychology', 'comprehensive'].indexOf(s.id) >= 0);
      if (!this.subjectId || !subjects.some((s) => s.id === this.subjectId)) {
        this.subjectId = subjects[0].id;
      }
      const subject = Data.getSubject(this.subjectId);

      const drafts = KY.Store.getDraftSessions().filter((s) => /^exam/.test(s.type || ''));
      const records = KY.Store.getResults()
        .filter((r) => /^exam/.test(r.mode || ''))
        .slice(0, 6);

      const large = KY.Papers.preview(this.subjectId, 'large');
      const small = KY.Papers.preview(this.subjectId, 'small');

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: 'exam',
        content: `
          ${KY.UI.crumb([{ label: '首页', href: '#/home' }, { label: '模拟考试' }])}

          <div class="page-head">
            <div class="page-head__title">
              <h1>模拟考试</h1>
              <p>按正式卷面结构组卷：大测试整卷作答，小测试取 40% 题量与时长，交卷后统一出分与解析。</p>
            </div>
            <div class="row gap-20">
              ${KY.UI.stat(records.length, '已完成考试')}
              ${KY.UI.stat(drafts.length, '进行中')}
            </div>
          </div>

          <div class="subject-tabs" id="exam-subject-tabs">
            ${subjects
              .map(
                (item) => `
              <button class="tab${item.id === this.subjectId ? ' is-on' : ''}" data-subject="${item.id}">
                <span class="tab__dot" style="color:${item.color}"></span>
                ${U.esc(item.name)}
              </button>`
              )
              .join('')}
          </div>

          <div class="exam-grid" id="exam-plans">
            ${this.planCard(subject, 'large', large)}
            ${this.planCard(subject, 'small', small)}
          </div>

          ${drafts.length ? this.draftList(drafts) : ''}

          <div class="section-head">
            <h2>考试记录</h2>
            ${records.length ? `<span class="section-head__more">最近 ${records.length} 次</span>` : ''}
          </div>
          ${records.length ? this.recordList(records) : KY.UI.empty('还没有考试记录', '选一份卷子开始第一次模拟考试')}
        `,
      });

      this.bind();
    }

    planCard(subject, type, plan) {
      if (!plan) return '';
      const isLarge = type === 'large';
      return `
        <div class="card exam-card">
          <div class="exam-card__top">
            <div>
              <div class="exam-card__name">${isLarge ? '大测试' : '小测试'}</div>
              <div class="exam-card__desc">
                ${isLarge ? '完整卷面，覆盖全部板块，按正式考试时长限时' : '各板块取 40% 题量，适合碎片时间快速自测'}
              </div>
            </div>
            <span class="badge ${isLarge ? 'badge--accent' : ''}">${isLarge ? '整卷' : '40%'}</span>
          </div>

          <div class="exam-card__meta">
            <span>题量<b>${plan.totalQuestions}</b></span>
            <span>满分<b>${plan.totalPoints}</b></span>
            <span>时长<b>${Math.round(plan.durationSec / 60)} 分钟</b></span>
          </div>

          <div class="exam-card__sections">
            ${plan.sections
              .map(
                (section) =>
                  `<span class="chip">${U.esc(section.name)} <span class="chip__count">${section.count}</span></span>`
              )
              .join('')}
          </div>

          <div class="exam-card__foot">
            <span class="dim" style="font-size:12px">交卷后立即出分并生成解析</span>
            <button class="btn btn--primary" data-start="${type}">开始${isLarge ? '大测试' : '小测试'}</button>
          </div>
        </div>`;
    }

    draftList(drafts) {
      return `
        <div class="section-head">
          <h2>进行中的考试</h2>
        </div>
        <div class="card" id="exam-drafts">
          ${drafts
            .slice(0, 3)
            .map((session) => {
              const answered = Object.keys(session.answers || {}).length;
              return `
                <div class="recent-row">
                  <div class="recent-row__main">
                    <div class="recent-row__title">${U.esc(session.title)}</div>
                    <div class="recent-row__sub">已答 ${answered}/${session.questionIds.length} 题 · 开始于 ${U.fmtDate(session.startTime)}</div>
                  </div>
                  <button class="btn btn--soft btn--sm" data-resume="${session.id}">继续作答</button>
                </div>`;
            })
            .join('')}
        </div>`;
    }

    recordList(records) {
      return `
        <div class="card" id="exam-records">
          ${records
            .map((result) => {
              const tone = result.score >= 85 ? 'ok' : result.score >= 60 ? 'warn' : 'bad';
              return `
                <div class="recent-row" data-goto="${result.sessionId}" style="cursor:pointer">
                  <div class="recent-row__main">
                    <div class="recent-row__title">${U.esc(result.title)}</div>
                    <div class="recent-row__sub">${U.fmtDate(result.createdAt)} · ${result.correctCount}/${result.totalQuestions} 题 · 用时 ${KY.Results.durationText(result.timeSpent)}</div>
                  </div>
                  <span class="badge badge--${tone}">${result.score} 分</span>
                  <span class="dim">›</span>
                </div>`;
            })
            .join('')}
        </div>`;
    }

    bind() {
      const tabs = document.getElementById('exam-subject-tabs');
      tabs.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-subject]');
        if (!btn) return;
        this.subjectId = btn.dataset.subject;
        this.render();
      });

      const plans = document.getElementById('exam-plans');
      plans.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-start]');
        if (!btn) return;
        this.startExam(btn.dataset.start);
      });

      const records = document.getElementById('exam-records');
      if (records) {
        records.addEventListener('click', (event) => {
          const row = event.target.closest('[data-goto]');
          if (!row) return;
          KY.Router.go(`/result/${row.dataset.goto}`);
        });
      }

      const drafts = document.getElementById('exam-drafts');
      if (drafts) {
        drafts.addEventListener('click', (event) => {
          const btn = event.target.closest('[data-resume]');
          if (!btn) return;
          KY.Router.go(`/exam/${btn.dataset.resume}`);
        });
      }
    }

    startExam(type) {
      const session = KY.Papers.start(this.subjectId, type);
      if (!session) {
        KY.Toast.bad('组卷失败：题库题量不足');
        return;
      }
      KY.Router.go(`/exam/${session.id}`);
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.ExamHome = ExamHomePage;
})(window.KY);
