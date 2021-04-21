$(document).ready(function(){
    $("#menu,#HeaderMenu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.slider-item_2').addClass('active');
    }
    else {
        $('.slider-item_1').removeClass('active');
    }
});

// $(window).scroll(function(){
//     if ($(window).scrollTop() < 100) {
//         $('.slider-item_1').addClass('active');
//     }
//     else {
//         $('.slider-item_2').removeClass('active');
//     }
// });




