import AdjDictOb from './AdjDict'
import Schema    from './SchemaConstants'

function AdjOb(props) {
	this.t = Schema.Adj.t
	this.v = Schema.Adj.cv

	if ('base' in props && props.base in AdjDictOb) {
		const n = AdjDictOb[props.base]
		this.base = n.base
		this.silentH = n.silentH
	} else {
		this.base    = props.base
		this.silentH = props.silentH || false
	}
}

const AdjErrors = {
	'ADJECTIVE_BASE_UNDEFINED':'Adjective base undefined'
}

const AdjGenerateText = (adj) => {

	if(adj.base === undefined)
		return {e:AdjErrors.ADJECTIVE_BASE_UNDEFINED}

	return adj.base
}

export {AdjErrors}
export {AdjGenerateText}
export {AdjOb}
