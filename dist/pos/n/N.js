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

var _SchemaConstants = require('../SchemaConstants');

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
				this.base = props.base;
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
	'REQUESTED_INFLECTION_UNDEFINED': 'The requested inflection is undefined for this noun.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvbi9OLmpzIl0sIm5hbWVzIjpbIk4iLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJpbmYiLCJwbHVyYWxpdHkiLCJTaW5ndWxhciIsInByb3BlciIsImdlbmF0aXZlIiwiYmFzZSIsIm4iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJORXJyb3JzIiwiYW5hbHlzZSIsInVuZGVmaW5lZCIsImUiLCJNSVNTSU5HX0JBU0UiLCJpbmZfa2V5IiwiUGx1cmFsIiwiUkVRVUVTVEVEX0lORkxFQ1RJT05fVU5ERUZJTkVEIiwicmV0VmFsIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLENBQVQsQ0FBV0MsS0FBWCxFQUFrQjs7QUFFakIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPRixDQUFQLENBQVNFLENBQWxCO0FBQ0EsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPSCxDQUFQLENBQVNJLEVBQWxCOztBQUVBO0FBQ0EsTUFBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxNQUFLQyxTQUFMLEdBQWlCLG9CQUFVQyxRQUEzQjtBQUNBLE1BQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsTUFBS0MsUUFBTCxHQUFpQixLQUFqQjs7QUFFQSxLQUFHUixLQUFILEVBQVU7QUFDVCxNQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBa0IsUUFBckIsRUFBK0I7QUFDOUIsT0FBRyxVQUFVQSxLQUFiLEVBQW9CO0FBQ25CLFNBQUtTLElBQUwsR0FBWVQsTUFBTVMsSUFBbEI7QUFDQSxRQUFHVCxNQUFNUyxJQUFOLG1CQUFILEVBQXdCO0FBQ3ZCLFNBQU1DLElBQUksZ0JBQU1WLE1BQU1TLElBQVosQ0FBVjtBQUNBLFVBQUtMLEdBQUwsR0FBY00sRUFBRU4sR0FBaEI7QUFDQSxVQUFLRyxNQUFMLEdBQWNHLEVBQUVILE1BQWhCO0FBQ0EsS0FKRCxNQUlPO0FBQ04sVUFBS0gsR0FBTCxHQUFjSixNQUFNSSxHQUFOLElBQWEsRUFBM0I7QUFDQSxVQUFLRyxNQUFMLEdBQWNQLE1BQU1PLE1BQU4sSUFBZ0IsS0FBOUI7QUFDQTtBQUNELFNBQUtGLFNBQUwsR0FBaUJMLE1BQU1LLFNBQU4sSUFBbUIsb0JBQVVDLFFBQTlDO0FBQ0EsU0FBS0UsUUFBTCxHQUFpQlIsTUFBTVEsUUFBTixJQUFrQixLQUFuQztBQUNBO0FBQ0QsR0FkRCxNQWNPLElBQUcsT0FBT1IsS0FBUCxLQUFrQixRQUFyQixFQUErQjtBQUNyQztBQUNBLFFBQUtTLElBQUwsR0FBWVQsS0FBWjtBQUNBLE9BQUdBLHdCQUFILEVBQW1CO0FBQ2xCLFFBQU1VLEtBQUksZ0JBQU1WLEtBQU4sQ0FBVjtBQUNBLFNBQUtJLEdBQUwsR0FBV00sR0FBRU4sR0FBYjtBQUNBLFNBQUtHLE1BQUwsR0FBY0csR0FBRUgsTUFBaEI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7QUFFRFIsRUFBRVksU0FBRixHQUFjQyxPQUFPQyxNQUFQLENBQWMsbUJBQWQsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVO0FBQ2YsaUJBQWUsa0NBREE7QUFFZixtQ0FBaUM7QUFGbEIsQ0FBaEI7O0FBS0FmLEVBQUVZLFNBQUYsQ0FBWUksT0FBWixHQUFzQixZQUFXOztBQUVoQyxLQUFHLEVBQUUsVUFBVSxJQUFaLENBQUgsRUFDQyxPQUFPLEVBQUNkLEdBQUdlLFNBQUosRUFBZUMsR0FBRSxDQUFDSCxRQUFRSSxZQUFULENBQWpCLEVBQVA7O0FBRUQsS0FBSUMsVUFBVSxHQUFkLENBTGdDLENBS2Q7QUFDbEIsU0FBTyxLQUFLZCxTQUFaO0FBQ0MsT0FBSyxvQkFBVWUsTUFBZjtBQUNDRCxhQUFVLEtBQUtYLFFBQUwsR0FBZ0IsSUFBaEIsR0FBdUIsR0FBakM7QUFDQTtBQUNEO0FBQ0NXLGFBQVUsS0FBS1gsUUFBTCxHQUFnQixJQUFoQixHQUF1QixHQUFqQztBQUxGOztBQVFBLEtBQUcsRUFBRVcsV0FBVyxLQUFLZixHQUFsQixDQUFILEVBQ0MsT0FBTyxFQUFDSCxHQUFHZSxTQUFKLEVBQWVDLEdBQUUsQ0FBQ0gsUUFBUU8sOEJBQVQsQ0FBakIsRUFBUDs7QUFFRCxLQUFJQyxTQUFTLEtBQUtsQixHQUFMLENBQVNlLE9BQVQsQ0FBYjs7QUFFQUcsVUFBVSxLQUFLZixNQUFOLEdBQWdCZSxPQUFPQyxNQUFQLENBQWMsQ0FBZCxFQUFpQkMsV0FBakIsS0FBaUNGLE9BQU9HLEtBQVAsQ0FBYSxDQUFiLENBQWpELEdBQW1FSCxNQUE1RTtBQUNBLFFBQU8sRUFBQ3JCLEdBQUdxQixNQUFKLEVBQVlMLEdBQUUsRUFBZCxFQUFQO0FBQ0EsQ0FyQkQ7O2tCQXVCZWxCLEM7UUFDUGUsTyxHQUFBQSxPIiwiZmlsZSI6Ik4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTkRpY3QgICAgIGZyb20gJy4vTkRpY3QnXG5pbXBvcnQgUGx1cmFsaXR5IGZyb20gJy4uL1BsdXJhbGl0eSdcbmltcG9ydCBQT1MgICAgICAgZnJvbSAnLi4vUE9TJ1xuaW1wb3J0IFNjaGVtYSAgICBmcm9tICcuLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIE4ocHJvcHMpIHtcblxuXHR0aGlzLnQgPSBTY2hlbWEuTi50XG5cdHRoaXMudiA9IFNjaGVtYS5OLmN2XG5cblx0Ly8gU2Vuc2libGUgZGVmYXVsdHMuXG5cdHRoaXMuaW5mID0ge31cblx0dGhpcy5wbHVyYWxpdHkgPSBQbHVyYWxpdHkuU2luZ3VsYXJcblx0dGhpcy5wcm9wZXIgPSBmYWxzZVxuXHR0aGlzLmdlbmF0aXZlICA9IGZhbHNlXG5cblx0aWYocHJvcHMpIHtcblx0XHRpZih0eXBlb2YocHJvcHMpID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYoJ2Jhc2UnIGluIHByb3BzKSB7XG5cdFx0XHRcdHRoaXMuYmFzZSA9IHByb3BzLmJhc2Vcblx0XHRcdFx0aWYocHJvcHMuYmFzZSBpbiBORGljdCkge1xuXHRcdFx0XHRcdGNvbnN0IG4gPSBORGljdFtwcm9wcy5iYXNlXVxuXHRcdFx0XHRcdHRoaXMuaW5mICAgID0gbi5pbmZcblx0XHRcdFx0XHR0aGlzLnByb3BlciA9IG4ucHJvcGVyXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbmYgICAgPSBwcm9wcy5pbmYgfHwge31cblx0XHRcdFx0XHR0aGlzLnByb3BlciA9IHByb3BzLnByb3BlciB8fCBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMucGx1cmFsaXR5ID0gcHJvcHMucGx1cmFsaXR5IHx8IFBsdXJhbGl0eS5TaW5ndWxhclxuXHRcdFx0XHR0aGlzLmdlbmF0aXZlICA9IHByb3BzLmdlbmF0aXZlIHx8IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmKHR5cGVvZihwcm9wcykgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHQvLyBUaGUgcHJvcCBpcyBhIHN0cmluZy4gQXNzdW1lIHRoYXQncyB0aGUgYmFzZS5cblx0XHRcdHRoaXMuYmFzZSA9IHByb3BzXG5cdFx0XHRpZihwcm9wcyBpbiBORGljdCkge1xuXHRcdFx0XHRjb25zdCBuID0gTkRpY3RbcHJvcHNdXG5cdFx0XHRcdHRoaXMuaW5mID0gbi5pbmZcblx0XHRcdFx0dGhpcy5wcm9wZXIgPSBuLnByb3BlclxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobmV3IFBPUygpKVxuXG5jb25zdCBORXJyb3JzID0ge1xuXHQnTUlTU0lOR19CQVNFJzonVGhpcyBub3VuIGhhcyBubyBiYXNlIHNwZWNpZmllZC4nLFxuXHQnUkVRVUVTVEVEX0lORkxFQ1RJT05fVU5ERUZJTkVEJzonVGhlIHJlcXVlc3RlZCBpbmZsZWN0aW9uIGlzIHVuZGVmaW5lZCBmb3IgdGhpcyBub3VuLidcbn1cblxuTi5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2Jhc2UnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDogdW5kZWZpbmVkLCBlOltORXJyb3JzLk1JU1NJTkdfQkFTRV19XG5cblx0bGV0IGluZl9rZXkgPSAncycgLy8gYnkgZGVmYXVsdCB3ZSB3aWxsIHVzZSB0aGUgc2luZ3VsYXIsIG5vbi1nZW5hdGl2ZSBpbmZsZWN0aW9uXG5cdHN3aXRjaCh0aGlzLnBsdXJhbGl0eSkge1xuXHRcdGNhc2UgUGx1cmFsaXR5LlBsdXJhbDpcblx0XHRcdGluZl9rZXkgPSB0aGlzLmdlbmF0aXZlID8gJ3BnJyA6ICdwJ1xuXHRcdFx0YnJlYWtcblx0XHRkZWZhdWx0OlxuXHRcdFx0aW5mX2tleSA9IHRoaXMuZ2VuYXRpdmUgPyAnc2cnIDogJ3MnXG5cdH1cblxuXHRpZighKGluZl9rZXkgaW4gdGhpcy5pbmYpKVxuXHRcdHJldHVybiB7dDogdW5kZWZpbmVkLCBlOltORXJyb3JzLlJFUVVFU1RFRF9JTkZMRUNUSU9OX1VOREVGSU5FRF19XG5cblx0bGV0IHJldFZhbCA9IHRoaXMuaW5mW2luZl9rZXldXG5cblx0cmV0VmFsID0gKHRoaXMucHJvcGVyKSA/IHJldFZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJldFZhbC5zbGljZSgxKSA6IHJldFZhbFxuXHRyZXR1cm4ge3Q6IHJldFZhbCwgZTpbXX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTlxuZXhwb3J0IHtORXJyb3JzfVxuIl19