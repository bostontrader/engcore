import NDictOb from './NDict'
import Schema  from './SchemaConstants'

function NOb(props) {
	this.t = Schema.N.t
	this.v = Schema.N.cv

	if ('base' in props && props.base in NDictOb) {
		const n = NDictOb[props.base]
		this.inf    = n.inf
		this.proper = n.proper
	} else {
		this.inf    = props.inf || {}
		this.proper = props.proper || false
	}

	this.plurality = props.plurality || Plurality.Singular
	this.genative  = props.genative || false
}

const Plurality = {
	'NoneSelected':1,
	'Singular':  100,
	'Plural':    200,
}

// 326. can be the head of a NP
const NErrors = {
	'REQUESTED_INFLECTION_UNDEFINED':'The requested inflection is undefined for this noun.'
}

const NGenerateText = (nob) => {

	let retVal

	let inf_key = 's' // by default we will use the singular, non-genative inflection
	switch(nob.plurality) {
		case Plurality.Plural:
			inf_key = nob.genative ? 'pg' : 'p'
			break
		default:
			inf_key = nob.genative ? 'sg' : 's'
	}

	if(inf_key in nob.inf)
		retVal = nob.inf[inf_key]
	else
		retVal = {e:NErrors.REQUESTED_INFLECTION_UNDEFINED}


	if(!(retVal.e))
		retVal = (nob.proper) ? retVal.charAt(0).toUpperCase() + retVal.slice(1) : retVal

	return retVal
}

export {NErrors}
export {NGenerateText}
export {NOb}
export {Plurality}
