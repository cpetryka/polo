/****************************
    Smooth scroll
****************************/

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

/****************************
    Owl carousel
****************************/

$('.recent-work-carousel').owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 2
        },
        800: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$('.clients-slider').owlCarousel({
    loop: true,
    margin: 5,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        300: {
            items: 2
        },
        500: {
            items: 3
        },
        800: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})

/****************************
    CountTo
****************************/

$(document).ready(function () {
    /* Plugin jquery.countTo */
    $('.timer').viewportChecker({
        callbackFunction: function (elem, action) {
            elem.countTo({
                speed: 4000
            });
        }
    });
});

/****************************
    Viewport
****************************/

$(document).ready(function () {
    $('*[data-animate]').addClass('hide').each(function () {
        $(this).viewportChecker({
            classToAdd: 'show animated ' + $(this).data('animate'),
            classToRemove: 'hide',
            offset: 100
        });
    });
});