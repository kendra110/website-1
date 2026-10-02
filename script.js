/* Ikon lokal: mendukung penanda HTML lama dan SVG HTML baru. */
function renderBarakaIcons() {
  const iconNodes = {
  "chevron-down": [
    [
      "path",
      {
        "d": "m6 9 6 6 6-6"
      }
    ]
  ],
  "menu": [
    [
      "path",
      {
        "d": "M4 5h16"
      }
    ],
    [
      "path",
      {
        "d": "M4 12h16"
      }
    ],
    [
      "path",
      {
        "d": "M4 19h16"
      }
    ]
  ],
  "chevron-left": [
    [
      "path",
      {
        "d": "m15 18-6-6 6-6"
      }
    ]
  ],
  "chevron-right": [
    [
      "path",
      {
        "d": "m9 18 6-6-6-6"
      }
    ]
  ],
  "message-square": [
    [
      "path",
      {
        "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
      }
    ]
  ],
  "clipboard-list": [
    [
      "rect",
      {
        "width": "8",
        "height": "4",
        "x": "8",
        "y": "2",
        "rx": "1",
        "ry": "1"
      }
    ],
    [
      "path",
      {
        "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    ],
    [
      "path",
      {
        "d": "M12 11h4"
      }
    ],
    [
      "path",
      {
        "d": "M12 16h4"
      }
    ],
    [
      "path",
      {
        "d": "M8 11h.01"
      }
    ],
    [
      "path",
      {
        "d": "M8 16h.01"
      }
    ]
  ],
  "file-check-2": [
    [
      "path",
      {
        "d": "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"
      }
    ],
    [
      "path",
      {
        "d": "M14 2v5a1 1 0 0 0 1 1h5"
      }
    ],
    [
      "path",
      {
        "d": "m14 20 2 2 4-4"
      }
    ]
  ],
  "shopping-cart": [
    [
      "circle",
      {
        "cx": "8",
        "cy": "21",
        "r": "1"
      }
    ],
    [
      "circle",
      {
        "cx": "19",
        "cy": "21",
        "r": "1"
      }
    ],
    [
      "path",
      {
        "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
      }
    ]
  ],
  "map-pin": [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    [
      "circle",
      {
        "cx": "12",
        "cy": "10",
        "r": "3"
      }
    ]
  ],
  "target": [
    [
      "circle",
      {
        "cx": "12",
        "cy": "12",
        "r": "10"
      }
    ],
    [
      "circle",
      {
        "cx": "12",
        "cy": "12",
        "r": "6"
      }
    ],
    [
      "circle",
      {
        "cx": "12",
        "cy": "12",
        "r": "2"
      }
    ]
  ],
  "compass": [
    [
      "circle",
      {
        "cx": "12",
        "cy": "12",
        "r": "10"
      }
    ],
    [
      "path",
      {
        "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      }
    ]
  ],
  "badge-check": [
    [
      "path",
      {
        "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    [
      "path",
      {
        "d": "m9 12 2 2 4-4"
      }
    ]
  ],
  "handshake": [
    [
      "path",
      {
        "d": "m11 17 2 2a1 1 0 1 0 3-3"
      }
    ],
    [
      "path",
      {
        "d": "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
      }
    ],
    [
      "path",
      {
        "d": "m21 3 1 11h-2"
      }
    ],
    [
      "path",
      {
        "d": "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
      }
    ],
    [
      "path",
      {
        "d": "M3 4h8"
      }
    ]
  ],
  "sparkles": [
    [
      "path",
      {
        "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
      }
    ],
    [
      "path",
      {
        "d": "M20 2v4"
      }
    ],
    [
      "path",
      {
        "d": "M22 4h-4"
      }
    ],
    [
      "circle",
      {
        "cx": "4",
        "cy": "20",
        "r": "2"
      }
    ]
  ],
  "arrow-right": [
    [
      "path",
      {
        "d": "M5 12h14"
      }
    ],
    [
      "path",
      {
        "d": "m12 5 7 7-7 7"
      }
    ]
  ],
  "graduation-cap": [
    [
      "path",
      {
        "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    [
      "path",
      {
        "d": "M22 10v6"
      }
    ],
    [
      "path",
      {
        "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
      }
    ]
  ],
  "arrow-left": [
    [
      "path",
      {
        "d": "m12 19-7-7 7-7"
      }
    ],
    [
      "path",
      {
        "d": "M19 12H5"
      }
    ]
  ],
  "message-circle": [
    [
      "path",
      {
        "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ]
  ],
  "calendar-check": [
    [
      "path",
      {
        "d": "M8 2v4"
      }
    ],
    [
      "path",
      {
        "d": "M16 2v4"
      }
    ],
    [
      "rect",
      {
        "width": "18",
        "height": "18",
        "x": "3",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "M3 10h18"
      }
    ],
    [
      "path",
      {
        "d": "m9 16 2 2 4-4"
      }
    ]
  ],
  "phone": [
    [
      "path",
      {
        "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
      }
    ]
  ],
  "mail": [
    [
      "path",
      {
        "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
      }
    ],
    [
      "rect",
      {
        "x": "2",
        "y": "4",
        "width": "20",
        "height": "16",
        "rx": "2"
      }
    ]
  ],
  "clock-3": [
    [
      "circle",
      {
        "cx": "12",
        "cy": "12",
        "r": "10"
      }
    ],
    [
      "path",
      {
        "d": "M12 6v6h4"
      }
    ]
  ],
  "monitor-smartphone": [
    [
      "path",
      {
        "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
      }
    ],
    [
      "path",
      {
        "d": "M10 19v-3.96 3.15"
      }
    ],
    [
      "path",
      {
        "d": "M7 19h5"
      }
    ],
    [
      "rect",
      {
        "width": "6",
        "height": "10",
        "x": "16",
        "y": "12",
        "rx": "2"
      }
    ]
  ],
  "radio-tower": [
    [
      "path",
      {
        "d": "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
      }
    ],
    [
      "path",
      {
        "d": "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12",
        "cy": "9",
        "r": "2"
      }
    ],
    [
      "path",
      {
        "d": "M16.2 4.8c2 2 2.26 5.11.8 7.47"
      }
    ],
    [
      "path",
      {
        "d": "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
      }
    ],
    [
      "path",
      {
        "d": "M9.5 18h5"
      }
    ],
    [
      "path",
      {
        "d": "m8 22 4-11 4 11"
      }
    ]
  ],
  "armchair": [
    [
      "path",
      {
        "d": "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"
      }
    ],
    [
      "path",
      {
        "d": "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
      }
    ],
    [
      "path",
      {
        "d": "M5 18v2"
      }
    ],
    [
      "path",
      {
        "d": "M19 18v2"
      }
    ]
  ],
  "truck": [
    [
      "path",
      {
        "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
      }
    ],
    [
      "path",
      {
        "d": "M15 18H9"
      }
    ],
    [
      "path",
      {
        "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
      }
    ],
    [
      "circle",
      {
        "cx": "17",
        "cy": "18",
        "r": "2"
      }
    ],
    [
      "circle",
      {
        "cx": "7",
        "cy": "18",
        "r": "2"
      }
    ]
  ]
};
  const namespace = "http://www.w3.org/2000/svg";
  document.querySelectorAll("[data-lucide], svg[data-icon]").forEach(function (placeholder) {
    const name = placeholder.getAttribute("data-lucide") || placeholder.getAttribute("data-icon");
    const shapes = iconNodes[name];
    if (!shapes) return;
    if (placeholder.tagName.toLowerCase() === "svg" && placeholder.children.length) return;
    const svg = document.createElementNS(namespace, "svg");
    const classes = placeholder.getAttribute("class") || "";
    svg.setAttribute("class", "icon " + classes);
    svg.setAttribute("data-icon", name);
    svg.setAttribute("xmlns", namespace);
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    shapes.forEach(function (shape) {
      const node = document.createElementNS(namespace, shape[0]);
      Object.keys(shape[1]).forEach(function (attribute) {
        node.setAttribute(attribute, shape[1][attribute]);
      });
      svg.appendChild(node);
    });
    placeholder.replaceWith(svg);
  });
}

/* Baraka Daya Unggul — JavaScript murni, tanpa framework. */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  renderBarakaIcons();

  const menu = document.getElementById("mobile-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const dropdowns = Array.from(document.querySelectorAll(".services-dropdown"));
  const pages = Array.from(document.querySelectorAll(".page-view"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopHover = window.matchMedia("(min-width: 1024px) and (hover: hover)");
  const originalTitle = document.title;

  function setDropdown(dropdown, open) {
    dropdown.querySelector(".services-toggle").setAttribute("aria-expanded", String(open));
    dropdown.querySelector(".services-menu").hidden = !open;
  }
  function closeDropdowns() {
    dropdowns.forEach(function (dropdown) { setDropdown(dropdown, false); });
  }
  function closeMobileMenu() {
    menu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  }

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector(".services-toggle");
    const links = Array.from(dropdown.querySelectorAll(".services-menu .page-link"));
    const isMobile = dropdown.classList.contains("services-dropdown--mobile");
    trigger.addEventListener("click", function () {
      const open = !isMobile && desktopHover.matches ? true : trigger.getAttribute("aria-expanded") !== "true";
      closeDropdowns();
      setDropdown(dropdown, open);
    });
    dropdown.addEventListener("mouseenter", function () {
      if (desktopHover.matches && !isMobile) {
        closeDropdowns();
        setDropdown(dropdown, true);
      }
    });
    dropdown.addEventListener("mouseleave", function () {
      if (!isMobile && !dropdown.contains(document.activeElement)) setDropdown(dropdown, false);
    });
    dropdown.addEventListener("focusout", function (event) {
      if (!dropdown.contains(event.relatedTarget)) setDropdown(dropdown, false);
    });
    dropdown.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        setDropdown(dropdown, false);
        trigger.focus();
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      setDropdown(dropdown, true);
      const current = links.indexOf(document.activeElement);
      let next;
      if (event.key === "Home") next = 0;
      else if (event.key === "End") next = links.length - 1;
      else if (current < 0) next = event.key === "ArrowUp" ? links.length - 1 : 0;
      else next = (current + (event.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links[next].focus();
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".services-dropdown")) closeDropdowns();
    if (!event.target.closest(".site-header")) closeMobileMenu();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !event.target.closest(".services-dropdown")) {
      closeDropdowns();
      if (!menu.classList.contains("hidden")) {
        closeMobileMenu();
        menuToggle.focus();
      }
    }
  });
  menuToggle.setAttribute("aria-label", "Buka menu");
  menuToggle.addEventListener("click", function () {
    const open = menu.classList.contains("hidden");
    menu.classList.toggle("hidden", !open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    if (!open) closeDropdowns();
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", function () {
    closeMobileMenu();
    closeDropdowns();
  });

  function showPage(name, updateHistory, focusHeading) {
    const target = document.getElementById(name + "-view");
    if (!target || !target.classList.contains("page-view")) return;
    closeDropdowns();
    closeMobileMenu();
    pages.forEach(function (page) { page.classList.toggle("active", page === target); });
    document.querySelectorAll(".nav-link").forEach(function (link) {
      const active = link.dataset.page === name || (name.startsWith("service-") && link.dataset.page === "services");
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    document.querySelectorAll(".services-menu .page-link").forEach(function (link) {
      if (link.dataset.page === name) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    const heading = target.querySelector("h1");
    document.title = name === "home" ? originalTitle : (heading ? heading.textContent.trim() + " | Baraka Daya Unggul" : originalTitle);
    if (updateHistory && window.location.hash !== "#" + name) history.pushState(null, "", "#" + name);
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? "auto" : "smooth" });
    if (focusHeading && heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
    restartAutoplay();
  }
  document.querySelectorAll(".page-link").forEach(function (link) {
    link.addEventListener("click", function () { showPage(link.dataset.page, true, true); });
  });
  function routeFromHash() {
    const name = window.location.hash.slice(1);
    return pages.some(function (page) { return page.id === name + "-view"; }) ? name : "home";
  }
  window.addEventListener("popstate", function () { showPage(routeFromHash(), false, true); });
  window.addEventListener("hashchange", function () {
    const name = routeFromHash();
    if (!document.getElementById(name + "-view").classList.contains("active")) showPage(name, false, true);
  });

  const carousel = document.getElementById("hero-slider");
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  const pauseButton = document.getElementById("hero-pause");
  let currentSlide = 0;
  let autoplayTimer;
  let pausedByUser = reducedMotion.matches;
  let interacting = false;

  function goToSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      const active = i === currentSlide;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    dots.forEach(function (dot, i) {
      const active = i === currentSlide;
      dot.classList.toggle("active", active);
      if (active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }
  function restartAutoplay() {
    clearInterval(autoplayTimer);
    const homeActive = document.getElementById("home-view").classList.contains("active");
    if (slides.length > 1 && homeActive && !pausedByUser && !interacting && !document.hidden) {
      autoplayTimer = setInterval(function () { goToSlide(currentSlide + 1); }, 7000);
    }
  }
  function updatePauseButton() {
    if (!pauseButton) return;
    pauseButton.setAttribute("aria-pressed", String(pausedByUser));
    pauseButton.setAttribute("aria-label", pausedByUser ? "Lanjutkan pergantian banner otomatis" : "Jeda pergantian banner otomatis");
    pauseButton.textContent = pausedByUser ? "Putar" : "Jeda";
  }
  document.getElementById("hero-prev").addEventListener("click", function () {
    goToSlide(currentSlide - 1); restartAutoplay();
  });
  document.getElementById("hero-next").addEventListener("click", function () {
    goToSlide(currentSlide + 1); restartAutoplay();
  });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () { goToSlide(i); restartAutoplay(); });
  });
  if (pauseButton) pauseButton.addEventListener("click", function () {
    pausedByUser = !pausedByUser; updatePauseButton(); restartAutoplay();
  });
  carousel.addEventListener("mouseenter", function () { interacting = true; restartAutoplay(); });
  carousel.addEventListener("mouseleave", function () { interacting = carousel.contains(document.activeElement); restartAutoplay(); });
  carousel.addEventListener("focusin", function () { interacting = true; restartAutoplay(); });
  carousel.addEventListener("focusout", function (event) {
    interacting = carousel.contains(event.relatedTarget); restartAutoplay();
  });
  document.addEventListener("visibilitychange", restartAutoplay);
  reducedMotion.addEventListener("change", function () {
    pausedByUser = reducedMotion.matches; updatePauseButton(); restartAutoplay();
  });

  // Hanya tampilkan foto galeri jika dokumentasi asli tersedia.
  document.querySelectorAll(".gallery-photo[data-gallery-src]").forEach(function (photo) {
    photo.addEventListener("load", function () {
      photo.hidden = false;
      const tile = photo.closest(".gallery-tile");
      tile.classList.add("has-photo");
      tile.querySelector(".gallery-empty").hidden = true;
    });
    photo.addEventListener("error", function () { photo.hidden = true; });
    photo.src = photo.dataset.gallerySrc;
  });
  goToSlide(0);
  updatePauseButton();
  showPage(routeFromHash(), false, false);
});
