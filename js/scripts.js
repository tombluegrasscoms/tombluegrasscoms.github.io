$(".menu").on("click", function() {
    $(".mobilenav").toggleClass("movenav")
});
$(".menu").on("click", function() {
    $("body").toggleClass("noscroll")
});
$(".menu").on("click", function() {
    $(".mobilenav").toggleClass("noscroll")
});
$(".menu").on("click", function() {
    $(".menuoverlayg").toggleClass("menuovfi")
});
$(".menuoverlayg").on("click", function() {
    $(".mobilenav").toggleClass("movenav")
});
$(".menuoverlayg").on("click", function() {
    $(".menuoverlayg").toggleClass("menuovfi")
});
$(".menuoverlayg").on("click", function() {
    $("body").toggleClass("noscroll")
});
$(".menuoverlayg").on("click", function() {
    $(".mobilenav").toggleClass("noscroll")
});
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1200, function () {
        window.location.hash = href;
    });
    return false;
});
var mainbottom = $('h1').offset().top + $('h1').height();
$(window).on('scroll',function(){
    var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('nav').addClass('navbg');
    } else {
        $('nav').removeClass('navbg');
        $('nav').addClass('navop');
    }
});
(function() {
    var header = document.querySelector("#hidenav");
    if(window.location.hash) {
      header.classList.add("headroom--unpinned");
    }
    var headroom = new Headroom(header, {
        tolerance: {
          down : 10,
          up : 20
        },
        offset :900
    });
    headroom.init();
}());
