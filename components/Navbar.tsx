"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { NAV } from "@/lib/content";
import { SITE, wa } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label={SITE.name}>
          <span className="brand-text">
            <b>{SITE.name}</b>
          </span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((link) => (
            <a href={link.href} onClick={() => setOpen(false)} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a
            className="nav-wa"
            href={wa("Hi MANDARINMALLU, I need help with studying in China.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
          <a className="btn btn-gold" href="#programs">
            Apply Now
          </a>
        </div>

        <button
          className="burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
