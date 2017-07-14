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