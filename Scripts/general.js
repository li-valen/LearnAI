var footer = document.querySelector('.footer');
var first = document.querySelector('.first');
var firstBottom = first.getBoundingClientRect().bottom;
var firstHeight = firstBottom - first.getBoundingClientRect().top;
var initMouse = true;
var initMouseX;
var initMouseY;
var scrollY;



$("body").mousemove(function (a) {
  var mouseX = (a.pageX * -1) / 20;
  var mouseY = (a.pageY * -1) / 25;
  var top = footer.getBoundingClientRect().top; //genius
  if(initMouse){
    initMouseX = mouseX;
    initMouseY = mouseY;
    initMouse = false;
  }
  $("#background-image1").css(
      "background-position",
      (mouseX - initMouseX) + "px " + (mouseY-((top-1546)/25)-initMouseY) + "px"
    );
  $("#background-image2").css(
      "background-position",
      (mouseX - initMouseX) + "px " + (mouseY-((top-1546)/25)-initMouseY) + "px"
    );
});

function checkOverlay() {
  var top = footer.getBoundingClientRect().top;
  if ( top < firstBottom) {
    first.style.height = firstHeight - firstBottom + top + 'px';
  }
  console.log(firstBottom);
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


