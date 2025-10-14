// Navbar toggle
const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Wait for DOM
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const floatingMsg = document.getElementById("formMessage");
  const submitBtn = form.querySelector("button");

  // Inline messages
  const successMsg = document.getElementById("contactSuccess");
  const errorMsg = document.getElementById("contactError");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset inline messages
    successMsg.classList.remove("show");
    errorMsg.classList.remove("show");

    // Validation
    if (!name || !email || !subject || !message) {
      showMessage("error", "⚠️ Please fill in all fields.");
      showInlineMessage("error", "⚠️ Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage("error", "⚠️ Please enter a valid email address.");
      showInlineMessage("error", "⚠️ Please enter a valid email address.");
      return;
    }

    // Disable button while sending
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // EmailJS params
    const params = { name, email, subject, message };

    emailjs.send("service_tjeslph", "template_v308rj9", params)
      .then((response) => {
        console.log("EmailJS Success:", response); // DEBUG: log success
        showMessage("success", "✅ Message sent successfully!");
        showInlineMessage("success", "✅ Your message has been sent successfully!");
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err); // DEBUG: log error
        showMessage("error", "❌ Failed to send message. Please try again.");
        showInlineMessage("error", "❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      });
  });

  // Floating message
  function showMessage(type, text) {
    floatingMsg.textContent = text;
    floatingMsg.className = type + " show";

    setTimeout(() => {
      floatingMsg.classList.remove("show");
    }, 4000);
  }

  // Inline message
  function showInlineMessage(type, text) {
    if (type === "success") {
      successMsg.textContent = text;
      successMsg.classList.add("show");
    } else if (type === "error") {
      errorMsg.textContent = text;
      errorMsg.classList.add("show");
    }

    setTimeout(() => {
      successMsg.classList.remove("show");
      errorMsg.classList.remove("show");
    }, 4000);
  }
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

// Elements to animate
document.querySelectorAll(
  'nav, .contact-section, .contact-form, .contact-info, .footer'
).forEach((el) => observer.observe(el));
