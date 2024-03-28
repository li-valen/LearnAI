gsap.registerPlugin(ScrollTrigger);

let whatTitle = document.getElementById("what-title");
let whatP1 = document.getElementById("what-p-1");
let whatP2 = document.getElementById("what-p-2");

gsap.set(whatTitle, {opacity: 0});
gsap.to(whatTitle, {
    scrollTrigger: {
        trigger: whatTitle,
        start: "top center",
        toggleActions: "play play restart play"
    },
    opacity: 1, 
    duration: 2});


gsap.set(whatP1, {scale: 0.5});
gsap.to(whatP1, {
    scrollTrigger: {
        trigger: whatP1,
        start: "top center",
        toggleActions: "play play restart play"
    },
    scale: 1, 
    duration: 2});

gsap.set(whatP2, {scale: 0.5});
gsap.to(whatP2, {
    scrollTrigger: {
        trigger: whatP1,
        start: "top center",
        toggleActions: "play play restart play"
    },
    scale: 1, 
    duration: 2});