export const SITE = {
  name: "MANDARINMALLU",
  phone: "+91 755-9930046",
  whatsapp: "8613123560046",
  email: "directinternational96@gmail.com",
  address: "Kerala, India",
  social: {
    instagram: "https://www.instagram.com/mandarin.mallu/?__pwa=1",
    facebook: "https://www.facebook.com/share/18bXd27Ju9/?mibextid=wwXIfr",
    youtube: "https://youtube.com/@mandarinmallu?si=5lvHoR0uI5-YK_UJ",
    linkedin: "#",
  },
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mandarin-mallu.vercel.app";

export const SITE_TITLE = "MANDARINMALLU — Study in China";

export const SITE_DESCRIPTION =
  "MANDARINMALLU — Study in China for Indian Students. Programs, scholarships, admission, visa and travel support.";

/** WhatsApp deep link with a prefilled message. */
export const wa = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
