import Person    from './Person'
import Schema    from './SchemaConstants'
import VDictOb   from './VDict'
import Plurality from '../pos/Plurality'

function VOb(props) {
	this.t = Schema.V.t
	this.v = Schema.V.cv

	if ('base' in props && props.base in VDictOb) {
		const n = VDictOb[props.base]
		this.inf    = n.inf
	} else {
		this.inf    = props.inf || []
	}
	this.continuous = props.continuous || false
	this.passive    = props.passive || false
	this.perfect    = props.perfect || false
	this.person     = props.person  || Person.NoneSelected
	this.plurality  = props.plurality  || Plurality.NoneSelected
	this.tense      = props.tense   || Tense.Present
}

const VErrors = {
	'REQUESTED_INFLECTION_UNDEFINED':'The requested inflection is undefined for this noun.'
}

const Tense = {
	'NoneSelected':0,
	'Past':      100,
	'Present':   200,
}

const VGenerateText = (vob) => {

	let retVal

	let key_1
	let key_2

	if(vob.perfect || vob.passive) { // p77 past participle used if perfect or passive
		key_1 = 4 // past participle
	}

	else if(vob.tense === Tense.Present) {
		key_1 = 1
		key_2 = (vob.person === Person.Third && vob.plurality === Plurality.Singular) ? 0 : 1
	}

	try {
		retVal = vob.inf[key_1][key_2]
	} catch(e) {
		retVal = {e:VErrors.REQUESTED_INFLECTION_UNDEFINED}
	}
	return retVal
}

export {Tense}
export {VOb}
export {VErrors}
export {VGenerateText}

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