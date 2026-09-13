document.addEventListener("DOMContentLoaded", () => {
  // MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // SCROLL REVEAL ANIMATION
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // PROJECT FILTER
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.textContent.trim();

      projectCards.forEach((card) => {
        const category = card.querySelector("span")?.textContent.trim();
        const clientType = card
          .querySelector("small")
          ?.textContent.replace("Client type:", "")
          .trim();

        card.style.display =
          filter === "All" ||
          category === filter ||
          clientType === filter
            ? ""
            : "none";
      });
    });
  });

  // CLOSE MOBILE MENU ON RESIZE
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100 && mainNav && menuToggle) {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});