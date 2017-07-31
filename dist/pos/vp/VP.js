'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VPErrors = undefined;

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VP(props) {
	this.t = _SchemaConstants2.default.VP.t;
	this.v = _SchemaConstants2.default.VP.cv;

	// p50 the head of a verb phrase, aka the predicator, is a V
	// the object can be a NP
	if (props) {
		if ('head' in props) this.head = props.head;
		if ('object' in props) this.object = props.object;
	}
}

VP.prototype = Object.create(new _POS2.default());

var VPErrors = {
	'MISSING_HEAD': 'This verb phrase must have a head aka predicator.',
	'MISSING_OBJECT': 'This verb phrase must have an object.'
};

VP.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [VPErrors.MISSING_HEAD] };

	if (!('object' in this)) return { t: undefined, e: [VPErrors.MISSING_OBJECT] };

	var retVal = this.head.analyse().t + ' ' + this.object.analyse().t;
	return { t: retVal, e: [] };
};

exports.default = VP;
exports.VPErrors = VPErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvdnAvVlAuanMiXSwibmFtZXMiOlsiVlAiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwib2JqZWN0IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiVlBFcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfSEVBRCIsIk1JU1NJTkdfT0JKRUNUIiwicmV0VmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsRUFBVCxDQUFZQyxLQUFaLEVBQW1CO0FBQ2xCLE1BQUtDLENBQUwsR0FBUywwQkFBT0YsRUFBUCxDQUFVRSxDQUFuQjtBQUNBLE1BQUtDLENBQUwsR0FBUywwQkFBT0gsRUFBUCxDQUFVSSxFQUFuQjs7QUFFQTtBQUNBO0FBQ0EsS0FBR0gsS0FBSCxFQUFVO0FBQ1QsTUFBRyxVQUFVQSxLQUFiLEVBQ0MsS0FBS0ksSUFBTCxHQUFZSixNQUFNSSxJQUFsQjtBQUNELE1BQUcsWUFBWUosS0FBZixFQUNDLEtBQUtLLE1BQUwsR0FBY0wsTUFBTUssTUFBcEI7QUFDRDtBQUVEOztBQUVETixHQUFHTyxTQUFILEdBQWVDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFmOztBQUVBLElBQU1DLFdBQVc7QUFDaEIsaUJBQWUsbURBREM7QUFFaEIsbUJBQWlCO0FBRkQsQ0FBakI7O0FBS0FWLEdBQUdPLFNBQUgsQ0FBYUksT0FBYixHQUF1QixZQUFXOztBQUVqQyxLQUFHLEVBQUUsVUFBVSxJQUFaLENBQUgsRUFDQyxPQUFPLEVBQUNULEdBQUVVLFNBQUgsRUFBY0MsR0FBRSxDQUFDSCxTQUFTSSxZQUFWLENBQWhCLEVBQVA7O0FBRUQsS0FBRyxFQUFFLFlBQVksSUFBZCxDQUFILEVBQ0MsT0FBTyxFQUFDWixHQUFFVSxTQUFILEVBQWNDLEdBQUUsQ0FBQ0gsU0FBU0ssY0FBVixDQUFoQixFQUFQOztBQUVELEtBQUlDLFNBQVMsS0FBS1gsSUFBTCxDQUFVTSxPQUFWLEdBQW9CVCxDQUFwQixHQUF3QixHQUF4QixHQUE4QixLQUFLSSxNQUFMLENBQVlLLE9BQVosR0FBc0JULENBQWpFO0FBQ0EsUUFBTyxFQUFDQSxHQUFFYyxNQUFILEVBQVVILEdBQUUsRUFBWixFQUFQO0FBRUEsQ0FYRDs7a0JBYWViLEU7UUFDUFUsUSxHQUFBQSxRIiwiZmlsZSI6IlZQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBPUyAgICBmcm9tICcuLi9QT1MnXG5pbXBvcnQgU2NoZW1hIGZyb20gJy4uL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gVlAocHJvcHMpIHtcblx0dGhpcy50ID0gU2NoZW1hLlZQLnRcblx0dGhpcy52ID0gU2NoZW1hLlZQLmN2XG5cblx0Ly8gcDUwIHRoZSBoZWFkIG9mIGEgdmVyYiBwaHJhc2UsIGFrYSB0aGUgcHJlZGljYXRvciwgaXMgYSBWXG5cdC8vIHRoZSBvYmplY3QgY2FuIGJlIGEgTlBcblx0aWYocHJvcHMpIHtcblx0XHRpZignaGVhZCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLmhlYWQgPSBwcm9wcy5oZWFkXG5cdFx0aWYoJ29iamVjdCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLm9iamVjdCA9IHByb3BzLm9iamVjdFxuXHR9XG5cbn1cblxuVlAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShuZXcgUE9TKCkpXG5cbmNvbnN0IFZQRXJyb3JzID0ge1xuXHQnTUlTU0lOR19IRUFEJzonVGhpcyB2ZXJiIHBocmFzZSBtdXN0IGhhdmUgYSBoZWFkIGFrYSBwcmVkaWNhdG9yLicsXG5cdCdNSVNTSU5HX09CSkVDVCc6J1RoaXMgdmVyYiBwaHJhc2UgbXVzdCBoYXZlIGFuIG9iamVjdC4nXG59XG5cblZQLnByb3RvdHlwZS5hbmFseXNlID0gZnVuY3Rpb24oKSB7XG5cblx0aWYoISgnaGVhZCcgaW4gdGhpcykpXG5cdFx0cmV0dXJuIHt0OnVuZGVmaW5lZCwgZTpbVlBFcnJvcnMuTUlTU0lOR19IRUFEXX1cblxuXHRpZighKCdvYmplY3QnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W1ZQRXJyb3JzLk1JU1NJTkdfT0JKRUNUXX1cblxuXHRsZXQgcmV0VmFsID0gdGhpcy5oZWFkLmFuYWx5c2UoKS50ICsgJyAnICsgdGhpcy5vYmplY3QuYW5hbHlzZSgpLnRcblx0cmV0dXJuIHt0OnJldFZhbCxlOltdfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZQXG5leHBvcnQge1ZQRXJyb3JzfVxuIl19