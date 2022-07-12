const menuOpen = document.querySelector(".btn-open");
const menuClose = document.querySelector(".btn-close");
const open = document.querySelector(".menu");
function openMenu() {
  open.classList.toggle("active");
}

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", openMenu);
