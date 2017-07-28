'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NErrors = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _NDict = require('./NDict');

var _NDict2 = _interopRequireDefault(_NDict);

var _Plurality = require('../Plurality');

var _Plurality2 = _interopRequireDefault(_Plurality);

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function N(props) {

	this.t = _SchemaConstants2.default.N.t;
	this.v = _SchemaConstants2.default.N.cv;

	// Sensible defaults.
	this.inf = {};
	this.plurality = _Plurality2.default.Singular;
	this.proper = false;
	this.genative = false;

	if (props) {
		if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
			if ('base' in props) {
				this.base = props;
				if (props.base in _NDict2.default) {
					var n = _NDict2.default[props.base];
					this.inf = n.inf;
					this.proper = n.proper;
				} else {
					this.inf = props.inf || {};
					this.proper = props.proper || false;
				}
				this.plurality = props.plurality || _Plurality2.default.Singular;
				this.genative = props.genative || false;
			}
		} else if (typeof props === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props;
			if (props in _NDict2.default) {
				var _n = _NDict2.default[props];
				this.inf = _n.inf;
				this.proper = _n.proper;
			}
		}
	}
}

N.prototype = Object.create(new _POS2.default());

var NErrors = {
	'MISSING_BASE': 'This noun has no base specified.',
	'REQUESTED_INFLECTION_UNDEFINED': 'The requested inflection is undefined for this noun. Perhaps it was not found in the dictionary.'
};

N.prototype.analyse = function () {

	if (!('base' in this)) return { t: undefined, e: [NErrors.MISSING_BASE] };

	var inf_key = 's'; // by default we will use the singular, non-genative inflection
	switch (this.plurality) {
		case _Plurality2.default.Plural:
			inf_key = this.genative ? 'pg' : 'p';
			break;
		default:
			inf_key = this.genative ? 'sg' : 's';
	}

	if (!(inf_key in this.inf)) return { t: undefined, e: [NErrors.REQUESTED_INFLECTION_UNDEFINED] };

	var retVal = this.inf[inf_key];

	retVal = this.proper ? retVal.charAt(0).toUpperCase() + retVal.slice(1) : retVal;
	return { t: retVal, e: [] };
};

exports.default = N;
exports.NErrors = NErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvbi9OLmpzIl0sIm5hbWVzIjpbIk4iLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJpbmYiLCJwbHVyYWxpdHkiLCJTaW5ndWxhciIsInByb3BlciIsImdlbmF0aXZlIiwiYmFzZSIsIm4iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJORXJyb3JzIiwiYW5hbHlzZSIsInVuZGVmaW5lZCIsImUiLCJNSVNTSU5HX0JBU0UiLCJpbmZfa2V5IiwiUGx1cmFsIiwiUkVRVUVTVEVEX0lORkxFQ1RJT05fVU5ERUZJTkVEIiwicmV0VmFsIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLENBQVQsQ0FBV0MsS0FBWCxFQUFrQjs7QUFFakIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPRixDQUFQLENBQVNFLENBQWxCO0FBQ0EsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPSCxDQUFQLENBQVNJLEVBQWxCOztBQUVBO0FBQ0EsTUFBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxNQUFLQyxTQUFMLEdBQWlCLG9CQUFVQyxRQUEzQjtBQUNBLE1BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsTUFBS0MsUUFBTCxHQUFpQixLQUFqQjs7QUFFQSxLQUFHUixLQUFILEVBQVU7QUFDVCxNQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBa0IsUUFBckIsRUFBK0I7QUFDOUIsT0FBRyxVQUFVQSxLQUFiLEVBQW9CO0FBQ25CLFNBQUtTLElBQUwsR0FBWVQsS0FBWjtBQUNBLFFBQUdBLE1BQU1TLElBQU4sbUJBQUgsRUFBd0I7QUFDdkIsU0FBTUMsSUFBSSxnQkFBTVYsTUFBTVMsSUFBWixDQUFWO0FBQ0EsVUFBS0wsR0FBTCxHQUFjTSxFQUFFTixHQUFoQjtBQUNBLFVBQUtHLE1BQUwsR0FBY0csRUFBRUgsTUFBaEI7QUFDQSxLQUpELE1BSU87QUFDTixVQUFLSCxHQUFMLEdBQWNKLE1BQU1JLEdBQU4sSUFBYSxFQUEzQjtBQUNBLFVBQUtHLE1BQUwsR0FBY1AsTUFBTU8sTUFBTixJQUFnQixLQUE5QjtBQUNBO0FBQ0QsU0FBS0YsU0FBTCxHQUFpQkwsTUFBTUssU0FBTixJQUFtQixvQkFBVUMsUUFBOUM7QUFDQSxTQUFLRSxRQUFMLEdBQWlCUixNQUFNUSxRQUFOLElBQWtCLEtBQW5DO0FBQ0E7QUFDRCxHQWRELE1BY08sSUFBRyxPQUFPUixLQUFQLEtBQWtCLFFBQXJCLEVBQStCO0FBQ3JDO0FBQ0EsUUFBS1MsSUFBTCxHQUFZVCxLQUFaO0FBQ0EsT0FBR0Esd0JBQUgsRUFBbUI7QUFDbEIsUUFBTVUsS0FBSSxnQkFBTVYsS0FBTixDQUFWO0FBQ0EsU0FBS0ksR0FBTCxHQUFXTSxHQUFFTixHQUFiO0FBQ0EsU0FBS0csTUFBTCxHQUFjRyxHQUFFSCxNQUFoQjtBQUNBO0FBQ0Q7QUFDRDtBQUNEOztBQUVEUixFQUFFWSxTQUFGLEdBQWNDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFkOztBQUVBLElBQU1DLFVBQVU7QUFDZixpQkFBZSxrQ0FEQTtBQUVmLG1DQUFpQztBQUZsQixDQUFoQjs7QUFLQWYsRUFBRVksU0FBRixDQUFZSSxPQUFaLEdBQXNCLFlBQVc7O0FBRWhDLEtBQUcsRUFBRSxVQUFVLElBQVosQ0FBSCxFQUNDLE9BQU8sRUFBQ2QsR0FBR2UsU0FBSixFQUFlQyxHQUFFLENBQUNILFFBQVFJLFlBQVQsQ0FBakIsRUFBUDs7QUFFRCxLQUFJQyxVQUFVLEdBQWQsQ0FMZ0MsQ0FLZDtBQUNsQixTQUFPLEtBQUtkLFNBQVo7QUFDQyxPQUFLLG9CQUFVZSxNQUFmO0FBQ0NELGFBQVUsS0FBS1gsUUFBTCxHQUFnQixJQUFoQixHQUF1QixHQUFqQztBQUNBO0FBQ0Q7QUFDQ1csYUFBVSxLQUFLWCxRQUFMLEdBQWdCLElBQWhCLEdBQXVCLEdBQWpDO0FBTEY7O0FBUUEsS0FBRyxFQUFFVyxXQUFXLEtBQUtmLEdBQWxCLENBQUgsRUFDQyxPQUFPLEVBQUNILEdBQUdlLFNBQUosRUFBZUMsR0FBRSxDQUFDSCxRQUFRTyw4QkFBVCxDQUFqQixFQUFQOztBQUVELEtBQUlDLFNBQVMsS0FBS2xCLEdBQUwsQ0FBU2UsT0FBVCxDQUFiOztBQUVBRyxVQUFVLEtBQUtmLE1BQU4sR0FBZ0JlLE9BQU9DLE1BQVAsQ0FBYyxDQUFkLEVBQWlCQyxXQUFqQixLQUFpQ0YsT0FBT0csS0FBUCxDQUFhLENBQWIsQ0FBakQsR0FBbUVILE1BQTVFO0FBQ0EsUUFBTyxFQUFDckIsR0FBR3FCLE1BQUosRUFBWUwsR0FBRSxFQUFkLEVBQVA7QUFDQSxDQXJCRDs7a0JBdUJlbEIsQztRQUNQZSxPLEdBQUFBLE8iLCJmaWxlIjoiTi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBORGljdCAgICAgZnJvbSAnLi9ORGljdCdcbmltcG9ydCBQbHVyYWxpdHkgZnJvbSAnLi4vUGx1cmFsaXR5J1xuaW1wb3J0IFBPUyAgICAgICBmcm9tICcuLi9QT1MnXG5pbXBvcnQgU2NoZW1hICAgIGZyb20gJy4uLy4uL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gTihwcm9wcykge1xuXG5cdHRoaXMudCA9IFNjaGVtYS5OLnRcblx0dGhpcy52ID0gU2NoZW1hLk4uY3ZcblxuXHQvLyBTZW5zaWJsZSBkZWZhdWx0cy5cblx0dGhpcy5pbmYgPSB7fVxuXHR0aGlzLnBsdXJhbGl0eSA9IFBsdXJhbGl0eS5TaW5ndWxhclxuXHR0aGlzLnByb3BlciA9IGZhbHNlXG5cdHRoaXMuZ2VuYXRpdmUgID0gZmFsc2VcblxuXHRpZihwcm9wcykge1xuXHRcdGlmKHR5cGVvZihwcm9wcykgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRpZignYmFzZScgaW4gcHJvcHMpIHtcblx0XHRcdFx0dGhpcy5iYXNlID0gcHJvcHNcblx0XHRcdFx0aWYocHJvcHMuYmFzZSBpbiBORGljdCkge1xuXHRcdFx0XHRcdGNvbnN0IG4gPSBORGljdFtwcm9wcy5iYXNlXVxuXHRcdFx0XHRcdHRoaXMuaW5mICAgID0gbi5pbmZcblx0XHRcdFx0XHR0aGlzLnByb3BlciA9IG4ucHJvcGVyXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbmYgICAgPSBwcm9wcy5pbmYgfHwge31cblx0XHRcdFx0XHR0aGlzLnByb3BlciA9IHByb3BzLnByb3BlciB8fCBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGx1cmFsaXR5ID0gcHJvcHMucGx1cmFsaXR5IHx8IFBsdXJhbGl0eS5TaW5ndWxhclxuXHRcdFx0XHR0aGlzLmdlbmF0aXZlICA9IHByb3BzLmdlbmF0aXZlIHx8IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKHR5cGVvZihwcm9wcykgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHQvLyBUaGUgcHJvcCBpcyBhIHN0cmluZy4gQXNzdW1lIHRoYXQncyB0aGUgYmFzZS5cblx0XHRcdHRoaXMuYmFzZSA9IHByb3BzXG5cdFx0XHRpZihwcm9wcyBpbiBORGljdCkge1xuXHRcdFx0XHRjb25zdCBuID0gTkRpY3RbcHJvcHNdXG5cdFx0XHRcdHRoaXMuaW5mID0gbi5pbmZcblx0XHRcdFx0dGhpcy5wcm9wZXIgPSBuLnByb3BlclxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobmV3IFBPUygpKTtcblxuY29uc3QgTkVycm9ycyA9IHtcblx0J01JU1NJTkdfQkFTRSc6J1RoaXMgbm91biBoYXMgbm8gYmFzZSBzcGVjaWZpZWQuJyxcblx0J1JFUVVFU1RFRF9JTkZMRUNUSU9OX1VOREVGSU5FRCc6J1RoZSByZXF1ZXN0ZWQgaW5mbGVjdGlvbiBpcyB1bmRlZmluZWQgZm9yIHRoaXMgbm91bi4gUGVyaGFwcyBpdCB3YXMgbm90IGZvdW5kIGluIHRoZSBkaWN0aW9uYXJ5Lidcbn1cblxuTi5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2Jhc2UnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDogdW5kZWZpbmVkLCBlOltORXJyb3JzLk1JU1NJTkdfQkFTRV19XG5cblx0bGV0IGluZl9rZXkgPSAncycgLy8gYnkgZGVmYXVsdCB3ZSB3aWxsIHVzZSB0aGUgc2luZ3VsYXIsIG5vbi1nZW5hdGl2ZSBpbmZsZWN0aW9uXG5cdHN3aXRjaCh0aGlzLnBsdXJhbGl0eSkge1xuXHRcdGNhc2UgUGx1cmFsaXR5LlBsdXJhbDpcblx0XHRcdGluZl9rZXkgPSB0aGlzLmdlbmF0aXZlID8gJ3BnJyA6ICdwJ1xuXHRcdFx0YnJlYWtcblx0XHRkZWZhdWx0OlxuXHRcdFx0aW5mX2tleSA9IHRoaXMuZ2VuYXRpdmUgPyAnc2cnIDogJ3MnXG5cdH1cblxuXHRpZighKGluZl9rZXkgaW4gdGhpcy5pbmYpKVxuXHRcdHJldHVybiB7dDogdW5kZWZpbmVkLCBlOltORXJyb3JzLlJFUVVFU1RFRF9JTkZMRUNUSU9OX1VOREVGSU5FRF19XG5cblx0bGV0IHJldFZhbCA9IHRoaXMuaW5mW2luZl9rZXldXG5cblx0cmV0VmFsID0gKHRoaXMucHJvcGVyKSA/IHJldFZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJldFZhbC5zbGljZSgxKSA6IHJldFZhbFxuXHRyZXR1cm4ge3Q6IHJldFZhbCwgZTpbXX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTlxuZXhwb3J0IHtORXJyb3JzfVxuIl19