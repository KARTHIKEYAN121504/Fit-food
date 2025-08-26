// Small JavaScript for dropdown mobile toggle
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown > a");
  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    const content = dropdown.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
// JavaScript for "Back to the top" functionality
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });