/**
 * @file
 * Theme JS.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.cleanimal = {
    attach: function (context, settings) {

      // On default hide the node bulk form, only show it if nodes are selected.
      /*var $contentView = $('.view-content.view-id-content , .view-inhalt-buecher.view-id-inhalt_buecher', context),
        $bulkForm = $contentView.find('#edit-header div[id^="edit-node-bulk-form"]');

      if ($contentView) {
        $bulkForm.addClass('hidden');

        $contentView.find('table tbody tr .views-field-node-bulk-form input[type=checkbox]').change(function () {
          var checkedRows = $contentView.find('table tbody tr .views-field-node-bulk-form input:checked').length;

          console.log(checkedRows);

          if (checkedRows) {
            $bulkForm.removeClass('hidden');
          }
          else {
            $bulkForm.addClass('hidden');
          }
        });
      }*/

      // Add View Footer to Pager.
      var $views = $('.view');

      $views.each(function () {
        var $viewFooter = $(this).find('.view-footer'),
          $pager = $(this).find('.pager');

        if ($pager.length && $viewFooter.length) {
          $pager.append($viewFooter);
        }
      });
    }
  };

})(jQuery, Drupal);
