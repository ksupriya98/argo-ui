import { Link } from "react-router-dom";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    <section className="promo">
      <div className="container promo__inner">
        <div className="promo__media">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
            alt="Hands holding fresh organic soil"
          />
        </div>
        <div className="promo__content">
          <span className="eyebrow">Nature's Best Fertilizers</span>
          <h2>We believe healthy soil grows healthy life</h2>
          <p>
            Grow stronger with organic power. Our fertilizers are crafted from
            nature's finest ingredients to enrich your garden, protect the
            environment, and support sustainable farming.
          </p>
          <ul className="promo__list">
            <li>✔ Boosts soil fertility naturally</li>
            <li>✔ Safe for pets, kids & pollinators</li>
            <li>✔ Improves water retention & root growth</li>
          </ul>
          <Link to="/shop" className="btn btn-primary">
            Shop Organic Essentials →
          </Link>
        </div>
      </div>
    </section>
  );
}
