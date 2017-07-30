'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NomErrors = undefined;

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 326,327 has a N or Pro as a head and various dependents. Such as:
// * the determinatives: a, the, every
// * pre-head AdjP
// * relative clauses
// 329 A nom can be the head of a NP or its pre-head dependent
function Nom(props) {
	this.t = _SchemaConstants2.default.Nom.t;
	this.v = _SchemaConstants2.default.Nom.cv;

	if (props) {
		if ('head' in props) this.head = props.head;
		if ('modifier' in props) this.modifier = props.modifier;
	}
}

Nom.prototype = Object.create(new _POS2.default());

var NomErrors = {
	'MISSING_HEAD': 'This nominal must have a head.'
};

Nom.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [NomErrors.MISSING_HEAD] };

	var retVal = void 0;

	if ('modifier' in this) retVal = this.modifier.analyse().t + ' ' + this.head.analyse().t;else retVal = this.head.analyse().t;

	return { t: retVal, e: [] };
};

exports.default = Nom;
exports.NomErrors = NomErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvbm9tL05vbS5qcyJdLCJuYW1lcyI6WyJOb20iLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwibW9kaWZpZXIiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJOb21FcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfSEVBRCIsInJldFZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFDbkIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPRixHQUFQLENBQVdFLENBQXBCO0FBQ0EsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPSCxHQUFQLENBQVdJLEVBQXBCOztBQUVBLEtBQUdILEtBQUgsRUFBVTtBQUNULE1BQUcsVUFBVUEsS0FBYixFQUNDLEtBQUtJLElBQUwsR0FBWUosTUFBTUksSUFBbEI7QUFDRCxNQUFHLGNBQWNKLEtBQWpCLEVBQ0MsS0FBS0ssUUFBTCxHQUFnQkwsTUFBTUssUUFBdEI7QUFDRDtBQUVEOztBQUVETixJQUFJTyxTQUFKLEdBQWdCQyxPQUFPQyxNQUFQLENBQWMsbUJBQWQsQ0FBaEI7O0FBRUEsSUFBTUMsWUFBWTtBQUNqQixpQkFBZTtBQURFLENBQWxCOztBQUlBVixJQUFJTyxTQUFKLENBQWNJLE9BQWQsR0FBd0IsWUFBVzs7QUFFbEMsS0FBRyxFQUFFLFVBQVUsSUFBWixDQUFILEVBQ0MsT0FBTyxFQUFDVCxHQUFFVSxTQUFILEVBQWNDLEdBQUUsQ0FBQ0gsVUFBVUksWUFBWCxDQUFoQixFQUFQOztBQUVELEtBQUlDLGVBQUo7O0FBRUEsS0FBSSxjQUFjLElBQWxCLEVBQ0NBLFNBQVMsS0FBS1QsUUFBTCxDQUFjSyxPQUFkLEdBQXdCVCxDQUF4QixHQUE0QixHQUE1QixHQUFrQyxLQUFLRyxJQUFMLENBQVVNLE9BQVYsR0FBb0JULENBQS9ELENBREQsS0FHQ2EsU0FBUyxLQUFLVixJQUFMLENBQVVNLE9BQVYsR0FBb0JULENBQTdCOztBQUVELFFBQU8sRUFBQ0EsR0FBRWEsTUFBSCxFQUFXRixHQUFFLEVBQWIsRUFBUDtBQUNBLENBYkQ7O2tCQWVlYixHO1FBQ1BVLFMsR0FBQUEsUyIsImZpbGUiOiJOb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUE9TICAgIGZyb20gJy4uL1BPUydcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vU2NoZW1hQ29uc3RhbnRzJ1xuXG4vLyAzMjYsMzI3IGhhcyBhIE4gb3IgUHJvIGFzIGEgaGVhZCBhbmQgdmFyaW91cyBkZXBlbmRlbnRzLiBTdWNoIGFzOlxuLy8gKiB0aGUgZGV0ZXJtaW5hdGl2ZXM6IGEsIHRoZSwgZXZlcnlcbi8vICogcHJlLWhlYWQgQWRqUFxuLy8gKiByZWxhdGl2ZSBjbGF1c2VzXG4vLyAzMjkgQSBub20gY2FuIGJlIHRoZSBoZWFkIG9mIGEgTlAgb3IgaXRzIHByZS1oZWFkIGRlcGVuZGVudFxuZnVuY3Rpb24gTm9tKHByb3BzKSB7XG5cdHRoaXMudCA9IFNjaGVtYS5Ob20udFxuXHR0aGlzLnYgPSBTY2hlbWEuTm9tLmN2XG5cblx0aWYocHJvcHMpIHtcblx0XHRpZignaGVhZCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLmhlYWQgPSBwcm9wcy5oZWFkXG5cdFx0aWYoJ21vZGlmaWVyJyBpbiBwcm9wcylcblx0XHRcdHRoaXMubW9kaWZpZXIgPSBwcm9wcy5tb2RpZmllclxuXHR9XG5cbn1cblxuTm9tLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobmV3IFBPUygpKVxuXG5jb25zdCBOb21FcnJvcnMgPSB7XG5cdCdNSVNTSU5HX0hFQUQnOidUaGlzIG5vbWluYWwgbXVzdCBoYXZlIGEgaGVhZC4nXG59XG5cbk5vbS5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2hlYWQnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W05vbUVycm9ycy5NSVNTSU5HX0hFQURdfVxuXG5cdGxldCByZXRWYWxcblxuXHRpZigoJ21vZGlmaWVyJyBpbiB0aGlzKSlcblx0XHRyZXRWYWwgPSB0aGlzLm1vZGlmaWVyLmFuYWx5c2UoKS50ICsgJyAnICsgdGhpcy5oZWFkLmFuYWx5c2UoKS50XG5cdGVsc2Vcblx0XHRyZXRWYWwgPSB0aGlzLmhlYWQuYW5hbHlzZSgpLnRcblxuXHRyZXR1cm4ge3Q6cmV0VmFsLCBlOltdfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb21cbmV4cG9ydCB7Tm9tRXJyb3JzfVxuIl19