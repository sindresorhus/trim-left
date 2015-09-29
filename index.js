'use strict';
module.exports = function (str) {
	return str.replace(/^[\s\uFEFF\u00A0]+/, '');
};
