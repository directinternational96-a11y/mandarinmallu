"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/content";

function CountUp({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1400, 1);
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section" id="stats">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Our Track Record</h2>
          <p>
            Through a journey filled with achievements, we’ve supported students and helped create
            success stories.
          </p>
        </div>
        <div className="stats reveal">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <b>
                <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
