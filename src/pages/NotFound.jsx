import { Link } from "react-router-dom";
import "./pages.css";

export default function NotFound() {
  return (
    <section className="page">
      <div className="container">
        <div className="empty-state" style={{ marginTop: 20 }}>
          <span className="icon">🌿</span>
          <h2>404 — Page Not Found</h2>
          <p>The page you're looking for has wandered off into the garden.</p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
