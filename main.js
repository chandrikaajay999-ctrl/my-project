// main.js
// Basic interactivity

document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");

  // Example: Smooth scroll for internal links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
