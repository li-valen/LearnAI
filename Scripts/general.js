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

  $("body").mousemove(function (a) {
    var mouseX = (a.pageX * -1) / 20;
    var mouseY = (a.pageY * -1) / 25;
    $("#background-image").css(
      "background-position",
      mouseX + "px " + mouseY + "px"
    );
  });

  