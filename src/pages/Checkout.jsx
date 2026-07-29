import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { placeOrder as submitOrder } from "../api/orders";
import "./pages.css";

const SHIPPING_THRESHOLD = 150;
const SHIPPING_FEE = 12;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  notes: "",
};

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [placing, setPlacing] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="page">
        <div className="container">
          <div className="empty-state" style={{ marginTop: 20 }}>
            <span className="icon">🛒</span>
            <h2>Your cart is empty</h2>
            <p>Add some products before checking out.</p>
            <Link to="/shop" className="btn btn-primary">
              Go to Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!form.firstName.trim()) err.firstName = "First name is required";
    if (!form.lastName.trim()) err.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!/^[0-9+\-\s]{7,}$/.test(form.phone)) err.phone = "Enter a valid phone number";
    if (!form.address.trim()) err.address = "Address is required";
    if (!form.city.trim()) err.city = "City is required";
    if (!form.state.trim()) err.state = "State is required";
    if (!/^[0-9]{4,10}$/.test(form.zip)) err.zip = "Enter a valid ZIP / PIN";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector(".field .err");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setPlacing(true);
    setSubmitError(null);

    const payload = {
      customerName: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      notes: form.notes,
      subtotal,
      shipping,
      totalAmount: total,
      paymentMethod: "Cash on Delivery",
      items: items.map((i) => ({
        productId: i.id,
        name: i.name,
        variant: i.variant || null,
        price: i.price,
        quantity: i.qty,
      })),
    };

    try {
      const saved = await submitOrder(payload);
      const orderId = "FRT" + String(saved?.id ?? "").padStart(6, "0");
      clear();
      navigate("/order-confirmation", {
        state: {
          orderId,
          total,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          address: `${form.address}, ${form.city}, ${form.state} ${form.zip}`,
        },
      });
    } catch (err) {
      setSubmitError(
        "We couldn't place your order right now. Please make sure the server is running and try again."
      );
      setPlacing(false);
    }
  };

  const inputClass = (key) => `${errors[key] ? "invalid" : ""}`;

  return (
    <section className="page">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/cart">Cart</Link> /{" "}
          <span>Checkout</span>
        </div>
        <h1>Checkout</h1>

        <form className="checkout-grid" onSubmit={placeOrder} noValidate>
          <div>
            <div className="checkout-card">
              <h3>
                <span className="step">1</span> Shipping Details
              </h3>
              <div className="form-grid">
                <div className="field">
                  <label>First Name</label>
                  <input
                    className={inputClass("firstName")}
                    value={form.firstName}
                    onChange={update("firstName")}
                    placeholder="John"
                  />
                  {errors.firstName && <span className="err">{errors.firstName}</span>}
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input
                    className={inputClass("lastName")}
                    value={form.lastName}
                    onChange={update("lastName")}
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="err">{errors.lastName}</span>}
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    className={inputClass("email")}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input
                    className={inputClass("phone")}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="1800-525-651"
                  />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <div className="field full">
                  <label>Address</label>
                  <input
                    className={inputClass("address")}
                    value={form.address}
                    onChange={update("address")}
                    placeholder="Street address"
                  />
                  {errors.address && <span className="err">{errors.address}</span>}
                </div>
                <div className="field">
                  <label>City</label>
                  <input
                    className={inputClass("city")}
                    value={form.city}
                    onChange={update("city")}
                    placeholder="City"
                  />
                  {errors.city && <span className="err">{errors.city}</span>}
                </div>
                <div className="field">
                  <label>State</label>
                  <input
                    className={inputClass("state")}
                    value={form.state}
                    onChange={update("state")}
                    placeholder="State"
                  />
                  {errors.state && <span className="err">{errors.state}</span>}
                </div>
                <div className="field">
                  <label>ZIP / PIN Code</label>
                  <input
                    className={inputClass("zip")}
                    value={form.zip}
                    onChange={update("zip")}
                    placeholder="000000"
                  />
                  {errors.zip && <span className="err">{errors.zip}</span>}
                </div>
                <div className="field full">
                  <label>Order Notes (optional)</label>
                  <textarea
                    rows="3"
                    value={form.notes}
                    onChange={update("notes")}
                    placeholder="Delivery instructions, landmarks, etc."
                  />
                </div>
              </div>
            </div>

            <div className="checkout-card">
              <h3>
                <span className="step">2</span> Payment Method
              </h3>
              <div className="payment-option">
                <span className="radio" />
                <div>
                  <strong>💵 Cash on Delivery (COD)</strong>
                  <small>Pay with cash when your order is delivered to your doorstep.</small>
                </div>
              </div>
              <p className="payment-note">
                Cash on Delivery is currently the only available payment option.
                Please keep the exact amount ready at the time of delivery.
              </p>
            </div>
          </div>

          <aside className="summary">
            <h3>Your Order</h3>
            <div className="order-items">
              {items.map((item) => (
                <div className="order-item" key={`${item.id}-${item.variant || ""}`}>
                  <img src={item.image} alt={item.name} />
                  <div className="order-item__info">
                    <h4>{item.name}</h4>
                    <span>
                      {item.variant ? `${item.variant} · ` : ""}Qty {item.qty}
                    </span>
                  </div>
                  <span className="order-item__price">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-line summary-line--total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            {submitError && (
              <span className="err" style={{ display: "block", marginBottom: 10 }}>
                {submitError}
              </span>
            )}
            <button type="submit" className="btn btn-primary" disabled={placing}>
              {placing ? "Placing Order..." : "Place Order (COD)"}
            </button>
            <Link to="/cart" className="btn btn-outline">
              Back to Cart
            </Link>
          </aside>
        </form>
      </div>
    </section>
  );
}
