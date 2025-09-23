// Navbar toggle
const toggleButton = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Function to check if the service cards are visible on scroll
function checkCards() {
  const serviceCards = document.querySelectorAll(".service-card");
  const triggerBottom = window.innerHeight * 0.9; // 90% of the viewport height

  serviceCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("show"); // Adds class when the card is visible
    } else {
      card.classList.remove("show"); // Removes class when it's not visible
    }
  });
}

const buttons = document.querySelectorAll(".tab-button");
  const grids = document.querySelectorAll(".portfolio-grid");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active states
      buttons.forEach((b) => b.classList.remove("active"));
      grids.forEach((grid) => grid.classList.remove("active"));

      // Add active to clicked
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

// FAQ toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-question");

  faqs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item"); // parent .faq-item

      // Close all other items
      document.querySelectorAll(".faq-item").forEach((faq) => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      // Toggle the clicked one
      item.classList.toggle("active");
    });
  });
});

