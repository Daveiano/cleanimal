/**
 * @file
 * Theme JS.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.cleanimal = {
    attach: function (context, settings) {
      // Add View Footer to Pager.
     /* var $views = $('.view');

      $views.each(function () {
        var $viewFooter = $(this).find('.view-footer'),
          $pager = $(this).find('.pager');

        if ($pager.length && $viewFooter.length) {
          $pager.append($viewFooter);
        }
      });*/

      // TODO: Show Views VBO Actions only if a row is selected.
    }
  };

})(jQuery, Drupal);
