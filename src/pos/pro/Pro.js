import Gender    from '../Gender'
import Person    from '../Person'
import Schema    from '../SchemaConstants'
import Plurality from '../Plurality'
import POS       from '../POS'

function Pro(props) {
	this.t = Schema.Pro.t
	this.v = Schema.Pro.cv

	this.type  = props.type
	this.person = props.person
	this.plurality = props.plurality
	this.gender = props.gender
}

Pro.prototype = Object.create(new POS())

const ProType = {
	'Subject':            100,
	'Object':             101,
	'Possessive':         102,
	'ReflexiveIntensive': 103
}

const PronounTable = [
	[['I',     'we'],       ['you',     'you'],       [['he',     'she','it'],          'they']],       // subject
	[['me',    'us'],       ['you',     'you'],       [['him',    'her','it'],          'them']],       // object
	[['mine',  'ours'],     ['yours',   'yours'],     [['his',    'hers'],              'theirs']],     // possessive pronoun
	[['myself','ourselves'],['yourself','yourselves'],[['himself','herself',  'itself'],'themselves']], // subject
]

const ProErrors = {
	'BAD_PRONOUN_TYPE':'The pronoun type is not set correctly.',
	'BAD_PERSON':'Person is not set correctly.',
	'BAD_PLURALITY':'Plurality is not set correctly.'
}

Pro.prototype.analyse = function() {

	let retVal

	const {type, person, plurality, gender} = this

	// Convert constant values to indices for use here.
	let type_idx
	switch(type) {
		case ProType.Subject:
			type_idx = 0
			break
		case ProType.Object:
			type_idx = 1
			break
		case ProType.Possessive:
			type_idx = 2
			break
		case ProType.ReflexiveIntensive:
			type_idx = 3
			break
		default:
			return {t:undefined, e:[ProErrors.BAD_PRONOUN_TYPE]}
	}

	let person_idx
	switch(person) {
		case Person.First:
			person_idx = 0
			break
		case Person.Second:
			person_idx = 1
			break
		case Person.Third:
			person_idx = 2
			break
		default:
			return {t:undefined, e:[ProErrors.BAD_PERSON]}
	}

	let plurality_idx
	switch(plurality) {
		case Plurality.Singular:
			plurality_idx = 0
			break
		case Plurality.Plural:
			plurality_idx = 1
			break
		default:
			return {t:undefined, e:[ProErrors.BAD_PLURALITY]}
	}

	retVal = PronounTable[type_idx][person_idx][plurality_idx]

	if(person === Person.Third && plurality === Plurality.Singular)
		if(gender === Gender.Male) {
			retVal = retVal[0]
		} else if(gender === Gender.Female) {
			retVal = retVal[1]
		} else {
			retVal = retVal[2]
		}

	return {t:retVal, e:[]}

}

export default Pro
export {ProErrors}
export {ProType}
