
document.addEventListener("DOMContentLoaded", function () {

  // Mobile Menu
  const menu = document.querySelector(".nav-menu");
  const toggle = document.querySelector(".menu-toggle");

  if (menu && toggle) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Gallery Image Preview
  document.querySelectorAll(".gallery img").forEach(function (img) {
    img.addEventListener("click", function () {
      const preview = document.createElement("div");

      preview.style.cssText =
        "position:fixed;inset:0;background:#000e;display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer;padding:20px;";

      const image = document.createElement("img");
      image.src = this.src;
      image.style.cssText = "max-width:95%;max-height:90%;";

      preview.appendChild(image);
      document.body.appendChild(preview);

      preview.addEventListener("click", function () {
        preview.remove();
      });
    });
  });

  // Current Year
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Back to Top
  const topButton = document.getElementById("backToTop");

  if (topButton) {
    topButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});
