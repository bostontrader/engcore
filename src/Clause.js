import {NPGenerateText} from './NP'
import Schema           from './SchemaConstants'
import {VPGenerateText} from './VP'

function ClauseOb(props) {

	this.t = Schema.Clause.t
	this.v = Schema.Clause.cv

	this.np = props.np
	this.vp = props.vp

}

const ClauseErrors = {
	'NO_NP':'This Clause has no noun phrase.',
	'NO_VP':'This Clause has no verb phrase.'

}

const ClauseGenerateText = (clause) => {

	if(!clause.np)
		return {e:ClauseErrors.NO_NP}

	if(!clause.vp)
		return {e:ClauseErrors.NO_VP}

	return NPGenerateText(clause.np) + ' ' + VPGenerateText(clause.vp)

}

export {ClauseErrors}
export {ClauseOb}
export {ClauseGenerateText}
