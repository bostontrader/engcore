'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DetPGenerateText = exports.DetPOb = exports.DetPErrors = undefined;

var _SchemaConstants = require('./pos/SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DetPOb(props) {

	this.t = _SchemaConstants2.default.DetP.t;
	this.v = _SchemaConstants2.default.DetP.cv;

	// 326. has a head and optionally one or more dependents
	// 330. the determinative can be a Det, a DetP, or a genative DetP.
	this.head = props.head;
	this.det = props.det;
}

var Definiteness = {
	'NoneSelected': 0,
	'Definite': 100,
	'Indefinite': 200

	// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
	// 327. Other functions: complement in PP, subject-determiner in DetP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in DetP, supplement, vocative
	// 327. dummy category 'there'
	// 328. bare role: ie. 'president'
	// 329. pre-head and post-head dependents.
};var DetPErrors = {
	'NO_NOUN': 'This DetP has no head.'
};

var DetPGenerateText = function DetPGenerateText(np) {

	if (!np.head) return { e: DetPErrors.NO_NOUN

		// noun: Object, adjString: String
	};function aoran(noun, adjString) {
		var article = 'a';

		var firstChar = adjString === '' ? noun.base.charAt(0) : adjString.charAt(0);
		article = 'aeiouAEIOU'.indexOf(firstChar) < 0 ? 'a' : 'an';
		if (noun.soundLikeYou) article = 'a';
		if (noun.silentH) article = 'an';
		return article;
	}

	var article = '';

	var adjString = np.adjectives.map(function (n) {
		return n.base;
	}).join(' ');

	if (np.plurality === Plurality.Singular) {
		article = 'the';
	} else if (np.plurality === Plurality.Plural) {
		article = aoran(np.head, adjString);
	}

	//if(np.exampleOf)          article = aoran(np.head, adjString)

	//if(np.firstTime)          article = aoran(np.head, adjString)
	//if(np.nameOfJob)          article = this.aoran(np.get('headd'), adjString)
	//if(np.nationalitySingular) article = aoran(headd, adjString, config)
	//if(np.religionSingular) article = aoran(headd, adjString, config)
	//if(np.dayOfWeek) article = aoran(headd, adjString, config)
	//if(np.exampleOfSomething) article = this.aoran(np.get('headd'), adjString)

	var base = NGenerateText(np.head);
	if (adjString !== '') base = adjString + ' ' + base;
	if (article != '') base = article + ' ' + base;

	return base;
};

exports.DetPErrors = DetPErrors;
exports.DetPOb = DetPOb;
exports.DetPGenerateText = DetPGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EZXRQLmpzIl0sIm5hbWVzIjpbIkRldFBPYiIsInByb3BzIiwidCIsIkRldFAiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwiRGVmaW5pdGVuZXNzIiwiRGV0UEVycm9ycyIsIkRldFBHZW5lcmF0ZVRleHQiLCJucCIsImUiLCJOT19OT1VOIiwiYW9yYW4iLCJub3VuIiwiYWRqU3RyaW5nIiwiYXJ0aWNsZSIsImZpcnN0Q2hhciIsImJhc2UiLCJjaGFyQXQiLCJpbmRleE9mIiwic291bmRMaWtlWW91Iiwic2lsZW50SCIsImFkamVjdGl2ZXMiLCJtYXAiLCJuIiwiam9pbiIsInBsdXJhbGl0eSIsIlBsdXJhbGl0eSIsIlNpbmd1bGFyIiwiUGx1cmFsIiwiTkdlbmVyYXRlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1Qjs7QUFFdEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxJQUFQLENBQVlELENBQXJCO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxJQUFQLENBQVlFLEVBQXJCOztBQUVBO0FBQ0E7QUFDQSxNQUFLQyxJQUFMLEdBQVlMLE1BQU1LLElBQWxCO0FBQ0EsTUFBS0MsR0FBTCxHQUFXTixNQUFNTSxHQUFqQjtBQUNBOztBQUVELElBQU1DLGVBQWU7QUFDcEIsaUJBQWdCLENBREk7QUFFcEIsYUFBYyxHQUZNO0FBR3BCLGVBQWM7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZxQixDQUFyQixDQVdBLElBQU1DLGFBQWE7QUFDbEIsWUFBVTtBQURRLENBQW5COztBQUlBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBUTs7QUFFaEMsS0FBRyxDQUFDQSxHQUFHTCxJQUFQLEVBQ0MsT0FBTyxFQUFDTSxHQUFFSCxXQUFXSTs7QUFFdEI7QUFGUSxFQUFQLENBR0QsU0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxTQUFyQixFQUFnQztBQUMvQixNQUFJQyxVQUFVLEdBQWQ7O0FBRUEsTUFBTUMsWUFBYUYsY0FBYyxFQUFmLEdBQXFCRCxLQUFLSSxJQUFMLENBQVVDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBckIsR0FBMkNKLFVBQVVJLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBN0Q7QUFDQUgsWUFBVyxhQUFhSSxPQUFiLENBQXFCSCxTQUFyQixJQUFrQyxDQUFuQyxHQUF3QyxHQUF4QyxHQUE4QyxJQUF4RDtBQUNBLE1BQUlILEtBQUtPLFlBQVQsRUFBdUJMLFVBQVUsR0FBVjtBQUN2QixNQUFJRixLQUFLUSxPQUFULEVBQWtCTixVQUFVLElBQVY7QUFDbEIsU0FBT0EsT0FBUDtBQUNBOztBQUdELEtBQUlBLFVBQVUsRUFBZDs7QUFFQSxLQUFJRCxZQUFZTCxHQUFHYSxVQUFILENBQWNDLEdBQWQsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLEVBQUVQLElBQVQ7QUFBQSxFQUFuQixFQUFrQ1EsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBaEI7O0FBRUEsS0FBR2hCLEdBQUdpQixTQUFILEtBQWlCQyxVQUFVQyxRQUE5QixFQUF3QztBQUN2Q2IsWUFBVSxLQUFWO0FBQ0EsRUFGRCxNQUVPLElBQUdOLEdBQUdpQixTQUFILEtBQWlCQyxVQUFVRSxNQUE5QixFQUFzQztBQUM1Q2QsWUFBVUgsTUFBTUgsR0FBR0wsSUFBVCxFQUFlVSxTQUFmLENBQVY7QUFDQTs7QUFJRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSUcsT0FBT2EsY0FBY3JCLEdBQUdMLElBQWpCLENBQVg7QUFDQSxLQUFJVSxjQUFjLEVBQWxCLEVBQXNCRyxPQUFPSCxZQUFZLEdBQVosR0FBa0JHLElBQXpCO0FBQ3RCLEtBQUlGLFdBQVcsRUFBZixFQUFtQkUsT0FBT0YsVUFBVSxHQUFWLEdBQWdCRSxJQUF2Qjs7QUFFbkIsUUFBT0EsSUFBUDtBQUVBLENBNUNEOztRQThDUVYsVSxHQUFBQSxVO1FBQ0FULE0sR0FBQUEsTTtRQUNBVSxnQixHQUFBQSxnQiIsImZpbGUiOiJEZXRQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYSAgICAgICAgICBmcm9tICcuL3Bvcy9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIERldFBPYihwcm9wcykge1xuXG5cdHRoaXMudCA9IFNjaGVtYS5EZXRQLnRcblx0dGhpcy52ID0gU2NoZW1hLkRldFAuY3ZcblxuXHQvLyAzMjYuIGhhcyBhIGhlYWQgYW5kIG9wdGlvbmFsbHkgb25lIG9yIG1vcmUgZGVwZW5kZW50c1xuXHQvLyAzMzAuIHRoZSBkZXRlcm1pbmF0aXZlIGNhbiBiZSBhIERldCwgYSBEZXRQLCBvciBhIGdlbmF0aXZlIERldFAuXG5cdHRoaXMuaGVhZCA9IHByb3BzLmhlYWRcblx0dGhpcy5kZXQgPSBwcm9wcy5kZXRcbn1cblxuY29uc3QgRGVmaW5pdGVuZXNzID0ge1xuXHQnTm9uZVNlbGVjdGVkJzogMCxcblx0J0RlZmluaXRlJzogICAxMDAsXG5cdCdJbmRlZmluaXRlJzogMjAwLFxufVxuXG4vLyAzMjYuIENhbiBiZSBhIGNvbXBsZW1lbnQgaW4gYSBjbGF1c2UsIGFrYSBzdWJqZWN0LCBhbiBvYmplY3QsIG9yIGEgcHJlZGljYXRpdmUgY29tcGxlbWVudC5cbi8vIDMyNy4gT3RoZXIgZnVuY3Rpb25zOiBjb21wbGVtZW50IGluIFBQLCBzdWJqZWN0LWRldGVybWluZXIgaW4gRGV0UCwgYWRqdW5jdCBpbiBjbGF1c2UsIG1vZGlmaWVyIGluIEFkalAsIG1vZGlmaWVyIGluIEFkdlAsIG1vZGlmaWVyIGluIFBQLCBtb2RpZmllciBpbiBEZXRQLCBzdXBwbGVtZW50LCB2b2NhdGl2ZVxuLy8gMzI3LiBkdW1teSBjYXRlZ29yeSAndGhlcmUnXG4vLyAzMjguIGJhcmUgcm9sZTogaWUuICdwcmVzaWRlbnQnXG4vLyAzMjkuIHByZS1oZWFkIGFuZCBwb3N0LWhlYWQgZGVwZW5kZW50cy5cbmNvbnN0IERldFBFcnJvcnMgPSB7XG5cdCdOT19OT1VOJzonVGhpcyBEZXRQIGhhcyBubyBoZWFkLidcbn1cblxuY29uc3QgRGV0UEdlbmVyYXRlVGV4dCA9IChucCkgPT4ge1xuXG5cdGlmKCFucC5oZWFkKVxuXHRcdHJldHVybiB7ZTpEZXRQRXJyb3JzLk5PX05PVU59XG5cblx0Ly8gbm91bjogT2JqZWN0LCBhZGpTdHJpbmc6IFN0cmluZ1xuXHRmdW5jdGlvbiBhb3Jhbihub3VuLCBhZGpTdHJpbmcpIHtcblx0XHRsZXQgYXJ0aWNsZSA9ICdhJ1xuXG5cdFx0Y29uc3QgZmlyc3RDaGFyID0gKGFkalN0cmluZyA9PT0gJycpID8gbm91bi5iYXNlLmNoYXJBdCgwKSA6IGFkalN0cmluZy5jaGFyQXQoMClcblx0XHRhcnRpY2xlID0gKCdhZWlvdUFFSU9VJy5pbmRleE9mKGZpcnN0Q2hhcikgPCAwKSA/ICdhJyA6ICdhbidcblx0XHRpZiAobm91bi5zb3VuZExpa2VZb3UpIGFydGljbGUgPSAnYSdcblx0XHRpZiAobm91bi5zaWxlbnRIKSBhcnRpY2xlID0gJ2FuJ1xuXHRcdHJldHVybiBhcnRpY2xlXG5cdH1cblxuXG5cdGxldCBhcnRpY2xlID0gJydcblxuXHRsZXQgYWRqU3RyaW5nID0gbnAuYWRqZWN0aXZlcy5tYXAoIChuKSA9PiBuLmJhc2UpLmpvaW4oJyAnKVxuXG5cdGlmKG5wLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKSB7XG5cdFx0YXJ0aWNsZSA9ICd0aGUnXG5cdH0gZWxzZSBpZihucC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5QbHVyYWwpIHtcblx0XHRhcnRpY2xlID0gYW9yYW4obnAuaGVhZCwgYWRqU3RyaW5nKVxuXHR9XG5cblxuXG5cdC8vaWYobnAuZXhhbXBsZU9mKSAgICAgICAgICBhcnRpY2xlID0gYW9yYW4obnAuaGVhZCwgYWRqU3RyaW5nKVxuXG5cdC8vaWYobnAuZmlyc3RUaW1lKSAgICAgICAgICBhcnRpY2xlID0gYW9yYW4obnAuaGVhZCwgYWRqU3RyaW5nKVxuXHQvL2lmKG5wLm5hbWVPZkpvYikgICAgICAgICAgYXJ0aWNsZSA9IHRoaXMuYW9yYW4obnAuZ2V0KCdoZWFkZCcpLCBhZGpTdHJpbmcpXG5cdC8vaWYobnAubmF0aW9uYWxpdHlTaW5ndWxhcikgYXJ0aWNsZSA9IGFvcmFuKGhlYWRkLCBhZGpTdHJpbmcsIGNvbmZpZylcblx0Ly9pZihucC5yZWxpZ2lvblNpbmd1bGFyKSBhcnRpY2xlID0gYW9yYW4oaGVhZGQsIGFkalN0cmluZywgY29uZmlnKVxuXHQvL2lmKG5wLmRheU9mV2VlaykgYXJ0aWNsZSA9IGFvcmFuKGhlYWRkLCBhZGpTdHJpbmcsIGNvbmZpZylcblx0Ly9pZihucC5leGFtcGxlT2ZTb21ldGhpbmcpIGFydGljbGUgPSB0aGlzLmFvcmFuKG5wLmdldCgnaGVhZGQnKSwgYWRqU3RyaW5nKVxuXG5cdGxldCBiYXNlID0gTkdlbmVyYXRlVGV4dChucC5oZWFkKVxuXHRpZiggYWRqU3RyaW5nICE9PSAnJykgYmFzZSA9IGFkalN0cmluZyArICcgJyArIGJhc2Vcblx0aWYgKGFydGljbGUgIT0gJycpIGJhc2UgPSBhcnRpY2xlICsgJyAnICsgYmFzZVxuXG5cdHJldHVybiBiYXNlXG5cbn1cblxuZXhwb3J0IHtEZXRQRXJyb3JzfVxuZXhwb3J0IHtEZXRQT2J9XG5leHBvcnQge0RldFBHZW5lcmF0ZVRleHR9XG4iXX0=