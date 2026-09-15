document.addEventListener("DOMContentLoaded", () => {

  // =========================================
  // MOBILE NAVIGATION
  // =========================================

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }


  // =========================================
  // LANGUAGE SYSTEM - EN / BM
  // =========================================

  const languageToggle =
    document.getElementById("languageToggle");

  const currentLanguageText =
    document.getElementById("currentLanguage");

  const nextLanguageText =
    document.getElementById("nextLanguage");


  const translations = {

    en: {

      // NAVIGATION
      navHome: "Home",
      navAbout: "About",
      navSolutions: "Solutions",
      navAgriculture: "Agriculture",
      navTraining: "Training",
      navProducts: "Products",
      navProjects: "Projects",
      navNews: "News",

      contact: "Contact",
      requestService: "Request Service",

      // HERO
      heroEyebrow:
        "DRONE TECHNOLOGY × AGRICULTURE",

      heroTitle:
        "Transforming Agriculture Through Drone Technology",

      heroDescription:
        "Professional drone solutions, agricultural services and industry-focused training for organisations across Malaysia.",

      exploreSolutions:
        "Explore Solutions",

      heroPoint1:
        "Professional operations",

      heroPoint2:
        "Malaysia-wide coverage",

      heroPoint3:
        "Agriculture focused",

      // ABOUT
      aboutTitle:
        "Drone technology for real-world agriculture",

      aboutDescription:
        "We help organisations modernise agricultural operations with practical drone technology, professional services and capability-building training designed for real field conditions.",

      learnMore:
        "Learn More",

      // SOLUTIONS
      solutionsLabel:
        "Our Solutions",

      solutionsTitle:
        "Practical drone technology for modern agriculture",

      solutionsDescription:
        "Practical drone technology designed for modern agriculture and professional operations.",

      droneSolutions:
        "Drone Solutions",

      droneSolutionsDesc:
        "Assembly, sales, rental and technical drone services.",

      agriculturalServices:
        "Agricultural Services",

      agriculturalServicesDesc:
        "Spraying, mapping and paddy seeding.",

      droneTraining:
        "Drone Training",

      droneTrainingDesc:
        "Professional training for organisations and individuals.",

      productsRental:
        "Products & Rental",

      productsRentalDesc:
        "Drone equipment and related solutions.",

      explore:
        "Explore",

      // AGRICULTURE
      agricultureLabel:
        "DRONE-POWERED AGRICULTURE",

      agricultureTitle:
        "Modern solutions for agricultural operations",

      agriculturalSpraying:
        "Agricultural Spraying",

      droneMapping:
        "Drone Mapping",

      paddySeeding:
        "Paddy Seeding",

      hillPaddySeeding:
        "Hill Paddy Seeding",

      exploreAgriculture:
        "Explore Agriculture",

      precisionLabel:
        "Precision From Above",

      precisionTitle:
        "Drone technology built for practical field application",

      precisionDescription:
        "From coverage planning to efficient field operations, drone technology brings a more practical and responsive way to support agricultural work.",

      efficientCoverage:
        "Efficient coverage",

      practicalOperation:
        "Practical operation",

      modernTechnology:
        "Modern technology",

      suitableAgriculture:
        "Suitable agricultural applications",

      requestAgriculture:
        "Request Agricultural Service",

      // TRAINING
      trainingLabel:
        "Learn. Operate. Innovate.",

      trainingTitle:
        "Practical drone training for organisations and individuals",

      trainingDescription:
        "Professional drone training for organisations and individuals across Malaysia.",

      government:
        "Government",

      university:
        "University",

      corporate:
        "Corporate",

      community:
        "Community",

      individual:
        "Individual",

      exploreTraining:
        "Explore Training",

      // PRODUCTS
      productsLabel:
        "Products",

      productsTitle:
        "Professional equipment for modern field operations",

      agriculturalDrone:
        "Agricultural Drone",

      agriculturalDroneDesc:
        "Built for agricultural performance and practical field use.",

      mappingDrone:
        "Mapping Drone",

      mappingDroneDesc:
        "Reliable aerial capability for data and field observation.",

      accessories:
        "Accessories",

      accessoriesDesc:
        "Essential components designed to support efficient operation.",

      equipment:
        "Equipment",

      equipmentDesc:
        "Field-ready tools and systems for professional drone use.",

      requestPrice:
        "Request Price",

      // PROJECTS
      projectShowcase:
        "Project Showcase",

      projectTitle:
        "Demonstrated capability across agriculture and operations",

      // COVERAGE
      coverageLabel:
        "Malaysia Coverage",

      coverageTitle:
        "Drone solutions across Malaysia",

      coverageDescription:
        "Providing drone services and professional training for organisations across Malaysia.",

      // WHY US
      whyChoose:
        "Why Choose Us",

      whyTitle:
        "Focused capability for modern agricultural operations",

      // NEWS
      newsLabel:
        "News & Activities",

      newsTitle:
        "Updates from the field and industry",

      readMore:
        "Read More",

      // FINAL CTA
      finalLabel:
        "Ready to Take Your Operations Higher?",

      finalTitle:
        "Talk to us about drone solutions, agricultural services or training.",

      contactUs:
        "Contact Us",

      // FOOTER
      company:
        "Company",

      exploreFooter:
        "Explore",

      aboutUs:
        "About Us",

      whatsappUs:
        "WhatsApp Us"
    },


    bm: {

      // NAVIGATION
      navHome: "Utama",
      navAbout: "Tentang Kami",
      navSolutions: "Penyelesaian",
      navAgriculture: "Pertanian",
      navTraining: "Latihan",
      navProducts: "Produk",
      navProjects: "Projek",
      navNews: "Berita",

      contact: "Hubungi",
      requestService: "Mohon Perkhidmatan",

      // HERO
      heroEyebrow:
        "TEKNOLOGI DRON × PERTANIAN",

      heroTitle:
        "Transformasi Pertanian Melalui Teknologi Dron",

      heroDescription:
        "Penyelesaian dron profesional, perkhidmatan pertanian dan latihan berfokuskan industri untuk organisasi di seluruh Malaysia.",

      exploreSolutions:
        "Terokai Penyelesaian",

      heroPoint1:
        "Operasi profesional",

      heroPoint2:
        "Liputan seluruh Malaysia",

      heroPoint3:
        "Berfokuskan pertanian",

      // ABOUT
      aboutTitle:
        "Teknologi dron untuk pertanian dunia sebenar",

      aboutDescription:
        "Kami membantu organisasi memodenkan operasi pertanian melalui teknologi dron praktikal, perkhidmatan profesional dan latihan pembangunan kemahiran yang direka untuk keadaan sebenar di lapangan.",

      learnMore:
        "Ketahui Lebih Lanjut",

      // SOLUTIONS
      solutionsLabel:
        "Penyelesaian Kami",

      solutionsTitle:
        "Teknologi dron praktikal untuk pertanian moden",

      solutionsDescription:
        "Teknologi dron praktikal yang direka untuk pertanian moden dan operasi profesional.",

      droneSolutions:
        "Penyelesaian Dron",

      droneSolutionsDesc:
        "Pemasangan, jualan, sewaan dan perkhidmatan teknikal dron.",

      agriculturalServices:
        "Perkhidmatan Pertanian",

      agriculturalServicesDesc:
        "Penyemburan, pemetaan dan penaburan benih padi.",

      droneTraining:
        "Latihan Dron",

      droneTrainingDesc:
        "Latihan profesional untuk organisasi dan individu.",

      productsRental:
        "Produk & Sewaan",

      productsRentalDesc:
        "Peralatan dron dan penyelesaian berkaitan.",

      explore:
        "Terokai",

      // AGRICULTURE
      agricultureLabel:
        "PERTANIAN DIPACU DRON",

      agricultureTitle:
        "Penyelesaian moden untuk operasi pertanian",

      agriculturalSpraying:
        "Penyemburan Pertanian",

      droneMapping:
        "Pemetaan Dron",

      paddySeeding:
        "Penaburan Benih Padi",

      hillPaddySeeding:
        "Penaburan Benih Padi Bukit",

      exploreAgriculture:
        "Terokai Pertanian",

      precisionLabel:
        "Ketepatan Dari Udara",

      precisionTitle:
        "Teknologi dron untuk aplikasi praktikal di lapangan",

      precisionDescription:
        "Daripada perancangan liputan hingga operasi lapangan yang cekap, teknologi dron menyediakan pendekatan yang lebih praktikal dan responsif untuk menyokong kerja pertanian.",

      efficientCoverage:
        "Liputan yang cekap",

      practicalOperation:
        "Operasi praktikal",

      modernTechnology:
        "Teknologi moden",

      suitableAgriculture:
        "Sesuai untuk aplikasi pertanian",

      requestAgriculture:
        "Mohon Perkhidmatan Pertanian",

      // TRAINING
      trainingLabel:
        "Belajar. Kendali. Inovasi.",

      trainingTitle:
        "Latihan dron praktikal untuk organisasi dan individu",

      trainingDescription:
        "Latihan dron profesional untuk organisasi dan individu di seluruh Malaysia.",

      government:
        "Kerajaan",

      university:
        "Universiti",

      corporate:
        "Korporat",

      community:
        "Komuniti",

      individual:
        "Individu",

      exploreTraining:
        "Terokai Latihan",

      // PRODUCTS
      productsLabel:
        "Produk",

      productsTitle:
        "Peralatan profesional untuk operasi lapangan moden",

      agriculturalDrone:
        "Dron Pertanian",

      agriculturalDroneDesc:
        "Direka untuk prestasi pertanian dan penggunaan praktikal di lapangan.",

      mappingDrone:
        "Dron Pemetaan",

      mappingDroneDesc:
        "Keupayaan udara yang boleh dipercayai untuk data dan pemantauan lapangan.",

      accessories:
        "Aksesori",

      accessoriesDesc:
        "Komponen penting untuk menyokong operasi yang cekap.",

      equipment:
        "Peralatan",

      equipmentDesc:
        "Peralatan dan sistem sedia lapangan untuk penggunaan dron profesional.",

      requestPrice:
        "Mohon Harga",

      // PROJECTS
      projectShowcase:
        "Paparan Projek",

      projectTitle:
        "Keupayaan terbukti dalam pertanian dan operasi",

      // COVERAGE
      coverageLabel:
        "Liputan Malaysia",

      coverageTitle:
        "Penyelesaian dron di seluruh Malaysia",

      coverageDescription:
        "Menyediakan perkhidmatan dron dan latihan profesional untuk organisasi di seluruh Malaysia.",

      // WHY US
      whyChoose:
        "Mengapa Pilih Kami",

      whyTitle:
        "Keupayaan khusus untuk operasi pertanian moden",

      // NEWS
      newsLabel:
        "Berita & Aktiviti",

      newsTitle:
        "Perkembangan dari lapangan dan industri",

      readMore:
        "Baca Lagi",

      // FINAL CTA
      finalLabel:
        "Bersedia Membawa Operasi Anda Lebih Tinggi?",

      finalTitle:
        "Hubungi kami mengenai penyelesaian dron, perkhidmatan pertanian atau latihan.",

      contactUs:
        "Hubungi Kami",

      // FOOTER
      company:
        "Syarikat",

      exploreFooter:
        "Terokai",

      aboutUs:
        "Tentang Kami",

      whatsappUs:
        "WhatsApp Kami"
    }
  };


  // =========================================
  // APPLY LANGUAGE
  // =========================================

  function applyLanguage(language) {

    document.documentElement.lang =
      language === "bm" ? "ms" : "en";

    document.querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.getAttribute("data-i18n");

        if (translations[language][key]) {
          element.textContent =
            translations[language][key];
        }

      });


    if (currentLanguageText && nextLanguageText) {

      if (language === "en") {
        currentLanguageText.textContent = "EN";
        nextLanguageText.textContent = "BM";
      } else {
        currentLanguageText.textContent = "BM";
        nextLanguageText.textContent = "EN";
      }

    }

    localStorage.setItem(
      "nkLanguage",
      language
    );
  }


  let currentLanguage =
    localStorage.getItem("nkLanguage") || "en";

  applyLanguage(currentLanguage);


  if (languageToggle) {

    languageToggle.addEventListener(
      "click",
      () => {

        currentLanguage =
          currentLanguage === "en"
            ? "bm"
            : "en";

        applyLanguage(currentLanguage);

      }
    );

  }


  // =========================================
  // SCROLL REVEAL ANIMATION
  // =========================================

  const revealItems =
    document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
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

    revealItems.forEach((item) =>
      revealObserver.observe(item)
    );

  } else {

    revealItems.forEach((item) =>
      item.classList.add("visible")
    );

  }


  // =========================================
  // PROJECT FILTER
  // =========================================

  const filterButtons =
    document.querySelectorAll(".filter-btn");

  const projectCards =
    document.querySelectorAll(".project-card");


  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      filterButtons.forEach((btn) =>
        btn.classList.remove("active")
      );

      button.classList.add("active");

      const filter =
        button.dataset.filter ||
        button.textContent.trim();

      projectCards.forEach((card) => {

        const category =
          card.dataset.category ||
          card.querySelector("span")
            ?.textContent.trim();

        const clientType =
          card.dataset.client ||
          card
            .querySelector("small")
            ?.textContent
            .replace("Client type:", "")
            .trim();

        card.style.display =
          filter === "All" ||
          filter === "Semua" ||
          category === filter ||
          clientType === filter
            ? ""
            : "none";

      });

    });

  });


  // =========================================
  // CLOSE MOBILE MENU ON RESIZE
  // =========================================

  window.addEventListener("resize", () => {

    if (
      window.innerWidth > 1100 &&
      mainNav &&
      menuToggle
    ) {

      mainNav.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

});