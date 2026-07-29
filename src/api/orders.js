import { apiPost } from "./client";

export function placeOrder(payload) {
  return apiPost("/api/orders", payload);
}
