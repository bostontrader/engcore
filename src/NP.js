import {DetGenerateText} from './Det'
import {DetOb}           from './Det'
import {NGenerateText}   from './N'
import {Plurality}       from './N'
import {NomGenerateText} from './Nom'
import {NomOb}           from './Nom'
import Schema            from './SchemaConstants'

function NPOb(props) {

	this.t = Schema.NP.t
	this.v = Schema.NP.cv

	// 326. has a head and optionally one or more dependents

	this.head = props.head // 330. the head can be a N or a Nom
	this.det = props.det   // 330. the determinative can be a Det, a DetP, or a genative NP.
	//this.definiteness = props.definiteness || Definiteness.NoneSelected
	//this.plurality = props.plurality || Plurality.NoneSelected
	//this.adjectives = props.adjectives || []
}

const Definiteness = {
	'NoneSelected': 0,
	'Definite':   100,
	'Indefinite': 200,
}

// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
// 327. Other functions: complement in PP, subject-determiner in NP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in NP, supplement, vocative
// 327. dummy category 'there'
// 328. bare role: ie. 'president'
// 329. pre-head and post-head dependents.
const NPErrors = {
	'NO_HEAD':'This NP has no head.'
}

const NPGenerateText = (np) => {

	if(!np.head)
		return {e:NPErrors.NO_HEAD}

	// noun: Object, adjString: String
	//function aoran(noun, adjString) {
		//let article = 'a'

		//const firstChar = (adjString === '') ? noun.base.charAt(0) : adjString.charAt(0)
		//article = ('aeiouAEIOU'.indexOf(firstChar) < 0) ? 'a' : 'an'
		//if (noun.soundLikeYou) article = 'a'
		//if (noun.silentH) article = 'an'
		//return article
	//}


	//let article = ''

	//let adjString = np.adjectives.map( (n) => n.base).join(' ')

	//if(np.plurality === Plurality.Singular) {
		//article = 'the'
	//} else if(np.plurality === Plurality.Plural) {
		//article = aoran(np.head, adjString)
	//}



	//if(np.exampleOf)          article = aoran(np.head, adjString)

	//if(np.firstTime)          article = aoran(np.head, adjString)
	//if(np.nameOfJob)          article = this.aoran(np.get('headd'), adjString)
	//if(np.nationalitySingular) article = aoran(headd, adjString, config)
	//if(np.religionSingular) article = aoran(headd, adjString, config)
	//if(np.dayOfWeek) article = aoran(headd, adjString, config)
	//if(np.exampleOfSomething) article = this.aoran(np.get('headd'), adjString)

	//let base = NGenerateText(np.head)
	//if( adjString !== '') base = adjString + ' ' + base
	//if (article != '') base = article + ' ' + base

	let retVal

	if(np.head.t === Schema.Nom.t)
		retVal = NomGenerateText(np.head)
	else if(np.head.t === Schema.N.t)
		retVal = NGenerateText(np.head)

	if(np.det)
		retVal = DetGenerateText(np.det) + ' ' + retVal

	return retVal
}

export {NPErrors}
export {NPOb}
export {NPGenerateText}
