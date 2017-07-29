import Schema  from './pos/SchemaConstants'

function UnkOb(props) {
	this.t = Schema.Unk.t
	this.v = Schema.Unk.cv
	this.base    = props.base
}

const UnkErrors = {
	'UNKNOWN_BASE_UNDEFINED':'Unknown base undefined'
}

const UnkGenerateText = (unk) => {
	if(!unk.base)
		return {e:UnkErrors.UNKNOWN_BASE_UNDEFINED}
	return unk.base
}

export {UnkErrors}
export {UnkGenerateText}
export {UnkOb}
