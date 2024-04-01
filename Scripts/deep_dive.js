gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});


$(document).ready(function() {
	ScrollTrigger.defaults({scrub: 1});
  
	let tl = gsap.timeline();
	tl.to(".comparisionSection", {
		scrollTrigger: {
			trigger: ".comparisionSection",
			start: "top bottom",
			end: "bottom bottom",
		},
	});
  
	ScrollTrigger.create({
		trigger: ".comparisionSection",
		start: "top 10%"
	});

	ScrollTrigger.create({
		trigger: "#hero",
		start: "top top",
		pin: true,
		pinSpacing: false
	});
  
	ScrollTrigger.create({
		trigger: ".comparisionSection",
		end: "+=75%",
		pin: true,
		pinSpacing: true,
	});
  
	ScrollTrigger.create({
		trigger: "#sec2",
		start: "top top",
		pin: true,
		pinSpacing: false
	});
  
	tl.from(["#sec3", "#sec4"], {
		scrollTrigger: {
			trigger: "#sec3",
			start: "top 80%",
			end: "bottom bottom",
		},
	});
  
	ScrollTrigger.create({
		trigger: ".horizontal-scroll-wrapper",
		start: "top 10%"
	});
  
	//creates the fake horizontal scrolling effect
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
  
  
