import Schema from './SchemaConstants'

function DetOb(props) {
	this.t = Schema.Det.t
	this.v = Schema.Det.cv
	this.base = props.base
}

const DetErrors = {
	'MISSING_BASE':'This determinative does not have a base.'
}

const DetGenerateText = (det) => {

	if(!det.base)
		return {e:DetErrors.MISSING_BASE}

	return det.base
}

export {DetErrors}
export {DetGenerateText}
export {DetOb}
