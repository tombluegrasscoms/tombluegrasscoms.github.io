$(function(){
    $(".foxybutton").hover(function(){
        $(".illufoxy").toggleClass("bgcc");
    });
});
$(function(){
    $(".foxybutton").hover(function(){
        $(".whitefoxy").toggleClass("fadein");
    });
});
$(function(){
    $(".foxybutton").click(function(){
        $(".illu").toggleClass("rofox");
    });
});
    $('.ham').on('click', function(e) {
      $('.menu').toggleClass("openmenu"); //you can list several class names
      e.preventDefault();
    });
    $('.ham').on('click', function(e) {
      $('.ham').toggleClass("hamclick"); //you can list several class names
      e.preventDefault();
    });
    $('.ham').on('click', function(e) {
      $('.behindov').toggleClass("fadein"); //you can list several class names
      e.preventDefault();
    });
