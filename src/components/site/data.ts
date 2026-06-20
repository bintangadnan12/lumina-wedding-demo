// ============================================================
// BRAND CONFIG — Lumina Wedding (Demo Template — Tema Terang)
// ============================================================
export const BRAND = {
  name: "Lumina Wedding",
  nameShort: "Lumina",
  nameDisplay: ["Lumina", "Wedding"] as const,
  niche: "Premium Wedding Organizer",
  tagline: "Momen Indah, Abadi Selamanya",
  heroDesc: "Lumina Wedding menghadirkan pernikahan impian Anda dengan sentuhan elegan dan eksekusi sempurna — dari konsep, dekorasi, hingga hari H yang tak terlupakan.",
  aboutDesc: "Lumina Wedding adalah wedding organizer premium yang percaya setiap pasangan berhak mendapatkan hari pernikahan yang sempurna. Kami hadir dengan tim berpengalaman, konsep yang ditailored khusus, dan dedikasi penuh dari awal perencanaan hingga detik terakhir hari istimewa Anda.",
  city: "Indonesia",
  address: "Melayani seluruh kota di Indonesia",
  year: "2019",
  heroImg: "/img/wedding1.jpg",
  metaTitle: "Lumina Wedding — Premium Wedding Organizer Indonesia",
  metaDesc: "Wedding organizer premium dengan layanan perencanaan, dekorasi, dan koordinasi pernikahan mewah. Wujudkan momen terindah bersama Lumina Wedding.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6289677374440";
export const PHONE_DISPLAY = "0896-7737-4440";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Wedding Organizer",
    desc: "Koordinasi pernikahan menyeluruh — dari perencanaan awal, vendor, rundown, hingga hari H tanpa hambatan.",
    icon: "Sparkles",
  },
  {
    title: "Konsep & Dekorasi",
    desc: "Tim desainer kami menciptakan dekorasi eksklusif yang sesuai dengan visi dan kepribadian Anda.",
    icon: "Star",
  },
  {
    title: "Paket All-Inclusive",
    desc: "Pilihan paket lengkap yang mencakup semua kebutuhan pernikahan Anda dalam satu harga transparan.",
    icon: "Gift",
  },
  {
    title: "Perencanaan Detail",
    desc: "Perencanaan matang 6–12 bulan sebelum hari H — rundown, vendor, konsep, hingga detail terkecil.",
    icon: "ClipboardList",
  },
  {
    title: "Koordinasi Vendor",
    desc: "Jaringan vendor terpercaya — katering, fotografer, videografer, band, dan dekorasi premium.",
    icon: "Heart",
  },
  {
    title: "Konsultasi Gratis",
    desc: "Mulai perjalanan Anda dengan konsultasi gratis bersama wedding planner berpengalaman kami.",
    icon: "MessageCircle",
  },
];

export const GALLERY = [
  { src: "/img/wedding1.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding2.jpg", cat: "Dekorasi", h: "short" },
  { src: "/img/wedding3.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding4.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding5.jpg", cat: "Event", h: "tall" },
  { src: "/img/wedding6.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding7.jpg", cat: "Dokumentasi", h: "short" },
  { src: "/img/wedding8.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding9.jpg", cat: "Dekorasi", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Wedding", "Dekorasi", "Event", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Paket Essentials",
    tag: "100 – 200 tamu",
    price: 6_500_000,
    features: [
      "Koordinator & 3 tim hari H",
      "Briefing & technical meeting",
      "Susunan acara & rundown",
      "Pendamping pengantin",
      "Konsultasi gratis 2x",
    ],
  },
  {
    name: "Paket Elegance",
    tag: "250 – 350 tamu",
    price: 10_500_000,
    popular: true,
    features: [
      "Koordinator senior & 5 tim hari H",
      "Briefing, TM & gladi resik",
      "Rundown, cue card & timeline",
      "Pendamping kedua pengantin",
      "Koordinasi seluruh vendor",
      "Konsultasi tak terbatas",
    ],
  },
  {
    name: "Paket Prestige",
    tag: "400 – 500 tamu",
    price: 15_000_000,
    features: [
      "Koordinator senior & 8 tim hari H",
      "Briefing, TM & 2x gladi resik",
      "Custom rundown & timeline detail",
      "Pendamping & asisten keluarga",
      "Full vendor coordination",
      "Laporan & evaluasi pasca acara",
    ],
  },
  {
    name: "Paket Lumina Signature",
    tag: "500+ tamu / Grand Event",
    price: 22_000_000,
    features: [
      "Event director & 12+ tim",
      "Unlimited meeting & planning",
      "Custom premium concept",
      "VIP escort keluarga inti",
      "Koordinasi vendor premium",
      "Konsep & supervisi penuh hari H",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dekorasi Ivory", tag: "Simpel Elegan", price: 12_000_000, features: ["Pelaminan utama", "Backdrop akad", "Standing flower", "Photobooth elegan", "Karpet & ornamen"] },
  { name: "Dekorasi Champagne", tag: "Contemporary", price: 18_000_000, popular: true, features: ["Pelaminan premium", "Backdrop akad custom", "Fresh flower arrangement", "Photobooth instagramable", "Dekor meja tamu"] },
  { name: "Dekorasi Lumina Gold", tag: "Full Floral", price: 26_000_000, features: ["Pelaminan luxury", "Full fresh flower", "Aisle & entrance deco", "Photobooth premium", "Styling area lengkap"] },
  { name: "Dekorasi Grand Ballroom", tag: "Big Event", price: 42_000_000, features: ["Konsep ballroom mewah", "Fresh flower & lighting eksklusif", "Stage & backdrop grand", "Photobooth signature", "Full area styling"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Silver", tag: "Akad only", price: 4_000_000, features: ["1 fotografer", "1 videografer", "200 foto edit", "Highlight video 1 menit", "Soft file lengkap"] },
  { name: "Paket Gold", tag: "Akad + Resepsi", price: 6_500_000, popular: true, features: ["2 fotografer", "1 videografer", "400 foto edit", "Highlight video 2 menit", "Album cetak premium"] },
  { name: "Paket Platinum", tag: "Full Day", price: 9_000_000, features: ["3 fotografer", "2 videografer", "Cinematic video 3 menit", "Same day edit", "Album & USB box"] },
  { name: "Paket Sinematik", tag: "Pre & Full Day", price: 12_000_000, features: ["Tim sinematik lengkap", "Pre-wedding session", "Cinematic video 5 menit", "Foto unlimited", "Album luxury box"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Gratis", desc: "Ceritakan impian Anda. Kami dengar, pahami, dan jadikan visi.", icon: "MessageCircle" },
  { n: "02", title: "Perencanaan Detail", desc: "Kami rancang konsep eksklusif, rundown, dan koordinasi vendor terbaik.", icon: "ClipboardList" },
  { n: "03", title: "Eksekusi Sempurna", desc: "Hari H sepenuhnya di tangan kami. Anda hadir, menikmati, dan bersinar.", icon: "HeartHandshake" },
  { n: "04", title: "Kenangan Abadi", desc: "Dokumentasi indah sebagai warisan momen paling bahagia dalam hidup Anda.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote: "Lumina Wedding melebihi semua ekspektasi kami. Dekorasinya luar biasa indah, tim-nya sangat profesional, dan hari H berjalan sempurna. Ini adalah pengalaman pernikahan yang benar-benar kami impikan!",
    name: "Farah & Andi",
    date: "Mei 2026",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote: "Dari pertemuan pertama, Lumina langsung paham visi kami. Prosesnya terasa sangat personal, detail kecil diperhatikan, dan hasilnya? Semua tamu memuji betapa cantiknya pernikahan kami.",
    name: "Nadia & Bagas",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "Tim Lumina Wedding benar-benar berdedikasi. Vendor pilihan mereka juga top semua. Sangat direkomendasikan untuk yang ingin pernikahan premium dan berkesan!",
    name: "Sinta & Dimas",
    date: "Maret 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "7 Tren Wedding 2026 yang Wajib Anda Tahu Sebelum Menikah",
    cat: "Inspirasi",
    date: "10 Mei 2026",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "Checklist Lengkap Persiapan Pernikahan 12 Bulan Sebelum Hari H",
    cat: "Panduan",
    date: "2 April 2026",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    title: "Cara Memilih Wedding Organizer Premium yang Tepat untuk Anda",
    cat: "Tips",
    date: "15 Maret 2026",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
