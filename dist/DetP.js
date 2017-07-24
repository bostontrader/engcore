'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DetPGenerateText = exports.DetPOb = exports.DetPErrors = undefined;

var _SchemaConstants = require('./SchemaConstants');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EZXRQLmpzIl0sIm5hbWVzIjpbIkRldFBPYiIsInByb3BzIiwidCIsIkRldFAiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwiRGVmaW5pdGVuZXNzIiwiRGV0UEVycm9ycyIsIkRldFBHZW5lcmF0ZVRleHQiLCJucCIsImUiLCJOT19OT1VOIiwiYW9yYW4iLCJub3VuIiwiYWRqU3RyaW5nIiwiYXJ0aWNsZSIsImZpcnN0Q2hhciIsImJhc2UiLCJjaGFyQXQiLCJpbmRleE9mIiwic291bmRMaWtlWW91Iiwic2lsZW50SCIsImFkamVjdGl2ZXMiLCJtYXAiLCJuIiwiam9pbiIsInBsdXJhbGl0eSIsIlBsdXJhbGl0eSIsIlNpbmd1bGFyIiwiUGx1cmFsIiwiTkdlbmVyYXRlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1Qjs7QUFFdEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxJQUFQLENBQVlELENBQXJCO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxJQUFQLENBQVlFLEVBQXJCOztBQUVBO0FBQ0E7QUFDQSxNQUFLQyxJQUFMLEdBQVlMLE1BQU1LLElBQWxCO0FBQ0EsTUFBS0MsR0FBTCxHQUFXTixNQUFNTSxHQUFqQjtBQUNBOztBQUVELElBQU1DLGVBQWU7QUFDcEIsaUJBQWdCLENBREk7QUFFcEIsYUFBYyxHQUZNO0FBR3BCLGVBQWM7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZxQixDQUFyQixDQVdBLElBQU1DLGFBQWE7QUFDbEIsWUFBVTtBQURRLENBQW5COztBQUlBLElBQU1DLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBUTs7QUFFaEMsS0FBRyxDQUFDQSxHQUFHTCxJQUFQLEVBQ0MsT0FBTyxFQUFDTSxHQUFFSCxXQUFXSTs7QUFFdEI7QUFGUSxFQUFQLENBR0QsU0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxTQUFyQixFQUFnQztBQUMvQixNQUFJQyxVQUFVLEdBQWQ7O0FBRUEsTUFBTUMsWUFBYUYsY0FBYyxFQUFmLEdBQXFCRCxLQUFLSSxJQUFMLENBQVVDLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBckIsR0FBMkNKLFVBQVVJLE1BQVYsQ0FBaUIsQ0FBakIsQ0FBN0Q7QUFDQUgsWUFBVyxhQUFhSSxPQUFiLENBQXFCSCxTQUFyQixJQUFrQyxDQUFuQyxHQUF3QyxHQUF4QyxHQUE4QyxJQUF4RDtBQUNBLE1BQUlILEtBQUtPLFlBQVQsRUFBdUJMLFVBQVUsR0FBVjtBQUN2QixNQUFJRixLQUFLUSxPQUFULEVBQWtCTixVQUFVLElBQVY7QUFDbEIsU0FBT0EsT0FBUDtBQUNBOztBQUdELEtBQUlBLFVBQVUsRUFBZDs7QUFFQSxLQUFJRCxZQUFZTCxHQUFHYSxVQUFILENBQWNDLEdBQWQsQ0FBbUIsVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLEVBQUVQLElBQVQ7QUFBQSxFQUFuQixFQUFrQ1EsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBaEI7O0FBRUEsS0FBR2hCLEdBQUdpQixTQUFILEtBQWlCQyxVQUFVQyxRQUE5QixFQUF3QztBQUN2Q2IsWUFBVSxLQUFWO0FBQ0EsRUFGRCxNQUVPLElBQUdOLEdBQUdpQixTQUFILEtBQWlCQyxVQUFVRSxNQUE5QixFQUFzQztBQUM1Q2QsWUFBVUgsTUFBTUgsR0FBR0wsSUFBVCxFQUFlVSxTQUFmLENBQVY7QUFDQTs7QUFJRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSUcsT0FBT2EsY0FBY3JCLEdBQUdMLElBQWpCLENBQVg7QUFDQSxLQUFJVSxjQUFjLEVBQWxCLEVBQXNCRyxPQUFPSCxZQUFZLEdBQVosR0FBa0JHLElBQXpCO0FBQ3RCLEtBQUlGLFdBQVcsRUFBZixFQUFtQkUsT0FBT0YsVUFBVSxHQUFWLEdBQWdCRSxJQUF2Qjs7QUFFbkIsUUFBT0EsSUFBUDtBQUVBLENBNUNEOztRQThDUVYsVSxHQUFBQSxVO1FBQ0FULE0sR0FBQUEsTTtRQUNBVSxnQixHQUFBQSxnQiIsImZpbGUiOiJEZXRQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYSAgICAgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gRGV0UE9iKHByb3BzKSB7XG5cblx0dGhpcy50ID0gU2NoZW1hLkRldFAudFxuXHR0aGlzLnYgPSBTY2hlbWEuRGV0UC5jdlxuXG5cdC8vIDMyNi4gaGFzIGEgaGVhZCBhbmQgb3B0aW9uYWxseSBvbmUgb3IgbW9yZSBkZXBlbmRlbnRzXG5cdC8vIDMzMC4gdGhlIGRldGVybWluYXRpdmUgY2FuIGJlIGEgRGV0LCBhIERldFAsIG9yIGEgZ2VuYXRpdmUgRGV0UC5cblx0dGhpcy5oZWFkID0gcHJvcHMuaGVhZFxuXHR0aGlzLmRldCA9IHByb3BzLmRldFxufVxuXG5jb25zdCBEZWZpbml0ZW5lc3MgPSB7XG5cdCdOb25lU2VsZWN0ZWQnOiAwLFxuXHQnRGVmaW5pdGUnOiAgIDEwMCxcblx0J0luZGVmaW5pdGUnOiAyMDAsXG59XG5cbi8vIDMyNi4gQ2FuIGJlIGEgY29tcGxlbWVudCBpbiBhIGNsYXVzZSwgYWthIHN1YmplY3QsIGFuIG9iamVjdCwgb3IgYSBwcmVkaWNhdGl2ZSBjb21wbGVtZW50LlxuLy8gMzI3LiBPdGhlciBmdW5jdGlvbnM6IGNvbXBsZW1lbnQgaW4gUFAsIHN1YmplY3QtZGV0ZXJtaW5lciBpbiBEZXRQLCBhZGp1bmN0IGluIGNsYXVzZSwgbW9kaWZpZXIgaW4gQWRqUCwgbW9kaWZpZXIgaW4gQWR2UCwgbW9kaWZpZXIgaW4gUFAsIG1vZGlmaWVyIGluIERldFAsIHN1cHBsZW1lbnQsIHZvY2F0aXZlXG4vLyAzMjcuIGR1bW15IGNhdGVnb3J5ICd0aGVyZSdcbi8vIDMyOC4gYmFyZSByb2xlOiBpZS4gJ3ByZXNpZGVudCdcbi8vIDMyOS4gcHJlLWhlYWQgYW5kIHBvc3QtaGVhZCBkZXBlbmRlbnRzLlxuY29uc3QgRGV0UEVycm9ycyA9IHtcblx0J05PX05PVU4nOidUaGlzIERldFAgaGFzIG5vIGhlYWQuJ1xufVxuXG5jb25zdCBEZXRQR2VuZXJhdGVUZXh0ID0gKG5wKSA9PiB7XG5cblx0aWYoIW5wLmhlYWQpXG5cdFx0cmV0dXJuIHtlOkRldFBFcnJvcnMuTk9fTk9VTn1cblxuXHQvLyBub3VuOiBPYmplY3QsIGFkalN0cmluZzogU3RyaW5nXG5cdGZ1bmN0aW9uIGFvcmFuKG5vdW4sIGFkalN0cmluZykge1xuXHRcdGxldCBhcnRpY2xlID0gJ2EnXG5cblx0XHRjb25zdCBmaXJzdENoYXIgPSAoYWRqU3RyaW5nID09PSAnJykgPyBub3VuLmJhc2UuY2hhckF0KDApIDogYWRqU3RyaW5nLmNoYXJBdCgwKVxuXHRcdGFydGljbGUgPSAoJ2FlaW91QUVJT1UnLmluZGV4T2YoZmlyc3RDaGFyKSA8IDApID8gJ2EnIDogJ2FuJ1xuXHRcdGlmIChub3VuLnNvdW5kTGlrZVlvdSkgYXJ0aWNsZSA9ICdhJ1xuXHRcdGlmIChub3VuLnNpbGVudEgpIGFydGljbGUgPSAnYW4nXG5cdFx0cmV0dXJuIGFydGljbGVcblx0fVxuXG5cblx0bGV0IGFydGljbGUgPSAnJ1xuXG5cdGxldCBhZGpTdHJpbmcgPSBucC5hZGplY3RpdmVzLm1hcCggKG4pID0+IG4uYmFzZSkuam9pbignICcpXG5cblx0aWYobnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpIHtcblx0XHRhcnRpY2xlID0gJ3RoZSdcblx0fSBlbHNlIGlmKG5wLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlBsdXJhbCkge1xuXHRcdGFydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cdH1cblxuXG5cblx0Ly9pZihucC5leGFtcGxlT2YpICAgICAgICAgIGFydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cblx0Ly9pZihucC5maXJzdFRpbWUpICAgICAgICAgIGFydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cdC8vaWYobnAubmFtZU9mSm9iKSAgICAgICAgICBhcnRpY2xlID0gdGhpcy5hb3JhbihucC5nZXQoJ2hlYWRkJyksIGFkalN0cmluZylcblx0Ly9pZihucC5uYXRpb25hbGl0eVNpbmd1bGFyKSBhcnRpY2xlID0gYW9yYW4oaGVhZGQsIGFkalN0cmluZywgY29uZmlnKVxuXHQvL2lmKG5wLnJlbGlnaW9uU2luZ3VsYXIpIGFydGljbGUgPSBhb3JhbihoZWFkZCwgYWRqU3RyaW5nLCBjb25maWcpXG5cdC8vaWYobnAuZGF5T2ZXZWVrKSBhcnRpY2xlID0gYW9yYW4oaGVhZGQsIGFkalN0cmluZywgY29uZmlnKVxuXHQvL2lmKG5wLmV4YW1wbGVPZlNvbWV0aGluZykgYXJ0aWNsZSA9IHRoaXMuYW9yYW4obnAuZ2V0KCdoZWFkZCcpLCBhZGpTdHJpbmcpXG5cblx0bGV0IGJhc2UgPSBOR2VuZXJhdGVUZXh0KG5wLmhlYWQpXG5cdGlmKCBhZGpTdHJpbmcgIT09ICcnKSBiYXNlID0gYWRqU3RyaW5nICsgJyAnICsgYmFzZVxuXHRpZiAoYXJ0aWNsZSAhPSAnJykgYmFzZSA9IGFydGljbGUgKyAnICcgKyBiYXNlXG5cblx0cmV0dXJuIGJhc2VcblxufVxuXG5leHBvcnQge0RldFBFcnJvcnN9XG5leHBvcnQge0RldFBPYn1cbmV4cG9ydCB7RGV0UEdlbmVyYXRlVGV4dH1cbiJdfQ==