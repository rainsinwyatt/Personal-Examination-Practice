/** 学习数据备份：严格校验后合并，不包含登录态，不删除当前记录。 */
(function (KY) {
  'use strict';
  const MAX_BYTES = 10 * 1024 * 1024;
  const idOK = (v) => typeof v === 'string' && /^[a-zA-Z0-9_:-]{1,160}$/.test(v) && !['__proto__', 'constructor', 'prototype'].includes(v);
  const obj = (v) => v && typeof v === 'object' && !Array.isArray(v);
  const finite = (v, max) => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= max;
  function requireValue(ok, message) { if (!ok) throw new Error(message); }
  function validateTree(value, depth) {
    requireValue(depth < 20, '备份数据层级过深');
    if (!value || typeof value !== 'object') return;
    Object.keys(value).forEach((key) => {
      requireValue(!['__proto__', 'constructor', 'prototype'].includes(key), '备份含有不支持的字段');
      validateTree(value[key], depth + 1);
    });
  }
  function list(value, max, label) {
    requireValue(Array.isArray(value) && value.length <= max, `${label}格式或条数不正确`);
  }
  function answer(value) {
    return value == null || typeof value === 'boolean' || finite(value, 100000) ||
      (typeof value === 'string' && value.length <= 100000) ||
      (Array.isArray(value) && value.length <= 6 && value.every(v => typeof v === 'string' && /^[A-F]$/.test(v)));
  }
  function scores(items) {
    list(items, 5000, '逐题成绩');
    items.forEach((i) => {
      requireValue(obj(i) && idOK(i.questionId) && idOK(i.bankId) && idOK(i.kpId) &&
        ['single','multiple','judge','blank','short'].includes(i.type) &&
        ['correct','partial','wrong','empty'].includes(i.status) && answer(i.answer) &&
        finite(i.points, 1000) && finite(i.earned, i.points), '逐题成绩数据不正确');
      ['hit', 'miss'].forEach(key => {
        if (i[key] === undefined) return;
        list(i[key], 100, '采分点');
        requireValue(i[key].every(s => typeof s === 'string' && s.length < 1000), '采分点格式不正确');
      });
      if (i.selfScore !== undefined) requireValue(i.type === 'short' && finite(i.selfScore, i.points) && Number.isInteger(i.selfScore*2) && i.machineEarned !== undefined, '自评分不正确');
      if (i.machineEarned !== undefined) requireValue(finite(i.machineEarned, i.points) && ['correct','partial','wrong'].includes(i.machineStatus), '机评分不正确');
    });
  }
  const Backup = {
    MAX_BYTES,
    snapshot() {
      return { app: 'gxjszg-exam', version: 1, exportedAt: new Date().toISOString(), data: {
        sessions: KY.Store.getSessions(), results: KY.Store.getResults(),
        wrong: KY.Store.getWrongList(), settings: KY.Store.getSettings()
      }};
    },
    parse(text) {
      requireValue(typeof text === 'string' && new Blob([text]).size <= MAX_BYTES, '备份文件不能超过10MB');
      let value;
      try { value = JSON.parse(text); } catch (err) { throw new Error('文件不是有效的JSON备份'); }
      validateTree(value, 0);
      requireValue(obj(value) && value.app === 'gxjszg-exam' && value.version === 1 && obj(value.data), '不是本系统支持的备份文件');
      const d = value.data;
      list(d.sessions, 100, '练习记录'); list(d.results, 100, '成绩记录'); list(d.wrong, 10000, '错题');
      requireValue(obj(d.settings), '设置格式不正确');
      d.sessions.forEach(s => {
        requireValue(obj(s) && idOK(s.id) && idOK(s.subjectId) && idOK(s.bankId) &&
          typeof s.title === 'string' && s.title.length <= 1000 &&
          ['practice','wrong','exam-large','exam-small'].includes(s.type) &&
          typeof s.submitted === 'boolean' && obj(s.answers) && obj(s.flags) &&
          typeof s.startTime === 'string' && Number.isFinite(Date.parse(s.startTime)), '练习记录数据不正确');
        list(s.questionIds, 5000, '题目列表');
        requireValue(s.questionIds.every(idOK) && new Set(s.questionIds).size === s.questionIds.length, '题目编号无效或重复');
        requireValue(Object.keys(s.answers).every(k => s.questionIds.includes(k) && answer(s.answers[k])), '作答数据不正确');
        requireValue(Object.keys(s.flags).every(k => s.questionIds.includes(k) && typeof s.flags[k] === 'boolean'), '标记数据不正确');
        if (s.currentIndex !== undefined) requireValue(Number.isInteger(s.currentIndex) && s.currentIndex >= 0 && s.currentIndex < Math.max(1,s.questionIds.length), '当前题号无效');
        if (s.durationSec !== undefined) requireValue(finite(s.durationSec, 86400), '考试时长无效');
        if (s.totalPoints !== undefined) requireValue(finite(s.totalPoints, 100000), '试卷总分无效');
        if (s.chapterId !== undefined) requireValue(idOK(s.chapterId), '章节编号无效');
        if (s.kpIds !== undefined) { list(s.kpIds,1000,'知识点'); requireValue(s.kpIds.every(idOK),'知识点编号无效'); }
      });
      d.results.forEach(r => {
        requireValue(obj(r) && idOK(r.id) && idOK(r.sessionId) && idOK(r.subjectId) && idOK(r.bankId) &&
          typeof r.title === 'string' && r.title.length <= 1000 &&
          finite(r.score,100) && finite(r.rawScore,100000) && finite(r.totalPoints,100000) &&
          finite(r.timeSpent,1e10) && Number.isInteger(r.totalQuestions) && r.totalQuestions >= 0 &&
          Number.isInteger(r.answeredCount) && r.answeredCount >= 0 && r.answeredCount <= r.totalQuestions &&
          Number.isInteger(r.correctCount) && r.correctCount >= 0 && r.correctCount <= r.totalQuestions &&
          ['practice','wrong','exam-large','exam-small'].includes(r.mode), '成绩记录数据不正确');
        scores(r.items);
        requireValue(r.items.length === r.totalQuestions && new Set(r.items.map(i=>i.questionId)).size === r.items.length, '成绩题量不一致');
        // 汇总从逐题分数重算，不信任导入的派生统计。
        KY.Results.recalculate(r);
      });
      d.wrong.forEach(w => requireValue(obj(w) && idOK(w.questionId) && idOK(w.subjectId) && idOK(w.bankId) &&
        idOK(w.chapterId) && idOK(w.kpId) && typeof w.mastered === 'boolean' &&
        Number.isInteger(w.attempts) && w.attempts > 0 && w.attempts < 1e9 && answer(w.lastAnswer), '错题数据不正确'));
      ['sessions','results','wrong'].forEach(key => {
        const field = key === 'wrong' ? 'questionId' : key === 'results' ? 'sessionId' : 'id';
        requireValue(new Set(d[key].map(i => i[field])).size === d[key].length, '备份内含重复记录');
      });
      return value;
    },
    merge(value) {
      // 直接调用此方法也必须经过完整验证；不要分段导入导致坏文件只写入一半。
      const checked = this.parse(JSON.stringify(value)).data;
      const current = this.snapshot().data;
      const combine = (key, field, limit) => {
        const ids = new Set(current[key].map(i => i[field]));
        return current[key].concat(checked[key].filter(i => !ids.has(i[field]))).slice(0, limit);
      };
      const next = { sessions: combine('sessions','id',100), results: combine('results','sessionId',100),
        wrong: combine('wrong','questionId',10000), settings: Object.assign({}, checked.settings, current.settings) };
      // 兼容旧版按毫秒生成的成绩编号：不同浏览器备份可能具有相同编号。
      const resultIds=new Set();
      next.results.forEach(result=>{
        if (resultIds.has(result.id)) result.id=KY.U.uid('result');
        resultIds.add(result.id);
      });
      KY.Store.write('sessions',next.sessions); KY.Store.write('results',next.results);
      KY.Store.write('wrong',next.wrong); KY.Store.write('settings',next.settings);
      return { sessions:next.sessions.length-current.sessions.length, results:next.results.length-current.results.length,
        wrong:next.wrong.length-current.wrong.length, persistent:KY.Store.isPersistent() };
    },
    download(name, text, type) {
      const url = URL.createObjectURL(new Blob([text], {type:type || 'application/json;charset=utf-8'}));
      const a = document.createElement('a'); a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    },
    exportFile() {
      const p = KY.Router.page; if (p && p.flushSave) p.flushSave();
      this.download(`学习备份-${Date.now()}.json`, JSON.stringify(this.snapshot(),null,2));
    },
    chooseFile() {
      const input = document.createElement('input'); input.type='file'; input.accept='.json,application/json';
      input.hidden=true; document.body.appendChild(input);
      input.addEventListener('cancel',()=>input.remove(),{once:true});
      input.addEventListener('change', async () => {
        const file = input.files[0]; if (!file) {input.remove(); return;}
        try {
          requireValue(file.size <= MAX_BYTES,'备份文件不能超过10MB');
          const value = this.parse(await file.text());
          const d = value.data;
          const ok = await KY.Modal.confirm({title:'合并学习备份',
            body:`文件包含${d.sessions.length}份练习、${d.results.length}份成绩和${d.wrong.length}道错题。同名记录保留本机版本，每类练习与成绩最多保留100份。`,okText:'合并导入'});
          if (!ok) return;
          const p = KY.Router.page; if (p && p.flushSave) p.flushSave();
          const added = this.merge(value);
          KY.Router.resolve();
          const message = `已新增${added.sessions}份练习、${added.results}份成绩和${added.wrong}道错题`;
          if (added.persistent) KY.Toast.ok(message); else KY.Toast.warn(message+'；当前为临时模式，请另存备份');
        } catch(err) { KY.Toast.bad(err.message || '导入失败'); }
        finally { input.remove(); }
      });
      input.click();
    }
  };
  KY.Backup = Backup;
})(window.KY);
