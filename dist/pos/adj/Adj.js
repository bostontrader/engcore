'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AdjErrors = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Adj(props) {
	this.t = _SchemaConstants2.default.Adj.t;
	this.v = _SchemaConstants2.default.Adj.cv;
	//this.silentH = n.silentH

	if (props) {
		if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) === 'object') {
			if ('base' in props) this.base = props.base;
		} else if (typeof props === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props;
		}
	}
}

Adj.prototype = Object.create(new _POS2.default());

var AdjErrors = {
	'MISSING_BASE': 'This adjective has no base specified.'
};

Adj.prototype.analyse = function () {

	if (!('base' in this)) return { t: undefined, e: [AdjErrors.MISSING_BASE] };

	return { t: this.base, e: [] };
};

exports.default = Adj;
exports.AdjErrors = AdjErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvYWRqL0Fkai5qcyJdLCJuYW1lcyI6WyJBZGoiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJiYXNlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiQWRqRXJyb3JzIiwiYW5hbHlzZSIsInVuZGVmaW5lZCIsImUiLCJNSVNTSU5HX0JBU0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNuQixNQUFLQyxDQUFMLEdBQVMsMEJBQU9GLEdBQVAsQ0FBV0UsQ0FBcEI7QUFDQSxNQUFLQyxDQUFMLEdBQVMsMEJBQU9ILEdBQVAsQ0FBV0ksRUFBcEI7QUFDQTs7QUFFQSxLQUFHSCxLQUFILEVBQVU7QUFDVCxNQUFHLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBa0IsUUFBckIsRUFBK0I7QUFDOUIsT0FBRyxVQUFVQSxLQUFiLEVBQ0MsS0FBS0ksSUFBTCxHQUFZSixNQUFNSSxJQUFsQjtBQUNELEdBSEQsTUFHTyxJQUFHLE9BQU9KLEtBQVAsS0FBa0IsUUFBckIsRUFBK0I7QUFDckM7QUFDQSxRQUFLSSxJQUFMLEdBQVlKLEtBQVo7QUFDQTtBQUNEO0FBQ0Q7O0FBRURELElBQUlNLFNBQUosR0FBZ0JDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFoQjs7QUFFQSxJQUFNQyxZQUFZO0FBQ2pCLGlCQUFlO0FBREUsQ0FBbEI7O0FBSUFULElBQUlNLFNBQUosQ0FBY0ksT0FBZCxHQUF3QixZQUFXOztBQUVsQyxLQUFHLEVBQUUsVUFBVSxJQUFaLENBQUgsRUFDQyxPQUFPLEVBQUNSLEdBQUVTLFNBQUgsRUFBY0MsR0FBRSxDQUFDSCxVQUFVSSxZQUFYLENBQWhCLEVBQVA7O0FBRUQsUUFBTyxFQUFDWCxHQUFFLEtBQUtHLElBQVIsRUFBY08sR0FBRSxFQUFoQixFQUFQO0FBQ0EsQ0FORDs7a0JBUWVaLEc7UUFDUFMsUyxHQUFBQSxTIiwiZmlsZSI6IkFkai5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQT1MgICAgIGZyb20gJy4uL1BPUydcbmltcG9ydCBTY2hlbWEgIGZyb20gJy4uL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gQWRqKHByb3BzKSB7XG5cdHRoaXMudCA9IFNjaGVtYS5BZGoudFxuXHR0aGlzLnYgPSBTY2hlbWEuQWRqLmN2XG5cdC8vdGhpcy5zaWxlbnRIID0gbi5zaWxlbnRIXG5cblx0aWYocHJvcHMpIHtcblx0XHRpZih0eXBlb2YocHJvcHMpID09PSAnb2JqZWN0Jykge1xuXHRcdFx0aWYoJ2Jhc2UnIGluIHByb3BzKVxuXHRcdFx0XHR0aGlzLmJhc2UgPSBwcm9wcy5iYXNlXG5cdFx0fSBlbHNlIGlmKHR5cGVvZihwcm9wcykgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHQvLyBUaGUgcHJvcCBpcyBhIHN0cmluZy4gQXNzdW1lIHRoYXQncyB0aGUgYmFzZS5cblx0XHRcdHRoaXMuYmFzZSA9IHByb3BzXG5cdFx0fVxuXHR9XG59XG5cbkFkai5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG5ldyBQT1MoKSlcblxuY29uc3QgQWRqRXJyb3JzID0ge1xuXHQnTUlTU0lOR19CQVNFJzonVGhpcyBhZGplY3RpdmUgaGFzIG5vIGJhc2Ugc3BlY2lmaWVkLicsXG59XG5cbkFkai5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2Jhc2UnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W0FkakVycm9ycy5NSVNTSU5HX0JBU0VdfVxuXG5cdHJldHVybiB7dDp0aGlzLmJhc2UsIGU6W119XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkalxuZXhwb3J0IHtBZGpFcnJvcnN9XG4iXX0=