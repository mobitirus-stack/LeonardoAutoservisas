// Google Maps facade: iframe įkeliamas tik paspaudus.
(function () {
  var b = document.getElementById('map-btn'), m = document.getElementById('map');
  if (!b || !m) return;
  b.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = m.dataset.src; f.title = m.dataset.title; f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer-when-downgrade'; f.width = '600'; f.height = '450'; f.allowFullscreen = true;
    m.replaceChildren(f);
  });
})();
