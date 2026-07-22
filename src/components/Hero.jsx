import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">🌍 100% Organic & Eco-Friendly</span>
          <h1 className="hero__title">
            Nourish Your Soil, <span>Grow Naturally</span>
          </h1>
          <p className="hero__text">
            Eco-friendly organic fertilizers crafted to enrich your garden,
            boost plant health, and protect the Earth.
          </p>
          <div className="hero__actions">
            <Link to="/shop" className="btn btn-primary">
              Shop Now →
            </Link>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <strong>25k+</strong>
              <span>Happy Growers</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Natural Blend</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Organic Products</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80"
            alt="Healthy green plants growing in rich soil"
          />
          <div className="hero__float hero__float--1">
            <span>🌱</span>
            <div>
              <strong>Soil Health</strong>
              <small>Boosted naturally</small>
            </div>
          </div>
          <div className="hero__float hero__float--2">
            <span>♻️</span>
            <div>
              <strong>Zero Chemicals</strong>
              <small>Earth friendly</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
