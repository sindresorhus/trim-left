import test from 'ava';
import trimLeft from './index.js';

test('main', t => {
	t.is(trimLeft('  unicorn  '), 'unicorn  ');
	t.is(trimLeft('\r\n  \nunicorn'), 'unicorn');
	t.is(trimLeft('\u00A0\uFEFFunicorn'), 'unicorn');

	// Zero-width space (zws), next line character (nel), non-character (bom) are not whitespace
	t.is(trimLeft('\u200B\u0085\uFFFE'), '\u200B\u0085\uFFFE');
});
