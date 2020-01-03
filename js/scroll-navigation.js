/**
 * @file
 * Scroll navigation.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.cleanimal_scroll_navigation = {
    attach: function (context, settings) {

      // Smooth scroll to section.
      /*$("#scroll-nav a").click(function (e) {
        e.preventDefault();

        // TODO: Same as in lights.js.
        var aid = $(this).attr("href"),
          top = $(document).scrollTop(),
          // Opened.
          scrollTop = $(aid).offset().top - $('body').css('padding-top').replace('px', '') - 20,
          $toolbarlining = $('.toolbar-tray'),
          found = false;

        $toolbarlining.each(function () {
          if ($(this).hasClass('is-active')) {
            found = true
          }
        });

        if (!found) {
          scrollTop = $(aid).offset().top - $('body').css('padding-top').replace('px', '') - 59;
        }

        if (top === 0) {
          // Opened Submenu.
          if (found) {
            scrollTop = $(aid).offset().top - $('body').css('padding-top').replace('px', '') - 80;
          }
          // Closed.
          else {
            scrollTop = $(aid).offset().top - $('body').css('padding-top').replace('px', '') - 119;
          }
        }

        if ($(this).parent().index() === 0) {
          scrollTop = 0;
        }

        $('html,body').animate({scrollTop: scrollTop},'fast');
      });

      // Set nav link to active.
      $(window).scroll(function () {
        var
          windscroll = $(window).scrollTop(),
          $nodeSecondary = $('.layout-region.layout-region-node-secondary'),
          $body = $('body'),
          $header = $('header.content-header'),
          $secondaryNav = $('.block.block-core.block-local-tasks-block'),
          bodyPadding = parseInt($body.css('padding-top')),
          // @todo dynamic header height is not working because of animating header to specific height have to do it static
          //headerHeight = $header.outerHeight(),
          headerHeight = 120,
          $toolbarlining = $('.toolbar-tray'),
          found = false;

        $toolbarlining.each(function () {
          if ($(this).hasClass('is-active')) {
            found = true
          }
        });

        if ($body.hasClass('node-add-edit')) {
          if (windscroll > 0) {

            $header.addClass('fixed small');
            $header.css("top", bodyPadding + "px");

            $secondaryNav.addClass('fixed');
            $secondaryNav.css("top", headerHeight + bodyPadding + "px");

            $('.page-content').addClass('padding-top');

          }
          else {
            $header.removeClass('fixed small');
            $secondaryNav.removeClass('fixed');
            $('.page-content').removeClass('padding-top');
          }
        }

        if (windscroll > 0) {
          $('nav#scroll-nav').addClass('sticky');
          $nodeSecondary.addClass('sticky');
        }
        else {
          $('nav#scroll-nav').removeClass('sticky');
          $nodeSecondary.removeClass('sticky');
        }

        $('.field-group-html-element.scroll-nav-content').each(function (i) {
          if (found) {
            if (($(this).position().top - $('body').css('padding-top').replace('px', '') - 30) <= windscroll) {
              $('nav#scroll-nav a.active').removeClass('active');
              $('nav#scroll-nav a').eq(i).addClass('active');
            }
          }
          else {
            if (($(this).position().top - $('body').css('padding-top').replace('px', '') - 69) <= windscroll) {
              $('nav#scroll-nav a.active').removeClass('active');
              $('nav#scroll-nav a').eq(i).addClass('active');
            }
          }
        });

      }).scroll();*/

    }
  }
})(jQuery, Drupal);
