import {NGenerateText} from './Noun'
import {Plurality}     from './Noun'
import Schema          from './SchemaConstants'

function NPOb(props) {

    this.t = Schema.NP.t
    this.v = Schema.NP.cv

    this.noun = props.noun
    this.plurality = props.plurality || Plurality.NoneSelected
    this.adjectives = props.adjectives || []
}

// np: Object
const NPGenerateText = (np) => {

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

    let adjString = ''
    //let firstTime = true
    //for( let adj of np.adjectives) {
        //if (firstTime) {
            //adjString = adj.base
            //firstTime = false
        //}
        //else
            //adjString += ' ' + adj.base
    //}

    if(np.plurality === Plurality.Singular) {
        article = 'the'
    } else if(np.plurality === Plurality.Plural) {
        article = aoran(np.noun, adjString)
    }



    //if(np.exampleOf)          article = aoran(np.noun, adjString)

    //if(np.firstTime)          article = aoran(np.noun, adjString)
    //if(np.nameOfJob)          article = this.aoran(np.get('nound'), adjString)
    //if(np.nationalitySingular) article = aoran(nound, adjString, config)
    //if(np.religionSingular) article = aoran(nound, adjString, config)
    //if(np.dayOfWeek) article = aoran(nound, adjString, config)
    //if(np.exampleOfSomething) article = this.aoran(np.get('nound'), adjString)

    let base = NGenerateText(np.noun)
    if( adjString !== '') base = adjString + ' ' + base
    if (article != '') base = article + ' ' + base

    return base

}

export {NPOb}

export {NPGenerateText}
