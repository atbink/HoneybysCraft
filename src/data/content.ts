export interface PlushCharacter {
  id: string;
  name: string;
  category: string;
  personality: string;
  shortDesc: string;
  image: string;
  size: string;
  materials: string[];
  features: string[];
}

export interface SimpleStep {
  number: string;
  title: string;
  description: string;
  icon: 'concept' | 'customize' | 'craft';
}

export interface WhyPoint {
  title: string;
  description: string;
  badge: string;
}

export interface CraftDetail {
  id: string;
  title: string;
  caption: string;
  image: string;
  aspect: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  highlight: string;
}

// 1. CHARACTER COLLECTION (Curated 6 lovable handmade plush characters)
export const PLUSH_CHARACTERS: PlushCharacter[] = [
  {
    id: 'milo-royal-chibi',
    name: 'Milo the Royal Chibi',
    category: 'Chibi & Karakter',
    personality: 'Brave, noble, & cozy',
    shortDesc: 'Karakter chibi berambut biru dengan mantel beludru navy dan vest emas elegan.',
    image: '/images/Chibi Blue-Haired Plush in Cozy Craft Setting.png',
    size: '22 cm',
    materials: ['Super-soft Minky Hair', 'Flannel Coat', 'Rayon Thread Embroidery'],
    features: ['Mantel & kerah bisa dilepas', 'Detail bordir mata bintang', 'Dakron grade A empuk'],
  },
  {
    id: 'kiko-cloud-bunny',
    name: 'Kiko the Cloud Bunny',
    category: 'Animal Plush',
    personality: 'Gentle, comforting, & warm',
    shortDesc: 'Kelinci putih selembut awan dengan pipi merona dan senyuman yang bikin rileks.',
    image: '/images/Fluffy Smiling Bunny Plush Held by Hand.png',
    size: '20 cm',
    materials: ['Cloud-soft Sherpa Minky', 'Blush Tint Pastel', 'Hypoallergenic Stuffing'],
    features: ['Telinga lentur empuk', 'Nyaman digenggam satu tangan', 'Cocok untuk kado sahabat'],
  },
  {
    id: 'boba-atelier-bear',
    name: 'Boba the Atelier Bear',
    category: 'Mascot & Original',
    personality: 'Playful, loyal, & sweet',
    shortDesc: 'Maskot beruang madu ikonik studio dengan postur tegap yang siap didekap kapan saja.',
    image: '/images/Fluffy Bear on Wooden Base.png',
    size: '24 cm',
    materials: ['Caramel Brown Velboa', 'Embroidered Nose & Eyes', 'Stitched Felt Paw Pads'],
    features: ['Bisa duduk mandiri di meja kerja', 'Pola proporsional seimbang', 'Tekstur bulu tidak rontok'],
  },
  {
    id: 'yuki-sleepy-fox',
    name: 'Yuki the Sleepy Fox',
    category: 'Animal Plush',
    personality: 'Dreamy, quiet, & faithful',
    shortDesc: 'Rubah oranye terlelap dengan telinga runcing empuk, teman setia di samping bantal.',
    image: '/images/Sleepy Orange Fox Plush in Hand.png',
    size: '18 cm',
    materials: ['Warm Amber Minky', 'Cream Flannel Belly', 'Felt Ear Linings'],
    features: ['Bordir mata terpejam tenang', 'Ukuran travel-friendly', 'Sangat lembut di kulit'],
  },
  {
    id: 'chibi-heart-smile',
    name: 'Chibi Heart Smile',
    category: 'Custom By Request',
    personality: 'Joyful, expressive, & sweet',
    shortDesc: 'Boneka karakter kustom pesanan klien dengan rambut hitam rapi, mata bulat ekspresif, dan bordir bibir hati.',
    image: '/images/Adorable Cream Plush with Heart Smile.png',
    size: '15 cm',
    materials: ['Super-soft Skin-tone Velboa', 'Black Styled Felt Hair', 'Precision Thread Embroidery'],
    features: ['Bordir bibir bentuk hati unik', 'Proporsi tubuh chibi humanoid', 'Bisa ditambah outfit kustom'],
  },
  {
    id: 'pippa-rosy-piglet',
    name: 'Pippa the Rosy Piglet',
    category: 'Keychain & Mini Plush',
    personality: 'Bubbly, energetic, & cute',
    shortDesc: 'Boneka babi mungil warna pink pastel dengan telinga melambai dan hidung kancing flanel.',
    image: '/images/Fluffy Pink Pig Plush Keychain.png',
    size: '12 cm',
    materials: ['Pastel Pink Minky', 'Wool Felt Snout', 'Reinforced Metal Clasp'],
    features: ['Gantungan kunci kokoh', 'Mudah dipasang ke ransel/tote bag', 'Ringan dan kenyal'],
  },
];

// 2. HOW IT WORKS (Strictly 3 Simple Steps)
export const SIMPLE_STEPS: SimpleStep[] = [
  {
    number: '01',
    title: 'Pilih Karakter atau Konsep',
    description: 'Pilih karakter dari koleksi kami atau kirimkan sketsa, ilustrasi OC, foto, dan ide desain unikmu.',
    icon: 'concept',
  },
  {
    number: '02',
    title: 'Sesuaikan Detailnya',
    description: 'Diskusikan ekspresi wajah, ukuran, pilihan kain lembut, hingga outfit dan aksesoris khusus.',
    icon: 'customize',
  },
  {
    number: '03',
    title: 'Boneka Handmademu Tercipta',
    description: 'Artisan kami memotong pola, menyulam bordir, dan menjahitnya dengan teliti sampai siap dipeluk erat.',
    icon: 'craft',
  },
];

// 3. WHY HONEY BY S CRAFT (Consolidated 4 Core Points)
export const WHY_US_POINTS: WhyPoint[] = [
  {
    badge: '100% ARTISAN',
    title: 'Handmade with Care',
    description: 'Setiap helai kain dipotong dan dijahit secara manual oleh tangan terampil, bukan hasil cetakan mesin pabrik.',
  },
  {
    badge: 'KARAKTER BERNYAWA',
    title: 'Designed with Personality',
    description: 'Bordir mata teliti, rona pipi, dan proporsi dirancang agar karaktermu memiliki ekspresi dan jiwa yang hidup.',
  },
  {
    badge: 'BEBAS REQUEST',
    title: 'Customizable Details',
    description: 'Dari outfit mini yang bisa dilepas-pasang, aksesoris bordir, hingga pilihan kain minky dan flanel terbaik.',
  },
  {
    badge: 'TAHAN LAMA',
    title: 'Made to be Kept',
    description: 'Dibuat untuk awet disimpan dan didekap bertahun-tahun sebagai memori berharga, tanpa batas minimum order.',
  },
];

// 4. CRAFT DETAILS GALLERY (Compact 4-image visual showcase)
export const CRAFT_DETAILS: CraftDetail[] = [
  {
    id: 'detail-stitching',
    title: 'Hand-Stitched Embroidery',
    caption: 'Bordir manual helai demi helai untuk ekspresi wajah yang presisi dan hidup.',
    image: '/images/atelier-process.png',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'detail-flannel',
    title: 'Layered Felt & Tailoring',
    caption: 'Kombinasi pola wol flanel bertekstur dengan potongan tepi yang rapi.',
    image: '/images/cat-flannel-doll.png',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'detail-accessories',
    title: 'Custom Mini Accessories',
    caption: 'Aksesoris pelengkap seperti tas karakter dan pouch yang dijahit fungsional.',
    image: '/images/cat-bags-pouches.png',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'detail-huggable',
    title: 'Soft Minky Warmth',
    caption: 'Kain minky premium dengan isian dakron lembut, nyaman digenggam dan dipeluk.',
    image: '/images/hero-plush-centered.png',
    aspect: 'aspect-[4/3]',
  },
];

// 5. TESTIMONIALS (Exactly 3 Authentic Reviews)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Anya Radistya',
    role: 'Ilustrator Digital & Kreator OC',
    quote:
      'Nangis terharu pas paketnya dibuka! Karakter OC yang selama 3 tahun cuma ada di layar iPad akhirnya bisa aku peluk beneran. Jahitan dan bordirnya luar biasa rapi.',
    rating: 5,
    highlight: 'Karakter OC jadi nyata',
  },
  {
    id: 'testi-2',
    name: 'Dimas Wicaksono',
    role: 'Hadiah Anniversary Personal',
    quote:
      'Pesan boneka custom maskot buat kado anniversary pacar. Hasilnya mirip banget sama sketsaku dan bahannya super empuk. Komunikasi via WA sangat ramah dan sabar.',
    rating: 5,
    highlight: 'Kado paling berkesan',
  },
  {
    id: 'testi-3',
    name: 'Clarissa Natalia',
    role: 'K-Pop Fan & Merch Collector',
    quote:
      'Detail outfit mini-nya niat banget, mantelnya bisa dilepas-pasang! Rasanya jauh lebih istimewa daripada merchandise pabrikan massal. Pasti bakal repeat order.',
    rating: 5,
    highlight: 'Detail outfit presisi',
  },
];
