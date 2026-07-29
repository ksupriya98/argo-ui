import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import "./pages.css";

const SIZE_VARIANTS = ["1 kg", "5 kg", "10 kg"];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products, loading } = useProducts();
  const product = products.find((p) => String(p.id) === String(id));

  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState(SIZE_VARIANTS[0]);

  if (loading) {
    return (
      <section className="page">
        <div className="container">
          <div className="empty-state">
            <span className="icon">🌱</span>
            <h2>Loading product…</h2>
          </div>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="page">
        <div className="container">
          <div className="empty-state">
            <span className="icon">🔍</span>
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/shop" className="btn btn-primary">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const unitPrice = product.priceMax
    ? product.price + SIZE_VARIANTS.indexOf(variant) * 15
    : product.price;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = (goToCart = false) => {
    addToCart(
      { ...product, price: unitPrice, variant: product.variants ? variant : null },
      qty,
      !goToCart
    );
    if (goToCart) navigate("/checkout");
  };

  return (
    <>
      <section className="page">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> /{" "}
            <span>{product.name}</span>
          </div>

          <div className="pd">
            <div className="pd__media">
              {product.sale && <span className="badge badge--sale">Sale</span>}
              <img src={product.image} alt={product.name} />
            </div>

            <div className="pd__info">
              <span className="pd__cat">{product.category}</span>
              <h1>{product.name}</h1>
              <div className="pd__rating">
                ★★★★★ <small>(48 reviews)</small>
              </div>

              <div className="pd__price">
                {product.oldPrice && (
                  <span className="old">${product.oldPrice.toFixed(2)}</span>
                )}
                <span className="now">${unitPrice.toFixed(2)}</span>
              </div>

              <p className="pd__desc">
                {product.name} is a premium organic fertilizer crafted from
                nature's finest ingredients. It enriches your soil, boosts plant
                health and supports sustainable farming — safe for pets, kids and
                pollinators.
              </p>

              {product.variants && (
                <div className="pd__variants">
                  <label>Size / Pack</label>
                  <div className="variant-options">
                    {SIZE_VARIANTS.map((v) => (
                      <button
                        key={v}
                        className={v === variant ? "is-active" : ""}
                        onClick={() => setVariant(v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pd__actions">
                <div className="qty-stepper">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button className="btn btn-primary" onClick={() => handleAdd(false)}>
                  Add to Cart
                </button>
                <button className="btn btn-outline" onClick={() => handleAdd(true)}>
                  Buy Now
                </button>
              </div>

              <div className="pd__perks">
                <div>🚚 Free shipping over $150</div>
                <div>💵 Cash on Delivery</div>
                <div>♻️ 100% Organic</div>
              </div>

              <div className="pd__meta">
                <span>
                  <strong>Category:</strong> {product.category}
                </span>
                <span>
                  <strong>SKU:</strong> FRT-{String(product.id).padStart(4, "0")}
                </span>
                <span>
                  <strong>Availability:</strong> In Stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-head" style={{ textAlign: "left", margin: "0 0 28px" }}>
              <h2>Related Products</h2>
            </div>
            <div className="product-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
