/**
 * @file
 * Theme JS.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.cleanimal = {
    attach: function (context, settings) {
      // TODO: Show Views VBO Actions only if a row is selected.

      // Move the messages on the node-add-edit page to the content region.
      if ($("body").hasClass("node-add-edit") && $(".status-messages-wrap").length) {
        $(".status-messages-wrap").prependTo(".layout-region.layout-region-node-main");
      }
      if ($("body").hasClass("node-add-edit") && $(".region.region-help").length) {
        $(".region.region-help").prependTo(".layout-region.layout-region-node-main");
      }

      if ($('.filters-wrapper') && $('.filters-wrapper > div').length > 5) {
        $('.filters-wrapper').addClass('many-filters');
      }
    }
  };

})(jQuery, Drupal);
