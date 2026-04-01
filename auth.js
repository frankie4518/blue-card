const TENANT_ID = "7746fb37-f9d1-4d28-aa55-09bf3849365e";
const CLIENT_ID = "b646d84a-07f5-44b2-8df5-2584c74040c5"; // from your app registration

function login() {
  const redirectUri = window.location.origin + "/staff.html";
  const authUrl =
    "https://login.microsoftonline.com/" + TENANT_ID + "/oauth2/v2.0/authorize" +
    "?client_id=" + encodeURIComponent(CLIENT_ID) +
    "&response_type=token" +
    "&redirect_uri=" + encodeURIComponent(redirectUri) +
    "&scope=" + encodeURIComponent("openid profile email") +
    "&prompt=select_account";

  window.location.href = authUrl;
}

function parseHashToken() {
  if (window.location.hash.startsWith("#")) {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get("access_token");
    if (accessToken) {
      sessionStorage.setItem("ms_access_token", accessToken);
      // clean hash
      window.location.hash = "";
    }
  }
}

function requireLogin() {
  parseHashToken();
  const token = sessionStorage.getItem("ms_access_token");
  if (!token) {
    window.location.href = "index.html";
  }
  return token;
}
