// Navbar toggle
const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");
const dropdowns = document.querySelectorAll('.navbar-menu li.dropdown');

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Dropdowns for mobile
dropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {
    drop.classList.toggle("active");
    e.stopPropagation(); // Prevent closing parent menu
  });
});

// Service cards reveal on scroll
function checkCards() {
  const serviceCards = document.querySelectorAll(".service-card");
  const triggerBottom = window.innerHeight * 0.9; // 90% of viewport height

  serviceCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

// Portfolio tab filter
const buttons = document.querySelectorAll(".tab-button");
const grids = document.querySelectorAll(".portfolio-grid");

if (buttons.length && grids.length) {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      grids.forEach((grid) => grid.classList.remove("active"));

      const targetGrid = document.getElementById(btn.dataset.tab);
      btn.classList.add("active");
      if (targetGrid) targetGrid.classList.add("active");
    });
  });
}

// FAQ toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-question");

  faqs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      if (!item) return;

      document.querySelectorAll(".faq-item").forEach((faq) => {
        if (faq !== item) faq.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

  // Reveal sections on scroll
  const sections = document.querySelectorAll(
    "section, .services-section, .our-work, .about-section, .contact-section"
  );

  const revealOnScroll = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});

// Intersection observer for portfolio items
const portfolioObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".portfolio-grid, .portfolio-card").forEach((el) => {
  portfolioObserver.observe(el);
});

// Intersection observer for key sections (footer, nav, faq, etc.)
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(
  'nav, section, .faq-section, .faq-item, .footer'
).forEach((el) => observer2.observe(el));

// 👇 YOUR NEW PRICING SECTION INTERSECTION OBSERVER
const pricingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('#pricing, .pricing-header, .pricing-intro, .pricing-card, .cta')
  .forEach((el) => pricingObserver.observe(el));

// Optional: reveal-on-scroll for other specific sections
const sections2 = document.querySelectorAll(
  "section, .about-section, .team-section, .founder-section, .hire-section, .about-image img"
);

const revealOnScroll2 = () => {
  sections2.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll2);
window.addEventListener("load", revealOnScroll2);
