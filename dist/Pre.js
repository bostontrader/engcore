'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PreOb = exports.PreGenerateText = exports.PreErrors = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreOb(props) {
	this.t = _SchemaConstants2.default.Pre.t;
	this.v = _SchemaConstants2.default.Pre.cv;
	this.base = props.base;
}

var PreErrors = {
	'PRE_BASE_UNDEFINED': 'Pre base undefined'
};

var PreGenerateText = function PreGenerateText(pre) {
	if (!pre.base) return { e: PreErrors.PRE_BASE_UNDEFINED };

	return pre.base;
};

exports.PreErrors = PreErrors;
exports.PreGenerateText = PreGenerateText;
exports.PreOb = PreOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QcmUuanMiXSwibmFtZXMiOlsiUHJlT2IiLCJwcm9wcyIsInQiLCJQcmUiLCJ2IiwiY3YiLCJiYXNlIiwiUHJlRXJyb3JzIiwiUHJlR2VuZXJhdGVUZXh0IiwicHJlIiwiZSIsIlBSRV9CQVNFX1VOREVGSU5FRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDckIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxHQUFQLENBQVdELENBQXBCO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxHQUFQLENBQVdFLEVBQXBCO0FBQ0EsTUFBS0MsSUFBTCxHQUFZTCxNQUFNSyxJQUFsQjtBQUNBOztBQUVELElBQU1DLFlBQVk7QUFDakIsdUJBQXFCO0FBREosQ0FBbEI7O0FBSUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQVM7QUFDaEMsS0FBRyxDQUFDQSxJQUFJSCxJQUFSLEVBQ0MsT0FBTyxFQUFDSSxHQUFFSCxVQUFVSSxrQkFBYixFQUFQOztBQUVELFFBQU9GLElBQUlILElBQVg7QUFDQSxDQUxEOztRQU9RQyxTLEdBQUFBLFM7UUFDQUMsZSxHQUFBQSxlO1FBQ0FSLEssR0FBQUEsSyIsImZpbGUiOiJQcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NoZW1hIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuXG5mdW5jdGlvbiBQcmVPYihwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuUHJlLnRcblx0dGhpcy52ID0gU2NoZW1hLlByZS5jdlxuXHR0aGlzLmJhc2UgPSBwcm9wcy5iYXNlXG59XG5cbmNvbnN0IFByZUVycm9ycyA9IHtcblx0J1BSRV9CQVNFX1VOREVGSU5FRCc6J1ByZSBiYXNlIHVuZGVmaW5lZCdcbn1cblxuY29uc3QgUHJlR2VuZXJhdGVUZXh0ID0gKHByZSkgPT4ge1xuXHRpZighcHJlLmJhc2UpXG5cdFx0cmV0dXJuIHtlOlByZUVycm9ycy5QUkVfQkFTRV9VTkRFRklORUR9XG5cblx0cmV0dXJuIHByZS5iYXNlXG59XG5cbmV4cG9ydCB7UHJlRXJyb3JzfVxuZXhwb3J0IHtQcmVHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZU9ifVxuIl19