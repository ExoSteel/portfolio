import './style.css'
import { gsap } from "gsap";

let tl = gsap.timeline()

tl.to("header", { 
  opacity: 1, duration: 0.5, y: 0, ease: "power2.out",
});

tl.to("nav", { 
  opacity: 1, duration: 0.5, y: 0, ease: "power2.out",
});

tl.from(".animate-text", {
  y: 80,
  opacity: 0,
  skewY: 7,
  duration: 0.2,
  stagger: 0.2
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


