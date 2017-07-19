import Schema  from './SchemaConstants'

function AdjOb(props) {
	this.t = Schema.Adj.t
	this.v = Schema.Adj.cv
	this.base    = props.base
	this.silentH = props.silentH || false
}

const AdjErrors = {
	'ADJECTIVE_BASE_UNDEFINED':'Adjective base undefined'
}

const AdjGenerateText = (adj) => {
	if(!adj.base)
		return {e:AdjErrors.ADJECTIVE_BASE_UNDEFINED}
	return adj.base
}

export {AdjErrors}
export {AdjGenerateText}
export {AdjOb}
