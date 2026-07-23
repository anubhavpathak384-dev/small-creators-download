// Small Creators — lightweight scroll reveal (progressive enhancement).
// The site is fully usable without this script; it only adds a fade/slide-in
// effect as feature cards and install steps enter the viewport.

(function () {
  var targets = document.querySelectorAll(".feature-card, .step");

  if (!("IntersectionObserver" in window) || !targets.length) {
    return;
  }

  targets.forEach(function (el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(.2,.9,.25,1)";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
