# [wp-fondamenta theme]

Fondamenta is a starting WordPress theme made for developers that’s based on
[HTML5 Boilerplate](http://html5boilerplate.com/) with the addedd goodness of Compass, Sassaparrilla and Susy Grids.

* Source: [https://github.com/federicovezzoli/wp-fondamenta](https://github.com/federicovezzoli/wp-fondamenta)

## Installation

* Clone the git repo - `git clone git://github.com/retlehs/roots.git` - or [download it](https://github.com/retlehs/roots/zipball/master)
* Reference the [theme activation](doc/activation.md) documentation to understand
everything that happens once you activate Roots

## Configuration

Edit `lib/config.php` to enable or disable support for various theme functions
and to define constants that are used throughout the theme.

Edit `lib/init.php` to setup custom navigation menus and post thumbnail sizes.

## Documentation



## Features

* HTML5 Boilerplate’s markup
* Bootstrap from Twitter
* [Theme wrapper](doc/wrapper.md)
* Root relative URLs
* Clean URLs (no more `/wp-content/`)
* All static theme assets are rewritten to the website root (`/assets/css/`,
`/assets/img/`, and `/assets/js/`)
* Cleaner HTML output of navigation menus
* Cleaner output of `wp_head` and enqueued scripts/styles
* Posts use the [hNews](http://microformats.org/wiki/hnews) microformat
* [Multilingual ready](http://www.rootstheme.com/wpml/) (Brazilian Portuguese,
Bulgarian, Catalan, Danish, Dutch, English, Finnish, French, German, Hungarian,
Indonesian, Italian, Korean, Macedonian, Norwegian, Polish, Russian, Simplified
Chinese, Spanish, Swedish, Traditional Chinese, Turkish, Vietnamese)

### Build Script

The [grunt branch](https://github.com/retlehs/roots/tree/grunt) contains a build
script powered by grunt. More information can be found at [Integrating grunt.js with Roots](http://benword.com/integrating-grunt-js-with-roots/).

* Easily compile LESS files
* Minification and concatenation without plugins
* Fewer requests made to the server (one CSS file, one main JS file besides
Modernizr and jQuery)
* Ensures valid JavaScript
* Others working on your project are able to use the same build script and have
a unified development process
* Code is optimized for production use
