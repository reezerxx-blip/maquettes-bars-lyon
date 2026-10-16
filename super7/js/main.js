/* Super7 maquette : 3 moments de mouvement + filtre Bar/Club. Tout est facultatif : le site reste complet sans JS. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Entrée du hero : les lettres s'allument une à une, par pas (GSAP cœur, repli sans lui). */
  var title = document.querySelector(".hero-title");
  if (title) {
    var chars = title.querySelectorAll(".ch");
    var show = function () { title.classList.add("is-shown"); };
    var safety = window.setTimeout(function () {
      if (window.gsap) { window.gsap.killTweensOf(chars); window.gsap.set(chars, { opacity: 1 }); }
      show();
    }, 3500);
    if (!reduce && window.gsap) {
      try {
        window.gsap.set(chars, { opacity: 0 });
        title.classList.add("is-shown");
        window.gsap.fromTo(
          chars,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.14,
            ease: "steps(3)",
            onComplete: function () { window.clearTimeout(safety); },
          }
        );
      } catch (e) { show(); }
    } else {
      show();
    }
  }

  /* 2. Horloge : de 17:00 à 01:00 selon le défilement, par pas de 15 minutes. */
  var clock = document.getElementById("clock");
  if (clock && !reduce) {
    var last = "";
    var ticking = false;
    var update = function () {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      var minutes = Math.round((p * 8 * 60) / 15) * 15;
      var h = (17 + Math.floor(minutes / 60)) % 24;
      var m = minutes % 60;
      var txt = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
      if (txt !== last) { clock.textContent = txt; last = txt; }
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* 3. Révélation en cascade des jours de la semaine. */
  var items = document.querySelectorAll(".reveal");
  if (items.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var el = en.target;
            var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
            el.style.transitionDelay = Math.min(idx, 6) * 60 + "ms";
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
      items.forEach(function (el) { io.observe(el); });
      window.setTimeout(function () { items.forEach(function (el) { el.classList.add("is-in"); }); }, 4000);
    }
  }

  /* Filtre Bar / Club (page programmation) : bouton à bascule, repli = tout affiché. */
  var filters = document.querySelector(".filters");
  if (filters) {
    filters.hidden = false;
    var buttons = filters.querySelectorAll("button");
    var days = document.querySelectorAll(".day");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        days.forEach(function (d) {
          d.classList.toggle("day--filtered", f !== "all");
          d.querySelectorAll(".slot").forEach(function (s) {
            s.hidden = !(f === "all" || s.getAttribute("data-slot") === f);
          });
        });
      });
    });
  }
})();
