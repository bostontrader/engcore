'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VPOb = exports.VPGenerateText = undefined;

var _Noun = require('./Noun');

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Verb = require('./Verb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VPOb(props) {

	this.t = _SchemaConstants2.default.VP.t;
	this.v = _SchemaConstants2.default.VP.cv;

	this.verb = props.verb;

	// Given all these settings, a determined adversary can probably combine them into non-sensensical patterns.
	// Instead of fretting about this possibility, a VP will merely operate upon the first sensible pattern that it
	// recognizes.  Please see VPGenerateText to understand the exact method of recognition.

	this.perfect = props.perfect || false;
	this.continuous = props.continuous || false;
	this.tense = props.tense;
	this.person = props.person;
	this.plurality = props.plurality;
	this.passive = props.passive || false;

	// A finite verb phrase is one that can be the main verb of a sentence. A non-finite
	// verb is an infinitive, gerund or participle.
	this.finite = props.finite || true;
	this.infinitive = props.infinitive || false;
}

var VPGenerateText = function VPGenerateText(vp) {

	var getPastForm = function getPastForm(verbob) {
		return verbob.pastForm ? verbob.pastForm : verbob.base + 'ed';
	};

	if (vp.perfect && vp.continuous) {}
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

	else if (vp.continuous) {

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

			switch (vp.tense) {
				case _Verb.Tense.Past:
					if (vp.person === _Person2.default.First) return 'was ' + vp.verb.base + 'ing';
					if (vp.person === _Person2.default.Second) return 'were ' + vp.verb.base + 'ing';
				//if(vp.person === Person.Third) {
				//if (vp.plurality === Plurality.Singular)
				//return 'was ' + vp.verb.base + 'ing'
				//else
				//return 'were ' + vp.verb.base + 'ing'
				//}

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

			}
		} else if (vp.infinitive) {
			return 'to ' + vp.verb.base;
		}

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

		else {
				// else simple

				//const negate = vp.negate ? 'do not ' : ''
				switch (vp.tense) {
					case _Verb.Tense.Past:
						//return negate + getPastForm(vp.verb)
						return getPastForm(vp.verb);

					case _Verb.Tense.Present:
						if (vp.person === _Person2.default.Third && vp.plurality === _Noun.Plurality.Singular) if (vp.negate) return 'does not ' + vp.verb.base;else return vp.verb.base + 's';
					//return negate + vp.verb.base

					//default:
					//if (vp.future) return 'will ' + vp.verb.base

				}
			}

	return vp.verb.base;
};

exports.VPGenerateText = VPGenerateText;
exports.VPOb = VPOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WUC5qcyJdLCJuYW1lcyI6WyJWUE9iIiwicHJvcHMiLCJ0IiwiVlAiLCJ2IiwiY3YiLCJ2ZXJiIiwicGVyZmVjdCIsImNvbnRpbnVvdXMiLCJ0ZW5zZSIsInBlcnNvbiIsInBsdXJhbGl0eSIsInBhc3NpdmUiLCJmaW5pdGUiLCJpbmZpbml0aXZlIiwiVlBHZW5lcmF0ZVRleHQiLCJ2cCIsImdldFBhc3RGb3JtIiwidmVyYm9iIiwicGFzdEZvcm0iLCJiYXNlIiwiUGFzdCIsIkZpcnN0IiwiU2Vjb25kIiwiUHJlc2VudCIsIlRoaXJkIiwiU2luZ3VsYXIiLCJuZWdhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7O0FBRXBCLE1BQUtDLENBQUwsR0FBUywwQkFBT0MsRUFBUCxDQUFVRCxDQUFuQjtBQUNBLE1BQUtFLENBQUwsR0FBUywwQkFBT0QsRUFBUCxDQUFVRSxFQUFuQjs7QUFFQSxNQUFLQyxJQUFMLEdBQVlMLE1BQU1LLElBQWxCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFLQyxPQUFMLEdBQWVOLE1BQU1NLE9BQU4sSUFBaUIsS0FBaEM7QUFDQSxNQUFLQyxVQUFMLEdBQWtCUCxNQUFNTyxVQUFOLElBQW9CLEtBQXRDO0FBQ0EsTUFBS0MsS0FBTCxHQUFhUixNQUFNUSxLQUFuQjtBQUNBLE1BQUtDLE1BQUwsR0FBY1QsTUFBTVMsTUFBcEI7QUFDQSxNQUFLQyxTQUFMLEdBQWlCVixNQUFNVSxTQUF2QjtBQUNBLE1BQUtDLE9BQUwsR0FBZVgsTUFBTVcsT0FBTixJQUFpQixLQUFoQzs7QUFFQTtBQUNBO0FBQ0EsTUFBS0MsTUFBTCxHQUFjWixNQUFNWSxNQUFOLElBQWdCLElBQTlCO0FBQ0EsTUFBS0MsVUFBTCxHQUFrQmIsTUFBTWEsVUFBTixJQUFvQixLQUF0QztBQUVBOztBQUVELElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsRUFBRCxFQUFROztBQUU5QixLQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUFXQyxPQUFPQyxRQUFSLEdBQW9CRCxPQUFPQyxRQUEzQixHQUFzQ0QsT0FBT0UsSUFBUCxHQUFjLElBQTlEO0FBQUEsRUFBcEI7O0FBRUEsS0FBR0osR0FBR1QsT0FBSCxJQUFjUyxHQUFHUixVQUFwQixFQUFnQyxDQWtCL0I7QUFqQkE7QUFDQztBQUNDO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQzs7QUFFRjs7O0FBR0Q7O0FBRUM7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7OztBQUdBO0FBQ0M7QUFDQztBQUNBO0FBQ0E7OztBQUdEO0FBQ0M7QUFDRjs7QUFFRDs7QUE3Q0EsTUErQ0ssSUFBR1EsR0FBR1IsVUFBTixFQUFrQjs7QUFFdEI7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNDO0FBQ0Q7QUFDQztBQUNGO0FBQ0Q7O0FBRUEsV0FBT1EsR0FBR1AsS0FBVjtBQUNDLFNBQUssWUFBTVksSUFBWDtBQUNDLFNBQUdMLEdBQUdOLE1BQUgsS0FBYyxpQkFBT1ksS0FBeEIsRUFBK0IsT0FBTyxTQUFTTixHQUFHVixJQUFILENBQVFjLElBQWpCLEdBQXdCLEtBQS9CO0FBQy9CLFNBQUdKLEdBQUdOLE1BQUgsS0FBYyxpQkFBT2EsTUFBeEIsRUFBZ0MsT0FBTyxVQUFVUCxHQUFHVixJQUFILENBQVFjLElBQWxCLEdBQXlCLEtBQWhDO0FBQ2hDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRjs7QUFFRDtBQUNDO0FBQ0E7QUFDQztBQUNDO0FBQ0Q7QUFDQzs7QUFFRjtBQUNBOztBQUVEO0FBQ0M7O0FBdkJGO0FBMkJBLEdBeENJLE1BMENBLElBQUdKLEdBQUdGLFVBQU4sRUFBa0I7QUFDdEIsVUFBTyxRQUFRRSxHQUFHVixJQUFILENBQVFjLElBQXZCO0FBQ0E7O0FBRUQ7QUFDQztBQUNDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNDO0FBQ0Q7QUFDQztBQUNGO0FBQ0Q7O0FBaEJLLE9Ba0JBO0FBQUU7O0FBRU47QUFDQSxZQUFPSixHQUFHUCxLQUFWO0FBQ0MsVUFBSyxZQUFNWSxJQUFYO0FBQ0M7QUFDQSxhQUFPSixZQUFZRCxHQUFHVixJQUFmLENBQVA7O0FBRUQsVUFBSyxZQUFNa0IsT0FBWDtBQUNDLFVBQUdSLEdBQUdOLE1BQUgsS0FBYyxpQkFBT2UsS0FBckIsSUFBOEJULEdBQUdMLFNBQUgsS0FBaUIsZ0JBQVVlLFFBQTVELEVBQ0MsSUFBSVYsR0FBR1csTUFBUCxFQUNDLE9BQU8sY0FBY1gsR0FBR1YsSUFBSCxDQUFRYyxJQUE3QixDQURELEtBR0MsT0FBT0osR0FBR1YsSUFBSCxDQUFRYyxJQUFSLEdBQWUsR0FBdEI7QUFDRjs7QUFFRDtBQUNDOztBQWRGO0FBa0JBOztBQUVELFFBQU9KLEdBQUdWLElBQUgsQ0FBUWMsSUFBZjtBQUNBLENBdklEOztRQXlJUUwsYyxHQUFBQSxjO1FBQ0FmLEksR0FBQUEsSSIsImZpbGUiOiJWUC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1cmFsaXR5fSBmcm9tICcuL05vdW4nXG5pbXBvcnQgUGVyc29uICAgICAgZnJvbSAnLi9QZXJzb24nXG5pbXBvcnQgU2NoZW1hICAgICAgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQge1RlbnNlfSAgICAgZnJvbSAnLi9WZXJiJ1xuXG5mdW5jdGlvbiBWUE9iKHByb3BzKSB7XG5cblx0dGhpcy50ID0gU2NoZW1hLlZQLnRcblx0dGhpcy52ID0gU2NoZW1hLlZQLmN2XG5cblx0dGhpcy52ZXJiID0gcHJvcHMudmVyYlxuIFxuXHQvLyBHaXZlbiBhbGwgdGhlc2Ugc2V0dGluZ3MsIGEgZGV0ZXJtaW5lZCBhZHZlcnNhcnkgY2FuIHByb2JhYmx5IGNvbWJpbmUgdGhlbSBpbnRvIG5vbi1zZW5zZW5zaWNhbCBwYXR0ZXJucy5cblx0Ly8gSW5zdGVhZCBvZiBmcmV0dGluZyBhYm91dCB0aGlzIHBvc3NpYmlsaXR5LCBhIFZQIHdpbGwgbWVyZWx5IG9wZXJhdGUgdXBvbiB0aGUgZmlyc3Qgc2Vuc2libGUgcGF0dGVybiB0aGF0IGl0XG5cdC8vIHJlY29nbml6ZXMuICBQbGVhc2Ugc2VlIFZQR2VuZXJhdGVUZXh0IHRvIHVuZGVyc3RhbmQgdGhlIGV4YWN0IG1ldGhvZCBvZiByZWNvZ25pdGlvbi5cblxuXHR0aGlzLnBlcmZlY3QgPSBwcm9wcy5wZXJmZWN0IHx8IGZhbHNlXG5cdHRoaXMuY29udGludW91cyA9IHByb3BzLmNvbnRpbnVvdXMgfHwgZmFsc2Vcblx0dGhpcy50ZW5zZSA9IHByb3BzLnRlbnNlXG5cdHRoaXMucGVyc29uID0gcHJvcHMucGVyc29uXG5cdHRoaXMucGx1cmFsaXR5ID0gcHJvcHMucGx1cmFsaXR5XG5cdHRoaXMucGFzc2l2ZSA9IHByb3BzLnBhc3NpdmUgfHwgZmFsc2VcblxuXHQvLyBBIGZpbml0ZSB2ZXJiIHBocmFzZSBpcyBvbmUgdGhhdCBjYW4gYmUgdGhlIG1haW4gdmVyYiBvZiBhIHNlbnRlbmNlLiBBIG5vbi1maW5pdGVcblx0Ly8gdmVyYiBpcyBhbiBpbmZpbml0aXZlLCBnZXJ1bmQgb3IgcGFydGljaXBsZS5cblx0dGhpcy5maW5pdGUgPSBwcm9wcy5maW5pdGUgfHwgdHJ1ZVxuXHR0aGlzLmluZmluaXRpdmUgPSBwcm9wcy5pbmZpbml0aXZlIHx8IGZhbHNlXG5cbn1cblxuY29uc3QgVlBHZW5lcmF0ZVRleHQgPSAodnApID0+IHtcblxuXHRjb25zdCBnZXRQYXN0Rm9ybSA9IHZlcmJvYiA9PiAodmVyYm9iLnBhc3RGb3JtKSA/IHZlcmJvYi5wYXN0Rm9ybSA6IHZlcmJvYi5iYXNlICsgJ2VkJ1xuXG5cdGlmKHZwLnBlcmZlY3QgJiYgdnAuY29udGludW91cykge1xuXHRcdC8vc3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5GaXJzdCkgcmV0dXJuICdoYWQgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2VkJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2hhcyBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2JyZWFrXG5cblx0XHRcdC8vY2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhdmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdlZCdcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdoYXMgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9icmVha1xuXG5cdFx0XHQvL2RlZmF1bHQ6XG5cdFx0XHRcdC8vaWYgKHZwLmZ1dHVyZSkgcmV0dXJuICd3aWxsIGhhdmUgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblxuXHRcdC8vfVxuXHR9XG5cblx0Ly9lbHNlIGlmKHZwLnBlcmZlY3QpIHtcblxuXHRcdC8vaWYodnAucGFzc2l2ZSkge1xuXHRcdFx0Ly9zd2l0Y2ggKHZwLnRlbnNlKSB7XG5cdFx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHRcdC8vcmV0dXJuICdoYWQgYmVlbiAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vXHRyZXR1cm4gJ2hhcyBiZWVuICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0Ly9yZXR1cm4gJ3dpbGwgYmUgYmVpbmcgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL31cblx0XHQvL31cblxuXG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhdmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdlZCdcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdoYWQgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cblxuXHRcdFx0Ly9kZWZhdWx0OlxuXHRcdFx0XHQvL2lmICh2cC5mdXR1cmUpIHJldHVybiAnd2lsbCBoYXZlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdC8vfVxuXG5cdC8vfVxuXG5cdGVsc2UgaWYodnAuY29udGludW91cykge1xuXG5cdFx0Ly9pZih2cC5wYXNzaXZlKSB7XG5cdFx0XHQvL3N3aXRjaCAodnAudGVuc2UpIHtcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ2lzIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0XHQvL3JldHVybiAnd2lsbCBiZSBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vfVxuXHRcdC8vfVxuXG5cdFx0c3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHRjYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdGlmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ3dhcyAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0aWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHtcblx0XHRcdFx0XHQvL2lmICh2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHRcdC8vcmV0dXJuICd3YXMgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvL3JldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly99XG5cblx0XHRcdC8vY2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHQvL2NvbnN0IG5lZ2F0ZSA9IHZwLm5lZ2F0ZSA/ICdub3QgJyA6ICcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpXG5cdFx0XHRcdFx0Ly9pZiAodnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0XHRcdFx0XHQvL3JldHVybiAnYW0gJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0XHQvL3JldHVybiAnYXJlICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ2FyZSAnICsgbmVnYXRlICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdpcyAnICsgbmVnYXRlICsgdnAudmVyYi5iYXNlICsgJ2luZydcblxuXHRcdFx0Ly9kZWZhdWx0OlxuXHRcdFx0XHQvL2lmICh2cC5mdXR1cmUpIHJldHVybiAnd2lsbCBiZSAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblxuXHRcdH1cblxuXHR9XG5cblx0ZWxzZSBpZih2cC5pbmZpbml0aXZlKSB7XG5cdFx0cmV0dXJuICd0byAnICsgdnAudmVyYi5iYXNlXG5cdH1cblxuXHQvL2Vsc2UgaWYodnAucGFzc2l2ZSkge1xuXHRcdC8vc3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9pZiAodnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dlcmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9yZXR1cm4gJ2lzICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0Ly9kZWZhdWx0OiAvLyBObyB0ZW5zZSwgZnV0dXJlXG5cdFx0XHRcdC8vcmV0dXJuICd3aWxsIGJlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdC8vfVxuXHQvL31cblxuXHRlbHNlIHsgLy8gZWxzZSBzaW1wbGVcblxuXHRcdC8vY29uc3QgbmVnYXRlID0gdnAubmVnYXRlID8gJ2RvIG5vdCAnIDogJydcblx0XHRzd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdGNhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9yZXR1cm4gbmVnYXRlICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0cmV0dXJuIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cblx0XHRcdGNhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0aWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQgJiYgdnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0XHRcdFx0aWYgKHZwLm5lZ2F0ZSlcblx0XHRcdFx0XHRcdHJldHVybiAnZG9lcyBub3QgJyArIHZwLnZlcmIuYmFzZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdHJldHVybiB2cC52ZXJiLmJhc2UgKyAncydcblx0XHRcdFx0Ly9yZXR1cm4gbmVnYXRlICsgdnAudmVyYi5iYXNlXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgJyArIHZwLnZlcmIuYmFzZVxuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gdnAudmVyYi5iYXNlXG59XG5cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG4iXX0=