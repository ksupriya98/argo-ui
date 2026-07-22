import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Link to="/" className="brand brand--light">
            <span className="brand__leaf">🌿</span>
            <span className="brand__name">Fertilizer</span>
          </Link>
          <p>
            We believe healthy soil grows healthy life. Our organic fertilizers
            are crafted from nature's finest ingredients to enrich your garden,
            protect the environment, and support sustainable farming.
          </p>
          <div className="footer__social">
            <a href="#home" aria-label="Facebook">f</a>
            <a href="#home" aria-label="Instagram">◎</a>
            <a href="#home" aria-label="Twitter">✕</a>
            <a href="#home" aria-label="YouTube">▷</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/#about">Our Mission</Link></li>
            <li><Link to="/shop">Shop Products</Link></li>
            <li><Link to="/#blog">Blog & Tips</Link></li>
            <li><Link to="/#contact">Contact Us</Link></li>
            <li><Link to="/#categories">Categories</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Support</h4>
          <ul>
            <li><a href="#home">Shipping & Delivery</a></li>
            <li><a href="#home">FAQ</a></li>
            <li><a href="#home">Return & Refund Policy</a></li>
            <li><a href="#home">Privacy Policy</a></li>
            <li><a href="#home">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Details</h4>
          <p className="footer__contact">
            Lorem ipsum dolor sit amet, sapien consectetur adipiscing elit.
          </p>
          <p className="footer__contact">
            <strong>Email:</strong> OrganicF@gmail.com
          </p>
          <p className="footer__contact">
            <strong>Call Us:</strong> 1800-525-651
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Fertilizer — Organic & Eco-Friendly. Built with React.</p>
        </div>
      </div>
    </footer>
  );
}
