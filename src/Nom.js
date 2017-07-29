import Schema            from './SchemaConstants'

// 326,327 has a N or Pro as a head and various dependents. Such as:
// * the determinatives: a, the, every
// * pre-head AdjP
// * relative clauses
// 329 can be head of NP or pre-head dependent
function NomOb(props) {
	this.t = Schema.Nom.t
	this.v = Schema.Nom.cv

	this.head = props.head
	this.modifier = props.modifier
}

const NomErrors = {
	'MISSING_HEAD':'This nominal must have a head.'
}

const NomGenerateText = (nom) => {

	if(!nom.head)
		return {e:NomErrors.MISSING_HEAD}

	if(nom.modifier)
		//return AdjGenerateText(nom.modifier) + ' ' + NGenerateText(nom.head)
		return nom.modifier.analyse().t + ' ' + nom.head.analyse().t

	else
		//return NGenerateText(nom.head)
		return nom.head.analyse().t
}

export {NomErrors}
export {NomGenerateText}
export {NomOb}
