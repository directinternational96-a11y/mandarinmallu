import type { Metadata, Viewport } from "next";
import { Noto_Sans_Malayalam, Plus_Jakarta_Sans } from "next/font/google";
import { SITE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
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
  icons: { icon: "/assets/logo-mark.svg" },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#163b7a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${malayalam.variable}`}>
      <body>{children}</body>
    </html>
  );
}
