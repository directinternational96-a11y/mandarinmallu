import {
  ArrowRight,
  FileCheck,
  FileText,
  GraduationCap,
  Headphones,
  MessageCircle,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, type ServiceIcon } from "@/lib/content";
import { wa } from "@/lib/site";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  headphones: Headphones,
  file: FileText,
  cap: GraduationCap,
  filecheck: FileCheck,
  plane: Plane,
  message: MessageCircle,
};

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Our Services</h2>
          <p>
            From shortlisting to accommodation, MANDARINMALLU has your study-abroad needs covered.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                className="service-card reveal"
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
                key={service.title}
              >
                <span className="service-icon">
                  <Icon size={30} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a
                  className="more"
                  href={wa(`Hi MANDARINMALLU, I want to know more about: ${service.title}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Find out more <ArrowRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
