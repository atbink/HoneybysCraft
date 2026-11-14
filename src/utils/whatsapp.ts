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
    `Halo Honey by S Craft! 🧸 Mau tanya-tanya seputar koleksi boneka handmade dan pemesanan kustom dong.`,

  hero: () =>
    `Halo Honey by S Craft! 🧸 Saya tertarik ingin membuat boneka plush kustom dari desain / karakter saya sendiri. Boleh dipandu langkah awalnya?`,

  character: (characterName: string) =>
    `Halo Honey by S Craft! 🧸 Saya suka banget dengan karakter "${characterName}". Boleh info ketersediaan atau kustomisasi untuk karakter ini?`,

  customPlush: () =>
    `Halo Honey by S Craft! 🧸 Saya punya ide/sketsa karakter sendiri dan ingin dibuatkan boneka plush handmade. Boleh konsultasi desain dan bahannya?`,

  finalCta: () =>
    `Halo Honey by S Craft! 🧸 Saya ingin mulai memesan boneka handmade custom. Bagaimana langkah awalnya ya? Terima kasih!`,
};
