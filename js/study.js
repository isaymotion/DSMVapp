/* DSM-5-TR Study Companion — study tools (Stage 1).
   Today's 10 minutes, My progress and the weak-spot drill, the time-rule drill, notes and highlights,
   listen mode and the one-page chapter summary. Everything here is built from the chapter data that
   already exists, so each new chapter gets these tools automatically. Uses the internal API that
   js/app.js publishes as SP._app; all progress stays in localStorage under the app's prefix (and so
   in progress backups). */
(function () {
  'use strict';
  var SP = window.SP, A = SP._app;
  if (!A) return;
  var store = A.store, esc = A.esc, fmt = A.fmt, plain = A.plain, plural = A.plural, pct = A.pct, shuffle = A.shuffle;
  var main = A.main, APP = A.APP;
  SP.routes = SP.routes || {};
  SP.hooks = SP.hooks || {};

  function onRouteCleanup(fn) {
    var prev = A.view.cleanup;
    A.view.cleanup = function () { if (prev) prev(); fn(); };
  }

  /* =====================================================================
     Progress statistics
     ===================================================================== */
  function cardTag(r) { return r.c.tag || r.deck.short; }
  function weakScore(r) {
    var L = A.log()[r.key], s = A.srs()[r.key], m = A.mistakes()[r.key], w = 0;
    if (L && L.n) w += (1 - L.ok / L.n) * 2;
    if (L && L.fc) w += 1.5 * L.fc;
    if (L && L.lg) w += 0.6;
    if (L && L.c === 0) w += 0.4;
    if (m) w += 1.5;
    if (s) { w += Math.min(3, s.l || 0) * 0.5; if (s.e < 2.1) w += 0.5; }
    return w;
  }
  function chapterStats(ch) {
    var LOG = A.log(), SRS = A.srs(), tags = {}, tot = { total: 0, seen: 0, n: 0, ok: 0, mastered: 0, fc: 0 };
    A.cardList().forEach(function (r) {
      if (r.ch.id !== ch.id) return;
      var t = cardTag(r), g = tags[t] || (tags[t] = { tag: t, total: 0, seen: 0, n: 0, ok: 0, mastered: 0, fc: 0, weak: 0, deck: r.deck });
      var L = LOG[r.key], s = SRS[r.key];
      [g, tot].forEach(function (x) {
        x.total++;
        if (L || s) x.seen++;
        if (L) { x.n += L.n; x.ok += L.ok; x.fc += L.fc || 0; }
        if (A.cardStatus(r.key) === 'mastered') x.mastered++;
      });
      g.weak += weakScore(r);
    });
    var list = Object.keys(tags).map(function (k) { return tags[k]; });
    list.forEach(function (g) { g.acc = g.n ? g.ok / g.n : null; });
    list.sort(function (a, b) {
      var ra = a.acc == null ? 2 : a.acc, rb = b.acc == null ? 2 : b.acc;
      return ra - rb || b.weak - a.weak || a.tag.localeCompare(b.tag);
    });
    tot.acc = tot.n ? tot.ok / tot.n : null;
    return { tot: tot, tags: list };
  }
  function weakKeys(chId, tag, limit) {
    var list = A.cardList().filter(function (r) {
      if (chId && r.ch.id !== chId) return false;
      if (tag && A.slug(cardTag(r)) !== tag) return false;
      return true;
    }).map(function (r) { return { k: r.key, w: weakScore(r) }; }).filter(function (x) { return x.w > 0.25; });
    list.sort(function (a, b) { return b.w - a.w; });
    var keys = list.slice(0, limit || 20).map(function (x) { return x.k; });
    return shuffle(keys);
  }
  function activityDays() { return store.get('activity', {}); }
  function streak() {
    var d = activityDays(), t = A.today(), n = 0, day = d[t] ? t : t - 1;
    while (d[day]) { n++; day--; }
    return { n: n, today: !!d[t] };
  }
  function falselyConfident() {
    var LOG = A.log(), C = A.cards();
    return Object.keys(LOG).filter(function (k) { return C[k] && LOG[k].fc; }).sort(function (a, b) { return LOG[b].fc - LOG[a].fc || LOG[b].t - LOG[a].t; });
  }

  /* =====================================================================
     My progress (#/progress) and the weak-spot drill (#/drill[/ch][/tag])
     ===================================================================== */
  function accLabel(acc) { return acc == null ? '—' : Math.round(acc * 100) + '%'; }
  function accClass(acc) { return acc == null ? '' : acc < 0.6 ? ' is-low' : acc < 0.8 ? ' is-mid' : ' is-high'; }
  function sparkHTML() {
    var d = activityDays(), t = A.today(), max = 1, cols = [];
    for (var i = 13; i >= 0; i--) { var v = d[t - i] || 0; max = Math.max(max, v); cols.push(v); }
    return '<div class="spark" role="img" aria-label="Answers per day over the last 14 days: ' + cols.join(', ') + '">' + cols.map(function (v, i) {
      return '<span class="spark__col' + (i === 13 ? ' is-today' : '') + '" title="' + (13 - i ? (13 - i) + ' days ago' : 'Today') + ': ' + v + '"><span style="height:' + Math.max(v ? 8 : 2, Math.round(v / max * 100)) + '%"></span></span>';
    }).join('') + '</div><p class="spark__lbl"><span>2 weeks ago</span><span>Today</span></p>';
  }
  function drillLine(ch) {
    if (!SP.drillStats) return '';
    var parts = [];
    [['dxline', 'Write the diagnosis', 'write'], ['counting', 'Count the criteria', 'count']].forEach(function (x) {
      var st = SP.drillStats(ch, x[0]); if (!st.total) return;
      parts.push('<a href="#/c/' + ch.id + '/practice/' + x[2] + '">' + x[1] + '</a>: ' + (st.seen ? st.right + ' of ' + st.total + ' right' : 'not started'));
    });
    return parts.length ? '<p class="pg-drills">Practice drills · ' + parts.join(' · ') + '</p>' : '';
  }
  function renderProgress() {
    var chs = A.allChapters(), all = { total: 0, seen: 0, n: 0, ok: 0, mastered: 0 }, rows = [];
    var openId = null, most = 0;
    chs.forEach(function (ch) { var n = chapterStats(ch).tot.n; if (n > most) { most = n; openId = ch.id; } });
    chs.forEach(function (ch) {
      var st = chapterStats(ch); ['total', 'seen', 'n', 'ok', 'mastered'].forEach(function (k) { all[k] += st.tot[k]; });
      var t = st.tot;
      var unseen = st.tags.filter(function (g) { return !g.seen; });
      var topics = st.tags.filter(function (g) { return g.seen; }).map(function (g) {
        return '<tr><th scope="row">' + esc(g.tag) + '<small>' + esc(g.deck.short) + '</small></th><td>' + g.seen + '/' + g.total + '</td><td class="acc' + accClass(g.acc) + '">' + accLabel(g.acc) + '</td><td>' + (g.fc ? '<span class="fc-dot" title="Sure but wrong">' + g.fc + '</span>' : '') + '</td><td>' +
          (g.weak > 0.25 ? '<a class="btn btn--small" href="#/drill/' + ch.id + '/' + A.slug(g.tag) + '">Drill</a>' : '') + '</td></tr>';
      }).join('') + (unseen.length ? '<tr class="pg-unseen"><td colspan="5">' + (st.tags.length === unseen.length ? 'No topics started yet: ' : 'Not started yet: ') + unseen.map(function (g) { return esc(g.tag); }).join(', ') + '</td></tr>' : '');
      var weakest = st.tags.filter(function (g) { return g.acc != null && g.n >= 2; }).slice(0, 3);
      rows.push('<details class="pg-ch"' + (ch.id === openId ? ' open' : '') + '><summary><span class="pg-ch__n">' + ch.number + '</span><span class="pg-ch__t">' + esc(ch.short || ch.title) +
        '<small>' + t.seen + ' of ' + t.total + ' seen · ' + t.mastered + ' mastered' + (weakest.length ? ' · weakest: ' + weakest.map(function (g) { return esc(g.tag); }).join(', ') : '') + '</small></span>' +
        '<span class="acc acc--big' + accClass(t.acc) + '">' + accLabel(t.acc) + '</span></summary>' +
        '<div class="pg-ch__bar" aria-hidden="true"><span class="m" style="width:' + pct(t.mastered, t.total) + '%"></span><span class="s" style="width:' + pct(t.seen - t.mastered, t.total) + '%"></span></div>' +
        '<div class="pg-ch__acts"><a class="btn btn--small btn--solid" href="#/drill/' + ch.id + '">Drill Chapter ' + ch.number + ' weak spots</a><a class="btn btn--small" href="#/review/' + ch.id + '">Review due cards</a></div>' +
        drillLine(ch) +
        '<div class="table-wrap"><table class="pg-tab"><thead><tr><th scope="col">Topic</th><th scope="col">Seen</th><th scope="col">Right</th><th scope="col"><span class="sr-only">Sure but wrong</span>⚠</th><th scope="col"><span class="sr-only">Drill</span></th></tr></thead><tbody>' + topics + '</tbody></table></div></details>');
    });
    var acc = all.n ? all.ok / all.n : null, sk = streak(), fcs = falselyConfident(), wk = weakKeys(null, null, 20);
    var C = A.cards(), LOG = A.log();
    var fcList = fcs.slice(0, 8).map(function (k) {
      var r = C[k];
      return '<li><a href="#/c/' + r.ch.id + '/cards/' + r.deck.key + '/' + r.c.id + '"><span class="pg-fc__meta">Ch ' + r.ch.number + ' · ' + esc(cardTag(r)) + ' · sure but wrong ' + plural(LOG[k].fc, 'time') + '</span><span>' + esc(plain(r.c.q).slice(0, 160)) + '</span></a></li>';
    }).join('');
    var html = '<div class="wrap page progress">' +
      '<header class="page__head"><h1>My progress</h1><p>How you are doing in each chapter and topic, built from every card, board question and exam answer on this device. The weak-spot drill pulls the cards you miss, lapse on, or answer “sure” and get wrong.</p></header>' +
      '<div class="pg-tiles">' +
        '<div class="pg-tile"><span class="pg-tile__n">' + all.seen + '<small>/' + all.total + '</small></span><span class="pg-tile__l">cards and questions seen</span></div>' +
        '<div class="pg-tile"><span class="pg-tile__n acc' + accClass(acc) + '">' + accLabel(acc) + '</span><span class="pg-tile__l">answered right (' + plural(all.n, 'answer') + ')</span></div>' +
        '<div class="pg-tile"><span class="pg-tile__n">' + all.mastered + '</span><span class="pg-tile__l">mastered (3+ week interval)</span></div>' +
        '<div class="pg-tile"><span class="pg-tile__n">' + sk.n + '<small> day' + (sk.n === 1 ? '' : 's') + '</small></span><span class="pg-tile__l">study streak' + (sk.n && !sk.today ? ', study today to keep it' : '') + '</span></div>' +
      '</div>' +
      '<section class="pg-sec"><h2>Last 14 days</h2>' + sparkHTML() + '</section>' +
      '<section class="pg-sec pg-drill"><div><h2>Drill my weak spots</h2><p>' + (wk.length ? plural(wk.length, 'card') + ' across all chapters, weakest first: missed, lapsed, guessed or falsely confident.' : 'Nothing to drill yet. Answer some cards and board questions first; the ones you struggle with will collect here.') + '</p></div>' +
        (wk.length ? '<a class="btn btn--solid" href="#/drill">Start the drill</a>' : '<a class="btn btn--solid" href="#/today">Start today’s 10 minutes</a>') + '</section>' +
      '<section class="pg-sec"><h2>By chapter and topic</h2><p class="muted">Topics are sorted weakest first. “Right” counts every answer you have given; ⚠ counts answers you were sure of but got wrong.</p>' + rows.join('') + '</section>' +
      (fcList ? '<section class="pg-sec"><h2>Falsely confident</h2><p class="muted">You marked these “Sure” and got them wrong. They are the answers most likely to cost marks on an exam.</p><ul class="pg-fc">' + fcList + '</ul></section>' : '') +
      '<section class="pg-sec"><h2>Settings</h2><label class="switch"><input type="checkbox" id="pg-conf"' + (A.confOn() ? ' checked' : '') + '> Ask “How sure?” on each card</label><p class="muted">Tap Guess, Unsure or Sure before you answer. It is optional on every card, and it sharpens the weak-spot drill.</p></section>' +
    '</div>';
    A.setView('progress', html);
    document.title = 'My progress — ' + APP;
    main.querySelector('#pg-conf').addEventListener('change', function (e) { store.set('confOn', e.target.checked); });
  }
  function renderDrill(p) {
    var chId = p[1] && A.chapter(p[1]) ? p[1] : null, tag = chId ? p[2] || null : null;
    var keys = weakKeys(chId, tag, 20), ch = chId && A.chapter(chId);
    var tagName = null;
    if (tag) A.cardList().some(function (r) { if (r.ch.id === chId && A.slug(cardTag(r)) === tag) { tagName = cardTag(r); return true; } return false; });
    var scope = tagName ? 'Chapter ' + ch.number + ': ' + tagName : ch ? 'Chapter ' + ch.number : 'All chapters';
    var html = '<div class="wrap page">' +
      '<header class="page__head"><p class="crumb"><a href="#/progress">My progress</a></p><h1>Weak-spot drill</h1><p>' + esc(scope) + '. Cards you have missed, lapsed on, guessed or answered “sure” and got wrong, weakest first. Ratings here update your review schedule as usual.</p></header>' +
      (keys.length ? '<div class="deck-bar"><span class="deck-bar__count">' + plural(keys.length, 'card') + '</span></div><div id="card-area" aria-live="polite"></div>' + A.kbdHelp(true)
        : '<div class="empty"><h2>No weak spots here yet</h2><p>Answer cards and board questions in this ' + (tag ? 'topic' : 'chapter') + ' first. Anything you miss or guess will show up here.</p><div class="empty__actions"><a class="btn btn--solid" href="#/today">Today’s 10 minutes</a><a class="btn" href="#/progress">My progress</a></div></div>') +
      '</div>';
    A.setView('drill:' + (chId || 'all') + ':' + (tag || ''), html);
    document.title = 'Weak-spot drill — ' + APP;
    if (!keys.length) return;
    var player = A.Player(main.querySelector('#card-area'), {
      queue: keys, consume: true, mode: 'srs', source: true,
      done: function (stats) {
        return '<div class="empty"><h2>Drill finished</h2><p>You worked through ' + plural(stats.rated, 'card') + (stats.again ? ', ' + stats.again + ' marked Again' : '') + '. Run it again later: the list updates as you improve.</p>' +
          '<div class="empty__actions"><a class="btn btn--solid" href="#/progress">See my progress</a><button class="btn" type="button" data-rerender>Drill again</button></div></div>';
      }
    });
    A.view.cleanup = function () { player.destroy(); };
  }
  SP.routes.progress = renderProgress;
  SP.routes.drill = renderDrill;

  /* =====================================================================
     Time-rule questions (from the chapters' time ladders and the disorder library)
     ===================================================================== */
  function chOfTitle(t) { var m = /Chapter (\d+)/.exec(t || ''); return m ? 'ch' + (m[1].length < 2 ? '0' : '') + m[1] : null; }
  function timePool(chIds) {
    var pool = [], seen = {};
    function add(q) {
      if (!q.a || !q.p || !/\d/.test(q.a)) return;
      if (chIds && chIds.indexOf(q.ch) < 0) return;
      var k = (q.p + '|' + q.a).toLowerCase(); if (seen[k]) return; seen[k] = 1;
      pool.push(q);
    }
    (SP.timeLadders || []).forEach(function (L) {
      var chId = chOfTitle(L.title);
      if (!A.chapter(chId)) return;
      L.rows.forEach(function (r) { add({ p: r.label, a: r.span, ch: chId, kind: 'span', dx: r.dx }); });
      String(L.note || '').split(/\.\s+/).forEach(function (sent) {
        var m = /^([^:]{3,40}):\s*(.+?)\.?$/.exec(sent.trim());
        if (m) add({ p: m[1], a: m[2], ch: chId, kind: 'span' });
      });
    });
    A.dxList().forEach(function (d) {
      if (!d.duration || !A.chapter(d.ch)) return;
      add({ p: d.name, a: plain(d.duration), ch: d.ch, kind: 'dur', dx: d.id });
    });
    return pool;
  }
  function timeQuestion(q, pool) {
    function pk(t) { return String(t).toLowerCase().replace(/\([^)]*\)/g, '').replace(/\b(disorders?|episodes?)\b/g, '').replace(/[^a-z]+/g, ' ').trim(); }
    var same = pool.filter(function (x) { return x.kind === q.kind && x.a !== q.a && pk(x.p) !== pk(q.p) && !(x.dx && x.dx === q.dx); });
    var near = shuffle(same.filter(function (x) { return x.ch === q.ch; })), far = shuffle(same.filter(function (x) { return x.ch !== q.ch; }));
    var opts = [], used = {}; used[q.a.toLowerCase()] = 1;
    near.concat(far).forEach(function (x) { if (opts.length < 3 && !used[x.a.toLowerCase()]) { used[x.a.toLowerCase()] = 1; opts.push(x.a); } });
    opts.push(q.a); shuffle(opts);
    return { q: q, opts: opts, answer: opts.indexOf(q.a) };
  }

  /* TimeQuiz: o.chs (chapter ids or null), o.count (questions, 0 = unlimited), o.seconds (0 = untimed), o.done(result) */
  function TimeQuiz(area, o) {
    var pool = timePool(o.chs), order = shuffle(pool.slice()), i = 0, res = { right: 0, wrong: 0, missed: [] };
    var cur = null, locked = false, iv = null, end = 0, finished = false;
    if (pool.length < 4) { area.innerHTML = '<div class="empty"><h2>Not enough time rules yet</h2><p>Choose more chapters.</p></div>'; return { destroy: function () {} }; }
    function next() {
      if (o.count && res.right + res.wrong >= o.count) return finish();
      if (i >= order.length) { order = shuffle(pool.slice()); i = 0; }
      cur = timeQuestion(order[i++], pool); locked = false; draw();
    }
    function clock() {
      if (!o.seconds) return '';
      var left = Math.max(0, (end - Date.now()) / 1000);
      return '<div class="tq__clock"><span style="width:' + (left / o.seconds * 100) + '%"></span></div>';
    }
    function draw(fb) {
      var q = cur.q, ch = A.chapter(q.ch);
      area.innerHTML = '<div class="tq">' +
        '<div class="tq__top"><span class="tq__score"><b>' + res.right + '</b> right' + (res.wrong ? ' · ' + res.wrong + ' wrong' : '') + '</span>' + (o.seconds ? '<span class="tq__time" id="tq-time"></span>' : o.count ? '<span>' + Math.min(res.right + res.wrong + 1, o.count) + ' of ' + o.count + '</span>' : '') + '</div>' +
        clock() +
        '<p class="tq__kicker">Ch ' + ch.number + ' · ' + (q.kind === 'dur' ? 'Time rule for' : 'How long?') + '</p><h2 class="tq__q">' + esc(q.p) + '</h2>' +
        '<ul class="tq__opts">' + cur.opts.map(function (t, k) {
          var cls = fb ? (k === cur.answer ? ' is-correct' : k === fb.pick ? ' is-wrong' : ' is-dim') : '';
          return '<li><button type="button" class="tq__opt' + cls + '" data-k="' + k + '"' + (fb ? ' disabled' : '') + '><span class="choice__key">' + A.LETTERS[k] + '</span><span>' + esc(cap(t)) + '</span></button></li>';
        }).join('') + '</ul>' +
        (fb && !o.seconds ? '<div class="tq__fb ' + (fb.ok ? 'is-right' : 'is-wrong') + '"><p>' + (fb.ok ? 'Right.' : 'The rule is: <b>' + esc(cap(q.a)) + '</b>.') + (q.dx ? ' <a href="#/dx/' + esc(q.dx) + '">Open in the library</a>' : '') + '</p><button class="btn btn--solid" type="button" id="tq-next">Next</button></div>' : '') +
        '</div>';
      area.querySelectorAll('[data-k]').forEach(function (b) { b.addEventListener('click', function () { answer(parseInt(b.getAttribute('data-k'), 10)); }); });
      var nb = area.querySelector('#tq-next'); if (nb) { nb.addEventListener('click', next); nb.focus({ preventScroll: true }); }
      paintTime();
    }
    function answer(k) {
      if (locked || finished) return; locked = true;
      var ok = k === cur.answer;
      if (ok) res.right++; else { res.wrong++; res.missed.push(cur.q); }
      if (o.seconds) { draw({ pick: k, ok: ok }); setTimeout(function () { if (!finished) next(); }, ok ? 450 : 1100); }
      else draw({ pick: k, ok: ok });
    }
    function paintTime() {
      var t = area.querySelector('#tq-time'); if (!t) return;
      var left = Math.max(0, (end - Date.now()) / 1000);
      t.textContent = Math.ceil(left) + ' s'; t.classList.toggle('is-low', left <= 10);
      var bar = area.querySelector('.tq__clock span'); if (bar) bar.style.width = (left / o.seconds * 100) + '%';
    }
    function tick() { if (Date.now() >= end) finish(); else paintTime(); }
    function finish() {
      if (finished) return; finished = true;
      if (iv) clearInterval(iv); iv = null;
      o.done(res);
    }
    function onKey(e) {
      if (finished || !cur || (e.target.matches && e.target.matches('input, textarea, select'))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var k = 'abcd1234'.indexOf(e.key.toLowerCase());
      if (k > -1 && !locked) { e.preventDefault(); answer(k % 4); }
      else if ((e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') && locked && !o.seconds) { e.preventDefault(); next(); }
    }
    document.addEventListener('keydown', onKey);
    if (o.seconds) { end = Date.now() + o.seconds * 1000; iv = setInterval(tick, 250); }
    next();
    return { destroy: function () { finished = true; if (iv) clearInterval(iv); document.removeEventListener('keydown', onKey); } };
  }
  function cap(t) { t = String(t); return t.charAt(0).toUpperCase() + t.slice(1); }
  function missedHTML(list) {
    if (!list.length) return '';
    var seen = {};
    return '<h3 class="tq__h">Rules to remember</h3><ul class="tq__missed">' + list.filter(function (q) { var k = q.p + q.a; if (seen[k]) return false; seen[k] = 1; return true; }).map(function (q) {
      return '<li><span>' + esc(q.p) + '</span><b>' + esc(cap(q.a)) + '</b></li>';
    }).join('') + '</ul>';
  }

  /* #/time-drill: 60-second round or 10 untimed questions */
  function renderTimeDrill() {
    var prefs = store.get('timeDrill', { chs: 'all', mode: 'sprint' });
    var chs = A.allChapters();
    if (prefs.chs !== 'all') { prefs.chs = prefs.chs.filter(function (id) { return A.chapter(id); }); if (!prefs.chs.length) prefs.chs = 'all'; }
    var best = store.get('timeBest', {});
    var html = '<div class="wrap page tdrill">' +
      '<header class="page__head"><h1>Time-rule drill</h1><p>Durations are the most tested numbers in the DSM. Name the time rule for each diagnosis or episode as fast as you can. Questions come from the time ladders and the disorder library, so every new chapter adds more.</p></header>' +
      '<div class="tb tdrill__setup"><section class="tb__sec"><h2 class="tb__h">Chapters</h2><div class="fam-chips"><button type="button" class="filter" data-ch="all">All chapters</button>' +
        chs.map(function (ch) { return '<button type="button" class="filter" data-ch="' + ch.id + '">Ch ' + ch.number + '</button>'; }).join('') + '</div></section>' +
        '<section class="tb__sec"><h2 class="tb__h">Format</h2><div class="seg" role="radiogroup"><label><input type="radio" name="tdm" value="sprint"' + (prefs.mode === 'sprint' ? ' checked' : '') + '><span>60-second sprint</span></label><label><input type="radio" name="tdm" value="ten"' + (prefs.mode === 'ten' ? ' checked' : '') + '><span>10 questions, untimed</span></label></div></section>' +
        '<div class="tb__go"><button class="btn btn--solid" type="button" id="td-go">Start</button><p class="tb__sum" id="td-sum"></p></div></div>' +
      '<div id="td-area" aria-live="polite"></div></div>';
    A.setView('time-drill', html);
    document.title = 'Time-rule drill — ' + APP;
    var quiz = null, area = main.querySelector('#td-area');
    function bestKey() { return (prefs.chs === 'all' ? 'all' : prefs.chs.slice().sort().join(',')); }
    function paint() {
      main.querySelectorAll('[data-ch]').forEach(function (b) { var id = b.getAttribute('data-ch'); b.setAttribute('aria-pressed', String(id === 'all' ? prefs.chs === 'all' : prefs.chs !== 'all' && prefs.chs.indexOf(id) > -1)); });
      var n = timePool(prefs.chs === 'all' ? null : prefs.chs).length, b = best[bestKey()];
      main.querySelector('#td-sum').textContent = plural(n, 'time rule') + ' in this set.' + (b ? ' Best sprint: ' + b + ' right.' : '');
    }
    main.querySelectorAll('[data-ch]').forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-ch');
        if (id === 'all') prefs.chs = 'all';
        else { var cur = prefs.chs === 'all' ? [] : prefs.chs.slice(), at = cur.indexOf(id); if (at > -1) cur.splice(at, 1); else cur.push(id); prefs.chs = cur.length ? cur : 'all'; }
        store.set('timeDrill', prefs); paint();
      });
    });
    main.querySelectorAll('input[name=tdm]').forEach(function (r) { r.addEventListener('change', function () { prefs.mode = r.value; store.set('timeDrill', prefs); }); });
    function start() {
      if (quiz) quiz.destroy();
      main.querySelector('.tdrill__setup').hidden = true;
      var sprint = prefs.mode === 'sprint';
      quiz = TimeQuiz(area, {
        chs: prefs.chs === 'all' ? null : prefs.chs, count: sprint ? 0 : 10, seconds: sprint ? 60 : 0,
        done: function (r) {
          var k = bestKey(), rec = false;
          if (sprint && r.right > (best[k] || 0)) { best[k] = r.right; store.set('timeBest', best); rec = true; }
          area.innerHTML = '<div class="empty tq-end"><h2>' + (sprint ? (rec ? 'New best: ' : '') + plural(r.right, 'rule') + ' in 60 seconds' : r.right + ' of ' + (r.right + r.wrong) + ' right') + '</h2>' +
            '<p>' + (r.wrong ? plural(r.wrong, 'miss', 'misses') + '. ' : 'No misses. ') + (sprint && !rec && best[k] ? 'Your best is ' + best[k] + '.' : '') + '</p>' + missedHTML(r.missed) +
            '<div class="empty__actions"><button class="btn btn--solid" type="button" id="td-again">Go again</button><button class="btn" type="button" id="td-setup">Change settings</button><a class="btn" href="#/time">Time criteria table</a></div></div>';
          area.querySelector('#td-again').addEventListener('click', start);
          area.querySelector('#td-setup').addEventListener('click', function () { area.innerHTML = ''; main.querySelector('.tdrill__setup').hidden = false; paint(); });
        }
      });
      area.scrollIntoView({ block: 'start', behavior: 'auto' });
      window.scrollBy(0, -A.headerH() - 12);
    }
    main.querySelector('#td-go').addEventListener('click', start);
    paint();
    A.view.cleanup = function () { if (quiz) quiz.destroy(); };
  }
  SP.routes['time-drill'] = renderTimeDrill;

  /* =====================================================================
     Today's 10 minutes (#/today): due cards, board questions, a time drill
     ===================================================================== */
  var TODAY_STEPS = [
    { k: 'cards', label: 'Due cards', mins: 5 },
    { k: 'mcq', label: 'Board questions', mins: 3 },
    { k: 'time', label: 'Time rules', mins: 2 }
  ];
  function todayState() {
    var s = store.get('todaySession', null);
    if (!s || s.day !== A.today()) s = { day: A.today(), step: 0, done: false };
    return s;
  }
  function todayCards() {
    var SRS = A.srs(), out = [];
    var due = A.cardList().filter(function (r) { return !r.c.choices && A.isDue(r.key); }).map(function (r) { return r.key; });
    due.sort(function (a, b) { return SRS[a].d - SRS[b].d; });
    out = due.slice(0, 12);
    if (out.length < 12) {
      var quota = Math.max(0, A.reviewPrefs().newPerDay - (store.get('newToday', null) && store.get('newToday').day === A.today() ? store.get('newToday').n : 0));
      var fresh = A.newCardsFor('all').filter(function (k) { return !A.cards()[k].c.choices; }).slice(0, Math.min(quota, 12 - out.length));
      out = out.concat(fresh);
    }
    return out;
  }
  function todayMcq() {
    var C = A.cards(), SRS = A.srs(), MK = A.mistakes(), picked = [], have = {};
    function take(list) { list.forEach(function (k) { if (picked.length < 3 && !have[k]) { have[k] = 1; picked.push(k); } }); }
    var cases = A.cardList().filter(function (r) { return r.c.choices; });
    take(shuffle(cases.filter(function (r) { return A.isDue(r.key); }).map(function (r) { return r.key; })));
    take(shuffle(Object.keys(MK).filter(function (k) { return C[k] && C[k].c.choices; })));
    take(shuffle(cases.filter(function (r) { return !SRS[r.key]; }).map(function (r) { return r.key; })));
    take(shuffle(cases.map(function (r) { return r.key; })));
    return picked;
  }
  function renderToday() {
    var S = todayState(), sk = streak();
    function save() { store.set('todaySession', S); }
    var player = null, quiz = null;
    var html = '<div class="wrap page today-run">' +
      '<header class="page__head"><h1>Today’s 10 minutes</h1><p>A short daily session: your due flashcards, three board questions and a quick time-rule round. Ratings update your review schedule as usual.' + (sk.n ? ' Study streak: <b>' + plural(sk.n, 'day') + '</b>.' : '') + '</p></header>' +
      '<ol class="steps-bar" id="td-steps"></ol><div id="td-area" aria-live="polite"></div></div>';
    A.setView('today', html);
    document.title = 'Today’s 10 minutes — ' + APP;
    var area = main.querySelector('#td-area');
    function paintSteps() {
      main.querySelector('#td-steps').innerHTML = TODAY_STEPS.map(function (st, i) {
        var cls = S.done || i < S.step ? ' is-done' : i === S.step ? ' is-current' : '';
        return '<li class="steps-bar__i' + cls + '"' + (i === S.step && !S.done ? ' aria-current="step"' : '') + '><span class="steps-bar__n">' + (S.done || i < S.step ? '✓' : i + 1) + '</span><span>' + st.label + '<small>~' + st.mins + ' min</small></span></li>';
      }).join('');
    }
    function stopAll() { if (player) { player.destroy(); player = null; } if (quiz) { quiz.destroy(); quiz = null; } }
    function nextBtn(label) { return '<button class="btn btn--solid" type="button" data-next>' + label + '</button>'; }
    function go(step) { S.step = step; save(); run(); window.scrollTo(0, 0); }
    area.addEventListener('click', function (e) {
      if (e.target.closest('[data-next]')) go(S.step + 1);
      else if (e.target.closest('[data-skip]')) go(S.step + 1);
      else if (e.target.closest('[data-redo]')) { S = { day: A.today(), step: 0, done: false }; save(); run(); }
    });
    function run() {
      stopAll(); paintSteps();
      if (S.done || S.step >= TODAY_STEPS.length) {
        if (!S.done) { S.done = true; save(); var dd = store.get('daysDone', []); if (dd.indexOf(S.day) < 0) { dd.push(S.day); while (dd.length > 400) dd.shift(); store.set('daysDone', dd); } }
        paintSteps();
        var s2 = streak(), wk = weakKeys(null, null, 20).length;
        area.innerHTML = '<div class="empty"><h2>Done for today</h2><p>' + (s2.n > 1 ? 'That is ' + s2.n + ' days in a row. ' : '') + 'Come back tomorrow for a fresh set.' + (wk ? ' Want more? Your weak-spot drill has ' + plural(wk, 'card') + '.' : '') + '</p>' +
          '<div class="empty__actions">' + (wk ? '<a class="btn btn--solid" href="#/drill">Drill weak spots</a>' : '') + '<a class="btn" href="#/progress">My progress</a><button class="btn" type="button" data-redo>Do another round</button></div></div>';
        return;
      }
      var step = TODAY_STEPS[S.step];
      if (step.k === 'cards' || step.k === 'mcq') {
        var q = step.k === 'cards' ? todayCards() : todayMcq();
        if (!q.length) {
          area.innerHTML = '<div class="empty"><h2>' + (step.k === 'cards' ? 'No flashcards due' : 'No board questions yet') + '</h2><p>' + (step.k === 'cards' ? 'You are up to date with your flashcards.' : '') + '</p>' + nextBtn('Next: ' + TODAY_STEPS[S.step + 1].label.toLowerCase()) + '</div>';
          return;
        }
        area.innerHTML = '<div class="deck-bar"><span class="deck-bar__count">Step ' + (S.step + 1) + ' of 3: ' + step.label.toLowerCase() + '</span><button class="link-btn" type="button" data-skip>Skip this step</button></div><div id="td-cards"></div>';
        player = A.Player(area.querySelector('#td-cards'), {
          queue: q, consume: true, mode: 'srs', source: true,
          done: function (stats) {
            var nx = TODAY_STEPS[S.step + 1];
            return '<div class="empty"><h2>' + step.label + ' done</h2><p>' + plural(stats.rated, step.k === 'mcq' ? 'question' : 'card') + (step.k === 'mcq' && (stats.right + stats.wrong) ? ', ' + stats.right + ' right' : '') + '.</p>' + nextBtn(nx ? 'Next: ' + nx.label.toLowerCase() : 'Finish') + '</div>';
          }
        });
        return;
      }
      if (step.k === 'time') {
        area.innerHTML = '<div class="deck-bar"><span class="deck-bar__count">Step 3 of 3: five time rules</span><button class="link-btn" type="button" data-skip>Skip this step</button></div><div id="td-time"></div>';
        quiz = TimeQuiz(area.querySelector('#td-time'), {
          chs: null, count: 5, seconds: 0,
          done: function (r) {
            area.querySelector('#td-time').innerHTML = '<div class="empty"><h2>' + r.right + ' of 5 time rules</h2>' + missedHTML(r.missed) + '<div class="empty__actions">' + nextBtn('Finish') + '</div></div>';
          }
        });
      }
    }
    run();
    A.view.cleanup = stopAll;
  }
  SP.routes.today = renderToday;

  /* =====================================================================
     Notes and highlights in the study guide (#/notes lists them all)
     ===================================================================== */
  var NOTES = store.get('notes', {}), HL = store.get('highlights', {});
  function saveNotes() { store.set('notes', NOTES); }
  function saveHL() { store.set('highlights', HL); }

  /* Find quote q inside el's text (whitespace-insensitive) and wrap it in <mark class="hl">. */
  function textMap(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n, chars = [], norm = '', lastSpace = true;
    while ((n = walker.nextNode())) {
      if (n.parentNode.closest && n.parentNode.closest('.g-note, .bm-btn, .note-btn, script, style')) continue;
      var t = n.nodeValue;
      for (var i = 0; i < t.length; i++) {
        var ch = t[i], sp = /\s/.test(ch);
        if (sp) { if (lastSpace) continue; norm += ' '; chars.push([n, i]); lastSpace = true; }
        else { norm += ch.toLowerCase(); chars.push([n, i]); lastSpace = false; }
      }
    }
    return { norm: norm, chars: chars };
  }
  function normQ(q) { return String(q).replace(/\s+/g, ' ').trim().toLowerCase(); }
  function wrapQuote(el, q, idx) {
    var m = textMap(el), nq = normQ(q), at = m.norm.indexOf(nq);
    if (at < 0 || !nq) return false;
    var segs = [], start = at, endI = at + nq.length - 1;
    for (var i = start; i <= endI; i++) {
      var c = m.chars[i], last = segs[segs.length - 1];
      if (last && last.node === c[0] && last.to === c[1]) last.to = c[1] + 1;
      else segs.push({ node: c[0], from: c[1], to: c[1] + 1 });
    }
    segs.reverse().forEach(function (sg) {
      var node = sg.node;
      if (sg.to < node.nodeValue.length) node.splitText(sg.to);
      var mid = sg.from > 0 ? node.splitText(sg.from) : node;
      var mk = document.createElement('mark');
      mk.className = 'hl'; mk.setAttribute('data-hl', idx); mk.title = 'Highlighted. Tap to remove.';
      mid.parentNode.insertBefore(mk, mid); mk.appendChild(mid);
    });
    return true;
  }
  var floatBar = null;
  function bar() {
    if (!floatBar) {
      floatBar = document.createElement('div');
      floatBar.className = 'float-bar'; floatBar.hidden = true; floatBar.setAttribute('role', 'toolbar');
      document.body.appendChild(floatBar);
    }
    return floatBar;
  }
  function hideBar() { if (floatBar) floatBar.hidden = true; }
  function secInfo(ch, secEl) {
    var h = secEl.querySelector('h3'), title = h ? h.textContent.replace(/^\d+\.\d+/, '').trim() : secEl.id;
    return { key: 'g:' + ch.id + '/' + secEl.id, href: '#/c/' + ch.id + '/guide/' + secEl.id, title: title, sub: 'Chapter ' + ch.number + ' study guide' };
  }
  function applyHighlights(ch, root) {
    root.querySelectorAll('mark.hl').forEach(function (m) { var p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize(); });
    root.querySelectorAll('.g-sec').forEach(function (sec) {
      var info = secInfo(ch, sec), list = (HL[info.key] || {}).items || [];
      list.forEach(function (h, i) { var b = document.getElementById(h.b); if (b && sec.contains(b)) wrapQuote(b, h.q, i); });
    });
  }
  function noteHTML(n) {
    return '<div class="g-note__view"><p class="g-note__lbl">My note</p><div class="g-note__txt">' + esc(n.text).replace(/\n/g, '<br>') + '</div><button type="button" class="link-btn" data-note-edit>Edit</button></div>';
  }
  function guideNotes(ch, root) {
    root.querySelectorAll('.g-sec').forEach(function (sec) {
      var info = secInfo(ch, sec), head = sec.querySelector('.g-sec__head'); if (!head) return;
      var has = NOTES[info.key] && NOTES[info.key].text;
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'note-btn' + (has ? ' is-on' : ''); btn.title = has ? 'Edit your note' : 'Add a note to this section';
      btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h4L19 9l-4-4L5 15z M13 7l4 4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg><span class="sr-only">Note for ' + esc(info.title) + '</span>';
      head.appendChild(btn);
      var box = document.createElement('div'); box.className = 'g-note'; box.hidden = !has;
      if (has) box.innerHTML = noteHTML(NOTES[info.key]);
      head.parentNode.insertBefore(box, head.nextSibling);
      function edit() {
        var cur = (NOTES[info.key] && NOTES[info.key].text) || '';
        box.hidden = false;
        box.innerHTML = '<label class="g-note__lbl" for="nt-' + sec.id + '">My note</label><textarea id="nt-' + sec.id + '" rows="4" placeholder="Mnemonics, a patient you saw, what your attending said…">' + esc(cur) + '</textarea>' +
          '<div class="g-note__acts"><button type="button" class="btn btn--small btn--solid" data-note-done>Done</button>' + (cur ? '<button type="button" class="link-btn" data-note-del>Delete note</button>' : '') + '<span class="muted g-note__saved" aria-live="polite"></span></div>';
        var ta = box.querySelector('textarea'), t = null;
        ta.addEventListener('input', function () {
          clearTimeout(t);
          t = setTimeout(function () { persist(ta.value); var sv = box.querySelector('.g-note__saved'); if (sv) sv.textContent = 'Saved'; }, 400);
        });
        ta.focus();
      }
      function persist(v) {
        v = String(v || '').replace(/\s+$/, '');
        if (v) NOTES[info.key] = { text: v, t: Date.now(), href: info.href, title: info.title, sub: info.sub };
        else delete NOTES[info.key];
        saveNotes();
        btn.classList.toggle('is-on', !!v);
      }
      function done() {
        var ta = box.querySelector('textarea'); if (ta) persist(ta.value);
        var n = NOTES[info.key];
        if (n) box.innerHTML = noteHTML(n); else { box.innerHTML = ''; box.hidden = true; }
      }
      btn.addEventListener('click', function () { if (box.querySelector('textarea')) done(); else edit(); });
      box.addEventListener('click', function (e) {
        if (e.target.closest('[data-note-edit]')) edit();
        else if (e.target.closest('[data-note-done]')) done();
        else if (e.target.closest('[data-note-del]')) { if (window.confirm('Delete this note?')) { persist(''); done(); } }
      });
    });
  }
  function guideHighlighting(ch, root) {
    var reading = root.querySelector('.reading'); if (!reading) return;
    applyHighlights(ch, reading);
    var pendingSel = null;
    function selBlock() {
      var sel = window.getSelection && window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
      var r = sel.getRangeAt(0), a = r.startContainer, b = r.endContainer;
      a = a.nodeType === 1 ? a : a.parentNode; b = b.nodeType === 1 ? b : b.parentNode;
      var ba = a.closest && a.closest('.g-block'), bb = b.closest && b.closest('.g-block');
      if (!ba || !reading.contains(ba)) return null;
      var txt = sel.toString().replace(/\s+/g, ' ').trim();
      if (txt.length < 2) return null;
      if (ba !== bb) return { err: true };
      return { block: ba, q: txt.slice(0, 600) };
    }
    function onSel() {
      if (!document.body.contains(reading)) return;
      var s = selBlock();
      pendingSel = s;
      var fb = bar();
      if (!s) { if (fb.getAttribute('data-for') === 'sel') hideBar(); return; }
      fb.setAttribute('data-for', 'sel');
      fb.innerHTML = s.err ? '<span class="float-bar__msg">Select within one paragraph to highlight</span>' : '<button type="button" class="btn btn--solid btn--small" data-hl-add>Highlight</button><button type="button" class="btn btn--small" data-hl-note>Highlight + note</button>';
      fb.hidden = false;
    }
    var selT = null;
    function selDeb() { clearTimeout(selT); selT = setTimeout(onSel, 180); }
    document.addEventListener('selectionchange', selDeb);
    function addHL(withNote) {
      var s = pendingSel; if (!s || s.err) return;
      var sec = s.block.closest('.g-sec'), info = secInfo(ch, sec);
      var rec = HL[info.key] || { href: info.href, title: info.title, sub: info.sub, items: [] };
      rec.items.push({ b: s.block.id, q: s.q, t: Date.now() }); rec.t = Date.now();
      HL[info.key] = rec; saveHL();
      try { window.getSelection().removeAllRanges(); } catch (e) {}
      hideBar(); applyHighlights(ch, reading);
      if (withNote) { var nb = sec.querySelector('.note-btn'); if (nb) nb.click(); }
    }
    function onBarClick(e) {
      if (e.target.closest('[data-hl-add]')) addHL(false);
      else if (e.target.closest('[data-hl-note]')) addHL(true);
      else if (e.target.closest('[data-hl-del]')) {
        var k = bar().getAttribute('data-key'), i = parseInt(bar().getAttribute('data-i'), 10);
        if (HL[k]) { HL[k].items.splice(i, 1); if (!HL[k].items.length) delete HL[k]; saveHL(); }
        hideBar(); applyHighlights(ch, reading);
      } else if (e.target.closest('[data-hl-cancel]')) hideBar();
    }
    bar().addEventListener('click', onBarClick);
    bar().addEventListener('mousedown', function (e) { e.preventDefault(); });
    function onMark(e) {
      var m = e.target.closest && e.target.closest('mark.hl'); if (!m) return;
      var s = window.getSelection && window.getSelection(); if (s && !s.isCollapsed) return;
      if (e.target.closest('.gl, a')) return;
      var sec = m.closest('.g-sec'), info = secInfo(ch, sec), fb = bar();
      fb.setAttribute('data-for', 'mark'); fb.setAttribute('data-key', info.key); fb.setAttribute('data-i', m.getAttribute('data-hl'));
      fb.innerHTML = '<button type="button" class="btn btn--small" data-hl-del>Remove highlight</button><button type="button" class="link-btn" data-hl-cancel>Cancel</button>';
      fb.hidden = false;
    }
    reading.addEventListener('click', onMark);
    onRouteCleanup(function () {
      document.removeEventListener('selectionchange', selDeb);
      if (floatBar) { floatBar.removeEventListener('click', onBarClick); floatBar.remove(); floatBar = null; }
    });
  }
  function renderNotes() {
    var items = [];
    Object.keys(NOTES).forEach(function (k) { items.push({ k: k, t: NOTES[k].t, rec: NOTES[k] }); });
    Object.keys(HL).forEach(function (k) { if (!NOTES[k]) items.push({ k: k, t: HL[k].t || 0, rec: HL[k] }); });
    items.sort(function (a, b) { return b.t - a.t; });
    var body = items.map(function (x) {
      var n = NOTES[x.k], h = HL[x.k], rec = x.rec;
      return '<li class="nt"><a class="nt__head" href="' + esc(rec.href) + '"><span class="bm-list__sub">' + esc(rec.sub) + '</span><span class="bm-list__t">' + esc(rec.title) + '</span></a>' +
        (n ? '<div class="nt__note">' + esc(n.text).replace(/\n/g, '<br>') + '</div>' : '') +
        (h && h.items.length ? '<ul class="nt__hl">' + h.items.map(function (it) { return '<li><a href="' + esc(rec.href.replace(/\/[^/]+$/, '/') + it.b) + '"><mark class="hl">' + esc(it.q) + '</mark></a></li>'; }).join('') + '</ul>' : '') + '</li>';
    }).join('');
    var html = '<div class="wrap page"><header class="page__head"><h1>Notes and highlights</h1><p>Your own notes and highlighted passages from the study guides, newest first. To highlight, select text in any study-guide paragraph and tap <b>Highlight</b>; to add a note, tap the pencil beside a section title. Saved on this device and included in progress backups.</p></header>' +
      (items.length ? '<ul class="nt-list">' + body + '</ul>' : '<div class="empty"><h2>No notes or highlights yet</h2><p>Open a study guide, select a sentence and tap Highlight, or tap the pencil beside a section title to write a note.</p><div class="empty__actions"><a class="btn btn--solid" href="#/c/' + A.allChapters()[0].id + '/guide">Open a study guide</a></div></div>') + '</div>';
    A.setView('notes', html);
    document.title = 'Notes and highlights — ' + APP;
  }
  SP.routes.notes = renderNotes;

  /* =====================================================================
     Listen mode (the device's own speech voice; works offline)
     ===================================================================== */
  var TTS = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  function speakable(s) {
    return String(s || '')
      .replace(/≥\s*/g, 'at least ').replace(/≤\s*/g, 'at most ').replace(/>\s*(?=\d)/g, 'more than ').replace(/<\s*(?=\d)/g, 'less than ')
      .replace(/(\d)\s*[–-]\s*(\d)/g, '$1 to $2').replace(/×/g, ' times ').replace(/≈/g, 'about ').replace(/→/g, ', then ')
      .replace(/\be\.g\.,?/g, 'for example,').replace(/\bi\.e\.,?/g, 'that is,').replace(/\bvs\.?\b/g, 'versus')
      .replace(/\bDSM-5-TR\b/g, 'D S M 5 T R').replace(/\s+/g, ' ').trim();
  }
  function chunks(t) {
    var out = [], parts = t.match(/[^.!?;]+[.!?;]*\s*/g) || [t], cur = '';
    parts.forEach(function (p) { if ((cur + p).length > 220 && cur) { out.push(cur.trim()); cur = p; } else cur += p; });
    if (cur.trim()) out.push(cur.trim());
    return out;
  }
  var reader = null;
  function Reader(items, title) {
    var i = 0, ci = 0, playing = false, rate = store.get('ttsRate', 1), bars = null, curChunks = [];
    var RATES = [0.8, 1, 1.2, 1.5];
    function el() { return items[i] && items[i].el; }
    function mark() {
      document.querySelectorAll('.is-speaking').forEach(function (x) { x.classList.remove('is-speaking'); });
      var e = el(); if (!e) return;
      e.classList.add('is-speaking');
      var r = e.getBoundingClientRect(), top = A.headerH() + 10, bottom = window.innerHeight - 140;
      if (r.top < top || r.top > bottom) window.scrollTo({ top: r.top + window.pageYOffset - top - 40, behavior: A.reduceMotion() ? 'auto' : 'smooth' });
    }
    function speakChunk() {
      if (!playing) return;
      if (ci >= curChunks.length) { i++; ci = 0; return speakItem(); }
      var u = new SpeechSynthesisUtterance(curChunks[ci]);
      u.rate = rate; u.lang = 'en-US';
      u.onend = function () { if (!playing) return; ci++; speakChunk(); };
      u.onerror = function (e) { if (e && (e.error === 'interrupted' || e.error === 'canceled')) return; playing = false; paint(); };
      speechSynthesis.speak(u);
    }
    function speakItem() {
      if (i >= items.length) { stop(); paintMsg('Finished.'); return; }
      curChunks = chunks(speakable(items[i].text)); ci = 0;
      mark(); paint(); speakChunk();
    }
    function play() { speechSynthesis.cancel(); playing = true; speakItem(); }
    function pause() { playing = false; speechSynthesis.cancel(); paint(); }
    function jump(d) { var was = playing; speechSynthesis.cancel(); i = Math.max(0, Math.min(items.length - 1, i + d)); ci = 0; if (was) { playing = true; speakItem(); } else { mark(); paint(); } }
    function stop() { playing = false; try { speechSynthesis.cancel(); } catch (e) {} document.querySelectorAll('.is-speaking').forEach(function (x) { x.classList.remove('is-speaking'); }); paint(); }
    function close() { stop(); if (bars) bars.remove(); bars = null; document.body.classList.remove('is-listening'); reader = null; }
    function paintMsg(m) { var s = bars && bars.querySelector('.lbar__pos'); if (s) s.textContent = m; }
    function paint() {
      if (!bars) return;
      bars.querySelector('[data-l="play"]').innerHTML = playing ? '❚❚<span class="sr-only">Pause</span>' : '▶<span class="sr-only">Play</span>';
      bars.querySelector('.lbar__pos').textContent = (i + 1) + ' of ' + items.length;
      bars.querySelector('[data-l="rate"]').textContent = rate + '×';
    }
    bars = document.createElement('div');
    bars.className = 'lbar'; bars.setAttribute('role', 'region'); bars.setAttribute('aria-label', 'Listen mode');
    bars.innerHTML = '<span class="lbar__t">' + esc(title) + '<span class="lbar__pos"></span></span>' +
      '<button type="button" class="lbar__b" data-l="prev" aria-label="Previous">⏮</button><button type="button" class="lbar__b lbar__b--main" data-l="play"></button><button type="button" class="lbar__b" data-l="next" aria-label="Next">⏭</button>' +
      '<button type="button" class="lbar__b lbar__rate" data-l="rate" aria-label="Speaking speed"></button><button type="button" class="lbar__b" data-l="close" aria-label="Close listen mode">✕</button>';
    document.body.appendChild(bars);
    document.body.classList.add('is-listening');
    bars.addEventListener('click', function (e) {
      var b = e.target.closest('[data-l]'); if (!b) return;
      var k = b.getAttribute('data-l');
      if (k === 'play') { if (playing) pause(); else play(); }
      else if (k === 'prev') jump(-1);
      else if (k === 'next') jump(1);
      else if (k === 'close') close();
      else if (k === 'rate') { rate = RATES[(RATES.indexOf(rate) + 1) % RATES.length]; store.set('ttsRate', rate); paint(); if (playing) { speechSynthesis.cancel(); ci = Math.max(0, ci); speakChunk(); } }
    });
    paint();
    return { play: play, close: close, startAt: function (n) { i = Math.max(0, Math.min(items.length - 1, n)); }, items: items };
  }
  function listenBtn(label) { return TTS ? '<button type="button" class="btn" data-listen>' + label + '</button>' : ''; }
  function startReader(items, title, from) {
    if (reader) reader.close();
    if (!items.length) return;
    reader = Reader(items, title);
    reader.startAt(from || 0);
    reader.play();
    onRouteCleanup(function () { if (reader) reader.close(); });
  }
  function hyItems(root) {
    var items = [];
    root.querySelectorAll('.hy-topic').forEach(function (t) {
      var h = t.querySelector('h2'); if (h) items.push({ el: h, text: h.textContent + '.' });
      t.querySelectorAll('li').forEach(function (li) { items.push({ el: li, text: li.textContent }); });
    });
    return items;
  }
  function guideItems(root) {
    var items = [];
    root.querySelectorAll('.g-sec').forEach(function (sec) {
      var h = sec.querySelector('h3'); if (h) items.push({ el: sec.querySelector('.g-sec__head'), text: 'Section ' + h.textContent.replace(/^(\d+)\.(\d+)/, '$1 point $2, ') + '.', sec: sec.id });
      sec.querySelectorAll('.g-block').forEach(function (b) {
        var t = b.innerText || b.textContent;
        if (t && t.trim()) items.push({ el: b, text: t.replace(/\t/g, ', '), sec: sec.id });
      });
    });
    return items;
  }
  function currentSecIndex(items) {
    var top = A.headerH() + 20, best = 0;
    for (var k = 0; k < items.length; k++) {
      if (items[k].el.getBoundingClientRect().top - top > 0) break;
      best = k;
    }
    return best;
  }

  /* =====================================================================
     Hooks into the study guide and high-yield views
     ===================================================================== */
  SP.hooks.guide = function (ch, root) {
    var reading = root.querySelector('.reading'); if (!reading) return;
    var tools = document.createElement('div');
    tools.className = 'g-tools';
    tools.innerHTML = listenBtn('Listen from here') + '<a class="btn" href="#/c/' + ch.id + '/summary">One-page summary</a><a class="btn" href="#/notes">My notes</a>' +
      '<p class="g-tools__tip">Select any sentence to highlight it; tap the pencil beside a section title to add a note.</p>';
    var intro = reading.querySelector('.reading__intro');
    reading.insertBefore(tools, intro || reading.firstChild);
    guideNotes(ch, root);
    guideHighlighting(ch, root);
    var lb = tools.querySelector('[data-listen]');
    if (lb) lb.addEventListener('click', function () { var items = guideItems(root); startReader(items, 'Ch ' + ch.number + ' study guide', currentSecIndex(items)); });
  };
  SP.hooks.hy = function (ch, root) {
    var slot = root.querySelector('#hy-listen-slot');
    if (slot && TTS) {
      slot.outerHTML = listenBtn('Listen');
      var lb = root.querySelector('.hy-tools [data-listen]');
      lb.addEventListener('click', function () { var items = hyItems(root); startReader(items, 'Ch ' + ch.number + ' high yield', 0); });
    } else if (slot) slot.remove();
  };
  SP.hooks.home = function (root) {
    var el = root.querySelector('#home-streak'); if (!el) return;
    var s = streak(), t = todayState();
    if (t.done) el.textContent = 'Done today ✓' + (s.n > 1 ? ' · ' + s.n + '-day streak' : '');
    else if (s.n) el.textContent = plural(s.n, 'day') + ' streak' + (s.today ? '' : ': keep it going today');
  };

  /* =====================================================================
     One-page chapter summary (#/c/<ch>/summary), designed to print on one sheet
     ===================================================================== */
  function renderSummary(ch) {
    var dxs = A.dxList().filter(function (d) { return d.ch === ch.id; });
    var ladders = (SP.timeLadders || []).filter(function (L) { return chOfTitle(L.title) === ch.id; });
    function short(s, n) { s = plain(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }
    var rows = dxs.map(function (d) {
      var ex = d.cmp && d.cmp.exclusions;
      return '<div class="sum__dx"><h3>' + esc(d.name) + (d.code ? ' <span class="sum__code">' + esc(d.code) + '</span>' : '') + '</h3>' +
        '<p>' + fmt(d.essence || '') + '</p>' +
        (d.duration && d.duration !== '—' ? '<p class="sum__k"><b>Time:</b> ' + fmt(d.duration) + '</p>' : '') +
        (ex ? '<p class="sum__k"><b>Not if:</b> ' + esc(short(ex, 150)) + '</p>' : '') + '</div>';
    }).join('');
    var times = [];
    ladders.forEach(function (L) { L.rows.forEach(function (r) { times.push('<li><span>' + esc(r.label) + '</span><b>' + esc(r.span) + '</b></li>'); }); });
    var pearls = [];
    dxs.forEach(function (d) { if (d.pearls && d.pearls[0]) pearls.push('<li>' + fmt(d.pearls[0]) + '</li>'); });
    var html = '<div class="wrap page sum-page">' +
      '<div class="sum-tools no-print"><p class="crumb"><a href="#/c/' + ch.id + '/high-yield">Chapter ' + ch.number + ' high yield</a></p><div class="sum-tools__row"><button class="btn btn--solid" type="button" id="sum-print">Print or save as PDF</button><a class="btn" href="#/c/' + ch.id + '/handout">Full high-yield PDF</a></div>' +
        '<p class="muted">Every diagnosis in the chapter on one sheet: code, core picture, time rule and the main exclusion. Built from the disorder library, so it grows with the app.</p></div>' +
      '<article class="sum' + (dxs.length > 9 ? ' sum--dense' : '') + '" id="sum">' +
        '<header class="sum__head"><p class="sum__kicker">DSM-5-TR · Chapter ' + ch.number + ' · pp. ' + esc(ch.pages) + '</p><h1>' + esc(ch.title) + '</h1></header>' +
        '<div class="sum__grid">' + rows + '</div>' +
        (times.length ? '<section class="sum__times"><h2>Time rules</h2><ul>' + times.join('') + '</ul></section>' : '') +
        (pearls.length ? '<section class="sum__pearls"><h2>Pearls</h2><ul>' + pearls.join('') + '</ul></section>' : '') +
        '<p class="sum__foot">' + esc(A.ATTRIBUTION) + ' Summarized in the app’s own words; confirm wording and codes against the DSM-5-TR.</p>' +
      '</article></div>';
    A.setView('summary:' + ch.id, html);
    document.title = 'Ch ' + ch.number + ' one-page summary — ' + APP;
    main.querySelector('#sum-print').addEventListener('click', function () {
      document.body.classList.add('print-sum');
      var off = function () { document.body.classList.remove('print-sum'); window.removeEventListener('afterprint', off); };
      window.addEventListener('afterprint', off);
      setTimeout(function () { window.print(); }, 50);
      setTimeout(off, 60000);
    });
  }
  SP.chapterRoutes = SP.chapterRoutes || {};
  SP.chapterRoutes.summary = renderSummary;
})();
