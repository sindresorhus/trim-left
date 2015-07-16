'use strict';
var test = require('ava');
var trimLeft = require('./');

test(function (t) {
	t.assert(trimLeft('  unicorn  ') === 'unicorn  ');
	t.assert(trimLeft('\r\n  \nunicorn') === 'unicorn');

	t.assert(trimLeft('\u00A0\uFEFFunicorn') === 'unicorn');

	// zero-width space (zws), next line character (nel), non-character (bom) are not whitespace
	t.assert(trimLeft('\u200B\u0085\uFFFE') === '\u200B\u0085\uFFFE');

	t.end();
});
