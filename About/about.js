/*
// SCROLLING AFFECT 
// Intro 
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const text2 = intro.querySelector("h2");
const text3 = intro.querySelector("h3");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 3500,
  triggerElement: intro,
  triggerHook: 0
})
  //.addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0});

let scene2 = new ScrollMagic.Scene({
  duration: 1100,
  triggerElement: intro,
  triggerHook: 0
})
  //.setTween(gsap.to(intro, {duration: 1, y: '-20vh', ease: 'power3.in'}))
  .setTween(textAnim)
  .addTo(controller);




//Text Animation 2
const textAnim2 = TweenMax.fromTo(text2, 3, {opacity: 0}, {opacity: 1});

let scene3 = new ScrollMagic.Scene({
  duration: 1100,
  triggerElement: intro,
  triggerHook: 0
})
  //.setTween(TweenMax.to(intro, 1, {y: '-20vh', delay: 2}))
  .setTween(textAnim2)
  .addTo(controller);



//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

// MIGHT DELETE THE AMAZING AND GO STRAIGHT TO THE REVOLUTIONARY 

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

*/

// Scroll Two

let section = document.querySelector('section');
window.addEventListener('scroll', function() {
  let value = window.scrollY;
  section.style.clipPath = "circle("+ value +"px at center center)"
});


