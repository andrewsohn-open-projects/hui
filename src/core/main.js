'use strict';

(function (window, nodeGlobal) {
	var global = {
			jquery: (typeof(jQuery) != "undefined") ? jQuery : null
		},
		globalFunc = {},
		globalClass = {};

	// HUI의 기본 설정 값 (향후 더 추가될 수 있음)
	var globalOpts = {
		template: {
			evaluate: /<\!([\s\S]+?)\!>/g,
			interpolate: /<\!=([\s\S]+?)\!>/g,
			escape: /<\!-([\s\S]+?)\!>/g
		},
		logPath: "logs/debug.html"
	};

	/* inject: modules */
	/* endinject */
	
}, "core");