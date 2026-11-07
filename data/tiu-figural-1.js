window.CPNS_DATA = window.CPNS_DATA || {};
window.CPNS_DATA["tiu-figural-1"] = {
  judul: "TIU Figural dan Pola – Paket 1 (pola simbol, rotasi, pola gambar bertambah, sandi simbol, dengan langkah)",
  soal: [
    {
      sub: "Pola simbol",
      q: "Tentukan simbol berikutnya:\n▲ ● ■ ▲ ● ■ ▲ ● ....",
      o: ["▲", "●", "◆", "■", "★"],
      a: 3,
      p: "Pola berulang tiga simbol: ▲ ● ■. Deret berhenti setelah ▲ ●, sehingga simbol berikutnya adalah ■. Pilihan ▲ dan ● adalah awal siklus, sedangkan ◆ dan ★ tidak pernah muncul.",
      lg: ["Cari kelompok yang berulang: ▲ ● ■.", "Lihat posisi terakhir: deret berakhir pada ▲ ● (dua simbol pertama siklus).", "Simbol ketiga siklus adalah ■.", "Pilih ■."]
    },
    {
      sub: "Pola simbol",
      q: "Tentukan simbol berikutnya:\n★ ★ ☆ ★ ★ ☆ ★ ★ ....",
      o: ["☆", "★", "●", "○", "■"],
      a: 0,
      p: "Pola berulang tiga simbol: ★ ★ ☆. Deret berhenti setelah dua ★ berurutan, sehingga simbol berikutnya adalah ☆. Pilihan ★ akan membuat tiga ★ berurutan yang tidak pernah ada dalam pola.",
      lg: ["Cari kelompok yang berulang: ★ ★ ☆.", "Deret berakhir pada ★ ★, yaitu dua simbol pertama siklus.", "Simbol ketiga siklus adalah ☆.", "Pilih ☆."]
    },
    {
      sub: "Pola gambar bertambah",
      q: "Tentukan bentuk berikutnya:\n● | ●● | ●●● | ●●●● | ....",
      o: ["●●●", "●●●●", "●●●●●", "●●●●●●", "●●●●●●●"],
      a: 2,
      p: "Jumlah ● bertambah satu pada tiap bentuk: 1, 2, 3, 4. Bentuk berikutnya memiliki 5 titik.",
      lg: ["Hitung jumlah ● tiap bentuk: 1, 2, 3, 4.", "Selisih antarbentuk selalu +1.", "Bentuk kelima berisi 4 + 1 = 5 titik.", "Pilih ●●●●●."]
    },
    {
      sub: "Pola gambar bertambah",
      q: "Tentukan bentuk berikutnya:\n● | ○ | ●● | ○○ | ●●● | ○○○ | ....",
      o: ["○○○○", "●●●●", "●●●", "○○○○○", "●●●●●"],
      a: 1,
      p: "Pola dibaca berpasangan: ● dan ○ bergantian, dan jumlahnya bertambah satu setiap pasang (1, 2, 3). Setelah ○○○ giliran ● lagi, dengan jumlah 4, yaitu ●●●●.",
      lg: ["Perhatikan jenis simbol: ● dan ○ bergantian.", "Perhatikan jumlahnya: 1, 1, 2, 2, 3, 3, sehingga naik satu tiap dua bentuk.", "Bentuk setelah ○○○ adalah ●, dengan jumlah 4.", "Pilih ●●●●."]
    },
    {
      sub: "Rotasi",
      q: "Panah berputar searah jarum jam setiap langkah. Tentukan panah berikutnya:\n↑ → ↓ ← ↑ → ↓ ....",
      o: ["↑", "→", "↓", "←", "↖"],
      a: 3,
      p: "Tiap langkah panah berputar 90° searah jarum jam: ↑ → ↓ ←, lalu kembali ke ↑. Dari ↓ putaran berikutnya adalah ←.",
      lg: ["Tentukan arah putaran: ↑ ke → searah jarum jam.", "Urutan satu siklus: ↑ → ↓ ←.", "Deret berakhir pada ↓, sehingga berikutnya ←.", "Pilih ←."]
    },
    {
      sub: "Rotasi",
      q: "Panah berputar 45° searah jarum jam setiap langkah. Tentukan panah berikutnya:\n↑ ↗ → ↘ ↓ ↙ ....",
      o: ["↖", "↑", "↓", "→", "←"],
      a: 4,
      p: "Urutan arah searah jarum jam dengan selisih 45° adalah ↑, ↗, →, ↘, ↓, ↙, ←, ↖. Setelah ↙ arah berikutnya adalah ←. Pilihan ↖ adalah dua langkah setelah ↙.",
      lg: ["Tuliskan urutan delapan arah searah jarum jam: ↑ ↗ → ↘ ↓ ↙ ← ↖.", "Cari ↙, lalu geser satu langkah.", "Arah setelah ↙ adalah ←.", "Pilih ←."]
    },
    {
      sub: "Pola bilangan figural",
      q: "Tentukan banyak sisi bangun berikutnya:\nSegitiga (3 sisi), segiempat (4 sisi), segilima (5 sisi), segienam (6 sisi), ....",
      o: ["4", "5", "6", "7", "8"],
      a: 3,
      p: "Banyak sisi bertambah satu pada tiap bangun: 3, 4, 5, 6. Bangun berikutnya memiliki 7 sisi, yaitu segitujuh (heptagon).",
      lg: ["Tulis banyak sisi: 3, 4, 5, 6.", "Selisih tiap bangun adalah +1.", "Bangun berikutnya: 6 + 1 = 7.", "Pilih 7."]
    },
    {
      sub: "Pencerminan",
      q: "Sebuah urutan simbol dicerminkan terhadap garis tegak di sebelah kanannya, lalu hasilnya dibaca dari kiri ke kanan. Urutan asli:\n▲ ■ ● ★\nBagaimana hasil bayangannya?",
      o: ["▲ ■ ● ★", "★ ● ■ ▲", "● ★ ▲ ■", "★ ▲ ● ■", "■ ▲ ★ ●"],
      a: 1,
      p: "Pencerminan terhadap garis tegak membalik urutan kiri-kanan. Simbol paling kanan (★) menjadi paling kiri, sehingga hasilnya ★ ● ■ ▲. Pilihan pertama adalah urutan asli, bukan bayangan.",
      lg: ["Cermin tegak membalik posisi kiri dan kanan.", "Simbol paling kanan, ★, pindah ke paling kiri.", "Balik seluruh urutan: ★ ● ■ ▲.", "Pilih ★ ● ■ ▲."]
    },
    {
      sub: "Pola simbol",
      q: "Deret simbol ● ▲ ■ berulang terus (● ▲ ■ ● ▲ ■ ...). Simbol ke-20 adalah ....",
      o: ["▲", "■", "●", "★", "◆"],
      a: 0,
      p: "Satu siklus terdiri dari 3 simbol. 20 : 3 = 6 sisa 2, sehingga simbol ke-20 adalah simbol kedua dalam siklus, yaitu ▲.",
      lg: ["Panjang siklus: 3 simbol.", "Bagi 20 dengan 3: hasil 6 sisa 2.", "Sisa 2 berarti simbol kedua siklus: ●=1, ▲=2.", "Pilih ▲."]
    },
    {
      sub: "Pola bilangan figural",
      q: "Tentukan huruf berikutnya (urutan abjad A=1, B=2, ...):\nA B D G K ....",
      o: ["N", "O", "P", "Q", "R"],
      a: 2,
      p: "Posisi huruf: A=1, B=2, D=4, G=7, K=11. Selisihnya 1, 2, 3, 4, sehingga selisih berikutnya 5. Posisi berikutnya 11 + 5 = 16, yaitu huruf P.",
      lg: ["Ubah huruf menjadi angka: 1, 2, 4, 7, 11.", "Hitung selisih: 1, 2, 3, 4.", "Selisih berikutnya 5, jadi 11 + 5 = 16.", "Huruf ke-16 adalah P."]
    },
    {
      sub: "Pola simbol",
      q: "Tentukan bentuk berikutnya:\n1▲ 2■ 3● 4▲ 5■ 6● ....",
      o: ["7●", "7■", "8▲", "6▲", "7▲"],
      a: 4,
      p: "Dua pola berjalan bersamaan. Angka naik satu tiap bentuk: 7 setelah 6. Simbol berulang ▲ ■ ● ▲ ■ ●, sehingga setelah ● kembali ke ▲. Bentuk berikutnya adalah 7▲.",
      lg: ["Pisahkan menjadi dua pola: angka dan simbol.", "Angka: 1, 2, 3, 4, 5, 6, sehingga berikutnya 7.", "Simbol: ▲ ■ ● berulang, setelah ● kembali ke ▲.", "Gabungkan: 7▲."]
    },
    {
      sub: "Pola simbol",
      q: "Deret ■ □ ■ □ ■ □ ... berulang. Berapa jumlah ■ pada 12 simbol pertama?",
      o: ["5", "6", "7", "8", "9"],
      a: 1,
      p: "■ dan □ bergantian, sehingga ■ menempati posisi ganjil. Dalam 12 simbol ada 6 posisi ganjil, yaitu 12 : 2 = 6, sehingga jumlah ■ adalah 6.",
      lg: ["Pola bergantian dua simbol, jadi masing-masing separuh dari seluruhnya.", "Hitung: 12 : 2 = 6.", "Jumlah ■ pada 12 simbol pertama adalah 6.", "Pilih 6."]
    },
    {
      sub: "Pola bilangan figural",
      q: "Segitiga dari batang korek disusun berjajar. Satu segitiga butuh 3 batang, dua segitiga butuh 5 batang, tiga segitiga butuh 7 batang. Berapa batang untuk 10 segitiga?",
      o: ["21", "20", "22", "23", "19"],
      a: 0,
      p: "Banyak batang bertambah 2 tiap tambahan satu segitiga: 3, 5, 7. Rumusnya 2n + 1. Untuk n = 10 diperoleh 2 × 10 + 1 = 21 batang.",
      lg: ["Tulis data: n=1 → 3, n=2 → 5, n=3 → 7.", "Selisih tetap +2, sehingga rumusnya 2n + c.", "Untuk n=1: 2(1) + c = 3, jadi c = 1.", "n=10: 2(10) + 1 = 21."]
    },
    {
      sub: "Pola bilangan figural",
      q: "Persegi dari batang korek disusun berjajar. Satu persegi butuh 4 batang, dua persegi butuh 7 batang, tiga persegi butuh 10 batang. Berapa batang untuk 8 persegi?",
      o: ["24", "25", "26", "27", "28"],
      a: 1,
      p: "Banyak batang bertambah 3 tiap tambahan satu persegi: 4, 7, 10. Rumusnya 3n + 1. Untuk n = 8 diperoleh 3 × 8 + 1 = 25 batang.",
      lg: ["Tulis data: n=1 → 4, n=2 → 7, n=3 → 10.", "Selisih tetap +3, sehingga rumusnya 3n + c.", "Untuk n=1: 3(1) + c = 4, jadi c = 1.", "n=8: 3(8) + 1 = 25."]
    },
    {
      sub: "Pola gambar bertambah",
      q: "Tentukan bentuk berikutnya:\n○ | ●● | ○○○ | ●●●● | ○○○○○ | ....",
      o: ["○○○○○○", "●●●●●●", "●●●●●", "○○○○○○○", "●●●●●●●"],
      a: 1,
      p: "Simbol berganti ○ dan ● secara bergantian, dan jumlahnya naik satu: 1, 2, 3, 4, 5. Bentuk keenam adalah ● dengan jumlah 6, yaitu ●●●●●●.",
      lg: ["Jumlah titik: 1, 2, 3, 4, 5, sehingga berikutnya 6.", "Jenis simbol: ○ (ganjil), ● (genap).", "Bentuk keenam bernomor genap, jadi ●.", "Pilih ●●●●●● (6 titik)."]
    },
    {
      sub: "Sandi simbol",
      q: "Jika ▲ = 2, ■ = 5, dan ● = 3, maka nilai dari ■ × ▲ − ● adalah ....",
      o: ["5", "6", "8", "7", "9"],
      a: 3,
      p: "Ganti simbol dengan angkanya: 5 × 2 − 3. Kerjakan perkalian lebih dulu: 10 − 3 = 7.",
      lg: ["Ganti simbol: ■ = 5, ▲ = 2, ● = 3.", "Susun: 5 × 2 − 3.", "Kerjakan perkalian dulu: 10 − 3.", "Hasil 7."]
    },
    {
      sub: "Sandi simbol",
      q: "Jika ▲ + ▲ = 10 dan ▲ + ● = 7, maka ● × ▲ = ....",
      o: ["7", "8", "10", "12", "14"],
      a: 2,
      p: "Dari ▲ + ▲ = 10 diperoleh ▲ = 5. Dari ▲ + ● = 7 diperoleh ● = 7 − 5 = 2. Maka ● × ▲ = 2 × 5 = 10.",
      lg: ["▲ + ▲ = 10, jadi ▲ = 5.", "▲ + ● = 7, jadi ● = 7 − 5 = 2.", "Hitung ● × ▲ = 2 × 5.", "Hasil 10."]
    },
    {
      sub: "Pola simbol",
      q: "Simbol ● ■ ▲ diulang terus (● ■ ▲ ● ■ ▲ ...). Berapa jumlah ■ pada 25 simbol pertama?",
      o: ["6", "7", "8", "9", "10"],
      a: 2,
      p: "Satu siklus ● ■ ▲ berisi 3 simbol dan memuat satu ■. 25 : 3 = 8 sisa 1, jadi ada 8 siklus penuh (24 simbol) dengan 8 ■. Simbol ke-25 adalah ● dari siklus berikutnya, bukan ■. Jumlah ■ adalah 8.",
      lg: ["Panjang siklus 3 simbol, tiap siklus memuat 1 ■.", "25 : 3 = 8 sisa 1.", "8 siklus penuh memuat 8 ■; sisa 1 simbol adalah ●, bukan ■.", "Jumlah ■ adalah 8."]
    }
  ]
};
