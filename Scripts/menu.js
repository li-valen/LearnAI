let count = 0;
let element = document.getElementById("menuSect");
let positionInfo = element.getBoundingClientRect();
function menuSlide() {
	element = document.getElementById("menuSect");
	positionInfo = element.getBoundingClientRect();

	if(count == 0){
		gsap.to(".menu", {height: "100%", duration: 0.8, opacity: 1, display:"block", ease: "power3.in"}); // Slide out box 1 to right
		gsap.to(".chatBox", {height: "100%", duration: 0.8, opacity: 1, display:"block", ease: "power3.in", transformOrigin: "bottom"}); // Slide out box 2 to right with a delay
		gsap.to("li", {opacity: 1, duration: 1.5, ease: "power2.in"});
		count = 1;
	} else if(count == 1){
		gsap.to(".menu", {height: "0px", duration: 0.8, ease: "power2.in"}); // Slide in box 1 from right
		gsap.to(".chatBox", {height: "0px", duration: 0.8, ease: "power2.in"}); // Slide in box 2 from right with a delay
    	gsap.to("li", {opacity: 0, duration: 0.8, ease: "power2.out"});
		count = 0;
		gsap.to(".menu", {delay: 0.8, display:"none"}); // Slide in box 1 from right
		gsap.to(".chatBox", {delay: 0.8, display:"none"}); // Slide in box 2 from right with a delay
	}
}

document.getElementById("animation").addEventListener("click", menuSlide);