import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { productCategories } from "../data/products";
import { useProducts } from "../hooks/useProducts";
import "./pages.css";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";
  const [sort, setSort] = useState("featured");
  const { products, loading } = useProducts();

  const setCategory = (cat) => {
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filtered = useMemo(() => {
    let list =
      activeCategory === "All"
        ? [...products]
        : products.filter((p) => p.category === activeCategory);

    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, sort, products]);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Shop</span>
          </div>
          <h1>Shop Organic Fertilizers</h1>
          <p style={{ color: "var(--muted)", marginTop: 8 }}>
            Browse our full range of eco-friendly, soil-loving blends.
          </p>
        </div>
      </section>

      <section className="page">
        <div className="container">
          <div className="chip-row">
            {productCategories.map((cat) => (
              <button
                key={cat}
                className={cat === activeCategory ? "is-active" : ""}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="shop-layout">
            <aside className="shop-filters">
              <h3>Categories</h3>
              <div className="filter-list">
                {productCategories.map((cat) => (
                  <button
                    key={cat}
                    className={cat === activeCategory ? "is-active" : ""}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </aside>

            <div>
              <div className="shop-toolbar">
                <span className="count">
                  Showing {filtered.length} product
                  {filtered.length !== 1 ? "s" : ""}
                  {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label="Sort products"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A → Z</option>
                </select>
              </div>

              {loading ? (
                <div className="empty-state">
                  <span className="icon">🌱</span>
                  <h2>Loading products…</h2>
                  <p>Fetching the latest catalog.</p>
                </div>
              ) : filtered.length === 0 ? (
                <div className="empty-state">
                  <span className="icon">🌱</span>
                  <h2>No products found</h2>
                  <p>Try a different category.</p>
                  <button className="btn btn-primary" onClick={() => setCategory("All")}>
                    View All Products
                  </button>
                </div>
              ) : (
                <div className="product-grid">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
