/* const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 1.4; // speed changer
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 2000, fill: "forwards" }); // amount of time before it stops
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 2000, fill: "forwards" }); // amount of time before it stops
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]); */


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
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

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
const textAnim2FadeOut = TweenMax.fromTo(text2, 3, {opacity: 1}, {opacity: 0});

let scene3 = new ScrollMagic.Scene({
  offset: 100,
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

// Timeline-max

var tl = new TimelineMax().add([
  TweenMax.to('.hero-unit .scene:first-of-type', 1, {opacity: 1}),
  TweenMax.to('.hero-unit .scene:first-of-type', 1, {opacity: 0, delay: 1}),
  TweenMax.to('.hero-unit .scene:nth-of-type(2)', 1, {opacity:1, delay: 2}),
  TweenMax.to('.hero-unit .scene:nth-of-type(2)', 1, {opacity:0, delay: 3}),
  TweenMax.to('.hero-unit .scene:nth-of-type(3)', 1, {opacity:1, delay: 4}),
  TweenMax.to('.hero-unit .scene:nth-of-type(3)', 1, {opacity:0, delay: 5})
]);

var pin = new ScrollScene({
triggerElement: '.hero-unit',
triggerHook: 0,
duration: 2000
}).setPin('.hero-unit').setTween(tl).addTo(controller); 

// Will find different 

// will delete all