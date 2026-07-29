import { apiGet } from "./client";

// Map the backend Product shape onto the shape the UI components expect.
function mapProduct(p) {
  return {
    id: p.id,
    name: p.name,
    category: p.category,
    image: p.imageUrl,
    price: p.price,
    priceMax: p.priceMax ?? undefined,
    oldPrice: p.oldPrice ?? undefined,
    sale: p.onSale,
    variants: p.hasVariants,
  };
}

export async function fetchProducts() {
  const data = await apiGet("/api/products");
  return data.map(mapProduct);
}

export async function fetchProduct(id) {
  const data = await apiGet(`/api/products/${id}`);
  return data ? mapProduct(data) : null;
}
