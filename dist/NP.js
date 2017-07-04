'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NPGenerateText = exports.NPOb = undefined;

var _Noun = require('./Noun');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NPOb(props) {

    this.t = _SchemaConstants2.default.NP.t;
    this.v = _SchemaConstants2.default.NP.cv;

    this.noun = props.noun;
    this.definiteness = props.definiteness || Definiteness.NoneSelected;
    this.plurality = props.plurality || _Noun.Plurality.NoneSelected;
    this.adjectives = props.adjectives || [];
}

var Definiteness = {
    'NoneSelected': 0,
    'Definite': 100,
    'Indefinite': 200

    // np: Object
};var NPGenerateText = function NPGenerateText(np) {

    // noun: Object, adjString: String
    function aoran(noun, adjString) {
        var article = 'a';

        var firstChar = adjString === '' ? noun.base.charAt(0) : adjString.charAt(0);
        article = 'aeiouAEIOU'.indexOf(firstChar) < 0 ? 'a' : 'an';
        if (noun.soundLikeYou) article = 'a';
        if (noun.silentH) article = 'an';
        return article;
    }

    var article = '';

    var adjString = np.adjectives.map(function (n) {
        return n.base;
    }).join(' ');

    if (np.plurality === _Noun.Plurality.Singular) {
        article = 'the';
    } else if (np.plurality === _Noun.Plurality.Plural) {
        article = aoran(np.noun, adjString);
    }

    //if(np.exampleOf)          article = aoran(np.noun, adjString)

    //if(np.firstTime)          article = aoran(np.noun, adjString)
    //if(np.nameOfJob)          article = this.aoran(np.get('nound'), adjString)
    //if(np.nationalitySingular) article = aoran(nound, adjString, config)
    //if(np.religionSingular) article = aoran(nound, adjString, config)
    //if(np.dayOfWeek) article = aoran(nound, adjString, config)
    //if(np.exampleOfSomething) article = this.aoran(np.get('nound'), adjString)

    var base = (0, _Noun.NGenerateText)(np.noun);
    if (adjString !== '') base = adjString + ' ' + base;
    if (article != '') base = article + ' ' + base;

    return base;
};

exports.NPOb = NPOb;
exports.NPGenerateText = NPGenerateText;