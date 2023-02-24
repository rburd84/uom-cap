import "./form.js";
import * as form from "./form.js";
// const menu = document.getElementById(".menu-burger");
// console.log(form.email);
// console.log(name);
// console.log(email);
const menu = document.querySelector(".menu-burger");
const nav = document.querySelector("nav");
const navList = document.querySelector(".nav-list");
const close = document.querySelector(".close");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".bx-right-arrow-alt");
const prev = document.querySelector(".bx-left-arrow-alt");
let curSlide = 0;
let maxSlides = slides.length - 1;

slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
});

// console.log(slides.style);

menu.addEventListener("click", () => {
  // menu.style.display = "none";
  navList.style.display = "flex";
  navList.style.flexDirection = "column";
  menu.style.display = "none";
  menu.style.marginLeft = 0;
  close.style.display = "block";
  nav.style.paddingRight = ".5rem";
  // console.log("hamburger clicked");
});

close.addEventListener("click", () => {
  navList.style.display = "none";
  menu.style.display = "block";
  menu.style.marginLeft = "auto";
  close.style.display = "none";
});

navList.addEventListener("click", (e) => {
  if (e.target.href) {
    // console.log(e.target);
    navList.style.display = "none";
    menu.style.display = "block";
    menu.style.marginLeft = "auto";
    close.style.display = "none";
  }
  // console.log(e.target.href);
});

next.addEventListener("click", () => {
  if (curSlide === maxSlides) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

prev.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = maxSlides;
  } else {
    curSlide--;
  }

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});
