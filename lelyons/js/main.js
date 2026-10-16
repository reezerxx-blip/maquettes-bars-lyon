/* Le Lyon's v2 : mouvement (GSAP cœur, transform et opacity). Tout reste lisible sans ce script. */
(function () {
  "use strict";
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.gsap) { root.classList.remove("js"); return; }
  var gsap = window.gsap;
  root.classList.add("ready");

  /* 1. Entrée du hero : titre qui monte d'un masque, puis baseline, boutons */
  var lines = document.querySelectorAll(".hero .line__in");
  var ins = document.querySelectorAll(".hero [data-in]");
  var tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power3.out" } });
  if (lines.length) {
    tl.fromTo(lines, { yPercent: 105, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.7, stagger: 0.12 }, 0);
  }
  if (ins.length) {
    tl.fromTo(ins, { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.09 }, 0.35);
  }

  /* 2. Le lion se dessine puis lève sa chope une fois */
  var lion = document.querySelector("[data-lion] svg");
  if (lion) {
    var paths = lion.querySelectorAll(".ln");
    var mug = lion.querySelector(".lion-mug");
    gsap.set(paths, { strokeDasharray: 1, strokeDashoffset: 1, opacity: 0 });
    tl.to(paths, { opacity: function (i, el) { return el.classList.contains("soft") ? 0.55 : 1; }, duration: 0.01, stagger: 0.03 }, 0.2)
      .to(paths, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut", stagger: 0.03 }, 0.2);
    if (mug) {
      tl.to(mug, { y: -16, rotation: -5, svgOrigin: "560 500", duration: 0.5, ease: "power2.out" }, ">0.1")
        .to(mug, { y: 0, rotation: 0, duration: 0.7, ease: "power2.inOut" }, ">0.4");
    }
  }

  /* 3. Apparition au scroll, en cascade courte */
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if ("IntersectionObserver" in window && items.length) {
    gsap.set(items, { autoAlpha: 0, y: 36 });
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (e, i) {
        io.unobserve(e.target);
        gsap.to(e.target, { autoAlpha: 1, y: 0, duration: 0.6, delay: Math.min(i, 5) * 0.07, ease: "power3.out", overwrite: true });
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
    /* Filet de sécurité : si l'observateur ne répond pas, tout devient visible. */
    window.setTimeout(function () { gsap.to(items, { autoAlpha: 1, y: 0, duration: 0.3, overwrite: true }); }, 6000);
  }

  /* 4. Parallaxe légère du lion du hero (transform seulement) */
  var wrap = document.querySelector("[data-lion]");
  if (wrap) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 900);
        gsap.set(wrap, { y: y * 0.12 });
        ticking = false;
      });
    }, { passive: true });
  }
})();
