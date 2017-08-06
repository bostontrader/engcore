import POS     from '../POS'
import Schema  from '../SchemaConstants'

function Adv(props) {
	this.t = Schema.Adv.t
	this.v = Schema.Adv.cv
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

Adv.prototype = Object.create(new POS())

const AdvErrors = {
	'MISSING_BASE':'This adverb has no base specified.',
}

Adv.prototype.analyse = function() {

	if(!('base' in this))
		return {t:undefined, e:[AdvErrors.MISSING_BASE]}

	return {t:this.base, e:[]}
}

export default Adv
export {AdvErrors}
