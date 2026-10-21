import { BadgeCheck, ShieldCheck, ThumbsUp } from "lucide-react";
import { VALUES } from "@/lib/content";

const ICONS = [BadgeCheck, ThumbsUp, ShieldCheck];

export default function Trust() {
  return (
    <section className="section" id="trust">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Why Do Students Trust MANDARINMALLU?</h2>
          <p>
            Since our founding, we’ve embedded our values deep within our system to build strong,
            trust-based relationships with every student.
          </p>
        </div>
        <div className="trust-grid">
          {VALUES.map((value, i) => {
            const Icon = ICONS[i];
            return (
              <div className={`trust-card reveal ${i === 1 ? "featured" : ""}`} key={value.title}>
                <span className="trust-icon">
                  <Icon size={26} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
