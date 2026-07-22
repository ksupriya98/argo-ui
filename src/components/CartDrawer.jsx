import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CartDrawer.css";

export default function CartDrawer() {
  const { items, isOpen, closeCart, increment, decrement, remove, subtotal } =
    useCart();
  const navigate = useNavigate();

  const go = (path) => {
    closeCart();
    navigate(path);
  };

  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeCart}
      />
      <aside className={`drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="drawer__head">
          <h3>Your Cart</h3>
          <button className="drawer__close" onClick={closeCart} aria-label="Close">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <span className="drawer__empty-icon">🛒</span>
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={() => go("/shop")}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="drawer__items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item__info">
                    <h4>{item.name}</h4>
                    <span className="cart-item__price">
                      ${item.price.toFixed(2)}
                    </span>
                    <div className="qty">
                      <button onClick={() => decrement(item.id)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => remove(item.id)}
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer__foot">
              <div className="drawer__subtotal">
                <span>Sub Total</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button
                className="btn btn-primary drawer__checkout"
                onClick={() => go("/checkout")}
              >
                Checkout
              </button>
              <button
                className="btn btn-outline drawer__continue"
                onClick={() => go("/cart")}
              >
                View Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
