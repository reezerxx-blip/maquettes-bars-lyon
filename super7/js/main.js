/* Super7 maquette : mouvement et filtre Bar/Club. Tout est facultatif : le site reste complet sans JS. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 1. Hero : lettres allumées par pas, badge S7 posé par pas (GSAP cœur ; sans lui, tout s'affiche d'emblée). */
  var title = $(".hero-title");
  if (title) {
    var chars = $$(".ch", title);
    var show = function () { title.classList.add("is-shown"); };
    var safety = window.setTimeout(function () {
      if (window.gsap) { window.gsap.killTweensOf(chars); window.gsap.set(chars, { opacity: 1 }); }
      show();
    }, 3500);
    if (!reduce && window.gsap) {
      try {
        window.gsap.set(chars, { opacity: 0 });
        title.classList.add("is-shown");
        window.gsap.fromTo(chars, { opacity: 0 }, {
          opacity: 1, duration: 0.5, stagger: 0.14, ease: "steps(3)",
          onComplete: function () { window.clearTimeout(safety); }
        });
        var badge = $(".wallwrap .badge");
        if (badge) { window.gsap.from(badge, { opacity: 0, scale: 0.6, duration: 0.5, delay: 0.9, ease: "steps(4)", clearProps: "all" }); }
      } catch (e) { show(); }
    } else { show(); }
  }

  /* 2. Horloge 17:00 vers 01:00, jauge de 8 cases, phase, lumière des briques, parallaxe douce. */
  var clock = document.getElementById("clock");
  var phase = document.getElementById("phase");
  var cells = $$("#meter i");
  var beams = $$(".beam");
  var pars = $$("[data-par]");
  var last = "";
  var ticking = false;
  var vh = window.innerHeight;

  var frame = function () {
    ticking = false;
    var max = document.documentElement.scrollHeight - vh;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (clock) {
      var minutes = Math.round((p * 8 * 60) / 15) * 15;
      var h = (17 + Math.floor(minutes / 60)) % 24;
      var m = minutes % 60;
      var txt = (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
      if (txt !== last) {
        clock.textContent = txt; last = txt;
        var lit = Math.min(8, Math.floor(minutes / 60) + 1);
        cells.forEach(function (c, i) { c.classList.toggle("on", i < lit); });
        if (phase) { phase.textContent = p < 0.33 ? "Jour" : p < 0.7 ? "Soir" : "Nuit"; }
      }
    }
    beams.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) { return; }
      var t = (vh - r.top) / (vh + r.height);
      el.style.transform = "translate3d(" + ((t - 0.5) * r.width * 0.5).toFixed(1) + "px,0,0)";
    });
    pars.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) { return; }
      var t = (vh - r.top) / (vh + r.height);
      el.style.translate = "0 " + ((t - 0.5) * parseFloat(el.getAttribute("data-par"))).toFixed(1) + "px";
    });
  };
  var request = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(frame); } };
  if (!reduce && (clock || beams.length || pars.length)) {
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", function () { vh = window.innerHeight; request(); });
    frame();
  }

  /* 3. Révélations : douces (.rv) et par pas pixelisés (.rv-px), cascade de 60 ms. */
  var items = $$(".rv, .rv-px");
  if (items.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var el = en.target;
            var idx = Array.prototype.indexOf.call(el.parentNode.children, el);
            el.style.transitionDelay = Math.min(idx, 8) * 60 + "ms";
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
      items.forEach(function (el) { io.observe(el); });
      window.setTimeout(function () { items.forEach(function (el) { el.classList.add("is-in"); }); }, 6000);
    }
  }

  /* 4. Grand S7 de la nuit : posé par pas quand il entre à l'écran. */
  var s7 = $(".plage-s7");
  if (s7 && !reduce && window.gsap && "IntersectionObserver" in window) {
    window.gsap.set(s7, { opacity: 0 });
    var io2 = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) {
        window.gsap.to(s7, { opacity: 1, duration: 0.6, ease: "steps(6)", clearProps: "opacity" });
        io2.disconnect();
      }
    }, { threshold: 0.2 });
    io2.observe(s7);
    window.setTimeout(function () { window.gsap.set(s7, { opacity: 1 }); }, 8000);
  }

  /* 5. Cartes de la semaine : boutons précédent / suivant (le défilement natif reste possible). */
  var rail = $(".rail");
  var ctrl = $(".rail-ctrl");
  if (rail && ctrl) {
    ctrl.hidden = false;
    var prev = $(".btn--prev", ctrl), next = $(".btn--next", ctrl);
    var upd = function () {
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
    };
    var step = function (d) {
      var card = $(".pcard", rail);
      var w = card ? card.offsetWidth + 16 : 320;
      rail.scrollBy({ left: d * w, behavior: reduce ? "auto" : "smooth" });
    };
    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });
    rail.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
    upd();
  }

  /* 6. Filtre Bar / Club : change l'ambiance de l'affiche. Repli sans JS : tout affiché. */
  var seg = $(".seg");
  var affiche = $(".affiche");
  if (seg && affiche) {
    seg.hidden = false;
    var status = document.getElementById("seg-status");
    if (status) { status.hidden = false; }
    var labels = { all: "Affichage : bar et club", bar: "Affichage : bar, brun", club: "Affichage : club, briques" };
    var btns = $$("button", seg);
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        btns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        affiche.setAttribute("data-view", f);
        if (status) { status.textContent = labels[f]; }
        $$(".slot", affiche).forEach(function (s) {
          var vis = f === "all" || s.getAttribute("data-slot") === f;
          s.hidden = !vis;
          s.classList.remove("is-swap");
          if (vis && !reduce) { void s.offsetWidth; s.classList.add("is-swap"); }
        });
      });
    });
  }
})();
