/* =========================================================
   TOLUWASE VICTOR ESAN — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });

    // Close mobile menu after clicking a navigation link
    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });

    // Close menu if user taps outside it
    document.addEventListener("click", (event) => {
      const clickedInsideMenu =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

      if (!clickedInsideMenu) {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("active");
      }
    });
  }


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  const header = document.querySelector(".site-header");

  const updateHeader = () => {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", updateHeader, {
    passive: true
  });

  updateHeader();


  /* =======================================================
     SCROLL REVEAL ANIMATIONS
     ======================================================= */

  const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .highlight-card, " +
    ".timeline-item, .skill-card, .featured-project, " +
    ".project-card, .education-card, .cert-card, " +
    ".contact-card"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });


  /* =======================================================
     ACTIVE NAVIGATION
     ======================================================= */

  const sections = document.querySelectorAll("main section[id]");
  const navigationLinks = document.querySelectorAll(".nav-link");

  const updateActiveNavigation = () => {

    let currentSection = "";

    sections.forEach((section) => {

      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }

    });

    navigationLinks.forEach((link) => {

      link.classList.remove("active");

      const href = link.getAttribute("href");

      if (href === `#${currentSection}`) {
        link.classList.add("active");
      }

    });
  };

  window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
  });

  updateActiveNavigation();


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  /* =======================================================
     SMOOTH SCROLL FOR INTERNAL LINKS
     ======================================================= */

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#" ||
        targetId === "#top"
      ) {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     BUTTON / CARD HOVER DEPTH
     ======================================================= */

  const interactiveCards = document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .highlight-card"
  );

  interactiveCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

      // Disable effect on small screens
      if (window.innerWidth < 800) return;

      const rect = card.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 4;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * -4;

      card.style.transform =
        `translateY(-4px) rotateX(${y}deg) rotateY(${x}deg)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform = "";

    });

  });


  /* =======================================================
     YEAR / PAGE READY
     ======================================================= */

  document.body.classList.add("page-loaded");

});
