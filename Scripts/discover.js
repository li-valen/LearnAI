gsap.registerPlugin(ScrollTrigger);



// sets x and certain position and then moves it to a certain position
gsap.set(".what-image", {x:-1000, opacity:0});
gsap.set("#what-title", {x:-1000, opacity:0});
gsap.set("#what-p-1", {x:-1000, opacity:0});
gsap.set("#what-p-2", {x:-1000, opacity:0});

gsap.to(".what-image", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
    },
    opacity: 1
})
gsap.to("#what-title", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
    },
    opacity: 1,
    delay: 0.5
})
gsap.to("#what-p-1", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
    },
    opacity: 1,
    delay: 0.7
})
gsap.to("#what-p-2", {
    x: 0,
    scrollTrigger: {
        trigger: ".what-image",
    },
    opacity: 1,
    delay: 0.9
})



gsap.set(".benefits-image", {x:-1000, opacity:0});
gsap.set("#benefits-title", {x:-1000, opacity:0});
gsap.set("#benefits-p-1", {x:-1000, opacity:0});
gsap.set("#benefits-p-2", {x:-1000, opacity:0});

gsap.to(".benefits-image", {
    x: 0,
    scrollTrigger: {
        trigger: ".benefits-image",
    },
    opacity: 1
})
gsap.to("#benefits-title", {
    x: 0,
    scrollTrigger: {
        trigger: ".benefits-image",
    },
    opacity: 1,
    delay: 0.5
})
gsap.to("#benefits-p-1", {
    x: 0,
    scrollTrigger: {
        trigger: ".benefits-image",
    },
    opacity: 1,
    delay: 0.7
})
gsap.to("#benefits-p-2", {
    x: 0,
    scrollTrigger: {
        trigger: ".benefits-image",
    },
    opacity: 1,
    delay: 0.9
})

gsap.set(".drawbacks-image", {x:-1000, opacity:0});
gsap.set("#drawbacks-title", {x:-1000, opacity:0});
gsap.set("#drawbacks-p-1", {x:-1000, opacity:0});
gsap.set("#drawbacks-p-2", {x:-1000, opacity:0});

gsap.to(".drawbacks-image", {
    x: 0,
    scrollTrigger: {
        trigger: ".drawbacks-image",
    },
    opacity: 1
})
gsap.to("#drawbacks-title", {
    x: 0,
    scrollTrigger: {
        trigger: ".drawbacks-image",
    },
    opacity: 1,
    delay: 0.5
})
gsap.to("#drawbacks-p-1", {
    x: 0,
    scrollTrigger: {
        trigger: ".drawbacks-image",
    },
    opacity: 1,
    delay: 0.7
})
gsap.to("#drawbacks-p-2", {
    x: 0,
    scrollTrigger: {
        trigger: ".drawbacks-image",
    },
    opacity: 1,
    delay: 0.9
})

