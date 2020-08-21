const anchors = document.querySelectorAll("a.scrl-m");
const menuPop = document.querySelector(".menu_pop");
const menuBtn = document.querySelector(".menu_btn");
const menuPopItems = document.querySelectorAll(".menu_pop a");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// jQuery(document).ready(function ($) {
//   $(".menu_btn").click(function () {
//     $(this).toggleClass("menu_btn_active");
//     $(".menu_pop").toggleClass("menu_pop_active");
//   });
// });
for (let item of menuPopItems) {
  item.addEventListener("click", function (e) {
    menuToggle(e);
  });
}

menuBtn.addEventListener("click", menuToggle);
function menuToggle(e) {
  e.preventDefault();
  menuBtn.classList.toggle("menu_btn_active");
  menuPop.classList.toggle("menu_pop_active");
}
