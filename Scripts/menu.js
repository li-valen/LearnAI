let count = 0;
let element = document.getElementById("menuSect");
let positionInfo = element.getBoundingClientRect();
let width = positionInfo.width * -1;
element.style.right = width + "px";

function menuSlide() {
	element = document.getElementById("menuSect");
	positionInfo = element.getBoundingClientRect();
	width = positionInfo.width * -1;
	element.style.right = width + "px";
	if(count == 0){
		gsap.to(".menu", {xPercent: -160, duration: 2, opacity: 1}); // Slide out box 1 to right
		gsap.to(".chatBox", {xPercent: -100, duration: 2, opacity: 1}); // Slide out box 2 to right with a delay
    gsap.to("li", {opacity: 1, duration: 1, ease: "power2.in"});
		count = 1;
	} else if(count == 1){
		gsap.to(".menu", {xPercent: -260, duration: 1, delay: 0.35}); // Slide in box 1 from right
		gsap.to(".chatBox", {xPercent: -360, duration: 2}); // Slide in box 2 from right with a delay
    gsap.to("li", {opacity: 0, duration: 0.5, ease: "power2.inOut"});
		count = 0;
		gsap.to(".menu", {xPercent: 0, duration: 0, delay: 3}); // Slide in box 1 from right
		gsap.to(".chatBox", {xPercent: 0, duration: 0, delay: 3}); // Slide in box 2 from right with a delay
	}
}

document.getElementById("animation").addEventListener("click", menuSlide);