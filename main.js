(function ($) {
    "use strict";

    // Smooth scrolling for nav links
    $("nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Form submission (you'll need to implement the actual form submission logic)
    $('form').submit(function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (This is a placeholder alert)');
    });

})(jQuery);