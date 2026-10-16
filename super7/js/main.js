/* Super7 maquette : mouvement et filtre Bar/Club. Tout est facultatif : le site reste complet sans JS.
   Mobile d'abord : parallaxe et lumière des briques seulement sur grand écran avec souris. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth >= 900;
  var root = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 1. Horloge 17:00 vers 01:00, jauge de 8 cases, phase (léger, valable partout) ; lumière et parallaxe : grand écran seulement. */
  var clock = document.getElementById("clock");
  var phase = document.getElementById("phase");
  var cells = $$("#meter i");
  var beams = fine && !reduce ? $$(".beam") : [];
  var pars = fine && !reduce ? $$("[data-par]") : [];
  var last = "";
  var ticking = false;
  var vh = window.innerHeight;

  var frame = function () {
    ticking = false;
    /* lectures groupées, puis écritures : pas d'aller-retour layout */
    var max = root.scrollHeight - vh;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var jobs = [];
    beams.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) { return; }
      var t = (vh - r.top) / (vh + r.height);
      jobs.push([el, "transform", "translate3d(" + ((t - 0.5) * r.width * 0.5).toFixed(1) + "px,0,0)"]);
    });
    pars.forEach(function (el) {
      var r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) { return; }
      var t = (vh - r.top) / (vh + r.height);
      jobs.push([el, "translate", "0 " + ((t - 0.5) * parseFloat(el.getAttribute("data-par"))).toFixed(1) + "px"]);
    });
    jobs.forEach(function (j) { j[0].style[j[1]] = j[2]; });
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
  };
  var request = function () { if (!ticking) { ticking = true; window.requestAnimationFrame(frame); } };
  if (!reduce && (clock || beams.length || pars.length)) {
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", function () { vh = window.innerHeight; request(); });
    frame();
  }

  /* 2. Révélations : seuls les blocs situés sous l'écran sont masqués, puis dévoilés au défilement. */
  var items = $$(".rv, .rv-px");
  if (items.length && !reduce && "IntersectionObserver" in window) {
    items.forEach(function (el) { if (el.getBoundingClientRect().top < vh) { el.classList.add("is-in"); } });
    root.classList.add("motion");
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
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
    items.forEach(function (el) { if (!el.classList.contains("is-in")) { io.observe(el); } });
    window.setTimeout(function () { items.forEach(function (el) { el.classList.add("is-in"); }); }, 6000);
  }

  /* 3. Grand S7 de la nuit : posé par pas (GSAP local, chargé seulement sur grand écran avec souris). */
  var s7 = $(".plage-s7");
  if (s7 && fine && !reduce && "IntersectionObserver" in window) {
    var sc = document.createElement("script");
    sc.src = "js/gsap.min.js";
    sc.onload = function () {
      if (!window.gsap) { return; }
      window.gsap.set(s7, { opacity: 0 });
      var io2 = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) {
          window.gsap.to(s7, { opacity: 1, duration: 0.6, ease: "steps(6)", clearProps: "opacity" });
          io2.disconnect();
        }
      }, { threshold: 0.2 });
      io2.observe(s7);
      window.setTimeout(function () { window.gsap.set(s7, { opacity: 1 }); }, 8000);
    };
    document.head.appendChild(sc);
  }

  /* 4. Cartes de la semaine : boutons précédent / suivant (le défilement natif reste possible). */
  var rail = $(".rail");
  var ctrl = $(".rail-ctrl");
  if (rail && ctrl) {
    var prev = $(".btn--prev", ctrl), next = $(".btn--next", ctrl);
    var hint = $(".rail-hint");
    var upd = function () {
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
      if (hint && rail.scrollLeft > 24) { hint.classList.add("is-done"); }
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

  /* 5. Filtre Bar / Club : change l'ambiance de l'affiche. Sans JS, les boutons sont masqués (noscript) et tout est affiché. */
  var seg = $(".seg");
  var affiche = $(".affiche");
  if (seg && affiche) {
    var status = document.getElementById("seg-status");
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

