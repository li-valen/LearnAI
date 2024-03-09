var footer = document.querySelector('.footer');
var first = document.querySelector('.first');
var second = document.querySelector('.second');
var firstBottom = first.getBoundingClientRect().bottom;
var firstHeight = firstBottom - first.getBoundingClientRect().top;
var initMouse = true;
var init = true;
var initMouseX;
var initMouseY;
var initTop = footer.getBoundingClientRect().top;
var scrollY;

$("body").mousemove(function (a) {
  var mouseX = (a.pageX * -1) / 20;
  var mouseY = (a.pageY * -1) / 25;
  var top = footer.getBoundingClientRect().top; //genius

  if(initMouse){
    initMouseX = mouseX;
    initMouseY = mouseY;
    initTop = top;
    initMouse = false;
  }
  $("#background-image1").css(
      "background-position",
      (mouseX - initMouseX) + "px " + (mouseY-((top-initTop)/25.0567261)-initMouseY) + "px"
    );
  $("#background-image2").css(
      "background-position",
      (mouseX - initMouseX) + "px " + (mouseY-((top-initTop)/25.0567261)-initMouseY) + "px"
    );
});

function checkOverlay() {
  var top = footer.getBoundingClientRect().top;
  if ( top < firstBottom) {
    first.style.height = firstHeight - firstBottom + top + 'px';
  }
  if( top < -100){
    first.style.position = "relative";
    second.style.position = "relative";
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


