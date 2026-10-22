import { Facebook, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <span className="brand-text">
                <b>{SITE.name}</b>
              </span>
            </a>
            <p className="addr">{SITE.address}</p>
            <a className="contact-link" href="tel:+917559930046">
              <Phone size={16} /> Call: +91 755-9930046
            </a>
            <a
              className="contact-link"
              href="https://wa.me/8613123560046"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp: +86 13123560046
            </a>
            <a className="contact-link" href="mailto:directinternational96@gmail.com">
              <Mail size={16} /> directinternational96@gmail.com
            </a>
            <div className="footer-socials" aria-label="Social media links">
              <a
                href="https://youtube.com/@mandarinmallu?si=5lvHoR0uI5-YK_UJ"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={19} /> YouTube
              </a>
              <a
                href="https://www.instagram.com/mandarin.mallu/?__pwa=1"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={19} /> Instagram
              </a>
              <a
                href="https://www.facebook.com/search/top?q=MANDARINMALLU"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={19} /> Facebook
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbEGBKUC1FuHMsf0sB3p"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle size={19} /> Join our WhatsApp Channel
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <a href="#services">Consultation & Guidance for Studying in China</a>
            <a href="#services">Preparing Application Files for Chinese Universities</a>
            <a href="#services">University Admission Support</a>
            <a href="#services">Preparing the China Visa Application</a>
            <a href="#services">Booking China Flight Ticket & Group Travel Assistance</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#trust">About us</a>
            <a href="#insights">Blog</a>
            <a href="#faq">FAQ</a>
            <a href="#top">Contact us</a>
          </div>

          <div>
            <h4>Work with us</h4>
            <a href="#top">Careers</a>
            <a href="#top">Partnership</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="legal">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Use</a>
            <a href="#top">Site Map</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
