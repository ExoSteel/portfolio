import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// let t1 = gsap.timeline({})

function loadingSquare(obj, i){
  gsap.set(obj, {
    x:-25, y:50,
  });

  gsap.to(obj, {
    keyframes:[
      {
        x:-25,
        y:50,
        backgroundColor: "red",
        visibility:"shown",
      },
      {
        x:25,
        y:50,
        backgroundColor: "orange",
      },
      {
        x:50,
        y:0,
        backgroundColor: "yellow",
      },
      {
        x:25,
        y:-50,
        backgroundColor: "green",
      },
      {
        x:-25,
        y:-50,
        backgroundColor: "blue",
      },
      {
        x:-50,
        y:0,
        backgroundColor: "purple",
      },
      {
        x:-25,
        y:50,
        backgroundColor: "black",
      },
      
    ],
    duration: 4,
    repeat:-1,
    ease:"none",
    repeatDelay:0,
    delay: (i * 0.2),
  });
}

const loadingCircles = gsap.utils.toArray(".circle");

loadingCircles.forEach((circle, i) => {
  console.log(i)
  loadingSquare(circle, i)
})

const colourfulBoxes = document.querySelectorAll(".colourfulBox")

colourfulBoxes.forEach((colourfulBox, i) => {
  let colourfulCircles = colourfulBox.querySelectorAll(".circle1")

  gsap.set(colourfulCircles[0], {
    x:-10, y:0,
  })
  gsap.set(colourfulCircles[1], {
    x:10, y:0,
  })
  gsap.set(colourfulCircles[2], {
    x:0, y:10,
  })

  gsap.from(colourfulBox, {
    rotationZ: 360,
    repeat:-1,
    ease:"sine.inOut",
    duration:5,

  })

  gsap.from(colourfulCircles, {
    scale:0.1,
    duration:1.5,
    repeat:-1,
    yoyo:true,
    delay: Math.sin((i%10)/2) * 0.5,
    stagger: 0.05,
    ease:"power2.inOut"
  })
})

const blocks = document.querySelectorAll(".block");

gsap.set(blocks, {
  x:10,
})

blocks.forEach((block) => {
  block.addEventListener("mouseenter", () => {
    gsap.to(block, 
      {x:1000, duration:2, ease:"power4.inOut"}
    );
  });

  block.addEventListener("mouseleave", () => {
    gsap.to(block, 
      {x:10, duration:2, ease:"power4.inOut"}
    );
  });

});

const tl = gsap.timeline({ 
  scrollTrigger: { 
    trigger: ".timegraph",
    start: "top 65%",
    end: "100% 70%",
    markers:true,
    toggleActions: "play none none none", 
    // pin: true,
    scrub: true,
  } 
});

const timesteps = document.querySelectorAll(".timestep");
const timelines = document.querySelectorAll(".timeline");

let alt = 1;

for(let i = 0;i < Math.max(timesteps.length, timelines.length); i++){
  console.log(i, alt);
  tl.from(timesteps[i], {
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
