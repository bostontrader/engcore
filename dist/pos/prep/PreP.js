'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PrePErrors = undefined;

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreP(props) {
	this.t = _SchemaConstants2.default.PreP.t;
	this.v = _SchemaConstants2.default.PreP.cv;

	if (props) {
		if ('head' in props) this.head = props.head;
		if ('np' in props) this.np = props.np;
	}
}

PreP.prototype = Object.create(new _POS2.default());

var PrePErrors = {
	'MISSING_HEAD': 'This prepositional phrase must have a head.',
	'MISSING_NP': 'This prepositional phrase must have a noun phrase.'
};

PreP.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [PrePErrors.MISSING_HEAD] };

	if (!('np' in this)) return { t: undefined, e: [PrePErrors.MISSING_NP] };

	var retVal = this.head.analyse().t + ' ' + this.np.analyse().t;
	return { t: retVal, e: [] };
};

exports.default = PreP;
exports.PrePErrors = PrePErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvcHJlcC9QcmVQLmpzIl0sIm5hbWVzIjpbIlByZVAiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwibnAiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJQcmVQRXJyb3JzIiwiYW5hbHlzZSIsInVuZGVmaW5lZCIsImUiLCJNSVNTSU5HX0hFQUQiLCJNSVNTSU5HX05QIiwicmV0VmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ3BCLE1BQUtDLENBQUwsR0FBUywwQkFBT0YsSUFBUCxDQUFZRSxDQUFyQjtBQUNBLE1BQUtDLENBQUwsR0FBUywwQkFBT0gsSUFBUCxDQUFZSSxFQUFyQjs7QUFFQSxLQUFHSCxLQUFILEVBQVU7QUFDVCxNQUFHLFVBQVVBLEtBQWIsRUFDQyxLQUFLSSxJQUFMLEdBQVlKLE1BQU1JLElBQWxCO0FBQ0QsTUFBRyxRQUFRSixLQUFYLEVBQ0MsS0FBS0ssRUFBTCxHQUFVTCxNQUFNSyxFQUFoQjtBQUNEO0FBRUQ7O0FBRUROLEtBQUtPLFNBQUwsR0FBaUJDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFqQjs7QUFFQSxJQUFNQyxhQUFhO0FBQ2xCLGlCQUFlLDZDQURHO0FBRWxCLGVBQWE7QUFGSyxDQUFuQjs7QUFLQVYsS0FBS08sU0FBTCxDQUFlSSxPQUFmLEdBQXlCLFlBQVc7O0FBRW5DLEtBQUcsRUFBRSxVQUFVLElBQVosQ0FBSCxFQUNDLE9BQU8sRUFBQ1QsR0FBRVUsU0FBSCxFQUFjQyxHQUFFLENBQUNILFdBQVdJLFlBQVosQ0FBaEIsRUFBUDs7QUFFRCxLQUFHLEVBQUUsUUFBUSxJQUFWLENBQUgsRUFDQyxPQUFPLEVBQUNaLEdBQUVVLFNBQUgsRUFBY0MsR0FBRSxDQUFDSCxXQUFXSyxVQUFaLENBQWhCLEVBQVA7O0FBRUQsS0FBSUMsU0FBUyxLQUFLWCxJQUFMLENBQVVNLE9BQVYsR0FBb0JULENBQXBCLEdBQXdCLEdBQXhCLEdBQThCLEtBQUtJLEVBQUwsQ0FBUUssT0FBUixHQUFrQlQsQ0FBN0Q7QUFDQSxRQUFPLEVBQUNBLEdBQUVjLE1BQUgsRUFBV0gsR0FBRSxFQUFiLEVBQVA7QUFDQSxDQVZEOztrQkFZZWIsSTtRQUNQVSxVLEdBQUFBLFUiLCJmaWxlIjoiUHJlUC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQT1MgICAgZnJvbSAnLi4vUE9TJ1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIFByZVAocHJvcHMpIHtcblx0dGhpcy50ID0gU2NoZW1hLlByZVAudFxuXHR0aGlzLnYgPSBTY2hlbWEuUHJlUC5jdlxuXG5cdGlmKHByb3BzKSB7XG5cdFx0aWYoJ2hlYWQnIGluIHByb3BzKVxuXHRcdFx0dGhpcy5oZWFkID0gcHJvcHMuaGVhZFxuXHRcdGlmKCducCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLm5wID0gcHJvcHMubnBcblx0fVxuXG59XG5cblByZVAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShuZXcgUE9TKCkpXG5cbmNvbnN0IFByZVBFcnJvcnMgPSB7XG5cdCdNSVNTSU5HX0hFQUQnOidUaGlzIHByZXBvc2l0aW9uYWwgcGhyYXNlIG11c3QgaGF2ZSBhIGhlYWQuJyxcblx0J01JU1NJTkdfTlAnOidUaGlzIHByZXBvc2l0aW9uYWwgcGhyYXNlIG11c3QgaGF2ZSBhIG5vdW4gcGhyYXNlLidcbn1cblxuUHJlUC5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2hlYWQnIGluIHRoaXMpXHQpXG5cdFx0cmV0dXJuIHt0OnVuZGVmaW5lZCwgZTpbUHJlUEVycm9ycy5NSVNTSU5HX0hFQURdfVxuXG5cdGlmKCEoJ25wJyBpbiB0aGlzKSlcblx0XHRyZXR1cm4ge3Q6dW5kZWZpbmVkLCBlOltQcmVQRXJyb3JzLk1JU1NJTkdfTlBdfVxuXG5cdGxldCByZXRWYWwgPSB0aGlzLmhlYWQuYW5hbHlzZSgpLnQgKyAnICcgKyB0aGlzLm5wLmFuYWx5c2UoKS50XG5cdHJldHVybiB7dDpyZXRWYWwsIGU6W119XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZVBcbmV4cG9ydCB7UHJlUEVycm9yc31cbiJdfQ==