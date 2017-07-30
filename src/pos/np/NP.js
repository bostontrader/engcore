import POS       from '../POS'
import Schema    from '../SchemaConstants'
//import Plurality from '../Plurality'
//import Nom       from '../nom/Nom'

function NP(props) {
	this.t = Schema.NP.t
	this.v = Schema.NP.cv

	// 326. has a head and optionally one or more dependents

	// 330. the head can be a N or a Nom
	// 330. the determinative can be a Det, a DetP, or a genative NP.
	//this.definiteness = props.definiteness || Definiteness.NoneSelected
	//this.plurality = props.plurality || Plurality.NoneSelected
	//this.adjectives = props.adjectives || []
	if(props) {
		if('head' in props)
			this.head = props.head
		if('det' in props)
			this.det = props.det
	}
}

NP.prototype = Object.create(new POS())

//const Definiteness = {
	//'NoneSelected': 0,
	//'Definite':   100,
	//'Indefinite': 200,
//}

// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
// 327. Other functions: complement in PP, subject-determiner in NP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in NP, supplement, vocative
// 327. dummy category 'there'
// 328. bare role: ie. 'president'
// 329. pre-head and post-head dependents.
const NPErrors = {
	'MISSING_HEAD':'This nominal must have a head.'
}

NP.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[NPErrors.MISSING_HEAD]}

	let retVal

	if(('det' in this))
		retVal = this.det.analyse().t + ' ' + this.head.analyse().t
	else
		retVal = this.head.analyse().t

	return {t:retVal, e:[]}


}

export default NP
export {NPErrors}
