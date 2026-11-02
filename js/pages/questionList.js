/**
 * questionList.js —— 题库详情 / 题目列表
 * 支持"章节 + 知识点"两级筛选，按当前筛选结果开始练习。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  class QuestionListPage {
    constructor(params, query) {
      this.bankId = params.bankId;
      this.initialChapter = params.chapterId || 'all';
      this.initialKp = (query && query.kp) || '';
      this.state = {
        chapterId: this.initialChapter,
        kpIds: this.initialKp ? [this.initialKp] : [],
      };
      this.bank = null;
      this.subject = null;
      this.questions = [];
    }

    render() {
      if (!KY.Auth.require()) return;

      this.bank = Data.getBank(this.bankId);
      if (!this.bank) {
        KY.Router.replace('/home');
        return;
      }
      this.subject = Data.getSubject(this.bank.subjectId);

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: this.subject.id,
        content: `
          ${KY.UI.crumb([
            { label: '首页', href: '#/home' },
            { label: this.subject.name, href: `#/banks/${this.subject.id}` },
            { label: this.bank.name },
          ])}

          <div class="page-head">
            <div class="page-head__title">
              <h1>${U.esc(this.bank.name)}</h1>
              <p>${U.esc(this.bank.intro)}</p>
            </div>
            <button class="btn btn--primary" id="start-btn">开始练习</button>
          </div>

          <div class="bank-toolbar">
            <div class="chapter-tabs" id="chapter-tabs"></div>
            <div class="dim" id="count-label" style="font-size:12.5px"></div>
          </div>

          <div class="card card--pad">
            <div class="row gap-8" style="flex-wrap:wrap" id="kp-chips"></div>
            <hr class="divider mt-12">
            <div id="question-rows" class="mt-8"></div>
          </div>
        `,
      });

      this.renderFilters();
      this.renderRows();
      this.bind();
    }

    /** 当前筛选后的题目 */
    currentQuestions() {
      return Data.questionsOf({
        bankId: this.bankId,
        chapterId: this.state.chapterId,
        kpIds: this.state.kpIds,
      });
    }

    renderFilters() {
      const chapters = Data.chaptersOf(this.bankId);
      const tabs = document.getElementById('chapter-tabs');
      const kpBox = document.getElementById('kp-chips');

      tabs.innerHTML = [
        `<button class="chapter-tab${this.state.chapterId === 'all' ? ' is-on' : ''}" data-chapter="all">全部章节</button>`,
        ...chapters.map(
          (chapter) =>
            `<button class="chapter-tab${this.state.chapterId === chapter.id ? ' is-on' : ''}" data-chapter="${chapter.id}">
               ${U.esc(chapter.name)}<span class="chapter-tab__count">${chapter.questionCount}</span>
             </button>`
        ),
      ].join('');

      const kps = Data.kpsOf(this.bankId, this.state.chapterId === 'all' ? '' : this.state.chapterId);
      kpBox.innerHTML = [
        `<button class="chip${this.state.kpIds.length ? '' : ' is-on'}" data-kp="">全部知识点</button>`,
        ...kps.map(
          (kp) =>
            `<button class="chip${this.state.kpIds.includes(kp.id) ? ' is-on' : ''}" data-kp="${kp.id}">
               ${U.esc(kp.name)} <span class="chip__count">${kp.questionCount}</span>
             </button>`
        ),
      ].join('');

      const total = this.currentQuestions().length;
      const label = document.getElementById('count-label');
      label.textContent = `当前范围 ${total} 题`;
    }

    renderRows() {
      const box = document.getElementById('question-rows');
      this.questions = this.currentQuestions();

      if (!this.questions.length) {
        box.innerHTML = KY.UI.empty('该范围暂无题目', '换一个章节或知识点试试', '·');
        return;
      }

      box.innerHTML = this.questions
        .map((question, index) => {
          const kpName = Data.kpName(question.bankId, question.kpId);
          return `
            <div class="q-row" data-q="${question.id}">
              <div class="q-row__no">${String(index + 1).padStart(2, '0')}</div>
              <div class="q-row__body">
                <div class="q-row__stem">${U.esc(question.stem)}</div>
                <div class="q-row__meta">
                  <span class="badge">${Data.typeName(question.type)}</span>
                  <span>${U.esc(kpName)}</span>
                  <span>${question.points} 分</span>
                </div>
              </div>
              <span class="dim">›</span>
            </div>`;
        })
        .join('');
    }

    /** 生成一个练习会话并跳转 */
    startPractice(startIndex) {
      if (!this.questions.length) {
        KY.Toast.warn('当前范围没有题目');
        return;
      }

      const chapter =
        this.state.chapterId === 'all'
          ? null
          : Data.getChapter(this.bankId, this.state.chapterId);

      const session = KY.Session.create({
        subjectId: this.subject.id,
        bankId: this.bankId,
        chapterId: this.state.chapterId,
        kpIds: this.state.kpIds.slice(),
        questionIds: this.questions.map((q) => q.id),
        title: [this.subject.short, chapter ? chapter.name : '全部章节'].join(' · '),
      });

      const suffix = startIndex > 0 ? `?start=${startIndex}` : '';
      KY.Router.go(`/practice/${session.id}${suffix}`);
    }

    bind() {
      const tabs = document.getElementById('chapter-tabs');
      const kps = document.getElementById('kp-chips');
      const rows = document.getElementById('question-rows');
      const startBtn = document.getElementById('start-btn');

      tabs.addEventListener('click', (event) => {
        const btn = event.target.closest('[data-chapter]');
        if (!btn) return;
        this.state.chapterId = btn.dataset.chapter;
        this.state.kpIds = [];
        this.renderFilters();
        this.renderRows();
      });

      kps.addEventListener('click', (event) => {
        const chip = event.target.closest('[data-kp]');
        if (!chip) return;
        const id = chip.dataset.kp;
        if (!id) {
          this.state.kpIds = [];
        } else if (this.state.kpIds.includes(id)) {
          this.state.kpIds = this.state.kpIds.filter((item) => item !== id);
        } else {
          this.state.kpIds.push(id);
        }
        this.renderFilters();
        this.renderRows();
      });

      rows.addEventListener('click', (event) => {
        const row = event.target.closest('[data-q]');
        if (!row) return;
        const index = this.questions.findIndex((q) => q.id === row.dataset.q);
        this.startPractice(index > 0 ? index : 0);
      });

      startBtn.addEventListener('click', () => this.startPractice(0));
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.QuestionList = QuestionListPage;
})(window.KY);
