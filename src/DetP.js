import Schema          from './SchemaConstants'

function DetPOb(props) {

	this.t = Schema.DetP.t
	this.v = Schema.DetP.cv

	// 326. has a head and optionally one or more dependents
	// 330. the determinative can be a Det, a DetP, or a genative DetP.
	this.head = props.head
	this.det = props.det
}

const Definiteness = {
	'NoneSelected': 0,
	'Definite':   100,
	'Indefinite': 200,
}

// 326. Can be a complement in a clause, aka subject, an object, or a predicative complement.
// 327. Other functions: complement in PP, subject-determiner in DetP, adjunct in clause, modifier in AdjP, modifier in AdvP, modifier in PP, modifier in DetP, supplement, vocative
// 327. dummy category 'there'
// 328. bare role: ie. 'president'
// 329. pre-head and post-head dependents.
const DetPErrors = {
	'NO_NOUN':'This DetP has no head.'
}

const DetPGenerateText = (np) => {

	if(!np.head)
		return {e:DetPErrors.NO_NOUN}

	// noun: Object, adjString: String
	function aoran(noun, adjString) {
		let article = 'a'

		const firstChar = (adjString === '') ? noun.base.charAt(0) : adjString.charAt(0)
		article = ('aeiouAEIOU'.indexOf(firstChar) < 0) ? 'a' : 'an'
		if (noun.soundLikeYou) article = 'a'
		if (noun.silentH) article = 'an'
		return article
	}


	let article = ''

	let adjString = np.adjectives.map( (n) => n.base).join(' ')

	if(np.plurality === Plurality.Singular) {
		article = 'the'
	} else if(np.plurality === Plurality.Plural) {
		article = aoran(np.head, adjString)
	}



	//if(np.exampleOf)          article = aoran(np.head, adjString)

	//if(np.firstTime)          article = aoran(np.head, adjString)
	//if(np.nameOfJob)          article = this.aoran(np.get('headd'), adjString)
	//if(np.nationalitySingular) article = aoran(headd, adjString, config)
	//if(np.religionSingular) article = aoran(headd, adjString, config)
	//if(np.dayOfWeek) article = aoran(headd, adjString, config)
	//if(np.exampleOfSomething) article = this.aoran(np.get('headd'), adjString)

	let base = NGenerateText(np.head)
	if( adjString !== '') base = adjString + ' ' + base
	if (article != '') base = article + ' ' + base

	return base

}

export {DetPErrors}
export {DetPOb}
export {DetPGenerateText}
