'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DetPErrors = undefined;

var _POS = require('../POS');

var _POS2 = _interopRequireDefault(_POS);

var _Definiteness = require('../Definiteness');

var _Definiteness2 = _interopRequireDefault(_Definiteness);

var _SchemaConstants = require('../SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DetP(props) {
	this.t = _SchemaConstants2.default.DetP.t;
	this.v = _SchemaConstants2.default.DetP.cv;

	// 326. has a head and optionally one or more dependents
	// 330. the determinative can be a Det, a DetP, or a genative DetP.
	if (props) {
		if ('head' in props) this.head = props.head;
		if ('det' in props) this.det = props.det;
	}
}

DetP.prototype = Object.create(new _POS2.default());

// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
// 327. Other functions: complement in PP, subject-determiner in DetP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in DetP, supplement, vocative
// 327. dummy category 'there'
// 328. bare role: ie. 'president'
// 329. pre-head and post-head dependents.
var DetPErrors = {
	'MISSING_HEAD': 'This determinative phrase must have a head.'
};

DetP.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [DetPErrors.MISSING_HEAD] };

	var retVal = void 0;

	if ('det' in this) retVal = this.det.analyse().t + ' ' + this.head.analyse().t;else retVal = this.head.analyse().t;

	return { t: retVal, e: []

		// noun: Object, adjString: String
		//function aoran(noun, adjString) {
		//let article = 'a'

		//const firstChar = (adjString === '') ? noun.base.charAt(0) : adjString.charAt(0)
		//article = ('aeiouAEIOU'.indexOf(firstChar) < 0) ? 'a' : 'an'
		//if (noun.soundLikeYou) article = 'a'
		//if (noun.silentH) article = 'an'
		//return article
		//}


		//let article = ''

		//let adjString = np.adjectives.map( (n) => n.base).join(' ')

		//if(np.plurality === Plurality.Singular) {
		//article = 'the'
		//} else if(np.plurality === Plurality.Plural) {
		//article = aoran(np.head, adjString)
		//}


		//if(np.exampleOf)          article = aoran(np.head, adjString)

		//if(np.firstTime)          article = aoran(np.head, adjString)
		//if(np.nameOfJob)          article = this.aoran(np.get('headd'), adjString)
		//if(np.nationalitySingular) article = aoran(headd, adjString, config)
		//if(np.religionSingular) article = aoran(headd, adjString, config)
		//if(np.dayOfWeek) article = aoran(headd, adjString, config)
		//if(np.exampleOfSomething) article = this.aoran(np.get('headd'), adjString)

		//let base = NGenerateText(np.head)
		//if( adjString !== '') base = adjString + ' ' + base
		//if (article != '') base = article + ' ' + base

		//return base

	};
};

exports.default = DetP;
exports.DetPErrors = DetPErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvZGV0cC9EZXRQLmpzIl0sIm5hbWVzIjpbIkRldFAiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiRGV0UEVycm9ycyIsImFuYWx5c2UiLCJ1bmRlZmluZWQiLCJlIiwiTUlTU0lOR19IRUFEIiwicmV0VmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDcEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPRixJQUFQLENBQVlFLENBQXJCO0FBQ0EsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPSCxJQUFQLENBQVlJLEVBQXJCOztBQUVBO0FBQ0E7QUFDQSxLQUFHSCxLQUFILEVBQVU7QUFDVCxNQUFHLFVBQVVBLEtBQWIsRUFDQyxLQUFLSSxJQUFMLEdBQVlKLE1BQU1JLElBQWxCO0FBQ0QsTUFBRyxTQUFTSixLQUFaLEVBQ0MsS0FBS0ssR0FBTCxHQUFXTCxNQUFNSyxHQUFqQjtBQUNEO0FBQ0Q7O0FBRUROLEtBQUtPLFNBQUwsR0FBaUJDLE9BQU9DLE1BQVAsQ0FBYyxtQkFBZCxDQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMsYUFBYTtBQUNsQixpQkFBZTtBQURHLENBQW5COztBQUlBVixLQUFLTyxTQUFMLENBQWVJLE9BQWYsR0FBeUIsWUFBVzs7QUFFbkMsS0FBRyxFQUFFLFVBQVUsSUFBWixDQUFILEVBQ0MsT0FBTyxFQUFDVCxHQUFFVSxTQUFILEVBQWNDLEdBQUUsQ0FBQ0gsV0FBV0ksWUFBWixDQUFoQixFQUFQOztBQUVELEtBQUlDLGVBQUo7O0FBRUEsS0FBSSxTQUFTLElBQWIsRUFDQ0EsU0FBUyxLQUFLVCxHQUFMLENBQVNLLE9BQVQsR0FBbUJULENBQW5CLEdBQXVCLEdBQXZCLEdBQTZCLEtBQUtHLElBQUwsQ0FBVU0sT0FBVixHQUFvQlQsQ0FBMUQsQ0FERCxLQUdDYSxTQUFTLEtBQUtWLElBQUwsQ0FBVU0sT0FBVixHQUFvQlQsQ0FBN0I7O0FBRUQsUUFBTyxFQUFDQSxHQUFFYSxNQUFILEVBQVdGLEdBQUU7O0FBRXBCO0FBQ0E7QUFDQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztBQUdBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBdkNPLEVBQVA7QUF5Q0EsQ0FyREQ7O2tCQXVEZWIsSTtRQUNQVSxVLEdBQUFBLFUiLCJmaWxlIjoiRGV0UC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQT1MgICAgICAgICAgZnJvbSAnLi4vUE9TJ1xuaW1wb3J0IERlZmluaXRlbmVzcyBmcm9tICcuLi9EZWZpbml0ZW5lc3MnXG5pbXBvcnQgU2NoZW1hICAgICAgIGZyb20gJy4uL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gRGV0UChwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuRGV0UC50XG5cdHRoaXMudiA9IFNjaGVtYS5EZXRQLmN2XG5cblx0Ly8gMzI2LiBoYXMgYSBoZWFkIGFuZCBvcHRpb25hbGx5IG9uZSBvciBtb3JlIGRlcGVuZGVudHNcblx0Ly8gMzMwLiB0aGUgZGV0ZXJtaW5hdGl2ZSBjYW4gYmUgYSBEZXQsIGEgRGV0UCwgb3IgYSBnZW5hdGl2ZSBEZXRQLlxuXHRpZihwcm9wcykge1xuXHRcdGlmKCdoZWFkJyBpbiBwcm9wcylcblx0XHRcdHRoaXMuaGVhZCA9IHByb3BzLmhlYWRcblx0XHRpZignZGV0JyBpbiBwcm9wcylcblx0XHRcdHRoaXMuZGV0ID0gcHJvcHMuZGV0XG5cdH1cbn1cblxuRGV0UC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG5ldyBQT1MoKSlcblxuLy8gMzI2LiBDYW4gYmUgYSBjb21wbGVtZW50IGluIGEgY2xhdXNlLCBha2Egc3ViamVjdCwgYW4gb2JqZWN0LCBvciBhIHByZWRpY2F0aXZlIGNvbXBsZW1lbnQuXG4vLyAzMjcuIE90aGVyIGZ1bmN0aW9uczogY29tcGxlbWVudCBpbiBQUCwgc3ViamVjdC1kZXRlcm1pbmVyIGluIERldFAsIGFkanVuY3QgaW4gY2xhdXNlLCBtb2RpZmllciBpbiBBZGpQLCBtb2RpZmllciBpbiBBZHZQLCBtb2RpZmllciBpbiBQUCwgbW9kaWZpZXIgaW4gRGV0UCwgc3VwcGxlbWVudCwgdm9jYXRpdmVcbi8vIDMyNy4gZHVtbXkgY2F0ZWdvcnkgJ3RoZXJlJ1xuLy8gMzI4LiBiYXJlIHJvbGU6IGllLiAncHJlc2lkZW50J1xuLy8gMzI5LiBwcmUtaGVhZCBhbmQgcG9zdC1oZWFkIGRlcGVuZGVudHMuXG5jb25zdCBEZXRQRXJyb3JzID0ge1xuXHQnTUlTU0lOR19IRUFEJzonVGhpcyBkZXRlcm1pbmF0aXZlIHBocmFzZSBtdXN0IGhhdmUgYSBoZWFkLidcbn1cblxuRGV0UC5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2hlYWQnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W0RldFBFcnJvcnMuTUlTU0lOR19IRUFEXX1cblxuXHRsZXQgcmV0VmFsXG5cblx0aWYoKCdkZXQnIGluIHRoaXMpKVxuXHRcdHJldFZhbCA9IHRoaXMuZGV0LmFuYWx5c2UoKS50ICsgJyAnICsgdGhpcy5oZWFkLmFuYWx5c2UoKS50XG5cdGVsc2Vcblx0XHRyZXRWYWwgPSB0aGlzLmhlYWQuYW5hbHlzZSgpLnRcblxuXHRyZXR1cm4ge3Q6cmV0VmFsLCBlOltdfVxuXG5cdC8vIG5vdW46IE9iamVjdCwgYWRqU3RyaW5nOiBTdHJpbmdcblx0Ly9mdW5jdGlvbiBhb3Jhbihub3VuLCBhZGpTdHJpbmcpIHtcblx0XHQvL2xldCBhcnRpY2xlID0gJ2EnXG5cblx0XHQvL2NvbnN0IGZpcnN0Q2hhciA9IChhZGpTdHJpbmcgPT09ICcnKSA/IG5vdW4uYmFzZS5jaGFyQXQoMCkgOiBhZGpTdHJpbmcuY2hhckF0KDApXG5cdFx0Ly9hcnRpY2xlID0gKCdhZWlvdUFFSU9VJy5pbmRleE9mKGZpcnN0Q2hhcikgPCAwKSA/ICdhJyA6ICdhbidcblx0XHQvL2lmIChub3VuLnNvdW5kTGlrZVlvdSkgYXJ0aWNsZSA9ICdhJ1xuXHRcdC8vaWYgKG5vdW4uc2lsZW50SCkgYXJ0aWNsZSA9ICdhbidcblx0XHQvL3JldHVybiBhcnRpY2xlXG5cdC8vfVxuXG5cblx0Ly9sZXQgYXJ0aWNsZSA9ICcnXG5cblx0Ly9sZXQgYWRqU3RyaW5nID0gbnAuYWRqZWN0aXZlcy5tYXAoIChuKSA9PiBuLmJhc2UpLmpvaW4oJyAnKVxuXG5cdC8vaWYobnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpIHtcblx0XHQvL2FydGljbGUgPSAndGhlJ1xuXHQvL30gZWxzZSBpZihucC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5QbHVyYWwpIHtcblx0XHQvL2FydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cdC8vfVxuXG5cblxuXHQvL2lmKG5wLmV4YW1wbGVPZikgICAgICAgICAgYXJ0aWNsZSA9IGFvcmFuKG5wLmhlYWQsIGFkalN0cmluZylcblxuXHQvL2lmKG5wLmZpcnN0VGltZSkgICAgICAgICAgYXJ0aWNsZSA9IGFvcmFuKG5wLmhlYWQsIGFkalN0cmluZylcblx0Ly9pZihucC5uYW1lT2ZKb2IpICAgICAgICAgIGFydGljbGUgPSB0aGlzLmFvcmFuKG5wLmdldCgnaGVhZGQnKSwgYWRqU3RyaW5nKVxuXHQvL2lmKG5wLm5hdGlvbmFsaXR5U2luZ3VsYXIpIGFydGljbGUgPSBhb3JhbihoZWFkZCwgYWRqU3RyaW5nLCBjb25maWcpXG5cdC8vaWYobnAucmVsaWdpb25TaW5ndWxhcikgYXJ0aWNsZSA9IGFvcmFuKGhlYWRkLCBhZGpTdHJpbmcsIGNvbmZpZylcblx0Ly9pZihucC5kYXlPZldlZWspIGFydGljbGUgPSBhb3JhbihoZWFkZCwgYWRqU3RyaW5nLCBjb25maWcpXG5cdC8vaWYobnAuZXhhbXBsZU9mU29tZXRoaW5nKSBhcnRpY2xlID0gdGhpcy5hb3JhbihucC5nZXQoJ2hlYWRkJyksIGFkalN0cmluZylcblxuXHQvL2xldCBiYXNlID0gTkdlbmVyYXRlVGV4dChucC5oZWFkKVxuXHQvL2lmKCBhZGpTdHJpbmcgIT09ICcnKSBiYXNlID0gYWRqU3RyaW5nICsgJyAnICsgYmFzZVxuXHQvL2lmIChhcnRpY2xlICE9ICcnKSBiYXNlID0gYXJ0aWNsZSArICcgJyArIGJhc2VcblxuXHQvL3JldHVybiBiYXNlXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0UFxuZXhwb3J0IHtEZXRQRXJyb3JzfVxuIl19