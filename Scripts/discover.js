gsap.registerPlugin(ScrollTrigger);

const text_container = gsap.utils.toArray(".text-container");

text_container.forEach(container=> {
    gsap.fromTo(container, {x: -1000, opacity: 0}, {
        x: 0, 
        opacity: 1, 
        scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play play restart play"
        },
        duration: 1.5,
        delay: 1
    })
});

const images = gsap.utils.toArray("#image");


images.forEach(image=> {
    gsap.fromTo(image, {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: text_container,
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play play restart play"
        },
        duration: 1
    })
})