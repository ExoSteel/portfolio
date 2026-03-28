import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({ 
  scrollTrigger: { 
    trigger: ".timegraph",
    start: "top 63%",
    end: "100% 90%",
    // markers:true,
    toggleActions: "play none none none", 
    // pin: true,
    scrub: true,
  } 
});

const timesteps = document.querySelectorAll(".timestep");
const timelines = document.querySelectorAll(".timeline");
const timeimgs = document.querySelectorAll(".timeimg");
const timeinfos = document.querySelectorAll(".timeinfo");

let alt = 1;

for(let i = 0;i < Math.max(timesteps.length, timelines.length, timeinfos.length, timeimgs.length); i++){
  console.log(i, alt);
  tl.from(timesteps[i], {
    scale: 0,
    opacity:0,
    ease: "back.inOut()" 
  });

  tl.from(timeimgs[i], {
    scale: 0,
    opacity:0,
    ease: "back.inOut()" 
  });

  tl.from(timeinfos[i], {
    scale: 0,
    opacity:0,
    ease: "back.inOut()" 
  });

  tl.from(timelines[i], { 
    scaleY: 0, 
    opacity:0,
    transformOrigin: "top top", 
    ease: "none"
  });
};