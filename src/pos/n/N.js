import NDict     from './NDict'
import Plurality from '../Plurality'
import POS       from '../POS'
import Schema    from '../../SchemaConstants'

function N(props) {

	this.t = Schema.N.t
	this.v = Schema.N.cv

	// Sensible defaults.
	this.inf = {}
	this.plurality = Plurality.Singular
	this.proper = false
	this.genative  = false

	if(props) {
		if(typeof(props) === 'object') {
			if('base' in props) {
				this.base = props
				if(props.base in NDict) {
					const n = NDict[props.base]
					this.inf    = n.inf
					this.proper = n.proper
				} else {
					this.inf    = props.inf || {}
					this.proper = props.proper || false
				}
				this.plurality = props.plurality || Plurality.Singular
				this.genative  = props.genative || false
			}
		} else if(typeof(props) === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props
			if(props in NDict) {
				const n = NDict[props]
				this.inf = n.inf
				this.proper = n.proper
			}
		}
	}
}

N.prototype = Object.create(new POS());

const NErrors = {
	'MISSING_BASE':'This noun has no base specified.',
	'REQUESTED_INFLECTION_UNDEFINED':'The requested inflection is undefined for this noun. Perhaps it was not found in the dictionary.'
}

N.prototype.analyse = function() {

	if(!('base' in this))
		return {t: undefined, e:[NErrors.MISSING_BASE]}

	let inf_key = 's' // by default we will use the singular, non-genative inflection
	switch(this.plurality) {
		case Plurality.Plural:
			inf_key = this.genative ? 'pg' : 'p'
			break
		default:
			inf_key = this.genative ? 'sg' : 's'
	}

	if(!(inf_key in this.inf))
		return {t: undefined, e:[NErrors.REQUESTED_INFLECTION_UNDEFINED]}

	let retVal = this.inf[inf_key]

	retVal = (this.proper) ? retVal.charAt(0).toUpperCase() + retVal.slice(1) : retVal
	return {t: retVal, e:[]}
}

export default N
export {NErrors}
