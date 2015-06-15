# grunt-ini-handler

> Handling INI files

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ini-handler --save-dev
```

To install this fork add this to your package.json dev dependencies
```js
"devDependencies": {
    "grunt-ini-handler": "*"
  },
```

run

```shell
npm update
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ini-handler');
```

## The "ini-handler" task

### Overview
In your project's Gruntfile, add a section named `ini-handler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    "ini-handler": {
        data : {
            file: "config/example.ini", // INI file to be handled
            values: {
                "example_key": "example_value"
            }
        }
    }
});
```

## Testing
grunt test (very basic and sketchy at best)


## Thanks

Thanks go the the following contributors:

* [Enrique Moreno Tent](https://github.com/enriquemorenotent) - Original inspiration/base taken from his work (although hacked beyond recognition now).