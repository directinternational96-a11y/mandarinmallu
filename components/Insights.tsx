import { ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/content";

export default function Insights() {
  return (
    <section className="section" id="insights">
      <div className="wrap">
        <div className="insights-head reveal">
          <div>
            <h2>Latest Insights</h2>
            <p>Fresh guidance for your next step.</p>
          </div>
          <a href="#insights" className="link-arrow">
            View all articles <ArrowRight size={18} />
          </a>
        </div>
        <div className="insights-grid">
          {INSIGHTS.map((post, i) => (
            <article
              className="insight reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
              key={post.title}
            >
              <div className="insight-img" style={{ backgroundImage: `url('${post.img}')` }}>
                <span className="tag">{post.tag}</span>
              </div>
              <div className="insight-body">
                <small>{post.date}</small>
                <h3>{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
