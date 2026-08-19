/* =========================================
   ESAN TOLUWASE VICTOR
   PORTFOLIO JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBILE MENU
     ========================================= */

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("active");
      });

    });

  }


  /* =========================================
     HEADER SCROLL EFFECT
     ========================================= */

  const header = document.getElementById("header");

  function handleHeader() {

    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", handleHeader);

  handleHeader();


  /* =========================================
     SCROLL REVEAL
     ========================================= */

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================================
     ACTIVE NAVIGATION
     ========================================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const currentId = entry.target.getAttribute("id");

        navLinks.forEach(link => {

          link.classList.remove("active");

          if (
            link.getAttribute("href") ===
            `#${currentId}`
          ) {

            link.classList.add("active");

          }

        });

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =========================================
     BACK TO TOP
     ========================================= */

  const backTop = document.getElementById("backTop");

  function handleBackTop() {

    if (!backTop) return;

    if (window.scrollY > 600) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }

  }

  window.addEventListener("scroll", handleBackTop);

  handleBackTop();


  if (backTop) {

    backTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =========================================
     SMOOTH INTERNAL LINKS
     ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
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


  /* =========================================
     CURRENT YEAR
     ========================================= */

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =========================================
     EXTERNAL LINKS
     ========================================= */

  document.querySelectorAll(
    'a[target="_blank"]'
  ).forEach(link => {

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


  /* =========================================
     SIMPLE MOUSE PARALLAX FOR HERO
     ========================================= */

  const heroVisual =
    document.querySelector(".hero-visual");

  if (
    heroVisual &&
    window.matchMedia("(min-width: 1000px)").matches
  ) {

    document.addEventListener("mousemove", event => {

      const x =
        (window.innerWidth / 2 - event.clientX) / 70;

      const y =
        (window.innerHeight / 2 - event.clientY) / 70;

      heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

    });

  }


  /* =========================================
     CONSOLE BRAND MESSAGE
     ========================================= */

  console.log(
    "%cEsan Toluwase Victor",
    "font-size:20px;font-weight:bold;color:#4A148C;"
  );

  console.log(
    "Digital Project Manager • Technology & Product Strategist • AI & EdTech Builder"
  );

});
