// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  // Close menu when a navigation link is clicked
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const clickedInsideNav =
      mainNav.contains(event.target) ||
      menuToggle.contains(event.target);

    if (!clickedInsideNav) {
      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }
  });

  // Close menu with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      mainNav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuToggle.focus();
    }
  });
}


// =========================================================
// SMOOTH SCROLLING
// =========================================================

const internalLinks = document.querySelectorAll(
  'a[href^="#"]'
);

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// =========================================================
// ACTIVE NAVIGATION
// =========================================================

const sections = document.querySelectorAll(
  "main section[id]"
);

const navLinks = document.querySelectorAll(
  ".nav-link"
);

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const currentId = entry.target.id;

        navLinks.forEach((link) => {
          const isCurrent =
            link.getAttribute("href") === `#${currentId}`;

          link.classList.toggle("active", isCurrent);
        });
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
}


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements = document.querySelectorAll(
  ".reveal"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


// =========================================================
// CURRENT YEAR
// =========================================================

const currentYear = document.getElementById(
  "current-year"
);

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// =========================================================
// HEADER SHADOW ON SCROLL
// =========================================================

const siteHeader = document.getElementById(
  "site-header"
);

if (siteHeader) {
  const updateHeader = () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }
  };

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();
}
