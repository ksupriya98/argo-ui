import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navLinks } from "../data/products";
import { useCart } from "../context/CartContext";
import "./Header.css";

export default function Header() {
  const { count, openCart } = useCart();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>🌱 Free shipping on orders over $150 — grow greener today!</span>
          <span className="topbar__contact">Call Us: 1800-525-651</span>
        </div>
      </div>

      <div className="container header__inner">
        <Link to="/" className="brand">
          <span className="brand__leaf">🌿</span>
          <span className="brand__name">Fertilizer</span>
        </Link>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => navigate("/shop")}
          >
            <SearchIcon />
          </button>
          <button className="icon-btn cart-btn" aria-label="Cart" onClick={openCart}>
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
          <button
            className="icon-btn menu-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
