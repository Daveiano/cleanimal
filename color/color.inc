<?php
$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'primary' => t('Primary Color'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Default'),
      'colors' => [
        'primary' => '#ffa07a',
      ],
    ],
  ],
];
// CSS files (excluding @import) to rewrite with new color scheme.
$info['css'] = ['dist/css/color.css'];
