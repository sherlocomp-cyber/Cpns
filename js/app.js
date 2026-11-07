(function () {
  'use strict';

  var S = window.CPNSScore;
  var MAN = window.CPNS_MANIFEST || [];
  window.CPNS_DATA = window.CPNS_DATA || {};
  var app = document.getElementById('app');

  var KATS = [
    { k: 'TWK', label: 'TWK – Wawasan Kebangsaan', grp: 'SKD', desc: 'Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika, bela negara, Bahasa Indonesia.' },
    { k: 'TIU', label: 'TIU – Intelegensia Umum', grp: 'SKD', desc: 'Kemampuan verbal, numerik, dan penalaran logis.' },
    { k: 'TKP', label: 'TKP – Karakteristik Pribadi', grp: 'SKD', desc: 'Pelayanan publik, jejaring kerja, sosial budaya, TIK, profesionalisme, anti radikalisme.' },
    { k: 'PEDAGOGIK', label: 'SKB – Pedagogik', grp: 'SKB', desc: 'Teori belajar, perencanaan, asesmen, pembelajaran berdiferensiasi, kode etik guru.' },
    { k: 'PROFESIONAL', label: 'SKB – Profesional Bahasa Arab', grp: 'SKB', desc: 'Nahwu, sharf, mufradat, empat keterampilan berbahasa, balaghah dasar, metode pengajaran.' }
  ];
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  function load(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v || d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ } }

  var st = {
    view: 'home', loaded: false, bank: {}, errs: [], invalid: 0,
    exam: null, timer: null,
    set: load('cpns-set', { fb: 'langsung', timer: true }),
    hist: load('cpns-hist', [])
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  var AR = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+(?:[\s،؟]+[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+)*/g;
  function fmt(s) {
    return esc(s).replace(AR, '<span class="ar" dir="rtl">$&</span>').replace(/\n/g, '<br>');
  }
  function katLabel(k) {
    for (var i = 0; i < KATS.length; i++) if (KATS[i].k === k) return KATS[i].label;
    return k;
  }

  /* ---------- memuat bank soal ---------- */
  function loadScript(src) {
    return new Promise(function (res) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { res(null); };
      s.onerror = function () { res(src); };
      document.head.appendChild(s);
    });
  }
  function buildBank() {
    st.bank = {}; st.invalid = 0;
    MAN.forEach(function (m) {
      var d = window.CPNS_DATA[m.id];
      if (!d || !d.soal) return;
      d.soal.forEach(function (x, i) {
        var ok = x && x.q && x.o && x.o.length >= 2 &&
          (m.kat === 'TKP' ? (x.s && x.s.length === x.o.length) : (typeof x.a === 'number' && x.a >= 0 && x.a < x.o.length));
        if (!ok) { st.invalid++; return; }
        (st.bank[m.kat] = st.bank[m.kat] || []).push({
          id: m.id + '#' + i, kat: m.kat, sub: x.sub || m.sub || '', paket: m.judul,
          ctx: x.ctx || '', q: x.q, o: x.o, a: x.a, s: x.s, p: x.p || '',
          lg: (x.lg && x.lg.length) ? x.lg : null
        });
      });
    });
  }
  function count(k) { return (st.bank[k] || []).length; }

  /* ---------- memulai ujian ---------- */
  function pick(k, n) { return S.shuffle(st.bank[k] || []).slice(0, n); }

  function startExam(type) {
    var C = S.CONFIG, qs = [], title = '', minutes = 0;
    if (type === 'skd') {
      qs = [].concat(pick('TWK', C.skd.twk.n), pick('TIU', C.skd.tiu.n), pick('TKP', C.skd.tkp.n));
      title = 'Simulasi SKD';
      minutes = qs.length >= 110 ? C.skd.menit : Math.max(1, Math.round(C.skd.menit * qs.length / 110));
    } else if (type === 'skb') {
      qs = [].concat(pick('PEDAGOGIK', 40), pick('PROFESIONAL', 60));
      title = 'Simulasi SKB Guru Bahasa Arab';
      minutes = qs.length >= 80 ? C.skb.menit : Math.max(1, Math.ceil(qs.length * C.detikPerSoal / 60));
    } else if (type.indexOf('sub:') === 0) {
      var k = type.slice(4);
      qs = pick(k, 30);
      title = 'Latihan ' + katLabel(k);
      minutes = Math.max(1, Math.ceil(qs.length * C.detikPerSoal / 60));
    }
    if (!qs.length) { window.alert('Bank soal untuk paket ini belum tersedia.'); return; }
    st.exam = {
      type: type, title: title, qs: qs, ans: {}, flags: {}, cur: 0, fb: st.set.fb,
      endAt: st.set.timer ? Date.now() + minutes * 60000 : null, minutes: minutes,
      done: false, filter: 'all', sum: null
    };
    st.view = 'exam';
    startTimer();
    render();
    window.scrollTo(0, 0);
  }

  function startTimer() {
    stopTimer();
    st.timer = setInterval(tick, 500);
  }
  function stopTimer() { if (st.timer) { clearInterval(st.timer); st.timer = null; } }
  function tick() {
    var e = st.exam, c = document.getElementById('clock');
    if (!e || e.done || !e.endAt) return;
    var left = Math.max(0, Math.round((e.endAt - Date.now()) / 1000));
    if (c) { c.textContent = S.fmtTime(left); c.className = 'clock' + (left <= 300 ? ' low' : ''); }
    if (left <= 0) finish(true);
  }

  function finish(auto) {
    var e = st.exam;
    if (!e || e.done) return;
    if (!auto) {
      var kosong = e.qs.length - Object.keys(e.ans).length;
      var msg = kosong > 0 ? 'Masih ada ' + kosong + ' soal belum dijawab. Selesaikan ujian sekarang?' : 'Selesaikan ujian sekarang?';
      if (!window.confirm(msg)) return;
    }
    e.done = true;
    stopTimer();
    e.sum = S.summarize(e.qs, e.ans);
    e.verdict = e.type === 'skd' ? S.skdVerdict(e.sum) : null;
    st.hist.unshift({
      t: Date.now(), judul: e.title, skor: e.sum.total.skor, max: e.sum.total.max,
      benar: e.sum.total.correct, n: e.sum.total.n,
      lulus: e.verdict ? (e.verdict.full ? e.verdict.pass : null) : null
    });
    st.hist = st.hist.slice(0, 20);
    save('cpns-hist', st.hist);
    st.view = 'result';
    render();
    window.scrollTo(0, 0);
    if (auto) window.alert('Waktu habis. Jawaban Anda dikumpulkan otomatis.');
  }

  /* ---------- tampilan ---------- */
  function optsHtml(q, ans, mode) {
    // mode: 'live' (jawaban bisa diubah / terkunci), 'show' (tampilkan kunci), 'plain'
    var h = '<div class="opts">';
    var bestI = S.key(q);
    q.o.forEach(function (o, i) {
      var cls = 'opt';
      var pt = '';
      if (mode === 'show') {
        if (q.kat === 'TKP') { pt = '<span class="pt">+' + q.s[i] + '</span>'; if (i === bestI) cls += ' ok'; else if (i === ans) cls += ' bad'; }
        else { if (i === q.a) cls += ' ok'; else if (i === ans) cls += ' bad'; }
        if (i === ans && cls.indexOf('ok') < 0 && cls.indexOf('bad') < 0) cls += ' sel';
      } else if (i === ans) cls += ' sel';
      h += '<button type="button" class="' + cls + '" data-act="ans" data-i="' + i + '"' +
        (mode === 'live' ? '' : ' disabled') + '><span class="ltr">' + LETTERS[i] + '</span><span class="otx">' + fmt(o) + '</span>' + pt + '</button>';
    });
    return h + '</div>';
  }

  /* langkah penyelesaian: bisa dibuka satu per satu */
  function stepsHtml(q) {
    if (!q.lg || !q.lg.length) return '';
    var h = '<details class="steps"><summary>Lihat langkah penyelesaian (' + q.lg.length + ' langkah)</summary><ol>';
    q.lg.forEach(function (s) { h += '<li>' + fmt(s) + '</li>'; });
    return h + '</ol></details>';
  }

  function feedbackHtml(q, ans) {
    var good = S.isCorrect(q, ans), cls, head;
    if (q.kat === 'TKP') {
      var got = q.s[ans];
      cls = got === 5 ? 'ok' : (got >= 3 ? '' : 'bad');
      head = 'Nilai jawaban Anda: ' + got + ' dari 5' + (got === 5 ? ' (jawaban terbaik)' : '. Jawaban terbaik: ' + LETTERS[S.best(q)]);
    } else {
      cls = good ? 'ok' : 'bad';
      head = good ? 'Benar' : 'Belum tepat. Jawaban yang benar: ' + LETTERS[q.a];
    }
    return '<div class="fb ' + cls + '"><h4>' + esc(head) + '</h4><p>' + (q.p ? fmt(q.p) : 'Pembahasan belum tersedia untuk soal ini.') + '</p>' + stepsHtml(q) + '</div>';
  }

  function gridHtml(e) {
    var h = '<div class="grid">';
    e.qs.forEach(function (q, i) {
      var c = 'gn', a = e.ans[i];
      if (e.flags[i]) c += ' fl';
      else if (a != null) {
        if (e.fb === 'langsung' && q.kat !== 'TKP') c += S.isCorrect(q, a) ? ' good' : ' miss';
        else c += ' ans';
      }
      if (i === e.cur) c += ' cur';
      h += '<button type="button" class="' + c + '" data-act="go" data-i="' + i + '" aria-label="Soal ' + (i + 1) + '">' + (i + 1) + '</button>';
    });
    return h + '</div>';
  }

  function renderHome() {
    var h = '<header class="top"><div class="brand"><b>Latihan CPNS 2026</b><span>Guru Bahasa Arab</span></div></header><main class="home">';
    h += '<section class="intro"><h1>Simulasi ujian CPNS untuk guru Bahasa Arab</h1>' +
      '<p>Aturan mengikuti ujian berbasis komputer: SKD 110 soal dalam 100 menit, TKP bernilai 1 sampai 5, dan tidak ada nilai minus. Pilih cara pembahasan, lalu mulai.</p></section>';

    h += '<section class="panel"><h2>Cara pembahasan</h2>' +
      '<label class="choice"><input type="radio" name="fb" value="langsung"' + (st.set.fb === 'langsung' ? ' checked' : '') + '><span><b>Langsung setelah menjawab</b><small>Jawaban terkunci, benar atau salah dan pembahasan muncul saat itu juga.</small></span></label>' +
      '<label class="choice"><input type="radio" name="fb" value="akhir"' + (st.set.fb === 'akhir' ? ' checked' : '') + '><span><b>Setelah nilai keluar</b><small>Jawaban bisa diubah sampai selesai. Nilai muncul dulu, baru semua pembahasan dibuka.</small></span></label>' +
      '<label class="choice"><input type="checkbox" id="tm"' + (st.set.timer ? ' checked' : '') + '><span><b>Pakai batas waktu</b><small>Hilangkan centang untuk berlatih tanpa waktu.</small></span></label></section>';

    if (!st.loaded) h += '<p class="note">Memuat bank soal…</p>';
    else {
      var total = 0; KATS.forEach(function (x) { total += count(x.k); });
      h += '<section><h2>Pilih paket</h2><div class="cards">';
      var skdOk = count('TWK') + count('TIU') + count('TKP') > 0;
      var skbOk = count('PEDAGOGIK') + count('PROFESIONAL') > 0;
      h += '<div class="card"><h3>Simulasi SKD lengkap</h3><p>30 TWK, 35 TIU, 45 TKP dengan nilai ambang batas per subtes. Waktu 100 menit.</p><span class="meta">Tersedia: TWK ' + count('TWK') + ', TIU ' + count('TIU') + ', TKP ' + count('TKP') + '</span><button class="btn" data-act="start" data-t="skd"' + (skdOk ? '' : ' disabled') + '>Mulai SKD</button></div>';
      h += '<div class="card"><h3>Simulasi SKB Guru Bahasa Arab</h3><p>Pedagogik dan profesional dalam satu sesi. SKB memakai sistem peringkat, bukan ambang batas.</p><span class="meta">Tersedia: pedagogik ' + count('PEDAGOGIK') + ', profesional ' + count('PROFESIONAL') + '</span><button class="btn" data-act="start" data-t="skb"' + (skbOk ? '' : ' disabled') + '>Mulai SKB</button></div>';
      KATS.forEach(function (x) {
        h += '<div class="card"><h3>' + esc(x.label) + '</h3><p>' + esc(x.desc) + '</p><span class="meta">' + count(x.k) + ' soal tersedia, maksimal 30 per sesi</span><button class="btn alt" data-act="start" data-t="sub:' + x.k + '"' + (count(x.k) ? '' : ' disabled') + '>Latihan subtes</button></div>';
      });
      h += '</div></section>';
      if (st.errs.length || st.invalid) h += '<p class="note">Catatan teknis: ' + st.errs.length + ' file soal gagal dimuat, ' + st.invalid + ' soal dilewati karena formatnya tidak valid.</p>';
    }

    if (st.hist.length) {
      h += '<section class="panel"><h2>Riwayat terakhir</h2><table class="hist"><thead><tr><th>Waktu</th><th>Paket</th><th>Skor</th><th>Benar</th><th>Status</th></tr></thead><tbody>';
      st.hist.slice(0, 8).forEach(function (r) {
        h += '<tr><td>' + esc(new Date(r.t).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' })) + '</td><td>' + esc(r.judul) + '</td><td>' + r.skor + ' / ' + r.max + '</td><td>' + r.benar + ' / ' + r.n + '</td><td>' + (r.lulus === true ? 'Memenuhi' : r.lulus === false ? 'Belum memenuhi' : '–') + '</td></tr>';
      });
      h += '</tbody></table></section>';
    }
    h += '</main><p class="foot">Situs latihan mandiri, bukan situs resmi BKN atau Kemenag. Soal disusun sendiri mengikuti kisi-kisi dan bentuk soal ujian. Ambang batas SKD yang dipakai: TWK 65, TIU 80, TKP 166 (acuan seleksi sebelumnya; angka resmi CPNS 2026 belum diumumkan, periksa pengumuman resmi di sscasn.bkn.go.id).</p>';
    return h;
  }

  function renderExam() {
    var e = st.exam, q = e.qs[e.cur], i = e.cur, a = e.ans[i];
    var locked = e.fb === 'langsung' && a != null;
    var left = e.endAt ? S.fmtTime(Math.max(0, Math.round((e.endAt - Date.now()) / 1000))) : '--:--:--';
    var h = '<header class="top"><div class="brand"><b>' + esc(e.title) + '</b><span>' + (e.fb === 'langsung' ? 'Pembahasan langsung' : 'Pembahasan setelah nilai') + '</span></div>' +
      '<div style="display:flex;gap:10px;align-items:center"><span id="clock" class="clock" aria-live="off">' + left + '</span><button class="btn ghost" data-act="quit">Keluar</button></div></header>';
    h += '<main class="exam"><section class="qcard"><div class="qhead"><b>Soal No. ' + (i + 1) + ' dari ' + e.qs.length + '</b><span class="tag">' + esc(q.kat) + (q.sub ? ' · ' + esc(q.sub) : '') + '</span></div>';
    if (q.ctx) h += '<div class="ctx">' + fmt(q.ctx) + '</div>';
    h += '<p class="qtext">' + fmt(q.q) + '</p>';
    h += optsHtml(q, a, locked ? 'show' : 'live');
    if (locked) h += feedbackHtml(q, a);
    h += '<div class="nav"><button class="btn alt" data-act="go" data-i="' + (i - 1) + '"' + (i === 0 ? ' disabled' : '') + '>Sebelumnya</button>' +
      '<button class="btn alt flag' + (e.flags[i] ? ' on' : '') + '" data-act="flag">' + (e.flags[i] ? 'Ragu-ragu (aktif)' : 'Ragu-ragu') + '</button><span class="sp"></span>';
    if (i < e.qs.length - 1) h += '<button class="btn" data-act="go" data-i="' + (i + 1) + '">Selanjutnya</button>';
    else h += '<button class="btn warn" data-act="finish">Selesai</button>';
    h += '</div></section>';
    h += '<aside class="side"><h3>Daftar soal</h3>' + gridHtml(e) +
      '<div class="legend"><span><i class="a"></i>Dijawab</span><span><i class="f"></i>Ragu-ragu</span><span><i class="n"></i>Belum</span></div>' +
      '<div class="note">Terjawab ' + Object.keys(e.ans).length + ' dari ' + e.qs.length + '</div>' +
      '<button class="btn warn" data-act="finish">Selesaikan ujian</button></aside></main>';
    return h;
  }

  function reviewHtml(e) {
    var f = e.filter, h = '';
    var tabs = [['all', 'Semua'], ['ok', 'Benar'], ['bad', 'Salah'], ['skip', 'Kosong'], ['flag', 'Ragu-ragu']];
    h += '<div class="tabs">';
    tabs.forEach(function (t) { h += '<button type="button" class="' + (f === t[0] ? 'on' : '') + '" data-act="filter" data-f="' + t[0] + '">' + t[1] + '</button>'; });
    h += '</div>';
    var shown = 0;
    e.qs.forEach(function (q, i) {
      var a = e.ans[i], st2 = a == null ? 'skip' : (S.isCorrect(q, a) ? 'ok' : 'bad');
      if (f === 'flag' ? !e.flags[i] : (f !== 'all' && f !== st2)) return;
      shown++;
      h += '<article class="rev ' + st2 + '"><div class="qhead"><b>No. ' + (i + 1) + (a == null ? ' · belum dijawab' : '') + '</b><span class="tag">' + esc(q.kat) + (q.sub ? ' · ' + esc(q.sub) : '') + '</span></div>';
      if (q.ctx) h += '<div class="ctx">' + fmt(q.ctx) + '</div>';
      h += '<p class="qtext">' + fmt(q.q) + '</p>' + optsHtml(q, a, 'show');
      h += '<div class="fb"><h4>Pembahasan</h4><p>' + (q.p ? fmt(q.p) : 'Pembahasan belum tersedia untuk soal ini.') + '</p>' + stepsHtml(q) + '</div></article>';
    });
    if (!shown) h += '<p class="note">Tidak ada soal untuk filter ini.</p>';
    return h;
  }

  function renderResult() {
    var e = st.exam, sum = e.sum, t = sum.total;
    var h = '<header class="top"><div class="brand"><b>' + esc(e.title) + '</b><span>Hasil</span></div><button class="btn ghost" data-act="home">Kembali ke beranda</button></header><main class="result">';
    if (e.verdict) {
      var v = e.verdict;
      if (v.full) h += '<p class="verdict">' + (v.pass ? 'Memenuhi nilai ambang batas semua subtes' : 'Belum memenuhi nilai ambang batas') + '</p>';
      else h += '<p class="verdict">Jumlah soal belum penuh</p><p class="note">Bank soal belum cukup untuk 30 TWK, 35 TIU, dan 45 TKP, jadi perbandingan dengan ambang batas hanya sebagai gambaran.</p>';
      h += '<div class="score">';
      v.items.forEach(function (it) {
        h += '<div class="stat ' + (it.pass ? 'pass' : 'fail') + '"><b>' + it.skor + '</b><span>' + it.kat + ' · ambang batas ' + it.pg + ' · ' + (it.pass ? 'tercapai' : 'belum tercapai') + '</span></div>';
      });
      h += '<div class="stat"><b>' + t.skor + '</b><span>Total dari ' + t.max + '</span></div></div>';
    } else {
      h += '<div class="score"><div class="stat"><b>' + Math.round(100 * t.correct / Math.max(1, t.n)) + '</b><span>Nilai (skala 100)</span></div>' +
        '<div class="stat"><b>' + t.correct + ' / ' + t.n + '</b><span>Jawaban benar</span></div>' +
        '<div class="stat"><b>' + t.skor + '</b><span>Skor dari ' + t.max + '</span></div></div>';
      if (e.type === 'skb') h += '<p class="note">SKB menggunakan sistem peringkat, jadi tidak ada ambang batas. Untuk formasi Kemenag, CAT bernilai 50%, praktik dan sikap kerja 40%, wawancara 10%.</p>';
    }
    h += '<section class="panel"><h2>Rincian per subtes</h2><table class="hist"><thead><tr><th>Subtes</th><th>Benar</th><th>Dijawab</th><th>Skor</th></tr></thead><tbody>';
    sum.order.forEach(function (k) {
      var b = sum.by[k];
      h += '<tr><td>' + esc(katLabel(k)) + '</td><td>' + b.correct + ' / ' + b.n + '</td><td>' + b.answered + ' / ' + b.n + '</td><td>' + b.skor + ' / ' + b.max + '</td></tr>';
    });
    h += '</tbody></table></section>';
    h += '<div class="nav"><button class="btn" data-act="retry">Ulangi paket ini</button><button class="btn alt" data-act="home">Beranda</button></div>';
    h += '<h2>Pembahasan</h2>' + reviewHtml(e) + '</main>';
    return h;
  }

  function render() {
    if (st.view === 'exam' && st.exam) app.innerHTML = renderExam();
    else if (st.view === 'result' && st.exam) app.innerHTML = renderResult();
    else app.innerHTML = renderHome();
  }

  /* ---------- aksi ---------- */
  function goto(i) {
    var e = st.exam;
    if (!e || e.done || i < 0 || i >= e.qs.length) return;
    e.cur = i; render();
  }
  function answer(i) {
    var e = st.exam;
    if (!e || e.done || st.view !== 'exam') return;
    if (e.fb === 'langsung' && e.ans[e.cur] != null) return;
    if (i < 0 || i >= e.qs[e.cur].o.length) return;
    e.ans[e.cur] = i;
    render();
  }
  var ACT = {
    start: function (t) { startExam(t.getAttribute('data-t')); },
    ans: function (t) { answer(+t.getAttribute('data-i')); },
    go: function (t) { goto(+t.getAttribute('data-i')); },
    flag: function () { var e = st.exam; if (e && !e.done) { e.flags[e.cur] = !e.flags[e.cur]; if (!e.flags[e.cur]) delete e.flags[e.cur]; render(); } },
    finish: function () { finish(false); },
    quit: function () { if (window.confirm('Keluar dari ujian? Jawaban yang belum diselesaikan tidak disimpan.')) { stopTimer(); st.exam = null; st.view = 'home'; render(); } },
    home: function () { stopTimer(); st.exam = null; st.view = 'home'; render(); window.scrollTo(0, 0); },
    filter: function (t) { st.exam.filter = t.getAttribute('data-f'); render(); },
    retry: function () { startExam(st.exam.type); }
  };
  app.addEventListener('click', function (ev) {
    var t = ev.target.closest('[data-act]');
    if (!t || t.disabled) return;
    var fn = ACT[t.getAttribute('data-act')];
    if (fn) fn(t);
  });
  app.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'fb') { st.set.fb = t.value; save('cpns-set', st.set); }
    else if (t.id === 'tm') { st.set.timer = t.checked; save('cpns-set', st.set); }
  });
  document.addEventListener('keydown', function (ev) {
    if (st.view !== 'exam' || !st.exam || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    var k = ev.key;
    if (/^[a-fA-F]$/.test(k)) answer(k.toUpperCase().charCodeAt(0) - 65);
    else if (k === 'ArrowRight') goto(st.exam.cur + 1);
    else if (k === 'ArrowLeft') goto(st.exam.cur - 1);
  });

  render();
  Promise.all(MAN.map(function (m) { return loadScript(m.file); })).then(function (errs) {
    st.errs = errs.filter(Boolean);
    buildBank();
    st.loaded = true;
    if (st.view === 'home') render();
  });
})();
