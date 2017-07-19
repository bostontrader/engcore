import {NPGenerateText} from './NP'
import Schema           from './SchemaConstants'

function PrePOb(props) {

	this.t = Schema.PreP.t
	this.v = Schema.PreP.cv

	this.pre = props.pre
	this.np = props.np
}

const PrePErrors = {
	'NO_PRE':'This prepositional phrase has no preposition.',
	'NO_NP':'This prepositional phrase has no noun phrase.'
}

const PrePGenerateText = (prep) => {

	if(!prep.pre)
		return {e:PrePErrors.NO_PRE}

	if(!prep.np)
		return {e:PrePErrors.NO_NP}

	return prep.pre.base + ' ' + NPGenerateText(prep.np)
}

export {PrePErrors}
export {PrePGenerateText}
export {PrePOb}
