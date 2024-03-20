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


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}