const menuBtn = document.querySelector(".menu-icon");
const sideMenuBar = document.querySelector(".side-menu-bar");
const searchBar = document.querySelector(".search");
const menuList = document.querySelector(".menu-list");
const menuIcon1 = document.querySelector(".bx-menu");
const menuIcon2 = document.querySelector(".bx-menu-alt-left");

menuBtn.onclick = (()=>{
    menuBtn.classList.toggle("active");
    sideMenuBar.classList.toggle("width");
    searchBar.classList.toggle("show");
    menuList.classList.toggle("show1");
    menuIcon1.classList.toggle("bxx");
    menuIcon2.classList.toggle("bxxx");
});