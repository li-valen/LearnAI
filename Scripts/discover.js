const container = document.querySelector('.container');
    let currentSection = 0;

    window.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        currentSection++;
      } else {
        // Scrolling up
        currentSection--;
      }

      // Ensure the currentSection stays within bounds
      currentSection = Math.max(0, Math.min(container.children.length - 1, currentSection));

      // Scroll horizontally to the current section
      container.style.transform = `translateX(-${currentSection * 100}vw)`;
    });