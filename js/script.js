const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const mobileNav = document.querySelector("nav ul");
  const checkbox = document.getElementById("nav-toggle");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("slide");
      checkbox.checked = false;
    });
  });
});