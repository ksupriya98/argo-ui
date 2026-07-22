import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./pages.css";

const SHIPPING_THRESHOLD = 150;
const SHIPPING_FEE = 12;

export default function CartPage() {
  const { items, increment, decrement, remove, subtotal } = useCart();

  const shipping = subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  return (
    <section className="page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>Cart</span>
        </div>
        <h1>Your Cart</h1>

        {items.length === 0 ? (
          <div className="empty-state" style={{ marginTop: 30 }}>
            <span className="icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/shop" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-grid">
            <div className="cart-table">
              {items.map((item) => (
                <div className="cart-row" key={`${item.id}-${item.variant || ""}`}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-row__name">
                    <h4>{item.name}</h4>
                    {item.variant && <span>{item.variant}</span>}
                  </div>
                  <div className="qty">
                    <button onClick={() => decrement(item.id)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increment(item.id)}>+</button>
                  </div>
                  <div className="cart-row__price">${item.price.toFixed(2)}</div>
                  <div className="cart-row__subtotal">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                  <button
                    className="cart-row__remove"
                    onClick={() => remove(item.id)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <aside className="summary">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && (
                <div className="summary-line" style={{ fontSize: "0.82rem" }}>
                  <span>
                    Add ${(SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free
                    shipping
                  </span>
                </div>
              )}
              <div className="summary-line summary-line--total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <Link to="/checkout" className="btn btn-primary">
                Proceed to Checkout
              </Link>
              <Link to="/shop" className="btn btn-outline">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
