import POS    from '../POS'
import Schema from '../SchemaConstants'

// 326,327 has a N or Pro as a head and various dependents. Such as:
// * the determinatives: a, the, every
// * pre-head AdjP
// * relative clauses
// 329 A nom can be the head of a NP or its pre-head dependent
function Nom(props) {
	this.t = Schema.Nom.t
	this.v = Schema.Nom.cv

	if(props) {
		if('head' in props)
			this.head = props.head
		if('modifier' in props)
			this.modifier = props.modifier
	}

}

Nom.prototype = Object.create(new POS())

const NomErrors = {
	'MISSING_HEAD':'This nominal must have a head.'
}

Nom.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[NomErrors.MISSING_HEAD]}

	let retVal

	if(('modifier' in this))
		retVal = this.modifier.analyse().t + ' ' + this.head.analyse().t
	else
		retVal = this.head.analyse().t

	return {t:retVal, e:[]}
}

export default Nom
export {NomErrors}
