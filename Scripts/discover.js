gsap.registerPlugin(ScrollTrigger);

const text_container = gsap.utils.toArray(".text-container");

text_container.forEach(container=> {
    gsap.fromTo(container, {
        x: -1000,
        opacity: 0,
    }, 
    {
        
    // scrollTrigger:  {
    //     trigger: ".text-container",
    //     start: "top center",
    //     end: "bottom center",
    //     t
    // },
    x: 0, 
    opacity: 1,
    duration: 1})
});