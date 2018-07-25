$('.hamburger').click(function() {
    $(this).toggleClass('is-active');
});

window.lazySizesConfig = window.lazySizesConfig || {};

lazySizesConfig.expand = -20;

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

    /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */

   $.fn.visible = function(partial) {

       var $t            = $(this),
           $w            = $(window),
           viewTop       = $w.scrollTop(),
           viewBottom    = viewTop + $w.height(),
           _top          = $t.offset().top,
           _bottom       = _top + $t.height(),
           compareTop    = partial === true ? _bottom : _top,
           compareBottom = partial === true ? _top : _bottom;

     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
   };

})(jQuery);


var win = $(window);

var allMods = $(".come-in-view");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});
