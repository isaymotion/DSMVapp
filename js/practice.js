/* DSM-5-TR Study Companion — practice content (Stage 2).
   Renders each chapter's practice drills ("Write the diagnosis", "Count the criteria", exam traps),
   the cross-chapter "Start from the complaint" hub, and merges per-chapter clinical extras
   (interview questions and treatment bridges) into the disorder library.
   Data formats (all optional per chapter):
     SP.add(ch, 'dxline',   [{ id, tag, case, parts: [{ label, options, answer | answer: [..], multi }], line, why }])
     SP.add(ch, 'counting', [{ id, tag, case, ask, items: [[text, counts, why]], need, met, why }])
     SP.add(ch, 'traps',    [{ id, tag, trap, truth, sec }])
     SP.dxExtra   = [...].concat([{ id: disorderId, ask: [[criterion, question, tip]], tx: { first, points, stahl: [[label, path]], asOf } }])
     SP.complaintData = [...].concat([{ id, title, intro, ask: [], mustNotMiss: [], items: [{ ch, dx, name, when }] }]) */
(function () {
  'use strict';
  var SP = window.SP, A = SP._app;
  if (!A) return;
  var store = A.store, esc = A.esc, fmt = A.fmt, plain = A.plain, plural = A.plural, shuffle = A.shuffle;
  var main = A.main, APP = A.APP;
  SP.routes = SP.routes || {};
  SP.chapterRoutes = SP.chapterRoutes || {};
  SP.hooks = SP.hooks || {};

  /* ---------- merge clinical extras and complaints once the data has loaded ---------- */
  var merged = false;
  function merge() {
    if (merged) return; merged = true;
    (SP.dxExtra || []).forEach(function (x) {
      var d = A.dxBy(x.id); if (!d) return;
      Object.keys(x).forEach(function (k) { if (k !== 'id') d[k] = x[k]; });
    });
    var by = {}, out = [];
    (SP.complaintData || []).slice().sort(function (a, b) { return (b.intro ? 1 : 0) - (a.intro ? 1 : 0); }).forEach(function (c) {
      var t = by[c.id];
      if (!t) { t = by[c.id] = { id: c.id, title: c.title, intro: c.intro || '', ask: [], mustNotMiss: [], items: [], helpers: [] }; out.push(t); }
      if (!t.intro && c.intro) t.intro = c.intro;
      ['ask', 'mustNotMiss', 'helpers'].forEach(function (k) { (c[k] || []).forEach(function (v) { if (t[k].indexOf(v) < 0) t[k].push(v); }); });
      (c.items || []).forEach(function (it) { var k = it.ch + '|' + (it.dx || it.name); if (t.items.some(function (x) { return x.ch + '|' + (x.dx || x.name) === k; })) return; t.items.push(it); });
    });
    out.sort(function (a, b) { return a.title.localeCompare(b.title); });
    SP.complaints = out;
  }
  SP.onData = (SP.onData || []).concat([merge]);

  function logKey(ch, kind, id) { return ch.id + '/' + kind + '/' + id; }
  function drillStats(ch, kind) {
    var LOG = A.log(), list = ch[kind] || [], seen = 0, right = 0;
    list.forEach(function (x) { var l = LOG[logKey(ch, kind, x.id)]; if (l) { seen++; if (l.last) right++; } });
    return { total: list.length, seen: seen, right: right };
  }
  SP.drillStats = drillStats;
  function record(ch, kind, id, ok) {
    A.logAnswer(logKey(ch, kind, id), ok, null);
    var LOG = A.log(), l = LOG[logKey(ch, kind, id)]; if (l) { l.last = ok ? 1 : 0; store.set('log', LOG); }
  }

  /* =====================================================================
     Practice page: #/c/<ch>/practice[/write|count|traps]
     ===================================================================== */
  var TABS = [
    { k: 'write', data: 'dxline', label: 'Write the diagnosis', blurb: 'Build the full diagnosis line, with code and specifiers in the order the manual records them.' },
    { k: 'count', data: 'counting', label: 'Count the criteria', blurb: 'Decide which symptoms count toward the criterion, then whether it is met.' },
    { k: 'traps', data: 'traps', label: 'Exam traps', blurb: 'The tempting wrong ideas examiners use, and the rule that beats each one.' }
  ];
  var pos = {};
  function renderPractice(ch, sub) {
    var tabs = TABS.filter(function (t) { return (ch[t.data] || []).length; });
    if (!tabs.length) return A.route && location.replace('#/c/' + ch.id + '/guide');
    var tab = tabs.filter(function (t) { return t.k === sub; })[0] || tabs[0];
    var html = A.chapterHead(ch, 'practice') +
      '<div class="wrap pr-page c-clin">' +
        '<nav class="pr-tabs" aria-label="Practice drills">' + tabs.map(function (t) {
          var n = (ch[t.data] || []).length, st = t.data === 'traps' ? null : drillStats(ch, t.data);
          return '<a class="pr-tab' + (t === tab ? ' is-active' : '') + '" href="#/c/' + ch.id + '/practice/' + t.k + '"' + (t === tab ? ' aria-current="page"' : '') + '><span>' + esc(t.label) + '</span><small>' + (st && st.seen ? st.right + ' of ' + n + ' right' : plural(n, t.data === 'traps' ? 'trap' : 'drill')) + '</small></a>';
        }).join('') + '</nav>' +
        '<p class="pr-blurb">' + esc(tab.blurb) + '</p>' +
        '<div id="pr-area" aria-live="polite"></div>' +
      '</div>';
    A.setView('practice:' + ch.id + ':' + tab.k, html);
    document.title = 'Ch ' + ch.number + ' ' + tab.label.toLowerCase() + ' — ' + APP;
    var area = main.querySelector('#pr-area');
    if (tab.k === 'traps') return trapsList(ch, area);
    var list = ch[tab.data], key = ch.id + '/' + tab.k;
    if (pos[key] == null) pos[key] = 0;
    function show(i) {
      pos[key] = (i + list.length) % list.length;
      var item = list[pos[key]];
      var nav = '<div class="pr-nav"><button class="btn" type="button" data-pr="prev">Previous</button><span class="pr-nav__pos">' + (pos[key] + 1) + ' of ' + list.length + '</span><button class="btn" type="button" data-pr="next">Next</button></div>';
      if (tab.k === 'write') DxLine(area, ch, item, nav, function () { show(pos[key] + 1); });
      else Counting(area, ch, item, nav, function () { show(pos[key] + 1); });
      area.querySelector('[data-pr="prev"]').addEventListener('click', function () { show(pos[key] - 1); });
      area.querySelector('[data-pr="next"]').addEventListener('click', function () { show(pos[key] + 1); });
    }
    show(pos[key]);
  }
  SP.chapterRoutes.practice = renderPractice;

  /* ---------- Write the diagnosis ---------- */
  function DxLine(area, ch, item, nav, next) {
    var picks = item.parts.map(function (p) { return p.multi ? [] : null; }), checked = false;
    function isRight(p, v) {
      if (p.multi) { var a = (p.answer || []).slice().sort().join(','), b = v.slice().sort().join(','); return a === b; }
      return v === p.answer;
    }
    function draw() {
      var allOk = item.parts.every(function (p, i) { return isRight(p, picks[i]); });
      area.innerHTML = '<article class="pr-card">' +
        '<p class="pr-card__tag">' + esc(item.tag || 'Write the diagnosis') + '</p>' +
        '<div class="pr-case">' + fmt(item['case']) + '</div>' +
        '<p class="pr-ask">Build the diagnosis as you would record it.</p>' +
        item.parts.map(function (p, i) {
          var ok = checked && isRight(p, picks[i]);
          return '<fieldset class="pr-part' + (checked ? (ok ? ' is-right' : ' is-wrong') : '') + '"><legend>' + esc(p.label) + (p.multi ? ' <span class="muted">(choose all that apply, or none)</span>' : '') + '</legend><div class="pr-opts">' +
            p.options.map(function (o, k) {
              var on = p.multi ? picks[i].indexOf(k) > -1 : picks[i] === k;
              var corr = p.multi ? (p.answer || []).indexOf(k) > -1 : p.answer === k;
              var cls = on ? ' is-on' : '';
              if (checked) cls += corr ? ' is-correct' : on ? ' is-wrong' : ' is-dim';
              return '<button type="button" class="pr-opt' + cls + '" data-part="' + i + '" data-opt="' + k + '" aria-pressed="' + on + '"' + (checked ? ' disabled' : '') + '>' + fmt(o) + '</button>';
            }).join('') + '</div></fieldset>';
        }).join('') +
        (checked ? '<div class="pr-result ' + (allOk ? 'is-right' : 'is-wrong') + '"><p class="pr-result__v">' + (allOk ? 'Exactly right.' : 'Not quite. The correct diagnosis line:') + '</p><p class="pr-line">' + fmt(item.line) + '</p><p>' + fmt(item.why || '') + '</p></div>' : '') +
        '<div class="pr-acts">' + (checked ? '<button class="btn btn--solid" type="button" data-act="next">Next case</button><button class="btn" type="button" data-act="retry">Try again</button>' : '<button class="btn btn--solid" type="button" data-act="check">Check</button>') + '</div>' +
      '</article>' + nav;
      A.linkTerms(area.querySelector('.pr-case'));
      area.querySelectorAll('[data-opt]').forEach(function (b) {
        b.addEventListener('click', function () {
          var i = +b.getAttribute('data-part'), k = +b.getAttribute('data-opt'), p = item.parts[i];
          if (p.multi) { var at = picks[i].indexOf(k); if (at > -1) picks[i].splice(at, 1); else picks[i].push(k); }
          else picks[i] = picks[i] === k ? null : k;
          draw();
        });
      });
      var bc = area.querySelector('[data-act="check"]');
      if (bc) bc.addEventListener('click', function () {
        var missing = item.parts.some(function (p, i) { return !p.multi && picks[i] == null; });
        if (missing && !window.confirm('Some parts are still blank. Check anyway?')) return;
        checked = true; record(ch, 'dxline', item.id, item.parts.every(function (p, i) { return isRight(p, picks[i]); })); draw();
        var r = area.querySelector('.pr-result'); if (r) r.scrollIntoView({ block: 'nearest', behavior: A.reduceMotion() ? 'auto' : 'smooth' });
      });
      var bn = area.querySelector('[data-act="next"]'); if (bn) bn.addEventListener('click', function () { next(); window.scrollTo(0, 0); });
      var br = area.querySelector('[data-act="retry"]'); if (br) br.addEventListener('click', function () { checked = false; picks = item.parts.map(function (p) { return p.multi ? [] : null; }); draw(); });
    }
    draw();
  }

  /* ---------- Count the criteria ---------- */
  function Counting(area, ch, item, nav, next) {
    var marks = item.items.map(function () { return null; }), met = null, checked = false;
    function draw() {
      var itemsOk = item.items.every(function (it, i) { return marks[i] === !!it[1]; }), metOk = met === !!item.met;
      var counted = item.items.filter(function (it) { return it[1]; }).length;
      area.innerHTML = '<article class="pr-card">' +
        '<p class="pr-card__tag">' + esc(item.tag || 'Count the criteria') + '</p>' +
        '<div class="pr-case">' + fmt(item['case']) + '</div>' +
        '<p class="pr-ask">' + fmt(item.ask) + '</p>' +
        '<ol class="pr-items">' + item.items.map(function (it, i) {
          var ok = checked && marks[i] === !!it[1];
          return '<li class="pr-item' + (checked ? (ok ? ' is-right' : ' is-wrong') : '') + '"><p class="pr-item__t">' + fmt(it[0]) + '</p>' +
            '<div class="pr-item__b" role="group" aria-label="Does this count?">' +
              '<button type="button" class="pr-yn' + (marks[i] === true ? ' is-on' : '') + '" data-i="' + i + '" data-v="1"' + (checked ? ' disabled' : '') + '>Counts</button>' +
              '<button type="button" class="pr-yn' + (marks[i] === false ? ' is-on' : '') + '" data-i="' + i + '" data-v="0"' + (checked ? ' disabled' : '') + '>Doesn’t count</button></div>' +
            (checked ? '<p class="pr-item__why"><b>' + (it[1] ? 'Counts.' : 'Doesn’t count.') + '</b> ' + fmt(it[2] || '') + '</p>' : '') + '</li>';
        }).join('') + '</ol>' +
        '<fieldset class="pr-part' + (checked ? (metOk ? ' is-right' : ' is-wrong') : '') + '"><legend>' + esc(item.metLabel || 'So, is the criterion met?') + '</legend><div class="pr-opts">' +
          [[true, 'Yes, met'], [false, 'No, not met']].map(function (o) {
            var on = met === o[0], cls = on ? ' is-on' : '';
            if (checked) cls += o[0] === !!item.met ? ' is-correct' : on ? ' is-wrong' : ' is-dim';
            return '<button type="button" class="pr-opt' + cls + '" data-met="' + (o[0] ? 1 : 0) + '"' + (checked ? ' disabled' : '') + '>' + o[1] + '</button>';
          }).join('') + '</div></fieldset>' +
        (checked ? '<div class="pr-result ' + (itemsOk && metOk ? 'is-right' : 'is-wrong') + '"><p class="pr-result__v">' + (itemsOk && metOk ? 'All correct.' : 'Not quite.') + ' ' + plural(counted, 'item') + ' count' + (counted === 1 ? 's' : '') + (item.need ? '; the criterion needs ' + item.need : '') + '.</p><p>' + fmt(item.why || '') + '</p></div>' : '') +
        '<div class="pr-acts">' + (checked ? '<button class="btn btn--solid" type="button" data-act="next">Next case</button><button class="btn" type="button" data-act="retry">Try again</button>' : '<button class="btn btn--solid" type="button" data-act="check">Check</button>') + '</div>' +
      '</article>' + nav;
      A.linkTerms(area.querySelector('.pr-case'));
      area.querySelectorAll('[data-i]').forEach(function (b) {
        b.addEventListener('click', function () { var i = +b.getAttribute('data-i'), v = b.getAttribute('data-v') === '1'; marks[i] = marks[i] === v ? null : v; draw(); });
      });
      area.querySelectorAll('[data-met]').forEach(function (b) { b.addEventListener('click', function () { var v = b.getAttribute('data-met') === '1'; met = met === v ? null : v; draw(); }); });
      var bc = area.querySelector('[data-act="check"]');
      if (bc) bc.addEventListener('click', function () {
        if ((marks.some(function (m) { return m === null; }) || met === null) && !window.confirm('You have not decided every item. Check anyway?')) return;
        checked = true;
        record(ch, 'counting', item.id, item.items.every(function (it, i) { return marks[i] === !!it[1]; }) && met === !!item.met);
        draw();
        var r = area.querySelector('.pr-result'); if (r) r.scrollIntoView({ block: 'nearest', behavior: A.reduceMotion() ? 'auto' : 'smooth' });
      });
      var bn = area.querySelector('[data-act="next"]'); if (bn) bn.addEventListener('click', function () { next(); window.scrollTo(0, 0); });
      var br = area.querySelector('[data-act="retry"]'); if (br) br.addEventListener('click', function () { checked = false; marks = item.items.map(function () { return null; }); met = null; draw(); });
    }
    draw();
  }

  /* ---------- Exam traps ---------- */
  function trapsHTML(ch, opts) {
    opts = opts || {};
    return '<ol class="traps' + (opts.quiz ? ' is-quiz' : '') + '">' + (ch.traps || []).map(function (t, i) {
      return '<li class="trap" id="trap-' + t.id + '"><p class="trap__bait"><span class="trap__lbl">Trap</span>' + fmt(t.trap) + '</p>' +
        '<div class="trap__truth"><span class="trap__lbl">Rule</span><div>' + fmt(t.truth) + (t.sec ? ' <a class="trap__more" href="#/c/' + ch.id + '/guide/' + t.sec + '">In the guide</a>' : '') + '</div></div>' +
        (opts.quiz ? '<button type="button" class="link-btn trap__show" data-trap="' + i + '">Show the rule</button>' : '') + '</li>';
    }).join('') + '</ol>';
  }
  function bindTraps(root) {
    root.querySelectorAll('[data-trap]').forEach(function (b) { b.addEventListener('click', function () { b.closest('.trap').classList.toggle('is-shown'); b.textContent = b.closest('.trap').classList.contains('is-shown') ? 'Hide the rule' : 'Show the rule'; }); });
  }
  function trapsList(ch, area) {
    var quiz = store.get('trapQuiz', true);
    area.innerHTML = '<div class="hy-tools"><label class="switch"><input type="checkbox" id="tr-quiz"' + (quiz ? ' checked' : '') + '> Hide the rules</label><p>Read each trap, say why it is wrong, then reveal the rule.</p></div><div id="tr-list"></div>';
    function draw() { area.querySelector('#tr-list').innerHTML = trapsHTML(ch, { quiz: quiz }); bindTraps(area); A.linkTerms(area.querySelector('#tr-list')); }
    area.querySelector('#tr-quiz').addEventListener('change', function (e) { quiz = e.target.checked; store.set('trapQuiz', quiz); draw(); });
    draw();
  }

  /* hooks: traps at the end of the study guide and the high-yield page */
  function chain(name, fn) { var prev = SP.hooks[name]; SP.hooks[name] = function (a, b) { if (prev) prev(a, b); fn(a, b); }; }
  chain('guide', function (ch, root) {
    if (!(ch.traps || []).length) return;
    var reading = root.querySelector('.reading'); if (!reading) return;
    var sec = document.createElement('section');
    sec.className = 'g-sec traps-sec'; sec.id = 'exam-traps';
    sec.innerHTML = '<div class="g-part"><p>Before you go</p><h2>Exam traps in this chapter</h2></div><p class="g-block">' + plural(ch.traps.length, 'classic trap') + ': the tempting wrong idea, then the rule. Drill them, with the rules hidden, in <a href="#/c/' + ch.id + '/practice/traps">Practice drills</a>.</p>' + trapsHTML(ch);
    reading.appendChild(sec);
    A.linkTerms(sec);
  });
  chain('hy', function (ch, root) {
    if (!(ch.traps || []).length) return;
    var grid = root.querySelector('.hy-grid'); if (!grid) return;
    var sec = document.createElement('section');
    sec.className = 'hy-topic hy-traps'; sec.id = 'hy-traps';
    sec.innerHTML = '<h2>Exam traps</h2><ul>' + ch.traps.map(function (t, i) { return '<li id="hy-traps--' + i + '">' + fmt(t.trap.replace(/\*\*/g, '')) + ' <span class="hy-traps__arrow">→</span> ' + fmt(t.truth) + '</li>'; }).join('') + '</ul>';
    grid.appendChild(sec);
    A.linkTerms(sec, { skip: 'strong' });
  });

  /* =====================================================================
     Start from the complaint: #/complaints and #/complaints/<id>
     ===================================================================== */
  function renderComplaints(p) {
    merge();
    var list = SP.complaints || [];
    if (p[1]) return renderComplaint(p[1]);
    var html = '<div class="wrap page">' + A.libHead(null, null, 'Start from the complaint', 'Patients do not arrive with a diagnosis; they arrive with a complaint. Pick what the patient presents with to see every diagnosis to consider across the chapters built so far, the first questions to ask, and the causes you must not miss.') +
      '<div class="lib-tools"><label class="gloss__search"><span class="sr-only">Filter complaints</span><input type="search" id="cpq" placeholder="Filter: sleep, irritable, after childbirth…" autocomplete="off"></label></div>' +
      '<ul class="cp-grid" id="cp-grid">' + list.map(function (c) {
        var chs = {}; c.items.forEach(function (it) { chs[it.ch] = 1; });
        var nums = Object.keys(chs).map(function (id) { var m = A.planned(id); return m ? m.number : ''; }).sort(function (a, b) { return a - b; });
        return '<li data-t="' + esc((c.title + ' ' + c.intro + ' ' + c.items.map(function (it) { return (it.name || '') + ' ' + plain(it.when); }).join(' ')).toLowerCase()) + '"><a class="cp-card" href="#/complaints/' + c.id + '"><span class="cp-card__t">' + esc(c.title) + '</span><span class="cp-card__m">' + plural(c.items.length, 'diagnosis', 'diagnoses') + ' · Ch ' + nums.join(', ') + '</span></a></li>';
      }).join('') + '</ul></div>';
    A.setView('complaints', html);
    document.title = 'Start from the complaint — ' + APP;
    var q = main.querySelector('#cpq');
    q.addEventListener('input', function () { var v = q.value.trim().toLowerCase(); main.querySelectorAll('#cp-grid li').forEach(function (li) { li.hidden = v && li.getAttribute('data-t').indexOf(v) < 0; }); });
  }
  function renderComplaint(id) {
    var c = (SP.complaints || []).filter(function (x) { return x.id === id; })[0];
    if (!c) { location.replace('#/complaints'); return; }
    var groups = {}, chIds = [];
    c.items.forEach(function (it) { if (!groups[it.ch]) { groups[it.ch] = []; chIds.push(it.ch); } groups[it.ch].push(it); });
    var body = chIds.map(function (chId) {
      var m = A.planned(chId);
      return '<section class="cp-ch"><h2><span class="cp-ch__n">' + (m ? m.number : '') + '</span>' + esc(m ? m.short || m.title : chId) + '</h2><ul class="cp-list">' + groups[chId].map(function (it) {
        var d = it.dx && A.dxBy(it.dx);
        var name = d ? '<a href="#/dx/' + d.id + '">' + esc(it.name || d.name) + '</a>' + (d.code ? ' <span class="cp-code">' + esc(d.code) + '</span>' : '') : '<b>' + esc(it.name || '') + '</b>';
        return '<li><p class="cp-list__name">' + name + '</p><p class="cp-list__when">' + fmt(it.when) + '</p></li>';
      }).join('') + '</ul></section>';
    }).join('');
    var helpers = c.helpers.map(function (hid) { var h = (SP.helpers || []).filter(function (x) { return x.id === hid; })[0]; return h ? '<li><a href="#/helpers/' + h.id + '">' + esc(h.title) + '</a></li>' : ''; }).join('');
    var html = '<div class="wrap page cp-page">' + A.libHead('#/complaints', 'Start from the complaint', esc(c.title), c.intro ? fmt(c.intro) : null) +
      '<div class="lib-grid"><div class="lib-main">' +
        (c.ask.length ? '<section class="lib-sec cp-ask"><h2>First questions to ask</h2><ul>' + c.ask.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></section>' : '') +
        (c.mustNotMiss.length ? '<section class="lib-sec cp-mnm"><h2>Must not miss</h2><ul>' + c.mustNotMiss.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></section>' : '') +
        '<section class="lib-sec"><h2>Diagnoses to consider</h2>' + body + '</section>' +
      '</div><aside class="lib-side"><h2>Other complaints</h2><ul class="side-links">' + (SP.complaints || []).filter(function (x) { return x.id !== c.id; }).map(function (x) { return '<li><a href="#/complaints/' + x.id + '">' + esc(x.title) + '</a></li>'; }).join('') + '</ul>' +
        (helpers ? '<h2>Diagnostic helpers</h2><ul class="side-links">' + helpers + '</ul>' : '') + '</aside></div></div>';
    A.setView('complaint:' + id, html);
    A.linkTerms(main.querySelector('.lib-main'));
    document.title = c.title + ' — ' + APP;
  }
  SP.routes.complaints = renderComplaints;

  /* =====================================================================
     Mnemonics: #/mnemonics (library page) and #/mnemonics/drill[/<ch>]
     Data: SP.add(ch, 'mnemonics', [{ id, name, for, letters: [[letter, word, detail]], caveat, dx, sec, original }])
     Each mnemonic is also a card in the chapter's Mnemonics deck (spaced repetition).
     ===================================================================== */
  function prepMnemonics() {
    Object.keys(SP.chapters || {}).forEach(function (chId) {
      (SP.chapters[chId].mnemonics || []).forEach(function (m) {
        m.tag = m.name;
        m.q = '**' + m.name + '**: ' + (m['for'] || '');
        m.a = m.letters.map(function (l) { return l[0] + ' = ' + l[1]; }).join('; ') + (m.caveat ? '. ' + m.caveat : '');
      });
    });
  }
  SP.onData = [prepMnemonics].concat(SP.onData || []);
  function mnemonicList() {
    var out = [];
    A.allChapters().forEach(function (ch) { (ch.mnemonics || []).forEach(function (m) { out.push({ ch: ch, m: m, key: ch.id + '/mnemonics/' + m.id }); }); });
    return out;
  }
  SP.mnemonicList = mnemonicList;
  function renderMnemonics(p) {
    if (p[1] === 'drill') return renderMnDrill(p[2]);
    if (p[1] === 'pdf') return renderMnPdf();
    var all = mnemonicList(), prefs = store.get('mnPrefs', { ch: 'all' });
    if (prefs.ch !== 'all' && !A.chapter(prefs.ch)) prefs.ch = 'all';
    var chs = A.allChapters().filter(function (ch) { return (ch.mnemonics || []).length; });
    var html = '<div class="wrap page mn-page">' + A.libHead(null, null, 'Mnemonics', 'Memory hooks for the criteria residents are asked about most. Each card spells the mnemonic out and says where it differs from the DSM, because the popular mnemonics are not word-for-word criteria. Mnemonics marked “app original” were written for this app.',
        '<a class="btn btn--solid" href="#/mnemonics/drill" id="mn-go">Drill them</a><a class="btn" href="#/mnemonics/pdf">Create PDF</a>') +
      '<div class="fam-chips mn-chips"><button type="button" class="filter" data-mch="all">All chapters</button>' + chs.map(function (ch) { return '<button type="button" class="filter" data-mch="' + ch.id + '">Ch ' + ch.number + '</button>'; }).join('') + '</div>' +
      '<div class="lib-tools"><label class="gloss__search"><span class="sr-only">Filter mnemonics</span><input type="search" id="mnq" placeholder="Filter: mania, depression, negative symptoms…" autocomplete="off"></label></div>' +
      '<ul class="mn-grid" id="mn-grid">' + all.map(function (x) {
        var m = x.m, d = m.dx && A.dxBy(m.dx), st = A.cardStatus(x.key);
        return '<li class="mn-card" id="mn-' + esc(m.id) + '" data-ch="' + x.ch.id + '" data-t="' + esc((m.name + ' ' + plain(m['for'] || '') + ' ' + m.letters.map(function (l) { return plain(l[1]); }).join(' ')).toLowerCase()) + '">' +
          '<div class="mn-card__head"><p class="mn-card__name">' + esc(m.name) + (m.original ? ' <span class="mn-orig">App original</span>' : '') + '</p><p class="mn-card__for">' + fmt(m['for'] || '') + '</p></div>' +
          '<dl class="mn-list">' + m.letters.map(function (l) { return '<dt>' + esc(l[0]) + '</dt><dd><b>' + fmt(l[1]) + '</b>' + (l[2] ? '<span>' + fmt(l[2]) + '</span>' : '') + '</dd>'; }).join('') + '</dl>' +
          (m.caveat ? '<p class="mn-caveat"><b>DSM check:</b> ' + fmt(m.caveat) + '</p>' : '') +
          '<p class="mn-card__links"><span class="mn-card__ch">Ch ' + x.ch.number + '</span>' + (m.sec ? '<a href="#/c/' + x.ch.id + '/guide/' + m.sec + '">Study guide</a>' : '') + (d ? '<a href="#/dx/' + d.id + '">' + esc(d.name) + '</a>' : '') + '<a href="#/c/' + x.ch.id + '/cards/mnemonics/' + m.id + '">Practice card</a><span class="mn-st mn-st--' + st + '">' + (st === 'new' ? 'Not drilled yet' : st === 'mastered' ? 'Mastered' : 'Learning') + '</span></p></li>';
      }).join('') + '</ul></div>';
    A.setView('mnemonics', html);
    document.title = 'Mnemonics — ' + APP;
    A.linkTerms(main.querySelector('#mn-grid'), { skip: '.mn-card__name, .mn-list' });
    var q = main.querySelector('#mnq');
    function apply() {
      var v = q.value.trim().toLowerCase(), n = 0;
      main.querySelectorAll('#mn-grid > li').forEach(function (li) {
        var show = (prefs.ch === 'all' || li.getAttribute('data-ch') === prefs.ch) && (!v || li.getAttribute('data-t').indexOf(v) > -1);
        li.hidden = !show; if (show) n++;
      });
      main.querySelectorAll('[data-mch]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-mch') === prefs.ch)); });
      main.querySelector('#mn-go').setAttribute('href', '#/mnemonics/drill' + (prefs.ch === 'all' ? '' : '/' + prefs.ch));
    }
    main.querySelectorAll('[data-mch]').forEach(function (b) { b.addEventListener('click', function () { prefs.ch = b.getAttribute('data-mch'); store.set('mnPrefs', prefs); apply(); }); });
    q.addEventListener('input', apply);
    apply();
  }
  function renderMnDrill(chId) {
    var ch = chId && A.chapter(chId);
    var all = mnemonicList().filter(function (x) { return !ch || x.ch.id === ch.id; }).map(function (x) { return x.key; });
    var SRS = A.srs();
    var due = all.filter(A.isDue), fresh = all.filter(function (k) { return !SRS[k]; });
    var queue = due.concat(shuffle(fresh)), mode = 'due';
    if (!queue.length) { queue = shuffle(all.slice()); mode = 'all'; }
    var html = '<div class="wrap page">' +
      '<header class="page__head"><p class="crumb"><a href="#/mnemonics">Mnemonics</a></p><h1>Spell it out</h1><p>' + (ch ? 'Chapter ' + ch.number + '. ' : 'All chapters. ') +
        'Look at the letters, say each word, then tap the letter to check. Flip the card for the details and the DSM check, and rate yourself: mnemonics come back on the same review schedule as your flashcards.</p></header>' +
      '<div class="deck-bar"><span class="deck-bar__count">' + (mode === 'due' ? plural(due.length, 'due mnemonic') + ', ' + plural(fresh.length, 'new one') : 'Nothing due: practicing all ' + all.length) + '</span></div>' +
      '<div id="card-area" aria-live="polite"></div>' + A.kbdHelp(false) + '</div>';
    A.setView('mn-drill:' + (chId || 'all'), html);
    document.title = 'Mnemonics drill — ' + APP;
    if (!queue.length) { main.querySelector('#card-area').innerHTML = '<div class="empty"><h2>No mnemonics yet</h2></div>'; return; }
    var player = A.Player(main.querySelector('#card-area'), {
      queue: queue, consume: true, mode: 'srs', source: true,
      done: function (stats) {
        return '<div class="empty"><h2>Drill finished</h2><p>You went through ' + plural(stats.rated, 'mnemonic') + '. They come back when they are due.</p><div class="empty__actions"><a class="btn btn--solid" href="#/mnemonics">Back to Mnemonics</a><button class="btn" type="button" data-rerender>Go again</button></div></div>';
      }
    });
    A.view.cleanup = function () { player.destroy(); };
  }

  /* ---------- Mnemonics PDF: study sheet, fill-in worksheet with answer key, pocket card ---------- */
  function strip(t) { return String(t || '').replace(/\*\*/g, ''); }
  function firstWord(w) { return strip(w).split(',')[0]; }
  /* one high-yield topic for a chapter's handout: letter = **word** (bold words become blanks in the worksheet) */
  SP.mnemonicTopic = function (ch) {
    return { topic: 'Mnemonics', isMn: true, items: (ch.mnemonics || []).map(function (m) {
      return m.name + ': ' + m.letters.map(function (l) { return l[0] + ' = **' + firstWord(l[1]) + '**'; }).join(' · ') + (m.short ? '. ' + strip(m.short) : '');
    }) };
  };
  var LAYOUTS = [
    { k: 'study', label: 'Study sheet', blurb: 'Every letter, word and detail, with the DSM check. Two columns, in chapter order.' },
    { k: 'worksheet', label: 'Fill-in worksheet', blurb: 'Only the letters, with a blank for each word; the answer key starts on a new page at the end.' },
    { k: 'pocket', label: 'Pocket card', blurb: 'One or two lines per mnemonic, sized to fit on a single page you can fold.' }
  ];
  function mnPdfSpec(list, prefs) {
    var byCh = [], seen = {};
    list.forEach(function (x) { if (!seen[x.ch.id]) { seen[x.ch.id] = { ch: x.ch, ms: [] }; byCh.push(seen[x.ch.id]); } seen[x.ch.id].ms.push(x.m); });
    var nums = byCh.map(function (g) { return g.ch.number; }).join(', ');
    var src = [A.BOOK, 'Chapter' + (byCh.length > 1 ? 's ' : ' ') + nums];
    var spec = { paper: prefs.paper, footer: A.ATTRIBUTION, title: 'DSM-5-TR mnemonics', chapters: [] };
    function head(m, ch) { return m.name + (m.original ? ' (app original)' : '') + ' · Ch ' + ch.number; }
    if (prefs.layout === 'pocket') {
      spec.maxPages = 1; spec.minPt = 5.4; spec.maxPt = 9.5;
      spec.chapters.push({ kicker: 'Pocket card', title: 'DSM-5-TR mnemonics', source: src, running: 'DSM-5-TR mnemonics',
        topics: byCh.map(function (g) {
          return { topic: 'Chapter ' + g.ch.number + ': ' + (g.ch.short || g.ch.title), items: g.ms.map(function (m) {
            return '**' + m.name + '** (' + strip(m['for']).replace(/\s*\(.*\)$/, '') + '): ' + m.letters.map(function (l) { var w = firstWord(l[1]); return w.indexOf(l[0]) === 0 ? w : l[0] + ' ' + w; }).join(', ') + (m.short ? '. *' + strip(m.short) + '*' : '');
          }) };
        }) });
      return spec;
    }
    if (prefs.layout === 'worksheet') {
      spec.blank = true; spec.fontSize = 10;
      var topics = [], key = [];
      byCh.forEach(function (g) {
        g.ms.forEach(function (m) {
          topics.push({ topic: head(m, g.ch), items: ['For: ' + strip(m['for'])].concat(m.letters.map(function (l) { return l[0] + ' = **' + strip(l[1]) + '**'; })) });
          key.push({ topic: head(m, g.ch), items: [m.letters.map(function (l) { return l[0] + ' = ' + strip(l[1]); }).join(' · ')].concat(m.caveat ? ['DSM check: ' + strip(m.caveat)] : []) });
        });
      });
      spec.chapters.push({ kicker: 'Mnemonics worksheet', title: 'Spell out each mnemonic', source: src, running: 'DSM-5-TR mnemonics worksheet', topics: topics });
      spec.chapters.push({ kicker: 'Answer key', title: 'Mnemonics worksheet: answers', source: src, running: 'DSM-5-TR mnemonics: answer key', topics: key });
      return spec;
    }
    spec.fontSize = 9.5;
    var st = [];
    byCh.forEach(function (g) {
      g.ms.forEach(function (m) {
        st.push({ topic: head(m, g.ch), items: ['*' + strip(m['for']) + '*'].concat(m.letters.map(function (l) { return '**' + l[0] + ' = ' + strip(l[1]) + '**' + (l[2] ? ': ' + strip(l[2]) : ''); })).concat(m.caveat ? ['DSM check: ' + m.caveat] : []) });
      });
    });
    spec.chapters.push({ kicker: 'Study sheet', title: 'DSM-5-TR mnemonics', source: src, running: 'DSM-5-TR mnemonics', topics: st });
    return spec;
  }
  function renderMnPdf() {
    var prefs = store.get('mnPdf', null) || { paper: (store.get('handoutPrefs', {}) || {}).paper || 'a4', layout: 'study', ch: (store.get('mnPrefs', {}) || {}).ch || 'all' };
    if (['study', 'worksheet', 'pocket'].indexOf(prefs.layout) < 0) prefs.layout = 'study';
    if (prefs.paper !== 'letter') prefs.paper = 'a4';
    var chs = A.allChapters().filter(function (ch) { return (ch.mnemonics || []).length; });
    if (prefs.ch !== 'all' && !chs.some(function (c) { return c.id === prefs.ch; })) prefs.ch = 'all';
    function seg(name, opts, cur) {
      return '<div class="seg" role="radiogroup">' + opts.map(function (o) { return '<label><input type="radio" name="' + name + '" value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' checked' : '') + '><span>' + o[1] + '</span></label>'; }).join('') + '</div>';
    }
    var html = '<div class="wrap page handout-page">' +
      '<header class="page__head"><p class="crumb"><a href="#/mnemonics">Mnemonics</a></p><h1>Mnemonics PDF</h1><p>Save, print or share the mnemonics as a study sheet, a fill-in worksheet with an answer key, or a one-page pocket card.</p></header>' +
      '<div class="handout-tools">' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Chapters</span>' + seg('mch', [['all', 'All']].concat(chs.map(function (c) { return [c.id, 'Ch ' + c.number]; })), prefs.ch) + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Paper</span>' + seg('paper', [['a4', 'A4'], ['letter', 'Letter']], prefs.paper) + '</div>' +
        '<div class="handout-tools__row"><span class="handout-tools__label">Layout</span>' + seg('layout', LAYOUTS.map(function (l) { return [l.k, l.label]; }), prefs.layout) + '</div>' +
        '<p class="muted mnpdf-blurb" id="mp-blurb"></p>' +
        '<div class="handout-tools__go"><button class="btn btn--solid" type="button" id="mp-go">Create PDF</button><p class="handout-fit" id="mp-fit" aria-live="polite"></p></div>' +
      '</div></div>';
    A.setView('mn-pdf', html);
    document.title = 'Mnemonics PDF — ' + APP;
    var alive = true, btn = main.querySelector('#mp-go'), fit = main.querySelector('#mp-fit');
    function list() { return mnemonicList().filter(function (x) { return prefs.ch === 'all' || x.ch.id === prefs.ch; }); }
    var WORDS = ['', 'one page', 'two pages', 'three pages', 'four pages', 'five pages', 'six pages'];
    function pages(n) { return WORDS[n] || n + ' pages'; }
    function refresh() {
      main.querySelector('#mp-blurb').textContent = LAYOUTS.filter(function (l) { return l.k === prefs.layout; })[0].blurb;
      var l = list();
      if (!l.length) { btn.disabled = true; fit.className = 'handout-fit is-warn'; fit.textContent = 'No mnemonics in this selection.'; return; }
      btn.disabled = true; fit.className = 'handout-fit'; fit.textContent = 'Checking the fit…';
      A.loadPdf().then(function (P) {
        if (!alive) return;
        var pl = P.plan(mnPdfSpec(l, prefs));
        btn.disabled = !pl.ok;
        fit.className = 'handout-fit' + (pl.ok ? '' : ' is-warn');
        fit.textContent = pl.ok ? plural(l.length, 'mnemonic') + ' on ' + pages(pl.count) + ' at ' + (Math.round(pl.size * 10) / 10) + ' pt.' : 'Too many mnemonics for one pocket page at a readable size; choose one chapter.';
      }).catch(function (e) { fit.className = 'handout-fit is-warn'; fit.textContent = A.pdfErrorMsg(e); });
    }
    main.querySelectorAll('.handout-tools input[type=radio]').forEach(function (i) {
      i.addEventListener('change', function () { prefs[i.name === 'mch' ? 'ch' : i.name] = i.value; store.set('mnPdf', prefs); refresh(); });
    });
    btn.addEventListener('click', function () {
      if (btn.disabled) return;
      btn.disabled = true; btn.textContent = 'Creating…';
      A.loadPdf().then(function (P) {
        return P.generate(mnPdfSpec(list(), prefs)).then(function (r) {
          P.save(r.blob, 'DSM5TR-mnemonics-' + prefs.layout + (prefs.ch === 'all' ? '' : '-' + prefs.ch) + '.pdf');
          fit.className = 'handout-fit'; fit.textContent = 'PDF created (' + pages(r.pages) + '). Check your downloads or share sheet.';
        });
      }).catch(function (e) { fit.className = 'handout-fit is-warn'; fit.textContent = A.pdfErrorMsg(e); })
        .then(function () { btn.textContent = 'Create PDF'; btn.disabled = false; });
    });
    refresh();
    A.view.cleanup = function () { alive = false; };
  }
  SP.mnPdfSpec = mnPdfSpec;
  SP.routes.mnemonics = renderMnemonics;
})();
