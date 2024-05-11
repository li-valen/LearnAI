// Registering GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// Initializing Lenis for smooth scrolling
const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
lenis.on('scroll', ScrollTrigger.update) // Updating ScrollTrigger on scroll events
gsap.ticker.add((time) => {
  lenis.raf(time * 1000) // Adding RAF (requestAnimationFrame) with smoothing
})
gsap.ticker.lagSmoothing(0); // Disabling lag smoothing for ticker

// Adding event listener to update progress bar on scroll
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let documentHeight = document.body.scrollHeight - window.innerHeight;
  let percentage = (scrollPosition / documentHeight) * 100;
  let progress = document.getElementsByClassName('progress')[0];
  progress.style.width = percentage + "%";
});

// Selecting elements for animations
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const arrow = intro.querySelector("#fade-out");
const section = document.querySelector("section");
const end = section.querySelector("h1");

// Creating ScrollMagic controller and scenes
const controller = new ScrollMagic.Controller();

// Timeline for video playback control
let scene = new ScrollMagic.Scene({
  duration: 71000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

// Timeline for controlling video playback based on scroll position
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .addTo(controller);

let accelamount = 1; //Smoothing
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000; //convert to seconds
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 40); 

// Title and ArrowAnimation
let tanim = gsap.timeline({
  scrollTrigger: {
    trigger: "#video",
    start: "+=1% center", 
    end: "+=1500px", 
    ease: "power1.out",
    scrub: 1, 
    preventOverlaps: true,
    fastScrollEnd: true,
    markers: false
  }
});
tanim.to(text, {opacity: 0, duration:3});

let al = gsap.timeline({
  scrollTrigger: {
    trigger: "#video",
    start: "+=1% center", 
    end: "+=1500px", 
    ease: "power1.out",
    scrub: 1, 
    preventOverlaps: true,
    fastScrollEnd: true,
    markers: false
  }
});
al.to("#fade-out", {opacity: 0});

  // Arrow Animation
  gsap.to('.down-arrow',{
    y: 12,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    duration: 0.5
  });
  gsap.to('.down-arrow',{
    rotate: "45deg"
  });

// Animations
// Quote
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#video",
    ease: "power2.in",
    start: "+=13.25% center", 
    end: "+=0px", 
    scrub: 1, 
    preventOverlaps: true,
    fastScrollEnd: true,
    markers: false
  },
});

tl.from("#quote", { scale: 0, autoAlpha: 0 })
  .to("#quote", { scale: 3 });

  let tl2 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=16.75% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl2.to("#quote", { autoAlpha: 0, opacity:0 })
  
  // What is AI?
  let tl3 = gsap.timeline({
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=18.75% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl3.from("#question", { scale: 0, autoAlpha: 0, opacity: 0 })
  .to("#question", { scale: 5, duration:4 });  

  let tl4 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=22.9% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl4.to("#question", { autoAlpha: 0, opacity:0 })

  // Section 1
  let tl5 = gsap.timeline({
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=33% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl5.from("#sec1a", { scale: 0, autoAlpha: 0, opacity: 0 })
  .to("#sec1a", { scale: 2, duration:4 });  

  let tl6 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=37% center", 
      end: "+=1000px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl6.to("#sec1a", { autoAlpha: 0, opacity:0 })
  tl6.from("#sec1b", { autoAlpha: 0, opacity: 0, duration:4 })
  .to("#sec1b", { opacity:1, duration:4 });  

  let tl8 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=39% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl8.to("#sec1b", { autoAlpha: 0, opacity:0 })

  // Section 2 
  let tl11 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video",
      ease: "power1.in",
      start: "+=47.5% center", 
      end: "+=250px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl11.from("#sec2-title", { scale: 0, autoAlpha: 0, opacity: 0 })
  .to("#sec2-title", { scale: 2, duration:4 });  

  let tl12 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=49.6% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl12.to("#sec2-title", { autoAlpha: 0, opacity:0 })

  let tl13 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video",
      ease: "power1.in",
      start: "+=54.5% center", 
      end: "+=1000px", 
      scrub: 1,
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
    defaults: { duration: 3 } 
  });
  
  tl13.from("#sec2a-p", { x:"-10%", autoAlpha: 0, opacity: 0,  })
  .to("#sec2a-p", { x: 0})
  .from("#sec2a-title", { x:"-10%", autoAlpha: 0, opacity: 0,  })
  .to("#sec2a-title", { x: 0});  

  tl13.from("#sec2b-p", { x:"-30%", autoAlpha: 0, opacity: 0})
  .to("#sec2b-p", { x: 0})
  .from("#sec2b-title", { x:"-30%", autoAlpha: 0, opacity: 0, })
  .to("#sec2b-title", { x: 0});  

  tl13.from("#sec2c-p", { x:"-50%", autoAlpha: 0, opacity: 0, })
  .to("#sec2c-p", { x: 0})
  .from("#sec2c-title", { x:"-50%", autoAlpha: 0, opacity: 0 })
  .to("#sec2c-title", { x: 0});  

  let tl14 = gsap.timeline({
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=58.8% center", 
      end: "+=1000px", 
      scrub: 2, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl14.to("#sec2a-p", { autoAlpha: 0, opacity:0 })
  .to("#sec2a-title", { autoAlpha: 0, opacity:0 })

  tl14.to("#sec2b-p", { autoAlpha: 0, opacity:0 })
  .to("#sec2b-title", { autoAlpha: 0, opacity:0 })

  tl14.to("#sec2c-p", { autoAlpha: 0, opacity:0 })
  .to("#sec2c-title", { autoAlpha: 0, opacity:0 })

// Future Section 
  let tl15 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video",
      start: "+=66.055% center", 
      end: "+=1000px", 
      scrub: 1,
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
    defaults: { duration: 3 } 
  });

  tl15.from("#future-title", { autoAlpha: 0, opacity: 0 })
  .to("#future-title", { duration:4 });  

  let tl16 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=68% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl16.to("#future-title", { autoAlpha: 0, opacity:0 })

  let tl17 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video",
      start: "+=76% center", 
      end: "+=1000px", 
      scrub: 1,
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
    defaults: { duration: 3 } 
  });

  tl17.from("#sec3", { y:"100%", autoAlpha: 0, opacity: 0 })
  .to("#sec3", { y: 0});  

  let tl18 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=79% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl18.to("#sec3", { autoAlpha: 0, y:"-100%"})

  let tl19 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video",
      start: "+=84% center", 
      end: "+=1000px", 
      scrub: 1,
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
    defaults: { duration: 3 } 
  });

  tl19.from("#sec4", { y:"100%", autoAlpha: 0, opacity: 0 })
  .to("#sec4", { y: 0});  

  let tl20 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=88% center", 
      end: "+=0px", 
      preventOverlaps: true,
      fastScrollEnd: true,
      scrub: 1, 
      markers: false
    },
  });
  
  
  tl20.to("#sec4", { autoAlpha: 0, y:"-100%", duration: 10})

  let tl21 = gsap.timeline({
    scrollTrigger: {
      trigger: "#video",
      start: "+=91.5% center", 
      end: "+=1000px", 
      scrub: 1,
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
    defaults: { duration: 3 } 
  });

  tl21.from("#sec5", { y:"100%", autoAlpha: 0, opacity: 0 })
  .to("#sec5a", { y: 0});  


  let tl22 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=94.75% center", 
      end: "+=0px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl22.to("#sec5", { autoAlpha: 0, opacity: 0})

  // Deep Dive Section
  let tl24 = gsap.timeline({
    defaults: {ease: "power2.in"},
    
    scrollTrigger: {
      trigger: "#video",
      start: "+=98.5% center", 
      end: "+=500px", 
      scrub: 1, 
      preventOverlaps: true,
      fastScrollEnd: true,
      markers: false
    },
  });
  
  tl24.from("#deep-dive-title", { opacity: 0, autoAlpha: 0, opacity: 0 })
  .to("#deep-dive-title", { opacity:1});  
  tl24.from("#deep-dive-text", { opacity:0, autoAlpha: 0, opacity: 0 })
  .to("#deep-dive-text", { opacity:1}); 
  tl24.from(".deep-dive-button", { opacity:0, autoAlpha: 0, opacity: 0 })
  .to(".deep-dive-button", { opacity:1}); 

// Buttons for Timeline

btn1.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 9150, // Position relative to Video
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn1, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB' // Change Color on Click
      });
    }
  });
};
btn2.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 13150,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn2, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn3.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 23500,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn3, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn4.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 27000,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn4, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn5.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 34000,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn5, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn6.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 40000,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn6, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn7.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 48000,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn7, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn8.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 55500,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn8, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn9.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 61500,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn9, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn10.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 66000,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn10, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};
btn11.onclick = function(){
  gsap.to(window, {
    duration: 5,
    scrollTo: 71000,
    ease: "power4.out",
    onComplete: function(){ 
      gsap.to(btn11, {
        ease: "power1.out",
        scale: 1.5, 
        backgroundColor: '#87CEEB'
      });
    }
  });
};




