/**
 * wrongbook.js —— 错题本
 *
 * 数据来自提交时自动收录的 gxjszg.wrong：
 *   - 待掌握：答错过的题，可单题/整科/全部重做；
 *   - 已掌握：重做答对后自动归入，也可手动标记或移回；
 *   - 重做会话的 type 为 'wrong'，交卷后由 resultService 负责更新掌握状态。
 */
window.KY = window.KY || {};

(function (KY) {
  'use strict';

  const U = KY.U;
  const Data = KY.Data;

  class WrongbookPage {
    constructor(params, query) {
      this.state = {
        subjectId: (query && query.subject) || 'all',
        status: (query && query.status) === 'mastered' ? 'mastered' : 'open',
        sort: 'recent',
      };
      this.items = [];
    }

    render() {
      if (!KY.Auth.require()) return;

      this.items = this.loadItems();
      const open = this.items.filter((item) => !item.mastered);
      const mastered = this.items.filter((item) => item.mastered);
      const attempts = this.items.reduce((sum, item) => sum + (item.attempts || 1), 0);

      const app = document.getElementById('app');
      app.innerHTML = KY.UI.page({
        active: 'wrong',
        content: `
          ${KY.UI.crumb([{ label: '首页', href: '#/home' }, { label: '错题本' }])}

          <div class="page-head">
            <div class="page-head__title">
              <h1>错题本</h1>
              <p>答错的客观题自动收录；重做答对后自动归入「已掌握」，也可以手动调整。</p>
            </div>
            <div class="row gap-20">
              ${KY.UI.stat(open.length, '待掌握')}
              ${KY.UI.stat(mastered.length, '已掌握')}
              ${KY.UI.stat(attempts, '累计错误次数')}
            </div>
          </div>

          <div class="bank-toolbar">
            <div class="row gap-8" style="flex-wrap:wrap" id="wrong-subjects"></div>
            <div class="row gap-8" style="flex-wrap:wrap">
              <div class="segmented" id="wrong-status">
                <button data-status="open" class="${this.state.status === 'open' ? 'is-on' : ''}">待掌握 ${open.length}</button>
                <button data-status="mastered" class="${this.state.status === 'mastered' ? 'is-on' : ''}">已掌握 ${mastered.length}</button>
              </div>
              <button class="btn btn--ghost btn--sm" id="sort-btn">${this.state.sort === 'recent' ? '按最近错误' : '按错误次数'}</button>
              <button class="btn btn--primary btn--sm" id="redo-all">重做全部</button>
              <button class="btn btn--ghost btn--sm" id="export-wrong">导出当前错题</button>
              <button class="btn btn--ghost btn--sm" id="print-wrong">打印当前错题</button>
            </div>
          </div>

          <div class="stack gap-12" id="wrong-body"></div>
        `,
      });

      this.renderSubjects(open, mastered);
      this.renderBody();
      this.bind();
    }

    /* ---------------- 数据 ---------------- */

    loadItems() {
      return KY.Store.getWrongList()
        .map((entry) => {
          const question = Data.getQuestion(entry.questionId);
          if (!question) return null;
          const subject = Data.getSubject(question.subjectId);
          const chapter = Data.getChapter(question.bankId, question.chapterId);
          return Object.assign({}, entry, {
            question,
            subject,
            chapterName: chapter ? chapter.name : '',
            kpName: Data.kpName(question.bankId, question.kpId),
          });
        })
        .filter(Boolean);
    }

    /** 当前筛选 + 排序后的列表 */
    visibleItems() {
      let list = this.items.filter((item) => {
        if (!!item.mastered !== (this.state.status === 'mastered')) return false;
        if (this.state.subjectId !== 'all' && item.question.subjectId !== this.state.subjectId) return false;
        return true;
      });

      list.sort((a, b) => {
        if (this.state.sort === 'attempts') {
          return (b.attempts || 1) - (a.attempts || 1);
        }
        return new Date(b.lastAt || 0) - new Date(a.lastAt || 0);
      });
      return list;
    }

    /* ---------------- 渲染 ---------------- */

    renderSubjects(open, mastered) {
      const box = document.getElementById('wrong-subjects');
      const all = this.items.length;
      const countOf = (id) => (this.state.status === 'open' ? open : mastered).filter((item) => item.question.subjectId === id).length;

      box.innerHTML = [
        `<button class="chip${this.state.subjectId === 'all' ? ' is-on' : ''}" data-subject="all">全部 <span class="chip__count">${all}</span></button>`,
        ...Data.subjects().map(
          (subject) =>
            `<button class="chip${this.state.subjectId === subject.id ? ' is-on' : ''}" data-subject="${subject.id}">
               ${U.esc(subject.name)} <span class="chip__count">${countOf(subject.id)}</span>
             </button>`
        ),
      ].join('');
    }

    renderBody() {
      const box = document.getElementById('wrong-body');
      const list = this.visibleItems();

      if (!this.items.length) {
        box.innerHTML = KY.UI.empty(
          '错题本还是空的',
          '做过练习、答错的客观题会自动出现在这里'
        ) + `<div style="text-align:center;margin-top:-24px"><a class="btn btn--primary" href="#/home">去刷题</a></div>`;
        return;
      }

      if (!list.length) {
        box.innerHTML = KY.UI.empty(
          this.state.status === 'open' ? '没有待掌握的错题' : '还没有已掌握的题目',
          this.state.status === 'open' ? '继续保持' : '重做答对后会自动归入这里'
        );
        return;
      }

      const grouped = U.groupBy(list, (item) => item.question.subjectId);
      box.innerHTML = Object.keys(grouped)
        .map((subjectId) => {
          const group = grouped[subjectId];
          const subject = group[0].subject;
          return `
            <div class="card">
              <div class="card__head">
                <div class="row gap-8">
                  <span class="tab__dot" style="color:${subject ? subject.color : '#888'}"></span>
                  <b>${U.esc(subject ? subject.name : '未分学科')}</b>
                  <span class="badge">${group.length} 题</span>
                </div>
                ${
                  this.state.status === 'open'
                    ? `<button class="btn btn--soft btn--sm" data-redo-subject="${subjectId}">重做本学科</button>`
                    : ''
                }
              </div>
              <div class="card__body" style="padding:6px 10px 10px">
                ${group.map((item, index) => this.rowHtml(item, index)).join('')}
              </div>
            </div>`;
        })
        .join('');
    }

    rowHtml(item, index) {
      const q = item.question;
      const isMastered = !!item.mastered;
      const no = String(index + 1).padStart(2, '0');

      const actions = isMastered
        ? `<button class="btn btn--ghost btn--sm" data-unmaster="${q.id}">移回错题</button>
           <button class="btn btn--ghost btn--sm" data-remove="${q.id}">移除</button>`
        : `<button class="btn btn--ghost btn--sm" data-master="${q.id}">标记掌握</button>
           <button class="btn btn--ghost btn--sm" data-remove="${q.id}">移除</button>`;

      return `
        <div class="q-row" ${isMastered ? '' : `data-redo-one="${q.id}"`} style="${isMastered ? 'cursor:default' : ''}">
          <div class="q-row__no">${no}</div>
          <div class="q-row__body">
            <div class="q-row__stem">${U.esc(q.stem)}</div>
            <div class="q-row__meta">
              <span class="badge">${Data.typeName(q.type)}</span>
              <span>${U.esc(item.chapterName)} · ${U.esc(item.kpName)}</span>
              <span>错 ${item.attempts || 1} 次</span>
              <span>${U.fmtDate(item.lastAt)}</span>
              ${isMastered ? `<span class="badge badge--ok">已掌握</span>` : ''}
            </div>
          </div>
          <div class="row gap-6" style="flex:none">${actions}</div>
        </div>`;
    }

    /* ---------------- 交互 ---------------- */

    bind() {
      document.getElementById('export-wrong').addEventListener('click',()=>{
        const html=this.exportHTML(); if (html) KY.Backup.download(`错题本-${Date.now()}.html`,html,'text/html;charset=utf-8');
      });
      document.getElementById('print-wrong').addEventListener('click',()=>{
        const html=this.exportContent(); if (!html) return;
        const previous=document.getElementById('wrong-print-root'); if (previous) previous.remove();
        const root=document.createElement('section'); root.id='wrong-print-root'; root.innerHTML=html;
        document.body.appendChild(root);
        window.addEventListener('afterprint',()=>root.remove(),{once:true});
        window.print();
      });
      document.getElementById('wrong-subjects').addEventListener('click', (event) => {
        const btn = event.target.closest('[data-subject]');
        if (!btn) return;
        this.state.subjectId = btn.dataset.subject;
        this.renderSubjects(
          this.items.filter((item) => !item.mastered),
          this.items.filter((item) => item.mastered)
        );
        this.renderBody();
      });

      document.getElementById('wrong-status').addEventListener('click', (event) => {
        const btn = event.target.closest('[data-status]');
        if (!btn) return;
        this.state.status = btn.dataset.status;
        U.$$('#wrong-status button').forEach((el) => el.classList.toggle('is-on', el === btn));
        this.renderSubjects(
          this.items.filter((item) => !item.mastered),
          this.items.filter((item) => item.mastered)
        );
        this.renderBody();
      });

      document.getElementById('sort-btn').addEventListener('click', (event) => {
        this.state.sort = this.state.sort === 'recent' ? 'attempts' : 'recent';
        event.currentTarget.textContent = this.state.sort === 'recent' ? '按最近错误' : '按错误次数';
        this.renderBody();
      });

      document.getElementById('redo-all').addEventListener('click', () => {
        const ids = this.visibleItems().filter((item) => !item.mastered).map((item) => item.question.id);
        this.startRedo(ids, null);
      });

      const body = document.getElementById('wrong-body');
      body.addEventListener('click', async (event) => {
        const action = event.target.closest('[data-master],[data-unmaster],[data-remove],[data-redo-subject]');
        if (action) {
          event.stopPropagation();
          if (action.dataset.master) return this.setMastered(action.dataset.master, true);
          if (action.dataset.unmaster) return this.setMastered(action.dataset.unmaster, false);
          if (action.dataset.remove) return this.removeItem(action.dataset.remove);
          if (action.dataset.redoSubject) {
            const ids = this.visibleItems()
              .filter((item) => !item.mastered && item.question.subjectId === action.dataset.redoSubject)
              .map((item) => item.question.id);
            return this.startRedo(ids, action.dataset.redoSubject);
          }
        }

        const row = event.target.closest('[data-redo-one]');
        if (!row) return;
        this.startRedo([row.dataset.redoOne], null);
      });
    }

    exportContent() {
      const items=this.visibleItems();
      if (!items.length) { KY.Toast.warn('当前筛选下没有可导出的错题'); return ''; }
      return `<h1>错题本 · ${this.state.status==='mastered'?'已掌握':'待掌握'}（${items.length}题）</h1>`+
        items.map((item,i)=>{
          const q=item.question;
          return `<article><h2>${i+1}. ${U.esc(q.stem)}</h2><p>${U.esc(item.subject.name)} · ${U.esc(item.kpName)}</p>`+
            (q.options||[]).map(o=>`<p>${U.esc(o.key)}. ${U.esc(o.text)}</p>`).join('')+
            (q.contentRevision && item.contentRevision !== q.contentRevision ? '<p>此题已完成内容复核；原作答可能基于旧版题目，请重新练习。</p>' : '')+
            `<p><b>原作答：</b>${U.text(KY.Grader.displayAnswer(q,item.lastAnswer))}</p><p><b>参考答案：</b>${U.text(KY.Grader.displayCorrect(q))}</p>`+
            (q.explanation?`<p><b>解析：</b>${U.text(q.explanation)}</p>`:'')+'</article>';
        }).join('');
    }

    exportHTML() {
      const content=this.exportContent(); if (!content) return '';
      return '<!doctype html><html lang="zh-CN"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>错题本</title>'+ 
        '<style>body{max-width:900px;margin:32px auto;padding:0 20px;font:16px/1.8 sans-serif;color:#111;background:#fff}h1{font-size:24px}h2{font-size:18px}article{border-top:1px solid #bbb;padding:16px 0;break-inside:avoid}p{white-space:pre-wrap;overflow-wrap:anywhere}</style><body>'+content+'</body></html>';
    }

    setMastered(questionId, mastered) {
      const list = KY.Store.getWrongList();
      const entry = list.find((item) => item.questionId === questionId);
      if (!entry) return;
      entry.mastered = mastered;
      if (mastered) {
        entry.masteredAt = new Date().toISOString();
      } else {
        delete entry.masteredAt;
      }
      KY.Store.saveWrongList(list);
      KY.Toast.ok(mastered ? '已标记为掌握' : '已移回待掌握');
      this.render();
    }

    async removeItem(questionId) {
      const ok = await KY.Modal.confirm({
        title: '从错题本移除？',
        body: '移除后该题不再出现在错题本，历史作答记录不受影响。',
        okText: '移除',
        danger: true,
      });
      if (!ok) return;

      const list = KY.Store.getWrongList().filter((item) => item.questionId !== questionId);
      KY.Store.saveWrongList(list);
      KY.Toast.ok('已移除');
      this.render();
    }

    startRedo(questionIds, subjectId) {
      const ids = (questionIds || []).filter(Boolean);
      if (!ids.length) {
        KY.Toast.warn('没有可重做的题目');
        return;
      }

      const questions = Data.questionsByIds(ids);
      const first = questions[0];
      const subjectIds = new Set(questions.map((q) => q.subjectId));
      const subject = subjectId ? Data.getSubject(subjectId) : Data.getSubject(first.subjectId);
      const label = subjectIds.size > 1 ? '全部错题' : subject ? subject.name : '错题';

      const session = KY.Session.create({
        type: 'wrong',
        subjectId: first.subjectId,
        bankId: first.bankId,
        chapterId: 'all',
        questionIds: ids,
        title: `错题重做 · ${label}（${ids.length} 题）`,
      });

      KY.Router.go(`/practice/${session.id}`);
    }
  }

  KY.Pages = KY.Pages || {};
  KY.Pages.Wrongbook = WrongbookPage;
})(window.KY);
