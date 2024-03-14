var imageDetectionButton = document.querySelector("#imageDetectionButton");

// imageDetectionButton.addEventListener("click", imageDetectionButton());


$('#imageDetectionButton').on('click', function () {
    $('.center').fadeIn(500);
    $(this).fadeOut(500);
})

$('#close').on('click', function () {
    $('.center').fadeOut(500);
    $('#imageDetectionButton').fadeIn(500);
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


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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