"use client";

import { useState, type FormEvent } from "react";
import { Menu, Search, X } from "lucide-react";
import { NAV } from "@/lib/content";
import { SITE, wa } from "@/lib/site";
import { useSearch } from "./SearchProvider";

export default function Navbar() {
  const { search } = useSearch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    search(value);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label={SITE.name}>
          <img src="/assets/logo-mark.svg" alt="" width={46} height={46} />
          <span className="brand-text">
            <b>
              MANDARIN<i>MALLU</i>
            </b>
          </span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((link) => (
            <a href={link.href} onClick={() => setOpen(false)} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <form className="nav-search" onSubmit={submit}>
          <input
            list="mandarinmallu-search-suggestions"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search course or university..."
          />
          <button type="submit" aria-label="Search">
            <Search size={18} />
          </button>
        </form>

        <div className="nav-cta">
          <a
            className="btn btn-outline"
            href={wa("Hi MANDARINMALLU, I need help with studying in China.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn btn-gold" href="#programs">
            Apply Now
          </a>
        </div>

        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
