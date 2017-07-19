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


	if (!noun.base) return { e: NErrors.NOUN_BASE_UNDEFINED };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ob3VuLmpzIl0sIm5hbWVzIjpbIk5vdW5PYiIsInByb3BzIiwidCIsIk4iLCJ2IiwiY3YiLCJiYXNlIiwicGx1cmFsRm9ybSIsInByb3BlciIsIlBsdXJhbGl0eSIsIk5FcnJvcnMiLCJOR2VuZXJhdGVUZXh0Iiwibm91biIsInBsdXJhbEZvcm1SZXF1ZXN0ZWQiLCJlIiwiTk9VTl9CQVNFX1VOREVGSU5FRCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDdEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxDQUFQLENBQVNELENBQWxCO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxDQUFQLENBQVNFLEVBQWxCO0FBQ0EsTUFBS0MsSUFBTCxHQUFrQkwsTUFBTUssSUFBeEI7QUFDQSxNQUFLQyxVQUFMLEdBQWtCTixNQUFNTSxVQUF4Qjs7QUFFQSxNQUFLQyxNQUFMLEdBQWtCUCxNQUFNTyxNQUFOLElBQWdCLEtBQWxDO0FBQ0E7O0FBRUQsSUFBTUMsWUFBWTtBQUNqQixpQkFBZSxDQURFO0FBRWpCLGFBQWEsR0FGSTtBQUdqQixXQUFhO0FBSEksQ0FBbEI7O0FBTUEsSUFBTUMsVUFBVTtBQUNmLHdCQUFzQjtBQURQLENBQWhCOztBQUlBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFxQztBQUFBLEtBQTlCQyxtQkFBOEIsdUVBQVYsS0FBVTs7O0FBRTFELEtBQUcsQ0FBQ0QsS0FBS04sSUFBVCxFQUNDLE9BQU8sRUFBQ1EsR0FBRUosUUFBUUssbUJBQVgsRUFBUDs7QUFFRCxLQUFNVCxPQUFRTSxLQUFLSixNQUFOLEdBQWdCSSxLQUFLTixJQUFMLENBQVVVLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0JDLFdBQXBCLEtBQW9DTCxLQUFLTixJQUFMLENBQVVZLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBcEQsR0FBeUVOLEtBQUtOLElBQTNGOztBQUVBLEtBQUdPLG1CQUFILEVBQXdCOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0M7O0FBRUQ7QUFDQTtBQUNDOztBQUVELFNBQU9QLE9BQU8sR0FBZDtBQUNBOztBQUVELFFBQU9BLElBQVA7QUFDQSxDQS9CRDs7UUFpQ1FJLE8sR0FBQUEsTztRQUNBQyxhLEdBQUFBLGE7UUFDQVgsTSxHQUFBQSxNO1FBQ0FTLFMsR0FBQUEsUyIsImZpbGUiOiJOb3VuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYSBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gTm91bk9iKHByb3BzKSB7XG5cdHRoaXMudCA9IFNjaGVtYS5OLnRcblx0dGhpcy52ID0gU2NoZW1hLk4uY3Zcblx0dGhpcy5iYXNlICAgICAgID0gcHJvcHMuYmFzZVxuXHR0aGlzLnBsdXJhbEZvcm0gPSBwcm9wcy5wbHVyYWxGb3JtXG5cblx0dGhpcy5wcm9wZXIgICAgID0gcHJvcHMucHJvcGVyIHx8IGZhbHNlXG59XG5cbmNvbnN0IFBsdXJhbGl0eSA9IHtcblx0J05vbmVTZWxlY3RlZCc6MSxcblx0J1Npbmd1bGFyJzogIDEwMCxcblx0J1BsdXJhbCc6ICAgIDIwMCxcbn1cblxuY29uc3QgTkVycm9ycyA9IHtcblx0J05PVU5fQkFTRV9VTkRFRklORUQnOidOb3VuIGJhc2UgdW5kZWZpbmVkJ1xufVxuXG5jb25zdCBOR2VuZXJhdGVUZXh0ID0gKG5vdW4sIHBsdXJhbEZvcm1SZXF1ZXN0ZWQ9ZmFsc2UpID0+IHtcblxuXHRpZighbm91bi5iYXNlKVxuXHRcdHJldHVybiB7ZTpORXJyb3JzLk5PVU5fQkFTRV9VTkRFRklORUR9XG5cblx0Y29uc3QgYmFzZSA9IChub3VuLnByb3BlcikgPyBub3VuLmJhc2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBub3VuLmJhc2Uuc2xpY2UoMSkgOiBub3VuLmJhc2VcblxuXHRpZihwbHVyYWxGb3JtUmVxdWVzdGVkKSB7XG5cblx0XHQvLyBJZiBhbiBpcnJlZ3VsYXIgZm9ybSBvZiB0aGUgcGx1cmFsIGV4aXN0cywgdGhlbiB1c2UgaXQuXG5cdFx0Ly9jb25zdCBwID0gbm91bi5nZXQoJ3BsdXJhbCcpXG5cdFx0Ly9pZiAocCkgcmV0dXJuIHBcblxuXHRcdC8vIE90aGVyd2lzZSBjYWxjdWxhdGUgdGhlIGVuZGluZyBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzLlxuXHRcdC8vY29uc3QgYzEgPSBiYXNlLnNsaWNlKC0xKSAgICAgICAgICAgLy8gcGVubiB5XG5cdFx0Ly9jb25zdCBjMiA9IGJhc2Uuc2xpY2UoLTIpICAgICAgICAgICAvLyBwZW4gIG55XG5cdFx0Ly9jb25zdCBjMyA9IGMyLnNsaWNlKDAsMSkgICAgICAgICAvLyBueSAgIG5cblx0XHQvL2NvbnN0IGM0ID0gYmFzZS5zbGljZSgwLGJhc2UubGVuZ3RoLTEpIC8vIHBlbm5cblxuXHRcdC8vIElmIHRoZSBiYXNlIGVuZHMgd2l0aCBzLCB4LCB6LCBjaCwgb3Igc2gsIG1ha2UgdGhlIHBsdXJhbCBieSBhcHBlbmRpbmcgLWVzLlxuXHRcdC8vaWYoIGMxID09PSAncycgfCBjMSA9PT0gJ3gnICB8IGMxID09PSAneicgfCBjMiA9PT0gJ2NoJyB8IGMyID09PSAnc2gnKVxuXHRcdFx0Ly9yZXR1cm4gYmFzZSArICdlcydcblxuXHRcdC8vIElmIHRoZSBiYXNlIGVuZHMgd2l0aCBjb25zb25hbnQgYW5kIHRoZW4gYSB5LCBtYWtlIHRoZSBwbHVyYWwgYnkgZHJvcHBpbmcgdGhlIHkgYW5kIGFwcGVuZGluZyAtaWVzLlxuXHRcdC8vaWYoICgnYWVpb3VBRUlPVScuaW5kZXhPZihjMykgPCAwKSAmJiBjMSA9PT0gJ3knKVxuXHRcdFx0Ly9yZXR1cm4gYzQgKyAnaWVzJ1xuXG5cdFx0cmV0dXJuIGJhc2UgKyAncydcblx0fVxuXG5cdHJldHVybiBiYXNlXG59XG5cbmV4cG9ydCB7TkVycm9yc31cbmV4cG9ydCB7TkdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7Tm91bk9ifVxuZXhwb3J0IHtQbHVyYWxpdHl9XG4iXX0=