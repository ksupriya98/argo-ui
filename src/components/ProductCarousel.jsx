import { useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";

export default function ProductCarousel({ id, eyebrow, title, subtitle, products }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section carousel-section" id={id}>
      <div className="container">
        <div className="carousel-head">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
          <div className="carousel-nav">
            <button aria-label="Previous" onClick={() => scroll(-1)}>
              ‹
            </button>
            <button aria-label="Next" onClick={() => scroll(1)}>
              ›
            </button>
          </div>
        </div>

        <div className="carousel-track" ref={trackRef}>
          {products.map((p) => (
            <div className="carousel-item" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
