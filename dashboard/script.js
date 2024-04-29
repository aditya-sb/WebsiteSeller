const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");

menu.addEventListener("click", () => {
  // Toggle the 'active' class on the sidebar
  sidebar.classList.toggle("visible");
});

function navigateTo(url) {
  location.href = url;
}



