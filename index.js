var generateWhiteNoise = require('openmusic-white-noise');

// Adapted from https://github.com/zacharydenton/noise.js/blob/master/noise.js
module.exports = function(size) {

	var out = generateWhiteNoise(size);
	var lastOutput = 0.0;

	for(var i = 0; i < size; i++) {

		var white = out[i];
		out[i] = (lastOutput + (0.02 * white)) / 1.02;
		lastOutput = out[i];
		out[i] *= 3.5; // (roughly) compensate for gain
		
	}

	return out;
	
};
