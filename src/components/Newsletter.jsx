import { useState } from "react";
import "./Newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 3000);
  };

  return (
    <section className="newsletter" id="about">
      <div className="container newsletter__inner">
        <div className="newsletter__content">
          <h2>Join the Green Revolution 🌱</h2>
          <p>
            Subscribe for organic gardening tips, seasonal offers and new product
            drops delivered straight to your inbox.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={submit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-light">
            {done ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
