"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="wrap narrow">
        <div className="section-head reveal">
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about our services</p>
        </div>
        <div className="faq">
          {FAQ.map((item, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={item.q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{item.q}</span>
                <ChevronDown size={20} />
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
