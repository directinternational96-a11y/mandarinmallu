"use client";

import { useState } from "react";
import { ArrowUpRight, GraduationCap, Images, X } from "lucide-react";
import { SUCCESS_STORIES } from "@/lib/content";

export default function StudentSuccess() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="section student-success" id="student-success">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>
            Student <span>Success Stories</span>
          </h2>
          <p>
            Every success story brings a dream closer. Explore admission milestones, visa updates
            and student achievements from our China education journey.
          </p>
        </div>

        <div className="success-grid">
          {SUCCESS_STORIES.map((story, i) => (
            <article className={`success-card reveal success-card-${i + 1}`} key={story.image}>
              <button
                className="success-image-button"
                onClick={() => setLightbox(story.image)}
                aria-label={`View larger image: ${story.title}`}
              >
                <img src={story.image} alt={story.alt} loading="lazy" />
                <span className="success-image-action">
                  <Images size={17} /> View story
                </span>
              </button>
              <div className="success-card-content">
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <button className="success-view-link" onClick={() => setLightbox(story.image)}>
                  View photo <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="success-bottom reveal">
          <div className="success-bottom-icon">
            <GraduationCap size={27} />
          </div>
          <div>
            <h3>Your China study journey could be next.</h3>
            <p>Talk to our team for guidance on universities, admissions and visa support.</p>
          </div>
          <a className="btn btn-gold" href="#contact">
            Start your journey <ArrowUpRight size={18} />
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="success-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Student success photo"
          onClick={() => setLightbox(null)}
        >
          <button
            className="success-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Student success story enlarged"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
