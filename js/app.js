const navbar = document.querySelector("#nav");
const btnClose = document.querySelector("#close-btn");
const navBtn = document.querySelector("#nav-btn");
const sidebar = document.querySelector("#sidebar");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// add sidebar menu
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

btnClose.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
