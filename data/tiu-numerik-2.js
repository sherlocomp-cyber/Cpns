window.CPNS_DATA = window.CPNS_DATA || {};
window.CPNS_DATA["tiu-numerik-2"] = {
  judul: "TIU Numerik – Paket 2 (dengan langkah penyelesaian)",
  soal: [
    {
      sub: "Pecahan",
      q: "Hasil dari 3/4 + 5/6 − 1/3 adalah ....",
      o: ["7/6", "4/3", "5/4", "11/12", "3/2"],
      a: 2,
      p: "Penjumlahan dan pengurangan pecahan harus memakai penyebut yang sama. KPK dari 4, 6, dan 3 adalah 12, sehingga hasilnya 15/12 = 5/4. Kesalahan umum adalah menjumlahkan pembilang dan penyebut secara langsung tanpa menyamakan penyebut, dan itu menghasilkan angka yang salah.",
      lg: ["Cari penyebut sama. KPK dari 4, 6, dan 3 adalah 12.", "Ubah tiap pecahan: 3/4 = 9/12, 5/6 = 10/12, 1/3 = 4/12.", "Hitung dari kiri ke kanan: 9/12 + 10/12 = 19/12, lalu 19/12 − 4/12 = 15/12.", "Sederhanakan 15/12 dengan membagi pembilang dan penyebut dengan 3, hasilnya 5/4."]
    },
    {
      sub: "Persentase",
      q: "Hasil dari 15% dari 240 ditambah 25% dari 120 adalah ....",
      o: ["60", "64", "70", "66", "72"],
      a: 3,
      p: "Hitung dua persen itu secara terpisah lalu jumlahkan: 15% × 240 = 36 dan 25% × 120 = 30, jadi totalnya 66. Pengecoh lain muncul dari salah hitung salah satu persen. Cara mengeceknya, 10% dari 240 adalah 24 dan 5% adalah 12, sehingga 15% = 36.",
      lg: ["Ubah persen ke pecahan: 15% = 15/100 dan 25% = 1/4.", "15/100 × 240 = 3.600/100 = 36.", "1/4 × 120 = 30.", "Jumlahkan: 36 + 30 = 66."]
    },
    {
      sub: "Perbandingan senilai",
      q: "Harga 5 buku tulis adalah Rp60.000. Dengan harga satuan yang sama, harga 8 buku tulis adalah ....",
      o: ["Rp84.000", "Rp90.000", "Rp100.000", "Rp108.000", "Rp96.000"],
      a: 4,
      p: "Makin banyak buku, makin mahal total harganya (senilai). Harga satu buku = 60.000 : 5 = 12.000, sehingga 8 buku = 8 × 12.000 = 96.000. Pengecoh Rp84.000 sama dengan harga 7 buku dan Rp108.000 sama dengan harga 9 buku, jadi keduanya hasil salah kali.",
      lg: ["Cari harga satuan: 60.000 : 5 = 12.000 per buku.", "Kalikan dengan jumlah yang ditanyakan: 12.000 × 8.", "12.000 × 8 = 96.000.", "Cara lain: 5/8 = 60.000/x, sehingga x = 60.000 × 8 : 5 = 96.000."]
    },
    {
      sub: "Perbandingan berbalik nilai",
      q: "Dua belas pekerja menyelesaikan suatu proyek dalam 15 hari. Setelah ditambah 6 pekerja dengan kemampuan sama, proyek selesai dalam ... hari.",
      o: ["8", "10", "9", "12", "13"],
      a: 1,
      p: "Makin banyak pekerja, makin singkat waktunya (berbalik nilai). Beban kerja = 12 × 15 = 180 orang-hari. Setelah ditambah, pekerjanya 18 orang, jadi waktunya 180 : 18 = 10 hari. Jebakannya adalah menganggap senilai dan menambah hari, atau lupa bahwa jumlah pekerja baru adalah 12 + 6 = 18, bukan 6.",
      lg: ["Hitung beban pekerjaan: 12 pekerja × 15 hari = 180 orang-hari.", "Jumlah pekerja baru: 12 + 6 = 18 orang.", "Waktu baru = beban : pekerja = 180 : 18.", "180 : 18 = 10 hari."]
    },
    {
      sub: "Skala",
      q: "Pada peta berskala 1 : 2.000.000, jarak dua kota adalah 7,5 cm. Jarak sebenarnya kedua kota adalah ....",
      o: ["15 km", "150 km", "75 km", "300 km", "1.500 km"],
      a: 1,
      p: "Jarak sebenarnya = jarak peta × penyebut skala = 7,5 × 2.000.000 = 15.000.000 cm. Karena 1 km = 100.000 cm, hasilnya 150 km. Pengecoh 15 km dan 1.500 km muncul karena koma bergeser satu tempat saat mengubah cm ke km.",
      lg: ["Kalikan jarak peta dengan penyebut skala: 7,5 × 2.000.000 = 15.000.000 cm.", "Ingat 1 km = 1.000 m = 100.000 cm.", "Ubah ke km: 15.000.000 : 100.000 = 150.", "Jadi jarak sebenarnya 150 km."]
    },
    {
      sub: "Bunga tunggal",
      q: "Rina menabung Rp2.000.000 dengan bunga tunggal 6% per tahun. Jumlah tabungannya setelah 9 bulan adalah ....",
      o: ["Rp2.060.000", "Rp2.090.000", "Rp2.080.000", "Rp2.120.000", "Rp2.180.000"],
      a: 1,
      p: "Bunga tunggal dihitung dari modal awal: bunga = modal × persen × (lama bulan : 12) = 2.000.000 × 6% × 9/12 = 90.000. Pertanyaannya jumlah tabungan, jadi 2.000.000 + 90.000 = 2.090.000. Pengecoh Rp2.120.000 adalah hasil satu tahun penuh, dan Rp2.180.000 muncul bila angka 9 bulan dipakai sebagai 9%.",
      lg: ["Bunga setahun = 6% × 2.000.000 = 120.000.", "Karena hanya 9 bulan, bunga = 9/12 × 120.000 = 90.000.", "Jumlah tabungan = modal + bunga = 2.000.000 + 90.000.", "Hasilnya Rp2.090.000. Periksa kata tanya: yang diminta jumlah tabungan, bukan bunganya saja."]
    },
    {
      sub: "Soal cerita umur",
      q: "Lima tahun lalu umur ayah empat kali umur anaknya. Jika jumlah umur mereka sekarang 55 tahun, umur ayah sekarang adalah ... tahun.",
      o: ["36", "38", "40", "45", "41"],
      a: 4,
      p: "Misalkan umur anak sekarang x, maka umur ayah 55 − x. Lima tahun lalu: 55 − x − 5 = 4(x − 5), sehingga 50 − x = 4x − 20 dan x = 14. Ayah sekarang 55 − 14 = 41 tahun. Pembuktian: lima tahun lalu ayah 36 dan anak 9, dan 36 = 4 × 9 benar. Pengecoh 36 adalah umur ayah lima tahun lalu, bukan umur sekarang.",
      lg: ["Misalkan umur anak sekarang x. Umur ayah sekarang 55 − x.", "Lima tahun lalu: ayah (55 − x − 5) = 50 − x, anak (x − 5).", "Syaratnya 50 − x = 4 × (x − 5) = 4x − 20, sehingga 70 = 5x dan x = 14.", "Umur ayah sekarang 55 − 14 = 41 tahun.", "Cek: lima tahun lalu ayah 36, anak 9, dan 36 = 4 × 9 (sesuai)."]
    },
    {
      sub: "Jarak, kecepatan, waktu",
      q: "Kota A dan B berjarak 360 km. Mobil dari A berkecepatan 50 km/jam dan motor dari B berkecepatan 40 km/jam, berangkat bersamaan dan saling berlawanan arah. Mereka berpapasan setelah ... jam.",
      o: ["4", "3", "3,5", "4,5", "5"],
      a: 0,
      p: "Pada gerak berlawanan arah yang berjalan bersamaan, kecepatan keduanya dijumlahkan: 50 + 40 = 90 km/jam. Waktu berpapasan = jarak : kecepatan gabungan = 360 : 90 = 4 jam. Kecepatan dikurangi dipakai untuk gerak searah (mengejar), bukan berlawanan arah.",
      lg: ["Keduanya saling mendekat, jadi jarak yang mereka tutup per jam = 50 + 40 = 90 km.", "Waktu = jarak : kecepatan gabungan = 360 : 90.", "360 : 90 = 4 jam.", "Cek: mobil menempuh 50 × 4 = 200 km, motor 40 × 4 = 160 km, total 360 km."]
    },
    {
      sub: "Kerja bersama",
      q: "Andi dapat menyelesaikan suatu pekerjaan dalam 10 hari, Budi dalam 15 hari. Jika mereka bekerja bersama, pekerjaan selesai dalam ... hari.",
      o: ["5", "7", "6", "12", "25"],
      a: 2,
      p: "Kecepatan kerja dijumlahkan: Andi 1/10 pekerjaan per hari, Budi 1/15 per hari. Bersama 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6, sehingga selesai dalam 6 hari. Hasil kerja bersama pasti lebih singkat dari waktu orang tercepat (10 hari), jadi pilihan 12 dan 25 pasti salah.",
      lg: ["Kecepatan Andi = 1/10 pekerjaan per hari, Budi = 1/15 per hari.", "Samakan penyebut dengan 30: 1/10 = 3/30 dan 1/15 = 2/30.", "Kecepatan bersama = 3/30 + 2/30 = 5/30 = 1/6 pekerjaan per hari.", "Waktu = 1 : 1/6 = 6 hari."]
    },
    {
      sub: "Deret aritmetika",
      q: "Pada barisan aritmetika, suku ke-5 adalah 17 dan suku ke-9 adalah 33. Suku ke-12 adalah ....",
      o: ["41", "43", "47", "45", "49"],
      a: 3,
      p: "Dari suku ke-5 ke suku ke-9 ada 4 langkah dengan kenaikan total 33 − 17 = 16, jadi beda = 4. Suku ke-12 = suku ke-9 + 3 × 4 = 33 + 12 = 45. Dengan rumus Un = a + (n − 1)b: suku pertama a = 17 − 4 × 4 = 1, dan U12 = 1 + 11 × 4 = 45.",
      lg: ["Selisih nomor suku: 9 − 5 = 4 langkah.", "Selisih nilai: 33 − 17 = 16, jadi beda b = 16 : 4 = 4.", "Dari suku ke-9 menuju suku ke-12 ada 3 langkah: 33 + 3 × 4 = 45.", "Cek dengan rumus: a = 1, maka U12 = 1 + 11 × 4 = 45."]
    },
    {
      sub: "Deret geometri",
      q: "Pada barisan geometri 3, 6, 12, 24, ..., suku ke-8 adalah ....",
      o: ["192", "384", "256", "768", "1.536"],
      a: 1,
      p: "Rasio r = 2 dan suku pertama a = 3. Rumus Un = a × r^(n−1), jadi U8 = 3 × 2^7 = 3 × 128 = 384. Pengecoh 192 adalah suku ke-7, 768 suku ke-9, dan 1.536 suku ke-10, yaitu salah menentukan pangkat (memakai n, bukan n − 1).",
      lg: ["Hitung rasio: 6 : 3 = 2 dan 12 : 6 = 2, jadi r = 2.", "Rumus suku ke-n barisan geometri: Un = a × r^(n−1), dengan a = 3.", "U8 = 3 × 2^7. Pangkatnya 7 karena n − 1 = 8 − 1.", "2^7 = 128, sehingga 3 × 128 = 384."]
    },
    {
      sub: "Rata-rata gabungan",
      q: "Rata-rata nilai 30 siswa kelas A adalah 70, sedangkan rata-rata nilai 20 siswa kelas B adalah 80. Rata-rata nilai gabungan kedua kelas adalah ....",
      o: ["72", "73", "75", "74", "76"],
      a: 3,
      p: "Rata-rata gabungan tidak boleh dihitung dengan (70 + 80) : 2 karena jumlah siswa kedua kelas berbeda. Gunakan jumlah nilai: 30 × 70 = 2.100 dan 20 × 80 = 1.600, total 3.700 untuk 50 siswa, sehingga rata-ratanya 74. Pilihan 75 adalah jebakan rata-rata sederhana. Hasil 74 lebih dekat ke 70 karena kelas A lebih banyak siswanya.",
      lg: ["Jumlah nilai kelas A = 30 × 70 = 2.100.", "Jumlah nilai kelas B = 20 × 80 = 1.600.", "Jumlah semua = 3.700 dan banyak siswa 30 + 20 = 50.", "Rata-rata gabungan = 3.700 : 50 = 74."]
    },
    {
      sub: "Statistika",
      q: "Diketahui data 6, 7, 7, 8, 9, 9, 9, 10. Selisih modus dan median data tersebut adalah ....",
      o: ["0", "1", "0,5", "1,5", "2"],
      a: 2,
      p: "Data sudah terurut dan ada 8 data (genap), jadi median adalah rata-rata data ke-4 dan ke-5: (8 + 9) : 2 = 8,5. Modus (paling sering muncul) adalah 9, muncul tiga kali. Selisihnya 9 − 8,5 = 0,5. Kesalahan umum adalah mengambil median 8 (hanya data ke-4), yang menghasilkan selisih 1.",
      lg: ["Data sudah urut: 6, 7, 7, 8, 9, 9, 9, 10. Banyak data n = 8 (genap).", "Median = rata-rata data ke-4 dan ke-5 = (8 + 9) : 2 = 8,5.", "Modus = nilai yang paling sering muncul = 9 (tiga kali).", "Selisih = 9 − 8,5 = 0,5."]
    },
    {
      sub: "Peluang",
      q: "Dua dadu bersisi enam dilempar bersamaan. Peluang jumlah kedua mata dadu sama dengan 8 adalah ....",
      o: ["1/9", "1/6", "5/36", "7/36", "5/12"],
      a: 2,
      p: "Ruang sampel dua dadu ada 6 × 6 = 36. Pasangan berjumlah 8 ada lima: (2,6), (3,5), (4,4), (5,3), (6,2). Peluangnya 5/36. Pengecoh 1/6 = 6/36 adalah peluang jumlah 7, bukan 8. Perhatikan bahwa (2,6) dan (6,2) dihitung berbeda, dan (4,4) hanya dihitung sekali.",
      lg: ["Banyak kemungkinan seluruhnya: 6 × 6 = 36.", "Daftar pasangan berjumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2).", "Ada 5 pasangan yang memenuhi.", "Peluang = 5/36."]
    },
    {
      sub: "Permutasi",
      q: "Lima orang duduk berjajar dalam satu baris. Jika dua orang tertentu harus selalu duduk berdampingan, banyak susunan duduk yang mungkin adalah ....",
      o: ["24", "72", "96", "120", "48"],
      a: 4,
      p: "Anggap dua orang yang harus berdampingan sebagai satu kelompok. Maka ada 4 objek yang disusun, yaitu 4! = 24 susunan. Di dalam kelompok, kedua orang itu bisa bertukar tempat (2! = 2 cara). Total 24 × 2 = 48. Pengecoh 24 lupa pertukaran tempat di dalam kelompok, sedangkan 120 adalah 5! tanpa syarat berdampingan.",
      lg: ["Gabungkan dua orang yang harus berdampingan menjadi satu blok.", "Sekarang ada 4 objek (blok + 3 orang lain), susunannya 4! = 4 × 3 × 2 × 1 = 24.", "Di dalam blok, dua orang bisa bertukar tempat, jadi 2! = 2 cara.", "Total susunan = 24 × 2 = 48."]
    },
    {
      sub: "Kombinasi",
      q: "Dari 7 pengurus akan dipilih 3 orang untuk menjadi tim perwakilan tanpa membedakan jabatan. Banyak cara memilih adalah ....",
      o: ["21", "35", "42", "210", "343"],
      a: 1,
      p: "Jabatan tidak dibedakan, jadi urutan tidak penting dan ini kombinasi: C(7,3) = 7! : (3! × 4!) = (7 × 6 × 5) : (3 × 2 × 1) = 35. Pengecoh 210 adalah permutasi P(7,3) = 7 × 6 × 5 yang memperhitungkan urutan. Pilihan 21 adalah C(7,2) dan 343 adalah 7^3.",
      lg: ["Tentukan jenisnya: yang dipilih hanya anggota tim, tidak ada jabatan, jadi urutan tidak penting dan pakai kombinasi.", "Rumus: C(7,3) = (7 × 6 × 5) : (3 × 2 × 1).", "Pembilang 210 dan penyebut 6, sehingga 210 : 6 = 35."]
    },
    {
      sub: "Sistem persamaan",
      q: "Harga 2 pensil dan 3 buku adalah Rp19.000, sedangkan harga 1 pensil dan 2 buku adalah Rp11.000. Harga 3 pensil dan 2 buku adalah ....",
      o: ["Rp19.000", "Rp20.000", "Rp22.000", "Rp21.000", "Rp23.000"],
      a: 3,
      p: "Misalkan pensil p dan buku b. Persamaan: 2p + 3b = 19.000 dan p + 2b = 11.000. Kalikan persamaan kedua dengan 2: 2p + 4b = 22.000. Kurangkan dengan persamaan pertama: b = 3.000. Maka p = 11.000 − 6.000 = 5.000. Harga 3 pensil dan 2 buku = 15.000 + 6.000 = 21.000. Pilihan 19.000 hanya angka pada soal, bukan hasil.",
      lg: ["Misalkan p = harga pensil dan b = harga buku.", "Persamaan (1): 2p + 3b = 19.000. Persamaan (2): p + 2b = 11.000.", "Kalikan (2) dengan 2 supaya p sama: 2p + 4b = 22.000.", "Kurangkan dengan (1): (2p + 4b) − (2p + 3b) = 22.000 − 19.000, sehingga b = 3.000.", "Masukkan ke (2): p + 6.000 = 11.000, sehingga p = 5.000.", "Hitung yang ditanyakan: 3 × 5.000 + 2 × 3.000 = 15.000 + 6.000 = 21.000."]
    },
    {
      sub: "Teorema Pythagoras",
      q: "Sebuah tangga sepanjang 13 m bersandar pada dinding. Jarak kaki tangga ke dinding 5 m. Tinggi ujung tangga dari tanah adalah ....",
      o: ["12 m", "10 m", "8 m", "14 m", "18 m"],
      a: 0,
      p: "Tangga, dinding, dan tanah membentuk segitiga siku-siku dengan tangga sebagai sisi miring (13 m). Tinggi = akar dari (13² − 5²) = akar dari (169 − 25) = akar dari 144 = 12 m. Ini tripel Pythagoras 5-12-13, yang sering muncul di soal. Pengecoh 8 adalah 13 − 5 (salah mengurang langsung), dan 18 adalah 13 + 5.",
      lg: ["Gambar segitiga siku-siku: sisi miring = tangga = 13, alas = 5, tinggi = t.", "Teorema Pythagoras: t² = 13² − 5² = 169 − 25 = 144.", "t = akar 144 = 12 m.", "Pintasan: kenali tripel 5-12-13, jadi tidak perlu menghitung panjang."]
    }
  ]
};
