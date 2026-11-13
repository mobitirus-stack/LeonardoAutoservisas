// Consent Mode v2 – įkeliama tik jei site.GA4_ID užpildytas.
(function () {
  var box = document.getElementById('consent'); if (!box) return;
  var id = box.dataset.ga, KEY = 'consent-analytics';
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied' });
  function load() { var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id; document.head.appendChild(s); gtag('js', new Date()); gtag('config', id, { anonymize_ip: true }); }
  var saved; try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'granted') { gtag('consent', 'update', { analytics_storage: 'granted' }); load(); return; }
  if (saved === 'denied') return;
  box.hidden = false;
  box.addEventListener('click', function (e) {
    var v = e.target && e.target.getAttribute('data-consent'); if (!v) return;
    try { localStorage.setItem(KEY, v); } catch (err) {}
    box.hidden = true;
    if (v === 'granted') { gtag('consent', 'update', { analytics_storage: 'granted' }); load(); }
  });
})();
