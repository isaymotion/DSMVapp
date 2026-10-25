/* DSM-5-TR Study Companion — case tools.
   #/assess              hub
   #/assess/substance    substance use assessment (11 criteria, severity, remission, withdrawal, codes)
   #/assess/scale/<id>   rating scales (AUDIT, CIWA-Ar, Fagerström, COWS, psychosis severity)
   #/assess/psychosis    schizophrenia assessment (criteria, course, severity, adherence, violence, induced vs independent)
   #/assess/case         case presentation builder (js/case.js)
   Everything is stored on this device only, under the key "case". */
(function () {
  'use strict';
  var SP = window.SP, A = SP._app;
  if (!A) return;
  var esc = A.esc, fmt = A.fmt, store = A.store, APP = A.APP;
  SP.routes = SP.routes || {};

  /* ---------- the case record ---------- */
  function fresh() { return { v: 1, created: Date.now(), updated: Date.now(), subSel: [], sub: {}, scales: {}, psy: {}, pres: {}, adm: [] }; }
  var C = store.get('case', null) || fresh();
  function save() { C.updated = Date.now(); store.set('case', C); }
  function getPath(o, path) { return path.split('.').reduce(function (x, k) { return x == null ? undefined : x[k]; }, o); }
  function setPath(o, path, v) {
    var ks = path.split('.'), last = ks.pop();
    ks.forEach(function (k) { if (o[k] == null || typeof o[k] !== 'object') o[k] = {}; o = o[k]; });
    o[last] = v;
  }
  var CASE = {
    get: function () { return C; }, save: save, getPath: getPath, setPath: setPath,
    reset: function () { C = fresh(); save(); },
    replace: function (o) { C = o; save(); }
  };

  /* Bind every [data-k] input inside root to the case record (auto-save). */
  function bind(root, onChange) {
    root.querySelectorAll('[data-k]').forEach(function (el) {
      var k = el.getAttribute('data-k'), v = getPath(C, k);
      if (el.type === 'checkbox') el.checked = !!v;
      else if (el.type === 'radio') el.checked = v != null && String(v) === el.value;
      else if (v != null) el.value = v;
      var ev = (el.tagName === 'SELECT' || el.type === 'checkbox' || el.type === 'radio') ? 'change' : 'input';
      el.addEventListener(ev, function () {
        var val = el.type === 'checkbox' ? el.checked : el.value;
        if (el.type === 'radio' && !el.checked) return;
        if (el.getAttribute('data-num') != null && val !== '') val = Number(val);
        setPath(C, k, val); save();
        if (onChange) onChange(k, el);
      });
    });
    root.querySelectorAll('textarea').forEach(autosize);
  }
  function autosize(t) {
    var f = function () { t.style.height = 'auto'; t.style.height = Math.max(t.scrollHeight + 2, 64) + 'px'; };
    t.addEventListener('input', f); setTimeout(f, 0);
  }
  function chk(k, label, extra) { return '<label class="as-check"><input type="checkbox" data-k="' + esc(k) + '"><span>' + label + '</span></label>' + (extra || ''); }
  function head(title, sub, crumb) {
    return '<header class="page__head lib-head"><p class="crumb"><a href="#/assess">Case tools</a>' + (crumb ? ' / ' + crumb : '') + '</p><div class="lib-head__row"><h1>' + title + '</h1></div>' + (sub ? '<p>' + sub + '</p>' : '') + '</header>';
  }
  function privacy() { return '<p class="as-privacy">Saved only on this device. Use initials or an alias, never names or record numbers. <a href="#/assess">Clear the case</a> when you are done.</p>'; }
  function copyBtn(id, label) { return '<button class="btn btn--small" type="button" data-copy="' + id + '">' + (label || 'Copy') + '</button>'; }
  function bindCopy(root) {
    root.querySelectorAll('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var el = document.getElementById(b.getAttribute('data-copy')); if (!el) return;
        var txt = el.innerText.trim();
        var done = function () { var o = b.textContent; b.textContent = 'Copied'; setTimeout(function () { b.textContent = o; }, 1400); };
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function () { fallbackCopy(txt); done(); }); else { fallbackCopy(txt); done(); }
      });
    });
  }
  function fallbackCopy(t) { var a = document.createElement('textarea'); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (e) {} a.remove(); }

  /* =====================================================================
     Substance logic
     ===================================================================== */
  var NAMES = { alcohol: 'Alcohol', tobacco: 'Tobacco', amphetamine: 'Amphetamine-type substance', cocaine: 'Cocaine', cannabis: 'Cannabis', opioid: 'Opioid', sedative: 'Sedative, hypnotic, or anxiolytic', hallucinogen: 'Other hallucinogen', inhalant: 'Inhalant', other: 'Other (or unknown) substance' };
  function subDef(id) { return (SP.tools.substances || []).filter(function (s) { return s.id === id; })[0]; }
  function subEval(id) {
    var s = subDef(id), r = (C.sub[id] = C.sub[id] || {}), crit = r.crit || {};
    var counted = SP.tools.sudCriteria.filter(function (c) {
      if (!crit[c.n]) return false;
      if (c.n === 11 && s.noWd) return false;
      if (c.rx && s.rx && r.prescribed) return false;
      return true;
    }).length;
    var sev = counted >= 6 ? 'severe' : counted >= 4 ? 'moderate' : counted >= 2 ? 'mild' : null;
    var status = r.status || 'current';
    var nm = NAMES[id] + (r.specific ? ' (' + r.specific + ')' : '');
    var out = { s: s, r: r, counted: counted, sev: sev, status: status, lines: [], warn: [] };
    var udIdx = sev === 'mild' ? 0 : sev ? 1 : 2;
    // withdrawal
    var wd = s.wd, w = r.wd || {}, wdMet = false, wdCount = 0;
    if (wd && w.on && status === 'current') {
      wdCount = wd.signs.filter(function (x, i) { return (w.signs || {})[i]; }).length;
      wdMet = wd.required ? (w.req && wdCount >= wd.need) : wdCount >= Math.max(wd.need, 1);
      out.wdCount = wdCount;
      out.wdMet = wdMet;
    }
    if (status !== 'current') {
      if (!sev) { out.warn.push('Count the criteria that were met when the disorder was active to set the severity.'); return out; }
      var code = sev === 'mild' ? s.ud.mildRem : s.ud.modsevRem;
      var spec = [status === 'early' ? 'in early remission' : 'in sustained remission'];
      if (r.controlled) spec.push('in a controlled environment');
      if (r.maint && s.maint) spec.push('on maintenance therapy');
      out.lines.push({ code: code, text: nm + ' use disorder, ' + sev + ', ' + spec.join(', ') });
      if (crit[4]) out.note = 'Craving is allowed in remission.';
      return out;
    }
    if (wdMet) {
      var kind = w.delirium && wd.codes.delirium ? 'delirium' : w.perc && wd.codes.perc ? 'perc' : 'plain';
      var wcode = wd.codes[kind][udIdx];
      var label = kind === 'delirium' ? nm + ' withdrawal delirium' : nm + ' withdrawal' + (kind === 'perc' ? ', with perceptual disturbances' : '');
      if (id === 'tobacco') {
        if (sev !== 'moderate' && sev !== 'severe') out.warn.push('The tobacco withdrawal code F17.203 assumes a moderate or severe tobacco use disorder.');
        out.lines.push({ code: 'F17.203', text: 'Tobacco withdrawal' + (sev ? ' (with ' + sev + ' tobacco use disorder)' : '') });
      } else {
        out.lines.push({ code: wcode, text: label + (sev ? ', with ' + sev + ' ' + nm.charAt(0).toLowerCase() + nm.slice(1) + ' use disorder' : ', without use disorder') + (kind === 'delirium' ? ' (specify acute or persistent, and activity level)' : '') });
        if (sev) out.warn.push('One combined code: do not code the use disorder separately.');
      }
      if (w.perc && !wd.codes.perc && kind !== 'delirium') out.warn.push('DSM-5-TR has no “with perceptual disturbances” specifier for this withdrawal.');
    } else if (sev) {
      var c2 = sev === 'mild' ? s.ud.mild : s.ud.modsev;
      out.lines.push({ code: c2, text: nm + ' use disorder, ' + sev + (r.maint && s.maint ? ', on maintenance therapy' : '') });
    }
    if (!sev && !wdMet) out.warn.push(counted === 1 ? 'One criterion: below the threshold of 2 for a use disorder.' : 'No use disorder criteria counted yet.');
    if (r.prescribed && s.rx && (crit[10] || crit[11])) out.note = 'Tolerance and withdrawal are not counted because the medicine is taken as prescribed under supervision.';
    return out;
  }
  function allSubLines() {
    var out = [];
    (C.subSel || []).forEach(function (id) { if (subDef(id)) subEval(id).lines.forEach(function (l) { out.push(l); }); });
    return out;
  }
  SP.caseSubLines = allSubLines;
  SP.caseSubEval = subEval;
  SP.caseSubDef = subDef;

  /* =====================================================================
     Pages
     ===================================================================== */
  function renderHub() {
    var t = SP.tools || {};
    var sc = (t.scales || []).map(function (s) { return '<li><a class="tool c-clin" href="#/assess/scale/' + s.id + '"><span class="tool__name">' + esc(s.name) + '</span><span class="tool__meta">' + esc(s.full) + scaleSummary(s) + '</span></a></li>'; }).join('');
    var subs = allSubLines(), psy = SP.casePsyLine ? SP.casePsyLine() : null;
    var html = '<div class="wrap page as-page">' + head('Case tools', 'Assess a patient step by step and turn the findings into a case presentation. The tools share one case, so the diagnosis lines, scores and risk summary flow into the presentation builder.') +
      '<ul class="helper-list as-hub">' +
      '<li><a class="tool c-case" href="#/assess/substance"><span class="tool__name">Substance use assessment</span><span class="tool__meta">The 11 criteria with interview questions, severity, remission, withdrawal and the combined ICD-10-CM code, for each substance.' + (subs.length ? ' <strong>' + subs.length + ' diagnosis line' + (subs.length > 1 ? 's' : '') + '.</strong>' : '') + '</span></a></li>' +
      '<li><a class="tool c-guide" href="#/assess/psychosis"><span class="tool__name">Schizophrenia assessment</span><span class="tool__meta">Criteria A–F, course specifiers, psychosis severity, adherence, violence risk, and induced versus independent psychosis.' + (psy ? ' <strong>' + esc(psy.code) + '</strong>' : '') + '</span></a></li>' +
      '<li><a class="tool c-drug" href="#/assess/case"><span class="tool__name">Case presentation builder</span><span class="tool__meta">One-liner, hospitalization history with a timeline, diagnosis with codes, formulation, risk, plan, discussion points and likely questions; print, copy or send to PsychInterview for slides.</span></a></li>' +
      '</ul><h2 class="as-h2">Rating scales</h2><ul class="helper-list">' + sc + '</ul>' +
      '<div class="as-box"><p><strong>Current case:</strong> started ' + esc(new Date(C.created).toLocaleString()) + ', last saved ' + esc(new Date(C.updated).toLocaleString()) + '.</p>' +
      '<div class="as-actions"><button class="btn" type="button" id="as-export">Save case file</button><label class="btn" for="as-import">Open case file</label><input type="file" id="as-import" accept="application/json,.json" hidden><button class="btn" type="button" id="as-clear">Clear the case</button></div>' +
      '<p class="muted">A case file is a small .json file you can keep or move to another device. It contains whatever you typed, so store it securely.</p></div>' +
      '<p class="helper__caution">Teaching and documentation aids built from the DSM-5-TR and freely available scales. They do not replace clinical judgment, a full examination or local protocols.</p></div>';
    A.setView('assess', html);
    document.title = 'Case tools — ' + APP;
    var m = A.main;
    m.querySelector('#as-clear').addEventListener('click', function () {
      if (!confirm('Clear everything in the current case? This cannot be undone. Save a case file first if you want to keep it.')) return;
      CASE.reset(); renderHub();
    });
    m.querySelector('#as-export').addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(C, null, 1)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
      a.download = 'case-' + new Date().toISOString().slice(0, 10) + '.json'; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    });
    m.querySelector('#as-import').addEventListener('change', function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        var o; try { o = JSON.parse(rd.result); } catch (er) { o = null; }
        if (!o || o.v !== 1 || !o.sub) { alert('That is not a case file from this app.'); return; }
        if (!confirm('Replace the current case with this file?')) return;
        CASE.replace(o); renderHub();
      };
      rd.readAsText(f);
    });
  }

  function renderSubstance() {
    var subs = SP.tools.substances;
    var html = '<div class="wrap page as-page">' + head('Substance use assessment', 'Choose each substance the patient uses or has used. For current use, count criteria over the **past 12 months**; for past use, count what was met when the disorder was active and set the remission status. The diagnosis line updates as you go.'.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'), 'Substance use') +
      privacy() +
      '<div class="as-chips" role="group" aria-label="Substances">' + subs.map(function (s) {
        var on = (C.subSel || []).indexOf(s.id) >= 0;
        return '<button type="button" class="as-chip' + (on ? ' is-on' : '') + '" aria-pressed="' + on + '" data-sel="' + s.id + '">' + esc(s.short || s.name) + '</button>';
      }).join('') + '</div><div id="as-subs"></div>' +
      '<section class="as-card as-sum"><div class="as-card__head"><h2>Diagnosis lines</h2>' + copyBtn('as-lines') + '</div><div id="as-lines"></div>' +
      '<p class="muted">Record the specific drug by name (e.g., “methamphetamine”). Moderate and severe share one code. When withdrawal is present, its code already includes the use disorder.</p></section></div>';
    A.setView('assess-sub', html);
    document.title = 'Substance use assessment — ' + APP;
    var m = A.main;
    m.querySelectorAll('[data-sel]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-sel'), i = C.subSel.indexOf(id);
        if (i >= 0) C.subSel.splice(i, 1); else C.subSel.push(id);
        save(); b.classList.toggle('is-on', i < 0); b.setAttribute('aria-pressed', i < 0);
        drawSubs();
      });
    });
    drawSubs();
    bindCopy(m);
  }
  function drawSubs() {
    var box = A.main.querySelector('#as-subs');
    box.innerHTML = (C.subSel || []).map(function (id) { return subCard(subDef(id)); }).join('') ||
      '<p class="as-empty">Pick a substance above to begin.</p>';
    bind(box, function () { refreshSub(); });
    box.querySelectorAll('[data-scale]').forEach(function (a) { a.addEventListener('click', function () {}); });
    refreshSub();
  }
  function q(s, t) { return t.replace(/\{d\}/g, s.noun).replace(/\{v\}/g, s.verb); }
  function subCard(s) {
    var p = 'sub.' + s.id + '.';
    var crit = SP.tools.sudCriteria.filter(function (c) { return !(c.n === 11 && s.noWd); }).map(function (c) {
      return '<li class="as-crit"><label class="as-check"><input type="checkbox" data-k="' + p + 'crit.' + c.n + '"><span><strong>' + c.n + '. ' + esc(c.short) + '</strong> ' + esc(c.text) +
        (c.rx && s.rx ? ' <em class="as-rx">Not counted if taken as prescribed.</em>' : '') + '</span></label>' +
        '<p class="as-ask">' + esc(q(s, c.ask)) + (c.tip ? ' <span class="muted">' + esc(c.tip) + '</span>' : '') + '</p>' +
        '<input class="as-note" type="text" placeholder="Evidence (what he said or did)" data-k="' + p + 'note.' + c.n + '"></li>';
    }).join('');
    var wd = '';
    if (s.wd) {
      wd = '<div class="as-wd" data-wdbox="' + s.id + '"><h3>Withdrawal now</h3>' + chk(p + 'wd.on', 'He is in withdrawal from ' + esc(s.noun) + ' (assess now)') +
        '<div class="as-wd__body"><p class="muted">' + esc(s.wd.timing) + (s.wd.need ? ' Needs <strong>' + (s.wd.required ? s.wd.required.toLowerCase() + ' plus ' : '') + s.wd.need + ' or more</strong> of these.' : '') + '</p>' +
        (s.wd.required ? chk(p + 'wd.req', '<strong>' + esc(s.wd.required) + '</strong>') : '') +
        '<div class="as-grid2">' + s.wd.signs.map(function (x, i) { return chk(p + 'wd.signs.' + i, esc(x)); }).join('') + '</div>' +
        (s.wd.perceptual ? chk(p + 'wd.perc', 'Hallucinations or illusions <strong>with intact reality testing</strong> (with perceptual disturbances)') : '') +
        (s.wd.delirium ? chk(p + 'wd.delirium', 'Disturbed attention and awareness: <strong>withdrawal delirium</strong>') : '') +
        (s.wd.note ? '<p class="muted">' + esc(s.wd.note) + '</p>' : '') + '<p class="as-wdres" data-wdres="' + s.id + '"></p></div></div>';
    }
    var scales = (s.scales || []).map(function (id) { var sc = SP.tools.scales.filter(function (x) { return x.id === id; })[0]; return sc ? '<a class="ref-chip" href="#/assess/scale/' + id + '">' + esc(sc.name) + scaleSummary(sc, true) + '</a>' : ''; }).join('');
    return '<section class="as-card" id="sub-' + s.id + '"><div class="as-card__head"><h2>' + esc(s.name) + '</h2><a class="muted" href="#/dx/' + s.dx + '">Criteria in the library</a></div>' +
      '<div class="as-row">' +
      '<label class="as-field"><span>Specific drug (optional)</span><input type="text" data-k="' + p + 'specific" placeholder="' + (s.id === 'amphetamine' ? 'methamphetamine' : s.id === 'sedative' ? 'alprazolam' : s.id === 'tobacco' ? 'cigarettes' : '') + '"></label>' +
      '<label class="as-field"><span>Status</span><select data-k="' + p + 'status"><option value="current">Current (past 12 months)</option><option value="early">In early remission (3 to under 12 months without criteria)</option><option value="sustained">In sustained remission (12 months or more)</option></select></label></div>' +
      '<div class="as-row">' + (s.rx ? chk(p + 'prescribed', 'Taken only as prescribed, under medical supervision') : '') +
      chk(p + 'controlled', 'In a controlled environment (remission only)') + (s.maint ? chk(p + 'maint', 'On maintenance therapy (' + esc(s.maint) + ')') : '') + '</div>' +
      '<div class="as-row"><label class="as-field"><span>Pattern (amount, route, frequency, age at first use, heaviest use)</span><textarea data-k="' + p + 'pattern" rows="2" placeholder="' + (s.id === 'alcohol' ? 'Gin, about 1 bottle daily since age 18; drinks in the morning' : s.id === 'tobacco' ? 'About 1½ packs (30 cigarettes) daily since age 15' : s.id === 'amphetamine' ? 'Smoked shabu on weekends at ages 15–17' : '') + '"></textarea></label>' +
      '<label class="as-field"><span>Last use</span><input type="text" data-k="' + p + 'last" placeholder="' + (s.id === 'amphetamine' ? 'Age 17 (about 12 years ago)' : 'The day before admission') + '"></label></div>' +
      '<p class="as-tally" data-tally="' + s.id + '"></p>' +
      '<ol class="as-crits">' + crit + '</ol>' + wd + (scales ? '<p class="as-scales"><span class="muted">Rating scales:</span> ' + scales + '</p>' : '') + '</section>';
  }
  function refreshSub() {
    var m = A.main;
    (C.subSel || []).forEach(function (id) {
      var e = subEval(id), t = m.querySelector('[data-tally="' + id + '"]');
      if (t) t.innerHTML = '<strong>' + e.counted + ' of ' + (e.s.noWd ? 10 : 11) + '</strong> criteria counted' + (e.sev ? ': <span class="as-sev as-sev--' + e.sev + '">' + e.sev + '</span>' : '') + (e.note ? ' <span class="muted">' + esc(e.note) + '</span>' : '');
      var wbox = m.querySelector('[data-wdbox="' + id + '"]');
      if (wbox) {
        var on = !!(C.sub[id] && C.sub[id].wd && C.sub[id].wd.on) && e.status === 'current';
        wbox.classList.toggle('is-on', on);
        var res = wbox.querySelector('[data-wdres]');
        if (res) res.innerHTML = on ? (e.wdMet ? '<strong class="as-ok">Withdrawal criteria met</strong> (' + e.wdCount + ' signs).' : '<strong class="as-no">Not met yet</strong>: ' + (e.wdCount || 0) + ' of ' + (e.s.wd.need || 1) + ' needed' + (e.s.wd.required ? ', plus dysphoric mood' : '') + '.') : (e.status !== 'current' ? 'Withdrawal applies only to current use.' : '');
      }
    });
    var box = m.querySelector('#as-lines');
    if (box) {
      var html = '';
      (C.subSel || []).forEach(function (id) {
        var e = subEval(id);
        html += e.lines.map(function (l) { return '<p class="as-line"><strong>' + esc(l.code) + '</strong> ' + esc(l.text) + '</p>'; }).join('');
        html += e.warn.map(function (w) { return '<p class="as-warn">' + esc(NAMES[id]) + ': ' + esc(w) + '</p>'; }).join('');
      });
      box.innerHTML = html || '<p class="muted">No diagnosis yet.</p>';
    }
  }

  /* ---------- rating scales ---------- */
  function scaleBy(id) { return (SP.tools.scales || []).filter(function (s) { return s.id === id; })[0]; }
  function scaleScore(s) {
    var a = (C.scales[s.id] || {}).ans || {};
    var n = 0, total = 0; s.items.forEach(function (it, i) { if (a[i] != null && a[i] !== '') { n++; total += Number(a[i]); } });
    var band = null; (s.bands || []).forEach(function (b) { if (total >= b[0] && total <= b[1]) band = b; });
    var sub = null; if (s.sub) { sub = 0; s.sub.items.forEach(function (i) { sub += Number(a[i] || 0); }); }
    return { n: n, total: total, band: band, sub: sub, ans: a };
  }
  function scaleSummary(s, short) {
    var r = scaleScore(s); if (!r.n) return '';
    if (s.noTotal) return short ? ' · rated' : ' <strong>Rated.</strong>';
    return short ? ' · ' + r.total : ' <strong>Score ' + r.total + (r.band ? ': ' + esc(r.band[2]) : '') + '.</strong>';
  }
  SP.caseScales = function () {
    return (SP.tools.scales || []).map(function (s) { var r = scaleScore(s); return r.n ? { s: s, r: r } : null; }).filter(Boolean);
  };
  function renderScale(id) {
    var s = scaleBy(id); if (!s) return A.route && renderHub();
    var p = 'scales.' + s.id + '.ans.';
    var items = s.items.map(function (it, i) {
      var opts = it.opts || (function () { var o = []; for (var k = 0; k <= it.max; k++) { var an = (it.anchors || []).filter(function (x) { return x[0] === k; })[0]; o.push([k, an ? an[1] : '']); } return o; })();
      return '<fieldset class="as-item"><legend><span class="as-item__n">' + (i + 1) + '</span> ' + esc(it.q) + '</legend><div class="as-opts">' + opts.map(function (o) {
        return '<label class="as-opt"><input type="radio" name="it' + i + '" value="' + o[0] + '" data-k="' + p + i + '" data-num><span class="as-opt__s">' + o[0] + '</span><span>' + esc(o[1]) + '</span></label>';
      }).join('') + '</div></fieldset>';
    }).join('');
    var html = '<div class="wrap page as-page">' + head(esc(s.name), esc(s.full) + '. <span class="muted">' + esc(s.source) + '</span>', esc(s.name)) +
      '<div class="as-score" id="as-score" aria-live="polite"></div>' + items +
      (s.note ? '<p class="as-note-box">' + esc(s.note) + '</p>' : '') +
      '<div class="as-actions"><button class="btn" type="button" id="as-sreset">Clear this scale</button><a class="btn btn--solid" href="#/assess' + (s.for === 'psychosis' ? '/psychosis' : '/substance') + '">Back to the assessment</a></div></div>';
    A.setView('assess-scale', html);
    document.title = s.name + ' — ' + APP;
    var m = A.main;
    function draw() {
      var r = scaleScore(s), el = m.querySelector('#as-score');
      if (s.noTotal) {
        el.innerHTML = '<p><strong>' + r.n + ' of ' + s.items.length + '</strong> domains rated.</p>' + (r.n ? '<p>' + s.items.map(function (it, i) { return r.ans[i] != null && r.ans[i] !== '' ? esc(it.q.replace(/^[IVX]+\.\s*/, '')) + ' ' + r.ans[i] : null; }).filter(Boolean).join(' · ') + '</p>' : '');
        return;
      }
      el.innerHTML = '<p class="as-score__n"><strong>' + r.total + '</strong> <span class="muted">(' + r.n + ' of ' + s.items.length + ' items answered)</span></p>' +
        (r.band ? '<p><strong>' + esc(r.band[2]) + '.</strong> ' + esc(r.band[3]) + '</p>' : '') +
        (s.sub ? '<p>' + esc(s.sub.label) + ': <strong>' + r.sub + '</strong>. <span class="muted">' + esc(s.sub.note) + '</span></p>' : '');
    }
    bind(m, function () { C.scales[s.id].at = Date.now(); save(); draw(); });
    m.querySelector('#as-sreset').addEventListener('click', function () { delete C.scales[s.id]; save(); renderScale(id); });
    draw();
  }

  /* ---------- schizophrenia assessment ---------- */
  var DOMAINS = ['Hallucinations', 'Delusions', 'Disorganized speech', 'Abnormal psychomotor behavior', 'Negative symptoms', 'Impaired cognition', 'Depression', 'Mania'];
  function psyEval() {
    var P = C.psy || {}, Z = SP.tools.schizo, a = P.a || {};
    var nA = Z.aSymptoms.filter(function (x) { return a[x.id]; }).length;
    var core = Z.aSymptoms.some(function (x) { return x.core && a[x.id]; });
    var aMet = nA >= 2 && core && !!P.a1m;
    var crit = P.crit || {};
    var allMet = aMet && ['b', 'c', 'd', 'e'].every(function (k) { return crit[k]; }) && (!P.asd || crit.f);
    var course = (Z.courses.filter(function (c) { return c.id === P.course; })[0] || {}).label;
    var sev = ((C.scales.crdpss || {}).ans) || {};
    var sevTxt = DOMAINS.map(function (d, i) { return sev[i] != null && sev[i] !== '' ? d.toLowerCase() + ' ' + sev[i] : null; }).filter(Boolean).join(', ');
    return { nA: nA, core: core, aMet: aMet, allMet: allMet, course: course, sevTxt: sevTxt, P: P };
  }
  SP.casePsyLine = function () {
    var e = psyEval(); if (!e.allMet) return null;
    var t = 'Schizophrenia' + (e.course ? ', ' + e.course.charAt(0).toLowerCase() + e.course.slice(1) : '') + (e.P.catatonia ? ', with catatonia (code also F06.1)' : '') + (e.sevTxt ? '; current severity (0–4): ' + e.sevTxt : '');
    return { code: 'F20.9', text: t };
  };
  SP.casePsyEval = psyEval;
  function renderPsychosis() {
    var Z = SP.tools.schizo;
    var group = function (title, key, list) { return '<fieldset class="as-fs"><legend>' + title + '</legend><div class="as-grid2">' + list.map(function (x, i) { return chk('psy.' + key + '.' + i, esc(x)); }).join('') + '</div></fieldset>'; };
    var html = '<div class="wrap page as-page">' + head('Schizophrenia assessment', 'Work through the criteria, course and current severity, then the two questions that drive a relapsing course: why he stops treatment, and how risky he is when he does.', 'Schizophrenia') + privacy() +
      '<nav class="as-toc"><a href="#ps-dx">Diagnosis</a><a href="#ps-sev">Severity</a><a href="#ps-ind">Induced or independent</a><a href="#ps-adh">Adherence</a><a href="#ps-risk">Risk</a></nav>' +
      '<section class="as-card" id="ps-dx"><div class="as-card__head"><h2>Criteria A–F</h2><a class="muted" href="#/dx/schizophrenia">Criteria in the library</a></div>' +
      '<h3>A. Characteristic symptoms</h3><ol class="as-crits">' + Z.aSymptoms.map(function (x) {
        return '<li class="as-crit">' + chk('psy.a.' + x.id, '<strong>' + esc(x.label) + '</strong>' + (x.core ? ' <span class="as-core">core</span>' : '')) + '<p class="as-ask">' + esc(x.ask) + '</p></li>';
      }).join('') + '</ol><p class="as-tally" id="ps-atally"></p>' +
      '<ol class="as-crits as-crits--plain">' + Z.criteria.map(function (c) { return '<li>' + chk(c.id === 'a1m' ? 'psy.a1m' : 'psy.crit.' + c.id, esc(c.label)) + '</li>'; }).join('') + '</ol>' +
      chk('psy.asd', 'He has a history of autism spectrum disorder or a childhood communication disorder') +
      '<div class="as-row"><label class="as-field"><span>Year of onset (first psychotic episode)</span><input type="text" inputmode="numeric" data-k="psy.onset" placeholder="e.g., 2012"></label>' +
      '<label class="as-field"><span>Course specifier (after 1 year)</span><select data-k="psy.course"><option value="">Choose</option>' + Z.courses.map(function (c) { return '<option value="' + c.id + '">' + esc(c.label) + '</option>'; }).join('') + '</select></label></div>' +
      '<p class="muted">' + esc(Z.courseNote) + '</p>' + chk('psy.catatonia', 'With catatonia (3 or more catatonic features; code also F06.1)') +
      '<div class="as-dxline" id="ps-line" aria-live="polite"></div></section>' +
      '<section class="as-card" id="ps-sev"><div class="as-card__head"><h2>Current severity</h2><a class="btn btn--small" href="#/assess/scale/crdpss">Rate with anchors</a></div><p class="muted">DSM-5-TR Clinician-Rated Dimensions of Psychosis Symptom Severity, past 7 days: 0 not present, 1 equivocal, 2 mild, 3 moderate, 4 severe.</p><div class="as-sevgrid">' +
      DOMAINS.map(function (d, i) { return '<label class="as-field"><span>' + d + '</span><select data-k="scales.crdpss.ans.' + i + '" data-num><option value="">–</option><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label>'; }).join('') + '</div></section>' +
      '<section class="as-card" id="ps-ind"><div class="as-card__head"><h2>Substance-induced or independent?</h2></div><p class="muted">Psychosis caused by a substance begins during or soon after use and usually settles within about a month of abstinence. Check what fits his history.</p>' +
      Z.induced.map(function (x) { return chk('psy.ind.' + x.id, esc(x.label)); }).join('') + '<p class="as-verdict" id="ps-ind-v"></p>' +
      '<label class="as-field as-field--wide"><span>Timeline of substance use and psychosis</span><textarea data-k="psy.indNote" placeholder="e.g., Methamphetamine use in high school (age 15–17). First psychosis at 21, 4 years after stopping; relapses since then follow stopping olanzapine."></textarea></label></section>' +
      '<section class="as-card" id="ps-adh"><div class="as-card__head"><h2>Adherence</h2></div>' +
      '<fieldset class="as-fs"><legend>How nonadherence was established</legend><div class="as-grid2">' + Z.adherence.methods.map(function (x, i) { return chk('psy.adhm.' + i, esc(x)); }).join('') + '</div></fieldset>' +
      '<label class="as-field"><span>Estimated share of doses taken in the month before admission</span><select data-k="psy.adhPct"><option value="">Choose</option><option>0% (stopped completely)</option><option>Under 50%</option><option>50–79%</option><option>80% or more</option></select></label>' +
      Z.adherence.reasons.map(function (g, gi) { return '<fieldset class="as-fs"><legend>Reasons: ' + esc(g.g) + '</legend><div class="as-grid2">' + g.items.map(function (x, i) { return chk('psy.adhr.' + gi + '_' + i, esc(x)); }).join('') + '</div></fieldset>'; }).join('') +
      '<label class="as-field as-field--wide"><span>In his own words: why does he stop?</span><textarea data-k="psy.adhWords" placeholder="“I’m not sick. The pills make me fat and sleepy.”"></textarea></label></section>' +
      '<section class="as-card" id="ps-risk"><div class="as-card__head"><h2>Violence and suicide risk</h2></div>' +
      group('Historical factors', 'vh', Z.violence.historical) + group('Current clinical factors', 'vc', Z.violence.clinical) + group('Future and risk-management factors', 'vf', Z.violence.future) + group('Protective factors', 'vp', Z.violence.protective) +
      '<div class="as-row"><label class="as-field"><span>Violence risk</span><select data-k="psy.vRisk"><option value="">Choose</option><option>Low</option><option>Moderate</option><option>High</option></select></label>' +
      '<label class="as-field"><span>Suicide risk</span><select data-k="psy.sRisk"><option value="">Choose</option><option>Low</option><option>Moderate</option><option>High</option></select></label></div>' +
      '<label class="as-field as-field--wide"><span>Risk formulation (time frame, scenario, what would raise or lower it)</span><textarea data-k="psy.riskNote"></textarea></label>' +
      '<p class="muted">' + esc(Z.violence.note) + '</p></section>' +
      '<div class="as-actions"><a class="btn btn--solid" href="#/assess/case">Go to the case presentation builder</a></div></div>';
    A.setView('assess-psy', html);
    document.title = 'Schizophrenia assessment — ' + APP;
    var m = A.main;
    function draw() {
      var e = psyEval();
      m.querySelector('#ps-atally').innerHTML = '<strong>' + e.nA + '</strong> Criterion A symptoms' + (e.nA >= 2 && e.core ? ' <span class="as-ok">(2 or more, including a core symptom)</span>' : e.nA >= 2 ? ' <span class="as-no">(need at least one of delusions, hallucinations or disorganized speech)</span>' : '');
      var line = SP.casePsyLine();
      var missing = [];
      if (!e.aMet) missing.push('A'); ['b', 'c', 'd', 'e'].forEach(function (k) { if (!(e.P.crit || {})[k]) missing.push(k.toUpperCase()); }); if (e.P.asd && !(e.P.crit || {}).f) missing.push('F');
      m.querySelector('#ps-line').innerHTML = line ? '<p class="as-line"><strong>' + esc(line.code) + '</strong> ' + esc(line.text) + '</p>' : '<p class="muted">Criteria not yet complete: ' + missing.join(', ') + '.</p>';
      var ind = e.P.ind || {}, Z2 = SP.tools.schizo.induced;
      var iv = Z2.filter(function (x) { return x.indep && ind[x.id]; }).length, sv = Z2.filter(function (x) { return !x.indep && ind[x.id]; }).length;
      m.querySelector('#ps-ind-v').innerHTML = iv ? '<strong class="as-ok">Points to an independent psychotic disorder</strong> (' + iv + ' feature' + (iv > 1 ? 's' : '') + ')' + (sv ? '; some features also fit substance effects, so describe both.' : '.') : sv ? '<strong class="as-no">Consistent with substance-induced symptoms</strong>; reassess after a month of abstinence.' : '';
    }
    bind(m, draw);
    draw();
  }

  SP.routes.assess = function (p) {
    if (p[1] === 'substance') return renderSubstance();
    if (p[1] === 'scale') return renderScale(p[2]);
    if (p[1] === 'psychosis') return renderPsychosis();
    if (p[1] === 'case' && SP.renderCase) return SP.renderCase(p[2]);
    return renderHub();
  };
  SP.caseApi = { CASE: CASE, bind: bind, chk: chk, head: head, privacy: privacy, copyBtn: copyBtn, bindCopy: bindCopy, autosize: autosize, NAMES: NAMES, DOMAINS: DOMAINS, scaleBy: scaleBy, scaleScore: scaleScore };
})();
