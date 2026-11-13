export const WA_PHONE = '6285877766376';
export const WA_DISPLAY_PHONE = '0858-7776-6376';

/**
 * Creates a formatted WhatsApp deep-link with URL-encoded auto text
 */
export function getWhatsAppUrl(message: string): string {
  const cleanPhone = WA_PHONE.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Pre-tailored WhatsApp messages for each interaction touchpoint
 */
export const WA_TEMPLATES = {
  general: () =>
    `Halo Honeybys.craft! 🧸 Mau tanya-tanya seputar layanan pembuatan boneka custom handmade dong.`,

  hero: () =>
    `Halo Honeybys.craft! 🧸 Saya punya karakter / ide desain sendiri dan ingin konsultasi untuk diwujudkan jadi boneka handmade. Boleh dibantu langkah awalnya?`,

  category: (categoryName: string) =>
    `Halo Honeybys.craft! 🧸 Saya tertarik ingin pesan kustom untuk kategori "${categoryName}". Boleh info pricelist dan estimasi pengerjaannya?`,

  moodboard: (styleTitle: string) =>
    `Halo Honeybys.craft! 🧸 Saya tertarik ingin membuat boneka dengan konsep gaya "${styleTitle}". Mau diskusi kecocokan bahan dan desainnya dong.`,

  portfolio: (itemTitle: string) =>
    `Halo Honeybys.craft! 🧸 Saya suka banget dengan karya "${itemTitle}" di galeri portofolio Honeybys. Mau konsultasi untuk bikin boneka custom yang mirip seperti itu ya.`,

  quantity: (tierTitle: string) =>
    `Halo Honeybys.craft! 🧸 Saya ingin konsultasi pemesanan boneka custom untuk skala: "${tierTitle}". Apakah slot pengerjaan masih tersedia?`,

  customOrder: (data: {
    name: string;
    product: string;
    quantity: string;
    idea: string;
    instagram?: string;
  }) => {
    let msg = `Halo Honeybys.craft! 🧸🤎\n\nSaya ingin mengajukan ide boneka custom:\n`;
    msg += `• Nama: ${data.name}\n`;
    msg += `• Tipe Karya: ${data.product}\n`;
    msg += `• Jumlah: ${data.quantity}\n`;
    if (data.idea) {
      msg += `• Deskripsi Ide: ${data.idea}\n`;
    }
    if (data.instagram) {
      msg += `• Instagram: ${data.instagram}\n`;
    }
    msg += `\nMohon dibantu review konsep desain, rekomendasi bahan kain, dan estimasi biayanya ya. Terima kasih! ✨`;
    return msg;
  },

  faq: () =>
    `Halo Honeybys.craft! 🧸 Saya membaca FAQ di website dan ingin menanyakan detail seputar pesanan custom boneka saya.`,

  finalCta: () =>
    `Halo Honeybys.craft! 🧸 Saya punya ide karakter di kepala dan ingin wujudkan jadi boneka yang bisa dipeluk. Bagaimana langkah pemesanannya ya?`,
};
