# Cleanimal

## Introduction

Clean Drupal 8 admin theme.

## Requirements

To use the Scroll navigation and the Flexible groups you need the
[Field Group module](https://www.drupal.org/project/field_group)

## Installation

### composer.json

Add this under the repositories key:

```
{
    "type": "package",
    "package": {
        "name": "efork/cleanimal",
        "version": "1.x-dev",
        "type":"drupal-theme",
        "source": {
            "url": "https://github.com/Daveiano/cleanimal.git",
            "type": "git",
            "reference": "8.x-1.x"
        }
    }
},
```

### Command line

`composer require efork/cleanimal:1.x-dev`


## Configuration

### Scroll navigation

<ul>
  <li>Go to 'Manage form display' in your content type.</li>
  <li>Choose 'Add group' and add a HTML-Element and name it
  "Cleanimal Scrollnav". This will be the parent group.</li>
  <li>Add as many HTML-Elements and name them as you want, this will be your
  Scroll navigation links.</li>
  <li>Add all groups under the "Cleanimal Scrollnav" parent group and your
  fields under these groups.</li>
</ul>

### Flexible groups

<ul>
  <li>Add Field Group HTML-Element groups and give them an "Extra CSS classes"
  of "flex".</li>
  <li>Place fields under this group.</li>
</ul>

## Troubleshooting

Use this after color settings have changed (new color added in theme for coniguration):

`drush cdel color.theme.cleanimal`


## Maintainers

Current maintainer:
 * David Bätge (daveiano) - https://www.drupal.org/u/daveiano
