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
enquire.register("screen and (min-width: 1023px)", {
    match: function() {
        $(window).scroll(function() {
            $(".fadeinmenu").css("opacity", 0 + $(window).scrollTop() / 205);
        });
    },
    unmatch: function() {
        $(window).scroll(function() {
            $(".fadeinmenu").css("opacity", 1 + $(window).scrollTop() / 0);
        });
    }
});