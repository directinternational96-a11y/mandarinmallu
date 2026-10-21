"use client";

import { initials, type Partner } from "@/lib/programs";

export default function Partners({ partners }: { partners: Partner[] }) {
  // Duplicate the list so the CSS marquee loops seamlessly.
  const items = [...partners, ...partners];

  return (
    <section className="section" id="partners">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Our Partner Universities</h2>
          <p>Explore seven universities with the most programs in our current catalogue.</p>
        </div>
      </div>
      <div
        className="marquee partner-marquee"
        aria-label="Featured partner universities scrolling horizontally"
      >
        <div className="marquee-track partner-logo-track">
          {items.map((uni, i) => (
            <div
              className="partner-logo-item"
              title={`${uni.name} — ${uni.count} programs`}
              key={`${uni.id}-${i}`}
            >
              <div className="partner-logo-frame">
                {uni.logo ? (
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.add("visible");
                    }}
                  />
                ) : null}
                <span className={`partner-logo-fallback ${uni.logo ? "" : "visible"}`}>
                  {initials(uni.name)}
                </span>
              </div>
              <strong>{uni.name}</strong>
              <small>{uni.count} programs</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
