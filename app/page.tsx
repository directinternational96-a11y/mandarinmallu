import { MessageCircle, Mail } from "lucide-react";
import { SITE, wa } from "@/lib/site";

// Site is temporarily down: only this Coming Soon screen is served.
// To restore the full landing page, revert this file to the previous commit.
export default function Home() {
  return (
    <main className="soon">
      <div className="soon-card">
        <span className="brand">
          <img src="/assets/logo-mark.svg" alt="" width={34} height={34} />
          <span className="brand-text">
            <b>
              MANDARIN<span>MALLU</span>
            </b>
          </span>
        </span>
        <h1>Coming soon</h1>
        <p>We&apos;re working on something new. Check back shortly.</p>
        <div className="soon-links">
          <a
            className="btn btn-primary"
            href={wa("Hi MANDARINMALLU, I need help with studying in China.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a className="btn btn-outline" href={`mailto:${SITE.email}`}>
            <Mail size={18} /> Email us
          </a>
        </div>
      </div>
    </main>
  );
}
