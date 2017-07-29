import POS     from '../POS'
import Schema  from '../SchemaConstants'

function Adj(props) {
	this.t = Schema.Adj.t
	this.v = Schema.Adj.cv
	//this.silentH = n.silentH

	if(props) {
		if(typeof(props) === 'object') {
			if('base' in props)
				this.base = props.base
		} else if(typeof(props) === 'string') {
			// The prop is a string. Assume that's the base.
			this.base = props
		}
	}
}

Adj.prototype = Object.create(new POS())

const AdjErrors = {
	'MISSING_BASE':'This adjective has no base specified.',
}

Adj.prototype.analyse = function() {

	if(!('base' in this))
		return {t:undefined, e:[AdjErrors.MISSING_BASE]}

	return {t:this.base, e:[]}
}

export default Adj
export {AdjErrors}
