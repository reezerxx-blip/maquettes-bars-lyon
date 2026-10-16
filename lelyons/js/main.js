/* Le Lyon's : mouvement. Tout reste lisible sans ce script. */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function endLion() { root.classList.remove("js-lion"); }

  if (reduce) { endLion(); return; }

  /* 1. Apparition au scroll (IntersectionObserver) */
  var items = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && items.length) {
    var groups = new Map();
    items.forEach(function (el) {
      var p = el.parentElement;
      var n = groups.get(p) || 0;
      el.style.setProperty("--d", Math.min(n, 6) * 60 + "ms");
      groups.set(p, n + 1);
    });
    root.classList.add("js-anim");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
    /* Filet de sécurité : si l'observateur ne répond pas, on montre tout. */
    window.setTimeout(function () {
      items.forEach(function (el) { el.classList.add("is-in"); });
    }, 4000);
  }

  /* 2. Le lion se dessine, puis lève sa chope une fois (GSAP cœur) */
  var lion = document.querySelector("[data-lion-anim]");
  if (!lion || !window.gsap) { endLion(); return; }
  var paths = lion.querySelectorAll(".ln");
  var mug = lion.querySelector(".lion-mug");
  window.gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1, opacity: 0 });
  endLion();
  var tl = window.gsap.timeline({ delay: 0.25 });
  tl.to(paths, { opacity: function (i, el) { return el.classList.contains("soft") ? 0.55 : 1; }, duration: 0.01, stagger: 0.04 }, 0)
    .to(paths, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut", stagger: 0.04 }, 0);
  if (mug) {
    tl.to(mug, { y: -14, rotation: -5, svgOrigin: "414 340", duration: 0.5, ease: "power2.out" }, ">0.1")
      .to(mug, { y: 0, rotation: 0, duration: 0.7, ease: "power2.inOut" }, ">0.5");
  }
})();
