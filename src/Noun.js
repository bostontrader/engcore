import Schema from './SchemaConstants'

function NounOb(props) {
	this.t = Schema.N.t
	this.v = Schema.N.cv
	this.base       = props.base
	this.pluralForm = props.pluralForm

	this.proper     = props.proper || false
}

const Plurality = {
	'NoneSelected':1,
	'Singular':  100,
	'Plural':    200,
}

const NErrors = {
	'NOUN_BASE_UNDEFINED':'Noun base undefined'
}

const NGenerateText = (noun, pluralFormRequested=false) => {

	if(!noun.base)
		return {e:'Noun base undefined'}

	//const base = (noun.proper) ? noun.base.charAt(0).toUpperCase() + noun.base.slice(1) : noun.base
	const base = noun.base

	//if(pluralFormRequested) {

		// If an irregular form of the plural exists, then use it.
		//const p = noun.get('plural')
		//if (p) return p

		// Otherwise calculate the ending according to the rules.
		//const c1 = base.slice(-1)           // penn y
		//const c2 = base.slice(-2)           // pen  ny
		//const c3 = c2.slice(0,1)         // ny   n
		//const c4 = base.slice(0,base.length-1) // penn

		// If the base ends with s, x, z, ch, or sh, make the plural by appending -es.
		//if( c1 === 's' | c1 === 'x'  | c1 === 'z' | c2 === 'ch' | c2 === 'sh')
			//return base + 'es'

		// If the base ends with consonant and then a y, make the plural by dropping the y and appending -ies.
		//if( ('aeiouAEIOU'.indexOf(c3) < 0) && c1 === 'y')
			//return c4 + 'ies'

		//return base + 's'
	//}

	return base
}

export {NounOb}
export {NErrors}
export {NGenerateText}
export {Plurality}
