import POS    from '../POS'
import Schema from '../SchemaConstants'

function Clause(props) {
	this.t = Schema.Clause.t
	this.v = Schema.Clause.cv

	// p50 the head of a clause, aka the predicate is a VP
	if(props) {
		if('head' in props)
			this.head = props.head
		if('subject' in props)
			this.subject = props.subject
	}
}

Clause.prototype = Object.create(new POS())

const ClauseErrors = {
	'MISSING_HEAD':'This clause must have a head, aka predicate.',
	'MISSING_SUBJECT':'This clause must have a subject.'
}

Clause.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[ClauseErrors.MISSING_HEAD]}

	if(!('subject' in this))
		return {t:undefined, e:[ClauseErrors.MISSING_SUBJECT]}

	let retVal = this.subject.analyse().t + ' ' + this.head.analyse().t
	return {t:retVal, e:[]}

}

export default Clause
export {ClauseErrors}
