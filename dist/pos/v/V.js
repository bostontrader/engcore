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
	} else if (this.tense === _Tense2.default.Past) {
		key_1 = 0; // preterite aka simple past
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvdi9WLmpzIl0sIm5hbWVzIjpbIlYiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJpbmYiLCJjb250aW51b3VzIiwicGFzc2l2ZSIsInBlcmZlY3QiLCJwZXJzb24iLCJOb25lU2VsZWN0ZWQiLCJwbHVyYWxpdHkiLCJ0ZW5zZSIsIlByZXNlbnQiLCJiYXNlIiwibiIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsIlZFcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfQkFTRSIsInJldFZhbCIsImtleV8xIiwia2V5XzIiLCJQYXN0IiwiVGhpcmQiLCJTaW5ndWxhciIsIlJFUVVFU1RFRF9JTkZMRUNUSU9OX1VOREVGSU5FRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxDQUFULENBQVdDLEtBQVgsRUFBa0I7O0FBRWpCLE1BQUtDLENBQUwsR0FBUywwQkFBT0YsQ0FBUCxDQUFTRSxDQUFsQjtBQUNBLE1BQUtDLENBQUwsR0FBUywwQkFBT0gsQ0FBUCxDQUFTSSxFQUFsQjs7QUFFQTtBQUNBLE1BQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsTUFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLE1BQUtDLE9BQUwsR0FBa0IsS0FBbEI7QUFDQSxNQUFLQyxPQUFMLEdBQWtCLEtBQWxCO0FBQ0EsTUFBS0MsTUFBTCxHQUFrQixpQkFBT0MsWUFBekI7QUFDQSxNQUFLQyxTQUFMLEdBQWtCLG9CQUFVRCxZQUE1QjtBQUNBLE1BQUtFLEtBQUwsR0FBa0IsZ0JBQU1DLE9BQXhCOztBQUVBLEtBQUdaLEtBQUgsRUFBVTs7QUFFVCxNQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBa0IsUUFBckIsRUFBK0I7QUFDOUIsT0FBRyxVQUFVQSxLQUFiLEVBQW9CO0FBQ25CLFNBQUthLElBQUwsR0FBWWIsTUFBTWEsSUFBbEI7QUFDQSxRQUFJYixNQUFNYSxJQUFOLG1CQUFKLEVBQXlCO0FBQ3hCLFNBQU1DLElBQUksZ0JBQU1kLE1BQU1hLElBQVosQ0FBVjtBQUNBLFVBQUtULEdBQUwsR0FBV1UsRUFBRVYsR0FBYjtBQUNBLEtBSEQsTUFHTztBQUNOLFVBQUtBLEdBQUwsR0FBV0osTUFBTUksR0FBTixJQUFhLEVBQXhCO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLFFBQUtDLFVBQUwsR0FBa0JMLE1BQU1LLFVBQU4sSUFBb0IsS0FBdEM7QUFDQSxRQUFLQyxPQUFMLEdBQWtCTixNQUFNTSxPQUFOLElBQWlCLEtBQW5DO0FBQ0EsUUFBS0MsT0FBTCxHQUFrQlAsTUFBTU8sT0FBTixJQUFpQixLQUFuQztBQUNBLFFBQUtDLE1BQUwsR0FBa0JSLE1BQU1RLE1BQU4sSUFBaUIsaUJBQU9DLFlBQTFDO0FBQ0EsUUFBS0MsU0FBTCxHQUFrQlYsTUFBTVUsU0FBTixJQUFvQixvQkFBVUQsWUFBaEQ7QUFDQSxRQUFLRSxLQUFMLEdBQWtCWCxNQUFNVyxLQUFOLElBQWlCLGdCQUFNQyxPQUF6QztBQUVBLEdBbkJELE1BbUJPLElBQUcsT0FBT1osS0FBUCxLQUFrQixRQUFyQixFQUErQjtBQUNyQztBQUNBLFFBQUthLElBQUwsR0FBWWIsS0FBWjtBQUNBLE9BQUdBLHdCQUFILEVBQW1CO0FBQ2xCLFFBQU1jLEtBQUksZ0JBQU1kLEtBQU4sQ0FBVjtBQUNBLFNBQUtJLEdBQUwsR0FBV1UsR0FBRVYsR0FBYjtBQUNBO0FBQ0Q7QUFDRDtBQUVEOztBQUVETCxFQUFFZ0IsU0FBRixHQUFjQyxPQUFPQyxNQUFQLENBQWMsbUJBQWQsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVO0FBQ2YsaUJBQWUsa0NBREE7QUFFZixtQ0FBaUM7QUFGbEIsQ0FBaEI7O0FBS0FuQixFQUFFZ0IsU0FBRixDQUFZSSxPQUFaLEdBQXNCLFlBQVc7O0FBRWhDLEtBQUcsRUFBRSxVQUFVLElBQVosQ0FBSCxFQUNDLE9BQU8sRUFBQ2xCLEdBQUdtQixTQUFKLEVBQWVDLEdBQUUsQ0FBQ0gsUUFBUUksWUFBVCxDQUFqQixFQUFQOztBQUVELEtBQUlDLGVBQUo7O0FBRUEsS0FBSUMsY0FBSjtBQUNBLEtBQUlDLGNBQUo7O0FBRUEsS0FBRyxLQUFLbEIsT0FBTCxJQUFnQixLQUFLRCxPQUF4QixFQUFpQztBQUFFO0FBQ2xDa0IsVUFBUSxDQUFSLENBRGdDLENBQ3RCO0FBQ1YsRUFGRCxNQUdLLElBQUcsS0FBS2IsS0FBTCxLQUFlLGdCQUFNZSxJQUF4QixFQUE4QjtBQUNsQ0YsVUFBUSxDQUFSLENBRGtDLENBQ3hCO0FBQ1YsRUFGSSxNQUdBLElBQUcsS0FBS2IsS0FBTCxLQUFlLGdCQUFNQyxPQUF4QixFQUFpQztBQUNyQ1ksVUFBUSxDQUFSO0FBQ0FDLFVBQVMsS0FBS2pCLE1BQUwsS0FBZ0IsaUJBQU9tQixLQUF2QixJQUFnQyxLQUFLakIsU0FBTCxLQUFtQixvQkFBVWtCLFFBQTlELEdBQTBFLENBQTFFLEdBQThFLENBQXRGO0FBQ0E7O0FBRUQsS0FBSTtBQUNITCxXQUFTLEtBQUtuQixHQUFMLENBQVNvQixLQUFULENBQVQ7QUFDQSxNQUFHQyxVQUFVTCxTQUFiLEVBQ0NHLFNBQVNBLE9BQU9FLEtBQVAsQ0FBVDtBQUNELEVBSkQsQ0FJRSxPQUFNSixDQUFOLEVBQVM7QUFDVixTQUFPLEVBQUNwQixHQUFHbUIsU0FBSixFQUFlQyxHQUFFLENBQUNILFFBQVFXLDhCQUFULENBQWpCLEVBQVA7QUFDQTtBQUNELFFBQU8sRUFBQzVCLEdBQUVzQixNQUFILEVBQVdGLEdBQUUsRUFBYixFQUFQO0FBQ0EsQ0E3QkQ7O2tCQStCZXRCLEM7UUFDUG1CLE8sR0FBQUEsTzs7QUFFUiIsImZpbGUiOiJWLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZEaWN0ICAgICBmcm9tICcuL1ZEaWN0J1xuaW1wb3J0IFBsdXJhbGl0eSBmcm9tICcuLi9QbHVyYWxpdHknXG5pbXBvcnQgUE9TICAgICAgIGZyb20gJy4uL1BPUydcbmltcG9ydCBUZW5zZSAgICAgZnJvbSAnLi4vVGVuc2UnXG5pbXBvcnQgUGVyc29uICAgIGZyb20gJy4uL1BlcnNvbidcbmltcG9ydCBTY2hlbWEgICAgZnJvbSAnLi4vU2NoZW1hQ29uc3RhbnRzJ1xuXG5mdW5jdGlvbiBWKHByb3BzKSB7XG5cblx0dGhpcy50ID0gU2NoZW1hLlYudFxuXHR0aGlzLnYgPSBTY2hlbWEuVi5jdlxuXG5cdC8vIFNlbnNpYmxlIGRlZmF1bHRzXG5cdHRoaXMuaW5mID0ge31cblx0dGhpcy5jb250aW51b3VzID0gZmFsc2Vcblx0dGhpcy5wYXNzaXZlICAgID0gZmFsc2Vcblx0dGhpcy5wZXJmZWN0ICAgID0gZmFsc2Vcblx0dGhpcy5wZXJzb24gICAgID0gUGVyc29uLk5vbmVTZWxlY3RlZFxuXHR0aGlzLnBsdXJhbGl0eSAgPSBQbHVyYWxpdHkuTm9uZVNlbGVjdGVkXG5cdHRoaXMudGVuc2UgICAgICA9IFRlbnNlLlByZXNlbnRcblxuXHRpZihwcm9wcykge1xuXG5cdFx0aWYodHlwZW9mKHByb3BzKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmKCdiYXNlJyBpbiBwcm9wcykge1xuXHRcdFx0XHR0aGlzLmJhc2UgPSBwcm9wcy5iYXNlXG5cdFx0XHRcdGlmIChwcm9wcy5iYXNlIGluIFZEaWN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgbiA9IFZEaWN0W3Byb3BzLmJhc2VdXG5cdFx0XHRcdFx0dGhpcy5pbmYgPSBuLmluZlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5mID0gcHJvcHMuaW5mIHx8IFtdXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVmVyeSBzaW1pbGFyIHRvIHRoZSBpbml0aWFsIGRlZmF1bHQuIENvbnRlbXBsYXRlIHRoZSBkaWZmZXJlbmNlLlxuXHRcdFx0dGhpcy5jb250aW51b3VzID0gcHJvcHMuY29udGludW91cyB8fCBmYWxzZVxuXHRcdFx0dGhpcy5wYXNzaXZlICAgID0gcHJvcHMucGFzc2l2ZSB8fCBmYWxzZVxuXHRcdFx0dGhpcy5wZXJmZWN0ICAgID0gcHJvcHMucGVyZmVjdCB8fCBmYWxzZVxuXHRcdFx0dGhpcy5wZXJzb24gICAgID0gcHJvcHMucGVyc29uICB8fCBQZXJzb24uTm9uZVNlbGVjdGVkXG5cdFx0XHR0aGlzLnBsdXJhbGl0eSAgPSBwcm9wcy5wbHVyYWxpdHkgIHx8IFBsdXJhbGl0eS5Ob25lU2VsZWN0ZWRcblx0XHRcdHRoaXMudGVuc2UgICAgICA9IHByb3BzLnRlbnNlICAgfHwgVGVuc2UuUHJlc2VudFxuXG5cdFx0fSBlbHNlIGlmKHR5cGVvZihwcm9wcykgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHQvLyBUaGUgcHJvcCBpcyBhIHN0cmluZy4gQXNzdW1lIHRoYXQncyB0aGUgYmFzZS5cblx0XHRcdHRoaXMuYmFzZSA9IHByb3BzXG5cdFx0XHRpZihwcm9wcyBpbiBWRGljdCkge1xuXHRcdFx0XHRjb25zdCBuID0gVkRpY3RbcHJvcHNdXG5cdFx0XHRcdHRoaXMuaW5mID0gbi5pbmZcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuXG5WLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobmV3IFBPUygpKVxuXG5jb25zdCBWRXJyb3JzID0ge1xuXHQnTUlTU0lOR19CQVNFJzonVGhpcyB2ZXJiIGhhcyBubyBiYXNlIHNwZWNpZmllZC4nLFxuXHQnUkVRVUVTVEVEX0lORkxFQ1RJT05fVU5ERUZJTkVEJzonVGhlIHJlcXVlc3RlZCBpbmZsZWN0aW9uIGlzIHVuZGVmaW5lZCBmb3IgdGhpcyB2ZXJiLidcbn1cblxuVi5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2Jhc2UnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDogdW5kZWZpbmVkLCBlOltWRXJyb3JzLk1JU1NJTkdfQkFTRV19XG5cblx0bGV0IHJldFZhbFxuXG5cdGxldCBrZXlfMVxuXHRsZXQga2V5XzJcblxuXHRpZih0aGlzLnBlcmZlY3QgfHwgdGhpcy5wYXNzaXZlKSB7IC8vIHA3NyBwYXN0IHBhcnRpY2lwbGUgdXNlZCBpZiBwZXJmZWN0IG9yIHBhc3NpdmVcblx0XHRrZXlfMSA9IDQgLy8gcGFzdCBwYXJ0aWNpcGxlXG5cdH1cblx0ZWxzZSBpZih0aGlzLnRlbnNlID09PSBUZW5zZS5QYXN0KSB7XG5cdFx0a2V5XzEgPSAwIC8vIHByZXRlcml0ZSBha2Egc2ltcGxlIHBhc3Rcblx0fVxuXHRlbHNlIGlmKHRoaXMudGVuc2UgPT09IFRlbnNlLlByZXNlbnQpIHtcblx0XHRrZXlfMSA9IDFcblx0XHRrZXlfMiA9ICh0aGlzLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkICYmIHRoaXMucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpID8gMCA6IDFcblx0fVxuXG5cdHRyeSB7XG5cdFx0cmV0VmFsID0gdGhpcy5pbmZba2V5XzFdXG5cdFx0aWYoa2V5XzIgIT09IHVuZGVmaW5lZClcblx0XHRcdHJldFZhbCA9IHJldFZhbFtrZXlfMl1cblx0fSBjYXRjaChlKSB7XG5cdFx0cmV0dXJuIHt0OiB1bmRlZmluZWQsIGU6W1ZFcnJvcnMuUkVRVUVTVEVEX0lORkxFQ1RJT05fVU5ERUZJTkVEXX1cblx0fVxuXHRyZXR1cm4ge3Q6cmV0VmFsLCBlOltdfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWXG5leHBvcnQge1ZFcnJvcnN9XG5cbi8qXG5cbiBJbiBvcmRlciB0byBhY2Nlc3MgdGhlIHZhbHVlIG9mIGEgcGFydGljdWxhciBpbmZsZWN0aW9uLCB3ZSBtdXN0IFxuXG4gcHJldGVyaXRlID0gMFxuIHByZXNlbnQgdGVuc2UgPSAxXG5cbiBwbGFpbiBmb3JtID0gMiBpbXBlcmF0aXZlLCBzdWJqdW5jdGFsLCBpbmZpbml0aXZhbFxuIGdlcnVuZCBwYXJ0aWNpcGxlIGFrYSBwcmVzZW50IHBhcnRpY2lwbGUgPSAzXG4gcGFzdCBwYXJ0aWNpcGxlID0gNFxuXG4gM3JkIHNnID0gMFxuIHBsYWluID0gMVxuICovIl19