// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");
});

//side-bar

document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".open-sidebar-btn");
  const closeBtn = document.querySelector(".close-sidebar-btn");
  const sidebar = document.querySelector(".sidebar");

  openBtn.addEventListener("click", function () {
    sidebar.classList.add("open");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });
});
