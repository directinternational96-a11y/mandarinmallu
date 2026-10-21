import { Check } from "lucide-react";
import { STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Our Streamlined Application Process</h2>
          <p>
            Every detail covered. From planning to arrival, we make your journey to China smooth
            and stress-free.
          </p>
        </div>
        <div className="steps reveal">
          {STEPS.map((step, i) => {
            const last = i === STEPS.length - 1;
            return (
              <div className="step" key={step.title}>
                <span className={`step-num ${last ? "done" : ""}`}>
                  {last ? <Check size={18} /> : i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
