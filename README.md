# Latihan CPNS 2026 – Guru Bahasa Arab

Aplikasi simulasi ujian CPNS (gaya CAT BKN) untuk formasi **Guru Bahasa Arab**. Situs statis (HTML/CSS/JS, tanpa build), dipublikasikan ke GitHub Pages lewat GitHub Actions.

## Fitur yang direncanakan
- Simulasi SKD: TWK, TIU, TKP dengan aturan skor dan passing grade resmi
- Simulasi SKB: pedagogik dan profesional guru Bahasa Arab
- Dua mode pembahasan:
  1. **Langsung** – pembahasan muncul setelah satu soal dijawab
  2. **Setelah nilai** – semua soal dijawab, nilai keluar, baru pembahasan dibuka
- Bank soal dipecah per file di `data/` dan didaftarkan di `data/manifest.js`

## Struktur
- `index.html`, `css/style.css`, `js/app.js` – aplikasi
- `data/manifest.js` – daftar bank soal (tambah entri di sini untuk file baru)
- `data/*.js` – bank soal, setiap file mengisi `window.CPNS_DATA[id]`
- `.github/workflows/pages.yml` – publikasi otomatis ke GitHub Pages

## Cara melanjutkan di akun Claude lain
Baca bagian **Status** di bawah, lanjutkan butir yang belum dicentang, dan push tiap file begitu selesai.

## Status
- [x] README
- [ ] Workflow Pages
- [ ] Kerangka aplikasi (index.html, css, js)
- [ ] data/manifest.js
- [ ] Bank soal TWK
- [ ] Bank soal TIU
- [ ] Bank soal TKP
- [ ] Bank soal SKB Bahasa Arab
- [ ] Verifikasi dan pastikan Pages aktif (Settings → Pages → Source: GitHub Actions)
