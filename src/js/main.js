import { gsap } from "gsap";

let tl = gsap.timeline();

gsap.set(".header", {opacity:0});

tl.to(".header", { 
  opacity: 1, duration: 0.8, ease: "expo.in",
});

tl.to("nav", { 
  opacity: 1, duration: 0.5, ease: "power2.out",
});

tl.from(".fade-right", {
  x: -80,
  opacity: 0,
  skewY: 7,
  duration: 0.2,
  stagger: 0,
});

tl.from(".fade-up", {
  y: 80,
  opacity: 0,
  skewY: 7,
  duration: 0.2,
  stagger: 0,
});

const stripes = document.querySelectorAll(".stripe");

let tl2 = gsap.timeline({repeat: -1});

tl2.to(stripes,
  {scaleY: 100, duration:1, ease:"power3.out", stagger:0.05,}
);

tl2.to(stripes,
  {scaleY: 0, duration:1, ease:"power3.out", stagger:0.05, delay: 5}
);

const buttons = document.querySelectorAll(".hvr-btn");

buttons.forEach((btn) => {
  var ul = btn.querySelector(".btn-ul");
  // console.log(btn, ul)
  btn.addEventListener("mouseenter", () => {
    gsap.to(ul, {
      scaleX: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(ul, {
      scaleX: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  });
});

const glow = document.querySelectorAll(".glow-up");

glow.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.2,
      color: "#f0f0f0ff",
      duration: 0.2,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      color: "var(--text)",
      duration: 0.2,
      ease: "power2.out",
    });
  });
});

window.addEventListener("load", () => {
  const infText = document.querySelector(".infText");
  // console.log(infText.getBoundingClientRect().width);

  gsap.to(infText, {
    x:-infText.scrollWidth / 2,
    duration: 20,

    repeat:-1,
    ease: "none",
  });
});
