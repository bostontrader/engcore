'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DetErrors = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Det(props) {
	this.t = _SchemaConstants2.default.Det.t;
	this.v = _SchemaConstants2.default.Det.cv;

	if (props) {
		if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
			if ('base' in props) this.base = props.base;
		} else if (typeof props === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props;
		}
	}
}

Det.prototype = Object.create(new _POS2.default());

var DetErrors = {
	'MISSING_BASE': 'This determiner has no base specified.'
};

Det.prototype.analyse = function () {

	if (!('base' in this)) return { t: undefined, e: [DetErrors.MISSING_BASE] };

	return { t: this.base, e: [] };
};

exports.default = Det;
exports.DetErrors = DetErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvZGV0L0RldC5qcyJdLCJuYW1lcyI6WyJEZXQiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJiYXNlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiRGV0RXJyb3JzIiwiYW5hbHlzZSIsInVuZGVmaW5lZCIsImUiLCJNSVNTSU5HX0JBU0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNuQixNQUFLQyxDQUFMLEdBQVMsMEJBQU9GLEdBQVAsQ0FBV0UsQ0FBcEI7QUFDQSxNQUFLQyxDQUFMLEdBQVMsMEJBQU9ILEdBQVAsQ0FBV0ksRUFBcEI7O0FBRUEsS0FBR0gsS0FBSCxFQUFVO0FBQ1QsTUFBRyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE9BQWtCLFFBQXJCLEVBQStCO0FBQzlCLE9BQUcsVUFBVUEsS0FBYixFQUNDLEtBQUtJLElBQUwsR0FBWUosTUFBTUksSUFBbEI7QUFDRCxHQUhELE1BR08sSUFBRyxPQUFPSixLQUFQLEtBQWtCLFFBQXJCLEVBQStCO0FBQ3JDO0FBQ0EsUUFBS0ksSUFBTCxHQUFZSixLQUFaO0FBQ0E7QUFDRDtBQUNEOztBQUVERCxJQUFJTSxTQUFKLEdBQWdCQyxPQUFPQyxNQUFQLENBQWMsbUJBQWQsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWTtBQUNqQixpQkFBZTtBQURFLENBQWxCOztBQUlBVCxJQUFJTSxTQUFKLENBQWNJLE9BQWQsR0FBd0IsWUFBVzs7QUFFbEMsS0FBRyxFQUFFLFVBQVUsSUFBWixDQUFILEVBQ0MsT0FBTyxFQUFDUixHQUFFUyxTQUFILEVBQWNDLEdBQUUsQ0FBQ0gsVUFBVUksWUFBWCxDQUFoQixFQUFQOztBQUVELFFBQU8sRUFBQ1gsR0FBRSxLQUFLRyxJQUFSLEVBQWNPLEdBQUUsRUFBaEIsRUFBUDtBQUNBLENBTkQ7O2tCQVFlWixHO1FBQ1BTLFMsR0FBQUEsUyIsImZpbGUiOiJEZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUE9TICAgICBmcm9tICcuLi9QT1MnXG5pbXBvcnQgU2NoZW1hICBmcm9tICcuLi8uLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIERldChwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuRGV0LnRcblx0dGhpcy52ID0gU2NoZW1hLkRldC5jdlxuXG5cdGlmKHByb3BzKSB7XG5cdFx0aWYodHlwZW9mKHByb3BzKSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGlmKCdiYXNlJyBpbiBwcm9wcylcblx0XHRcdFx0dGhpcy5iYXNlID0gcHJvcHMuYmFzZVxuXHRcdH0gZWxzZSBpZih0eXBlb2YocHJvcHMpID09PSAnc3RyaW5nJykge1xuXHRcdFx0Ly8gVGhlIHByb3AgaXMgYSBzdHJpbmcuIEFzc3VtZSB0aGF0J3MgdGhlIGJhc2UuXG5cdFx0XHR0aGlzLmJhc2UgPSBwcm9wc1xuXHRcdH1cblx0fVxufVxuXG5EZXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShuZXcgUE9TKCkpXG5cbmNvbnN0IERldEVycm9ycyA9IHtcblx0J01JU1NJTkdfQkFTRSc6J1RoaXMgZGV0ZXJtaW5lciBoYXMgbm8gYmFzZSBzcGVjaWZpZWQuJyxcbn1cblxuRGV0LnByb3RvdHlwZS5hbmFseXNlID0gZnVuY3Rpb24oKSB7XG5cblx0aWYoISgnYmFzZScgaW4gdGhpcykpXG5cdFx0cmV0dXJuIHt0OnVuZGVmaW5lZCwgZTpbRGV0RXJyb3JzLk1JU1NJTkdfQkFTRV19XG5cblx0cmV0dXJuIHt0OnRoaXMuYmFzZSwgZTpbXX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0XG5leHBvcnQge0RldEVycm9yc31cbiJdfQ==