$(document).ready(function() {
	ScrollTrigger.defaults({scrub: 1});
  
	let tl = gsap.timeline();
	ScrollTrigger.create({
		trigger: ".intro",
		start: "top top",
		pin: true
	});
  
	tl.from(["#sec3", "#sec4"], {
		scrollTrigger: {
			trigger: "#sec3",
			start: "top 80%",
			end: "bottom bottom",
		}
	});
  
	ScrollTrigger.create({
		trigger: ".horizontal-scroll-wrapper",
		start: "top 10%"
	});
  
	const sections = gsap.utils.toArray(".horizontal-scroll-container section");
	const container = document.querySelector(".horizontal-scroll-container");
	let horizontalScrollTween = gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".horizontal-scroll-wrapper",
			start: "top top",
			end: "+=3000",
			pin: true,
			snap: {snapTo: 1 / (sections.length - 1), directional: false},
		}
	});
  
  });
  
  
