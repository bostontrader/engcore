"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
//import {Plurality}       from './N'
//import Person            from './Person'
//import Schema            from './SchemaConstants'
//import {UnkGenerateText} from './Unk'
//import {Tense}           from './V'

function VPOb(props) {

	this.t = Schema.VP.t;
	this.v = Schema.VP.cv;

	// p50 the head of a verb phrase, aka the predicator, is a V
	this.verb = props.verb;

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

var VPGenerateText = function VPGenerateText(vp) {

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

exports.VPGenerateText = VPGenerateText;
exports.VPOb = VPOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WUC5qcyJdLCJuYW1lcyI6WyJWUE9iIiwicHJvcHMiLCJ0IiwiU2NoZW1hIiwiVlAiLCJ2IiwiY3YiLCJ2ZXJiIiwiVlBHZW5lcmF0ZVRleHQiLCJ2cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjs7QUFFcEIsTUFBS0MsQ0FBTCxHQUFTQyxPQUFPQyxFQUFQLENBQVVGLENBQW5CO0FBQ0EsTUFBS0csQ0FBTCxHQUFTRixPQUFPQyxFQUFQLENBQVVFLEVBQW5COztBQUVBO0FBQ0EsTUFBS0MsSUFBTCxHQUFZTixNQUFNTSxJQUFsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUQsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7O0FBRTlCOztBQUVBOztBQUVBO0FBQ0M7QUFDQztBQUNDO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQzs7QUFFRjtBQUNEOztBQUVBOztBQUVDO0FBQ0M7QUFDQztBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNEOzs7QUFHQTtBQUNDO0FBQ0M7QUFDQTtBQUNBOzs7QUFHRDtBQUNDO0FBQ0Y7O0FBRUQ7O0FBRUE7O0FBRUM7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7QUFDQztBQUNGO0FBQ0Q7O0FBRUE7QUFDQztBQUNDO0FBQ0E7QUFDQTtBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Y7QUFDQTs7QUFFRDtBQUNDO0FBQ0E7QUFDQztBQUNDO0FBQ0Q7QUFDQzs7QUFFRjtBQUNBOztBQUVEO0FBQ0M7O0FBRUY7O0FBRUQ7O0FBRUE7QUFDQztBQUNEOztBQUVBO0FBQ0M7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Y7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNEOztBQUVBOztBQUVDO0FBQ0E7QUFDQztBQUNDO0FBQ0E7QUFDQTs7QUFFRDtBQUNDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNBOztBQUVEO0FBQ0M7O0FBRUY7O0FBRUQ7O0FBRUE7QUFDQztBQUNEO0FBQ0EsQ0E5SUQ7O1FBZ0pRRCxjLEdBQUFBLGM7UUFDQVIsSSxHQUFBQSxJIiwiZmlsZSI6IlZQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQge1BsdXJhbGl0eX0gICAgICAgZnJvbSAnLi9OJ1xuLy9pbXBvcnQgUGVyc29uICAgICAgICAgICAgZnJvbSAnLi9QZXJzb24nXG4vL2ltcG9ydCBTY2hlbWEgICAgICAgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcbi8vaW1wb3J0IHtVbmtHZW5lcmF0ZVRleHR9IGZyb20gJy4vVW5rJ1xuLy9pbXBvcnQge1RlbnNlfSAgICAgICAgICAgZnJvbSAnLi9WJ1xuXG5mdW5jdGlvbiBWUE9iKHByb3BzKSB7XG5cblx0dGhpcy50ID0gU2NoZW1hLlZQLnRcblx0dGhpcy52ID0gU2NoZW1hLlZQLmN2XG5cblx0Ly8gcDUwIHRoZSBoZWFkIG9mIGEgdmVyYiBwaHJhc2UsIGFrYSB0aGUgcHJlZGljYXRvciwgaXMgYSBWXG5cdHRoaXMudmVyYiA9IHByb3BzLnZlcmJcblxuXHQvLyBHaXZlbiBhbGwgdGhlc2Ugc2V0dGluZ3MsIGEgZGV0ZXJtaW5lZCBhZHZlcnNhcnkgY2FuIHByb2JhYmx5IGNvbWJpbmUgdGhlbSBpbnRvIG5vbi1zZW5zZW5zaWNhbCBwYXR0ZXJucy5cblx0Ly8gSW5zdGVhZCBvZiBmcmV0dGluZyBhYm91dCB0aGlzIHBvc3NpYmlsaXR5LCBhIFZQIHdpbGwgbWVyZWx5IG9wZXJhdGUgdXBvbiB0aGUgZmlyc3Qgc2Vuc2libGUgcGF0dGVybiB0aGF0IGl0XG5cdC8vIHJlY29nbml6ZXMuICBQbGVhc2Ugc2VlIFZQR2VuZXJhdGVUZXh0IHRvIHVuZGVyc3RhbmQgdGhlIGV4YWN0IG1ldGhvZCBvZiByZWNvZ25pdGlvbi5cblxuXHQvL3RoaXMucGVyZmVjdCA9IHByb3BzLnBlcmZlY3QgfHwgZmFsc2Vcblx0Ly90aGlzLmNvbnRpbnVvdXMgPSBwcm9wcy5jb250aW51b3VzIHx8IGZhbHNlXG5cdC8vdGhpcy50ZW5zZSA9IHByb3BzLnRlbnNlXG5cdC8vdGhpcy5wZXJzb24gPSBwcm9wcy5wZXJzb25cblx0Ly90aGlzLnBsdXJhbGl0eSA9IHByb3BzLnBsdXJhbGl0eVxuXHQvL3RoaXMucGFzc2l2ZSA9IHByb3BzLnBhc3NpdmUgfHwgZmFsc2VcblxuXHQvLyBBIGZpbml0ZSB2ZXJiIHBocmFzZSBpcyBvbmUgdGhhdCBjYW4gYmUgdGhlIG1haW4gdmVyYiBvZiBhIHNlbnRlbmNlLiBBIG5vbi1maW5pdGVcblx0Ly8gdmVyYiBpcyBhbiBpbmZpbml0aXZlLCBnZXJ1bmQgb3IgcGFydGljaXBsZS5cblx0Ly90aGlzLmZpbml0ZSA9IHByb3BzLmZpbml0ZSB8fCB0cnVlXG5cdC8vdGhpcy5pbmZpbml0aXZlID0gcHJvcHMuaW5maW5pdGl2ZSB8fCBmYWxzZVxuXG59XG5cbmNvbnN0IFZQR2VuZXJhdGVUZXh0ID0gKHZwKSA9PiB7XG5cblx0Ly9jb25zdCBnZXRQYXN0Rm9ybSA9IHZlcmJvYiA9PiAodmVyYm9iLnBhc3RGb3JtKSA/IHZlcmJvYi5wYXN0Rm9ybSA6IHZlcmJvYi5iYXNlICsgJ2VkJ1xuXG5cdC8vbGV0IHJldFZhbCA9IHZwLnZlcmIuYmFzZVxuXG5cdC8vaWYodnAucGVyZmVjdCAmJiB2cC5jb250aW51b3VzKSB7XG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhZCBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0dXJuICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnZWQnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHJldHVybiAnaGFzIGJlZW4gJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vYnJlYWtcblxuXHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpIHJldHVybiAnaGF2ZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2VkJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2hhcyBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2JyZWFrXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgaGF2ZSBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0Ly99XG5cdC8vfVxuXG5cdC8vZWxzZSBpZih2cC5wZXJmZWN0KSB7XG5cblx0XHQvL2lmKHZwLnBhc3NpdmUpIHtcblx0XHRcdC8vc3dpdGNoICh2cC50ZW5zZSkge1xuXHRcdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0XHQvL3JldHVybiAnaGFkIGJlZW4gJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vY2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHQvL1x0cmV0dXJuICdoYXMgYmVlbiAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9kZWZhdWx0OiAvLyBObyB0ZW5zZSwgZnV0dXJlXG5cdFx0XHRcdC8vcmV0dXJuICd3aWxsIGJlIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0Ly99XG5cdFx0Ly99XG5cblxuXHRcdC8vc3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5GaXJzdCkgcmV0dXJuICdoYXZlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0dXJuICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnZWQnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHJldHVybiAnaGFkICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgaGF2ZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHQvL31cblxuXHQvL31cblxuXHQvL2Vsc2UgaWYodnAuY29udGludW91cykge1xuXG5cdFx0Ly9pZih2cC5wYXNzaXZlKSB7XG5cdFx0XHQvL3N3aXRjaCAodnAudGVuc2UpIHtcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ2lzIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0XHQvL3JldHVybiAnd2lsbCBiZSBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vfVxuXHRcdC8vfVxuXG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXRWYWwgPSAnd2FzICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0VmFsID0gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHtcblx0XHRcdFx0XHQvL2lmICh2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHRcdC8vcmV0dXJuICd3YXMgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvL3JldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly99XG5cdFx0XHRcdC8vYnJlYWtcblxuXHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vY29uc3QgbmVnYXRlID0gdnAubmVnYXRlID8gJ25vdCAnIDogJydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5GaXJzdClcblx0XHRcdFx0XHQvL2lmICh2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHRcdC8vcmV0dXJuICdhbSAnICsgbmVnYXRlICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vcmV0dXJuICdhcmUgJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnYXJlICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2lzICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0XHQvL2RlZmF1bHQ6XG5cdFx0XHRcdC8vaWYgKHZwLmZ1dHVyZSkgcmV0dXJuICd3aWxsIGJlICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0Ly99XG5cblx0Ly99XG5cblx0Ly9lbHNlIGlmKHZwLmluZmluaXRpdmUpIHtcblx0XHQvL3JldFZhbCA9ICd0byAnICsgdnAudmVyYi5iYXNlXG5cdC8vfVxuXG5cdC8vZWxzZSBpZih2cC5wYXNzaXZlKSB7XG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmICh2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHQvL3JldHVybiAnd2FzICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHQvL3JldHVybiAnd2VyZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vY2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHQvL3JldHVybiAnaXMgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0Ly9yZXR1cm4gJ3dpbGwgYmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0Ly99XG5cdC8vfVxuXG5cdC8vZWxzZSB7IC8vIGVsc2Ugc2ltcGxlXG5cblx0XHQvL2NvbnN0IG5lZ2F0ZSA9IHZwLm5lZ2F0ZSA/ICdkbyBub3QgJyA6ICcnXG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL3JldHVybiBuZWdhdGUgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL3JldFZhbCA9IGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vYnJlYWtcblxuXHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQgJiYgdnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0XHRcdFx0Ly9pZiAodnAubmVnYXRlKVxuXHRcdFx0XHRcdFx0Ly9yZXRWYWwgPSAnZG9lcyBub3QgJyArIHZwLnZlcmIuYmFzZVxuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly9yZXRWYWwgPSB2cC52ZXJiLmJhc2UgKyAncydcblx0XHRcdFx0Ly9yZXR1cm4gbmVnYXRlICsgdnAudmVyYi5iYXNlXG5cdFx0XHRcdC8vYnJlYWtcblxuXHRcdFx0Ly9kZWZhdWx0OlxuXHRcdFx0XHQvL2lmICh2cC5mdXR1cmUpIHJldHVybiAnd2lsbCAnICsgdnAudmVyYi5iYXNlXG5cblx0XHQvL31cblxuXHQvL31cblxuXHQvL2lmKHZwLnByZXBlbmQpXG5cdFx0Ly9yZXRWYWwgPSBVbmtHZW5lcmF0ZVRleHQodnAucHJlcGVuZCkgKyAnICcgKyByZXRWYWxcblx0Ly9yZXR1cm4gcmV0VmFsXG59XG5cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG4iXX0=