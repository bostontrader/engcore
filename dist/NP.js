'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NPGenerateText = exports.NPOb = exports.NPErrors = undefined;

var _Det = require('./Det');

var _Nom = require('./Nom');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Plurality = require('../pos/Plurality');

var _Plurality2 = _interopRequireDefault(_Plurality);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NPOb(props) {

	this.t = _SchemaConstants2.default.NP.t;
	this.v = _SchemaConstants2.default.NP.cv;

	// 326. has a head and optionally one or more dependents

	this.head = props.head; // 330. the head can be a N or a Nom
	this.det = props.det; // 330. the determinative can be a Det, a DetP, or a genative NP.
	//this.definiteness = props.definiteness || Definiteness.NoneSelected
	//this.plurality = props.plurality || Plurality.NoneSelected
	//this.adjectives = props.adjectives || []
}

var Definiteness = {
	'NoneSelected': 0,
	'Definite': 100,
	'Indefinite': 200

	// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
	// 327. Other functions: complement in PP, subject-determiner in NP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in NP, supplement, vocative
	// 327. dummy category 'there'
	// 328. bare role: ie. 'president'
	// 329. pre-head and post-head dependents.
};var NPErrors = {
	'NO_HEAD': 'This NP has no head.'
};

var NPGenerateText = function NPGenerateText(np) {

	if (!np.head) return { e: NPErrors.NO_HEAD

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

	};var retVal = void 0;

	if (np.head.t === _SchemaConstants2.default.Nom.t) retVal = (0, _Nom.NomGenerateText)(np.head);else if (np.head.t === _SchemaConstants2.default.N.t)
		//retVal = NGenerateText(np.head)
		retVal = np.head.analyse().t;

	if (np.det) retVal = (0, _Det.DetGenerateText)(np.det) + ' ' + retVal;

	return retVal;
};

exports.NPErrors = NPErrors;
exports.NPOb = NPOb;
exports.NPGenerateText = NPGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9OUC5qcyJdLCJuYW1lcyI6WyJOUE9iIiwicHJvcHMiLCJ0IiwiTlAiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwiRGVmaW5pdGVuZXNzIiwiTlBFcnJvcnMiLCJOUEdlbmVyYXRlVGV4dCIsIm5wIiwiZSIsIk5PX0hFQUQiLCJyZXRWYWwiLCJOb20iLCJOIiwiYW5hbHlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjs7QUFFcEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxFQUFQLENBQVVELENBQW5CO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxFQUFQLENBQVVFLEVBQW5COztBQUVBOztBQUVBLE1BQUtDLElBQUwsR0FBWUwsTUFBTUssSUFBbEIsQ0FQb0IsQ0FPRztBQUN2QixNQUFLQyxHQUFMLEdBQVdOLE1BQU1NLEdBQWpCLENBUm9CLENBUUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUQsSUFBTUMsZUFBZTtBQUNwQixpQkFBZ0IsQ0FESTtBQUVwQixhQUFjLEdBRk07QUFHcEIsZUFBYzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVnFCLENBQXJCLENBV0EsSUFBTUMsV0FBVztBQUNoQixZQUFVO0FBRE0sQ0FBakI7O0FBSUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7O0FBRTlCLEtBQUcsQ0FBQ0EsR0FBR0wsSUFBUCxFQUNDLE9BQU8sRUFBQ00sR0FBRUgsU0FBU0k7O0FBRXBCO0FBQ0E7QUFDQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztBQUdBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBckNRLEVBQVAsQ0F1Q0QsSUFBSUMsZUFBSjs7QUFFQSxLQUFHSCxHQUFHTCxJQUFILENBQVFKLENBQVIsS0FBYywwQkFBT2EsR0FBUCxDQUFXYixDQUE1QixFQUNDWSxTQUFTLDBCQUFnQkgsR0FBR0wsSUFBbkIsQ0FBVCxDQURELEtBRUssSUFBR0ssR0FBR0wsSUFBSCxDQUFRSixDQUFSLEtBQWMsMEJBQU9jLENBQVAsQ0FBU2QsQ0FBMUI7QUFDSjtBQUNBWSxXQUFTSCxHQUFHTCxJQUFILENBQVFXLE9BQVIsR0FBa0JmLENBQTNCOztBQUVELEtBQUdTLEdBQUdKLEdBQU4sRUFDQ08sU0FBUywwQkFBZ0JILEdBQUdKLEdBQW5CLElBQTBCLEdBQTFCLEdBQWdDTyxNQUF6Qzs7QUFFRCxRQUFPQSxNQUFQO0FBQ0EsQ0F0REQ7O1FBd0RRTCxRLEdBQUFBLFE7UUFDQVQsSSxHQUFBQSxJO1FBQ0FVLGMsR0FBQUEsYyIsImZpbGUiOiJOUC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGV0R2VuZXJhdGVUZXh0fSBmcm9tICcuL0RldCdcbmltcG9ydCB7RGV0T2J9ICAgICAgICAgICBmcm9tICcuL0RldCdcbmltcG9ydCB7Tm9tR2VuZXJhdGVUZXh0fSBmcm9tICcuL05vbSdcbmltcG9ydCB7Tm9tT2J9ICAgICAgICAgICBmcm9tICcuL05vbSdcbmltcG9ydCBTY2hlbWEgICAgICAgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCBQbHVyYWxpdHkgICAgICAgICBmcm9tICcuLi9wb3MvUGx1cmFsaXR5J1xuXG5mdW5jdGlvbiBOUE9iKHByb3BzKSB7XG5cblx0dGhpcy50ID0gU2NoZW1hLk5QLnRcblx0dGhpcy52ID0gU2NoZW1hLk5QLmN2XG5cblx0Ly8gMzI2LiBoYXMgYSBoZWFkIGFuZCBvcHRpb25hbGx5IG9uZSBvciBtb3JlIGRlcGVuZGVudHNcblxuXHR0aGlzLmhlYWQgPSBwcm9wcy5oZWFkIC8vIDMzMC4gdGhlIGhlYWQgY2FuIGJlIGEgTiBvciBhIE5vbVxuXHR0aGlzLmRldCA9IHByb3BzLmRldCAgIC8vIDMzMC4gdGhlIGRldGVybWluYXRpdmUgY2FuIGJlIGEgRGV0LCBhIERldFAsIG9yIGEgZ2VuYXRpdmUgTlAuXG5cdC8vdGhpcy5kZWZpbml0ZW5lc3MgPSBwcm9wcy5kZWZpbml0ZW5lc3MgfHwgRGVmaW5pdGVuZXNzLk5vbmVTZWxlY3RlZFxuXHQvL3RoaXMucGx1cmFsaXR5ID0gcHJvcHMucGx1cmFsaXR5IHx8IFBsdXJhbGl0eS5Ob25lU2VsZWN0ZWRcblx0Ly90aGlzLmFkamVjdGl2ZXMgPSBwcm9wcy5hZGplY3RpdmVzIHx8IFtdXG59XG5cbmNvbnN0IERlZmluaXRlbmVzcyA9IHtcblx0J05vbmVTZWxlY3RlZCc6IDAsXG5cdCdEZWZpbml0ZSc6ICAgMTAwLFxuXHQnSW5kZWZpbml0ZSc6IDIwMCxcbn1cblxuLy8gMzI2LiBDYW4gYmUgYSBjb21wbGVtZW50IGluIGEgY2xhdXNlLCBha2Egc3ViamVjdCwgYW4gb2JqZWN0LCBvciBhIHByZWRpY2F0aXZlIGNvbXBsZW1lbnQuXG4vLyAzMjcuIE90aGVyIGZ1bmN0aW9uczogY29tcGxlbWVudCBpbiBQUCwgc3ViamVjdC1kZXRlcm1pbmVyIGluIE5QLCBhZGp1bmN0IGluIGNsYXVzZSwgbW9kaWZpZXIgaW4gQWRqUCwgbW9kaWZpZXIgaW4gQWR2UCwgbW9kaWZpZXIgaW4gUFAsIG1vZGlmaWVyIGluIE5QLCBzdXBwbGVtZW50LCB2b2NhdGl2ZVxuLy8gMzI3LiBkdW1teSBjYXRlZ29yeSAndGhlcmUnXG4vLyAzMjguIGJhcmUgcm9sZTogaWUuICdwcmVzaWRlbnQnXG4vLyAzMjkuIHByZS1oZWFkIGFuZCBwb3N0LWhlYWQgZGVwZW5kZW50cy5cbmNvbnN0IE5QRXJyb3JzID0ge1xuXHQnTk9fSEVBRCc6J1RoaXMgTlAgaGFzIG5vIGhlYWQuJ1xufVxuXG5jb25zdCBOUEdlbmVyYXRlVGV4dCA9IChucCkgPT4ge1xuXG5cdGlmKCFucC5oZWFkKVxuXHRcdHJldHVybiB7ZTpOUEVycm9ycy5OT19IRUFEfVxuXG5cdC8vIG5vdW46IE9iamVjdCwgYWRqU3RyaW5nOiBTdHJpbmdcblx0Ly9mdW5jdGlvbiBhb3Jhbihub3VuLCBhZGpTdHJpbmcpIHtcblx0XHQvL2xldCBhcnRpY2xlID0gJ2EnXG5cblx0XHQvL2NvbnN0IGZpcnN0Q2hhciA9IChhZGpTdHJpbmcgPT09ICcnKSA/IG5vdW4uYmFzZS5jaGFyQXQoMCkgOiBhZGpTdHJpbmcuY2hhckF0KDApXG5cdFx0Ly9hcnRpY2xlID0gKCdhZWlvdUFFSU9VJy5pbmRleE9mKGZpcnN0Q2hhcikgPCAwKSA/ICdhJyA6ICdhbidcblx0XHQvL2lmIChub3VuLnNvdW5kTGlrZVlvdSkgYXJ0aWNsZSA9ICdhJ1xuXHRcdC8vaWYgKG5vdW4uc2lsZW50SCkgYXJ0aWNsZSA9ICdhbidcblx0XHQvL3JldHVybiBhcnRpY2xlXG5cdC8vfVxuXG5cblx0Ly9sZXQgYXJ0aWNsZSA9ICcnXG5cblx0Ly9sZXQgYWRqU3RyaW5nID0gbnAuYWRqZWN0aXZlcy5tYXAoIChuKSA9PiBuLmJhc2UpLmpvaW4oJyAnKVxuXG5cdC8vaWYobnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpIHtcblx0XHQvL2FydGljbGUgPSAndGhlJ1xuXHQvL30gZWxzZSBpZihucC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5QbHVyYWwpIHtcblx0XHQvL2FydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cdC8vfVxuXG5cblxuXHQvL2lmKG5wLmV4YW1wbGVPZikgICAgICAgICAgYXJ0aWNsZSA9IGFvcmFuKG5wLmhlYWQsIGFkalN0cmluZylcblxuXHQvL2lmKG5wLmZpcnN0VGltZSkgICAgICAgICAgYXJ0aWNsZSA9IGFvcmFuKG5wLmhlYWQsIGFkalN0cmluZylcblx0Ly9pZihucC5uYW1lT2ZKb2IpICAgICAgICAgIGFydGljbGUgPSB0aGlzLmFvcmFuKG5wLmdldCgnaGVhZGQnKSwgYWRqU3RyaW5nKVxuXHQvL2lmKG5wLm5hdGlvbmFsaXR5U2luZ3VsYXIpIGFydGljbGUgPSBhb3JhbihoZWFkZCwgYWRqU3RyaW5nLCBjb25maWcpXG5cdC8vaWYobnAucmVsaWdpb25TaW5ndWxhcikgYXJ0aWNsZSA9IGFvcmFuKGhlYWRkLCBhZGpTdHJpbmcsIGNvbmZpZylcblx0Ly9pZihucC5kYXlPZldlZWspIGFydGljbGUgPSBhb3JhbihoZWFkZCwgYWRqU3RyaW5nLCBjb25maWcpXG5cdC8vaWYobnAuZXhhbXBsZU9mU29tZXRoaW5nKSBhcnRpY2xlID0gdGhpcy5hb3JhbihucC5nZXQoJ2hlYWRkJyksIGFkalN0cmluZylcblxuXHQvL2xldCBiYXNlID0gTkdlbmVyYXRlVGV4dChucC5oZWFkKVxuXHQvL2lmKCBhZGpTdHJpbmcgIT09ICcnKSBiYXNlID0gYWRqU3RyaW5nICsgJyAnICsgYmFzZVxuXHQvL2lmIChhcnRpY2xlICE9ICcnKSBiYXNlID0gYXJ0aWNsZSArICcgJyArIGJhc2VcblxuXHRsZXQgcmV0VmFsXG5cblx0aWYobnAuaGVhZC50ID09PSBTY2hlbWEuTm9tLnQpXG5cdFx0cmV0VmFsID0gTm9tR2VuZXJhdGVUZXh0KG5wLmhlYWQpXG5cdGVsc2UgaWYobnAuaGVhZC50ID09PSBTY2hlbWEuTi50KVxuXHRcdC8vcmV0VmFsID0gTkdlbmVyYXRlVGV4dChucC5oZWFkKVxuXHRcdHJldFZhbCA9IG5wLmhlYWQuYW5hbHlzZSgpLnRcblxuXHRpZihucC5kZXQpXG5cdFx0cmV0VmFsID0gRGV0R2VuZXJhdGVUZXh0KG5wLmRldCkgKyAnICcgKyByZXRWYWxcblxuXHRyZXR1cm4gcmV0VmFsXG59XG5cbmV4cG9ydCB7TlBFcnJvcnN9XG5leHBvcnQge05QT2J9XG5leHBvcnQge05QR2VuZXJhdGVUZXh0fVxuIl19