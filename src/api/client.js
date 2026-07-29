// Central place for talking to the UrvaraBackend REST API.
// Override the base URL by setting REACT_APP_API_URL in a .env file.
export const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8080";

async function handle(res) {
  if (!res.ok) {
    throw new Error(`API request failed with status ${res.status}`);
  }
  // Some endpoints may return an empty body.
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export function apiGet(path) {
  return fetch(`${API_BASE_URL}${path}`).then(handle);
}

export function apiPost(path, body) {
  return fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then(handle);
}
