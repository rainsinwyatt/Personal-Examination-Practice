/**
 * home.js —— 首页：继续练习、本周学习、四科入口、最近练习
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  const pad = (n) => String(n).padStart(2, '0');
  const WEEK = ['日', '一', '二', '三', '四', '五', '六'];

  class HomePage {
    render() {
      if (!KY.Auth.require()) return;

      const subjects = Data.subjects().filter((s) => !s.examOnly);
      const summary = KY.Results.summary();
      const recent = KY.Results.recent(4);
      const draft = KY.Store.getDraftSessions().slice(0, 1)[0];
      const wrongCount = KY.Store.getWrongList().filter((item) => !item.mastered).length;
      const week = this.weekStats();
      const now = new Date();

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: 'home',
        content: `
          <section class="home">
            <header class="home__intro">
              <div class="home__date">${U.esc(this.dateLine(now))}</div>
              <h1>今天，继续向前一点。</h1>
              <p>复习不必赶进度，保持自己的节奏就好。</p>
            </header>

            <div class="home__grid">
              <div class="home__main">
                ${this.continueCard(draft, subjects)}
                <div class="home__subjects-head">
                  <h2>按科目继续</h2>
                  <a class="quiet-link" href="#/banks/pedagogy">查看全部题库 <span>→</span></a>
                </div>
                <div class="subject-grid" id="home-subjects">
                  ${subjects.map((subject) => this.subjectCard(subject)).join('')}
                </div>
                <div class="home__note">
                  <span>单选 · 多选 · 判断</span>
                  <span>所有学习记录仅保存在当前浏览器</span>
                </div>
              </div>

              <aside class="home__aside">
                ${this.weekCard(week)}
                ${this.recentCard(recent, summary)}
                <div class="tip-card">
                  <div class="tip-card__title">复习提示</div>
                  <p>${wrongCount ? `还有 ${wrongCount} 道错题待掌握，先把它们重做一遍。` : '从薄弱章节开始，今天做少一点也可以。'}</p>
                </div>
                <div class="saved-line"><span class="saved-dot"></span>进度已保存</div>
              </aside>
            </div>
          </section>
        `,
      });

      this.bind();
    }

    dateLine(date) {
      const weekday = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'][date.getDay()];
      const month = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'][date.getMonth()];
      return `${weekday} · ${month} ${pad(date.getDate())}`;
    }

    weekStats() {
      const results = KY.Store.getResults();
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      start.setDate(start.getDate() - 6);
      const days = [];
      for (let i = 0; i < 7; i += 1) {
        const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
        days.push({ label: WEEK[d.getDay()], minutes: 0, date: d });
      }
      results.forEach((r) => {
        const t = new Date(r.createdAt || 0);
        const idx = days.findIndex((d) => d.date.toDateString() === t.toDateString());
        if (idx >= 0) days[idx].minutes += Math.round((r.timeSpent || 0) / 60);
      });
      const total = days.reduce((sum, d) => sum + d.minutes, 0);
      const max = Math.max(30, ...days.map((d) => d.minutes));
      return { days, total, max };
    }

    continueCard(draft, subjects) {
      if (!draft) {
        const subject = subjects[0];
        return `
          <div class="continue-card continue-card--empty">
            <div class="continue-card__eyebrow">开始今天的练习</div>
            <div class="continue-card__head">
              <div>
                <h2>${U.esc(subject.name)}</h2>
                <p>${(subject.banks && subject.banks[0] ? subject.banks[0].chapterList.length : 0)} 章 · ${subject.questionCount} 道练习题</p>
              </div>
              <a class="btn btn--primary" href="#/banks/${subject.id}">开始练习 <span>→</span></a>
            </div>
            <div class="continue-card__foot">
              <span class="dim">还没有未完成的练习，选一门科目开始即可。</span>
            </div>
          </div>`;
      }
      const total = draft.questionIds.length;
      const answered = Object.keys(draft.answers || {}).length;
      const percent = total ? Math.round((answered / total) * 100) : 0;
      const isExam = /^exam/.test(draft.type || '');
      return `
        <div class="continue-card">
          <div class="continue-card__eyebrow">继续上次${isExam ? '考试' : '练习'}</div>
          <div class="continue-card__head">
            <div>
              <h2>${U.esc((draft.title || '练习').split('·')[0].trim())}</h2>
              <p>${U.esc(draft.title)}</p>
            </div>
          </div>
          <div class="continue-card__meta">上次练习 · ${U.fmtDate(draft.startTime)}</div>
          <div class="continue-card__progress">
            <span>已完成 ${answered} / ${total} 题</span>
            <span class="continue-card__bar"><i style="width:${percent}%"></i></span>
            <strong>${percent}%</strong>
          </div>
          <div class="continue-card__foot">
            <a class="btn btn--primary" data-resume="${draft.id}" data-exam="${isExam ? '1' : ''}" href="javascript:void(0)">继续练习 <span>→</span></a>
          </div>
        </div>`;
    }

    subjectCard(subject) {
      const qs = Data.questionsOfSubject(subject.id);
      const count = (type) => qs.filter((q) => q.type === type).length;
      const chapters = subject.banks && subject.banks[0] ? subject.banks[0].chapterList.length : 0;
      return `
        <a class="subject-card" href="#/banks/${subject.id}">
          <div class="subject-card__top">
            <span class="subject-card__mark" style="background:${subject.color}1f;color:${subject.color}">${U.esc(subject.icon || subject.short.slice(0, 1))}</span>
            <div>
              <h3>${U.esc(subject.name)}</h3>
              <p>${chapters} 章 · ${subject.questionCount} 道练习题</p>
            </div>
          </div>
          <div class="subject-card__types">
            <span>单选 <strong>${count('single')}</strong></span>
            <span>多选 <strong>${count('multiple')}</strong></span>
            <span>判断 <strong>${count('judge')}</strong></span>
          </div>
          <div class="subject-card__link">浏览章节 <span>→</span></div>
        </a>`;
    }

    weekCard(week) {
      const hours = Math.floor(week.total / 60);
      const minutes = week.total % 60;
      return `
        <div class="week-card">
          <div class="week-card__head">
            <h3>本周学习</h3>
            <span>循序渐进，保持稳定</span>
          </div>
          <div class="week-card__time"><strong>${hours}</strong><span>小时</span><strong>${pad(minutes)}</strong><span>分</span></div>
          <div class="week-card__caption">本周累计学习时间</div>
          <div class="week-bars">
            ${week.days
              .map((d) => {
                const h = Math.max(6, Math.round((d.minutes / week.max) * 62));
                return `<div class="week-bar"><i style="height:${h}px"></i><span>${d.label}</span></div>`;
              })
              .join('')}
          </div>
        </div>`;
    }

    recentCard(recent, summary) {
      return `
        <div class="recent-card">
          <div class="recent-card__head">
            <h3>最近练习</h3>
            <span>回到熟悉的地方，接着复习</span>
          </div>
          <div class="recent-card__list" id="recent-list">
            ${
              recent.length
                ? recent
                    .map((r) => {
                      const subject = Data.getSubject(r.subjectId);
                      return `<a class="recent-item" href="#/result/${r.sessionId}">
                        <span class="recent-item__mark" style="background:${subject ? subject.color : '#657566'}1f;color:${subject ? subject.color : '#657566'}">${subject ? U.esc(subject.short.slice(0, 1)) : '题'}</span>
                        <span class="recent-item__main">
                          <strong>${U.esc(r.title)}</strong>
                          <em>${U.fmtDate(r.createdAt)} · ${r.correctCount}/${r.totalQuestions} 题</em>
                        </span>
                        <span class="recent-item__go">继续</span>
                      </a>`;
                    })
                    .join('')
                : `<div class="recent-empty">还没有练习记录，先从一门科目开始。</div>`
            }
          </div>
        </div>`;
    }

    bind() {
      const btn = document.querySelector('[data-resume]');
      if (btn) {
        btn.addEventListener('click', () => {
          const prefix = btn.dataset.exam ? '/exam/' : '/practice/';
          KY.Router.go(`${prefix}${btn.dataset.resume}`);
        });
      }
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.Home = HomePage;
})(window.KY);
