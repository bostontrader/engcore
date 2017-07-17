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

					//case Tense.Present:
					//if(vp.person === Person.Third && vp.plurality === Plurality.Singular)
					//if (vp.negate)
					//return 'does not ' + vp.verb.base
					//else
					//return vp.verb.base + 's'

					//return negate + vp.verb.base

					//default:
					//if (vp.future) return 'will ' + vp.verb.base

				}
			}

	return vp.verb.base;
};

exports.VPGenerateText = VPGenerateText;
exports.VPOb = VPOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WUC5qcyJdLCJuYW1lcyI6WyJWUE9iIiwicHJvcHMiLCJ0IiwiVlAiLCJ2IiwiY3YiLCJ2ZXJiIiwicGVyZmVjdCIsImNvbnRpbnVvdXMiLCJ0ZW5zZSIsInBlcnNvbiIsInBhc3NpdmUiLCJmaW5pdGUiLCJpbmZpbml0aXZlIiwiVlBHZW5lcmF0ZVRleHQiLCJ2cCIsImdldFBhc3RGb3JtIiwidmVyYm9iIiwicGFzdEZvcm0iLCJiYXNlIiwiUGFzdCIsIkZpcnN0IiwiU2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCOztBQUVwQixNQUFLQyxDQUFMLEdBQVMsMEJBQU9DLEVBQVAsQ0FBVUQsQ0FBbkI7QUFDQSxNQUFLRSxDQUFMLEdBQVMsMEJBQU9ELEVBQVAsQ0FBVUUsRUFBbkI7O0FBRUEsTUFBS0MsSUFBTCxHQUFZTCxNQUFNSyxJQUFsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBS0MsT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCLEtBQWhDO0FBQ0EsTUFBS0MsVUFBTCxHQUFrQlAsTUFBTU8sVUFBTixJQUFvQixLQUF0QztBQUNBLE1BQUtDLEtBQUwsR0FBYVIsTUFBTVEsS0FBbkI7QUFDQSxNQUFLQyxNQUFMLEdBQWNULE1BQU1TLE1BQXBCO0FBQ0EsTUFBS0MsT0FBTCxHQUFlVixNQUFNVSxPQUFOLElBQWlCLEtBQWhDOztBQUVBO0FBQ0E7QUFDQSxNQUFLQyxNQUFMLEdBQWNYLE1BQU1XLE1BQU4sSUFBZ0IsSUFBOUI7QUFDQSxNQUFLQyxVQUFMLEdBQWtCWixNQUFNWSxVQUFOLElBQW9CLEtBQXRDO0FBRUE7O0FBRUQsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQVE7O0FBRTlCLEtBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLFNBQVdDLE9BQU9DLFFBQVIsR0FBb0JELE9BQU9DLFFBQTNCLEdBQXNDRCxPQUFPRSxJQUFQLEdBQWMsSUFBOUQ7QUFBQSxFQUFwQjs7QUFFQSxLQUFHSixHQUFHUixPQUFILElBQWNRLEdBQUdQLFVBQXBCLEVBQWdDLENBa0IvQjtBQWpCQTtBQUNDO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7QUFDQztBQUNBO0FBQ0E7QUFDQTs7QUFFRDtBQUNDOztBQUVGOzs7QUFHRDs7QUFFQztBQUNDO0FBQ0M7QUFDQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRDs7O0FBR0E7QUFDQztBQUNDO0FBQ0E7QUFDQTs7O0FBR0Q7QUFDQztBQUNGOztBQUVEOztBQTdDQSxNQStDSyxJQUFHTyxHQUFHUCxVQUFOLEVBQWtCOztBQUV0QjtBQUNDO0FBQ0M7QUFDQztBQUNEO0FBQ0M7QUFDRDtBQUNDO0FBQ0Y7QUFDRDs7QUFFQSxXQUFPTyxHQUFHTixLQUFWO0FBQ0MsU0FBSyxZQUFNVyxJQUFYO0FBQ0MsU0FBR0wsR0FBR0wsTUFBSCxLQUFjLGlCQUFPVyxLQUF4QixFQUErQixPQUFPLFNBQVNOLEdBQUdULElBQUgsQ0FBUWEsSUFBakIsR0FBd0IsS0FBL0I7QUFDL0IsU0FBR0osR0FBR0wsTUFBSCxLQUFjLGlCQUFPWSxNQUF4QixFQUFnQyxPQUFPLFVBQVVQLEdBQUdULElBQUgsQ0FBUWEsSUFBbEIsR0FBeUIsS0FBaEM7QUFDaEM7QUFDQztBQUNDO0FBQ0Q7QUFDQztBQUNGOztBQUVEO0FBQ0M7QUFDQTtBQUNDO0FBQ0M7QUFDRDtBQUNDOztBQUVGO0FBQ0E7O0FBRUQ7QUFDQzs7QUF2QkY7QUEyQkEsR0F4Q0ksTUEwQ0EsSUFBR0osR0FBR0YsVUFBTixFQUFrQjtBQUN0QixVQUFPLFFBQVFFLEdBQUdULElBQUgsQ0FBUWEsSUFBdkI7QUFDQTs7QUFFRDtBQUNDO0FBQ0M7QUFDQztBQUNDO0FBQ0Q7QUFDQztBQUNGO0FBQ0M7QUFDRDtBQUNDO0FBQ0Y7QUFDRDs7QUFoQkssT0FrQkE7QUFBRTs7QUFFTjs7QUFFQSxZQUFPSixHQUFHTixLQUFWO0FBQ0MsVUFBSyxZQUFNVyxJQUFYO0FBQ0M7QUFDQSxhQUFPSixZQUFZRCxHQUFHVCxJQUFmLENBQVA7O0FBRUQ7QUFDQztBQUNDO0FBQ0M7QUFDRDtBQUNDOztBQUVGOztBQUVEO0FBQ0M7O0FBZkY7QUFtQkE7O0FBRUQsUUFBT1MsR0FBR1QsSUFBSCxDQUFRYSxJQUFmO0FBQ0EsQ0F6SUQ7O1FBMklRTCxjLEdBQUFBLGM7UUFDQWQsSSxHQUFBQSxJIiwiZmlsZSI6IlZQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVyYWxpdHl9IGZyb20gJy4vTm91bidcbmltcG9ydCBQZXJzb24gICAgICBmcm9tICcuL1BlcnNvbidcbmltcG9ydCBTY2hlbWEgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCB7VGVuc2V9ICAgICBmcm9tICcuL1ZlcmInXG5cbmZ1bmN0aW9uIFZQT2IocHJvcHMpIHtcblxuXHR0aGlzLnQgPSBTY2hlbWEuVlAudFxuXHR0aGlzLnYgPSBTY2hlbWEuVlAuY3ZcblxuXHR0aGlzLnZlcmIgPSBwcm9wcy52ZXJiXG4gXG5cdC8vIEdpdmVuIGFsbCB0aGVzZSBzZXR0aW5ncywgYSBkZXRlcm1pbmVkIGFkdmVyc2FyeSBjYW4gcHJvYmFibHkgY29tYmluZSB0aGVtIGludG8gbm9uLXNlbnNlbnNpY2FsIHBhdHRlcm5zLlxuXHQvLyBJbnN0ZWFkIG9mIGZyZXR0aW5nIGFib3V0IHRoaXMgcG9zc2liaWxpdHksIGEgVlAgd2lsbCBtZXJlbHkgb3BlcmF0ZSB1cG9uIHRoZSBmaXJzdCBzZW5zaWJsZSBwYXR0ZXJuIHRoYXQgaXRcblx0Ly8gcmVjb2duaXplcy4gIFBsZWFzZSBzZWUgVlBHZW5lcmF0ZVRleHQgdG8gdW5kZXJzdGFuZCB0aGUgZXhhY3QgbWV0aG9kIG9mIHJlY29nbml0aW9uLlxuXG5cdHRoaXMucGVyZmVjdCA9IHByb3BzLnBlcmZlY3QgfHwgZmFsc2Vcblx0dGhpcy5jb250aW51b3VzID0gcHJvcHMuY29udGludW91cyB8fCBmYWxzZVxuXHR0aGlzLnRlbnNlID0gcHJvcHMudGVuc2Vcblx0dGhpcy5wZXJzb24gPSBwcm9wcy5wZXJzb25cblx0dGhpcy5wYXNzaXZlID0gcHJvcHMucGFzc2l2ZSB8fCBmYWxzZVxuXG5cdC8vIEEgZmluaXRlIHZlcmIgcGhyYXNlIGlzIG9uZSB0aGF0IGNhbiBiZSB0aGUgbWFpbiB2ZXJiIG9mIGEgc2VudGVuY2UuIEEgbm9uLWZpbml0ZVxuXHQvLyB2ZXJiIGlzIGFuIGluZmluaXRpdmUsIGdlcnVuZCBvciBwYXJ0aWNpcGxlLlxuXHR0aGlzLmZpbml0ZSA9IHByb3BzLmZpbml0ZSB8fCB0cnVlXG5cdHRoaXMuaW5maW5pdGl2ZSA9IHByb3BzLmluZmluaXRpdmUgfHwgZmFsc2VcblxufVxuXG5jb25zdCBWUEdlbmVyYXRlVGV4dCA9ICh2cCkgPT4ge1xuXG5cdGNvbnN0IGdldFBhc3RGb3JtID0gdmVyYm9iID0+ICh2ZXJib2IucGFzdEZvcm0pID8gdmVyYm9iLnBhc3RGb3JtIDogdmVyYm9iLmJhc2UgKyAnZWQnXG5cblx0aWYodnAucGVyZmVjdCAmJiB2cC5jb250aW51b3VzKSB7XG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLkZpcnN0KSByZXR1cm4gJ2hhZCBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlNlY29uZCkgcmV0dXJuICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnZWQnXG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uVGhpcmQpIHJldHVybiAnaGFzIGJlZW4gJyArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cdFx0XHRcdC8vYnJlYWtcblxuXHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpIHJldHVybiAnaGF2ZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2VkJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2hhcyBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2JyZWFrXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgaGF2ZSBiZWVuICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0Ly99XG5cdH1cblxuXHQvL2Vsc2UgaWYodnAucGVyZmVjdCkge1xuXG5cdFx0Ly9pZih2cC5wYXNzaXZlKSB7XG5cdFx0XHQvL3N3aXRjaCAodnAudGVuc2UpIHtcblx0XHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdFx0Ly9yZXR1cm4gJ2hhZCBiZWVuICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9cdHJldHVybiAnaGFzIGJlZW4gJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vZGVmYXVsdDogLy8gTm8gdGVuc2UsIGZ1dHVyZVxuXHRcdFx0XHQvL3JldHVybiAnd2lsbCBiZSBiZWluZyAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vfVxuXHRcdC8vfVxuXG5cblx0XHQvL3N3aXRjaCh2cC50ZW5zZSkge1xuXHRcdFx0Ly9jYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdC8vaWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpIHJldHVybiAnaGF2ZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2VkJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2hhZCAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblxuXG5cdFx0XHQvL2RlZmF1bHQ6XG5cdFx0XHRcdC8vaWYgKHZwLmZ1dHVyZSkgcmV0dXJuICd3aWxsIGhhdmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0Ly99XG5cblx0Ly99XG5cblx0ZWxzZSBpZih2cC5jb250aW51b3VzKSB7XG5cblx0XHQvL2lmKHZwLnBhc3NpdmUpIHtcblx0XHRcdC8vc3dpdGNoICh2cC50ZW5zZSkge1xuXHRcdFx0XHQvL2Nhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0XHQvL3JldHVybiAnd2FzIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0XHQvL3JldHVybiAnaXMgYmVpbmcgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdC8vZGVmYXVsdDogLy8gTm8gdGVuc2UsIGZ1dHVyZVxuXHRcdFx0XHRcdC8vcmV0dXJuICd3aWxsIGJlIGJlaW5nICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0Ly99XG5cdFx0Ly99XG5cblx0XHRzd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdGNhc2UgVGVuc2UuUGFzdDpcblx0XHRcdFx0aWYodnAucGVyc29uID09PSBQZXJzb24uRmlyc3QpIHJldHVybiAnd2FzICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHRpZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnd2VyZSAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCkge1xuXHRcdFx0XHRcdC8vaWYgKHZwLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlNpbmd1bGFyKVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gJ3dhcyAnICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vcmV0dXJuICd3ZXJlICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL31cblxuXHRcdFx0Ly9jYXNlIFRlbnNlLlByZXNlbnQ6XG5cdFx0XHRcdC8vY29uc3QgbmVnYXRlID0gdnAubmVnYXRlID8gJ25vdCAnIDogJydcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5GaXJzdClcblx0XHRcdFx0XHQvL2lmICh2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHRcdC8vcmV0dXJuICdhbSAnICsgbmVnYXRlICsgdnAudmVyYi5iYXNlICsgJ2luZydcblx0XHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHRcdC8vcmV0dXJuICdhcmUgJyArIG5lZ2F0ZSArIHZwLnZlcmIuYmFzZSArICdpbmcnXG5cblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5TZWNvbmQpIHJldHVybiAnYXJlICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXHRcdFx0XHQvL2lmKHZwLnBlcnNvbiA9PT0gUGVyc29uLlRoaXJkKSByZXR1cm4gJ2lzICcgKyBuZWdhdGUgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0XHQvL2RlZmF1bHQ6XG5cdFx0XHRcdC8vaWYgKHZwLmZ1dHVyZSkgcmV0dXJuICd3aWxsIGJlICcgKyB2cC52ZXJiLmJhc2UgKyAnaW5nJ1xuXG5cdFx0fVxuXG5cdH1cblxuXHRlbHNlIGlmKHZwLmluZmluaXRpdmUpIHtcblx0XHRyZXR1cm4gJ3RvICcgKyB2cC52ZXJiLmJhc2Vcblx0fVxuXG5cdC8vZWxzZSBpZih2cC5wYXNzaXZlKSB7XG5cdFx0Ly9zd2l0Y2godnAudGVuc2UpIHtcblx0XHRcdC8vY2FzZSBUZW5zZS5QYXN0OlxuXHRcdFx0XHQvL2lmICh2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHQvL3JldHVybiAnd2FzICcgKyBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXHRcdFx0XHQvL2Vsc2Vcblx0XHRcdFx0XHQvL3JldHVybiAnd2VyZSAnICsgZ2V0UGFzdEZvcm0odnAudmVyYilcblx0XHRcdC8vY2FzZSBUZW5zZS5QcmVzZW50OlxuXHRcdFx0XHQvL3JldHVybiAnaXMgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHQvL2RlZmF1bHQ6IC8vIE5vIHRlbnNlLCBmdXR1cmVcblx0XHRcdFx0Ly9yZXR1cm4gJ3dpbGwgYmUgJyArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0Ly99XG5cdC8vfVxuXG5cdGVsc2UgeyAvLyBlbHNlIHNpbXBsZVxuXG5cdFx0Ly9jb25zdCBuZWdhdGUgPSB2cC5uZWdhdGUgPyAnZG8gbm90ICcgOiAnJ1xuXG5cdFx0c3dpdGNoKHZwLnRlbnNlKSB7XG5cdFx0XHRjYXNlIFRlbnNlLlBhc3Q6XG5cdFx0XHRcdC8vcmV0dXJuIG5lZ2F0ZSArIGdldFBhc3RGb3JtKHZwLnZlcmIpXG5cdFx0XHRcdHJldHVybiBnZXRQYXN0Rm9ybSh2cC52ZXJiKVxuXG5cdFx0XHQvL2Nhc2UgVGVuc2UuUHJlc2VudDpcblx0XHRcdFx0Ly9pZih2cC5wZXJzb24gPT09IFBlcnNvbi5UaGlyZCAmJiB2cC5wbHVyYWxpdHkgPT09IFBsdXJhbGl0eS5TaW5ndWxhcilcblx0XHRcdFx0XHQvL2lmICh2cC5uZWdhdGUpXG5cdFx0XHRcdFx0XHQvL3JldHVybiAnZG9lcyBub3QgJyArIHZwLnZlcmIuYmFzZVxuXHRcdFx0XHRcdC8vZWxzZVxuXHRcdFx0XHRcdFx0Ly9yZXR1cm4gdnAudmVyYi5iYXNlICsgJ3MnXG5cblx0XHRcdFx0Ly9yZXR1cm4gbmVnYXRlICsgdnAudmVyYi5iYXNlXG5cblx0XHRcdC8vZGVmYXVsdDpcblx0XHRcdFx0Ly9pZiAodnAuZnV0dXJlKSByZXR1cm4gJ3dpbGwgJyArIHZwLnZlcmIuYmFzZVxuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gdnAudmVyYi5iYXNlXG59XG5cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG4iXX0=