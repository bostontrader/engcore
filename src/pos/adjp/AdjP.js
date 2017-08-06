import POS          from '../POS'
import Definiteness from '../Definiteness'
import Schema       from '../SchemaConstants'

function AdjP(props) {
	this.t = Schema.AdjP.t
	this.v = Schema.AdjP.cv

	if(props) {
		if('head' in props)
			this.head = props.head
		if('modifier' in props)
			this.modifier = props.modifier
	}
}

AdjP.prototype = Object.create(new POS())

const AdjPErrors = {
	'MISSING_HEAD':'This adjective phrase must have a head.'
}

AdjP.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[AdjPErrors.MISSING_HEAD]}

	let retVal

	if(('modifier' in this))
		retVal = this.modifier.analyse().t + ' ' + this.head.analyse().t
	else
		retVal = this.head.analyse().t

	return {t:retVal, e:[]}

}

export default AdjP
export {AdjPErrors}
