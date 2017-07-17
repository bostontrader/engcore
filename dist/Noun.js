'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Plurality = exports.NounOb = exports.NGenerateText = exports.NErrors = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NounOb(props) {
	this.t = _SchemaConstants2.default.N.t;
	this.v = _SchemaConstants2.default.N.cv;
	this.base = props.base;
	this.pluralForm = props.pluralForm;

	this.proper = props.proper || false;
}

var Plurality = {
	'NoneSelected': 1,
	'Singular': 100,
	'Plural': 200
};

var NErrors = {
	'NOUN_BASE_UNDEFINED': 'Noun base undefined'
};

var NGenerateText = function NGenerateText(noun) {
	var pluralFormRequested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	if (!noun.base) return { e: 'Noun base undefined' };

	var base = noun.proper ? noun.base.charAt(0).toUpperCase() + noun.base.slice(1) : noun.base;

	if (pluralFormRequested) {

		// If an irregular form of the plural exists, then use it.
		//const p = noun.get('plural')
		//if (p) return p

		// Otherwise calculate the ending according to the rules.
		//const c1 = base.slice(-1)           // penn y
		//const c2 = base.slice(-2)           // pen  ny
		//const c3 = c2.slice(0,1)         // ny   n
		//const c4 = base.slice(0,base.length-1) // penn

		// If the base ends with s, x, z, ch, or sh, make the plural by appending -es.
		//if( c1 === 's' | c1 === 'x'  | c1 === 'z' | c2 === 'ch' | c2 === 'sh')
		//return base + 'es'

		// If the base ends with consonant and then a y, make the plural by dropping the y and appending -ies.
		//if( ('aeiouAEIOU'.indexOf(c3) < 0) && c1 === 'y')
		//return c4 + 'ies'

		return base + 's';
	}

	return base;
};

exports.NErrors = NErrors;
exports.NGenerateText = NGenerateText;
exports.NounOb = NounOb;
exports.Plurality = Plurality;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ob3VuLmpzIl0sIm5hbWVzIjpbIk5vdW5PYiIsInByb3BzIiwidCIsIk4iLCJ2IiwiY3YiLCJiYXNlIiwicGx1cmFsRm9ybSIsInByb3BlciIsIlBsdXJhbGl0eSIsIk5FcnJvcnMiLCJOR2VuZXJhdGVUZXh0Iiwibm91biIsInBsdXJhbEZvcm1SZXF1ZXN0ZWQiLCJlIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUN0QixNQUFLQyxDQUFMLEdBQVMsMEJBQU9DLENBQVAsQ0FBU0QsQ0FBbEI7QUFDQSxNQUFLRSxDQUFMLEdBQVMsMEJBQU9ELENBQVAsQ0FBU0UsRUFBbEI7QUFDQSxNQUFLQyxJQUFMLEdBQWtCTCxNQUFNSyxJQUF4QjtBQUNBLE1BQUtDLFVBQUwsR0FBa0JOLE1BQU1NLFVBQXhCOztBQUVBLE1BQUtDLE1BQUwsR0FBa0JQLE1BQU1PLE1BQU4sSUFBZ0IsS0FBbEM7QUFDQTs7QUFFRCxJQUFNQyxZQUFZO0FBQ2pCLGlCQUFlLENBREU7QUFFakIsYUFBYSxHQUZJO0FBR2pCLFdBQWE7QUFISSxDQUFsQjs7QUFNQSxJQUFNQyxVQUFVO0FBQ2Ysd0JBQXNCO0FBRFAsQ0FBaEI7O0FBSUEsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQXFDO0FBQUEsS0FBOUJDLG1CQUE4Qix1RUFBVixLQUFVOzs7QUFFMUQsS0FBRyxDQUFDRCxLQUFLTixJQUFULEVBQ0MsT0FBTyxFQUFDUSxHQUFFLHFCQUFILEVBQVA7O0FBRUQsS0FBTVIsT0FBUU0sS0FBS0osTUFBTixHQUFnQkksS0FBS04sSUFBTCxDQUFVUyxNQUFWLENBQWlCLENBQWpCLEVBQW9CQyxXQUFwQixLQUFvQ0osS0FBS04sSUFBTCxDQUFVVyxLQUFWLENBQWdCLENBQWhCLENBQXBELEdBQXlFTCxLQUFLTixJQUEzRjs7QUFFQSxLQUFHTyxtQkFBSCxFQUF3Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNDOztBQUVEO0FBQ0E7QUFDQzs7QUFFRCxTQUFPUCxPQUFPLEdBQWQ7QUFDQTs7QUFFRCxRQUFPQSxJQUFQO0FBQ0EsQ0EvQkQ7O1FBaUNRSSxPLEdBQUFBLE87UUFDQUMsYSxHQUFBQSxhO1FBQ0FYLE0sR0FBQUEsTTtRQUNBUyxTLEdBQUFBLFMiLCJmaWxlIjoiTm91bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2hlbWEgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIE5vdW5PYihwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuTi50XG5cdHRoaXMudiA9IFNjaGVtYS5OLmN2XG5cdHRoaXMuYmFzZSAgICAgICA9IHByb3BzLmJhc2Vcblx0dGhpcy5wbHVyYWxGb3JtID0gcHJvcHMucGx1cmFsRm9ybVxuXG5cdHRoaXMucHJvcGVyICAgICA9IHByb3BzLnByb3BlciB8fCBmYWxzZVxufVxuXG5jb25zdCBQbHVyYWxpdHkgPSB7XG5cdCdOb25lU2VsZWN0ZWQnOjEsXG5cdCdTaW5ndWxhcic6ICAxMDAsXG5cdCdQbHVyYWwnOiAgICAyMDAsXG59XG5cbmNvbnN0IE5FcnJvcnMgPSB7XG5cdCdOT1VOX0JBU0VfVU5ERUZJTkVEJzonTm91biBiYXNlIHVuZGVmaW5lZCdcbn1cblxuY29uc3QgTkdlbmVyYXRlVGV4dCA9IChub3VuLCBwbHVyYWxGb3JtUmVxdWVzdGVkPWZhbHNlKSA9PiB7XG5cblx0aWYoIW5vdW4uYmFzZSlcblx0XHRyZXR1cm4ge2U6J05vdW4gYmFzZSB1bmRlZmluZWQnfVxuXG5cdGNvbnN0IGJhc2UgPSAobm91bi5wcm9wZXIpID8gbm91bi5iYXNlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbm91bi5iYXNlLnNsaWNlKDEpIDogbm91bi5iYXNlXG5cblx0aWYocGx1cmFsRm9ybVJlcXVlc3RlZCkge1xuXG5cdFx0Ly8gSWYgYW4gaXJyZWd1bGFyIGZvcm0gb2YgdGhlIHBsdXJhbCBleGlzdHMsIHRoZW4gdXNlIGl0LlxuXHRcdC8vY29uc3QgcCA9IG5vdW4uZ2V0KCdwbHVyYWwnKVxuXHRcdC8vaWYgKHApIHJldHVybiBwXG5cblx0XHQvLyBPdGhlcndpc2UgY2FsY3VsYXRlIHRoZSBlbmRpbmcgYWNjb3JkaW5nIHRvIHRoZSBydWxlcy5cblx0XHQvL2NvbnN0IGMxID0gYmFzZS5zbGljZSgtMSkgICAgICAgICAgIC8vIHBlbm4geVxuXHRcdC8vY29uc3QgYzIgPSBiYXNlLnNsaWNlKC0yKSAgICAgICAgICAgLy8gcGVuICBueVxuXHRcdC8vY29uc3QgYzMgPSBjMi5zbGljZSgwLDEpICAgICAgICAgLy8gbnkgICBuXG5cdFx0Ly9jb25zdCBjNCA9IGJhc2Uuc2xpY2UoMCxiYXNlLmxlbmd0aC0xKSAvLyBwZW5uXG5cblx0XHQvLyBJZiB0aGUgYmFzZSBlbmRzIHdpdGggcywgeCwgeiwgY2gsIG9yIHNoLCBtYWtlIHRoZSBwbHVyYWwgYnkgYXBwZW5kaW5nIC1lcy5cblx0XHQvL2lmKCBjMSA9PT0gJ3MnIHwgYzEgPT09ICd4JyAgfCBjMSA9PT0gJ3onIHwgYzIgPT09ICdjaCcgfCBjMiA9PT0gJ3NoJylcblx0XHRcdC8vcmV0dXJuIGJhc2UgKyAnZXMnXG5cblx0XHQvLyBJZiB0aGUgYmFzZSBlbmRzIHdpdGggY29uc29uYW50IGFuZCB0aGVuIGEgeSwgbWFrZSB0aGUgcGx1cmFsIGJ5IGRyb3BwaW5nIHRoZSB5IGFuZCBhcHBlbmRpbmcgLWllcy5cblx0XHQvL2lmKCAoJ2FlaW91QUVJT1UnLmluZGV4T2YoYzMpIDwgMCkgJiYgYzEgPT09ICd5Jylcblx0XHRcdC8vcmV0dXJuIGM0ICsgJ2llcydcblxuXHRcdHJldHVybiBiYXNlICsgJ3MnXG5cdH1cblxuXHRyZXR1cm4gYmFzZVxufVxuXG5leHBvcnQge05FcnJvcnN9XG5leHBvcnQge05HZW5lcmF0ZVRleHR9XG5leHBvcnQge05vdW5PYn1cbmV4cG9ydCB7UGx1cmFsaXR5fVxuIl19