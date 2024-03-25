gsap.registerPlugin(ScrollTrigger);
let count = 0;
let element = document.getElementById("menuSect");
let positionInfo = element.getBoundingClientRect();
let width = positionInfo.width * -1;
element.style.right = width + "px";

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

function menuSlide() {
	element = document.getElementById("menuSect");
	positionInfo = element.getBoundingClientRect();
	width = positionInfo.width * -1;
	element.style.right = width + "px";
	if(count == 0){
		gsap.to(".menu", {xPercent: -160, duration: 2, opacity: 1}); // Slide out box 1 to right
		gsap.to(".chatBox", {xPercent: -100, duration: 2, opacity: 1}); // Slide out box 2 to right with a delay
		count = 1;
	} else if(count == 1){
		gsap.to(".menu", {xPercent: -260, duration: 2, delay: 0.5}); // Slide in box 1 from right
		gsap.to(".chatBox", {xPercent: -360, duration: 3}); // Slide in box 2 from right with a delay
		count = 0;
		gsap.to(".menu", {xPercent: 0, duration: 0, delay: 3}); // Slide in box 1 from right
		gsap.to(".chatBox", {xPercent: 0, duration: 0, delay: 3}); // Slide in box 2 from right with a delay
	}
}

document.getElementById("animation").addEventListener("click", menuSlide);
