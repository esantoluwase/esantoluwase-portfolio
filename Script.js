// ================================
// Prova / Toluwase Portfolio
// Main JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // Mobile Navigation
  // -------------------------------

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {

    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }


  // -------------------------------
  // Dynamic Copyright Year
  // -------------------------------

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // -------------------------------
  // Scroll Reveal Animation
  // -------------------------------

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

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


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  // -------------------------------
  // Header Shadow on Scroll
  // -------------------------------

  const header = document.querySelector(".site-header");

  if (header) {

    const handleScroll = () => {

      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
  }


  // -------------------------------
  // Smooth Scrolling
  // -------------------------------

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  internalLinks.forEach(link => {

    link.addEventListener("click", event => {

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


  // -------------------------------
  // Active Navigation Link
  // -------------------------------

  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );

  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const id = entry.target.getAttribute("id");

          navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }

          });

        }

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  // -------------------------------
  // External Links
  // -------------------------------

  const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
  );

  externalLinks.forEach(link => {

    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );

  });


  // -------------------------------
  // Prevent Empty Placeholder Links
  // -------------------------------

  const placeholderLinks = document.querySelectorAll(
    'a[href="YOUR_LINKEDIN_URL"], a[href="YOUR_GITHUB_URL"]'
  );

  placeholderLinks.forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      alert(
        "Please update this link with your actual profile URL."
      );

    });

  });


  // -------------------------------
  // Simple Console Message
  // -------------------------------

  console.log(
    "Toluwase Victor Portfolio loaded successfully."
  );

  console.log(
    "Founder • Web Developer • AI & EdTech Builder • Product & Technology Strategist"
  );

});
