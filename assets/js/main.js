jQuery(document).ready(function($) {

    // Skill level bars animation
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 20
            }, 600);
        }
    });
    
    // Fade in sections on scroll (subtle animation)
    function fadeInOnScroll() {
        $('.section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in-visible');
            }
        });
    }
    
    // Initial check
    fadeInOnScroll();
    
    // Check on scroll
    $(window).on('scroll', fadeInOnScroll);
    
    // Back to top button
    var backToTop = $('<button>', {
        'class': 'back-to-top',
        'aria-label': 'Back to top',
        'html': '<i class="fa fa-arrow-up"></i>',
        'css': {
            'display': 'none',
            'position': 'fixed',
            'bottom': '30px',
            'right': '30px',
            'width': '50px',
            'height': '50px',
            'border-radius': '50%',
            'background': '#4B6A78',
            'color': '#fff',
            'border': 'none',
            'cursor': 'pointer',
            'z-index': '1000',
            'box-shadow': '0 4px 12px rgba(0,0,0,0.2)',
            'transition': 'all 0.3s ease'
        }
    });
    
    $('body').append(backToTop);
    
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            backToTop.fadeIn();
        } else {
            backToTop.fadeOut();
        }
    });
    
    backToTop.on('click', function() {
        $('html, body').animate({scrollTop: 0}, 600);
    });
    
    backToTop.on('mouseenter', function() {
        $(this).css({
            'transform': 'scale(1.1)',
            'box-shadow': '0 6px 16px rgba(0,0,0,0.3)'
        });
    }).on('mouseleave', function() {
        $(this).css({
            'transform': 'scale(1)',
            'box-shadow': '0 4px 12px rgba(0,0,0,0.2)'
        });
    });

});