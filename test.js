'use strict';
var test = require('ava');
var trimLeft = require('./');

test(function (t) {
	t.assert(trimLeft('  unicorn  ') === 'unicorn  ');
	t.assert(trimLeft('\r\n  \nunicorn') === 'unicorn');
	t.end();
});
