'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VErrors = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _VDict = require('./VDict');

var _VDict2 = _interopRequireDefault(_VDict);

var _Plurality = require('../Plurality');

var _Plurality2 = _interopRequireDefault(_Plurality);

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _Tense = require('../Tense');

var _Tense2 = _interopRequireDefault(_Tense);

var _Person = require('../Person');

var _Person2 = _interopRequireDefault(_Person);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function V(props) {

	this.t = _SchemaConstants2.default.V.t;
	this.v = _SchemaConstants2.default.V.cv;

	// Sensible defaults
	this.inf = {};
	this.continuous = false;
	this.passive = false;
	this.perfect = false;
	this.person = _Person2.default.NoneSelected;
	this.plurality = _Plurality2.default.NoneSelected;
	this.tense = _Tense2.default.Present;

	if (props) {

		if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
			if ('base' in props) {
				this.base = props.base;
				if (props.base in _VDict2.default) {
					var n = _VDict2.default[props.base];
					this.inf = n.inf;
				} else {
					this.inf = props.inf || [];
				}
			}

			// Very similar to the initial default. Contemplate the difference.
			this.continuous = props.continuous || false;
			this.passive = props.passive || false;
			this.perfect = props.perfect || false;
			this.person = props.person || _Person2.default.NoneSelected;
			this.plurality = props.plurality || _Plurality2.default.NoneSelected;
			this.tense = props.tense || _Tense2.default.Present;
		} else if (typeof props === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props;
			if (props in _VDict2.default) {
				var _n = _VDict2.default[props];
				this.inf = _n.inf;
			}
		}
	}
}

V.prototype = Object.create(new _POS2.default());

var VErrors = {
	'MISSING_BASE': 'This verb has no base specified.',
	'REQUESTED_INFLECTION_UNDEFINED': 'The requested inflection is undefined for this verb.'
};

V.prototype.analyse = function () {

	if (!('base' in this)) return { t: undefined, e: [VErrors.MISSING_BASE] };

	var retVal = void 0;

	var key_1 = void 0;
	var key_2 = void 0;

	if (this.perfect || this.passive) {
		// p77 past participle used if perfect or passive
		key_1 = 4; // past participle
	} else if (this.tense === _Tense2.default.Present) {
		key_1 = 1;
		key_2 = this.person === _Person2.default.Third && this.plurality === _Plurality2.default.Singular ? 0 : 1;
	}

	try {
		retVal = this.inf[key_1];
		if (key_2 !== undefined) retVal = retVal[key_2];
	} catch (e) {
		return { t: undefined, e: [VErrors.REQUESTED_INFLECTION_UNDEFINED] };
	}
	return { t: retVal, e: [] };
};

exports.default = V;
exports.VErrors = VErrors;

/*

 In order to access the value of a particular inflection, we must 

 preterite = 0
 present tense = 1

 plain form = 2 imperative, subjunctal, infinitival
 gerund participle aka present participle = 3
 past participle = 4

 3rd sg = 0
 plain = 1
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvdi9WLmpzIl0sIm5hbWVzIjpbIlYiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJpbmYiLCJjb250aW51b3VzIiwicGFzc2l2ZSIsInBlcmZlY3QiLCJwZXJzb24iLCJOb25lU2VsZWN0ZWQiLCJwbHVyYWxpdHkiLCJ0ZW5zZSIsIlByZXNlbnQiLCJiYXNlIiwibiIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsIlZFcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfQkFTRSIsInJldFZhbCIsImtleV8xIiwia2V5XzIiLCJUaGlyZCIsIlNpbmd1bGFyIiwiUkVRVUVTVEVEX0lORkxFQ1RJT05fVU5ERUZJTkVEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLENBQVQsQ0FBV0MsS0FBWCxFQUFrQjs7QUFFakIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPRixDQUFQLENBQVNFLENBQWxCO0FBQ0EsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPSCxDQUFQLENBQVNJLEVBQWxCOztBQUVBO0FBQ0EsTUFBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxNQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsTUFBS0MsT0FBTCxHQUFrQixLQUFsQjtBQUNBLE1BQUtDLE9BQUwsR0FBa0IsS0FBbEI7QUFDQSxNQUFLQyxNQUFMLEdBQWtCLGlCQUFPQyxZQUF6QjtBQUNBLE1BQUtDLFNBQUwsR0FBa0Isb0JBQVVELFlBQTVCO0FBQ0EsTUFBS0UsS0FBTCxHQUFrQixnQkFBTUMsT0FBeEI7O0FBRUEsS0FBR1osS0FBSCxFQUFVOztBQUVULE1BQUcsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxPQUFrQixRQUFyQixFQUErQjtBQUM5QixPQUFHLFVBQVVBLEtBQWIsRUFBb0I7QUFDbkIsU0FBS2EsSUFBTCxHQUFZYixNQUFNYSxJQUFsQjtBQUNBLFFBQUliLE1BQU1hLElBQU4sbUJBQUosRUFBeUI7QUFDeEIsU0FBTUMsSUFBSSxnQkFBTWQsTUFBTWEsSUFBWixDQUFWO0FBQ0EsVUFBS1QsR0FBTCxHQUFXVSxFQUFFVixHQUFiO0FBQ0EsS0FIRCxNQUdPO0FBQ04sVUFBS0EsR0FBTCxHQUFXSixNQUFNSSxHQUFOLElBQWEsRUFBeEI7QUFDQTtBQUNEOztBQUVEO0FBQ0EsUUFBS0MsVUFBTCxHQUFrQkwsTUFBTUssVUFBTixJQUFvQixLQUF0QztBQUNBLFFBQUtDLE9BQUwsR0FBa0JOLE1BQU1NLE9BQU4sSUFBaUIsS0FBbkM7QUFDQSxRQUFLQyxPQUFMLEdBQWtCUCxNQUFNTyxPQUFOLElBQWlCLEtBQW5DO0FBQ0EsUUFBS0MsTUFBTCxHQUFrQlIsTUFBTVEsTUFBTixJQUFpQixpQkFBT0MsWUFBMUM7QUFDQSxRQUFLQyxTQUFMLEdBQWtCVixNQUFNVSxTQUFOLElBQW9CLG9CQUFVRCxZQUFoRDtBQUNBLFFBQUtFLEtBQUwsR0FBa0JYLE1BQU1XLEtBQU4sSUFBaUIsZ0JBQU1DLE9BQXpDO0FBRUEsR0FuQkQsTUFtQk8sSUFBRyxPQUFPWixLQUFQLEtBQWtCLFFBQXJCLEVBQStCO0FBQ3JDO0FBQ0EsUUFBS2EsSUFBTCxHQUFZYixLQUFaO0FBQ0EsT0FBR0Esd0JBQUgsRUFBbUI7QUFDbEIsUUFBTWMsS0FBSSxnQkFBTWQsS0FBTixDQUFWO0FBQ0EsU0FBS0ksR0FBTCxHQUFXVSxHQUFFVixHQUFiO0FBQ0E7QUFDRDtBQUNEO0FBRUQ7O0FBRURMLEVBQUVnQixTQUFGLEdBQWNDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFkOztBQUVBLElBQU1DLFVBQVU7QUFDZixpQkFBZSxrQ0FEQTtBQUVmLG1DQUFpQztBQUZsQixDQUFoQjs7QUFLQW5CLEVBQUVnQixTQUFGLENBQVlJLE9BQVosR0FBc0IsWUFBVzs7QUFFaEMsS0FBRyxFQUFFLFVBQVUsSUFBWixDQUFILEVBQ0MsT0FBTyxFQUFDbEIsR0FBR21CLFNBQUosRUFBZUMsR0FBRSxDQUFDSCxRQUFRSSxZQUFULENBQWpCLEVBQVA7O0FBRUQsS0FBSUMsZUFBSjs7QUFFQSxLQUFJQyxjQUFKO0FBQ0EsS0FBSUMsY0FBSjs7QUFFQSxLQUFHLEtBQUtsQixPQUFMLElBQWdCLEtBQUtELE9BQXhCLEVBQWlDO0FBQUU7QUFDbENrQixVQUFRLENBQVIsQ0FEZ0MsQ0FDdEI7QUFDVixFQUZELE1BSUssSUFBRyxLQUFLYixLQUFMLEtBQWUsZ0JBQU1DLE9BQXhCLEVBQWlDO0FBQ3JDWSxVQUFRLENBQVI7QUFDQUMsVUFBUyxLQUFLakIsTUFBTCxLQUFnQixpQkFBT2tCLEtBQXZCLElBQWdDLEtBQUtoQixTQUFMLEtBQW1CLG9CQUFVaUIsUUFBOUQsR0FBMEUsQ0FBMUUsR0FBOEUsQ0FBdEY7QUFDQTs7QUFFRCxLQUFJO0FBQ0hKLFdBQVMsS0FBS25CLEdBQUwsQ0FBU29CLEtBQVQsQ0FBVDtBQUNBLE1BQUdDLFVBQVVMLFNBQWIsRUFDQ0csU0FBU0EsT0FBT0UsS0FBUCxDQUFUO0FBQ0QsRUFKRCxDQUlFLE9BQU1KLENBQU4sRUFBUztBQUNWLFNBQU8sRUFBQ3BCLEdBQUdtQixTQUFKLEVBQWVDLEdBQUUsQ0FBQ0gsUUFBUVUsOEJBQVQsQ0FBakIsRUFBUDtBQUNBO0FBQ0QsUUFBTyxFQUFDM0IsR0FBRXNCLE1BQUgsRUFBV0YsR0FBRSxFQUFiLEVBQVA7QUFDQSxDQTNCRDs7a0JBNkJldEIsQztRQUNQbUIsTyxHQUFBQSxPOztBQUVSIiwiZmlsZSI6IlYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVkRpY3QgICAgIGZyb20gJy4vVkRpY3QnXG5pbXBvcnQgUGx1cmFsaXR5IGZyb20gJy4uL1BsdXJhbGl0eSdcbmltcG9ydCBQT1MgICAgICAgZnJvbSAnLi4vUE9TJ1xuaW1wb3J0IFRlbnNlICAgICBmcm9tICcuLi9UZW5zZSdcbmltcG9ydCBQZXJzb24gICAgZnJvbSAnLi4vUGVyc29uJ1xuaW1wb3J0IFNjaGVtYSAgICBmcm9tICcuLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIFYocHJvcHMpIHtcblxuXHR0aGlzLnQgPSBTY2hlbWEuVi50XG5cdHRoaXMudiA9IFNjaGVtYS5WLmN2XG5cblx0Ly8gU2Vuc2libGUgZGVmYXVsdHNcblx0dGhpcy5pbmYgPSB7fVxuXHR0aGlzLmNvbnRpbnVvdXMgPSBmYWxzZVxuXHR0aGlzLnBhc3NpdmUgICAgPSBmYWxzZVxuXHR0aGlzLnBlcmZlY3QgICAgPSBmYWxzZVxuXHR0aGlzLnBlcnNvbiAgICAgPSBQZXJzb24uTm9uZVNlbGVjdGVkXG5cdHRoaXMucGx1cmFsaXR5ICA9IFBsdXJhbGl0eS5Ob25lU2VsZWN0ZWRcblx0dGhpcy50ZW5zZSAgICAgID0gVGVuc2UuUHJlc2VudFxuXG5cdGlmKHByb3BzKSB7XG5cblx0XHRpZih0eXBlb2YocHJvcHMpID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYoJ2Jhc2UnIGluIHByb3BzKSB7XG5cdFx0XHRcdHRoaXMuYmFzZSA9IHByb3BzLmJhc2Vcblx0XHRcdFx0aWYgKHByb3BzLmJhc2UgaW4gVkRpY3QpIHtcblx0XHRcdFx0XHRjb25zdCBuID0gVkRpY3RbcHJvcHMuYmFzZV1cblx0XHRcdFx0XHR0aGlzLmluZiA9IG4uaW5mXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5pbmYgPSBwcm9wcy5pbmYgfHwgW11cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBWZXJ5IHNpbWlsYXIgdG8gdGhlIGluaXRpYWwgZGVmYXVsdC4gQ29udGVtcGxhdGUgdGhlIGRpZmZlcmVuY2UuXG5cdFx0XHR0aGlzLmNvbnRpbnVvdXMgPSBwcm9wcy5jb250aW51b3VzIHx8IGZhbHNlXG5cdFx0XHR0aGlzLnBhc3NpdmUgICAgPSBwcm9wcy5wYXNzaXZlIHx8IGZhbHNlXG5cdFx0XHR0aGlzLnBlcmZlY3QgICAgPSBwcm9wcy5wZXJmZWN0IHx8IGZhbHNlXG5cdFx0XHR0aGlzLnBlcnNvbiAgICAgPSBwcm9wcy5wZXJzb24gIHx8IFBlcnNvbi5Ob25lU2VsZWN0ZWRcblx0XHRcdHRoaXMucGx1cmFsaXR5ICA9IHByb3BzLnBsdXJhbGl0eSAgfHwgUGx1cmFsaXR5Lk5vbmVTZWxlY3RlZFxuXHRcdFx0dGhpcy50ZW5zZSAgICAgID0gcHJvcHMudGVuc2UgICB8fCBUZW5zZS5QcmVzZW50XG5cblx0XHR9IGVsc2UgaWYodHlwZW9mKHByb3BzKSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdC8vIFRoZSBwcm9wIGlzIGEgc3RyaW5nLiBBc3N1bWUgdGhhdCdzIHRoZSBiYXNlLlxuXHRcdFx0dGhpcy5iYXNlID0gcHJvcHNcblx0XHRcdGlmKHByb3BzIGluIFZEaWN0KSB7XG5cdFx0XHRcdGNvbnN0IG4gPSBWRGljdFtwcm9wc11cblx0XHRcdFx0dGhpcy5pbmYgPSBuLmluZlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cblYucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShuZXcgUE9TKCkpXG5cbmNvbnN0IFZFcnJvcnMgPSB7XG5cdCdNSVNTSU5HX0JBU0UnOidUaGlzIHZlcmIgaGFzIG5vIGJhc2Ugc3BlY2lmaWVkLicsXG5cdCdSRVFVRVNURURfSU5GTEVDVElPTl9VTkRFRklORUQnOidUaGUgcmVxdWVzdGVkIGluZmxlY3Rpb24gaXMgdW5kZWZpbmVkIGZvciB0aGlzIHZlcmIuJ1xufVxuXG5WLnByb3RvdHlwZS5hbmFseXNlID0gZnVuY3Rpb24oKSB7XG5cblx0aWYoISgnYmFzZScgaW4gdGhpcykpXG5cdFx0cmV0dXJuIHt0OiB1bmRlZmluZWQsIGU6W1ZFcnJvcnMuTUlTU0lOR19CQVNFXX1cblxuXHRsZXQgcmV0VmFsXG5cblx0bGV0IGtleV8xXG5cdGxldCBrZXlfMlxuXG5cdGlmKHRoaXMucGVyZmVjdCB8fCB0aGlzLnBhc3NpdmUpIHsgLy8gcDc3IHBhc3QgcGFydGljaXBsZSB1c2VkIGlmIHBlcmZlY3Qgb3IgcGFzc2l2ZVxuXHRcdGtleV8xID0gNCAvLyBwYXN0IHBhcnRpY2lwbGVcblx0fVxuXG5cdGVsc2UgaWYodGhpcy50ZW5zZSA9PT0gVGVuc2UuUHJlc2VudCkge1xuXHRcdGtleV8xID0gMVxuXHRcdGtleV8yID0gKHRoaXMucGVyc29uID09PSBQZXJzb24uVGhpcmQgJiYgdGhpcy5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcikgPyAwIDogMVxuXHR9XG5cblx0dHJ5IHtcblx0XHRyZXRWYWwgPSB0aGlzLmluZltrZXlfMV1cblx0XHRpZihrZXlfMiAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0cmV0VmFsID0gcmV0VmFsW2tleV8yXVxuXHR9IGNhdGNoKGUpIHtcblx0XHRyZXR1cm4ge3Q6IHVuZGVmaW5lZCwgZTpbVkVycm9ycy5SRVFVRVNURURfSU5GTEVDVElPTl9VTkRFRklORURdfVxuXHR9XG5cdHJldHVybiB7dDpyZXRWYWwsIGU6W119XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZcbmV4cG9ydCB7VkVycm9yc31cblxuLypcblxuIEluIG9yZGVyIHRvIGFjY2VzcyB0aGUgdmFsdWUgb2YgYSBwYXJ0aWN1bGFyIGluZmxlY3Rpb24sIHdlIG11c3QgXG5cbiBwcmV0ZXJpdGUgPSAwXG4gcHJlc2VudCB0ZW5zZSA9IDFcblxuIHBsYWluIGZvcm0gPSAyIGltcGVyYXRpdmUsIHN1Ymp1bmN0YWwsIGluZmluaXRpdmFsXG4gZ2VydW5kIHBhcnRpY2lwbGUgYWthIHByZXNlbnQgcGFydGljaXBsZSA9IDNcbiBwYXN0IHBhcnRpY2lwbGUgPSA0XG5cbiAzcmQgc2cgPSAwXG4gcGxhaW4gPSAxXG4gKi8iXX0=