<?php

/**
 * @file
 * Color schemes.
 *
 * TODO: Somehow we need to calculate the values for the light/dark variants.
 * TODO: Preview.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'primary' => t('Primary Color'),
    'primary_light' => t('Primary Light Color'),
    'primary_dark' => t('Primary Dark Color'),
    'primary_highlight' => t('Primary Highlight Color'),
    'secondary' => t('Secondary Color'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Default'),
      'colors' => [
        'primary' => '#00376a',
        'primary_light' => '#89d2f6',
        'primary_dark' => '#2d2376',
        'primary_highlight' => '#00b6ed',
        'secondary' => '#c3a201',
      ],
    ],
  ],
];

// CSS files (excluding @import) to rewrite with new color scheme.
// TODO: Extract all color relevant selectors to a color.css and just use this.
$info['css'] = [
  'css/base/style.css',
  'css/component/component.css',
  'css/layout/layout.css',
  'css/state/state.css',
  'css/theme/theme.css',
];
