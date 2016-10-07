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
enquire.register("screen and (min-width: 1023px)", {
    match: function() {
        (function() {
            var parallax = document.querySelectorAll(".parallax"),
                speed = 0.38;
            window.onscroll = function() {
                [].slice.call(parallax).forEach(function(el, i) {
                    var windowYOffset = window.pageYOffset,
                        elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
                    el.style.backgroundPosition = elBackgrounPos;
                });
            };
        })();
    },
    unmatch: function() {
        (function() {
            var parallax = document.querySelectorAll(".parallax"),
                speed = 0;
            window.onscroll = function() {
                [].slice.call(parallax).forEach(function(el, i) {
                    var windowYOffset = window.pageYOffset,
                        elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
                    el.style.backgroundPosition = elBackgrounPos;
                });
            };
        })();
    }
});
var mainbottom = $('h3').offset().top + $('h3').height();
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
