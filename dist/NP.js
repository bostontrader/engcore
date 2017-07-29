'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NPGenerateText = exports.NPOb = exports.NPErrors = undefined;

var _Nom = require('./Nom');

var _SchemaConstants = require('./pos/SchemaConstants');

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

	if (np.det) retVal = np.det.analyse().t + ' ' + retVal;

	return retVal;
};

exports.NPErrors = NPErrors;
exports.NPOb = NPOb;
exports.NPGenerateText = NPGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9OUC5qcyJdLCJuYW1lcyI6WyJOUE9iIiwicHJvcHMiLCJ0IiwiTlAiLCJ2IiwiY3YiLCJoZWFkIiwiZGV0IiwiRGVmaW5pdGVuZXNzIiwiTlBFcnJvcnMiLCJOUEdlbmVyYXRlVGV4dCIsIm5wIiwiZSIsIk5PX0hFQUQiLCJyZXRWYWwiLCJOb20iLCJOIiwiYW5hbHlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjs7QUFFcEIsTUFBS0MsQ0FBTCxHQUFTLDBCQUFPQyxFQUFQLENBQVVELENBQW5CO0FBQ0EsTUFBS0UsQ0FBTCxHQUFTLDBCQUFPRCxFQUFQLENBQVVFLEVBQW5COztBQUVBOztBQUVBLE1BQUtDLElBQUwsR0FBWUwsTUFBTUssSUFBbEIsQ0FQb0IsQ0FPRztBQUN2QixNQUFLQyxHQUFMLEdBQVdOLE1BQU1NLEdBQWpCLENBUm9CLENBUUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUQsSUFBTUMsZUFBZTtBQUNwQixpQkFBZ0IsQ0FESTtBQUVwQixhQUFjLEdBRk07QUFHcEIsZUFBYzs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVnFCLENBQXJCLENBV0EsSUFBTUMsV0FBVztBQUNoQixZQUFVO0FBRE0sQ0FBakI7O0FBSUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7O0FBRTlCLEtBQUcsQ0FBQ0EsR0FBR0wsSUFBUCxFQUNDLE9BQU8sRUFBQ00sR0FBRUgsU0FBU0k7O0FBRXBCO0FBQ0E7QUFDQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztBQUdBOztBQUVBOztBQUVBO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBckNRLEVBQVAsQ0F1Q0QsSUFBSUMsZUFBSjs7QUFFQSxLQUFHSCxHQUFHTCxJQUFILENBQVFKLENBQVIsS0FBYywwQkFBT2EsR0FBUCxDQUFXYixDQUE1QixFQUNDWSxTQUFTLDBCQUFnQkgsR0FBR0wsSUFBbkIsQ0FBVCxDQURELEtBRUssSUFBR0ssR0FBR0wsSUFBSCxDQUFRSixDQUFSLEtBQWMsMEJBQU9jLENBQVAsQ0FBU2QsQ0FBMUI7QUFDSjtBQUNBWSxXQUFTSCxHQUFHTCxJQUFILENBQVFXLE9BQVIsR0FBa0JmLENBQTNCOztBQUVELEtBQUdTLEdBQUdKLEdBQU4sRUFDQ08sU0FBU0gsR0FBR0osR0FBSCxDQUFPVSxPQUFQLEdBQWlCZixDQUFqQixHQUFxQixHQUFyQixHQUEyQlksTUFBcEM7O0FBRUQsUUFBT0EsTUFBUDtBQUNBLENBdEREOztRQXdEUUwsUSxHQUFBQSxRO1FBQ0FULEksR0FBQUEsSTtRQUNBVSxjLEdBQUFBLGMiLCJmaWxlIjoiTlAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05vbUdlbmVyYXRlVGV4dH0gZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbU9ifSAgICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQgU2NoZW1hICAgICAgICAgICAgZnJvbSAnLi9wb3MvU2NoZW1hQ29uc3RhbnRzJ1xuaW1wb3J0IFBsdXJhbGl0eSAgICAgICAgIGZyb20gJy4vcG9zL1BsdXJhbGl0eSdcblxuZnVuY3Rpb24gTlBPYihwcm9wcykge1xuXG5cdHRoaXMudCA9IFNjaGVtYS5OUC50XG5cdHRoaXMudiA9IFNjaGVtYS5OUC5jdlxuXG5cdC8vIDMyNi4gaGFzIGEgaGVhZCBhbmQgb3B0aW9uYWxseSBvbmUgb3IgbW9yZSBkZXBlbmRlbnRzXG5cblx0dGhpcy5oZWFkID0gcHJvcHMuaGVhZCAvLyAzMzAuIHRoZSBoZWFkIGNhbiBiZSBhIE4gb3IgYSBOb21cblx0dGhpcy5kZXQgPSBwcm9wcy5kZXQgICAvLyAzMzAuIHRoZSBkZXRlcm1pbmF0aXZlIGNhbiBiZSBhIERldCwgYSBEZXRQLCBvciBhIGdlbmF0aXZlIE5QLlxuXHQvL3RoaXMuZGVmaW5pdGVuZXNzID0gcHJvcHMuZGVmaW5pdGVuZXNzIHx8IERlZmluaXRlbmVzcy5Ob25lU2VsZWN0ZWRcblx0Ly90aGlzLnBsdXJhbGl0eSA9IHByb3BzLnBsdXJhbGl0eSB8fCBQbHVyYWxpdHkuTm9uZVNlbGVjdGVkXG5cdC8vdGhpcy5hZGplY3RpdmVzID0gcHJvcHMuYWRqZWN0aXZlcyB8fCBbXVxufVxuXG5jb25zdCBEZWZpbml0ZW5lc3MgPSB7XG5cdCdOb25lU2VsZWN0ZWQnOiAwLFxuXHQnRGVmaW5pdGUnOiAgIDEwMCxcblx0J0luZGVmaW5pdGUnOiAyMDAsXG59XG5cbi8vIDMyNi4gQ2FuIGJlIGEgY29tcGxlbWVudCBpbiBhIGNsYXVzZSwgYWthIHN1YmplY3QsIGFuIG9iamVjdCwgb3IgYSBwcmVkaWNhdGl2ZSBjb21wbGVtZW50LlxuLy8gMzI3LiBPdGhlciBmdW5jdGlvbnM6IGNvbXBsZW1lbnQgaW4gUFAsIHN1YmplY3QtZGV0ZXJtaW5lciBpbiBOUCwgYWRqdW5jdCBpbiBjbGF1c2UsIG1vZGlmaWVyIGluIEFkalAsIG1vZGlmaWVyIGluIEFkdlAsIG1vZGlmaWVyIGluIFBQLCBtb2RpZmllciBpbiBOUCwgc3VwcGxlbWVudCwgdm9jYXRpdmVcbi8vIDMyNy4gZHVtbXkgY2F0ZWdvcnkgJ3RoZXJlJ1xuLy8gMzI4LiBiYXJlIHJvbGU6IGllLiAncHJlc2lkZW50J1xuLy8gMzI5LiBwcmUtaGVhZCBhbmQgcG9zdC1oZWFkIGRlcGVuZGVudHMuXG5jb25zdCBOUEVycm9ycyA9IHtcblx0J05PX0hFQUQnOidUaGlzIE5QIGhhcyBubyBoZWFkLidcbn1cblxuY29uc3QgTlBHZW5lcmF0ZVRleHQgPSAobnApID0+IHtcblxuXHRpZighbnAuaGVhZClcblx0XHRyZXR1cm4ge2U6TlBFcnJvcnMuTk9fSEVBRH1cblxuXHQvLyBub3VuOiBPYmplY3QsIGFkalN0cmluZzogU3RyaW5nXG5cdC8vZnVuY3Rpb24gYW9yYW4obm91biwgYWRqU3RyaW5nKSB7XG5cdFx0Ly9sZXQgYXJ0aWNsZSA9ICdhJ1xuXG5cdFx0Ly9jb25zdCBmaXJzdENoYXIgPSAoYWRqU3RyaW5nID09PSAnJykgPyBub3VuLmJhc2UuY2hhckF0KDApIDogYWRqU3RyaW5nLmNoYXJBdCgwKVxuXHRcdC8vYXJ0aWNsZSA9ICgnYWVpb3VBRUlPVScuaW5kZXhPZihmaXJzdENoYXIpIDwgMCkgPyAnYScgOiAnYW4nXG5cdFx0Ly9pZiAobm91bi5zb3VuZExpa2VZb3UpIGFydGljbGUgPSAnYSdcblx0XHQvL2lmIChub3VuLnNpbGVudEgpIGFydGljbGUgPSAnYW4nXG5cdFx0Ly9yZXR1cm4gYXJ0aWNsZVxuXHQvL31cblxuXG5cdC8vbGV0IGFydGljbGUgPSAnJ1xuXG5cdC8vbGV0IGFkalN0cmluZyA9IG5wLmFkamVjdGl2ZXMubWFwKCAobikgPT4gbi5iYXNlKS5qb2luKCcgJylcblxuXHQvL2lmKG5wLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKSB7XG5cdFx0Ly9hcnRpY2xlID0gJ3RoZSdcblx0Ly99IGVsc2UgaWYobnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuUGx1cmFsKSB7XG5cdFx0Ly9hcnRpY2xlID0gYW9yYW4obnAuaGVhZCwgYWRqU3RyaW5nKVxuXHQvL31cblxuXG5cblx0Ly9pZihucC5leGFtcGxlT2YpICAgICAgICAgIGFydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cblx0Ly9pZihucC5maXJzdFRpbWUpICAgICAgICAgIGFydGljbGUgPSBhb3JhbihucC5oZWFkLCBhZGpTdHJpbmcpXG5cdC8vaWYobnAubmFtZU9mSm9iKSAgICAgICAgICBhcnRpY2xlID0gdGhpcy5hb3JhbihucC5nZXQoJ2hlYWRkJyksIGFkalN0cmluZylcblx0Ly9pZihucC5uYXRpb25hbGl0eVNpbmd1bGFyKSBhcnRpY2xlID0gYW9yYW4oaGVhZGQsIGFkalN0cmluZywgY29uZmlnKVxuXHQvL2lmKG5wLnJlbGlnaW9uU2luZ3VsYXIpIGFydGljbGUgPSBhb3JhbihoZWFkZCwgYWRqU3RyaW5nLCBjb25maWcpXG5cdC8vaWYobnAuZGF5T2ZXZWVrKSBhcnRpY2xlID0gYW9yYW4oaGVhZGQsIGFkalN0cmluZywgY29uZmlnKVxuXHQvL2lmKG5wLmV4YW1wbGVPZlNvbWV0aGluZykgYXJ0aWNsZSA9IHRoaXMuYW9yYW4obnAuZ2V0KCdoZWFkZCcpLCBhZGpTdHJpbmcpXG5cblx0Ly9sZXQgYmFzZSA9IE5HZW5lcmF0ZVRleHQobnAuaGVhZClcblx0Ly9pZiggYWRqU3RyaW5nICE9PSAnJykgYmFzZSA9IGFkalN0cmluZyArICcgJyArIGJhc2Vcblx0Ly9pZiAoYXJ0aWNsZSAhPSAnJykgYmFzZSA9IGFydGljbGUgKyAnICcgKyBiYXNlXG5cblx0bGV0IHJldFZhbFxuXG5cdGlmKG5wLmhlYWQudCA9PT0gU2NoZW1hLk5vbS50KVxuXHRcdHJldFZhbCA9IE5vbUdlbmVyYXRlVGV4dChucC5oZWFkKVxuXHRlbHNlIGlmKG5wLmhlYWQudCA9PT0gU2NoZW1hLk4udClcblx0XHQvL3JldFZhbCA9IE5HZW5lcmF0ZVRleHQobnAuaGVhZClcblx0XHRyZXRWYWwgPSBucC5oZWFkLmFuYWx5c2UoKS50XG5cblx0aWYobnAuZGV0KVxuXHRcdHJldFZhbCA9IG5wLmRldC5hbmFseXNlKCkudCArICcgJyArIHJldFZhbFxuXG5cdHJldHVybiByZXRWYWxcbn1cblxuZXhwb3J0IHtOUEVycm9yc31cbmV4cG9ydCB7TlBPYn1cbmV4cG9ydCB7TlBHZW5lcmF0ZVRleHR9XG4iXX0=