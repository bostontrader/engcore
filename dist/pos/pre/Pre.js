'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PreErrors = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pre(props) {
	this.t = _SchemaConstants2.default.Pre.t;
	this.v = _SchemaConstants2.default.Pre.cv;

	if (props) {
		if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
			if ('base' in props) this.base = props.base;
		} else if (typeof props === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props;
		}
	}
}

Pre.prototype = Object.create(new _POS2.default());

var PreErrors = {
	'MISSING_BASE': 'This preposition has no base specified.'
};

Pre.prototype.analyse = function () {

	if (!('base' in this)) return { t: undefined, e: [PreErrors.MISSING_BASE] };

	return { t: this.base, e: [] };
};

exports.default = Pre;
exports.PreErrors = PreErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvcHJlL1ByZS5qcyJdLCJuYW1lcyI6WyJQcmUiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJiYXNlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiUHJlRXJyb3JzIiwiYW5hbHlzZSIsInVuZGVmaW5lZCIsImUiLCJNSVNTSU5HX0JBU0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNuQixNQUFLQyxDQUFMLEdBQVMsMEJBQU9GLEdBQVAsQ0FBV0UsQ0FBcEI7QUFDQSxNQUFLQyxDQUFMLEdBQVMsMEJBQU9ILEdBQVAsQ0FBV0ksRUFBcEI7O0FBRUEsS0FBR0gsS0FBSCxFQUFVO0FBQ1QsTUFBRyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE9BQWtCLFFBQXJCLEVBQStCO0FBQzlCLE9BQUcsVUFBVUEsS0FBYixFQUNDLEtBQUtJLElBQUwsR0FBWUosTUFBTUksSUFBbEI7QUFDRCxHQUhELE1BR08sSUFBRyxPQUFPSixLQUFQLEtBQWtCLFFBQXJCLEVBQStCO0FBQ3JDO0FBQ0EsUUFBS0ksSUFBTCxHQUFZSixLQUFaO0FBQ0E7QUFDRDtBQUNEOztBQUVERCxJQUFJTSxTQUFKLEdBQWdCQyxPQUFPQyxNQUFQLENBQWMsbUJBQWQsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWTtBQUNqQixpQkFBZTtBQURFLENBQWxCOztBQUlBVCxJQUFJTSxTQUFKLENBQWNJLE9BQWQsR0FBd0IsWUFBVzs7QUFFbEMsS0FBRyxFQUFFLFVBQVUsSUFBWixDQUFILEVBQ0MsT0FBTyxFQUFDUixHQUFFUyxTQUFILEVBQWNDLEdBQUUsQ0FBQ0gsVUFBVUksWUFBWCxDQUFoQixFQUFQOztBQUVELFFBQU8sRUFBQ1gsR0FBRSxLQUFLRyxJQUFSLEVBQWNPLEdBQUUsRUFBaEIsRUFBUDtBQUNBLENBTkQ7O2tCQVFlWixHO1FBQ1BTLFMsR0FBQUEsUyIsImZpbGUiOiJQcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUE9TICAgICBmcm9tICcuLi9QT1MnXG5pbXBvcnQgU2NoZW1hICBmcm9tICcuLi8uLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIFByZShwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuUHJlLnRcblx0dGhpcy52ID0gU2NoZW1hLlByZS5jdlxuXG5cdGlmKHByb3BzKSB7XG5cdFx0aWYodHlwZW9mKHByb3BzKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmKCdiYXNlJyBpbiBwcm9wcylcblx0XHRcdFx0dGhpcy5iYXNlID0gcHJvcHMuYmFzZVxuXHRcdH0gZWxzZSBpZih0eXBlb2YocHJvcHMpID09PSAnc3RyaW5nJykge1xuXHRcdFx0Ly8gVGhlIHByb3AgaXMgYSBzdHJpbmcuIEFzc3VtZSB0aGF0J3MgdGhlIGJhc2UuXG5cdFx0XHR0aGlzLmJhc2UgPSBwcm9wc1xuXHRcdH1cblx0fVxufVxuXG5QcmUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShuZXcgUE9TKCkpXG5cbmNvbnN0IFByZUVycm9ycyA9IHtcblx0J01JU1NJTkdfQkFTRSc6J1RoaXMgcHJlcG9zaXRpb24gaGFzIG5vIGJhc2Ugc3BlY2lmaWVkLicsXG59XG5cblByZS5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2Jhc2UnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W1ByZUVycm9ycy5NSVNTSU5HX0JBU0VdfVxuXG5cdHJldHVybiB7dDp0aGlzLmJhc2UsIGU6W119XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZVxuZXhwb3J0IHtQcmVFcnJvcnN9XG4iXX0=