// Filter testimonials by category
const filterButtons = document.querySelectorAll(".filter-btn");
const testimonialCards = document.querySelectorAll(".testimonial-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active and aria-selected from all buttons
    filterButtons.forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
      button.setAttribute("tabindex", "-1");
    });

    // Set current clicked button as active
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    btn.setAttribute("tabindex", "0");
    btn.focus();

    const filter = btn.getAttribute("data-filter");
    testimonialCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "flex";
        card.setAttribute("tabindex", "0");
      } else {
        card.style.display = "none";
        card.setAttribute("tabindex", "-1");
      }
    });
  });
});

// Watch Demo button focus and click with keyboard
const videoOverlay = document.querySelector(".video-overlay");
videoOverlay.addEventListener("click", () => {
  alert("Demo video would play here.");
});
videoOverlay.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    videoOverlay.click();
  }
});

// Hero buttons click events
document.getElementById("startBuildingBtn").addEventListener("click", () => {
  alert("Start Building button clicked.");
});
document.getElementById("scheduleDemoBtn").addEventListener("click", () => {
  alert("Schedule Demo button clicked.");
});
document.getElementById("startBuildingBottom").addEventListener("click", () => {
  alert("Start Building button clicked.");
});
document.getElementById("scheduleDemoBottom").addEventListener("click", () => {
  alert("Schedule Demo button clicked.");
});

// Header buttons click events
document.getElementById("sign-in").addEventListener("click", () => {
  alert("Sign in clicked.");
});
document.getElementById("register").addEventListener("click", () => {
  alert("Register clicked.");
});
