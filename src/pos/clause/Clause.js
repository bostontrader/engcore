import POS    from '../POS'
import Schema from '../SchemaConstants'

// p51
// use secondary, plain-form if the clause is...
// imperative, subjunctive, to-infinitival, -or- bare infinitival

// look at the clause config and determine finite, non-finite
// finite clauses have as a head a primary form of a verb  -or- a plain form used in imperative or subjunctive.
// non-finite have as a head a gerund-participle or past participle form -or- a plain form used in the infinitival
function Clause(props) {
	this.t = Schema.Clause.t
	this.v = Schema.Clause.cv

	// p50 the head of a clause, aka the predicate is a VP
	if(props) {
		if('head' in props)
			this.head = props.head
		if('subject' in props)
			this.subject = props.subject
		if('object' in props)
			this.object = props.object
	}
}

Clause.prototype = Object.create(new POS())

const ClauseErrors = {
	'MISSING_HEAD':'This clause must have a head, aka predicate.'
}

Clause.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[ClauseErrors.MISSING_HEAD]}

	let retVal = ''

	if('subject' in this)
		retVal = this.subject.analyse().t + ' ' + this.head.analyse().t
	else
		retVal = this.head.analyse().t

	if('object' in this)
		retVal += ' ' + this.object.analyse().t

	return {t:retVal, e:[]}

}

export default Clause
export {ClauseErrors}
