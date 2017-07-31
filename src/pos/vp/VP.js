import POS    from '../POS'
import Schema from '../SchemaConstants'

function VP(props) {
	this.t = Schema.VP.t
	this.v = Schema.VP.cv

	// p50 the head of a verb phrase, aka the predicator, is a V
	// the object can be a NP
	if(props) {
		if('head' in props)
			this.head = props.head
		if('object' in props)
			this.object = props.object
	}

}

VP.prototype = Object.create(new POS())

const VPErrors = {
	'MISSING_HEAD':'This verb phrase must have a head aka predicator.',
	'MISSING_OBJECT':'This verb phrase must have an object.'
}

VP.prototype.analyse = function() {

	if(!('head' in this))
		return {t:undefined, e:[VPErrors.MISSING_HEAD]}

	if(!('object' in this))
		return {t:undefined, e:[VPErrors.MISSING_OBJECT]}

	let retVal = this.head.analyse().t + ' ' + this.object.analyse().t
	return {t:retVal,e:[]}

}

export default VP
export {VPErrors}
