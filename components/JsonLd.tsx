import { FAQ } from "@/lib/content";
import { SITE, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

/** Structured data for rich results: organisation, website and FAQ. */
export default function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: SITE.name,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-mark.svg`,
      description: SITE_DESCRIPTION,
      email: SITE.email,
      telephone: SITE.phone.replace(/\s/g, ""),
      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: ["IN", "CN"],
      sameAs: [
        SITE.social.instagram,
        SITE.social.facebook,
        SITE.social.youtube,
        "https://whatsapp.com/channel/0029VbEGBKUC1FuHMsf0sB3p",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
