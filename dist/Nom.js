'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NomOb = exports.NomGenerateText = exports.NomErrors = undefined;

var _Adj = require('./Adj');

var _N = require('./N');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 326,327 has a N or Pro as a head and various dependents. Such as:
// * the determinatives: a, the, every
// * pre-head AdjP
// * relative clauses
// 329 can be head of NP or pre-head dependent
function NomOb(props) {
	this.t = _SchemaConstants2.default.Nom.t;
	this.v = _SchemaConstants2.default.Nom.cv;

	this.head = props.head;
	this.modifier = props.modifier;
}

var NomErrors = {
	'MISSING_HEAD': 'This nominal must have a head.'
};

var NomGenerateText = function NomGenerateText(nom) {

	if (!nom.head) return { e: NomErrors.MISSING_HEAD };

	if (nom.modifier) return (0, _Adj.AdjGenerateText)(nom.modifier) + ' ' + (0, _N.NGenerateText)(nom.head);else return (0, _N.NGenerateText)(nom.head);
};

exports.NomErrors = NomErrors;
exports.NomGenerateText = NomGenerateText;
exports.NomOb = NomOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ob20uanMiXSwibmFtZXMiOlsiTm9tT2IiLCJwcm9wcyIsInQiLCJOb20iLCJ2IiwiY3YiLCJoZWFkIiwibW9kaWZpZXIiLCJOb21FcnJvcnMiLCJOb21HZW5lcmF0ZVRleHQiLCJub20iLCJlIiwiTUlTU0lOR19IRUFEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFDckIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxHQUFQLENBQVdELENBQXBCO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxHQUFQLENBQVdFLEVBQXBCOztBQUVBLE1BQUtDLElBQUwsR0FBWUwsTUFBTUssSUFBbEI7QUFDQSxNQUFLQyxRQUFMLEdBQWdCTixNQUFNTSxRQUF0QjtBQUNBOztBQUVELElBQU1DLFlBQVk7QUFDakIsaUJBQWU7QUFERSxDQUFsQjs7QUFJQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEdBQUQsRUFBUzs7QUFFaEMsS0FBRyxDQUFDQSxJQUFJSixJQUFSLEVBQ0MsT0FBTyxFQUFDSyxHQUFFSCxVQUFVSSxZQUFiLEVBQVA7O0FBRUQsS0FBR0YsSUFBSUgsUUFBUCxFQUNDLE9BQU8sMEJBQWdCRyxJQUFJSCxRQUFwQixJQUFnQyxHQUFoQyxHQUFzQyxzQkFBY0csSUFBSUosSUFBbEIsQ0FBN0MsQ0FERCxLQUdDLE9BQU8sc0JBQWNJLElBQUlKLElBQWxCLENBQVA7QUFFRCxDQVZEOztRQVlRRSxTLEdBQUFBLFM7UUFDQUMsZSxHQUFBQSxlO1FBQ0FULEssR0FBQUEsSyIsImZpbGUiOiJOb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FkakdlbmVyYXRlVGV4dH0gZnJvbSAnLi9BZGonXG5pbXBvcnQge05HZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9OJ1xuaW1wb3J0IFNjaGVtYSAgICAgICAgICAgIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuXG4vLyAzMjYsMzI3IGhhcyBhIE4gb3IgUHJvIGFzIGEgaGVhZCBhbmQgdmFyaW91cyBkZXBlbmRlbnRzLiBTdWNoIGFzOlxuLy8gKiB0aGUgZGV0ZXJtaW5hdGl2ZXM6IGEsIHRoZSwgZXZlcnlcbi8vICogcHJlLWhlYWQgQWRqUFxuLy8gKiByZWxhdGl2ZSBjbGF1c2VzXG4vLyAzMjkgY2FuIGJlIGhlYWQgb2YgTlAgb3IgcHJlLWhlYWQgZGVwZW5kZW50XG5mdW5jdGlvbiBOb21PYihwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuTm9tLnRcblx0dGhpcy52ID0gU2NoZW1hLk5vbS5jdlxuXG5cdHRoaXMuaGVhZCA9IHByb3BzLmhlYWRcblx0dGhpcy5tb2RpZmllciA9IHByb3BzLm1vZGlmaWVyXG59XG5cbmNvbnN0IE5vbUVycm9ycyA9IHtcblx0J01JU1NJTkdfSEVBRCc6J1RoaXMgbm9taW5hbCBtdXN0IGhhdmUgYSBoZWFkLidcbn1cblxuY29uc3QgTm9tR2VuZXJhdGVUZXh0ID0gKG5vbSkgPT4ge1xuXG5cdGlmKCFub20uaGVhZClcblx0XHRyZXR1cm4ge2U6Tm9tRXJyb3JzLk1JU1NJTkdfSEVBRH1cblxuXHRpZihub20ubW9kaWZpZXIpXG5cdFx0cmV0dXJuIEFkakdlbmVyYXRlVGV4dChub20ubW9kaWZpZXIpICsgJyAnICsgTkdlbmVyYXRlVGV4dChub20uaGVhZClcblx0ZWxzZVxuXHRcdHJldHVybiBOR2VuZXJhdGVUZXh0KG5vbS5oZWFkKVxuXG59XG5cbmV4cG9ydCB7Tm9tRXJyb3JzfVxuZXhwb3J0IHtOb21HZW5lcmF0ZVRleHR9XG5leHBvcnQge05vbU9ifVxuIl19