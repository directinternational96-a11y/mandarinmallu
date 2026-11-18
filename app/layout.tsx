import type { Metadata, Viewport } from "next";
import { Noto_Sans_Malayalam, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SITE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const malayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam", "latin"],
  weight: ["400", "600"],
  variable: "--font-malayalam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "study in China",
    "study in China for Indian students",
    "Chinese university admission",
    "China scholarships",
    "MBBS in China",
    "China student visa",
    "Malayali students China",
    "MANDARINMALLU",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/assets/logo-mark.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/assets/hero.jpg",
        width: 1672,
        height: 941,
        alt: "MANDARINMALLU — Study in China",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/hero.jpg"],
  },
  // Site is temporarily down (Coming Soon) — keep it out of search results.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#163b7a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${malayalam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
