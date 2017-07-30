'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NPErrors = undefined;

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Plurality from '../Plurality'
//import Nom       from '../nom/Nom'

function NP(props) {
	this.t = _SchemaConstants2.default.NP.t;
	this.v = _SchemaConstants2.default.NP.cv;

	// 326. has a head and optionally one or more dependents

	// 330. the head can be a N or a Nom
	// 330. the determinative can be a Det, a DetP, or a genative NP.
	//this.definiteness = props.definiteness || Definiteness.NoneSelected
	//this.plurality = props.plurality || Plurality.NoneSelected
	//this.adjectives = props.adjectives || []
	if (props) {
		if ('head' in props) this.head = props.head;
		if ('det' in props) this.det = props.det;
	}
}

NP.prototype = Object.create(new _POS2.default());

//const Definiteness = {
//'NoneSelected': 0,
//'Definite':   100,
//'Indefinite': 200,
//}

// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
// 327. Other functions: complement in PP, subject-determiner in NP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in NP, supplement, vocative
// 327. dummy category 'there'
// 328. bare role: ie. 'president'
// 329. pre-head and post-head dependents.
var NPErrors = {
	'MISSING_HEAD': 'This nominal must have a head.'
};

NP.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [NPErrors.MISSING_HEAD] };

	var retVal = void 0;

	if ('det' in this) retVal = this.det.analyse().t + ' ' + this.head.analyse().t;else retVal = this.head.analyse().t;

	return { t: retVal, e: [] };
};

exports.default = NP;
exports.NPErrors = NPErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvbnAvTlAuanMiXSwibmFtZXMiOlsiTlAiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTlBFcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfSEVBRCIsInJldFZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsRUFBVCxDQUFZQyxLQUFaLEVBQW1CO0FBQ2xCLE1BQUtDLENBQUwsR0FBUywwQkFBT0YsRUFBUCxDQUFVRSxDQUFuQjtBQUNBLE1BQUtDLENBQUwsR0FBUywwQkFBT0gsRUFBUCxDQUFVSSxFQUFuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBR0gsS0FBSCxFQUFVO0FBQ1QsTUFBRyxVQUFVQSxLQUFiLEVBQ0MsS0FBS0ksSUFBTCxHQUFZSixNQUFNSSxJQUFsQjtBQUNELE1BQUcsU0FBU0osS0FBWixFQUNDLEtBQUtLLEdBQUwsR0FBV0wsTUFBTUssR0FBakI7QUFDRDtBQUNEOztBQUVETixHQUFHTyxTQUFILEdBQWVDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFmOztBQUVBO0FBQ0M7QUFDQTtBQUNBO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFdBQVc7QUFDaEIsaUJBQWU7QUFEQyxDQUFqQjs7QUFJQVYsR0FBR08sU0FBSCxDQUFhSSxPQUFiLEdBQXVCLFlBQVc7O0FBRWpDLEtBQUcsRUFBRSxVQUFVLElBQVosQ0FBSCxFQUNDLE9BQU8sRUFBQ1QsR0FBRVUsU0FBSCxFQUFjQyxHQUFFLENBQUNILFNBQVNJLFlBQVYsQ0FBaEIsRUFBUDs7QUFFRCxLQUFJQyxlQUFKOztBQUVBLEtBQUksU0FBUyxJQUFiLEVBQ0NBLFNBQVMsS0FBS1QsR0FBTCxDQUFTSyxPQUFULEdBQW1CVCxDQUFuQixHQUF1QixHQUF2QixHQUE2QixLQUFLRyxJQUFMLENBQVVNLE9BQVYsR0FBb0JULENBQTFELENBREQsS0FHQ2EsU0FBUyxLQUFLVixJQUFMLENBQVVNLE9BQVYsR0FBb0JULENBQTdCOztBQUVELFFBQU8sRUFBQ0EsR0FBRWEsTUFBSCxFQUFXRixHQUFFLEVBQWIsRUFBUDtBQUdBLENBZkQ7O2tCQWlCZWIsRTtRQUNQVSxRLEdBQUFBLFEiLCJmaWxlIjoiTlAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUE9TICAgICAgIGZyb20gJy4uL1BPUydcbmltcG9ydCBTY2hlbWEgICAgZnJvbSAnLi4vU2NoZW1hQ29uc3RhbnRzJ1xuLy9pbXBvcnQgUGx1cmFsaXR5IGZyb20gJy4uL1BsdXJhbGl0eSdcbi8vaW1wb3J0IE5vbSAgICAgICBmcm9tICcuLi9ub20vTm9tJ1xuXG5mdW5jdGlvbiBOUChwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuTlAudFxuXHR0aGlzLnYgPSBTY2hlbWEuTlAuY3ZcblxuXHQvLyAzMjYuIGhhcyBhIGhlYWQgYW5kIG9wdGlvbmFsbHkgb25lIG9yIG1vcmUgZGVwZW5kZW50c1xuXG5cdC8vIDMzMC4gdGhlIGhlYWQgY2FuIGJlIGEgTiBvciBhIE5vbVxuXHQvLyAzMzAuIHRoZSBkZXRlcm1pbmF0aXZlIGNhbiBiZSBhIERldCwgYSBEZXRQLCBvciBhIGdlbmF0aXZlIE5QLlxuXHQvL3RoaXMuZGVmaW5pdGVuZXNzID0gcHJvcHMuZGVmaW5pdGVuZXNzIHx8IERlZmluaXRlbmVzcy5Ob25lU2VsZWN0ZWRcblx0Ly90aGlzLnBsdXJhbGl0eSA9IHByb3BzLnBsdXJhbGl0eSB8fCBQbHVyYWxpdHkuTm9uZVNlbGVjdGVkXG5cdC8vdGhpcy5hZGplY3RpdmVzID0gcHJvcHMuYWRqZWN0aXZlcyB8fCBbXVxuXHRpZihwcm9wcykge1xuXHRcdGlmKCdoZWFkJyBpbiBwcm9wcylcblx0XHRcdHRoaXMuaGVhZCA9IHByb3BzLmhlYWRcblx0XHRpZignZGV0JyBpbiBwcm9wcylcblx0XHRcdHRoaXMuZGV0ID0gcHJvcHMuZGV0XG5cdH1cbn1cblxuTlAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShuZXcgUE9TKCkpXG5cbi8vY29uc3QgRGVmaW5pdGVuZXNzID0ge1xuXHQvLydOb25lU2VsZWN0ZWQnOiAwLFxuXHQvLydEZWZpbml0ZSc6ICAgMTAwLFxuXHQvLydJbmRlZmluaXRlJzogMjAwLFxuLy99XG5cbi8vIDMyNi4gQ2FuIGJlIGEgY29tcGxlbWVudCBpbiBhIGNsYXVzZSwgYWthIHN1YmplY3QsIGFuIG9iamVjdCwgb3IgYSBwcmVkaWNhdGl2ZSBjb21wbGVtZW50LlxuLy8gMzI3LiBPdGhlciBmdW5jdGlvbnM6IGNvbXBsZW1lbnQgaW4gUFAsIHN1YmplY3QtZGV0ZXJtaW5lciBpbiBOUCwgYWRqdW5jdCBpbiBjbGF1c2UsIG1vZGlmaWVyIGluIEFkalAsIG1vZGlmaWVyIGluIEFkdlAsIG1vZGlmaWVyIGluIFBQLCBtb2RpZmllciBpbiBOUCwgc3VwcGxlbWVudCwgdm9jYXRpdmVcbi8vIDMyNy4gZHVtbXkgY2F0ZWdvcnkgJ3RoZXJlJ1xuLy8gMzI4LiBiYXJlIHJvbGU6IGllLiAncHJlc2lkZW50J1xuLy8gMzI5LiBwcmUtaGVhZCBhbmQgcG9zdC1oZWFkIGRlcGVuZGVudHMuXG5jb25zdCBOUEVycm9ycyA9IHtcblx0J01JU1NJTkdfSEVBRCc6J1RoaXMgbm9taW5hbCBtdXN0IGhhdmUgYSBoZWFkLidcbn1cblxuTlAucHJvdG90eXBlLmFuYWx5c2UgPSBmdW5jdGlvbigpIHtcblxuXHRpZighKCdoZWFkJyBpbiB0aGlzKSlcblx0XHRyZXR1cm4ge3Q6dW5kZWZpbmVkLCBlOltOUEVycm9ycy5NSVNTSU5HX0hFQURdfVxuXG5cdGxldCByZXRWYWxcblxuXHRpZigoJ2RldCcgaW4gdGhpcykpXG5cdFx0cmV0VmFsID0gdGhpcy5kZXQuYW5hbHlzZSgpLnQgKyAnICcgKyB0aGlzLmhlYWQuYW5hbHlzZSgpLnRcblx0ZWxzZVxuXHRcdHJldFZhbCA9IHRoaXMuaGVhZC5hbmFseXNlKCkudFxuXG5cdHJldHVybiB7dDpyZXRWYWwsIGU6W119XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOUFxuZXhwb3J0IHtOUEVycm9yc31cbiJdfQ==