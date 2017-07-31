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

// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
// 327. Other functions: complement in PP, subject-determiner in NP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in NP, supplement, vocative
// 327. dummy category 'there'
// 328. bare role: ie. 'president'
// 329. pre-head and post-head dependents.
var NPErrors = {
	'MISSING_HEAD': 'This noun phrase must have a head.'
};

NP.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [NPErrors.MISSING_HEAD] };

	var retVal = void 0;

	if ('det' in this) retVal = this.det.analyse().t + ' ' + this.head.analyse().t;else retVal = this.head.analyse().t;

	return { t: retVal, e: [] };
};

exports.default = NP;
exports.NPErrors = NPErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvbnAvTlAuanMiXSwibmFtZXMiOlsiTlAiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiTlBFcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfSEVBRCIsInJldFZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsRUFBVCxDQUFZQyxLQUFaLEVBQW1CO0FBQ2xCLE1BQUtDLENBQUwsR0FBUywwQkFBT0YsRUFBUCxDQUFVRSxDQUFuQjtBQUNBLE1BQUtDLENBQUwsR0FBUywwQkFBT0gsRUFBUCxDQUFVSSxFQUFuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBR0gsS0FBSCxFQUFVO0FBQ1QsTUFBRyxVQUFVQSxLQUFiLEVBQ0MsS0FBS0ksSUFBTCxHQUFZSixNQUFNSSxJQUFsQjtBQUNELE1BQUcsU0FBU0osS0FBWixFQUNDLEtBQUtLLEdBQUwsR0FBV0wsTUFBTUssR0FBakI7QUFDRDtBQUNEOztBQUVETixHQUFHTyxTQUFILEdBQWVDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxXQUFXO0FBQ2hCLGlCQUFlO0FBREMsQ0FBakI7O0FBSUFWLEdBQUdPLFNBQUgsQ0FBYUksT0FBYixHQUF1QixZQUFXOztBQUVqQyxLQUFHLEVBQUUsVUFBVSxJQUFaLENBQUgsRUFDQyxPQUFPLEVBQUNULEdBQUVVLFNBQUgsRUFBY0MsR0FBRSxDQUFDSCxTQUFTSSxZQUFWLENBQWhCLEVBQVA7O0FBRUQsS0FBSUMsZUFBSjs7QUFFQSxLQUFJLFNBQVMsSUFBYixFQUNDQSxTQUFTLEtBQUtULEdBQUwsQ0FBU0ssT0FBVCxHQUFtQlQsQ0FBbkIsR0FBdUIsR0FBdkIsR0FBNkIsS0FBS0csSUFBTCxDQUFVTSxPQUFWLEdBQW9CVCxDQUExRCxDQURELEtBR0NhLFNBQVMsS0FBS1YsSUFBTCxDQUFVTSxPQUFWLEdBQW9CVCxDQUE3Qjs7QUFFRCxRQUFPLEVBQUNBLEdBQUVhLE1BQUgsRUFBV0YsR0FBRSxFQUFiLEVBQVA7QUFHQSxDQWZEOztrQkFpQmViLEU7UUFDUFUsUSxHQUFBQSxRIiwiZmlsZSI6Ik5QLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBPUyAgICAgICBmcm9tICcuLi9QT1MnXG5pbXBvcnQgU2NoZW1hICAgIGZyb20gJy4uL1NjaGVtYUNvbnN0YW50cydcbi8vaW1wb3J0IFBsdXJhbGl0eSBmcm9tICcuLi9QbHVyYWxpdHknXG4vL2ltcG9ydCBOb20gICAgICAgZnJvbSAnLi4vbm9tL05vbSdcblxuZnVuY3Rpb24gTlAocHJvcHMpIHtcblx0dGhpcy50ID0gU2NoZW1hLk5QLnRcblx0dGhpcy52ID0gU2NoZW1hLk5QLmN2XG5cblx0Ly8gMzI2LiBoYXMgYSBoZWFkIGFuZCBvcHRpb25hbGx5IG9uZSBvciBtb3JlIGRlcGVuZGVudHNcblxuXHQvLyAzMzAuIHRoZSBoZWFkIGNhbiBiZSBhIE4gb3IgYSBOb21cblx0Ly8gMzMwLiB0aGUgZGV0ZXJtaW5hdGl2ZSBjYW4gYmUgYSBEZXQsIGEgRGV0UCwgb3IgYSBnZW5hdGl2ZSBOUC5cblx0Ly90aGlzLmRlZmluaXRlbmVzcyA9IHByb3BzLmRlZmluaXRlbmVzcyB8fCBEZWZpbml0ZW5lc3MuTm9uZVNlbGVjdGVkXG5cdC8vdGhpcy5wbHVyYWxpdHkgPSBwcm9wcy5wbHVyYWxpdHkgfHwgUGx1cmFsaXR5Lk5vbmVTZWxlY3RlZFxuXHQvL3RoaXMuYWRqZWN0aXZlcyA9IHByb3BzLmFkamVjdGl2ZXMgfHwgW11cblx0aWYocHJvcHMpIHtcblx0XHRpZignaGVhZCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLmhlYWQgPSBwcm9wcy5oZWFkXG5cdFx0aWYoJ2RldCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLmRldCA9IHByb3BzLmRldFxuXHR9XG59XG5cbk5QLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobmV3IFBPUygpKVxuXG4vLyAzMjYuIENhbiBiZSBhIGNvbXBsZW1lbnQgaW4gYSBjbGF1c2UsIGFrYSBzdWJqZWN0LCBhbiBvYmplY3QsIG9yIGEgcHJlZGljYXRpdmUgY29tcGxlbWVudC5cbi8vIDMyNy4gT3RoZXIgZnVuY3Rpb25zOiBjb21wbGVtZW50IGluIFBQLCBzdWJqZWN0LWRldGVybWluZXIgaW4gTlAsIGFkanVuY3QgaW4gY2xhdXNlLCBtb2RpZmllciBpbiBBZGpQLCBtb2RpZmllciBpbiBBZHZQLCBtb2RpZmllciBpbiBQUCwgbW9kaWZpZXIgaW4gTlAsIHN1cHBsZW1lbnQsIHZvY2F0aXZlXG4vLyAzMjcuIGR1bW15IGNhdGVnb3J5ICd0aGVyZSdcbi8vIDMyOC4gYmFyZSByb2xlOiBpZS4gJ3ByZXNpZGVudCdcbi8vIDMyOS4gcHJlLWhlYWQgYW5kIHBvc3QtaGVhZCBkZXBlbmRlbnRzLlxuY29uc3QgTlBFcnJvcnMgPSB7XG5cdCdNSVNTSU5HX0hFQUQnOidUaGlzIG5vdW4gcGhyYXNlIG11c3QgaGF2ZSBhIGhlYWQuJ1xufVxuXG5OUC5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2hlYWQnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W05QRXJyb3JzLk1JU1NJTkdfSEVBRF19XG5cblx0bGV0IHJldFZhbFxuXG5cdGlmKCgnZGV0JyBpbiB0aGlzKSlcblx0XHRyZXRWYWwgPSB0aGlzLmRldC5hbmFseXNlKCkudCArICcgJyArIHRoaXMuaGVhZC5hbmFseXNlKCkudFxuXHRlbHNlXG5cdFx0cmV0VmFsID0gdGhpcy5oZWFkLmFuYWx5c2UoKS50XG5cblx0cmV0dXJuIHt0OnJldFZhbCwgZTpbXX1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5QXG5leHBvcnQge05QRXJyb3JzfVxuIl19