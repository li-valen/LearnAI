$('#objectDetectionButton').on('click', function () {
    $('.center').fadeIn(500);
    $(this).fadeOut(500);
})

$('#close').on('click', function () {
    $('.center').fadeOut(500);
    $('#objectDetectionButton').fadeIn(500);
})

// Stock Prediction Button
$('#stockPredictionButton').on('click', function () {
    $('.stockCenter').fadeIn(500);
    $(this).fadeOut(500);
})

$('#stockClose').on('click', function () {
    $('.stockCenter').fadeOut(500);
    $('#stockPredictionButton').fadeIn(500);
})

$('#stableDiffusionButton').on('click', function () {
  $('.diffusionCenter').fadeIn(500);
  $(this).fadeOut(500);
})

$('#diffusionClose').on('click', function () {
  $('.diffusionCenter').fadeOut(500);
  $('#stableDiffusionButton').fadeIn(500);
})



// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


document.addEventListener("DOMContentLoaded", () => {
  let but = document.getElementById("but");
  let closeButton_ = document.getElementById("close-cam");
  let video = document.getElementById("vid");
  let mediaDevices = navigator.mediaDevices;
  vid.muted = true;
  but.addEventListener("click", () => {
      // Accessing the user camera and video.
      mediaDevices
          .getUserMedia({
              video: true,
              audio: true,
          })
          .then((stream) => {
              // Changing the source of video to current stream.
              video.srcObject = stream;
              video.addEventListener("loadedmetadata", () => {
                  video.play();
              });
          })
          .catch(alert);
  });

  closeButton_.addEventListener("click", () => {
      video.srcObject.getTracks().forEach(function(track) {
        track.stop();
      });
      video.srcObject = null;
  });
});