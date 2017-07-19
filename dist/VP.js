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
	this.prepend = props.prepend;

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

	var retVal = vp.verb.base;

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
					if (vp.person === _Person2.default.First) retVal = 'was ' + vp.verb.base + 'ing';
					if (vp.person === _Person2.default.Second) retVal = 'were ' + vp.verb.base + 'ing';
					//if(vp.person === Person.Third) {
					//if (vp.plurality === Plurality.Singular)
					//return 'was ' + vp.verb.base + 'ing'
					//else
					//return 'were ' + vp.verb.base + 'ing'
					//}
					break;

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
			retVal = 'to ' + vp.verb.base;
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
						retVal = getPastForm(vp.verb);
						break;

					case _Verb.Tense.Present:
						if (vp.person === _Person2.default.Third && vp.plurality === _Noun.Plurality.Singular) if (vp.negate) retVal = 'does not ' + vp.verb.base;else retVal = vp.verb.base + 's';
						//return negate + vp.verb.base
						break;

					//default:
					//if (vp.future) return 'will ' + vp.verb.base

				}
			}

	return retVal;
};

exports.VPGenerateText = VPGenerateText;
exports.VPOb = VPOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WUC5qcyJdLCJuYW1lcyI6WyJWUE9iIiwicHJvcHMiLCJ0IiwiVlAiLCJ2IiwiY3YiLCJ2ZXJiIiwicHJlcGVuZCIsInBlcmZlY3QiLCJjb250aW51b3VzIiwidGVuc2UiLCJwZXJzb24iLCJwbHVyYWxpdHkiLCJwYXNzaXZlIiwiZmluaXRlIiwiaW5maW5pdGl2ZSIsIlZQR2VuZXJhdGVUZXh0IiwidnAiLCJnZXRQYXN0Rm9ybSIsInZlcmJvYiIsInBhc3RGb3JtIiwiYmFzZSIsInJldFZhbCIsIlBhc3QiLCJGaXJzdCIsIlNlY29uZCIsIlByZXNlbnQiLCJUaGlyZCIsIlNpbmd1bGFyIiwibmVnYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCOztBQUVwQixNQUFLQyxDQUFMLEdBQVMsMEJBQU9DLEVBQVAsQ0FBVUQsQ0FBbkI7QUFDQSxNQUFLRSxDQUFMLEdBQVMsMEJBQU9ELEVBQVAsQ0FBVUUsRUFBbkI7O0FBRUEsTUFBS0MsSUFBTCxHQUFZTCxNQUFNSyxJQUFsQjtBQUNDLE1BQUtDLE9BQUwsR0FBZU4sTUFBTU0sT0FBckI7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLE1BQUtDLE9BQUwsR0FBZVAsTUFBTU8sT0FBTixJQUFpQixLQUFoQztBQUNBLE1BQUtDLFVBQUwsR0FBa0JSLE1BQU1RLFVBQU4sSUFBb0IsS0FBdEM7QUFDQSxNQUFLQyxLQUFMLEdBQWFULE1BQU1TLEtBQW5CO0FBQ0EsTUFBS0MsTUFBTCxHQUFjVixNQUFNVSxNQUFwQjtBQUNBLE1BQUtDLFNBQUwsR0FBaUJYLE1BQU1XLFNBQXZCO0FBQ0EsTUFBS0MsT0FBTCxHQUFlWixNQUFNWSxPQUFOLElBQWlCLEtBQWhDOztBQUVBO0FBQ0E7QUFDQSxNQUFLQyxNQUFMLEdBQWNiLE1BQU1hLE1BQU4sSUFBZ0IsSUFBOUI7QUFDQSxNQUFLQyxVQUFMLEdBQWtCZCxNQUFNYyxVQUFOLElBQW9CLEtBQXRDO0FBRUE7O0FBRUQsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7O0FBRTlCLEtBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQVdDLE9BQU9DLFFBQVIsR0FBb0JELE9BQU9DLFFBQTNCLEdBQXNDRCxPQUFPRSxJQUFQLEdBQWMsSUFBOUQ7QUFBQSxFQUFwQjs7QUFFQSxLQUFJQyxTQUFTTCxHQUFHWCxJQUFILENBQVFlLElBQXJCOztBQUVBLEtBQUdKLEdBQUdULE9BQUgsSUFBY1MsR0FBR1IsVUFBcEIsRUFBZ0MsQ0FrQi9CO0FBakJBO0FBQ0M7QUFDQztBQUNBO0FBQ0E7QUFDQTs7QUFFRDtBQUNDO0FBQ0E7QUFDQTtBQUNBOztBQUVEO0FBQ0M7O0FBRUY7OztBQUdEOztBQUVDO0FBQ0M7QUFDQztBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNEOzs7QUFHQTtBQUNDO0FBQ0M7QUFDQTtBQUNBOzs7QUFHRDtBQUNDO0FBQ0Y7O0FBRUQ7O0FBN0NBLE1BK0NLLElBQUdRLEdBQUdSLFVBQU4sRUFBa0I7O0FBRXRCO0FBQ0M7QUFDQztBQUNDO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNEOztBQUVBLFdBQU9RLEdBQUdQLEtBQVY7QUFDQyxTQUFLLFlBQU1hLElBQVg7QUFDQyxTQUFHTixHQUFHTixNQUFILEtBQWMsaUJBQU9hLEtBQXhCLEVBQStCRixTQUFTLFNBQVNMLEdBQUdYLElBQUgsQ0FBUWUsSUFBakIsR0FBd0IsS0FBakM7QUFDL0IsU0FBR0osR0FBR04sTUFBSCxLQUFjLGlCQUFPYyxNQUF4QixFQUFnQ0gsU0FBUyxVQUFVTCxHQUFHWCxJQUFILENBQVFlLElBQWxCLEdBQXlCLEtBQWxDO0FBQ2hDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNBOztBQUVEO0FBQ0M7QUFDQTtBQUNDO0FBQ0M7QUFDRDtBQUNDOztBQUVGO0FBQ0E7O0FBRUQ7QUFDQzs7QUF4QkY7QUE0QkEsR0F6Q0ksTUEyQ0EsSUFBR0osR0FBR0YsVUFBTixFQUFrQjtBQUN0Qk8sWUFBUyxRQUFRTCxHQUFHWCxJQUFILENBQVFlLElBQXpCO0FBQ0E7O0FBRUQ7QUFDQztBQUNDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRjtBQUNDO0FBQ0Q7QUFDQztBQUNGO0FBQ0Q7O0FBaEJLLE9Ba0JBO0FBQUU7O0FBRU47QUFDQSxZQUFPSixHQUFHUCxLQUFWO0FBQ0MsVUFBSyxZQUFNYSxJQUFYO0FBQ0M7QUFDQUQsZUFBU0osWUFBWUQsR0FBR1gsSUFBZixDQUFUO0FBQ0E7O0FBRUQsVUFBSyxZQUFNb0IsT0FBWDtBQUNDLFVBQUdULEdBQUdOLE1BQUgsS0FBYyxpQkFBT2dCLEtBQXJCLElBQThCVixHQUFHTCxTQUFILEtBQWlCLGdCQUFVZ0IsUUFBNUQsRUFDQyxJQUFJWCxHQUFHWSxNQUFQLEVBQ0NQLFNBQVMsY0FBY0wsR0FBR1gsSUFBSCxDQUFRZSxJQUEvQixDQURELEtBR0NDLFNBQVNMLEdBQUdYLElBQUgsQ0FBUWUsSUFBUixHQUFlLEdBQXhCO0FBQ0Y7QUFDQTs7QUFFRDtBQUNDOztBQWhCRjtBQW9CQTs7QUFFRCxRQUFPQyxNQUFQO0FBQ0EsQ0E1SUQ7O1FBOElRTixjLEdBQUFBLGM7UUFDQWhCLEksR0FBQUEsSSIsImZpbGUiOiJWUC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1cmFsaXR5fSBmcm9tICcuL05vdW4nXG5pbXBvcnQgUGVyc29uICAgICAgZnJvbSAnLi9QZXJzb24nXG5pbXBvcnQgU2NoZW1hICAgICAgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQge1RlbnNlfSAgICAgZnJvbSAnLi9WZXJiJ1xuXG5mdW5jdGlvbiBWUE9iKHByb3BzKSB7XG5cblx0dGhpcy50ID0gU2NoZW1hLlZQLnRcblx0dGhpcy52ID0gU2NoZW1hLlZQLmN2XG5cblx0dGhpcy52ZXJiID0gcHJvcHMudmVyYlxuIFx0dGhpcy5wcmVwZW5kID0gcHJvcHMucHJlcGVuZFxuXG5cdC8vIEdpdmVuIGFsbCB0aGVzZSBzZXR0aW5ncywgYSBkZXRlcm1pbmVkIGFkdmVyc2FyeSBjYW4gcHJvYmFibHkgY29tYmluZSB0aGVtIGludG8gbm9uLXNlbnNlbnNpY2FsIHBhdHRlcm5zLlxuXHQvLyBJbnN0ZWFkIG9mIGZyZXR0aW5nIGFib3V0IHRoaXMgcG9zc2liaWxpdHksIGEgVlAgd2lsbCBtZXJlbHkgb3BlcmF0ZSB1cG9uIHRoZSBmaXJzdCBzZW5zaWJsZSBwYXR0ZXJuIHRoYXQgaXRcblx0Ly8gcmVjb2duaXplcy4gIFBsZWFzZSBzZWUgVlBHZW5lcmF0ZVRleHQgdG8gdW5kZXJzdGFuZCB0aGUgZXhhY3QgbWV0aG9kIG9mIHJlY29nbml0aW9uLlxuXG5cdHRoaXMucGVyZmVjdCA9IHByb3BzLnBlcmZlY3QgfHwgZmFsc2Vcblx0dGhpcy5jb250aW51b3VzID0gcHJvcHMuY29udGludW91cyB8fCBmYWxzZVxuXHR0aGlzLnRlbnNlID0gcHJvcHMudGVuc2Vcblx0dGhpcy5wZXJzb24gPSBwcm9wcy5wZXJzb25cblx0dGhpcy5wbHVyYWxpdHkgPSBwcm9wcy5wbHVyYWxpdHlcblx0dGhpcy5wYXNzaXZlID0gcHJvcHMucGFzc2l2ZSB8fCBmYWxzZVxuXG5cdC8vIEEgZmluaXRlIHZlcmIgcGhyYXNlIGlzIG9uZSB0aGF0IGNhbiBiZSB0aGUgbWFpbiB2ZXJiIG9mIGEgc2VudGVuY2UuIEEgbm9uLWZpbml0ZVxuXHQvLyB2ZXJiIGlzIGFuIGluZmluaXRpdmUsIGdlcnVuZCBvciBwYXJ0aWNpcGxlLlxuXHR0aGlzLmZpbml0ZSA9IHByb3BzLmZpbml0ZSB8fCB0cnVlXG5cdHRoaXMuaW5maW5pdGl2ZSA9IHByb3BzLmluZmluaXRpdmUgfHwgZmFsc2VcblxufVxuXG5jb25zdCBWUEdlbmVyYXRlVGV4dCA9ICh2cCkgPT4ge1xuXG5cdGNvbnN0IGdldFBhc3RGb3JtID0gdmVyYm9iID0+ICh2ZXJib2IucGFzdEZvcm0pID8gdmVyYm9iLnBhc3RGb3JtIDogdmVyYm9iLmJhc2UgKyAnZWQnXG5cblx0bGV0IHJldFZhbCA9IHZwLnZlcmIuYmFzZVxuXG5cdGlmKHZwLnBlcmZlY3QgJiYgdnAuY29udGludW91cykge1xuXHRcdC8vc3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5GaXJzdCkgcmV0dXJuICdoYWQgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2VkJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2hhcyBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2JyZWFrXG5cblx0XHRcdC8vY2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhdmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdlZCdcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdoYXMgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9icmVha1xuXG5cdFx0XHQvL2RlZmF1bHQ6XG5cdFx0XHRcdC8vaWYgKHZwLmZ1dHVyZSkgcmV0dXJuICd3aWxsIGhhdmUgYmVlbiAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblxuXHRcdC8vfVxuXHR9XG5cblx0Ly9lbHNlIGlmKHZwLnBlcmZlY3QpIHtcblxuXHRcdC8vaWYodnAucGFzc2l2ZSkge1xuXHRcdFx0Ly9zd2l0Y2ggKHZwLnRlbnNlKSB7XG5cdFx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHRcdC8vcmV0dXJuICdoYWQgYmVlbiAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vXHRyZXR1cm4gJ2hhcyBiZWVuICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0Ly9yZXR1cm4gJ3dpbGwgYmUgYmVpbmcgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL31cblx0XHQvL31cblxuXG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhdmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uU2Vjb25kKSByZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdlZCdcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkgcmV0dXJuICdoYWQgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cblxuXHRcdFx0Ly9kZWZhdWx0OlxuXHRcdFx0XHQvL2lmICh2cC5mdXR1cmUpIHJldHVybiAnd2lsbCBoYXZlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdC8vfVxuXG5cdC8vfVxuXG5cdGVsc2UgaWYodnAuY29udGludW91cykge1xuXG5cdFx0Ly9pZih2cC5wYXNzaXZlKSB7XG5cdFx0XHQvL3N3aXRjaCAodnAudGVuc2UpIHtcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ2lzIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0XHQvL3JldHVybiAnd2lsbCBiZSBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vfVxuXHRcdC8vfVxuXG5cdFx0c3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHRjYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdGlmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXRWYWwgPSAnd2FzICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHRpZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldFZhbCA9ICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSB7XG5cdFx0XHRcdFx0Ly9pZiAodnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0XHRcdFx0XHQvL3JldHVybiAnd2FzICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ3dlcmUgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vfVxuXHRcdFx0XHRicmVha1xuXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9jb25zdCBuZWdhdGUgPSB2cC5uZWdhdGUgPyAnbm90ICcgOiAnJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KVxuXHRcdFx0XHRcdC8vaWYgKHZwLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ2FtICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ2FyZSAnICsgbmVnYXRlICsgdnAudmVyYi5iYXNlICsgJ2luZydcblxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0dXJuICdhcmUgJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHJldHVybiAnaXMgJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgYmUgJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHR9XG5cblx0fVxuXG5cdGVsc2UgaWYodnAuaW5maW5pdGl2ZSkge1xuXHRcdHJldFZhbCA9ICd0byAnICsgdnAudmVyYi5iYXNlXG5cdH1cblxuXHQvL2Vsc2UgaWYodnAucGFzc2l2ZSkge1xuXHRcdC8vc3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9pZiAodnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9lbHNlXG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ3dlcmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9yZXR1cm4gJ2lzICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0Ly9kZWZhdWx0OiAvLyBObyB0ZW5zZSwgZnV0dXJlXG5cdFx0XHRcdC8vcmV0dXJuICd3aWxsIGJlICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdC8vfVxuXHQvL31cblxuXHRlbHNlIHsgLy8gZWxzZSBzaW1wbGVcblxuXHRcdC8vY29uc3QgbmVnYXRlID0gdnAubmVnYXRlID8gJ2RvIG5vdCAnIDogJydcblx0XHRzd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdGNhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0Ly9yZXR1cm4gbmVnYXRlICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0cmV0VmFsID0gZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0YnJlYWtcblxuXHRcdFx0Y2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHRpZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCAmJiB2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHRpZiAodnAubmVnYXRlKVxuXHRcdFx0XHRcdFx0cmV0VmFsID0gJ2RvZXMgbm90ICcgKyB2cC52ZXJiLmJhc2Vcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRyZXRWYWwgPSB2cC52ZXJiLmJhc2UgKyAncydcblx0XHRcdFx0Ly9yZXR1cm4gbmVnYXRlICsgdnAudmVyYi5iYXNlXG5cdFx0XHRcdGJyZWFrXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgJyArIHZwLnZlcmIuYmFzZVxuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gcmV0VmFsXG59XG5cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG4iXX0=