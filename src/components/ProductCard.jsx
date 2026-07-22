import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const priceLabel = product.priceMax
    ? `$${product.price.toFixed(2)} – $${product.priceMax.toFixed(2)}`
    : `$${product.price.toFixed(2)}`;

  const handleAction = () => {
    if (product.variants) {
      navigate(`/product/${product.id}`);
    } else {
      addToCart(product);
    }
  };

  return (
    <article className="product-card">
      <div className="product-card__media">
        {product.sale && <span className="badge badge--sale">Sale</span>}
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
        <button className="product-card__quick" onClick={handleAction}>
          {product.variants ? "Select Options" : "Add to Cart"}
        </button>
      </div>
      <div className="product-card__body">
        <span className="product-card__cat">{product.category}</span>
        <h3 className="product-card__name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="product-card__rating">★★★★★</div>
        <div className="product-card__price">
          {product.oldPrice && (
            <span className="product-card__old">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="product-card__now">{priceLabel}</span>
        </div>
      </div>
    </article>
  );
}
