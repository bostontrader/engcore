import POS    from '../POS'
import Schema from '../SchemaConstants'

function PreP(props) {
	this.t = Schema.PreP.t
	this.v = Schema.PreP.cv

	if(props) {
		if('head' in props)
			this.head = props.head
		if('np' in props)
			this.np = props.np
	}

}

PreP.prototype = Object.create(new POS())

const PrePErrors = {
	'MISSING_HEAD':'This prepositional phrase must have a head.',
	'MISSING_NP':'This prepositional phrase must have a noun phrase.'
}

PreP.prototype.analyse = function() {

	if(!('head' in this)	)
		return {t:undefined, e:[PrePErrors.MISSING_HEAD]}

	if(!('np' in this))
		return {t:undefined, e:[PrePErrors.MISSING_NP]}

	let retVal = this.head.analyse().t + ' ' + this.np.analyse().t
	return {t:retVal, e:[]}
}

export default PreP
export {PrePErrors}
