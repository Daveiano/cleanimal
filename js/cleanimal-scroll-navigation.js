/**
 * @file
 * Scroll navigation.
 */

(function ($, Drupal) {
  'use strict';

  var initialized;

  function init() {
    if (!initialized) {
      initialized = true;

      $('nav#scroll-nav ul li a').eq(0).addClass('active');
    }
  }

  Drupal.behaviors.cleanimal_scroll_navigation = {
    attach: function (context, settings) {

      init();

      // Add class to tabs if scroll navigation is active so we can add a margin
      // show it at the same x-position like the main content.
      if ($("body").hasClass('node-add-edit') && $("#scroll-nav").length) {
        $(".region.region-pre-content nav.tabs").addClass("scroll-nav-active");
      }

      // Smooth scroll to section on scroll-nav click.
      $("#scroll-nav a").once().click(function (e) {
        e.preventDefault();

        var target = this.hash,
          $target = $(target),
          offsetTop = $target.offset().top;

        // If fixed toolbar is active, update the offset and add 50px space.
        if ($('body').hasClass('toolbar-tray-open') && $('body').hasClass('toolbar-horizontal') && $('body').hasClass('toolbar-fixed')) {
          offsetTop = offsetTop - $('body').css('padding-top').replace('px', '') - 50;
        }

        $('html, body').stop().animate({
          'scrollTop': offsetTop
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
      });

      // Set nav link to active.
      $(window).scroll(function () {
        var scrollPos = $(window).scrollTop(),
          fixedTopHeight = 0;

        if ($('body').hasClass('toolbar-tray-open') && $('body').hasClass('toolbar-horizontal') && $('body').hasClass('toolbar-fixed')) {
          fixedTopHeight = $('body').css('padding-top').replace('px', '') - 50;
        }

        $('.scroll-nav-content').each(function (i) {
          var scrollSectionOffset = $(this).offset().top;

          if ((scrollSectionOffset - scrollPos - fixedTopHeight) <= 0) {
            $('nav#scroll-nav ul li a').removeClass('active');
            $('nav#scroll-nav ul li a').eq(i).addClass('active');
          }
        })
      });
    }
  }
})(jQuery, Drupal);
