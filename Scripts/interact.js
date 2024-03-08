var imageDetectionButton = document.querySelector("#imageDetectionButton");

// imageDetectionButton.addEventListener("click", imageDetectionButton());


$('#imageDetectionButton').on('click', function () {
    $('.center').show();
    $(this).hide();
})

$('#close').on('click', function () {
    $('.center').hide();
    $('#imageDetectionButton').show();
})
