var footer = document.querySelector('.footer');
var first = document.querySelector('.first');
var firstBottom = first.getBoundingClientRect().bottom;
var firstHeight = firstBottom - first.getBoundingClientRect().top;
var initMouse = true;
var initMouseX;
var initMouseY;
var scrollY;

window.addEventListener('scroll', function(e) {
  scrollY = window.scrollY;
  console.log(scrollY);
 });

$("body").mousemove(function (a) {
  var mouseX = (a.pageX * -1) / 20;
  var mouseY = (a.pageY * -1) / 25;
  //console.log(mouseY);
  if(initMouse){
    initMouseX = mouseX;
    initMouseY = mouseY;
    initMouse = false;
  }
  $("#background-image1").css(
      "background-position",
      (mouseX - initMouseX) + "px " + ((mouseY- (scrollY/20)) - initMouseY) + "px"
    );
    $("#background-image2").css(
      "background-position",
      (mouseX - initMouseX) + "px " + ((mouseY-(scrollY/20)) - initMouseY) + "px"
    );
  
    if (scrollY == 1966) {
      $("#background-image2").css(
        "background-position",
        (mouseX - initMouseX) + "px " + ((mouseY-5) - initMouseY) + "px"
      );
    }

    console.log(mouseY);
  

});

function checkOverlay() {
  var top = footer.getBoundingClientRect().top;
  if ( top < firstBottom) {
    first.style.height = firstHeight - firstBottom + top + 'px';
  }
}

$(function () {
    $("#btnMenu").click(function () {
      $("#btnMenu").toggleClass("change");
      $("#btnMenu").addClass("colorWhite");
      $(".secMainNavi li").each(function (i) {
        var $li = $(this);
        setTimeout(function () {
          $li.toggleClass("naviSlideIn");
        }, i * 50); // delay 100 ms
      });
      $("aside").fadeToggle("1000");
    });
  });


