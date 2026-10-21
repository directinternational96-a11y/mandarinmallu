"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { HIGHLIGHTS } from "@/lib/content";
import { useSearch } from "./SearchProvider";

export default function Hero() {
  const { search } = useSearch();
  const [value, setValue] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    search(value);
  };

  return (
    <section id="top" className="hero" style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>
          Find Your Ideal
          <br />
          Study Program
        </h1>
        <form className="hero-search" onSubmit={submit}>
          <Search size={18} className="hs-icon" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search course or university..."
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
        <div className="hero-chips">
          <span>Or browse the highlights:</span>
          {HIGHLIGHTS.map((h) => (
            <button onClick={() => search(h)} key={h}>
              {h}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
