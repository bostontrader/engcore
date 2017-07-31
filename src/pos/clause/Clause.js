import POS    from '../POS'
import Schema from '../SchemaConstants'

function Clause(props) {
	this.t = Schema.Clause.t
	this.v = Schema.Clause.cv

	// p50 the head of a clause, aka the predicate is a VP
	if(props) {
		if('head' in props)
			this.head = props.head
		if('np' in props)
			this.np = props.np
	}
}

Clause.prototype = Object.create(new POS())

const ClauseErrors = {
	'MISSING_HEAD':'This clause must have a head, aka predicate.',
	'MISSING_NP':'This clause must have a noun phrase.'
}

Clause.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[ClauseErrors.MISSING_HEAD]}

	if(!('np' in this))
		return {t:undefined, e:[ClauseErrors.MISSING_NP]}

	let retVal = this.np.analyse().t + ' ' + this.head.analyse().t
	return {t:retVal, e:[]}

}

export default Clause
export {ClauseErrors}
