(function (root) {
  'use strict';

  // Aturan skor SKD mengikuti CAT: TWK/TIU benar = 5, salah/kosong = 0 (tanpa nilai minus);
  // TKP setiap pilihan bernilai 1-5. Passing grade bisa berubah tiap tahun: cek pengumuman resmi.
  var CONFIG = {
    skd: {
      menit: 100,
      twk: { n: 30, pg: 65 },
      tiu: { n: 35, pg: 80 },
      tkp: { n: 45, pg: 166 }
    },
    skb: { menit: 90 },
    perBenar: 5,
    tkpMax: 5,
    detikPerSoal: 55
  };

  function best(q) {
    var m = -1, idx = 0;
    (q.s || []).forEach(function (v, i) { if (v > m) { m = v; idx = i; } });
    return idx;
  }
  function key(q) { return q.kat === 'TKP' ? best(q) : q.a; }
  function isCorrect(q, ans) { return ans != null && ans === key(q); }
  function score(q, ans) {
    if (ans == null) return 0;
    if (q.kat === 'TKP') return (q.s && q.s[ans]) || 0;
    return ans === q.a ? CONFIG.perBenar : 0;
  }
  function max(q) { return q.kat === 'TKP' ? CONFIG.tkpMax : CONFIG.perBenar; }

  function summarize(qs, ans) {
    var by = {}, order = [];
    var tot = { n: qs.length, answered: 0, correct: 0, skor: 0, max: 0 };
    qs.forEach(function (q, i) {
      var b = by[q.kat];
      if (!b) {
        b = by[q.kat] = { kat: q.kat, n: 0, answered: 0, correct: 0, skor: 0, max: 0 };
        order.push(q.kat);
      }
      var a = ans[i];
      b.n++;
      b.max += max(q);
      tot.max += max(q);
      if (a != null) { b.answered++; tot.answered++; }
      if (isCorrect(q, a)) { b.correct++; tot.correct++; }
      var s = score(q, a);
      b.skor += s;
      tot.skor += s;
    });
    return { by: by, order: order, total: tot };
  }

  function skdVerdict(sum) {
    var items = [], ok = true, full = true;
    ['TWK', 'TIU', 'TKP'].forEach(function (k) {
      var b = sum.by[k];
      var c = CONFIG.skd[k.toLowerCase()];
      if (!b) { ok = false; full = false; return; }
      var pass = b.skor >= c.pg;
      if (!pass) ok = false;
      if (b.n !== c.n) full = false;
      items.push({ kat: k, skor: b.skor, max: b.max, pg: c.pg, pass: pass });
    });
    return { items: items, pass: ok && items.length === 3, full: full && items.length === 3 };
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return p(h) + ':' + p(m) + ':' + p(s);
  }

  var api = {
    CONFIG: CONFIG, best: best, key: key, isCorrect: isCorrect, score: score, max: max,
    summarize: summarize, skdVerdict: skdVerdict, shuffle: shuffle, fmtTime: fmtTime
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CPNSScore = api;
})(typeof window !== 'undefined' ? window : this);
