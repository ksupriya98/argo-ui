import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import { products as fallbackProducts } from "../data/products";

// Fetches the catalog from the backend. If the API is unreachable it falls back
// to the bundled catalog so the storefront still renders.
export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    fetchProducts()
      .then((data) => {
        if (!active) return;
        setProducts(data);
        setError(null);
      })
      .catch((err) => {
        if (!active) return;
        setProducts(fallbackProducts);
        setError(err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { products, loading, error };
}
