import POS     from '../POS'
import Schema  from '../../SchemaConstants'

function Det(props) {
	this.t = Schema.Det.t
	this.v = Schema.Det.cv

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

Det.prototype = Object.create(new POS())

const DetErrors = {
	'MISSING_BASE':'This determiner has no base specified.',
}

Det.prototype.analyse = function() {

	if(!('base' in this))
		return {t:undefined, e:[DetErrors.MISSING_BASE]}

	return {t:this.base, e:[]}
}

export default Det
export {DetErrors}
