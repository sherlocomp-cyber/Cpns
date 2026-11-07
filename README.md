# Latihan CPNS 2026 – Guru Bahasa Arab

Aplikasi simulasi ujian CPNS (gaya CAT BKN) untuk formasi **Guru Bahasa Arab**. Situs statis (HTML/CSS/JS, tanpa build), dipublikasikan ke GitHub Pages lewat GitHub Actions.

## Fitur
- Simulasi SKD: TWK, TIU, TKP dengan aturan skor dan ambang batas per subtes
- Simulasi SKB: pedagogik dan profesional guru Bahasa Arab
- Dua mode pembahasan:
  1. **Langsung** – jawaban terkunci, pembahasan muncul setelah satu soal dijawab
  2. **Setelah nilai** – semua soal dijawab, nilai keluar, baru pembahasan dibuka
- Pewaktu, tanda ragu-ragu, navigasi nomor soal, riwayat skor (disimpan di peramban)
- Bank soal dipecah per file di `data/` dan didaftarkan di `data/manifest.js`

## Struktur
- `index.html`, `css/style.css`, `js/app.js`, `js/score.js` – aplikasi
- `data/manifest.js` – daftar bank soal (tambah satu baris untuk file baru)
- `data/*.js` – bank soal, setiap file mengisi `window.CPNS_DATA[id]`
- `.github/workflows/pages.yml` – publikasi otomatis ke GitHub Pages

## Format soal
Soal TWK, TIU, pedagogik, dan profesional: `{ sub, q, o: [opsi...], a: indeksJawaban, p: pembahasan, ctx?: teks pendukung }`.
Soal TKP: `{ sub, q, o: [opsi...], s: [nilai 1-5 per opsi], p }` (tanpa `a`).
Teks Arab otomatis dirender kanan-ke-kiri.

## Cara melanjutkan di akun Claude lain
Baca bagian **Status** di bawah, kerjakan butir yang belum dicentang, dan push tiap file begitu selesai.

## Status
- [x] README
- [x] Workflow Pages (`pages.yml`)
- [x] Kerangka aplikasi (index.html, css, js)
- [x] `data/manifest.js`
- [x] TWK: Pancasila/UUD 1945 (paket 1), NKRI/Bahasa Indonesia (paket 1)
- [x] TIU: numerik (paket 1)
- [x] TKP: pelayanan publik dan profesionalisme (paket 1)
- [x] SKB pedagogik (paket 1)
- [x] SKB profesional: nahwu, sharf, metode dan keterampilan berbahasa (paket 1)
- [ ] Verifikasi Pages aktif (Settings → Pages → Source: GitHub Actions) dan uji di peramban
- [ ] Tambah soal: TIU verbal dan logika, TKP jejaring kerja/sosial budaya/TIK/anti radikalisme, TWK paket 2
- [ ] Tambah soal SKB profesional: mufradat, balaghah dasar, tarakib, qira’ah dan istima’, kisi-kisi Kemenag
