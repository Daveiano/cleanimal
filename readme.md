# Cleanimal

## Installation

### composer.json

Add this under the repositories key:

```
{
    "type": "package",
    "package": {
        "name": "efork/cleanimal",
        "version": "1.0",
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

`composer require efork/cleanimal`


### Other

Use this after color settings have changed (new color added in theme for coniguration):

`drush cdel color.theme.cleanimal`
