# openmusic-brown-noise

> Function to generate n samples of brown noise

[![Install with NPM](https://nodei.co/npm/openmusic-brown-noise.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-brown-noise/)

## Usage

Install first: `npm install openmusic-brown-noise`.

Then you can use it in your code:

```javascript
var generateBrownNoise = require('openmusic-brown-noise');

// this generates an array with 100 brown noise samples
var samples = generateBrownNoise(100);

// a second of brown noise if sampling rate is 44100:
var brownNoiseSecond = generateBrownNoise(44100);
```

## Demo

** YOU NEED SUPPORT FOR WEB COMPONENTS IN YOUR BROWSER BECAUSE WE'RE NOT SHIMMING ANYTHING IN **

Firefox: go to `about:config`, find `dom.webcomponents.enabled` and set it to true.

Chrome: maybe nothing to do?

Run `npm install` so it installs stuff for the demo. Then run `gulp build`, and then you can open `build/demo/index.html` for the demo.

If you do changes in the code, you'll need to rebuild the demo. Use `gulp build` or `gulp` only for running `build` and setting up a `watch` loop that automatically rebuilds the demo as you change its files.
