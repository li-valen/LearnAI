gsap.registerPlugin(ScrollTrigger);
let panels = gsap.utils.toArray(".hidden");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-container",
    pin: true,
    scrub: true,
    end: "+=500%",
    snap: {snapTo: 1 / (4), 
        directional: true, 
        duration: 5,
        delay: 0.1}
  }
});


panels.forEach((hidden, i) => {
  if (!i) {
    tl.set({}, {}, 0.5)
  } else {
    tl.to(hidden, {
      yPercent: -100,
      ease: "none"
    }, "+=1")
  }
})




// sets x and certain position and then moves it to a certain position
gsap.set(".what-image", {x:-1000, opacity:0});
gsap.set("#what-title", {x:-1000, opacity:0});
gsap.set("#what-p-1", {x:-1000, opacity:0});
gsap.set("#what-p-2", {x:-1000, opacity:0});

gsap.to(".what-image", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
        start: "top, bottom",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
})
gsap.to("#what-title", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.5,
})
gsap.to("#what-p-1", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.7,
})
gsap.to("#what-p-2", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.9,
})



gsap.set(".history-image", {x:-1000, opacity:0});
gsap.set("#history-title", {x:-1000, opacity:0});
gsap.set("#history-p-1", {x:-1000, opacity:0});
gsap.set("#history-p-2", {x:-1000, opacity:0});

gsap.to(".history-image", {
    x: 0,
    scrollTrigger: {
        trigger: ".second",
        toggleActions: "pause play restart restart"
    },
    opacity: 1
})
gsap.to("#history-title", {
    x: 0,
    scrollTrigger: {
        trigger: ".second",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.5
})
gsap.to("#history-p-1", {
    x: 0,
    scrollTrigger: {
        trigger: ".second",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.7,
})
gsap.to("#history-p-2", {
    x: 0,
    scrollTrigger: {
        trigger: ".second",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.9,
})

gsap.set(".future-image", {x:-1000, opacity:0});
gsap.set("#future-title", {x:-1000, opacity:0});
gsap.set("#future-p-1", {x:-1000, opacity:0});
gsap.set("#future-p-2", {x:-1000, opacity:0});

gsap.to(".future-image", {
    x: 0,
    scrollTrigger: {
        trigger: ".third",
        toggleActions: "pause play restart restart"
    },
    opacity: 1
})
gsap.to("#future-title", {
    x: 0,
    scrollTrigger: {
        trigger: ".third",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.5
})
gsap.to("#future-p-1", {
    x: 0,
    scrollTrigger: {
        trigger: ".third",
        toggleActions: "pause play restart restart"
    },
    opacity: 1,
    delay: 0.7
})
gsap.to("#future-p-2", {
    x: 0,
    scrollTrigger: {
        trigger: ".third",
        toggleActions: "pause play restart restart",
    },
    opacity: 1,
    delay: 0.9
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 750)
})

gsap.ticker.lagSmoothing(0)