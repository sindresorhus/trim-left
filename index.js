export default function trimLeft(string) {
	return string.replace(/^[\s\uFEFF\u00A0]+/, '');
}
