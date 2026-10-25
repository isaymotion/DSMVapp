/* DSM-5-TR Study Companion — case presentation pack (#/assess/case, #/assess/case/print).
   Built around the residency case presentation protocol: it prepares the parts that need clinical reasoning
   (hospitalization history, diagnosis with codes, differentials, formulation grid, risk, prognosis, goals,
   plan, discussion, questions, references) and sends them to PsychInterview, which holds the full protocol
   and builds the slides. */
(function () {
  'use strict';
  var SP = window.SP, A = SP._app;
  if (!A || !SP.caseApi) return;
  var esc = A.esc, fmt = A.fmt, APP = A.APP, K = SP.caseApi;
  var CASE = K.CASE;

  var GRID_ROWS = ['Predisposing', 'Precipitating', 'Perpetuating', 'Protective'];
  var GRID_COLS = ['Biological', 'Psychological', 'Socio-cultural', 'Spiritual'];
  var MEDS = { adherent: 'Adherent', partial: 'Partial', off: 'Stopped', unknown: 'Unknown' };
  var VIOL = { none: 'None', threats: 'Threats', destructive: 'Destructive', assault: 'Assaultive' };

  /* ---------- derived facts ---------- */
  function C() { return CASE.get(); }
  function admStats() {
    var adm = (C().adm || []).filter(function (a) { return a.date || a.trigger || a.meds; });
    var n = adm.length, non = 0, viol = 0, subs = 0, ints = [];
    var dated = adm.map(function (a) { return { a: a, t: toMonths(a.date) }; }).filter(function (x) { return x.t != null; }).sort(function (x, y) { return x.t - y.t; });
    adm.forEach(function (a) { if (a.meds === 'off' || a.meds === 'partial') non++; if (a.viol && a.viol !== 'none') viol++; if ((a.subs || '').trim()) subs++; });
    for (var i = 1; i < dated.length; i++) ints.push(dated[i].t - dated[i - 1].t);
    var med = null; if (ints.length) { var s = ints.slice().sort(function (x, y) { return x - y; }); med = s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2; }
    var span = dated.length > 1 ? dated[dated.length - 1].t - dated[0].t : null;
    return { n: n, non: non, viol: viol, subs: subs, median: med, span: span, dated: dated };
  }
  function toMonths(d) { var m = /^(\d{4})(?:-(\d{1,2}))?/.exec((d || '').trim()); return m ? Number(m[1]) * 12 + (m[2] ? Number(m[2]) - 1 : 6) : null; }
  function statsLine(s) {
    if (!s.n) return '';
    var p = [s.n + ' admission' + (s.n > 1 ? 's' : '')];
    if (s.span != null) p[0] += ' over ' + yrs(s.span);
    var b = [];
    if (s.non) b.push(s.non + ' of ' + s.n + ' followed stopping or reducing medication');
    if (s.viol) b.push(s.viol + ' of ' + s.n + ' involved threats, destructive or assaultive behavior');
    if (s.subs) b.push(s.subs + ' of ' + s.n + ' involved substance use');
    if (s.median != null) b.push('median interval between admissions ' + yrs(s.median));
    return p[0] + (b.length ? ': ' + b.join('; ') : '') + '.';
  }
  function yrs(m) { return m >= 24 ? (Math.round(m / 6) / 2) + ' years' : Math.round(m) + ' months'; }
  function hasText(re) { return re.test(JSON.stringify(C().pres || {}) + JSON.stringify(C().adm || [])); }
  function tags() {
    var t = {}, c = C();
    var psy = SP.casePsyEval ? SP.casePsyEval() : null;
    if (psy && (psy.aMet || /schizo/i.test((c.pres || {}).dxExtra || '')) || SP.casePsyLine && SP.casePsyLine()) t.schizo = 1;
    if (psy && psy.P.course && /^multi/.test(psy.P.course)) t.multi = 1;
    var s = admStats();
    if (s.n >= 2) { t.multi = 1; t.schizo = t.schizo || (psy && psy.nA ? 1 : 0); }
    if (s.non || (psy && Object.keys(psy.P.adhr || {}).some(function (k) { return psy.P.adhr[k]; }))) t.nonadherence = 1;
    if (s.viol || (psy && (psy.P.vRisk === 'Moderate' || psy.P.vRisk === 'High'))) t.violence = 1;
    (c.subSel || []).forEach(function (id) { var e = SP.caseSubEval(id); if (e.sev || e.lines.length) t[id] = 1; });
    if (hasText(/olanzapine/i)) t.olanzapine = 1;
    if (hasText(/clozapine/i)) t.clozapine = 1;
    return t;
  }
  function pick(list) { var t = tags(); return list.filter(function (x) { return x.when.some(function (w) { return t[w]; }); }); }
  SP.caseTags = tags;

  function dxLines() {
    var out = [], psy = SP.casePsyLine && SP.casePsyLine();
    if (psy) out.push(psy);
    (SP.caseSubLines ? SP.caseSubLines() : []).forEach(function (l) { out.push(l); });
    return out;
  }

  /* ---------- suggestions (inserted on request, then edited) ---------- */
  function sugg() {
    var t = tags(), c = C(), s = admStats(), psy = SP.casePsyEval ? SP.casePsyEval() : { P: {} };
    var subs = [], pastSubs = [];
    (c.subSel || []).forEach(function (id) {
      var e = SP.caseSubEval(id), nm = (e.r.specific || SP.caseApi.NAMES[id]).toLowerCase();
      if (id === 'tobacco' && !e.r.specific) nm = 'tobacco';
      if (e.status === 'current') { if (e.sev) subs.push(e.sev === 'mild' ? nm : 'heavy ' + nm); } else pastSubs.push(nm);
    });
    var G = {};
    G['Predisposing|Biological'] = ['Family history of psychiatric illness (if present)', t.amphetamine ? 'Methamphetamine use in adolescence' : '', 'Male sex, early-adult onset'].filter(Boolean).join('; ');
    G['Precipitating|Biological'] = [t.nonadherence ? 'Stopping olanzapine before admission' : '', t.alcohol ? 'Heavy drinking' : '', t.tobacco ? 'Resuming smoking, which lowers olanzapine levels (CYP1A2 induction)' : ''].filter(Boolean).join('; ');
    G['Perpetuating|Biological'] = [t.nonadherence ? 'Recurrent nonadherence; oral regimen' : '', t.alcohol ? 'Ongoing alcohol use disorder' : '', t.tobacco ? 'Tobacco use disorder' : '', 'Medication side effects (weight gain, sedation)'].filter(Boolean).join('; ');
    G['Protective|Biological'] = 'Clear response to olanzapine when taken; no major medical illness';
    G['Predisposing|Psychological'] = 'Premorbid personality traits; early adversity (if present)';
    G['Precipitating|Psychological'] = 'Belief that he no longer needs medication';
    G['Perpetuating|Psychological'] = 'Poor insight into illness; low motivation; cognitive impairment';
    G['Protective|Psychological'] = 'Recognizes some early warning signs when well (if present)';
    G['Predisposing|Socio-cultural'] = 'Low educational or occupational attainment; stigma';
    G['Precipitating|Socio-cultural'] = 'Conflict at home; loss of supervision of medication';
    G['Perpetuating|Socio-cultural'] = 'Cost and access to medicines; limited follow-up; peers who drink or smoke';
    G['Protective|Socio-cultural'] = 'Involved family; access to a mental health service';
    G['Protective|Spiritual'] = 'Religious community and faith as support (if present)';
    var ddx = [
      ['Schizoaffective disorder', 'Recurrent psychosis with relapses', 'No mood episodes for a majority of the illness (Criterion D of schizophrenia met)'],
      ['Bipolar I disorder with psychotic features', 'Aggression and agitation during relapses', 'No distinct manic episodes with decreased need for sleep and elevated mood'],
      [t.amphetamine || t.cocaine ? 'Methamphetamine-induced psychotic disorder' : 'Substance/medication-induced psychotic disorder', t.amphetamine ? 'History of methamphetamine use' : 'Substance use history', 'Psychosis recurs years after stopping and persists beyond 1 month of abstinence'],
      t.alcohol ? ['Alcohol-induced psychotic disorder', 'Heavy drinking', 'Psychosis is not confined to intoxication or withdrawal'] : null,
      ['Psychotic disorder due to another medical condition', 'Must be excluded', 'No neurological signs; normal workup']
    ].filter(Boolean);
    var goals = {
      imm: ['Ensure safety of patient and others; manage aggression with the least restrictive measures', t.alcohol ? 'Prevent and monitor alcohol withdrawal (CIWA-Ar), give thiamine' : '', 'Resume antipsychotic treatment and reduce psychotic symptoms'].filter(Boolean),
      short: ['Achieve remission of positive symptoms', t.nonadherence ? 'Start a long-acting injectable antipsychotic before discharge' : '', 'Psychoeducation for patient and family on relapse signs', t.alcohol || t.tobacco ? 'Begin treatment of ' + subs.filter(function (x) { return /alcohol|tobacco/.test(x); }).join(' and ') + ' use' : ''].filter(Boolean),
      long: ['Prevent relapse and readmission', 'Sustain adherence and abstinence', 'Restore social and occupational functioning', 'Monitor metabolic health']
    };
    var plans = [
      t.nonadherence ? 'Long-acting injectable antipsychotic: olanzapine (subcutaneous monthly Weltruza if available, or IM pamoate with 3-hour observation), or paliperidone, aripiprazole, haloperidol or fluphenazine decanoate depending on access and cost.' : '',
      'Confirm adherence (plasma level or LAI) before calling the illness treatment-resistant; clozapine if two adequate confirmed trials fail.',
      t.tobacco ? 'Treat tobacco use disorder (varenicline or combination NRT); adjust olanzapine if smoking stops or restarts.' : '',
      t.alcohol ? 'Alcohol use disorder: naltrexone or acamprosate with integrated psychosocial treatment; avoid disulfiram.' : '',
      'Metabolic monitoring (APA 2020): weight or BMI every visit for 6 months then quarterly; waist and blood pressure; fasting glucose or HbA1c and lipids at baseline, 4 months, then yearly.',
      'Urine drug screen this admission.',
      'Family psychoeducation; crisis and relapse-prevention plan; close follow-up within 7 days of discharge; consider assertive community treatment.'
    ].filter(Boolean);
    var prog = {
      good: ['Clear response to olanzapine', 'Family involvement', 'Acute onset of relapses with full remission between episodes (if true)'],
      poor: [s.n ? s.n + ' readmissions' : 'Multiple readmissions', 'Repeated nonadherence and poor insight', t.alcohol || t.tobacco ? 'Comorbid substance use' : '', s.viol ? 'Violence when unwell' : '', 'Male sex, early onset'].filter(Boolean)
    };
    var oneliner = (function () {
      var p = c.pres || {};
      var dur = psy.P && psy.P.onset ? ', ill since ' + psy.P.onset : '';
      return (p.alias || 'The patient') + ', a ' + (p.age || '__') + '-year-old ' + (p.sex || 'man') + ' with schizophrenia' + dur +
        (s.n ? ', on his ' + ordinal(s.n) + ' admission' : '') + (s.non ? ', ' + (s.non === s.n ? 'each admission' : s.non + ' of ' + s.n + ' admissions') + ' following nonadherence to ' + (t.olanzapine ? 'olanzapine' : 'antipsychotics') : '') +
        (subs.length ? ', with ' + joinAnd(subs) + ' use' : '') + (pastSubs.length ? (subs.length ? ' and past ' : ', with past ') + joinAnd(pastSubs) + ' use' : '') + ', admitted for ' + (p.reason || 'psychosis with aggression') + '.';
    })();
    return { grid: G, ddx: ddx, goals: goals, plans: plans, prog: prog, oneliner: oneliner };
  }
  function joinAnd(a) { return a.length < 2 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
  function ordinal(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }

  /* ---------- page ---------- */
  function rowsHTML() {
    return (C().adm || []).map(function (a, i) {
      var p = 'adm.' + i + '.';
      var sel = function (k, map) { return '<select data-k="' + p + k + '">' + '<option value="">–</option>' + Object.keys(map).map(function (x) { return '<option value="' + x + '">' + map[x] + '</option>'; }).join('') + '</select>'; };
      var ph = function (t) { return i === 0 ? t : ''; };
      return '<tr><th scope="row">' + (i + 1) + '</th>' +
        '<td><input type="text" data-k="' + p + 'date" placeholder="' + ph('2019-03') + '" aria-label="Admission ' + (i + 1) + ' date"></td>' +
        '<td><input type="text" data-k="' + p + 'los" placeholder="' + ph('21 days') + '" aria-label="Length of stay"></td>' +
        '<td><input type="text" data-k="' + p + 'trigger" placeholder="' + ph('Stopped olanzapine 2 months before') + '" aria-label="Trigger"></td>' +
        '<td>' + sel('meds', MEDS) + '</td>' +
        '<td><input type="text" data-k="' + p + 'subs" placeholder="' + ph('Alcohol') + '" aria-label="Substances"></td>' +
        '<td>' + sel('viol', VIOL) + '</td>' +
        '<td><input type="text" data-k="' + p + 'tx" placeholder="' + ph('Olanzapine 20 mg; remitted') + '" aria-label="Treatment and outcome"></td>' +
        '<td><button class="icon-btn as-del" type="button" data-del="' + i + '" aria-label="Remove admission ' + (i + 1) + '">×</button></td></tr>';
    }).join('');
  }
  function timelineSVG() {
    var s = admStats(); if (s.dated.length < 1) return '<p class="muted">Enter admission dates as YYYY-MM to draw the timeline.</p>';
    var t0 = s.dated[0].t, t1 = s.dated[s.dated.length - 1].t, span = Math.max(t1 - t0, 12);
    var W = 760, H = 150, L = 30, R = 30, y = 70;
    var X = function (t) { return L + (t - t0) / span * (W - L - R); };
    var col = { off: 'var(--bad)', partial: 'var(--m-hy)', adherent: 'var(--good)', unknown: 'var(--ink-3)' };
    var years = []; for (var yr = Math.floor(t0 / 12); yr <= Math.floor(t1 / 12) + 1; yr++) { var tt = yr * 12; if (tt >= t0 - 1 && tt <= t0 + span + 1) years.push(tt); }
    var g = '<line x1="' + L + '" y1="' + y + '" x2="' + (W - R) + '" y2="' + y + '" stroke="var(--rule)" stroke-width="3"/>' +
      years.map(function (tt) { return '<line x1="' + X(tt) + '" y1="' + (y + 18) + '" x2="' + X(tt) + '" y2="' + (y + 26) + '" stroke="var(--ink-3)"/><text x="' + X(tt) + '" y="' + (y + 42) + '" text-anchor="middle" font-size="12" fill="var(--ink-3)">' + (tt / 12) + '</text>'; }).join('') +
      s.dated.map(function (x, i) {
        var a = x.a, cx = X(x.t), c = col[a.meds] || col.unknown, v = a.viol && a.viol !== 'none';
        var idx = (C().adm || []).indexOf(a) + 1;
        return (v ? '<circle cx="' + cx + '" cy="' + y + '" r="15" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="' + (a.viol === 'assault' ? '0' : '4 3') + '"/>' : '') +
          '<circle cx="' + cx + '" cy="' + y + '" r="10" fill="' + c + '"><title>Admission ' + idx + ' (' + esc(a.date) + '): ' + esc(MEDS[a.meds] || 'adherence unknown') + (v ? ', ' + VIOL[a.viol].toLowerCase() : '') + '</title></circle>' +
          '<text x="' + cx + '" y="' + (y - (i % 2 ? 24 : 30)) + '" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">' + idx + '</text>';
      }).join('');
    return '<svg class="as-tl" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Timeline of ' + s.n + ' admissions">' + g + '</svg>' +
      '<p class="as-legend"><span><i style="background:var(--bad)"></i>Stopped medication</span><span><i style="background:var(--m-hy)"></i>Partial</span><span><i style="background:var(--good)"></i>Adherent</span><span><i class="ring"></i>Violence (dashed: threats or destructive; solid: assault)</span></p>';
  }

  function sect(id, title, body, note) { return '<section class="as-card" id="' + id + '"><div class="as-card__head"><h2>' + title + '</h2>' + (note || '') + '</div>' + body + '</section>'; }
  function area(k, label, ph, rows) { return '<label class="as-field as-field--wide"><span>' + label + '</span><textarea data-k="' + k + '" rows="' + (rows || 3) + '" placeholder="' + esc(ph || '') + '"></textarea></label>'; }
  function txt(k, label, ph) { return '<label class="as-field"><span>' + label + '</span><input type="text" data-k="' + k + '" placeholder="' + esc(ph || '') + '"></label>'; }
  function sbtn(what, label) { return '<button class="btn btn--small" type="button" data-sugg="' + what + '">' + (label || 'Insert suggestions') + '</button>'; }

  function render(sub) {
    if (sub === 'print') return renderPrint();
    var c = C(); c.pres = c.pres || {}; c.adm = c.adm || [];
    if (!c.adm.length) for (var i = 0; i < 3; i++) c.adm.push({});
    var lines = dxLines();
    var T = SP.tools.teaching;
    var html = '<div class="wrap page as-page">' + K.head('Case presentation builder', 'Prepares the parts of the case protocol that need clinical reasoning, using what you entered in the substance and schizophrenia tools. Insert suggestions, then edit them to fit your patient. Send the result to PsychInterview, which holds the full protocol and builds the slides.', 'Case presentation') + K.privacy() +
      '<nav class="as-toc"><a href="#cp-basics">Basics</a><a href="#cp-hosp">Hospitalizations</a><a href="#cp-dx">Diagnosis</a><a href="#cp-ddx">Differentials</a><a href="#cp-form">Formulation</a><a href="#cp-risk">Risk & prognosis</a><a href="#cp-plan">Goals & plan</a><a href="#cp-disc">Discussion</a><a href="#cp-send">Print & send</a></nav>' +
      sect('cp-basics', 'Title, objectives and one-liner',
        '<div class="as-row">' + txt('pres.title', 'Case title', 'The Revolving Door: Relapse, Nonadherence and Violence in Schizophrenia') + '</div>' +
        area('pres.objectives', 'Objectives (one per line)', 'To present a case of schizophrenia, multiple episodes, with recurrent readmissions\nTo discuss the factors behind nonadherence and relapse\nTo discuss evidence-based strategies, including long-acting injectables, to prevent readmission', 3) +
        '<div class="as-row">' + txt('pres.alias', 'Alias or initials', 'Mr. A') + txt('pres.age', 'Age', '29') + txt('pres.sex', 'Sex', 'man') + txt('pres.reason', 'Reason for this admission', 'psychosis and assaulting his mother after stopping olanzapine') + '</div>' +
        area('pres.oneliner', 'One-liner (identifying data summary)', '', 2) + '<p>' + sbtn('oneliner', 'Draft the one-liner') + '</p>') +
      sect('cp-hosp', 'Hospitalization history',
        '<p class="muted">One row per admission. Date as YYYY-MM. This becomes a table in Past Psychiatric History, and the summary line is ready to quote.</p>' +
        '<div class="table-wrap"><table class="as-adm"><thead><tr><th>#</th><th>Date</th><th>Stay</th><th>Trigger</th><th>Medicines</th><th>Substances</th><th>Behavior</th><th>Treatment / outcome</th><th></th></tr></thead><tbody id="cp-adm">' + rowsHTML() + '</tbody></table>' +
        '<p><button class="btn btn--small" type="button" id="cp-addadm">Add admission</button></p><div id="cp-tl"></div><p class="as-stat" id="cp-stats"></p>' +
        area('pres.medTrials', 'Medication trials (drug, dose, duration, response, why stopped)', 'Olanzapine 20 mg/day since 2015: good response; stopped repeatedly (“not sick”, weight gain)\nHaloperidol 10 mg/day 2013: partial response, EPS', 3)) +
      sect('cp-dx', 'Working diagnosis', '<div id="cp-lines">' + (lines.length ? lines.map(function (l) { return '<p class="as-line"><strong>' + esc(l.code) + '</strong> ' + esc(l.text) + '</p>'; }).join('') : '<p class="muted">Complete the <a href="#/assess/psychosis">schizophrenia</a> and <a href="#/assess/substance">substance</a> assessments to fill this in.</p>') + '</div>' +
        area('pres.dxExtra', 'Other diagnoses or edits (one per line)', 'e.g., Nonadherence to medical treatment (Z91.19 in DSM-5-TR; check the current ICD-10-CM subcode)', 2) +
        '<p class="muted">Tip: nonadherence to medical treatment (Z91.1-) and Z codes for housing or family problems can go under “Other conditions that may be a focus of clinical attention.”</p>', K.copyBtn('cp-lines')) +
      sect('cp-ddx', 'Differentials', '<p class="muted">Diagnosis, then features that make it more likely and less likely, as in the protocol table.</p>' + area('pres.ddx', 'One differential per line: Diagnosis | More likely | Less likely', '', 6) + '<p>' + sbtn('ddx') + '</p>') +
      sect('cp-form', 'Biopsychosocial formulation', '<div class="table-wrap"><table class="as-grid"><thead><tr><th></th>' + GRID_COLS.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
        GRID_ROWS.map(function (r) { return '<tr><th scope="row">' + r + '</th>' + GRID_COLS.map(function (c) { return '<td><textarea data-k="pres.grid.' + r + '|' + c + '" rows="3" aria-label="' + r + ', ' + c + '"></textarea></td>'; }).join('') + '</tr>'; }).join('') +
        '</tbody></table><p>' + sbtn('grid', 'Fill empty cells with suggestions') + '</p>' +
        area('pres.integrated', 'Integrated formulation (a short paragraph)', 'Mr. A is a young man whose olanzapine-responsive schizophrenia relapses whenever adherence lapses. Poor insight, heavy alcohol use and smoking-related falls in olanzapine levels drive the cycle, which ends in violence when he relapses…', 4)) +
      sect('cp-risk', 'Risk and prognosis', '<div id="cp-risk-sum"></div>' + area('pres.prognosis', 'Prognosis', '', 3) + '<label class="as-field"><span>Prognosis rating</span><select data-k="pres.progRating"><option value="">Choose</option><option>Good</option><option>Fair</option><option>Guarded</option><option>Poor</option></select></label><p>' + sbtn('prog', 'Insert good and poor prognostic factors') + '</p>') +
      sect('cp-plan', 'Goals of management and plan', '<div class="as-row3">' + area('pres.goalsImm', 'Immediate goals (one per line)', '', 4) + area('pres.goalsShort', 'Short-term goals', '', 4) + area('pres.goalsLong', 'Long-term goals', '', 4) + '</div><p>' + sbtn('goals') + '</p>' +
        area('pres.meds', 'Current medications (one per line: drug | dose | adherence or side effects)', 'Olanzapine | 20 mg at bedtime | restarted on admission', 3) +
        area('pres.plans', 'Further plans', '', 5) + '<p>' + sbtn('plans') + '</p>') +
      sect('cp-disc', 'Discussion, questions and references', '<p class="muted">Points chosen for this case from the diagnoses and history you entered. Untick any you will not present.</p><div id="cp-points"></div>' +
        area('pres.discussion', 'Your own discussion notes', '', 4) +
        '<h3>Questions your consultants may ask</h3><div id="cp-qs"></div>' +
        '<h3>References</h3><ol class="as-refs" id="cp-refs"></ol>') +
      sect('cp-send', 'Print, copy or send', '<p>Send everything above to your case in PsychInterview, where it fills the matching protocol sections (Past Psychiatric History, Substance History, Working Diagnosis, Differentials, Formulation, Prognosis, Goals, Plans, Discussion, References) without overwriting what you have typed there.</p>' +
        '<div class="as-actions"><button class="btn btn--solid" type="button" id="cp-send-pi">Send to PsychInterview</button><a class="btn" href="#/assess/case/print">Print or save as PDF</a></div><p class="as-stat" id="cp-sendmsg" aria-live="polite"></p>') +
      '</div>';
    A.setView('assess-case', html);
    document.title = 'Case presentation builder — ' + APP;
    var m = A.main;
    function refresh() {
      m.querySelector('#cp-tl').innerHTML = timelineSVG();
      m.querySelector('#cp-stats').textContent = statsLine(admStats());
      var p = SP.casePsyEval ? SP.casePsyEval().P : {};
      var rs = [p.vRisk ? 'Violence risk: <strong>' + esc(p.vRisk) + '</strong>' : '', p.sRisk ? 'Suicide risk: <strong>' + esc(p.sRisk) + '</strong>' : ''].filter(Boolean).join(' · ');
      m.querySelector('#cp-risk-sum').innerHTML = rs ? '<p>' + rs + ' <a href="#/assess/psychosis#ps-risk">Edit</a></p>' + (p.riskNote ? '<p>' + esc(p.riskNote) + '</p>' : '') : '<p class="muted">Rate violence and suicide risk in the <a href="#/assess/psychosis#ps-risk">schizophrenia assessment</a>.</p>';
      var pts = pick(T.points), skip = C().pres.skip || {};
      m.querySelector('#cp-points').innerHTML = pts.map(function (x) {
        return '<label class="as-point"><input type="checkbox" data-pt="' + x.id + '"' + (skip[x.id] ? '' : ' checked') + '><span><strong>' + esc(x.title) + '.</strong> ' + fmt(x.text) + '</span></label>';
      }).join('') || '<p class="muted">Complete the assessments to see suggested points.</p>';
      m.querySelectorAll('[data-pt]').forEach(function (b) { b.addEventListener('change', function () { var s = C().pres.skip = C().pres.skip || {}; s[b.getAttribute('data-pt')] = !b.checked; CASE.save(); }); });
      m.querySelector('#cp-qs').innerHTML = pick(T.questions).map(function (x) { return '<details class="as-qa"><summary>' + esc(x.q) + '</summary><p>' + esc(x.a) + '</p></details>'; }).join('');
      m.querySelector('#cp-refs').innerHTML = pick(T.refs).map(function (x) { return '<li>' + esc(x.text) + '</li>'; }).join('');
    }
    K.bind(m, function (k) { if (/^adm\./.test(k)) refresh(); });
    m.querySelector('#cp-addadm').addEventListener('click', function () { C().adm.push({}); CASE.save(); render(); setTimeout(function () { var r = m.querySelectorAll('#cp-adm tr'); var el = r[r.length - 1] && r[r.length - 1].querySelector('input'); if (el) el.focus(); }, 30); });
    m.querySelectorAll('[data-del]').forEach(function (b) { b.addEventListener('click', function () { var i = Number(b.getAttribute('data-del')); var a = C().adm[i]; if (a && Object.keys(a).length && !confirm('Remove admission ' + (i + 1) + '?')) return; C().adm.splice(i, 1); CASE.save(); render(); }); });
    m.querySelectorAll('[data-sugg]').forEach(function (b) { b.addEventListener('click', function () { applySugg(b.getAttribute('data-sugg')); render(); var el = document.getElementById(b.closest('.as-card').id); if (el) el.scrollIntoView(); }); });
    m.querySelector('#cp-send-pi').addEventListener('click', sendToPI);
    K.bindCopy(m);
    refresh();
  }
  function appendTo(k, text) { var cur = CASE.getPath(C(), k) || ''; if (cur.indexOf(text) >= 0) return; CASE.setPath(C(), k, cur ? cur.replace(/\s+$/, '') + '\n' + text : text); }
  function applySugg(w) {
    var S = sugg(), p = C().pres;
    if (w === 'oneliner') p.oneliner = S.oneliner;
    if (w === 'ddx') appendTo('pres.ddx', S.ddx.map(function (r) { return r.join(' | '); }).join('\n'));
    if (w === 'grid') { p.grid = p.grid || {}; Object.keys(S.grid).forEach(function (k) { if (!(p.grid[k] || '').trim() && S.grid[k]) p.grid[k] = S.grid[k]; }); }
    if (w === 'prog') appendTo('pres.prognosis', 'Good prognostic factors: ' + S.prog.good.join('; ') + '.\nPoor prognostic factors: ' + S.prog.poor.join('; ') + '.');
    if (w === 'goals') { appendTo('pres.goalsImm', S.goals.imm.join('\n')); appendTo('pres.goalsShort', S.goals.short.join('\n')); appendTo('pres.goalsLong', S.goals.long.join('\n')); }
    if (w === 'plans') appendTo('pres.plans', S.plans.join('\n'));
    CASE.save();
  }

  /* ---------- compile (shared by print and PsychInterview) ---------- */
  function linesOf(s) { return (s || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean); }
  function compile() {
    var c = C(), p = c.pres || {}, s = admStats(), T = SP.tools.teaching, skip = p.skip || {};
    var lines = dxLines(), extra = linesOf(p.dxExtra);
    var psyLine = SP.casePsyLine && SP.casePsyLine();
    var primary = psyLine ? psyLine.code + ' ' + psyLine.text : '';
    var other = (SP.caseSubLines ? SP.caseSubLines() : []).map(function (l) { return l.code + ' ' + l.text; }).concat(extra);
    var adm = (c.adm || []).filter(function (a) { return a.date || a.trigger || a.meds; });
    var subRows = (c.subSel || []).map(function (id) {
      var e = SP.caseSubEval(id), r = e.r, crit = r.crit || {};
      var names = SP.tools.sudCriteria.filter(function (x) { return crit[x.n]; }).map(function (x) { return x.short.toLowerCase(); });
      var sc = (e.s.scales || []).map(function (sid) { var S = SP.caseApi.scaleBy(sid), R = SP.caseApi.scaleScore(S); return R.n ? S.name + ' ' + R.total + (R.band ? ' (' + R.band[2] + ')' : '') : ''; }).filter(Boolean);
      return {
        id: id, name: SP.caseApi.NAMES[id] + (r.specific ? ' (' + r.specific + ')' : ''), pattern: r.pattern || '', last: r.last || '',
        status: e.status === 'current' ? 'Current' : e.status === 'early' ? 'In early remission' : 'In sustained remission',
        summary: e.counted + '/' + (e.s.noWd ? 10 : 11) + ' criteria' + (names.length ? ' (' + names.join(', ') + ')' : '') + (e.sev ? '; ' + e.sev : '') + (e.lines[0] ? '; ' + e.lines[0].code : '') + (sc.length ? '; ' + sc.join('; ') : '') + (e.wdMet ? '; in withdrawal now' : '')
      };
    });
    var psy = SP.casePsyEval ? SP.casePsyEval().P : {};
    var Z = SP.tools.schizo;
    var adhReasons = []; Z.adherence.reasons.forEach(function (g, gi) { g.items.forEach(function (x, i) { if ((psy.adhr || {})[gi + '_' + i]) adhReasons.push(x); }); });
    var vh = (psy.vh || {}), vc = (psy.vc || {}), vf = (psy.vf || {}), vp = (psy.vp || {});
    var pickL = function (list, o) { return list.filter(function (x, i) { return o[i]; }); };
    var points = pick(T.points).filter(function (x) { return !skip[x.id]; });
    return {
      title: p.title || '', objectives: linesOf(p.objectives), oneliner: p.oneliner || '',
      admissions: adm, stats: statsLine(s), medTrials: p.medTrials || '',
      subRows: subRows, primary: primary, other: other, lines: lines.concat(extra.map(function (e) { return { code: '', text: e }; })),
      ddx: linesOf(p.ddx).map(function (l) { var x = l.split('|').map(function (y) { return y.trim(); }); return [x[0] || '', x[1] || '', x[2] || '']; }),
      grid: p.grid || {}, integrated: p.integrated || '',
      adherence: { reasons: adhReasons, words: psy.adhWords || '', pct: psy.adhPct || '' },
      risk: { v: psy.vRisk || '', s: psy.sRisk || '', acute: pickL(Z.violence.clinical, vc), chronic: pickL(Z.violence.historical, vh), future: pickL(Z.violence.future, vf), protective: pickL(Z.violence.protective, vp), note: psy.riskNote || '' },
      prognosis: p.prognosis || '', progRating: p.progRating || '',
      goals: { imm: linesOf(p.goalsImm), short: linesOf(p.goalsShort), long: linesOf(p.goalsLong) },
      meds: linesOf(p.meds).map(function (l) { var x = l.split('|').map(function (y) { return y.trim(); }); return [x[0] || '', x[1] || '', '', x[2] || '']; }),
      plans: p.plans || '',
      points: points, discussion: p.discussion || '',
      questions: pick(T.questions), refs: pick(T.refs).map(function (x) { return x.text; }),
      scales: (SP.caseScales ? SP.caseScales() : []).map(function (x) { return x.s.name + (x.s.noTotal ? ': ' + SP.caseApi.DOMAINS.map(function (d, i) { return x.r.ans[i] != null && x.r.ans[i] !== '' ? d + ' ' + x.r.ans[i] : null; }).filter(Boolean).join(', ') : ' ' + x.r.total + (x.r.band ? ' (' + x.r.band[2] + ')' : '')); })
    };
  }
  SP.caseCompile = compile;
  function plainMd(s) { return String(s || '').replace(/\*\*(.+?)\*\*/g, '$1'); }

  /* ---------- print view ---------- */
  function renderPrint() {
    var d = compile();
    var li = function (a) { return a.length ? '<ul>' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : ''; };
    var para = function (t) { return t ? '<p>' + esc(t).replace(/\n/g, '<br>') + '</p>' : ''; };
    var h = '<div class="wrap page as-print" id="cp-print"><div class="as-actions no-print"><a class="btn" href="#/assess/case">Back to the builder</a><button class="btn btn--solid" type="button" id="cp-doprint">Print or save as PDF</button>' + K.copyBtn('cp-doc', 'Copy all text') + '</div><article id="cp-doc">' +
      '<h1>' + esc(d.title || 'Case presentation') + '</h1>' + (d.objectives.length ? '<h2>Objectives</h2>' + li(d.objectives) : '') +
      (d.oneliner ? '<h2>Identifying data</h2>' + para(d.oneliner) : '') +
      (d.admissions.length ? '<h2>Hospitalization history</h2><p><strong>' + esc(d.stats) + '</strong></p>' + timelineSVG() + '<table class="as-ptab"><thead><tr><th>#</th><th>Date</th><th>Stay</th><th>Trigger</th><th>Medicines</th><th>Substances</th><th>Behavior</th><th>Treatment / outcome</th></tr></thead><tbody>' +
        d.admissions.map(function (a, i) { return '<tr><td>' + (i + 1) + '</td><td>' + esc(a.date || '') + '</td><td>' + esc(a.los || '') + '</td><td>' + esc(a.trigger || '') + '</td><td>' + esc(MEDS[a.meds] || '') + '</td><td>' + esc(a.subs || '') + '</td><td>' + esc(VIOL[a.viol] || '') + '</td><td>' + esc(a.tx || '') + '</td></tr>'; }).join('') + '</tbody></table>' : '') +
      (d.medTrials ? '<h3>Medication trials</h3>' + para(d.medTrials) : '') +
      (d.adherence.reasons.length || d.adherence.words ? '<h3>Adherence</h3>' + (d.adherence.pct ? '<p>Doses taken before admission: ' + esc(d.adherence.pct) + '</p>' : '') + li(d.adherence.reasons) + (d.adherence.words ? '<p><em>' + esc(d.adherence.words) + '</em></p>' : '') : '') +
      (d.subRows.length ? '<h2>Substance history</h2><table class="as-ptab"><thead><tr><th>Substance</th><th>Pattern</th><th>Last use, status</th><th>Criteria, severity, code, scales</th></tr></thead><tbody>' + d.subRows.map(function (r) { return '<tr><td>' + esc(r.name) + '</td><td>' + esc(r.pattern) + '</td><td>' + esc([r.last, r.status].filter(Boolean).join('; ')) + '</td><td>' + esc(r.summary) + '</td></tr>'; }).join('') + '</tbody></table>' : '') +
      (d.scales.length ? '<h3>Rating scales</h3>' + li(d.scales) : '') +
      (d.ddx.length ? '<h2>Differentials</h2><table class="as-ptab"><thead><tr><th>Diagnosis</th><th>More likely</th><th>Less likely</th></tr></thead><tbody>' + d.ddx.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('') + '</tbody></table>' : '') +
      (d.lines.length ? '<h2>Working diagnosis</h2>' + li(d.lines.map(function (l) { return (l.code ? l.code + ' ' : '') + l.text; })) : '') +
      '<h2>Biopsychosocial formulation</h2><table class="as-ptab"><thead><tr><th></th>' + GRID_COLS.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' + GRID_ROWS.map(function (r) { return '<tr><th>' + r + '</th>' + GRID_COLS.map(function (c) { return '<td>' + esc(d.grid[r + '|' + c] || '') + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>' + para(d.integrated) +
      (d.risk.v || d.risk.s ? '<h2>Risk assessment</h2><p>Violence risk: ' + esc(d.risk.v || '–') + ' · Suicide risk: ' + esc(d.risk.s || '–') + '</p>' + (d.risk.chronic.length ? '<p><strong>Historical:</strong> ' + esc(d.risk.chronic.join('; ')) + '</p>' : '') + (d.risk.acute.length ? '<p><strong>Current:</strong> ' + esc(d.risk.acute.join('; ')) + '</p>' : '') + (d.risk.protective.length ? '<p><strong>Protective:</strong> ' + esc(d.risk.protective.join('; ')) + '</p>' : '') + para(d.risk.note) : '') +
      (d.prognosis ? '<h2>Prognosis' + (d.progRating ? ': ' + esc(d.progRating) : '') + '</h2>' + para(d.prognosis) : '') +
      (d.goals.imm.length || d.goals.short.length || d.goals.long.length ? '<h2>Goals of management</h2><table class="as-ptab"><thead><tr><th>Immediate</th><th>Short-term</th><th>Long-term</th></tr></thead><tbody><tr><td>' + li(d.goals.imm) + '</td><td>' + li(d.goals.short) + '</td><td>' + li(d.goals.long) + '</td></tr></tbody></table>' : '') +
      (d.meds.length ? '<h3>Current medications</h3>' + li(d.meds.map(function (r) { return r.filter(Boolean).join(', '); })) : '') +
      (d.plans ? '<h3>Further plans</h3>' + li(linesOf(d.plans)) : '') +
      (d.points.length || d.discussion ? '<h2>Discussion</h2>' + d.points.map(function (x) { return '<p><strong>' + esc(x.title) + '.</strong> ' + esc(plainMd(x.text)) + '</p>'; }).join('') + para(d.discussion) : '') +
      (d.questions.length ? '<h2>Anticipated questions</h2>' + d.questions.map(function (x) { return '<p><strong>Q: ' + esc(x.q) + '</strong><br>A: ' + esc(x.a) + '</p>'; }).join('') : '') +
      (d.refs.length ? '<h2>References</h2><ol>' + d.refs.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ol>' : '') +
      '</article></div>';
    h = h.replace(/<table class="as-ptab">/g, '<div class="table-wrap"><table class="as-ptab">').replace(/<\/table>/g, '</table></div>');
    A.setView('assess-print', h);
    document.title = 'Case summary — ' + APP;
    K.bindCopy(A.main);
    A.main.querySelector('#cp-doprint').addEventListener('click', function () {
      document.body.classList.add('print-handout');
      var off = function () { document.body.classList.remove('print-handout'); window.removeEventListener('afterprint', off); };
      window.addEventListener('afterprint', off);
      window.print();
      setTimeout(off, 1500);
    });
  }

  /* =====================================================================
     Send to PsychInterview (same origin: isaymotion.github.io)
     PsychInterview reads localStorage "psyCaseApp.inbox" on start (and on the storage event),
     asks which case to merge into, and fills empty fields without overwriting.
     ===================================================================== */
  var PI_URL = '../case-psychinterview/';
  function piSubCheck(id) { return { alcohol: 'Alcohol', tobacco: 'Tobacco / nicotine', cannabis: 'Cannabis', amphetamine: 'Stimulants', cocaine: 'Stimulants', opioid: 'Opioids', sedative: 'Sedatives', hallucinogen: 'Hallucinogens', inhalant: 'Other substances', other: 'Other substances' }[id]; }
  function piPayload() {
    var d = compile(), f = {};
    if (d.title) f.caseTitle = d.title;
    if (d.objectives.length) f.objectives = d.objectives;
    if (d.oneliner) f.idsummary = d.oneliner;
    if (d.admissions.length) {
      f.episodes = d.admissions.map(function (a, i) {
        return ['Admission ' + (i + 1) + (a.date ? ' (' + a.date + ')' : '') + (a.trigger ? ': ' + a.trigger : ''),
          [a.los ? 'Stay ' + a.los : '', a.viol && a.viol !== 'none' ? VIOL[a.viol] + ' behavior' : ''].filter(Boolean).join('; '),
          a.tx || '', [a.meds ? 'Medicines: ' + MEDS[a.meds].toLowerCase() : '', a.subs ? 'Substances: ' + a.subs : ''].filter(Boolean).join('; ')];
      });
      f.hosp = d.stats;
    }
    if (d.medTrials) f.pastMeds = d.medTrials;
    if (d.subRows.length) {
      f.subChecks = d.subRows.map(function (r) { return piSubCheck(r.id); }).filter(function (x, i, a) { return x && a.indexOf(x) === i; });
      f.subTable = d.subRows.map(function (r) { return [r.name, r.pattern, [r.last, r.status === 'Current' ? '' : r.status].filter(Boolean).join('; ') || r.status, r.summary]; });
    }
    if (d.primary) f.primaryDx = d.primary;
    if (d.other.length) f.otherDx = d.other.join('\n');
    if (d.ddx.length) f.ddx = d.ddx;
    var g = {}; Object.keys(d.grid).forEach(function (k) { if ((d.grid[k] || '').trim()) g[k] = d.grid[k]; }); if (Object.keys(g).length) f.bps = g;
    if (d.integrated) f.integrated = d.integrated;
    if (d.risk.v) f.violenceRisk = d.risk.v;
    if (d.risk.s) f.suicideRisk = d.risk.s;
    var rf = {};
    if (d.risk.acute.length) rf['Acute risk factors'] = d.risk.acute.join('; ');
    if (d.risk.chronic.length) rf['Chronic risk factors'] = d.risk.chronic.join('; ');
    if (d.risk.protective.length) rf['Protective factors'] = d.risk.protective.join('; ');
    if (d.risk.note || d.risk.future.length) rf['Overall rationale'] = [d.risk.note, d.risk.future.length ? 'Risk-management factors: ' + d.risk.future.join('; ') : ''].filter(Boolean).join(' ');
    if (Object.keys(rf).length) f.riskForm = rf;
    if (d.progRating) f.progRating = d.progRating;
    if (d.prognosis) f.prognosis = d.prognosis;
    if (d.goals.imm.length) f.goalsImm = d.goals.imm;
    if (d.goals.short.length) f.goalsShort = d.goals.short;
    if (d.goals.long.length) f.goalsLong = d.goals.long;
    if (d.meds.length) f.meds = d.meds;
    if (d.plans) f.furtherPlans = d.plans;
    var disc = d.points.map(function (x) { return x.title + '. ' + plainMd(x.text); }).concat(d.discussion ? [d.discussion] : []);
    if (disc.length) f.discussion = disc.join('\n\n');
    if (d.refs.length) f.refs = d.refs;
    var qa = d.questions.map(function (x) { return 'Q: ' + x.q + '\nA: ' + x.a; }).join('\n\n');
    return { from: 'DSMVapp', v: 1, sent: Date.now(), title: d.title || d.oneliner.slice(0, 60) || 'Case from DSM-5-TR Study Companion', fields: f, notes: qa ? 'Anticipated questions\n\n' + qa : '' };
  }
  SP.casePIPayload = piPayload;
  function sendToPI() {
    var msg = A.main.querySelector('#cp-sendmsg');
    var pl = piPayload(), n = Object.keys(pl.fields).length;
    if (!n) { msg.textContent = 'Nothing to send yet: fill in some sections first.'; return; }
    try {
      var box = []; try { box = JSON.parse(localStorage.getItem('psyCaseApp.inbox') || '[]'); } catch (e) { box = []; }
      if (!Array.isArray(box)) box = [];
      box = box.filter(function (x) { return x && x.from !== 'DSMVapp'; });
      box.push(pl);
      localStorage.setItem('psyCaseApp.inbox', JSON.stringify(box));
    } catch (e) { msg.textContent = 'Could not save for PsychInterview (storage is blocked or full).'; return; }
    msg.innerHTML = 'Ready: ' + n + ' protocol fields are waiting in PsychInterview. <a href="' + PI_URL + '" target="_blank" rel="noopener">Open PsychInterview</a> and choose the case to merge into. (If it is open as a home-screen app, open it in the same browser instead: home-screen apps keep separate storage.)';
  }

  SP.renderCase = render;
})();
