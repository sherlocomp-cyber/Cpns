# Latihan CPNS 2026 – Guru Bahasa Arab

Aplikasi simulasi ujian CPNS (gaya CAT BKN) untuk formasi **Guru Bahasa Arab**. Situs statis (HTML/CSS/JS, tanpa build), dipublikasikan ke GitHub Pages lewat GitHub Actions.

## Fitur
- Simulasi SKD: TWK, TIU, TKP dengan aturan skor dan ambang batas per subtes
- Simulasi SKB: pedagogik dan profesional guru Bahasa Arab
- Dua mode pembahasan:
  1. **Langsung** – jawaban terkunci, pembahasan muncul setelah satu soal dijawab
  2. **Setelah nilai** – semua soal dijawab, nilai keluar, baru pembahasan dibuka
- Penjelasan interaktif: soal yang punya field `lg` menampilkan "Lihat langkah penyelesaian" yang bisa dibuka (langkah bernomor)
- Pewaktu, tanda ragu-ragu, navigasi nomor soal, riwayat skor (disimpan di peramban)
- Bank soal dipecah per file di `data/` dan didaftarkan di `data/manifest.js`

## Struktur
- `index.html`, `css/style.css`, `css/explain.css`, `js/app.js`, `js/score.js` – aplikasi
- `data/manifest.js` – daftar bank soal (tambah satu baris untuk file baru)
- `data/*.js` – bank soal, setiap file mengisi `window.CPNS_DATA[id]`
- `.github/workflows/pages.yml` – publikasi otomatis ke GitHub Pages

## Format soal
Soal TWK, TIU, pedagogik, dan profesional: `{ sub, q, o: [opsi...], a: indeksJawaban, p: pembahasan, ctx?: teks pendukung, lg?: [langkah...] }`.
Soal TKP: `{ sub, q, o: [opsi...], s: [nilai 1-5 per opsi], p }` (tanpa `a`).
Teks Arab otomatis dirender kanan-ke-kiri. Setiap soal baru wajib punya `p` yang menjelaskan mengapa jawaban benar dan mengapa pengecoh salah.

## Info seleksi (dicek 7 November 2026)
- Seleksi CPNS 2026 belum resmi dibuka. Beberapa situs menyebut pendaftaran diperkirakan awal 2027, tetapi itu perkiraan non-resmi. Pantau sscasn.bkn.go.id, menpan.go.id, dan pengumuman Kemenag.
- Ambang batas SKD resmi 2026 belum diumumkan. Aplikasi memakai angka seleksi sebelumnya: TWK 65 (30 soal, maks 150), TIU 80 (35 soal, maks 175), TKP 166 (45 soal, maks 225), total maksimal 550, 110 soal dalam 100 menit. Ubah di `js/score.js` (CONFIG) bila ada angka resmi baru.
- Bobot akhir yang sering dipakai: SKD 40% dan SKB 60% (periksa aturan formasi Kemenag masing-masing).

## Cara melanjutkan di akun Claude lain
Baca bagian **Status** di bawah, kerjakan butir yang belum dicentang, dan push tiap file begitu selesai. Setelah membuat file di `data/`, daftarkan di `data/manifest.js`.

## Status
- [x] Kerangka aplikasi, workflow Pages, manifest
- [x] TWK: Pancasila/UUD 1945 (23), NKRI/Bahasa Indonesia (paket 1), nasionalisme/integritas/bahasa (18), paket 3 `twk-uud-sejarah-3` (18: pasal-pasal UUD dan sejarah pergerakan nasional, dengan `lg`)
- [x] TIU: numerik paket 1, numerik paket 2 (18, dengan langkah `lg`), verbal (20), penalaran dan logika (18, dengan langkah)
- [x] TKP: pelayanan publik (paket 1), jejaring/sosial budaya/TIK/anti radikalisme/integritas (18), paket 3 `tkp-pelayanan-2` (18, situasi guru dan sekolah, pembahasan skor tiap pilihan)
- [x] SKB pedagogik: paket 1, paket 2 (16: kurikulum merdeka, asesmen, diferensiasi, inklusi, etika guru, dengan langkah `lg`)
- [x] SKB profesional: nahwu paket 1 dan 2 (16), sharf paket 1, sharf paket 2 (16: mizan, fi'il mazid, amr, mu'tal, jamak taksir, isim alat, dengan `lg`), mufradat dan tarakib (16), metode dan keterampilan (15)
- [ ] Verifikasi Pages aktif (Settings → Pages → Source: GitHub Actions) dan uji di peramban
- [ ] TIU: figural/pola, verbal paket 2
- [x] SKB profesional: balaghah dasar paket 1 `arab-balaghah-1` (18: tasybih, isti'arah, majaz mursal dan aqli, kinayah, jinas, thibaq, muqabalah, saj', dengan `lg`)
- [x] SKB profesional: qira'ah paket 1 `arab-qiraah-1` (18: enam teks Arab berharakat, ide pokok, makna kata, isi teks, sebab-akibat, dengan `lg`)
- [x] SKB profesional: imla' paket 1 `arab-imla-1` (18: hamzah wasl dan qatha', kursi hamzah, ta marbuthah dan maftuhah, alif maqshurah, tanwin, huruf tidak bersambung, dengan `lg`)
- [ ] SKB profesional: istima', kisi-kisi Kemenag
- [ ] Opsi tambahan: mode latihan per subtopik
