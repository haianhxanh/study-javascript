// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const toggleNav = () => {
  links.classList.toggle("show-links");
};
navToggle.addEventListener("click", () => {
  toggleNav();
});

navToggle.addEventListener("mouseover", () => {
  toggleNav();
});

navToggle.addEventListener("mouseout", () => {
  toggleNav();
});
