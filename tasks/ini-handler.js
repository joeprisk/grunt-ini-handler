/*
 * grunt-ini-file
 *
 *
 * Copyright (c) 2014 Enrique Moreno Tent
 * E-mail: enriquemorenotent@gmail.com
 * URL: http://enriquemorenotent.com
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	grunt.registerMultiTask('ini-handler', 'Changing values to an INI file', function() {

		var data = this.data;

		var file = data.file;
		if (!grunt.file.exists(file)) {
			grunt.log.warn(file + ' does not exist');
			grunt.file.write(file);
			grunt.log.ok(file + ' created');
		}

		// Read in the existing key values
		var src       = grunt.file.read(file),
			keyValues = stringToObject(src); // save into an object

		// For each updated key value
		Object.keys(data.values).forEach(function(key) {

			// update keyValues object
			keyValues[key] = data.values[key];


		});

		src = objectToString(keyValues);

		grunt.file.write(file, src);
		grunt.log.ok(Object.keys(data.values).length + ' key:values added');

	});

	/**
	 * convert string to object
	 *
	 * input : key=value
	 * ouput : { "key" : "value" }
	 *
	 * @param string
	 * @returns {{}}
	 */
	function stringToObject(string) {

		// split by line breaks
		var rows = string.split("\n"),
			parts = {};

		rows.forEach(function(string) {

			if(/\S/.test(string)) {
				var split = string.split("=");

				parts[split[0].trim()] = split[1].trim();
			}
		});

		return parts;
	}


	function objectToString(object) {

		var strings = [];

		Object.keys(object).forEach(function(key) {

			if(key && object[key]) {
				strings.push(key + "=" + object[key]);
			}
		});

		return strings.join("\n") + "\n";
	}
};
