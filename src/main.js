import './style.css'
import { gsap } from "gsap";

let tl = gsap.timeline()

tl.to("header", { 
  opacity: 1, duration: 0.5, y: 0, ease: "power2.out",
});

tl.to("nav", { 
  opacity: 1, duration: 0.5, y: 0, ease: "power2.out",
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


try {
  const block = document.querySelector(".block");

  block.addEventListener("mouseenter", () => {
    gsap.to(".block", 
      {x:100, duration:1, ease:"power2.out"}
    );
  });

  block.addEventListener("mouseleave", () => {
    gsap.to(".block", 
      {x:0, duration:1, ease:"power2.out"}
    );
  });
}
catch(e) {
  console.log(e);
};

const buttons = document.querySelectorAll(".hvr-btn");

buttons.forEach((btn) => {
  var ul = btn.querySelector(".btn-ul");
  console.log(btn, ul)
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
      x: 50,
      color: "#895B52",
      duration: 0.2,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      x:0,
      color: "#303146",
      duration: 0.2,
      ease: "power2.out",
    });
  });
});

