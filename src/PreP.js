import Schema from './pos/SchemaConstants'

function PrePOb(props) {

	this.t = Schema.PreP.t
	this.v = Schema.PreP.cv

	this.head = props.head
	this.np = props.np
}

const PrePErrors = {
	'NO_PRE':'This prepositional phrase has no preposition.',
	'NO_NP':'This prepositional phrase has no noun phrase.'
}

const PrePGenerateText = (prep) => {

	if(!prep.head)
		return {e:PrePErrors.NO_PRE}

	if(!prep.np)
		return {e:PrePErrors.NO_NP}

	return prep.head.base + ' ' + prep.np.analyse().t
}

export {PrePErrors}
export {PrePGenerateText}
export {PrePOb}
