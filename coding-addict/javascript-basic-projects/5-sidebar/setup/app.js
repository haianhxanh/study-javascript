const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const toggleSidebar = () => {
  sidebar.classList.toggle("show-sidebar");
};
toggleBtn.addEventListener("click", () => {
  toggleSidebar();
});
closeBtn.addEventListener("click", () => {
  toggleSidebar();
});
