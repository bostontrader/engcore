import POS     from '../POS'
import Schema  from '../SchemaConstants'

function Pre(props) {
	this.t = Schema.Pre.t
	this.v = Schema.Pre.cv

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

Pre.prototype = Object.create(new POS())

const PreErrors = {
	'MISSING_BASE':'This preposition has no base specified.',
}

Pre.prototype.analyse = function() {

	if(!('base' in this))
		return {t:undefined, e:[PreErrors.MISSING_BASE]}

	return {t:this.base, e:[]}
}

export default Pre
export {PreErrors}
