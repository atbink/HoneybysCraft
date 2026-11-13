export interface ProductCategory {
  id: string;
  number: string;
  title: string;
  formOption: string;
  tagline: string;
  description: string;
  editorialNote: string;
  materials: string[];
  dimensions: string;
  image: string;
  cropClass: string;
  aspectClass: string;
  offsetClass: string;
}

export interface ProcessStep {
  number: string;
  stageCode: string;
  title: string;
  tagline: string;
  description: string;
  atelierDetail: string;
  deliverable: string;
  iconName: 'sketch' | 'pattern' | 'stitch' | 'hug';
}

export interface WhyFeature {
  number: string;
  title: string;
  indonesianLead: string;
  indonesianSub: string;
  badge: string;
}

export interface CreativeMoodItem {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  craftNotes: string;
  fabricRecipe: string;
  image: string;
  rotation: string;
  tagPosition: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  categoryLabel: string;
  filterKey: 'SEMUA' | 'BONEKA CUSTOM' | 'KARAKTER' | 'MASKOT' | 'ANIME' | 'ANIMAL';
  secondaryFilter?: 'SEMUA' | 'BONEKA CUSTOM' | 'KARAKTER' | 'MASKOT' | 'ANIME' | 'ANIMAL';
  transformationTag: string;
  clientStory: string;
  materials: string;
  size: string;
  image: string;
  sketchPreview?: string;
  aspect: string;
}

export interface QuantityTier {
  number: string;
  title: string;
  subtitle: string;
  formValue: string;
  idealFor: string[];
  badge: string;
  visualCount: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  atelierTip?: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'custom-plushie',
    number: '01',
    title: 'Custom Plushie',
    formOption: 'Boneka Custom',
    tagline: 'Wujudkan karakter impian jadi nyata.',
    description: 'Dibuat dari pola kustom sesuai ilustrasi, OC, atau karakter favoritmu.',
    editorialNote: 'Dari siluet rambut berlapis, bordir mata berbinar, sampai baju rajut mini yang bisa dilepas-pasang.',
    materials: ['Kain Minky Super Soft', 'Bordir Benang Rayon Halus', 'Outfit Mini Lepas-Pasang'],
    dimensions: '15 cm – 45 cm',
    image: '/images/Chibi Blue-Haired Plush in Cozy Craft Setting.png',
    cropClass: 'clip-arch',
    aspectClass: 'aspect-[4/5]',
    offsetClass: 'lg:translate-y-0',
  },
  {
    id: 'flannel-doll',
    number: '02',
    title: 'Flannel Doll',
    formOption: 'Boneka Flanel',
    tagline: 'Sentuhan tangan hangat dengan detail berkarakter.',
    description: 'Kreasi boneka dari kain flanel lembut dan wol bertekstur klasik.',
    editorialNote: 'Menggunakan tusuk feston manual (blanket stitch) yang memberi kesan vintage, hangat, dan sangat personal.',
    materials: ['Flanel Wol Lembut', 'Felt Wol Presisi', 'Isian Dakron Silikon Grade-A'],
    dimensions: '12 cm – 30 cm',
    image: '/images/cat-flannel-doll.png',
    cropClass: 'clip-atelier-right',
    aspectClass: 'aspect-[5/6]',
    offsetClass: 'lg:translate-y-12',
  },
  {
    id: 'custom-mascot',
    number: '03',
    title: 'Custom Mascot',
    formOption: 'Maskot',
    tagline: 'Jadikan maskot brand atau studiomu lebih berkesan.',
    description: 'Boneka maskot fisik untuk identitas brand, kafe, studio, atau komunitas.',
    editorialNote: 'Bentuk proporsional dan kokoh saat dipajang di meja kerja, rak display, maupun dalam paket PR hampers.',
    materials: ['Kain Velboa Halus', 'Aplikasi Bordir Rapi', 'Woven Label Eksklusif'],
    dimensions: '20 cm – 60 cm',
    image: '/images/Fluffy Bear on Wooden Base.png',
    cropClass: 'clip-atelier-left',
    aspectClass: 'aspect-[4/5]',
    offsetClass: 'lg:translate-y-3',
  },
  {
    id: 'custom-pillow',
    number: '04',
    title: 'Custom Pillow',
    formOption: 'Bantal Custom',
    tagline: 'Kenyamanan personal yang pas untuk dipeluk.',
    description: 'Bantal die-cut mengikuti siluet karakter, wajah peliharaan, atau ilustrasi.',
    editorialNote: 'Kombinasi bahan sherpa lembut berbulu dan aksen punch-needle yang empuk menemani santai di sofa maupun kasur.',
    materials: ['Sherpa & Bouclé Lembut', 'Aksen Punch Needle', 'Busa / Microfiber Hypoallergenic'],
    dimensions: '35 cm – 65 cm',
    image: '/images/cat-pillow.png',
    cropClass: 'clip-stamp',
    aspectClass: 'aspect-[6/5]',
    offsetClass: 'lg:translate-y-0',
  },
  {
    id: 'custom-bags',
    number: '05',
    title: 'Custom Bags',
    formOption: 'Tas',
    tagline: 'Aksesoris wearable dengan sentuhan karakter favorit.',
    description: 'Tote bag bertekstur plush, tas selempang karakter, dan tas serut custom.',
    editorialNote: 'Dibuat fungsional untuk membawa barang harian dengan aksen bulu lembut dan tali kanvas kokoh.',
    materials: ['Fleece Sherpa Premium', 'Kanvas Katun Tebal', 'Resleting Logam & Hardware Vintage'],
    dimensions: 'Tote 36×40 cm · Sling 24 cm',
    image: '/images/cat-bags-pouches.png',
    cropClass: 'clip-atelier-right',
    aspectClass: 'aspect-[6/5]',
    offsetClass: 'lg:translate-y-10',
  },
  {
    id: 'custom-pouches',
    number: '06',
    title: 'Custom Pouches & Keychains',
    formOption: 'Pouch',
    tagline: 'Teman kecil serbaguna untuk kantong, tas, dan gantungan harian.',
    description: 'Pouch koin, gantungan kunci plush berbulu, dan charm tas custom karakter.',
    editorialNote: 'Dilengkapi furing katun empuk di bagian dalam dan pengait gantungan logam kokoh.',
    materials: ['Fleece Bulu Halus', 'Furing Busa Katun', 'Ring Logam Kokoh'],
    dimensions: '10 cm – 18 cm',
    image: '/images/Five Fuzzy Plush Keychains on Wood.png',
    cropClass: 'clip-arch',
    aspectClass: 'aspect-[5/6]',
    offsetClass: 'lg:translate-y-2',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    stageCode: 'TAHAP 01 · KONSULTASI AWAL',
    title: 'KIRIMKAN IDEMU',
    tagline: 'Coretan di kertas, foto, atau sekadar cerita — semua bisa jadi awal.',
    description:
      'Upload gambar, coretan tangan, foto karakter, atau cukup ceritakan bayangan yang ada di kepalamu.',
    atelierDetail:
      'Nggak perlu bisa gambar bagus. Tim pengrajin kami siap mendiskusikan referensi dan memberi saran bahan terbaik.',
    deliverable: 'Review Desain & Rekomendasi Bahan',
    iconName: 'sketch',
  },
  {
    number: '02',
    stageCode: 'TAHAP 02 · PERANCANGAN POLA',
    title: 'KITA BIKIN DESAINNYA',
    tagline: 'Menerjemahkan ide 2D jadi proporsi 3D yang pas dipeluk.',
    description:
      'Kami bantu memetakan pola 3D, mencocokkan palet warna kain, hingga memilih jenis ekspresi wajah yang tepat.',
    atelierDetail:
      'Mulai dari sketsa pola potong, pilihan warna benang bordir, hingga proporsi chibi yang seimbang sebelum kain dipotong.',
    deliverable: 'Peta Pola, Palet Warna & Acc Desain',
    iconName: 'pattern',
  },
  {
    number: '03',
    stageCode: 'TAHAP 03 · PROSES JAHIT MANUAL',
    title: 'DIJAHIT DENGAN PENUH HATI',
    tagline: 'Setiap lekukan dan jahitan dikerjakan manual oleh tangan pengrajin.',
    description:
      'Pemotongan kain secara presisi, bordir detail wajah, pembuatan outfit mini, hingga proses pengisian dakron empuk.',
    atelierDetail:
      'Kami memastikan tiap jahitan rapat dan rapi, dengan tekstur yang lembut serta ekspresi wajah yang hidup.',
    deliverable: 'Cutting, Bordir Detail & Penjahitan Studio',
    iconName: 'stitch',
  },
  {
    number: '04',
    stageCode: 'TAHAP 04 · SIAP MENEMANIMU',
    title: 'BONEKAMU SIAP DIPELUK',
    tagline: 'Imajinasi yang selama ini ada di pikiran, sekarang sudah bisa digenggam.',
    description:
      'Boneka melalui tahap quality check, dirapikan, diberi birth tag studio, dan dikemas hangat sebelum dikirim ke rumahmu.',
    atelierDetail:
      'Dikemas cantik dalam box ramah lingkungan dengan kertas roti dan kartu sertifikat handmade khusus untukmu.',
    deliverable: 'Quality Check & Packaging Spesial',
    iconName: 'hug',
  },
];

export const WHY_CHOOSE_FEATURES: WhyFeature[] = [
  {
    number: '01',
    title: 'PESAN SATUAN? BISA BANGET',
    indonesianLead: 'Mau bikin cuma satu?\nTentu bisa.',
    indonesianSub:
      'Nggak perlu nunggu kuota atau pesanan banyak. Mau bikin satu boneka spesial buat diri sendiri atau kado orang tersayang? Kami layani sepenuh hati.',
    badge: '✦ TANPA MINIMUM ORDER',
  },
  {
    number: '02',
    title: 'POLA 100% CUSTOM MADE',
    indonesianLead: 'Lahir langsung dari\nimajinasi unikmu.',
    indonesianSub:
      'Kami nggak memakai cetakan pabrik yang kaku. Setiap pesanan punya pola tersendiri yang disesuaikan dengan proporsi karaktermu.',
    badge: '✦ POLA KHUSUS PERSONAL',
  },
  {
    number: '03',
    title: 'PERSONALISASI TANPA BATAS',
    indonesianLead: 'Warna, outfit, sampai\nekspresi bisa diatur.',
    indonesianSub:
      'Mau ekspresi tersenyum, mata bintang berbinar, pipi blushing, atau outfit baju rajut mini yang bisa dicopot? Semua bisa disesuaikan.',
    badge: '✦ OUTFIT & EKSPRESI CUSTOM',
  },
  {
    number: '04',
    title: 'JUMLAH SANGAT FLEKSIBEL',
    indonesianLead: 'Satu boneka cinta,\natau ratusan maskot.',
    indonesianSub:
      'Melayani pesanan satuan, pesanan batch kecil untuk sesama kreator/komunitas, sampai kebutuhan maskot resmi perusahaan.',
    badge: '✦ SKALA 1 S/D 500+ PCS',
  },
];

export const CREATIVE_MOODBOARD: CreativeMoodItem[] = [
  {
    id: 'original-design',
    emoji: '✏️',
    title: 'KARAKTER ORIGINAL (OC)',
    subtitle: 'Ilustrasi sendiri, karakter komik, atau coretan buku gambar',
    craftNotes:
      'Kami menerjemahkan garis gambar 2D menjadi bentuk 3D yang proporsional tanpa menghilangkan ciri khas gaya gambarmu.',
    fabricRecipe: 'Minky Halus + Aplikasi Felt Wol + Bordir Rayon Berlapis',
    image: '/images/sketch-before.png',
    rotation: '-rotate-2',
    tagPosition: 'top-3 left-3',
  },
  {
    id: 'anime-character',
    emoji: '🎌',
    title: 'KARAKTER ANIME & MANGA',
    subtitle: 'Boneka katun 15cm/20cm, siluet chibi, & rambut berlapis',
    craftNotes:
      'Detail gaya rambut bertumpuk, bordir mata bergradasi penuh ekspresi, serta pakaian mini yang dijahit detail.',
    fabricRecipe: 'Rabbit Minky 5mm + Benang Kilau Tinggi + Felt Rambut 3D',
    image: '/images/Chibi Blue-Haired Plush in Cozy Craft Setting.png',
    rotation: 'rotate-1',
    tagPosition: 'bottom-3 left-3',
  },
  {
    id: 'game-character',
    emoji: '🎮',
    title: 'KARAKTER GAME & RPG',
    subtitle: 'Avatar game, jubah bertudung, lencana mini, & aksesoris',
    craftNotes:
      'Dari jubah telinga beruang, lencana tengkorak bordir, hingga boneka monster imut yang siap menemani setup kamarmu.',
    fabricRecipe: 'Flanel Brushed + Beludru Hitam + Bordir Tengkorak Halus',
    image: '/images/Black Plush Alien Keychain with Skull Emblem.png',
    rotation: '-rotate-1',
    tagPosition: 'top-3 right-3',
  },
  {
    id: 'kpop-character',
    emoji: '🎤',
    title: 'INSPIRASI IDOL & K-POP',
    subtitle: 'Karakter boneka panggung idol, senyum manis, & charm tas',
    craftNotes:
      'Mengabadikan persona panggung idol dalam boneka mini menggemaskan dengan ekspresi hati ceria dan pipi merona hangat.',
    fabricRecipe: 'Kain Peach Skin + Minky Lembut + Bordir Senyum Hati',
    image: '/images/Adorable Cream Plush with Heart Smile.png',
    rotation: 'rotate-2',
    tagPosition: 'bottom-3 right-3',
  },
  {
    id: 'animal-plushie',
    emoji: '🐾',
    title: 'HEWAN KESAYANGAN & PETS',
    subtitle: 'Kucing peliharaan, rubah tidur, kelinci manis, & anabul',
    craftNotes:
      'Corak bulu yang disesuaikan dengan hewan kesayanganmu, siluet bulat menggemaskan yang sangat pas digenggam satu tangan.',
    fabricRecipe: 'Sherpa Berbulu Lembut + Isian Dakron Padat + Bordir Halus',
    image: '/images/Sleepy Orange Fox Plush in Hand.png',
    rotation: '-rotate-2',
    tagPosition: 'top-3 left-3',
  },
  {
    id: 'custom-mascot',
    emoji: '⭐',
    title: 'MASKOT BRAND & STUDIO',
    subtitle: 'Duta merek, ikon kafe, maskot komunitas, & souvenir studio',
    craftNotes:
      'Siluet kokoh, fotogenik dari berbagai sudut di atas dudukan kayu, dan konsisten diproduksi untuk souvenir eksklusif.',
    fabricRecipe: 'Velboa Premium Halus + Base Kayu Alami + Jahitan Rapi',
    image: '/images/Fluffy Bear on Wooden Base.png',
    rotation: 'rotate-1',
    tagPosition: 'bottom-3 left-3',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p-01',
    title: 'Boneka Karakter Pengelana Hutan',
    categoryLabel: 'Karakter Original · 22 cm',
    filterKey: 'BONEKA CUSTOM',
    secondaryFilter: 'KARAKTER',
    transformationTag: 'SKETSA PENSIL → BONEKA 3D',
    clientStory:
      'Karakter dari lembar buku sketsa pensil, diwujudkan menjadi plush handmade lengkap dengan jubah bertudung dan tas bintang.',
    materials: 'Fleece madu, minky cokelat, bordir katun, kancing logam antik',
    size: 'Tinggi 22 cm (posisi duduk)',
    image: '/images/plush-after.png',
    sketchPreview: '/images/sketch-before.png',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'p-02',
    title: 'Boneka Chibi Rambut Biru',
    categoryLabel: 'Anime & Manga Style · 20 cm',
    filterKey: 'ANIME',
    secondaryFilter: 'KARAKTER',
    transformationTag: 'DESAIN CHIBI → BONEKA STUDIO',
    clientStory:
      'Boneka custom karakter anime dengan rambut biru berlapis, ekspresi wajah ceria, dan pakaian kasual yang dijahit rapi.',
    materials: 'Minky lembut, felt rambut 3D, benang bordir rayon halus',
    size: 'Tinggi 20 cm (posisi duduk)',
    image: '/images/Chibi Blue-Haired Plush in Cozy Craft Setting.png',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p-03',
    title: 'Maskot Beruang Cokelat Duduk',
    categoryLabel: 'Maskot Kayu Studio · 24 cm',
    filterKey: 'MASKOT',
    secondaryFilter: 'ANIMAL',
    transformationTag: 'ILUSTRASI LOGO → MASKOT 3D',
    clientStory:
      'Maskot beruang berbulu lebat di atas dudukan kayu jati mini, dibuat sebagai pajangan meja estetik untuk studio kreatif.',
    materials: 'Kain bulu fleece tebal, telinga felt, tatakan kayu oak',
    size: 'Tinggi 24 cm',
    image: '/images/Fluffy Bear on Wooden Base.png',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'p-04',
    title: 'Boneka Rubah Oranye Tidur',
    categoryLabel: 'Hewan Kesayangan & Pets · Pas Digenggam',
    filterKey: 'ANIMAL',
    secondaryFilter: 'BONEKA CUSTOM',
    transformationTag: 'SKETSA HEWAN → BONEKA GENGGAM',
    clientStory:
      'Rubah kecil berbulu oranye hangat dengan mata terpejam tenang, dibuat pas dengan ukuran telapak tangan untuk teman santai.',
    materials: 'Faux fur oranye lembut, minky putih, bordir tidur',
    size: 'Panjang 16 cm (ukuran tangan)',
    image: '/images/Sleepy Orange Fox Plush in Hand.png',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p-05',
    title: 'Kelinci Putih Tersenyum Lembut',
    categoryLabel: 'Handmade Plushie · Sentuhan Hangat',
    filterKey: 'ANIMAL',
    secondaryFilter: 'BONEKA CUSTOM',
    transformationTag: 'KARAKTER KELINCI → PLUSH LEMBUT',
    clientStory:
      'Kelinci putih berbulu selembut awan dengan senyum hangat dan pipi merona, didesain untuk kenyamanan dekap harian.',
    materials: 'Bulu sherpa super lembut, dakron silikon empuk',
    size: 'Tinggi 22 cm',
    image: '/images/Fluffy Smiling Bunny Plush Held by Hand.png',
    aspect: 'aspect-[1/1]',
  },
  {
    id: 'p-06',
    title: 'Koleksi 5 Gantungan Kunci Plushie',
    categoryLabel: 'Batch Komunitas · Seri Aksesoris',
    filterKey: 'MASKOT',
    secondaryFilter: 'BONEKA CUSTOM',
    transformationTag: 'SERI MASKOT → 5 GANTUNGAN KUNCI',
    clientStory:
      'Satu set 5 gantungan kunci plushie berbulu halus warna-warni yang dibuat untuk kenang-kenangan teman satu tim.',
    materials: 'Fleece bulu halus, ring logam pengait, bordir mata',
    size: 'Ukuran 12 cm per pcs',
    image: '/images/Five Fuzzy Plush Keychains on Wood.png',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p-07',
    title: 'Karakter Alien Hitam Lencana Tengkorak',
    categoryLabel: 'Gantungan Kunci Karakter Dark-Cute',
    filterKey: 'KARAKTER',
    secondaryFilter: 'MASKOT',
    transformationTag: 'DOODLE PRIBADI → GANTUNGAN TAS',
    clientStory:
      'Karakter alien bertanduk dengan mata silang dan bordir lambang tengkorak, dibuat dengan bahan beludru hitam pekat.',
    materials: 'Kain beludru velour hitam, bordir satin putih, ring gantungan',
    size: 'Tinggi 14 cm',
    image: '/images/Black Plush Alien Keychain with Skull Emblem.png',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'p-08',
    title: 'Boneka Krem Senyum Hati',
    categoryLabel: 'Karakter Idol / OC · Aksen Hati',
    filterKey: 'KARAKTER',
    secondaryFilter: 'BONEKA CUSTOM',
    transformationTag: 'EMOTICON FAVORIT → BONEKA REAL',
    clientStory:
      'Boneka katun krem berbulu lembut dengan detail bordir senyuman berbentuk hati merah yang memancarkan energi ceria.',
    materials: 'Kain minky krem, bordir hati katun merah, isian microfiber',
    size: 'Tinggi 18 cm',
    image: '/images/Adorable Cream Plush with Heart Smile.png',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p-09',
    title: 'Kucing Putih Gantungan Hati Merah',
    categoryLabel: 'Gantungan Kunci Anabul · Kado Kasih',
    filterKey: 'ANIMAL',
    secondaryFilter: 'KARAKTER',
    transformationTag: 'FOTO KUCING → CHARM HATI',
    clientStory:
      'Gantungan kunci kucing putih memegang hati merah berkilau, cocok dijadikan kado anniversary atau tanda kasih sayang.',
    materials: 'Bulu putih halus, hati satin merah, rantai gantungan',
    size: 'Tinggi 12 cm',
    image: '/images/Fluffy Cat Heart Keychain Close-Up.png',
    aspect: 'aspect-[1/1]',
  },
  {
    id: 'p-10',
    title: 'Kelinci Pink Plush di Atas Marmer',
    categoryLabel: 'Aksesoris Tas Pastel · 14 cm',
    filterKey: 'ANIMAL',
    secondaryFilter: 'KARAKTER',
    transformationTag: 'WARNA PASTEL → GANTUNGAN TAS',
    clientStory:
      'Kelinci bernuansa pink pastel lembut dengan telinga panjang dan aksen pita, dibuat manis untuk menghiasi tas harian.',
    materials: 'Kain bulu pink pastel, telinga flanel, gantungan emas vintage',
    size: 'Tinggi 14 cm',
    image: '/images/Pink Plush Bunny Keychain on Marble.png',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'p-11',
    title: 'Gantungan Babi Pink Imut Berbulu',
    categoryLabel: 'Karakter Lucu · Gantungan Tas',
    filterKey: 'ANIMAL',
    secondaryFilter: 'MASKOT',
    transformationTag: 'MASKOT KELUARGA → GANTUNGAN PLUSH',
    clientStory:
      'Karakter babi pink dengan hidung bulat dan telinga lucu, bertekstur fluffy lembut yang bikin gemas saat disentuh.',
    materials: 'Sherpa bulu halus pink, hidung flanel, ring logam',
    size: 'Tinggi 13 cm',
    image: '/images/Fluffy Pink Pig Plush Keychain.png',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p-12',
    title: 'Kumpulan Boneka Ekspresi Unik (Small Batch)',
    categoryLabel: 'Batch Komunitas · Ekspresi Beragam',
    filterKey: 'KARAKTER',
    secondaryFilter: 'MASKOT',
    transformationTag: 'SERI EKSPRESI → BATCH PRODUCTION',
    clientStory:
      'Koleksi batch boneka dengan berbagai ekspresi unik (grumpy, heran, ceria) yang diproduksi untuk komunitas kreator.',
    materials: 'Velboa berbagai warna, bordir mata variatif, label woven',
    size: 'Set berbagai ukuran (15–20 cm)',
    image: '/images/Grumpy Plush Toy Pile.png',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p-13',
    title: 'Bantal Duduk Kucing Belang',
    categoryLabel: 'Bantal Die-Cut Kustom Anabul',
    filterKey: 'ANIMAL',
    secondaryFilter: 'BONEKA CUSTOM',
    transformationTag: 'FOTO ANABUL → BANTAL EMPUK',
    clientStory:
      'Bantal karakter die-cut terinspirasi dari foto kucing calico yang sedang tidur meringkuk di bawah hangat sinar matahari.',
    materials: 'Kain sherpa krem, benang wol karamel punch-needle, silikon empuk',
    size: 'Lebar 42 cm',
    image: '/images/cat-pillow.png',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p-14',
    title: 'Boneka Putih Tersenyum di Alas Kayu',
    categoryLabel: 'Maskot Meja Minimalis',
    filterKey: 'MASKOT',
    secondaryFilter: 'KARAKTER',
    transformationTag: 'DESAIN MINIMALIS → MASKOT MEJA',
    clientStory:
      'Karakter putih bersahaja dengan senyum tipis manis di atas base kayu, cocok untuk mempercantik meja kerja dan rak buku.',
    materials: 'Minky putih salju, alas kayu solid, jahitan manual',
    size: 'Tinggi 20 cm',
    image: '/images/Smiling White Plush on Wooden Base.png',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p-15',
    title: 'Set Tas Selempang & Pouch Serbaguna',
    categoryLabel: 'Aksesoris Plush Wearable',
    filterKey: 'MASKOT',
    secondaryFilter: 'ANIMAL',
    transformationTag: 'ILUSTRASI MASKOT → TAS HARIAN',
    clientStory:
      'Tas selempang karakter berbulu halus dan dompet koin mungil dengan bordir ekspresi ceria untuk menemani bepergian.',
    materials: 'Sherpa keriting, furing twill katun, resleting logam YKK',
    size: 'Tas 26 cm · Pouch 13 cm',
    image: '/images/cat-bags-pouches.png',
    aspect: 'aspect-[1/1]',
  },
];

export const QUANTITY_TIERS: QuantityTier[] = [
  {
    number: '01',
    title: 'CUMA SATU (SATUAN)',
    subtitle: 'Satu boneka istimewa yang dibuat khusus hanya untuk kamu.',
    formValue: 'Cuma 1 🧸',
    idealFor: [
      'Karakter original (OC) atau artwork buatanmu sendiri',
      'Kado ulang tahun, wisuda, atau anniversary yang tak terlupakan',
      'Mengenang peliharaan kesayangan dalam bentuk fisik yang bisa dipeluk',
    ],
    badge: '✦ TANPA MINIMUM ORDER · 1 PCS',
    visualCount: 1,
    image: '/images/Fluffy Smiling Bunny Plush Held by Hand.png',
  },
  {
    number: '02',
    title: 'BATCH KECIL (KOMUNITAS)',
    subtitle: 'Cocok untuk proyek kreator, lingkar teman, atau koleksi terbatas.',
    formValue: '2–10',
    idealFor: [
      'Merchandise eksklusif ilustrator & kreator (2–30 pcs)',
      'Kenang-kenangan geng bermain, party D&D, atau klub fandom',
      'Edisi bernomor khusus untuk kolektor karya senimu',
    ],
    badge: '✦ BATCH KREATOR & KOMUNITAS',
    visualCount: 4,
    image: '/images/Five Fuzzy Plush Keychains on Wood.png',
  },
  {
    number: '03',
    title: 'JUMLAH BESAR (BRAND/EVENT)',
    subtitle: 'Untuk maskot bisnis, event peluncuran, kafe, dan promosi brand.',
    formValue: 'Lebih dari 50',
    idealFor: [
      'Maskot resmi perusahaan, startup, kafe, atau studio (50+ pcs)',
      'Paket hampers PR media, souvenir exhibition, & festival kreatif',
      'Pilihan woven label brand dan kemasan kustom terdedikasi',
    ],
    badge: '✦ PRODUKSI BRAND & KORPORAT',
    visualCount: 9,
    image: '/images/Grumpy Plush Toy Pile.png',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Bisa pesan cuma satu boneka?',
    answer:
      'Bisa banget! Kami menerima pesanan satuan tanpa minimum order. Mau bikin satu boneka spesial untuk diri sendiri atau hadiah personal untuk orang terdekat, semuanya kami kerjakan dengan perhatian penuh dari studio.',
    atelierTip: 'Pesan satuan? Tentu bisa! 🤎',
  },
  {
    question: 'Bisa bikin berdasarkan karakter atau desain sendiri?',
    answer:
      'Bisa. Kamu tinggal kirim gambar, sketch, artwork, atau referensi karakter yang kamu punya. Kalau baru punya coretan kasar di buku tulis atau foto dari depan saja, tim kami akan bantu mengembangkannya jadi konsep boneka 3D.',
    atelierTip: 'Sketsa kasar pensil & gambar konsep sangat kami sambut.',
  },
  {
    question: 'Detail outfit dan ekspresinya bisa disesuaikan?',
    answer:
      'Bisa disesuaikan dengan referensi dan tingkat kompleksitas desain. Kamu bebas memilih bentuk mata (senyum, berbinar bintang, mengantuk), gaya rambut bertingkat, serta baju mini yang dijahit menyatu atau bisa dilepas-pasang.',
    atelierTip: 'Karakter, outfit, warna, hingga ekspresi bisa disesuaikan.',
  },
  {
    question: 'Menerima pesanan dalam jumlah banyak?',
    answer:
      'Ya. Kami menerima pesanan satuan, small batch, sampai kebutuhan dalam jumlah besar. Mulai dari 1 boneka istimewa, 15 pcs untuk booth seniman, hingga 100+ maskot resmi perusahaan dengan standar kualitas handmade yang terjaga.',
    atelierTip: 'Tersedia pilihan 1 pcs, 2–10 pcs, 11–50 pcs, hingga 50+ pcs.',
  },
  {
    question: 'Bisa bikin karakter anime atau karakter game favorit?',
    answer:
      'Tentu bisa didiskusikan dulu sebelum mulai produksi. Kirimkan saja referensi karakter, perkiraan ukuran yang diinginkan, dan detail bajunya lewat form kustom, nanti kami bantu rekomendasikan bahan kain serta teknik jahit terbaiknya.',
    atelierTip: 'Tersedia gaya boneka katun chibi, flannel doll, hingga bantal die-cut.',
  },
  {
    question: 'Gimana cara mulai pesan?',
    answer:
      'Gampang banget. Ceritain dulu ide kamu lewat form Custom Order di bawah ini, lalu kami akan pandu langkah selanjutnya — mulai dari diskusi kecocokan bahan, estimasi waktu pengerjaan, hingga penawaran harga lewat WhatsApp.',
    atelierTip: 'Tanpa checkout otomatis — setiap karya diawali dengan obrolan yang ramah.',
  },
];
