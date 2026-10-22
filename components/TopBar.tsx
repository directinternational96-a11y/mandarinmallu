import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

const SOCIALS = [
  { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
  { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
  { Icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
  { Icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
];

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
            <Phone size={18} /> <span>{SITE.phone}</span>
          </a>
          <span className="sep" />
          <a href={`mailto:${SITE.email}`} className="hide-sm">
            <Mail size={18} /> <span>{SITE.email}</span>
          </a>
        </div>
        <div className="topbar-right">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a href={href} aria-label={label} className="social" key={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
