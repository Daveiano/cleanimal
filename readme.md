# Installation

## compsoer.json

Add this under the repositories key:

```
{
    "type": "package",
    "package": {
        "name": "efork/cleanimal",
        "version": "dev-master",
        "type":"drupal-theme",
        "source": {
            "url": "http://gitlab.e-fork.local/dba/cleanimal.git",
            "type": "git",
            "reference": "master"
        }
    }
}
```

Also add this to the config key:

`"secure-http": false`

See https://getcomposer.org/doc/06-config.md#secure-http

## Command line

`composer require efork/cleanimal`
