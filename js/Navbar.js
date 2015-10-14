	$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("#nav").position();
        if (scroll > topDist.top) {
            $('nav').css({"position":"fixed","top":"0","opacity": "0.75"});
        } else {
            $('nav').css({"position":"static","top":"auto","opacity": "1"});
        }
    });
});
