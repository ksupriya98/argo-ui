import { testimonials } from "../data/products";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Happy Growers</span>
          <h2>What Our Customers Say</h2>
          <p>Trusted by home gardeners, farmers and nurseries across the country.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article className="testimonial" key={t.name}>
              <div className="testimonial__stars">★★★★★</div>
              <p className="testimonial__text">"{t.text}"</p>
              <div className="testimonial__person">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
