const navItems = document.querySelectorAll(".nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

const openNav = () => {
  navItems.forEach((item) => {
    item.style.display = "flex";
  });
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

const closeNav = () => {
  navItems.forEach((item) => {
    item.style.display = "none";
  });
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);

const sidebar = document.querySelector("aside"); // Menggunakan 'aside' untuk sidebar
const showSidebarBtn = document.querySelector("#show__sidebar-btn");
const hideSidebarBtn = document.querySelector("#hide__sidebar-btn");

const showSidebar = () => {
  sidebar.style.left = "0"; // Memunculkan sidebar
  showSidebarBtn.style.display = "none"; // Sembunyikan tombol show
  hideSidebarBtn.style.display = "inline-block"; // Tampilkan tombol hide
};

const hideSidebar = () => {
  sidebar.style.left = "-100%"; // Menyembunyikan sidebar
  showSidebarBtn.style.display = "inline-block"; // Tampilkan tombol show
  hideSidebarBtn.style.display = "none"; // Sembunyikan tombol hide
};

showSidebarBtn.addEventListener("click", showSidebar);
hideSidebarBtn.addEventListener("click", hideSidebar); // Menggunakan hideSidebarBtn di sini
