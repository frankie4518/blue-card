const API_BASE = "/api"; // adjust if you mount functions elsewhere

async function apiRequest(path, options = {}) {
  const token = sessionStorage.getItem("ms_access_token");
  const headers = options.headers || {};
  if (token) headers["Authorization"] = "Bearer " + token;
  headers["Content-Type"] = "application/json";

  const res = await fetch(API_BASE + path, { ...options, headers });
  if (!res.ok) throw new Error("API error: " + res.status);
  if (res.status === 204) return null;
  return res.json();
}

const api = {
  getCustomers() {
    return apiRequest("/customers");
  },
  addCustomer(name, email) {
    return apiRequest("/customers", {
      method: "POST",
      body: JSON.stringify({ name, email })
    });
  },
  getCustomer(id) {
    return apiRequest(`/customers/${id}`);
  },
  addNote(id, text) {
    return apiRequest(`/customers/${id}/notes`, {
      method: "POST",
      body: JSON.stringify({ text })
    });
  },
  heartbeat() {
    return apiRequest("/staff/online", { method: "POST" });
  }
};
