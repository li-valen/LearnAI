gsap.registerPlugin(ScrollTrigger);
let count = 0;
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
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
	if(count == 0){
		gsap.to("#box1", { duration: 1, x: "-160%", duration: 2, opacity: 1}); // Slide out box 1 to right
		gsap.to("#box2", { duration: 1, x: "-105%", duration: 2, opacity: 1}); // Slide out box 2 to right with a delay
		count = 1;
	} else if(count == 1){
		gsap.to("#box1", {x: "-260%", duration: 2, delay: 0.5}); // Slide in box 1 from right
		gsap.to("#box2", {x: "-360%", duration: 3}); // Slide in box 2 from right with a delay
		count = 0;
		gsap.to("#box1", {x: "0%", duration: 0, delay: 3}); // Slide in box 1 from right
		gsap.to("#box2", {x: "0%", duration: 0, delay: 3}); // Slide in box 2 from right with a delay
	}
}

document.getElementById("animation").addEventListener("click", menuSlide);
