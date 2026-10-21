import { Play } from "lucide-react";
import { wa } from "@/lib/site";

export default function Journey() {
  return (
    <section className="section">
      <div className="wrap journey reveal">
        <div className="journey-text">
          <h2>
            Your Admission
            <br />
            Journey in China,
            <br />
            Guided
          </h2>
          <p>
            From choosing the right university to landing in China, our team walks with you at
            every step — in Malayalam, English and Mandarin.
          </p>
          <a
            className="btn btn-primary"
            href={wa("Hi MANDARINMALLU, I want a free consultation about studying in China.")}
            target="_blank"
            rel="noreferrer"
          >
            Book a free consultation
          </a>
        </div>
        <div className="journey-media" style={{ backgroundImage: "url('/assets/journey.svg')" }}>
          <span className="play">
            <Play size={28} fill="currentColor" />
          </span>
        </div>
      </div>
    </section>
  );
}
