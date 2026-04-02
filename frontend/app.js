function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

function toggleFAQ(el) {
  const answer = el.nextElementSibling;
  const open = answer.style.display === "block";
  answer.style.display = open ? "none" : "block";
  const icon = el.querySelector("span:last-child");
  if (icon) icon.textContent = open ? "+" : "–";
}

// Placeholder domain search – replace with real API later
async function searchDomain() {
  const name = document.getElementById("domainSearch").value.trim();
  const tld = document.getElementById("tldSelect").value;
  if (!name) return;

  const full = name + tld;
  const searchResults = document.getElementById("searchResults");
  const checkoutPanel = document.getElementById("checkoutPanel");

  // Fake result for now
  const price = tld === ".co.uk" ? 9.99 : 12.99;

  searchResults.innerHTML = `
    <div class="card">
      <div class="domain-row">
        <div>
          <strong>${full}</strong><br>
          <span style="font-size:0.85rem; color:var(--text-muted);">Available</span>
        </div>
        <div>
          <span style="margin-right:1rem;">£${price.toFixed(2)}/year</span>
          <button class="btn" onclick="selectDomain('${full}', ${price})">Select</button>
        </div>
      </div>
    </div>
  `;

  checkoutPanel.innerHTML = "";
}

function selectDomain(domain, price) {
  const checkoutPanel = document.getElementById("checkoutPanel");
  checkoutPanel.innerHTML = `
    <div class="card">
      <h3>Register ${domain}</h3>
      <p style="font-size:0.9rem; color:var(--text-muted);">Choose how you’d like it managed.</p>
      <p><strong>Price:</strong> £${price.toFixed(2)}/year</p>

      <label style="display:block; margin:0.5rem 0;">
        <input type="radio" name="mode" value="helping" checked>
        <strong>Helping Hand</strong> — we manage DNS, SSL and routing for you.
      </label>
      <label style="display:block; margin:0.5rem 0;">
        <input type="radio" name="mode" value="self">
        <strong>Self‑managed</strong> — you manage DNS, we handle billing and renewals.
      </label>

      <button class="btn" style="margin-top:0.75rem;" onclick="fakeCheckout('${domain}')">
        Continue
      </button>
    </div>
  `;
}

function fakeCheckout(domain) {
  alert(`In the real system, this would register ${domain} via DomainNameAPI and create it in your dashboard.`);
}
