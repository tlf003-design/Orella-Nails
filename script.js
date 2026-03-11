// ============================
// Global JavaScript (all pages)
// ============================

document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // 1. Mobile Menu Toggle
  // ======================
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // ======================
  // 2. Review Form (Home)
  // ======================
  const toggleButton = document.getElementById("toggle-review");
  const reviewForm = document.getElementById("review-form");

  if (toggleButton && reviewForm) {
    reviewForm.style.display = "none"; // hide initially

    toggleButton.addEventListener("click", () => {
      if (reviewForm.style.display === "none") {
        reviewForm.style.display = "block";
        toggleButton.textContent = "Close Review Form";
      } else {
        reviewForm.style.display = "none";
        toggleButton.textContent = "Add Your Review";
      }
    });
  }

  // ======================
  // 3. FAQ Ask Question Form
  // ======================
  const askBtn = document.getElementById("ask-question-btn");
  const askForm = document.getElementById("ask-question-form");
  const closeForm = document.getElementById("close-form");

  if (askBtn && askForm && closeForm) {
    askForm.classList.add("hidden"); // hide initially

    askBtn.addEventListener("click", () => {
      askForm.classList.remove("hidden");
    });

    closeForm.addEventListener("click", () => {
      askForm.classList.add("hidden");
    });
  }

  // ======================
  // 4. Booking Page (Optional)
  // ======================
  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your booking request has been submitted.");
      bookingForm.reset();
    });
  }

  // ======================
  // 5. Contact Form (Optional)
  // ======================
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting us! We’ll get back to you soon.");
      contactForm.reset();
    });
  }
});






