let hamburgerMenu = document.getElementById("hamburger-menu");
let navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
  })
);
