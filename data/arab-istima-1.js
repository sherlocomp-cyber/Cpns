window.CPNS_DATA = window.CPNS_DATA || {};
(function () {
  var T1 = "مَرْحَبًا، اِسْمِي أَحْمَدُ. أَنَا مُدَرِّسٌ فِي مَدْرَسَةٍ اِبْتِدَائِيَّةٍ. أَسْكُنُ فِي بَنْدُونْغ مَعَ أُسْرَتِي. أُحِبُّ الْقِرَاءَةَ وَكُرَةَ الْقَدَمِ.";
  var T2 = "الْبَائِعُ: صَبَاحَ الْخَيْرِ، كَيْفَ أُسَاعِدُكَ؟\nالزَّبُونُ: أُرِيدُ كِتَابَيْنِ وَثَلَاثَةَ أَقْلَامٍ.\nالْبَائِعُ: الْكِتَابُ بِعِشْرِينَ أَلْفَ رُوبِيَّةٍ، وَالْقَلَمُ بِخَمْسَةِ آلَافٍ.\nالزَّبُونُ: كَمِ الْمَجْمُوعُ؟";
  var T3 = "أَسْتَيْقِظُ فِي الرَّابِعَةِ فَجْرًا لِصَلَاةِ الصُّبْحِ، ثُمَّ أَقْرَأُ الْقُرْآنَ. أُفْطِرُ فِي السَّادِسَةِ وَالنِّصْفِ، وَأَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّابِعَةِ بِالدَّرَّاجَةِ. أَرْجِعُ إِلَى الْبَيْتِ فِي الثَّانِيَةِ ظُهْرًا.";
  var T4 = "تَنْبِيهٌ: غَدًا سَتَكُونُ رِحْلَةُ الْفَصْلِ إِلَى حَدِيقَةِ الْحَيَوَانَاتِ. يَحْضُرُ الطُّلَّابُ إِلَى الْمَدْرَسَةِ فِي السَّاعَةِ السَّابِعَةِ صَبَاحًا. يَجِبُ أَنْ يَلْبَسَ كُلُّ طَالِبٍ الزِّيَّ الرِّيَاضِيَّ وَيَحْمِلَ زُجَاجَةَ مَاءٍ. لَا يَجُوزُ إِحْضَارُ الْهَاتِفِ.";
  var T5 = "الْمَرِيضُ: عِنْدِي صُدَاعٌ وَحُمَّى مُنْذُ يَوْمَيْنِ.\nالطَّبِيبُ: اِشْرَبِ الْمَاءَ كَثِيرًا، وَخُذْ هَذَا الدَّوَاءَ بَعْدَ الْأَكْلِ مَرَّتَيْنِ فِي الْيَوْمِ، وَارْتَحْ فِي الْبَيْتِ.";
  var N = "Transkrip yang dibacakan (dalam ujian asli berupa rekaman audio):";

  window.CPNS_DATA["arab-istima-1"] = {
    judul: "SKB Profesional Bahasa Arab – Istima' Paket 1 (Menyimak Transkrip: Perkenalan, Jual Beli, Jadwal, Pengumuman, Kesehatan)",
    soal: [
      {
        sub: "Istima' – perkenalan",
        ctx: N + "\n" + T1,
        q: "مَا مِهْنَةُ أَحْمَدَ؟",
        o: ["طَالِبٌ", "مُدَرِّسٌ", "طَبِيبٌ", "تَاجِرٌ", "سَائِقٌ"],
        a: 1,
        p: "Teks menyebut أَنَا مُدَرِّسٌ فِي مَدْرَسَةٍ, artinya Ahmad adalah guru. Pilihan lain adalah profesi atau status yang tidak disebut dalam teks.",
        lg: ["Baca pertanyaan: مِهْنَة berarti pekerjaan.", "Cari kalimat pekerjaan dalam teks: أَنَا مُدَرِّسٌ.", "مُدَرِّس berarti guru.", "Pilih مُدَرِّسٌ."]
      },
      {
        sub: "Istima' – perkenalan",
        ctx: N + "\n" + T1,
        q: "أَيْنَ يَسْكُنُ أَحْمَدُ؟",
        o: ["فِي بَنْدُونْغ", "فِي جَاكَرْتَا", "فِي سُورَابَايَا", "فِي الْمَدْرَسَةِ", "فِي الْمَكْتَبَةِ"],
        a: 0,
        p: "Teks menyebut أَسْكُنُ فِي بَنْدُونْغ, artinya Ahmad tinggal di Bandung. Sekolah adalah tempat ia mengajar, bukan tempat tinggalnya.",
        lg: ["يَسْكُنُ berarti tinggal.", "Cari kalimat dengan أَسْكُنُ: فِي بَنْدُونْغ.", "Eliminasi الْمَدْرَسَة karena itu tempat kerja.", "Pilih فِي بَنْدُونْغ."]
      },
      {
        sub: "Istima' – perkenalan",
        ctx: N + "\n" + T1,
        q: "مَاذَا يُحِبُّ أَحْمَدُ؟",
        o: ["السِّبَاحَةُ", "الطَّبْخُ", "الرَّسْمُ", "الْقِرَاءَةُ وَكُرَةُ الْقَدَمِ", "السَّفَرُ"],
        a: 3,
        p: "Teks menyebut أُحِبُّ الْقِرَاءَةَ وَكُرَةَ الْقَدَمِ, artinya Ahmad suka membaca dan sepak bola. Pilihan lain tidak disebut.",
        lg: ["يُحِبُّ berarti suka.", "Cari kalimat dengan أُحِبُّ: الْقِرَاءَةَ وَكُرَةَ الْقَدَمِ.", "Cocokkan dengan pilihan yang memuat keduanya.", "Pilih الْقِرَاءَةُ وَكُرَةُ الْقَدَمِ."]
      },
      {
        sub: "Istima' – jual beli",
        ctx: N + "\n" + T2,
        q: "كَمْ كِتَابًا يُرِيدُ الزَّبُونُ؟",
        o: ["كِتَابًا وَاحِدًا", "كِتَابَيْنِ", "ثَلَاثَةَ كُتُبٍ", "خَمْسَةَ كُتُبٍ", "عِشْرِينَ كِتَابًا"],
        a: 1,
        p: "Pembeli berkata أُرِيدُ كِتَابَيْنِ, bentuk mutsanna yang berarti dua buku. Tiga adalah jumlah pena (ثَلَاثَةَ أَقْلَامٍ), dan dua puluh adalah harga buku, bukan jumlahnya.",
        lg: ["كَمْ berarti berapa.", "Cari kata buku dalam ucapan pembeli: كِتَابَيْنِ.", "Akhiran ـَيْنِ menandakan dua (mutsanna).", "Pilih كِتَابَيْنِ."]
      },
      {
        sub: "Istima' – jual beli",
        ctx: N + "\n" + T2,
        q: "كَمْ ثَمَنُ الْقَلَمِ؟",
        o: ["عِشْرُونَ أَلْفًا", "أَلْفُ رُوبِيَّةٍ", "عَشَرَةُ آلَافٍ", "ثَلَاثَةُ آلَافٍ", "خَمْسَةُ آلَافٍ"],
        a: 4,
        p: "Penjual berkata وَالْقَلَمُ بِخَمْسَةِ آلَافٍ, artinya harga pena lima ribu rupiah. Dua puluh ribu adalah harga satu buku.",
        lg: ["ثَمَن berarti harga, الْقَلَم berarti pena.", "Cari harga pena: وَالْقَلَمُ بِخَمْسَةِ آلَافٍ.", "خَمْسَة آلَاف berarti lima ribu.", "Pilih خَمْسَةُ آلَافٍ."]
      },
      {
        sub: "Istima' – jual beli",
        ctx: N + "\n" + T2,
        q: "كَمِ الْمَجْمُوعُ الَّذِي يَدْفَعُهُ الزَّبُونُ؟",
        o: ["خَمْسُونَ أَلْفًا", "سِتُّونَ أَلْفًا", "خَمْسَةٌ وَخَمْسُونَ أَلْفًا", "خَمْسَةٌ وَأَرْبَعُونَ أَلْفًا", "سَبْعُونَ أَلْفًا"],
        a: 2,
        p: "Dua buku: 2 × 20.000 = 40.000. Tiga pena: 3 × 5.000 = 15.000. Jumlah 40.000 + 15.000 = 55.000, yaitu خَمْسَةٌ وَخَمْسُونَ أَلْفًا.",
        lg: ["Hitung buku: 2 × 20.000 = 40.000.", "Hitung pena: 3 × 5.000 = 15.000.", "Jumlahkan: 40.000 + 15.000 = 55.000.", "55.000 dalam bahasa Arab: خَمْسَةٌ وَخَمْسُونَ أَلْفًا."]
      },
      {
        sub: "Istima' – jadwal harian",
        ctx: N + "\n" + T3,
        q: "مَتَى يُفْطِرُ الْمُتَكَلِّمُ؟",
        o: ["فِي الرَّابِعَةِ", "فِي الْخَامِسَةِ", "فِي السَّابِعَةِ", "فِي السَّادِسَةِ وَالنِّصْفِ", "فِي الثَّانِيَةِ"],
        a: 3,
        p: "Teks menyebut أُفْطِرُ فِي السَّادِسَةِ وَالنِّصْفِ, artinya sarapan pukul 06.30. Pukul empat adalah bangun, pukul tujuh berangkat sekolah, dan pukul dua pulang.",
        lg: ["مَتَى berarti kapan, يُفْطِرُ berarti sarapan.", "Cari kalimat أُفْطِرُ: فِي السَّادِسَةِ وَالنِّصْفِ.", "Jangan tertukar dengan jam lain: empat (bangun), tujuh (berangkat), dua (pulang).", "Pilih فِي السَّادِسَةِ وَالنِّصْفِ."]
      },
      {
        sub: "Istima' – jadwal harian",
        ctx: N + "\n" + T3,
        q: "كَيْفَ يَذْهَبُ الْمُتَكَلِّمُ إِلَى الْمَدْرَسَةِ؟",
        o: ["بِالدَّرَّاجَةِ", "بِالسَّيَّارَةِ", "بِالْحَافِلَةِ", "مَشْيًا", "بِالْقِطَارِ"],
        a: 0,
        p: "Teks menyebut وَأَذْهَبُ إِلَى الْمَدْرَسَةِ فِي السَّابِعَةِ بِالدَّرَّاجَةِ. الدَّرَّاجَة berarti sepeda, sehingga ia berangkat dengan sepeda.",
        lg: ["كَيْفَ di sini bertanya cara berangkat.", "Cari kalimat أَذْهَبُ إِلَى الْمَدْرَسَةِ.", "Kata akhirnya: بِالدَّرَّاجَةِ (dengan sepeda).", "Pilih بِالدَّرَّاجَةِ."]
      },
      {
        sub: "Istima' – jadwal harian",
        ctx: N + "\n" + T3,
        q: "مَاذَا يَفْعَلُ الْمُتَكَلِّمُ بَعْدَ صَلَاةِ الصُّبْحِ؟",
        o: ["يُفْطِرُ", "يَقْرَأُ الْقُرْآنَ", "يَذْهَبُ إِلَى الْمَدْرَسَةِ", "يَنَامُ", "يَرْجِعُ إِلَى الْبَيْتِ"],
        a: 1,
        p: "Urutan dalam teks: bangun untuk salat Subuh, ثُمَّ أَقْرَأُ الْقُرْآنَ (kemudian membaca Al-Qur'an). Jadi setelah salat Subuh ia membaca Al-Qur'an; sarapan dan berangkat sekolah terjadi setelahnya.",
        lg: ["بَعْدَ berarti setelah.", "Cari kata penghubung ثُمَّ setelah صَلَاةِ الصُّبْحِ.", "Kegiatan setelah ثُمَّ: أَقْرَأُ الْقُرْآنَ.", "Pilih يَقْرَأُ الْقُرْآنَ."]
      },
      {
        sub: "Istima' – pengumuman",
        ctx: N + "\n" + T4,
        q: "إِلَى أَيْنَ تَكُونُ رِحْلَةُ الْفَصْلِ؟",
        o: ["إِلَى الْمَتْحَفِ", "إِلَى الشَّاطِئِ", "إِلَى الْجَبَلِ", "إِلَى الْمَكْتَبَةِ", "إِلَى حَدِيقَةِ الْحَيَوَانَاتِ"],
        a: 4,
        p: "Pengumuman menyebut رِحْلَةُ الْفَصْلِ إِلَى حَدِيقَةِ الْحَيَوَانَاتِ, artinya karyawisata kelas ke kebun binatang.",
        lg: ["رِحْلَة berarti karyawisata, إِلَى أَيْنَ berarti ke mana.", "Cari kata setelah إِلَى dalam teks.", "حَدِيقَةُ الْحَيَوَانَاتِ berarti kebun binatang.", "Pilih إِلَى حَدِيقَةِ الْحَيَوَانَاتِ."]
      },
      {
        sub: "Istima' – pengumuman",
        ctx: N + "\n" + T4,
        q: "مَاذَا يَلْبَسُ الطُّلَّابُ فِي الرِّحْلَةِ؟",
        o: ["الزِّيَّ الْأَبْيَضَ", "الْمِعْطَفَ", "الزِّيَّ الرِّيَاضِيَّ", "الْقُبَّعَةَ فَقَطْ", "الزِّيَّ الْمَدْرَسِيَّ"],
        a: 2,
        p: "Teks menyebut يَجِبُ أَنْ يَلْبَسَ كُلُّ طَالِبٍ الزِّيَّ الرِّيَاضِيَّ, artinya setiap siswa wajib memakai seragam olahraga.",
        lg: ["يَلْبَسُ berarti memakai pakaian.", "Cari kalimat يَجِبُ أَنْ يَلْبَسَ.", "Objeknya: الزِّيَّ الرِّيَاضِيَّ (seragam olahraga).", "Pilih الزِّيَّ الرِّيَاضِيَّ."]
      },
      {
        sub: "Istima' – pengumuman",
        ctx: N + "\n" + T4,
        q: "مَا الشَّيْءُ الْمَمْنُوعُ فِي الرِّحْلَةِ؟",
        o: ["إِحْضَارُ الْهَاتِفِ", "حَمْلُ زُجَاجَةِ الْمَاءِ", "الْحُضُورُ فِي السَّابِعَةِ", "لُبْسُ الزِّيِّ الرِّيَاضِيِّ", "الذَّهَابُ مَعَ الْفَصْلِ"],
        a: 0,
        p: "Teks menyebut لَا يَجُوزُ إِحْضَارُ الْهَاتِفِ, artinya membawa ponsel tidak diperbolehkan. Tiga pilihan lain justru diwajibkan atau menjadi bagian acara.",
        lg: ["مَمْنُوع berarti dilarang.", "Cari ungkapan larangan: لَا يَجُوزُ.", "Hal yang dilarang: إِحْضَارُ الْهَاتِفِ.", "Eliminasi pilihan yang diwajibkan dalam teks."]
      },
      {
        sub: "Istima' – kesehatan",
        ctx: N + "\n" + T5,
        q: "مُنْذُ مَتَى مَرِضَ الْمَرِيضُ؟",
        o: ["مُنْذُ سَاعَةٍ", "مُنْذُ يَوْمَيْنِ", "مُنْذُ ثَلَاثَةِ أَيَّامٍ", "مُنْذُ أُسْبُوعٍ", "مُنْذُ شَهْرٍ"],
        a: 1,
        p: "Pasien berkata عِنْدِي صُدَاعٌ وَحُمَّى مُنْذُ يَوْمَيْنِ, artinya sakit kepala dan demam sejak dua hari.",
        lg: ["مُنْذُ مَتَى berarti sejak kapan.", "Cari kata مُنْذُ dalam ucapan pasien.", "يَوْمَيْنِ adalah mutsanna: dua hari.", "Pilih مُنْذُ يَوْمَيْنِ."]
      },
      {
        sub: "Istima' – kesehatan",
        ctx: N + "\n" + T5,
        q: "مَتَى يَأْخُذُ الْمَرِيضُ الدَّوَاءَ؟",
        o: ["قَبْلَ النَّوْمِ", "قَبْلَ الْأَكْلِ", "فِي الصَّبَاحِ فَقَطْ", "بَعْدَ الْأَكْلِ", "عِنْدَ الْعَطَشِ"],
        a: 3,
        p: "Dokter berkata خُذْ هَذَا الدَّوَاءَ بَعْدَ الْأَكْلِ, artinya minum obat setelah makan. قَبْلَ الْأَكْلِ (sebelum makan) adalah kebalikannya.",
        lg: ["يَأْخُذُ الدَّوَاءَ berarti minum obat.", "Cari keterangan waktu dalam ucapan dokter: بَعْدَ الْأَكْلِ.", "بَعْدَ berarti setelah, bukan قَبْلَ (sebelum).", "Pilih بَعْدَ الْأَكْلِ."]
      },
      {
        sub: "Istima' – kesehatan",
        ctx: N + "\n" + T5,
        q: "كَمْ مَرَّةً يَأْخُذُ الدَّوَاءَ فِي الْيَوْمِ؟",
        o: ["مَرَّةً وَاحِدَةً", "ثَلَاثَ مَرَّاتٍ", "مَرَّتَيْنِ", "أَرْبَعَ مَرَّاتٍ", "خَمْسَ مَرَّاتٍ"],
        a: 2,
        p: "Dokter berkata مَرَّتَيْنِ فِي الْيَوْمِ, bentuk mutsanna yang berarti dua kali sehari.",
        lg: ["كَمْ مَرَّةً berarti berapa kali.", "Cari kata مَرَّة dalam ucapan dokter: مَرَّتَيْنِ.", "Akhiran ـَيْنِ menandakan dua kali.", "Pilih مَرَّتَيْنِ."]
      }
    ]
  };
})();
