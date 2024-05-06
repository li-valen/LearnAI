// Registering ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

// Selecting the down-arrow element
var arrow = document.getElementsByClassName("down-arrow")[0];

// Initializing Lenis and setting up event listeners for scroll events
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e) // Logging scroll events
})
lenis.on('scroll', ScrollTrigger.update) // Updating ScrollTrigger on scroll events
gsap.ticker.add((time) => {
  lenis.raf(time * 1000) // Adding RAF (requestAnimationFrame) with smoothing
})
gsap.ticker.lagSmoothing(0); // Disabling lag smoothing for ticker

$(document).ready(function() {

  // Fade In
  gsap.from('title', {
    opacity: 0
  });
  gsap.from('quote', {
    opacity: 0
  });

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

  // Video Background Animations
    let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+12.5% center",
          end: "+=100%",
          scrub: true,
          markers: false,
          snap: {
            snapTo: 1 
          }
        }
        
      });
      
      tl1.to('#vid-2', {
        opacity: 1,
        duration: 10, 
        ease: "power2.in" 
      });

      
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+37.5% center",
          end: "+=100%",
          scrub: true,
          markers: false,
          snap: {
            snapTo: 1 
          }
        }
      });
      
      tl2.to('#vid-3', {
        opacity: 1,
        duration: 10, 
        ease: "power2.in" 
      });

      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+62.5% center",
          end: "+=100%",
          scrub: true,
          markers: false,
          snap: {
            snapTo: 1 
          }
        }
      });
      
      tl3.to('#vid-4', {
        opacity: 1,
        duration: 10, 
        ease: "power2.in" 
      });


      // Title Text and Gif Animations
      let t4 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+12.5% center",
          end: "+=18.75%",
          scrub: true,
          markers: false
        }
      });
      t4.to('#title', {
        y: -250, 
        opacity: 0,
        ease: "power1.inOut" 
      });

      let t5 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+12.5% center",
          end: "+=22.25%",
          scrub: true,
          markers: false
        }
      });
      t5.to('.quote', {
        y: -250, 
        opacity: 0,
        ease: "power1.inOut" 
      });

      let t6 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+12.5% center",
          end: "+=23.25%",
          scrub: true,
          markers: false
        }
      });

      t6.to('.down-arrow', {
        y: -250, 
        opacity: 0,
        ease: "power1.inOut",
        onComplete: function() {
          arrow.style.animation = "none";
        }
      });

      let t7 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+20% center",
          end: "+22.5%",
          scrub: true,
          markers: false
        }
      });
      t7.from('#t1', {
        y: window.innerWidth/20,
        opacity: 0,
        duration: 0.5, 
      });
      t7.from('#p1', {
        y: window.innerWidth/20,
        opacity: 0,
        duration: 0.5, 
      });      
      t7.from('#first-img', {
        y: window.innerWidth/20,
        opacity: 0,
        duration: 0.5, 
      });

      let t8 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+45% center",
          end: "+50%",
          scrub: true,
          markers: false
        }
      });
      t8.from('#t2', {
        y: window.innerWidth/20,
        opacity: 0,
        duration: 0.5, 
      });
      t8.from('#p2', {
        y: window.innerWidth/20,
        opacity: 0,
        duration: 0.5, 
      });      
      t8.from('#second-img', {
        y: window.innerWidth/20,
        opacity: 0,
        duration: 0.5, 
      });

      let t9 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+70% center",
          end: "+70%",
          scrub: true,
          markers: false
        }
      });
      t9.from('#t3', {
        y: window.innerWidth/20,
        opacity: 0,
      });
      t9.from('#p3', {
        y: window.innerWidth/20,
        opacity: 0,
      });      
      t9.from('#last-img', {
        y: window.innerWidth/20,
        opacity: 0,
      });


      let t10 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+37.5% center",
          end: "+=47.5%",
          scrub: true,
          markers: false
        }
      });
      t10.to('#t1', {
        y: -350, 
        opacity: 0,
        ease: "power1.inOut" 
      }, 0
      ).to('#p1', {
        y: -200, 
        opacity: 0,
        ease: "power1.inOut" 
      }, 0).to('#first-img', {
        y: -100, 
        opacity: 0,
        ease: "power1.inOut" 
      }, 0);
      
      let t11 = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: "+62.5% center",
          end: "+=72.5%",
          scrub: true,
          markers: false
        }
      });
      t11.to('#t2', {
        y: -350, 
        opacity: 0,
        ease: "power1.inOut" 
      }, 0
      ).to('#p2', {
        y: -200, 
        opacity: 0,
        ease: "power1.inOut" 
      }, 0).to('#second-img', {
        y: -100, 
        opacity: 0,
        ease: "power1.inOut" 
      }, 0);
  });
  