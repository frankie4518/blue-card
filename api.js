const api = {
  async getCustomers() {
    const res = await fetch("/api/customers");
    return res.json();
  },

  async addCustomer(name, email) {
    await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });
  },

  async getCustomer(id) {
    const res = await fetch(`/api/customers/${id}`);
    return res.json();
  },

  async addNote(id, text) {
    await fetch(`/api/customers/${id}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
  }
};
