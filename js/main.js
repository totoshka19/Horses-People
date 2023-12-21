// ---------- Header Toggle Start ---------- //
let menuBtn = document.getElementById("menuBtn");
let menuList = document.querySelector(".header__nav");
menuBtn.addEventListener("click", ()=> {
    // document.querySelector("body").classList.toggle("toggle-header");
    menuBtn.classList.toggle("fa-xmark");
    menuList.classList.toggle("open");
});
// ---------- Header Toggle End ---------- //



