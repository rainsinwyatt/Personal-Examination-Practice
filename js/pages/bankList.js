/**
 * bankList.js —— 某学科下的题库列表
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  /** 统计每个题库已练题数与正确题数（来自历史结果） */
  function practiceStats() {
    const map = {};
    KY.Store.getResults().forEach((result) => {
      (result.items || []).forEach((item) => {
        if (!map[item.bankId]) map[item.bankId] = { answered: 0, correct: 0 };
        map[item.bankId].answered += 1;
        if (item.status === 'correct') map[item.bankId].correct += 1;
      });
    });
    return map;
  }

  class BankListPage {
    constructor(params) {
      this.subjectId = params.subjectId;
    }

    render() {
      if (!KY.Auth.require()) return;

      const subject = Data.getSubject(this.subjectId);
      if (!subject) {
        KY.Router.replace('/home');
        return;
      }

      const banks = Data.banksOf(subject.id);
      const stat = Data.subjectStat(subject.id);
      const stats = practiceStats();

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: subject.id,
        content: `
          ${KY.UI.crumb([
            { label: '首页', href: '#/home' },
            { label: subject.name },
          ])}

          <div class="page-head">
            <div class="page-head__title">
              <h1>${U.esc(subject.name)}</h1>
              <p>${U.esc(subject.description)}</p>
            </div>
            <div class="row gap-20">
              ${KY.UI.stat(stat.questionCount, '题目')}
              ${KY.UI.stat(stat.chapterCount, '章节')}
              ${KY.UI.stat(stat.kpCount, '知识点')}
            </div>
          </div>

          <div class="grid ${banks.length > 1 ? 'grid--2' : ''}" id="bank-grid">
            ${banks.map((bank) => this.bankCard(bank, stats[bank.id])).join('')}
          </div>
        `,
      });

      this.bind();
    }

    bankCard(bank, stat) {
      const answered = stat ? stat.answered : 0;
      const correct = stat ? stat.correct : 0;
      const rate = answered ? Math.round((correct / answered) * 100) : 0;
      const chapters = bank.chapterList.length;
      const kps = bank.chapterList.reduce((sum, chapter) => sum + chapter.kps.length, 0);

      return `
        <div class="card card--hover bank-card" data-bank="${bank.id}">
          <div class="bank-card__top">
            <div>
              <div class="bank-card__name">${U.esc(bank.name)}</div>
              <div class="bank-card__desc">${U.esc(bank.intro)}</div>
            </div>
            <span class="badge badge--accent">${bank.questionCount} 题</span>
          </div>
          <div class="bank-card__meta">
            <span>章节 <b>${chapters}</b></span>
            <span>知识点 <b>${kps}</b></span>
            <span>已练 <b>${answered}</b> 题</span>
            <span>正确率 <b>${answered ? rate + '%' : '—'}</b></span>
          </div>
          <div class="mt-12">
            ${KY.UI.progressLine(
              answered ? `已练 ${answered} 题` : '尚未开始',
              bank.questionCount ? Math.min(100, Math.round((answered / bank.questionCount) * 100)) : 0
            )}
          </div>

          <div class="bank-card__chapters" style="grid-auto-flow:column;grid-template-rows:repeat(${Math.ceil(bank.chapterList.length / 2)}, auto)">
            ${bank.chapterList
              .map(
                (chapter) => `
                <button class="chapter-link" data-chapter="${chapter.id}" data-bank-id="${bank.id}">
                  <span>${U.esc(chapter.name)}</span>
                  <span>${chapter.questionCount}</span>
                </button>`
              )
              .join('')}
          </div>
        </div>`;
    }

    bind() {
      const grid = document.getElementById('bank-grid');
      if (!grid) return;
      grid.addEventListener('click', (event) => {
        // 章节直达优先
        const chapterBtn = event.target.closest('[data-chapter]');
        if (chapterBtn) {
          event.stopPropagation();
          KY.Router.go(`/questions/${chapterBtn.dataset.bankId}/${chapterBtn.dataset.chapter}`);
          return;
        }
        const card = event.target.closest('[data-bank]');
        if (!card) return;
        KY.Router.go(`/questions/${card.dataset.bank}/all`);
      });
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.BankList = BankListPage;
})(window.KY);
