import Gender      from './Gender'
import Schema      from './SchemaConstants'
import {Plurality} from './Noun'

function ProOb(props) {
	this.t = Schema.Pro.t
	this.v = Schema.Pro.cv
	this.type  = props.type || PronounType.Subject
	this.plurality = props.plurality || Plurality.Singular
	this.person = props.person || 1
	this.gender = props.gender || Gender.NoneSelected
}

const PronounType = {
	'Subject':            0,
	'Object':             1,
	'Possessive':         2,
	'ReflexiveIntensive': 3
}

const PronounTable = [
	[['I',     'we'],       ['you',     'you'],       [['he',     'she','it'],          'they']],       // subject
	[['me',    'us'],       ['you',     'you'],       [['him',    'her','it'],          'them']],       // object
	[['mine',  'ours'],     ['yours',   'yours'],     [['his',    'hers'],              'theirs']],     // possessive pronoun
	[['myself','ourselves'],['yourself','yourselves'],[['himself','herself',  'itself'],'themselves']], // subject
]

const ProGenerateText = (pronoun) => {

	let retVal = 'BAD PRONOUN CONFIGURATION'

	const {type, plurality, person, gender} = pronoun

	// Convert constant values to indices for use here.
	const type_idx = type
	const plurality_idx = (plurality === Plurality.Singular) ? 0 : 1
	const person_idx = person - 1

	retVal = PronounTable[type_idx][person_idx][plurality_idx]

	if(person === 3 && plurality === Plurality.Singular)
		if(gender === Gender.Male) {
			retVal = retVal[0]
		} else if(gender === Gender.Female) {
			retVal = retVal[1]
		} else {
			retVal = retVal[2]
		}

	return retVal

}

export {ProOb}
export {ProGenerateText}
export {PronounType}
