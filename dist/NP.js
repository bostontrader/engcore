'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NPGenerateText = exports.NPOb = exports.NPErrors = undefined;

var _Det = require('./Det');

var _Nom = require('./Nom');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Plurality = require('./pos/Plurality');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9OUC5qcyJdLCJuYW1lcyI6WyJOUE9iIiwicHJvcHMiLCJ0IiwiTlAiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwiRGVmaW5pdGVuZXNzIiwiTlBFcnJvcnMiLCJOUEdlbmVyYXRlVGV4dCIsIm5wIiwiZSIsIk5PX0hFQUQiLCJyZXRWYWwiLCJOb20iLCJOIiwiYW5hbHlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjs7QUFFcEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxFQUFQLENBQVVELENBQW5CO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxFQUFQLENBQVVFLEVBQW5COztBQUVBOztBQUVBLE1BQUtDLElBQUwsR0FBWUwsTUFBTUssSUFBbEIsQ0FQb0IsQ0FPRztBQUN2QixNQUFLQyxHQUFMLEdBQVdOLE1BQU1NLEdBQWpCLENBUm9CLENBUUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUQsSUFBTUMsZUFBZTtBQUNwQixpQkFBZ0IsQ0FESTtBQUVwQixhQUFjLEdBRk07QUFHcEIsZUFBYzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVnFCLENBQXJCLENBV0EsSUFBTUMsV0FBVztBQUNoQixZQUFVO0FBRE0sQ0FBakI7O0FBSUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7O0FBRTlCLEtBQUcsQ0FBQ0EsR0FBR0wsSUFBUCxFQUNDLE9BQU8sRUFBQ00sR0FBRUgsU0FBU0k7O0FBRXBCO0FBQ0E7QUFDQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztBQUdBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBckNRLEVBQVAsQ0F1Q0QsSUFBSUMsZUFBSjs7QUFFQSxLQUFHSCxHQUFHTCxJQUFILENBQVFKLENBQVIsS0FBYywwQkFBT2EsR0FBUCxDQUFXYixDQUE1QixFQUNDWSxTQUFTLDBCQUFnQkgsR0FBR0wsSUFBbkIsQ0FBVCxDQURELEtBRUssSUFBR0ssR0FBR0wsSUFBSCxDQUFRSixDQUFSLEtBQWMsMEJBQU9jLENBQVAsQ0FBU2QsQ0FBMUI7QUFDSjtBQUNBWSxXQUFTSCxHQUFHTCxJQUFILENBQVFXLE9BQVIsR0FBa0JmLENBQTNCOztBQUVELEtBQUdTLEdBQUdKLEdBQU4sRUFDQ08sU0FBUywwQkFBZ0JILEdBQUdKLEdBQW5CLElBQTBCLEdBQTFCLEdBQWdDTyxNQUF6Qzs7QUFFRCxRQUFPQSxNQUFQO0FBQ0EsQ0F0REQ7O1FBd0RRTCxRLEdBQUFBLFE7UUFDQVQsSSxHQUFBQSxJO1FBQ0FVLGMsR0FBQUEsYyIsImZpbGUiOiJOUC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGV0R2VuZXJhdGVUZXh0fSBmcm9tICcuL0RldCdcbmltcG9ydCB7RGV0T2J9ICAgICAgICAgICBmcm9tICcuL0RldCdcbmltcG9ydCB7Tm9tR2VuZXJhdGVUZXh0fSBmcm9tICcuL05vbSdcbmltcG9ydCB7Tm9tT2J9ICAgICAgICAgICBmcm9tICcuL05vbSdcbmltcG9ydCBTY2hlbWEgICAgICAgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCBQbHVyYWxpdHkgICAgICAgICBmcm9tICcuL3Bvcy9QbHVyYWxpdHknXG5cbmZ1bmN0aW9uIE5QT2IocHJvcHMpIHtcblxuXHR0aGlzLnQgPSBTY2hlbWEuTlAudFxuXHR0aGlzLnYgPSBTY2hlbWEuTlAuY3ZcblxuXHQvLyAzMjYuIGhhcyBhIGhlYWQgYW5kIG9wdGlvbmFsbHkgb25lIG9yIG1vcmUgZGVwZW5kZW50c1xuXG5cdHRoaXMuaGVhZCA9IHByb3BzLmhlYWQgLy8gMzMwLiB0aGUgaGVhZCBjYW4gYmUgYSBOIG9yIGEgTm9tXG5cdHRoaXMuZGV0ID0gcHJvcHMuZGV0ICAgLy8gMzMwLiB0aGUgZGV0ZXJtaW5hdGl2ZSBjYW4gYmUgYSBEZXQsIGEgRGV0UCwgb3IgYSBnZW5hdGl2ZSBOUC5cblx0Ly90aGlzLmRlZmluaXRlbmVzcyA9IHByb3BzLmRlZmluaXRlbmVzcyB8fCBEZWZpbml0ZW5lc3MuTm9uZVNlbGVjdGVkXG5cdC8vdGhpcy5wbHVyYWxpdHkgPSBwcm9wcy5wbHVyYWxpdHkgfHwgUGx1cmFsaXR5Lk5vbmVTZWxlY3RlZFxuXHQvL3RoaXMuYWRqZWN0aXZlcyA9IHByb3BzLmFkamVjdGl2ZXMgfHwgW11cbn1cblxuY29uc3QgRGVmaW5pdGVuZXNzID0ge1xuXHQnTm9uZVNlbGVjdGVkJzogMCxcblx0J0RlZmluaXRlJzogICAxMDAsXG5cdCdJbmRlZmluaXRlJzogMjAwLFxufVxuXG4vLyAzMjYuIENhbiBiZSBhIGNvbXBsZW1lbnQgaW4gYSBjbGF1c2UsIGFrYSBzdWJqZWN0LCBhbiBvYmplY3QsIG9yIGEgcHJlZGljYXRpdmUgY29tcGxlbWVudC5cbi8vIDMyNy4gT3RoZXIgZnVuY3Rpb25zOiBjb21wbGVtZW50IGluIFBQLCBzdWJqZWN0LWRldGVybWluZXIgaW4gTlAsIGFkanVuY3QgaW4gY2xhdXNlLCBtb2RpZmllciBpbiBBZGpQLCBtb2RpZmllciBpbiBBZHZQLCBtb2RpZmllciBpbiBQUCwgbW9kaWZpZXIgaW4gTlAsIHN1cHBsZW1lbnQsIHZvY2F0aXZlXG4vLyAzMjcuIGR1bW15IGNhdGVnb3J5ICd0aGVyZSdcbi8vIDMyOC4gYmFyZSByb2xlOiBpZS4gJ3ByZXNpZGVudCdcbi8vIDMyOS4gcHJlLWhlYWQgYW5kIHBvc3QtaGVhZCBkZXBlbmRlbnRzLlxuY29uc3QgTlBFcnJvcnMgPSB7XG5cdCdOT19IRUFEJzonVGhpcyBOUCBoYXMgbm8gaGVhZC4nXG59XG5cbmNvbnN0IE5QR2VuZXJhdGVUZXh0ID0gKG5wKSA9PiB7XG5cblx0aWYoIW5wLmhlYWQpXG5cdFx0cmV0dXJuIHtlOk5QRXJyb3JzLk5PX0hFQUR9XG5cblx0Ly8gbm91bjogT2JqZWN0LCBhZGpTdHJpbmc6IFN0cmluZ1xuXHQvL2Z1bmN0aW9uIGFvcmFuKG5vdW4sIGFkalN0cmluZykge1xuXHRcdC8vbGV0IGFydGljbGUgPSAnYSdcblxuXHRcdC8vY29uc3QgZmlyc3RDaGFyID0gKGFkalN0cmluZyA9PT0gJycpID8gbm91bi5iYXNlLmNoYXJBdCgwKSA6IGFkalN0cmluZy5jaGFyQXQoMClcblx0XHQvL2FydGljbGUgPSAoJ2FlaW91QUVJT1UnLmluZGV4T2YoZmlyc3RDaGFyKSA8IDApID8gJ2EnIDogJ2FuJ1xuXHRcdC8vaWYgKG5vdW4uc291bmRMaWtlWW91KSBhcnRpY2xlID0gJ2EnXG5cdFx0Ly9pZiAobm91bi5zaWxlbnRIKSBhcnRpY2xlID0gJ2FuJ1xuXHRcdC8vcmV0dXJuIGFydGljbGVcblx0Ly99XG5cblxuXHQvL2xldCBhcnRpY2xlID0gJydcblxuXHQvL2xldCBhZGpTdHJpbmcgPSBucC5hZGplY3RpdmVzLm1hcCggKG4pID0+IG4uYmFzZSkuam9pbignICcpXG5cblx0Ly9pZihucC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcikge1xuXHRcdC8vYXJ0aWNsZSA9ICd0aGUnXG5cdC8vfSBlbHNlIGlmKG5wLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlBsdXJhbCkge1xuXHRcdC8vYXJ0aWNsZSA9IGFvcmFuKG5wLmhlYWQsIGFkalN0cmluZylcblx0Ly99XG5cblxuXG5cdC8vaWYobnAuZXhhbXBsZU9mKSAgICAgICAgICBhcnRpY2xlID0gYW9yYW4obnAuaGVhZCwgYWRqU3RyaW5nKVxuXG5cdC8vaWYobnAuZmlyc3RUaW1lKSAgICAgICAgICBhcnRpY2xlID0gYW9yYW4obnAuaGVhZCwgYWRqU3RyaW5nKVxuXHQvL2lmKG5wLm5hbWVPZkpvYikgICAgICAgICAgYXJ0aWNsZSA9IHRoaXMuYW9yYW4obnAuZ2V0KCdoZWFkZCcpLCBhZGpTdHJpbmcpXG5cdC8vaWYobnAubmF0aW9uYWxpdHlTaW5ndWxhcikgYXJ0aWNsZSA9IGFvcmFuKGhlYWRkLCBhZGpTdHJpbmcsIGNvbmZpZylcblx0Ly9pZihucC5yZWxpZ2lvblNpbmd1bGFyKSBhcnRpY2xlID0gYW9yYW4oaGVhZGQsIGFkalN0cmluZywgY29uZmlnKVxuXHQvL2lmKG5wLmRheU9mV2VlaykgYXJ0aWNsZSA9IGFvcmFuKGhlYWRkLCBhZGpTdHJpbmcsIGNvbmZpZylcblx0Ly9pZihucC5leGFtcGxlT2ZTb21ldGhpbmcpIGFydGljbGUgPSB0aGlzLmFvcmFuKG5wLmdldCgnaGVhZGQnKSwgYWRqU3RyaW5nKVxuXG5cdC8vbGV0IGJhc2UgPSBOR2VuZXJhdGVUZXh0KG5wLmhlYWQpXG5cdC8vaWYoIGFkalN0cmluZyAhPT0gJycpIGJhc2UgPSBhZGpTdHJpbmcgKyAnICcgKyBiYXNlXG5cdC8vaWYgKGFydGljbGUgIT0gJycpIGJhc2UgPSBhcnRpY2xlICsgJyAnICsgYmFzZVxuXG5cdGxldCByZXRWYWxcblxuXHRpZihucC5oZWFkLnQgPT09IFNjaGVtYS5Ob20udClcblx0XHRyZXRWYWwgPSBOb21HZW5lcmF0ZVRleHQobnAuaGVhZClcblx0ZWxzZSBpZihucC5oZWFkLnQgPT09IFNjaGVtYS5OLnQpXG5cdFx0Ly9yZXRWYWwgPSBOR2VuZXJhdGVUZXh0KG5wLmhlYWQpXG5cdFx0cmV0VmFsID0gbnAuaGVhZC5hbmFseXNlKCkudFxuXG5cdGlmKG5wLmRldClcblx0XHRyZXRWYWwgPSBEZXRHZW5lcmF0ZVRleHQobnAuZGV0KSArICcgJyArIHJldFZhbFxuXG5cdHJldHVybiByZXRWYWxcbn1cblxuZXhwb3J0IHtOUEVycm9yc31cbmV4cG9ydCB7TlBPYn1cbmV4cG9ydCB7TlBHZW5lcmF0ZVRleHR9XG4iXX0=