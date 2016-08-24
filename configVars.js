module.exports = (function() {
	const BASE_DIR = '.';

	const HEADER = ['/**',
	  ' * This file is part of HUI library.',
	  ' * Requires jQuery 1.8 or higher',
	  ' *',
	  ' * https://github.com/hivelab-open-projects/hui',
	  ' *',
	  ' * Copyright 2016, Andrew Sohn',
	  ' * Hivelab Co., Ltd',
	  ' * http://www.hivelab.co.kr/',
	  ' *',
	  ' * Licensed under MIT',
	  ' *',
	  ' * Released on: September 3, 2016',
	  ' */',
	  ';',
	  ''].join('\n');

	return {
		'PATHS':{
			'DEV': `${BASE_DIR}/src`,
			'BUILD': `${BASE_DIR}/src/build`,
			'DIST': `${BASE_DIR}/dist`,
			'JSDOC': `${BASE_DIR}/jsdoc`
		},
		'HEADER': HEADER
	};
});