$('.hamburger').click(function() {
    $(this).toggleClass('is-active');
});

window.lazySizesConfig = window.lazySizesConfig || {};

lazySizesConfig.expand = 100;

//page is optimized for fast onload event
lazySizesConfig.loadMode = 1;

(function ($) {

    var touchStartX = null;

    $('.carousel').each(function () {
        var $carousel = $(this);
        $(this).on('touchstart', function (event) {
            var e = event.originalEvent;
            if (e.touches.length == 1) {
                var touch = e.touches[0];
                touchStartX = touch.pageX;
            }
        }).on('touchmove', function (event) {
            var e = event.originalEvent;
            if (touchStartX != null) {
                var touchCurrentX = e.changedTouches[0].pageX;
                if ((touchCurrentX - touchStartX) > 60) {
                    touchStartX = null;
                    $carousel.carousel('prev');
                } else if ((touchStartX - touchCurrentX) > 60) {
                    touchStartX = null;
                    $carousel.carousel('next');
                }
            }
        }).on('touchend', function () {
            touchStartX = null;
        });
    });

})(jQuery);
