import { Link, useLocation, Navigate } from "react-router-dom";
import "./pages.css";

export default function OrderConfirmation() {
  const { state } = useLocation();

  if (!state?.orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="page">
      <div className="container">
        <div className="confirm">
          <div className="confirm__check">✓</div>
          <h1>Thank you for your order!</h1>
          <p>
            Hi <strong>{state.name}</strong>, your order has been placed
            successfully.
          </p>
          <div className="confirm__order">Order #{state.orderId}</div>
          <p>
            <strong>Payment Method:</strong> Cash on Delivery
          </p>
          <p>
            <strong>Amount Due on Delivery:</strong> ${state.total.toFixed(2)}
          </p>
          <p>
            <strong>Delivering to:</strong> {state.address}
          </p>
          <p style={{ marginTop: 16 }}>
            A confirmation has been sent to <strong>{state.email}</strong>. Please
            keep the exact cash amount ready when your order arrives.
          </p>
          <div className="confirm__actions">
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
