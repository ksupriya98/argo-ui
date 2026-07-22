import { Link } from "react-router-dom";
import { categories } from "../data/products";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="section categories" id="categories">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Shop by Type</span>
          <h2>Explore Our Fertilizer Categories</h2>
          <p>From compost blends to specialty boosters — find the right feed for every plant.</p>
        </div>

        <div className="categories__grid">
          {categories.map((cat) => (
            <article className="cat-card" key={cat.title}>
              <img src={cat.image} alt={cat.title} loading="lazy" />
              <div className="cat-card__overlay">
                <h3>{cat.title}</h3>
                <p>{cat.text}</p>
                <Link
                  to={`/shop?category=${encodeURIComponent(cat.filter)}`}
                  className="cat-card__link"
                >
                  Buy Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
