$(function() {

    let cards = gsap.utils.toArray(".stackCard");
  
    let stickDistance = 0;
  
    let firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: "center center"
    });
  
    let lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length-1],
      start: "center center"
    });
  
    cards.forEach((card, index) => {
  
      var scale = 1 - (cards.length - index) * 0.025;
      let scaleDown = gsap.to(card, {scale: scale, 'transform-origin': '"50% '+ (lastCardST.start + stickDistance) +'"' });
  
      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        markers: true,
        pinSpacing: false,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse"
      });
    });
  
  });