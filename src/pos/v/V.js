import VDict     from './VDict'
import Plurality from '../Plurality'
import POS       from '../POS'
import Tense     from '../Tense'
import Person    from '../Person'
import Schema    from '../SchemaConstants'

function V(props) {

	this.t = Schema.V.t
	this.v = Schema.V.cv

	// Sensible defaults
	this.inf = {}
	this.continuous = false
	this.passive    = false
	this.perfect    = false
	this.person     = Person.NoneSelected
	this.plurality  = Plurality.NoneSelected
	this.tense      = Tense.Present

	if(props) {

		if(typeof(props) === 'object') {
			if('base' in props) {
				this.base = props.base
				if (props.base in VDict) {
					const n = VDict[props.base]
					this.inf = n.inf
				} else {
					this.inf = props.inf || []
				}
			}

			// Very similar to the initial default. Contemplate the difference.
			this.continuous = props.continuous || false
			this.passive    = props.passive || false
			this.perfect    = props.perfect || false
			this.person     = props.person  || Person.NoneSelected
			this.plurality  = props.plurality  || Plurality.NoneSelected
			this.tense      = props.tense   || Tense.Present

		} else if(typeof(props) === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props
			if(props in VDict) {
				const n = VDict[props]
				this.inf = n.inf
			}
		}
	}

}

V.prototype = Object.create(new POS())

const VErrors = {
	'MISSING_BASE':'This verb has no base specified.',
	'REQUESTED_INFLECTION_UNDEFINED':'The requested inflection is undefined for this verb.'
}

V.prototype.analyse = function() {

	if(!('base' in this))
		return {t: undefined, e:[VErrors.MISSING_BASE]}

	let retVal

	let key_1
	let key_2

	if(this.perfect || this.passive) { // p77 past participle used if perfect or passive
		key_1 = 4 // past participle
	}

	else if(this.tense === Tense.Present) {
		key_1 = 1
		key_2 = (this.person === Person.Third && this.plurality === Plurality.Singular) ? 0 : 1
	}

	try {
		retVal = this.inf[key_1]
		if(key_2 !== undefined)
			retVal = retVal[key_2]
	} catch(e) {
		return {t: undefined, e:[VErrors.REQUESTED_INFLECTION_UNDEFINED]}
	}
	return {t:retVal, e:[]}
}

export default V
export {VErrors}

/*

 In order to access the value of a particular inflection, we must 

 preterite = 0
 present tense = 1

 plain form = 2 imperative, subjunctal, infinitival
 gerund participle aka present participle = 3
 past participle = 4

 3rd sg = 0
 plain = 1
 */