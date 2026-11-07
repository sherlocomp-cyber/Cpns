window.CPNS_DATA = window.CPNS_DATA || {};
window.CPNS_DATA["tiu-logika-1"] = {
  judul: "TIU Penalaran dan Logika – Paket 1",
  soal: [
    {
      sub: "Deret angka",
      q: "Lanjutan deret 2, 5, 8, 11, ... adalah ....",
      o: ["13", "14", "15", "16", "17"],
      a: 1,
      p: "Deret bertambah tetap 3 setiap suku, jadi suku berikutnya 11 + 3 = 14.",
      lg: ["Hitung selisih suku berurutan: 5 − 2 = 3, 8 − 5 = 3, 11 − 8 = 3.", "Selisihnya selalu 3, jadi ini deret aritmetika dengan beda 3.", "Suku berikutnya 11 + 3 = 14."]
    },
    {
      sub: "Deret angka",
      q: "Lanjutan deret 3, 6, 12, 24, ... adalah ....",
      o: ["36", "42", "54", "48", "60"],
      a: 3,
      p: "Setiap suku dikali 2, jadi 24 × 2 = 48.",
      lg: ["Bandingkan suku berurutan: 6 : 3 = 2, 12 : 6 = 2, 24 : 12 = 2.", "Rasio tetap 2, jadi ini deret geometri.", "Suku berikutnya 24 × 2 = 48."]
    },
    {
      sub: "Deret angka",
      q: "Lanjutan deret 1, 4, 9, 16, 25, ... adalah ....",
      o: ["36", "30", "34", "40", "49"],
      a: 0,
      p: "Deret bilangan kuadrat: 1², 2², 3², 4², 5², sehingga berikutnya 6² = 36.",
      lg: ["Kenali bentuknya: 1 = 1², 4 = 2², 9 = 3², 16 = 4², 25 = 5².", "Urutan berikutnya 6².", "6 × 6 = 36. Cara lain: selisihnya 3, 5, 7, 9, lalu 11, sehingga 25 + 11 = 36."]
    },
    {
      sub: "Deret angka",
      q: "Lanjutan deret 2, 3, 5, 8, 12, ... adalah ....",
      o: ["15", "16", "17", "18", "19"],
      a: 2,
      p: "Selisihnya naik 1, 2, 3, 4, sehingga selisih berikutnya 5 dan suku berikutnya 12 + 5 = 17.",
      lg: ["Hitung selisih: 3 − 2 = 1, 5 − 3 = 2, 8 − 5 = 3, 12 − 8 = 4.", "Selisih membentuk deret 1, 2, 3, 4, jadi selisih berikutnya 5.", "12 + 5 = 17."]
    },
    {
      sub: "Deret angka",
      q: "Lanjutan deret 5, 10, 8, 16, 14, 28, ... adalah ....",
      o: ["24", "26", "30", "56", "54"],
      a: 1,
      p: "Polanya berselang-seling: kali 2, lalu kurang 2. Setelah 28 (hasil kali 2), langkah berikutnya kurang 2 sehingga 26.",
      lg: ["Tulis operasi antarsuku: 5 → 10 (× 2), 10 → 8 (− 2), 8 → 16 (× 2), 16 → 14 (− 2), 14 → 28 (× 2).", "Operasi bergantian: × 2, − 2, × 2, − 2, × 2, ...", "Setelah × 2 giliran − 2: 28 − 2 = 26."]
    },
    {
      sub: "Deret angka",
      q: "Lanjutan deret 100, 95, 85, 70, 50, ... adalah ....",
      o: ["35", "30", "20", "25", "15"],
      a: 3,
      p: "Pengurangannya membesar 5 setiap langkah: 5, 10, 15, 20, lalu 25. Jadi 50 − 25 = 25.",
      lg: ["Hitung penurunan: 100 − 95 = 5, 95 − 85 = 10, 85 − 70 = 15, 70 − 50 = 20.", "Penurunan naik 5 setiap langkah, jadi berikutnya 25.", "50 − 25 = 25."]
    },
    {
      sub: "Silogisme",
      q: "Semua pegawai negeri wajib menaati peraturan. Budi adalah pegawai negeri. Kesimpulan yang tepat adalah ....",
      o: ["Budi tidak wajib menaati peraturan", "Sebagian pegawai negeri bernama Budi", "Budi wajib menaati peraturan", "Semua orang wajib menaati peraturan", "Budi bukan pegawai negeri"],
      a: 2,
      p: "Ini silogisme kategoris yang sah: premis umum (semua A adalah B) dan premis khusus (Budi adalah A) menghasilkan Budi adalah B.",
      lg: ["Tulis ulang: A = pegawai negeri, B = wajib menaati peraturan.", "Premis 1: semua A adalah B. Premis 2: Budi adalah A.", "Karena Budi termasuk A dan semua A adalah B, maka Budi adalah B."]
    },
    {
      sub: "Silogisme",
      q: "Semua guru adalah sarjana. Sebagian sarjana adalah penulis. Kesimpulan yang pasti benar adalah ....",
      o: ["Semua guru adalah penulis", "Sebagian guru adalah penulis", "Tidak ada guru yang menjadi penulis", "Semua penulis adalah guru", "Tidak dapat ditarik kesimpulan pasti tentang hubungan guru dan penulis"],
      a: 4,
      p: "Sebagian sarjana yang menjadi penulis bisa saja bukan guru. Jadi tidak ada kesimpulan pasti tentang guru dan penulis.",
      lg: ["Gambarkan lingkaran: guru berada seluruhnya di dalam lingkaran sarjana.", "Lingkaran penulis hanya perlu memotong sebagian lingkaran sarjana.", "Potongan itu boleh berada di luar area guru, boleh juga mengenainya. Dua kemungkinan ini sama-sama sah.", "Karena tidak ada kepastian, tidak ada kesimpulan yang pasti benar tentang hubungan guru dan penulis."]
    },
    {
      sub: "Logika kondisional",
      q: "Jika hujan, maka jalan basah. Jalan tidak basah. Kesimpulan yang pasti benar adalah ....",
      o: ["Hujan", "Tidak hujan", "Jalan basah", "Mungkin hujan", "Tidak dapat disimpulkan"],
      a: 1,
      p: "Ini modus tollens: jika P maka Q, dan Q tidak terjadi, maka P pasti tidak terjadi.",
      lg: ["Tulis P = hujan, Q = jalan basah. Aturan: jika P maka Q.", "Fakta: Q tidak terjadi (jalan tidak basah).", "Jika P terjadi, Q pasti terjadi. Karena Q tidak terjadi, P tidak mungkin terjadi.", "Jadi tidak hujan."]
    },
    {
      sub: "Logika kondisional",
      q: "Jika Rina rajin belajar, maka ia lulus ujian. Rina lulus ujian. Kesimpulan yang tepat adalah ....",
      o: ["Rina pasti rajin belajar", "Rina tidak rajin belajar", "Rina tidak lulus ujian", "Tidak dapat ditarik kesimpulan pasti tentang kerajinan belajar Rina", "Rina lulus karena soalnya mudah"],
      a: 3,
      p: "Aturan hanya menyatakan rajin belajar cukup untuk lulus. Lulus bisa terjadi karena sebab lain, sehingga tidak bisa dipastikan Rina rajin belajar. Menyimpulkan 'pasti rajin' adalah kesalahan menegaskan akibat.",
      lg: ["Tulis P = rajin belajar, Q = lulus. Aturan: jika P maka Q.", "Fakta: Q terjadi. Aturan tidak menyatakan 'hanya jika P maka Q'.", "Q bisa muncul tanpa P, misalnya karena bakat atau bimbingan lain.", "Karena itu P tidak dapat dipastikan."]
    },
    {
      sub: "Penalaran urutan",
      q: "Andi lebih tinggi daripada Budi, Budi lebih tinggi daripada Cici, dan Dedi lebih pendek daripada Cici. Siapa yang paling pendek?",
      o: ["Andi", "Budi", "Cici", "Dedi", "Tidak dapat ditentukan"],
      a: 3,
      p: "Urutan dari tertinggi: Andi, Budi, Cici, Dedi. Dedi paling pendek.",
      lg: ["Susun dari pernyataan 1 dan 2: Andi > Budi > Cici.", "Pernyataan 3: Dedi < Cici, jadi Dedi ditempatkan setelah Cici.", "Urutan lengkap Andi > Budi > Cici > Dedi, sehingga yang paling pendek Dedi."]
    },
    {
      sub: "Aritmetika sosial",
      q: "Enam orang menyelesaikan suatu pekerjaan dalam 10 hari. Jika pekerjaan yang sama dikerjakan empat orang dengan kecepatan kerja sama, pekerjaan selesai dalam ... hari.",
      o: ["12", "15", "14", "16", "18"],
      a: 1,
      p: "Jumlah orang dan lama hari berbanding terbalik. 6 × 10 = 60 orang-hari, lalu 60 : 4 = 15 hari.",
      lg: ["Hitung total beban pekerjaan: 6 orang × 10 hari = 60 orang-hari.", "Dengan 4 orang, hari yang dibutuhkan = 60 : 4.", "60 : 4 = 15 hari."]
    },
    {
      sub: "Persentase",
      q: "Harga sebuah baju Rp200.000. Diskon 25%, lalu diskon tambahan 10% dari harga setelah diskon pertama. Harga akhirnya adalah ....",
      o: ["Rp150.000", "Rp130.000", "Rp140.000", "Rp145.000", "Rp135.000"],
      a: 4,
      p: "Diskon bertingkat dihitung berurutan: 75% dari 200.000 = 150.000, lalu 90% dari 150.000 = 135.000. Bukan diskon 35% sekaligus.",
      lg: ["Setelah diskon 25%, harga menjadi 75% × 200.000 = 150.000.", "Diskon tambahan 10% dihitung dari 150.000, jadi harga menjadi 90% × 150.000.", "90% × 150.000 = 135.000.", "Jebakan umum: menjumlah 25% + 10% = 35% akan memberi 130.000 dan itu salah."]
    },
    {
      sub: "Kecepatan",
      q: "Sebuah mobil menempuh 180 km dalam 3 jam. Dengan kecepatan yang sama, jarak yang ditempuh dalam 5 jam adalah ....",
      o: ["240 km", "270 km", "300 km", "320 km", "360 km"],
      a: 2,
      p: "Kecepatan = 180 : 3 = 60 km/jam. Jarak 5 jam = 60 × 5 = 300 km.",
      lg: ["Kecepatan = jarak : waktu = 180 : 3 = 60 km/jam.", "Jarak = kecepatan × waktu = 60 × 5.", "60 × 5 = 300 km."]
    },
    {
      sub: "Rata-rata",
      q: "Rata-rata nilai empat siswa adalah 80. Jika seorang siswa bernilai 100 bergabung, rata-rata nilai kelima siswa menjadi ....",
      o: ["82", "84", "83", "85", "86"],
      a: 1,
      p: "Jumlah nilai empat siswa = 4 × 80 = 320. Setelah ditambah 100 menjadi 420, rata-rata = 420 : 5 = 84.",
      lg: ["Jumlah nilai awal = rata-rata × banyak data = 80 × 4 = 320.", "Jumlah baru = 320 + 100 = 420, dengan banyak data 5.", "Rata-rata baru = 420 : 5 = 84."]
    },
    {
      sub: "Perbandingan",
      q: "Perbandingan umur Ani dan Budi adalah 3 : 5. Jika jumlah umur mereka 40 tahun, umur Budi adalah ... tahun.",
      o: ["25", "15", "20", "30", "35"],
      a: 0,
      p: "Total bagian 3 + 5 = 8, nilai satu bagian 40 : 8 = 5. Umur Budi 5 bagian = 25 tahun.",
      lg: ["Jumlahkan bagian perbandingan: 3 + 5 = 8 bagian.", "Satu bagian = 40 : 8 = 5 tahun.", "Umur Budi = 5 bagian × 5 = 25 tahun (Ani 15 tahun, jumlahnya 40)."]
    },
    {
      sub: "Himpunan",
      q: "Dari 40 siswa, 25 siswa menyukai matematika, 20 siswa menyukai bahasa, dan 5 siswa tidak menyukai keduanya. Banyak siswa yang menyukai keduanya adalah ....",
      o: ["5", "10", "15", "20", "25"],
      a: 1,
      p: "Siswa yang menyukai paling sedikit satu mata pelajaran = 40 − 5 = 35. Dengan rumus gabungan, 25 + 20 − x = 35 sehingga x = 10.",
      lg: ["Siswa yang suka minimal satu pelajaran = 40 − 5 = 35.", "Rumus: n(M ∪ B) = n(M) + n(B) − n(M ∩ B).", "35 = 25 + 20 − x, sehingga x = 45 − 35 = 10."]
    },
    {
      sub: "Peluang",
      q: "Sebuah dadu bersisi enam dilempar satu kali. Peluang muncul mata dadu bilangan prima adalah ....",
      o: ["1/6", "1/3", "1/2", "2/3", "5/6"],
      a: 2,
      p: "Bilangan prima pada dadu adalah 2, 3, dan 5, yaitu 3 kemungkinan dari 6. Peluang = 3/6 = 1/2. Angka 1 bukan bilangan prima.",
      lg: ["Ruang sampel: 1, 2, 3, 4, 5, 6, jadi ada 6 kemungkinan.", "Bilangan prima di antaranya: 2, 3, 5 (1 bukan prima, 4 dan 6 bukan prima).", "Peluang = 3 : 6 = 1/2."]
    }
  ]
};
