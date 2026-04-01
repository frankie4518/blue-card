function login() {
  window.location.href =
    "https://login.microsoftonline.com/common/oauth2/v2.0/authorize" +
    "?client_id=YOUR_CLIENT_ID" +
    "&response_type=token" +
    "&redirect_uri=" + encodeURIComponent(window.location.href) +
    "&scope=openid%20email%20profile" +
    "&domain_hint=blue-card.co.uk";
}

function requireLogin() {
  if (!localStorage.getItem("ms_token")) {
    window.location.href = "index.html";
  }
}
