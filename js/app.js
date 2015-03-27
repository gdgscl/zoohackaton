var zoohackaton = function() {
    'use strict'
    $('nav ul li a').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            var target = this.hash;
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 800, function() {
                    return window.history.pushState(null, null, target);
                });
        });
    });
}
zoohackaton();