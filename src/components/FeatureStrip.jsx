import "./FeatureStrip.css";

const features = [
  { icon: "🌿", title: "100% Organic", text: "Made from nature's finest ingredients" },
  { icon: "🚚", title: "Fast Delivery", text: "Free shipping on orders over $150" },
  { icon: "♻️", title: "Eco Friendly", text: "Sustainable & earth-safe formulas" },
  { icon: "🛡️", title: "Quality Assured", text: "Lab-tested for guaranteed results" },
];

export default function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="container feature-strip__grid">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <span className="feature__icon">{f.icon}</span>
            <div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
