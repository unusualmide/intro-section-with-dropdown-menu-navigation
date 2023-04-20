"use strict";

let menuFeatures = document.querySelector(".menu-features");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const dropMenu = document.querySelector(".drop-menu");

function features() {
  dropMenu.classList.toggle("hidden");
  arrowUp.classList.toggle("hidden");
  arrowDown.classList.toggle("hidden");
}

menuFeatures.addEventListener("click", features);

const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu");
const blackBackground = document.querySelector(".blackbackground");
menu.addEventListener("click", function () {
  sideBar.classList.remove("hidden");
  blackBackground.classList.remove("hidden");
});

const iconCloseMenu = document.querySelector(".iconclosemenu");

iconCloseMenu.addEventListener("click", function () {
  sideBar.classList.add("hidden");
  blackBackground.classList.add("hidden");
});

let menuMobile = document.querySelector(".menu-mobile");
const mobileUp = document.querySelector(".arrowup");
const mobileDown = document.querySelector(".arrowdown");
const dropMobile = document.querySelector(".drop-mobile");

menuMobile.addEventListener("click", function () {
  dropMobile.classList.toggle("hidden");
  mobileUp.classList.toggle("hidden");
  mobileDown.classList.toggle("hidden");
});

let companyMobile = document.querySelector(".menu-company");
const companyDown = document.querySelector(".companyarrowdown");
const companyDrop = document.querySelector(".company-drop");

companyMobile.addEventListener("click", function () {
  companyDown.classList.toggle("hidden");
  companyDrop.classList.toggle("hidden");
});

let menuLarge = document.querySelector(".menu-large");
const downLarge = document.querySelector(".arrowdownlarge");
const upLarge = document.querySelector(".arrowuplarge");
const dropLarge = document.querySelector(".dropmenularge");

menuLarge.addEventListener("click", function () {
  dropLarge.classList.toggle("hidden");
  downLarge.classList.toggle("hidden");
  upLarge.classList.toggle("hidden");
});
