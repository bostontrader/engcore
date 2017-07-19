import Schema from './SchemaConstants'

function PreOb(props) {
	this.t = Schema.Pre.t
	this.v = Schema.Pre.cv
	this.base = props.base
}

const PreErrors = {
	'PRE_BASE_UNDEFINED':'Pre base undefined'
}

const PreGenerateText = (pre) => {
	if(!pre.base)
		return {e:PreErrors.PRE_BASE_UNDEFINED}

	return pre.base
}

export {PreErrors}
export {PreGenerateText}
export {PreOb}
