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

//import {Plurality}       from './N'
//import Person            from './Person'
//import {UnkGenerateText} from './Unk'
//import {Tense}           from './V'

function VP(props) {
	this.t = _SchemaConstants2.default.VP.t;
	this.v = _SchemaConstants2.default.VP.cv;

	// p50 the head of a verb phrase, aka the predicator, is a V
	if (props) {
		if ('head' in props) this.head = props.head;
	}
	// Given all these settings, a determined adversary can probably combine them into non-sensensical patterns.
	// Instead of fretting about this possibility, a VP will merely operate upon the first sensible pattern that it
	// recognizes.  Please see VPGenerateText to understand the exact method of recognition.

	//this.perfect = props.perfect || false
	//this.continuous = props.continuous || false
	//this.tense = props.tense
	//this.person = props.person
	//this.plurality = props.plurality
	//this.passive = props.passive || false

	// A finite verb phrase is one that can be the main verb of a sentence. A non-finite
	// verb is an infinitive, gerund or participle.
	//this.finite = props.finite || true
	//this.infinitive = props.infinitive || false
}

VP.prototype = Object.create(new _POS2.default());

var VPErrors = {
	'MISSING_HEAD': 'This verb phrase must have a head.'
};

VP.prototype.analyse = function () {

	if (!('head' in this)) return { t: undefined, e: [VPErrors.MISSING_HEAD] };

	return { t: this.head.analyse().t, e: []
		//const getPastForm = verbob => (verbob.pastForm) ? verbob.pastForm : verbob.base + 'ed'

		//let retVal = vp.verb.base

		//if(vp.perfect && vp.continuous) {
		//switch(vp.tense) {
		//case Tense.Past:
		//if(vp.person === Person.First) return 'had been ' + vp.verb.base + 'ing'
		//if(vp.person === Person.Second) return 'were ' + vp.verb.base + 'ed'
		//if(vp.person === Person.Third) return 'has been ' + vp.verb.base + 'ing'
		//break

		//case Tense.Present:
		//if(vp.person === Person.First) return 'have ' + getPastForm(vp.verb)
		//if(vp.person === Person.Second) return 'were ' + vp.verb.base + 'ed'
		//if(vp.person === Person.Third) return 'has been ' + vp.verb.base + 'ing'
		//break

		//default:
		//if (vp.future) return 'will have been ' + vp.verb.base + 'ing'

		//}
		//}

		//else if(vp.perfect) {

		//if(vp.passive) {
		//switch (vp.tense) {
		//case Tense.Past:
		//return 'had been ' + getPastForm(vp.verb)
		//case Tense.Present:
		//	return 'has been ' + getPastForm(vp.verb)
		//default: // No tense, future
		//return 'will be being ' + getPastForm(vp.verb)
		//}
		//}


		//switch(vp.tense) {
		//case Tense.Past:
		//if(vp.person === Person.First) return 'have ' + getPastForm(vp.verb)
		//if(vp.person === Person.Second) return 'were ' + vp.verb.base + 'ed'
		//if(vp.person === Person.Third) return 'had ' + getPastForm(vp.verb)


		//default:
		//if (vp.future) return 'will have ' + getPastForm(vp.verb)
		//}

		//}

		//else if(vp.continuous) {

		//if(vp.passive) {
		//switch (vp.tense) {
		//case Tense.Past:
		//return 'was being ' + getPastForm(vp.verb)
		//case Tense.Present:
		//return 'is being ' + getPastForm(vp.verb)
		//default: // No tense, future
		//return 'will be being ' + getPastForm(vp.verb)
		//}
		//}

		//switch(vp.tense) {
		//case Tense.Past:
		//if(vp.person === Person.First) retVal = 'was ' + vp.verb.base + 'ing'
		//if(vp.person === Person.Second) retVal = 'were ' + vp.verb.base + 'ing'
		//if(vp.person === Person.Third) {
		//if (vp.plurality === Plurality.Singular)
		//return 'was ' + vp.verb.base + 'ing'
		//else
		//return 'were ' + vp.verb.base + 'ing'
		//}
		//break

		//case Tense.Present:
		//const negate = vp.negate ? 'not ' : ''
		//if(vp.person === Person.First)
		//if (vp.plurality === Plurality.Singular)
		//return 'am ' + negate + vp.verb.base + 'ing'
		//else
		//return 'are ' + negate + vp.verb.base + 'ing'

		//if(vp.person === Person.Second) return 'are ' + negate + vp.verb.base + 'ing'
		//if(vp.person === Person.Third) return 'is ' + negate + vp.verb.base + 'ing'

		//default:
		//if (vp.future) return 'will be ' + vp.verb.base + 'ing'

		//}

		//}

		//else if(vp.infinitive) {
		//retVal = 'to ' + vp.verb.base
		//}

		//else if(vp.passive) {
		//switch(vp.tense) {
		//case Tense.Past:
		//if (vp.plurality === Plurality.Singular)
		//return 'was ' + getPastForm(vp.verb)
		//else
		//return 'were ' + getPastForm(vp.verb)
		//case Tense.Present:
		//return 'is ' + getPastForm(vp.verb)
		//default: // No tense, future
		//return 'will be ' + getPastForm(vp.verb)
		//}
		//}

		//else { // else simple

		//const negate = vp.negate ? 'do not ' : ''
		//switch(vp.tense) {
		//case Tense.Past:
		//return negate + getPastForm(vp.verb)
		//retVal = getPastForm(vp.verb)
		//break

		//case Tense.Present:
		//if(vp.person === Person.Third && vp.plurality === Plurality.Singular)
		//if (vp.negate)
		//retVal = 'does not ' + vp.verb.base
		//else
		//retVal = vp.verb.base + 's'
		//return negate + vp.verb.base
		//break

		//default:
		//if (vp.future) return 'will ' + vp.verb.base

		//}

		//}

		//if(vp.prepend)
		//retVal = UnkGenerateText(vp.prepend) + ' ' + retVal
		//return retVal
	};
};

exports.default = VP;
exports.VPErrors = VPErrors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3MvdnAvVlAuanMiXSwibmFtZXMiOlsiVlAiLCJwcm9wcyIsInQiLCJ2IiwiY3YiLCJoZWFkIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiVlBFcnJvcnMiLCJhbmFseXNlIiwidW5kZWZpbmVkIiwiZSIsIk1JU1NJTkdfSEVBRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEVBQVQsQ0FBWUMsS0FBWixFQUFtQjtBQUNsQixNQUFLQyxDQUFMLEdBQVMsMEJBQU9GLEVBQVAsQ0FBVUUsQ0FBbkI7QUFDQSxNQUFLQyxDQUFMLEdBQVMsMEJBQU9ILEVBQVAsQ0FBVUksRUFBbkI7O0FBRUE7QUFDQSxLQUFHSCxLQUFILEVBQVU7QUFDVCxNQUFHLFVBQVVBLEtBQWIsRUFDQyxLQUFLSSxJQUFMLEdBQVlKLE1BQU1JLElBQWxCO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRURMLEdBQUdNLFNBQUgsR0FBZUMsT0FBT0MsTUFBUCxDQUFjLG1CQUFkLENBQWY7O0FBRUEsSUFBTUMsV0FBVztBQUNoQixpQkFBZTtBQURDLENBQWpCOztBQUlBVCxHQUFHTSxTQUFILENBQWFJLE9BQWIsR0FBdUIsWUFBVzs7QUFFakMsS0FBRyxFQUFFLFVBQVUsSUFBWixDQUFILEVBQ0MsT0FBTyxFQUFDUixHQUFFUyxTQUFILEVBQWNDLEdBQUUsQ0FBQ0gsU0FBU0ksWUFBVixDQUFoQixFQUFQOztBQUVELFFBQU8sRUFBQ1gsR0FBRSxLQUFLRyxJQUFMLENBQVVLLE9BQVYsR0FBb0JSLENBQXZCLEVBQXlCVSxHQUFFO0FBQ2xDOztBQUVBOztBQUVBO0FBQ0M7QUFDQztBQUNDO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQzs7QUFFRjtBQUNEOztBQUVBOztBQUVDO0FBQ0M7QUFDQztBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNEOzs7QUFHQTtBQUNDO0FBQ0M7QUFDQTtBQUNBOzs7QUFHRDtBQUNDO0FBQ0Y7O0FBRUQ7O0FBRUE7O0FBRUM7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7QUFDQztBQUNGO0FBQ0Q7O0FBRUE7QUFDQztBQUNDO0FBQ0E7QUFDQTtBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Y7QUFDQTs7QUFFRDtBQUNDO0FBQ0E7QUFDQztBQUNDO0FBQ0Q7QUFDQzs7QUFFRjtBQUNBOztBQUVEO0FBQ0M7O0FBRUY7O0FBRUQ7O0FBRUE7QUFDQztBQUNEOztBQUVBO0FBQ0M7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Y7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNEOztBQUVBOztBQUVDO0FBQ0E7QUFDQztBQUNDO0FBQ0E7QUFDQTs7QUFFRDtBQUNDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNBOztBQUVEO0FBQ0M7O0FBRUY7O0FBRUQ7O0FBRUE7QUFDQztBQUNEO0FBNUlPLEVBQVA7QUE2SUEsQ0FsSkQ7O2tCQW9KZVosRTtRQUNQUyxRLEdBQUFBLFEiLCJmaWxlIjoiVlAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUE9TICAgIGZyb20gJy4uL1BPUydcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi4vU2NoZW1hQ29uc3RhbnRzJ1xuXG4vL2ltcG9ydCB7UGx1cmFsaXR5fSAgICAgICBmcm9tICcuL04nXG4vL2ltcG9ydCBQZXJzb24gICAgICAgICAgICBmcm9tICcuL1BlcnNvbidcbi8vaW1wb3J0IHtVbmtHZW5lcmF0ZVRleHR9IGZyb20gJy4vVW5rJ1xuLy9pbXBvcnQge1RlbnNlfSAgICAgICAgICAgZnJvbSAnLi9WJ1xuXG5mdW5jdGlvbiBWUChwcm9wcykge1xuXHR0aGlzLnQgPSBTY2hlbWEuVlAudFxuXHR0aGlzLnYgPSBTY2hlbWEuVlAuY3ZcblxuXHQvLyBwNTAgdGhlIGhlYWQgb2YgYSB2ZXJiIHBocmFzZSwgYWthIHRoZSBwcmVkaWNhdG9yLCBpcyBhIFZcblx0aWYocHJvcHMpIHtcblx0XHRpZignaGVhZCcgaW4gcHJvcHMpXG5cdFx0XHR0aGlzLmhlYWQgPSBwcm9wcy5oZWFkXG5cdH1cblx0Ly8gR2l2ZW4gYWxsIHRoZXNlIHNldHRpbmdzLCBhIGRldGVybWluZWQgYWR2ZXJzYXJ5IGNhbiBwcm9iYWJseSBjb21iaW5lIHRoZW0gaW50byBub24tc2Vuc2Vuc2ljYWwgcGF0dGVybnMuXG5cdC8vIEluc3RlYWQgb2YgZnJldHRpbmcgYWJvdXQgdGhpcyBwb3NzaWJpbGl0eSwgYSBWUCB3aWxsIG1lcmVseSBvcGVyYXRlIHVwb24gdGhlIGZpcnN0IHNlbnNpYmxlIHBhdHRlcm4gdGhhdCBpdFxuXHQvLyByZWNvZ25pemVzLiAgUGxlYXNlIHNlZSBWUEdlbmVyYXRlVGV4dCB0byB1bmRlcnN0YW5kIHRoZSBleGFjdCBtZXRob2Qgb2YgcmVjb2duaXRpb24uXG5cblx0Ly90aGlzLnBlcmZlY3QgPSBwcm9wcy5wZXJmZWN0IHx8IGZhbHNlXG5cdC8vdGhpcy5jb250aW51b3VzID0gcHJvcHMuY29udGludW91cyB8fCBmYWxzZVxuXHQvL3RoaXMudGVuc2UgPSBwcm9wcy50ZW5zZVxuXHQvL3RoaXMucGVyc29uID0gcHJvcHMucGVyc29uXG5cdC8vdGhpcy5wbHVyYWxpdHkgPSBwcm9wcy5wbHVyYWxpdHlcblx0Ly90aGlzLnBhc3NpdmUgPSBwcm9wcy5wYXNzaXZlIHx8IGZhbHNlXG5cblx0Ly8gQSBmaW5pdGUgdmVyYiBwaHJhc2UgaXMgb25lIHRoYXQgY2FuIGJlIHRoZSBtYWluIHZlcmIgb2YgYSBzZW50ZW5jZS4gQSBub24tZmluaXRlXG5cdC8vIHZlcmIgaXMgYW4gaW5maW5pdGl2ZSwgZ2VydW5kIG9yIHBhcnRpY2lwbGUuXG5cdC8vdGhpcy5maW5pdGUgPSBwcm9wcy5maW5pdGUgfHwgdHJ1ZVxuXHQvL3RoaXMuaW5maW5pdGl2ZSA9IHByb3BzLmluZmluaXRpdmUgfHwgZmFsc2VcblxufVxuXG5WUC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG5ldyBQT1MoKSlcblxuY29uc3QgVlBFcnJvcnMgPSB7XG5cdCdNSVNTSU5HX0hFQUQnOidUaGlzIHZlcmIgcGhyYXNlIG11c3QgaGF2ZSBhIGhlYWQuJ1xufVxuXG5WUC5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXG5cdGlmKCEoJ2hlYWQnIGluIHRoaXMpKVxuXHRcdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W1ZQRXJyb3JzLk1JU1NJTkdfSEVBRF19XG5cblx0cmV0dXJuIHt0OnRoaXMuaGVhZC5hbmFseXNlKCkudCxlOltdfVxuXHQvL2NvbnN0IGdldFBhc3RGb3JtID0gdmVyYm9iID0+ICh2ZXJib2IucGFzdEZvcm0pID8gdmVyYm9iLnBhc3RGb3JtIDogdmVyYm9iLmJhc2UgKyAnZWQnXG5cblx0Ly9sZXQgcmV0VmFsID0gdnAudmVyYi5iYXNlXG5cblx0Ly9pZih2cC5wZXJmZWN0ICYmIHZwLmNvbnRpbnVvdXMpIHtcblx0XHQvL3N3aXRjaCh2cC50ZW5zZSkge1xuXHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpIHJldHVybiAnaGFkIGJlZW4gJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdlZCdcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdoYXMgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9icmVha1xuXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5GaXJzdCkgcmV0dXJuICdoYXZlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0dXJuICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnZWQnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHJldHVybiAnaGFzIGJlZW4gJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vYnJlYWtcblxuXHRcdFx0Ly9kZWZhdWx0OlxuXHRcdFx0XHQvL2lmICh2cC5mdXR1cmUpIHJldHVybiAnd2lsbCBoYXZlIGJlZW4gJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHQvL31cblx0Ly99XG5cblx0Ly9lbHNlIGlmKHZwLnBlcmZlY3QpIHtcblxuXHRcdC8vaWYodnAucGFzc2l2ZSkge1xuXHRcdFx0Ly9zd2l0Y2ggKHZwLnRlbnNlKSB7XG5cdFx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHRcdC8vcmV0dXJuICdoYWQgYmVlbiAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vXHRyZXR1cm4gJ2hhcyBiZWVuICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0Ly9yZXR1cm4gJ3dpbGwgYmUgYmVpbmcgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL31cblx0XHQvL31cblxuXG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhdmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdlZCdcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdoYWQgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cblxuXHRcdFx0Ly9kZWZhdWx0OlxuXHRcdFx0XHQvL2lmICh2cC5mdXR1cmUpIHJldHVybiAnd2lsbCBoYXZlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdC8vfVxuXG5cdC8vfVxuXG5cdC8vZWxzZSBpZih2cC5jb250aW51b3VzKSB7XG5cblx0XHQvL2lmKHZwLnBhc3NpdmUpIHtcblx0XHRcdC8vc3dpdGNoICh2cC50ZW5zZSkge1xuXHRcdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0XHQvL3JldHVybiAnd2FzIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0XHQvL3JldHVybiAnaXMgYmVpbmcgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vZGVmYXVsdDogLy8gTm8gdGVuc2UsIGZ1dHVyZVxuXHRcdFx0XHRcdC8vcmV0dXJuICd3aWxsIGJlIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0Ly99XG5cdFx0Ly99XG5cblx0XHQvL3N3aXRjaCh2cC50ZW5zZSkge1xuXHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpIHJldFZhbCA9ICd3YXMgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXRWYWwgPSAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkge1xuXHRcdFx0XHRcdC8vaWYgKHZwLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vcmV0dXJuICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL31cblx0XHRcdFx0Ly9icmVha1xuXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9jb25zdCBuZWdhdGUgPSB2cC5uZWdhdGUgPyAnbm90ICcgOiAnJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KVxuXHRcdFx0XHRcdC8vaWYgKHZwLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ2FtICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ2FyZSAnICsgbmVnYXRlICsgdnAudmVyYi5iYXNlICsgJ2luZydcblxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0dXJuICdhcmUgJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHJldHVybiAnaXMgJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgYmUgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHQvL31cblxuXHQvL31cblxuXHQvL2Vsc2UgaWYodnAuaW5maW5pdGl2ZSkge1xuXHRcdC8vcmV0VmFsID0gJ3RvICcgKyB2cC52ZXJiLmJhc2Vcblx0Ly99XG5cblx0Ly9lbHNlIGlmKHZwLnBhc3NpdmUpIHtcblx0XHQvL3N3aXRjaCh2cC50ZW5zZSkge1xuXHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdC8vaWYgKHZwLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKVxuXHRcdFx0XHRcdC8vcmV0dXJuICd3YXMgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdC8vcmV0dXJuICd3ZXJlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vcmV0dXJuICdpcyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vZGVmYXVsdDogLy8gTm8gdGVuc2UsIGZ1dHVyZVxuXHRcdFx0XHQvL3JldHVybiAnd2lsbCBiZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHQvL31cblx0Ly99XG5cblx0Ly9lbHNlIHsgLy8gZWxzZSBzaW1wbGVcblxuXHRcdC8vY29uc3QgbmVnYXRlID0gdnAubmVnYXRlID8gJ2RvIG5vdCAnIDogJydcblx0XHQvL3N3aXRjaCh2cC50ZW5zZSkge1xuXHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdC8vcmV0dXJuIG5lZ2F0ZSArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vcmV0VmFsID0gZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9icmVha1xuXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCAmJiB2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHQvL2lmICh2cC5uZWdhdGUpXG5cdFx0XHRcdFx0XHQvL3JldFZhbCA9ICdkb2VzIG5vdCAnICsgdnAudmVyYi5iYXNlXG5cdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvL3JldFZhbCA9IHZwLnZlcmIuYmFzZSArICdzJ1xuXHRcdFx0XHQvL3JldHVybiBuZWdhdGUgKyB2cC52ZXJiLmJhc2Vcblx0XHRcdFx0Ly9icmVha1xuXG5cdFx0XHQvL2RlZmF1bHQ6XG5cdFx0XHRcdC8vaWYgKHZwLmZ1dHVyZSkgcmV0dXJuICd3aWxsICcgKyB2cC52ZXJiLmJhc2VcblxuXHRcdC8vfVxuXG5cdC8vfVxuXG5cdC8vaWYodnAucHJlcGVuZClcblx0XHQvL3JldFZhbCA9IFVua0dlbmVyYXRlVGV4dCh2cC5wcmVwZW5kKSArICcgJyArIHJldFZhbFxuXHQvL3JldHVybiByZXRWYWxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVlBcbmV4cG9ydCB7VlBFcnJvcnN9XG4iXX0=