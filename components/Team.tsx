"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TEAM } from "@/lib/content";
import { wa } from "@/lib/site";

export default function Team() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) =>
    trackRef.current?.scrollBy({
      left: direction * (trackRef.current?.clientWidth ?? 300),
      behavior: "smooth",
    });

  // Auto-advance the carousel every 6 s on phones only.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || TEAM.length < 2) return;

    let timer: number | undefined;
    const mobile = window.matchMedia("(max-width: 600px)");

    const sync = () => {
      if (timer !== undefined) window.clearInterval(timer);
      if (!mobile.matches) return;
      timer = window.setInterval(() => {
        if (!track || track.clientWidth === 0) return;
        const max = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= max - 8) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
        }
      }, 6000);
    };

    sync();
    mobile.addEventListener("change", sync);
    return () => {
      if (timer !== undefined) window.clearInterval(timer);
      mobile.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Our Team</h2>
          <p>We’re more than just a team—we’re partners in every student’s dream.</p>
        </div>
        <div className="team-wrap">
          <button className="team-arrow left" onClick={() => scroll(-1)} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <div className="team-track" ref={trackRef}>
            {TEAM.map((member, i) => (
              <figure className="member" key={member.name + i}>
                <div className="member-photo">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>
                <figcaption>
                  <b>{member.name}</b>
                  <span>{member.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <button className="team-arrow right" onClick={() => scroll(1)} aria-label="Next">
            <ChevronRight size={22} />
          </button>
        </div>
        <div className="center">
          <a
            className="btn btn-outline"
            href={wa("Hi MANDARINMALLU, I would like to talk to your team.")}
            target="_blank"
            rel="noreferrer"
          >
            Show all
          </a>
        </div>
      </div>
    </section>
  );
}
