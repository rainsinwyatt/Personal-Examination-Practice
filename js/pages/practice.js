/**
 * practice.js —— 刷题页
 * 左侧答题卡 + 右侧题面，作答实时保存，刷新后可继续。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  class PracticePage {
    constructor(params, query) {
      this.sessionId = params.sessionId;
      this.startIndex = Number((query && query.start) || 0);
      this.index = 0;
      this.questions = [];
      this.session = null;
      this.timer = null;
      this.submitting = false;
      this._saveTimerId = null;
    }

    render() {
      if (!KY.Auth.require()) return;

      const session = KY.Session.get(this.sessionId);
      if (!session) {
        KY.Toast.bad('练习不存在或已被清理');
        KY.Router.replace('/home');
        return;
      }
      if (session.submitted) {
        KY.Router.replace(`/result/${session.id}`);
        return;
      }

      const withdrawn = KY.Session.reconcileQuestions(session);
      if (withdrawn) KY.Toast.show(`题库更新：已跳过 ${withdrawn} 道撤下题目，按剩余有效题继续作答。`);
      this.session = session;
      this.isExam = /^exam/.test(session.type || '');
      this.isWrong = session.type === 'wrong';
      this.questions = Data.questionsByIds(session.questionIds);
      if (!this.questions.length) {
        KY.Toast.bad('该练习没有题目');
        KY.Router.replace('/home');
        return;
      }

      // 优先用地址里的 start，其次恢复上次停留的题号（刷新后不必重新找进度）
      const fromQuery = Number(this.startIndex) || 0;
      const saved = Number.isInteger(session.currentIndex) ? session.currentIndex : 0;
      this.index = U.clamp(fromQuery > 0 ? fromQuery : saved, 0, this.questions.length - 1);
      session.currentIndex = this.index;
      KY.Session.save(session);

      const subject = Data.getSubject(session.subjectId);
      const bank = Data.getBank(session.bankId);
      const chapter =
        session.chapterId && session.chapterId !== 'all'
          ? Data.getChapter(session.bankId, session.chapterId)
          : null;

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: this.isExam ? 'exam' : this.isWrong ? 'wrong' : subject ? subject.id : 'home',
        wide: true,
        content: `
          <div class="practice-top">
            <div>
              <div class="practice-top__title">${U.esc(session.title)}</div>
              <div class="practice-top__sub">
                ${this.isExam
                  ? `${this.questions.length} 题 · 满分 ${session.totalPoints || 0} 分 · ${Math.round((session.durationSec || 0) / 60)} 分钟`
                  : this.isWrong
                  ? `${this.questions.length} 题 · 来自错题本`
                  : `${bank ? U.esc(bank.name) : ''}${chapter ? ' · ' + U.esc(chapter.name) : ''}`}
              </div>
            </div>
            <div class="row gap-16">
              <div class="timer">
                <span class="timer__dot"></span>
                <span class="timer__label">${this.isExam ? '剩余' : '用时'}</span>
                <span id="timer" class="mono">${this.isExam ? '--:--' : '00:00'}</span>
              </div>
              <button class="btn btn--primary" id="submit-btn">交卷</button>
            </div>
          </div>

          <div class="split">
            <aside class="sticky-side">
              <details class="card nav-card answer-nav" id="answer-nav" open>
                <summary class="answer-nav__toggle">答题卡 · <span id="mobile-progress">0/${this.questions.length}</span></summary>
                <div class="nav-card__title">
                  <span>答题卡</span>
                  <span id="progress-text" class="mono">0/${this.questions.length}</span>
                </div>
                <div class="qnav" id="qnav"></div>
                <div class="legend">
                  <span><i class="answered"></i>已答</span>
                  <span><i class="flagged"></i>标记</span>
                  <span><i></i>未答</span>
                </div>
              </details>
            </aside>
            <main id="question-area"></main>
          </div>
        `,
      });

      this.renderNav();
      this.renderQuestion();
      this.mobileQuery=window.matchMedia('(max-width:600px)');
      const answerNav=document.getElementById('answer-nav');
      answerNav.open=!this.mobileQuery.matches;
      this.onMobileChange=(event)=>{answerNav.open=!event.matches;};
      this.mobileQuery.addEventListener('change',this.onMobileChange);
      this.startTimer();
      this.bind();
    }

    /* ---------------- 渲染 ---------------- */

    renderNav() {
      const nav = document.getElementById('qnav');
      const answered = KY.Session.answeredCount(this.session);

      nav.innerHTML = this.questions
        .map((question, index) => {
          const classes = ['qnav__btn'];
          if (index === this.index) classes.push('is-current');
          if (this.hasAnswer(question)) classes.push('is-answered');
          if (this.session.flags[question.id]) classes.push('is-flagged');
          return `<button class="${classes.join(' ')}" data-jump="${index}" title="第 ${index + 1} 题">${index + 1}</button>`;
        })
        .join('');

      const progress = document.getElementById('progress-text');
      if (progress) progress.textContent = `${answered}/${this.questions.length}`;
      const mobileProgress=document.getElementById('mobile-progress');
      if (mobileProgress) mobileProgress.textContent=`${answered}/${this.questions.length}`;
    }

    renderQuestion() {
      const question = this.questions[this.index];
      const area = document.getElementById('question-area');
      const answer = this.session.answers[question.id];
      const kpName = Data.kpName(question.bankId, question.kpId);
      const flagged = !!this.session.flags[question.id];

      area.innerHTML = `
        <div class="card q-card">
          <div class="q-card__top">
            <span class="q-card__index">第 ${String(this.index + 1).padStart(2, '0')} / ${String(this.questions.length).padStart(2, '0')} 题</span>
            <span class="badge">${Data.typeName(question.type)}</span>
            ${KY.UI.difficultyBadge(question.difficulty)}
            <span class="dim" style="font-size:12px">${this.pointsOf(question)} 分${this.isExam ? '' : ' · ' + U.esc(kpName)}</span>
          </div>

          <div class="q-card__stem" tabindex="-1">${U.text(question.stem)}</div>

          ${this.answerInput(question, answer)}

          <div class="q-actions">
            <button class="btn btn--ghost btn--sm" data-act="flag">
              ${flagged ? '★ 已标记' : '☆ 标记'}
            </button>
            <span class="q-actions__spacer"></span>
            <button class="btn btn--ghost" data-act="prev" ${this.index === 0 ? 'disabled' : ''}>上一题</button>
            <button class="btn btn--primary" data-act="next">
              ${this.index === this.questions.length - 1 ? '完成' : '下一题'}
            </button>
          </div>
        </div>`;
    }

    /** 按题型生成作答区 */
    answerInput(question, answer) {
      if (question.type === 'single' || question.type === 'judge' || question.type === 'multiple') {
        const isMultiple = question.type === 'multiple';
        return `
          <div class="options" role="${isMultiple ? 'group' : 'radiogroup'}">
            ${question.options
              .map((option) => {
                const checked = isMultiple
                  ? Array.isArray(answer) && answer.includes(option.key)
                  : answer === option.key;
                return `
                  <label class="option${checked ? ' is-checked' : ''}" data-key="${option.key}">
                    <input type="${isMultiple ? 'checkbox' : 'radio'}"
                           name="answer-${question.id}"
                           value="${option.key}"
                           ${checked ? 'checked' : ''} />
                    <span class="option__key">${option.key}</span>
                    <span class="option__text">${U.esc(option.text)}</span>
                  </label>`;
              })
              .join('')}
          </div>
          <div class="answer-area__hint mt-12 dim" style="font-size:12px">
            ${isMultiple ? '多选题：全部选对才得分' : '选择你认为正确的选项'}
          </div>`;
      }

      if (question.type === 'blank') {
        return `
          <div class="answer-area">
            <div class="answer-area__hint">请在下方填写答案，系统会忽略空格与标点差异</div>
            <input class="input blank-input" id="blank-input" type="text"
                   placeholder="输入答案" value="${U.esc(answer || '')}" autocomplete="off" />
          </div>`;
      }

      // 简答题
      const text = answer || '';
      return `
        <div class="answer-area">
          <div class="answer-area__hint">主观题：按采分点给参考分，交卷后可对照参考答案自评</div>
          <textarea class="input input--area" id="short-input"
                    placeholder="请分点作答，写清关键概念…">${U.esc(text)}</textarea>
          <div class="dim mt-8" style="font-size:12px"><span id="short-count">${text.length}</span> 字</div>
        </div>`;
    }

    /* ---------------- 交互 ---------------- */

    hasAnswer(question) {
      const value = this.session.answers[question.id];
      if (Array.isArray(value)) return value.length > 0;
      return value !== undefined && value !== null && String(value).trim() !== '';
    }

    setAnswer(answer) {
      const question = this.questions[this.index];
      this.session.answers[question.id] = answer;
      this.saveDebounced();
      this.renderNav();
      this.updateOptionState();
    }

    pointsOf(question) {
      if (this.isExam) {
        const subject = Data.getSubject(this.session.subjectId);
        const section = subject && subject.paperStructure && subject.paperStructure.sections.find((s) => s.type === question.type);
        if (section && section.points != null) return section.points;
      }
      return question.points;
    }

    updateOptionState() {
      const question = this.questions[this.index];
      const answer = this.session.answers[question.id];
      U.$$('#question-area .option').forEach((label) => {
        const key = label.dataset.key;
        const on = Array.isArray(answer) ? answer.includes(key) : answer === key;
        label.classList.toggle('is-checked', on);
      });
    }

    saveDebounced() {
      clearTimeout(this._saveTimerId);
      this._saveTimerId = setTimeout(() => {
        this._saveTimerId = null;
        KY.Session.save(this.session);
      }, 250);
    }

    /** 立即落盘（刷新/关闭页面、路由销毁时调用） */
    flushSave() {
      if (this._saveTimerId) {
        clearTimeout(this._saveTimerId);
        this._saveTimerId = null;
      }
      if (this.session && !this.session.submitted) {
        KY.Session.save(this.session);
      }
    }

    goTo(index) {
      this.index = U.clamp(index, 0, this.questions.length - 1);
      this.session.currentIndex = this.index;
      KY.Session.save(this.session);
      this.renderNav();
      this.renderQuestion();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      const stem = document.querySelector('#question-area .q-card__stem');
      if (stem) stem.focus({ preventScroll: true });
    }

    async submit(force) {
      // 提交锁：连点两次、或「超时自动交卷」撞上已打开的手动确认框时，只走一次流程
      if (!this.session || this.session.submitted || this.submitting) return;
      this.submitting = true;

      try {
        await this._submitFlow(force);
      } finally {
        this.submitting = false;
      }
    }

    async _submitFlow(force) {
      if (this.session.submitted) return;
      const unanswered = this.questions.filter((q) => !this.hasAnswer(q));

      if (!force && unanswered.length) {
        const numbers = unanswered
          .map((q) => this.questions.indexOf(q) + 1)
          .slice(0, 12)
          .join('、');
        const more = unanswered.length > 12 ? ' 等' : '';
        const ok = await KY.Modal.confirm({
          title: `还有 ${unanswered.length} 道题未作答`,
          body: `第 ${numbers}${more} 题尚未作答。确定现在交卷吗？`,
          okText: '仍然交卷',
          cancelText: '继续作答',
          danger: true,
        });
        if (!ok) return;
      }

      // 确认框等待期间可能已被自动交卷或其它入口提交
      if (this.session.submitted) return;

      this.flushSave();
      this.session.endTime = new Date().toISOString();
      this.session.submitted = true;
      KY.Session.save(this.session);
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      const result = KY.Results.submit(this.session);
      KY.Toast.ok(this.isExam ? `交卷成功，得分 ${result.score}` : `练习完成，得分 ${result.score}`);
      KY.Router.go(`/result/${this.session.id}`);
    }

    bind() {
      const area = document.getElementById('question-area');

      // 选项点击：交给原生 input 的 change，避免重复触发
      area.addEventListener('change', (event) => {
        const input = event.target;
        if (input.type === 'radio') {
          this.setAnswer(input.value);
        } else if (input.type === 'checkbox') {
          const checked = U.$$('#question-area input[type="checkbox"]:checked').map((el) => el.value);
          this.setAnswer(checked);
        }
      });

      // 填空 / 简答输入
      area.addEventListener('input', (event) => {
        const target = event.target;
        if (target.id === 'short-input') {
          const count = document.getElementById('short-count');
          if (count) count.textContent = target.value.length;
        }
        if (target.id === 'blank-input' || target.id === 'short-input') {
          this.setAnswer(target.value);
        }
      });

      // 操作按钮
      area.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-act]');
        if (!btn) return;
        const act = btn.dataset.act;

        if (act === 'prev') this.goTo(this.index - 1);
        if (act === 'next') {
          if (this.index === this.questions.length - 1) {
            this.submit();
          } else {
            this.goTo(this.index + 1);
          }
        }
        if (act === 'flag') {
          const question = this.questions[this.index];
          const on = KY.Session.toggleFlag(this.session, question.id);
          KY.Toast.show(on ? '已标记' : '已取消标记');
          this.renderQuestion();
          this.renderNav();
        }
      });

      // 答题卡跳转
      const qnav = document.getElementById('qnav');
      qnav.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-jump]');
        if (!btn) return;
        this.goTo(Number(btn.dataset.jump));
        if (window.matchMedia('(max-width:600px)').matches) document.getElementById('answer-nav').open=false;
      });

      // 交卷
      document.getElementById('submit-btn').addEventListener('click', () => this.submit());

      // 离开页面前同步落盘：防抖还没触发就刷新，最后一次作答也不会丢
      window.addEventListener('beforeunload', this.onBeforeUnload = (event) => {
        if (!this.session || this.session.submitted) return;
        this.flushSave();
        event.preventDefault();
        event.returnValue = '';
      });

      // 移动端/切后台不一定触发 beforeunload，用 pagehide 兜底
      window.addEventListener('pagehide', this.onPageHide = () => this.flushSave());
    }

    startTimer() {
      const start = new Date(this.session.startTime).getTime();
      const deadline = start + (this.session.durationSec || 0) * 1000;

      const tick = () => {
        const el = document.getElementById('timer');
        if (!el) return;

        if (this.isExam) {
          const remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
          el.textContent = U.fmtTime(remaining);
          el.classList.toggle('is-warning', remaining > 300 && remaining <= 600);
          el.classList.toggle('is-danger', remaining <= 300);

          if (remaining <= 0 && !this.autoSubmitted) {
            this.autoSubmitted = true;
            if (this.timer) clearInterval(this.timer);
            KY.Toast.warn('考试时间到，已自动交卷');
            this.submit(true);
          }
          return;
        }

        el.textContent = U.fmtTime((Date.now() - start) / 1000);
      };

      tick();
      this.timer = setInterval(tick, 1000);
    }

    destroy() {
      if (this.mobileQuery && this.onMobileChange) this.mobileQuery.removeEventListener('change',this.onMobileChange);
      if (this.timer) clearInterval(this.timer);
      this.flushSave();
      if (this.onBeforeUnload) {
        window.removeEventListener('beforeunload', this.onBeforeUnload);
      }
      if (this.onPageHide) {
        window.removeEventListener('pagehide', this.onPageHide);
      }
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.Practice = PracticePage;
})(window.KY);
