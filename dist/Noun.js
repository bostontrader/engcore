'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Plurality = exports.NGenerateText = exports.NErrors = exports.NounOb = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NounOb(props) {
	this.t = _SchemaConstants2.default.N.t;
	this.v = _SchemaConstants2.default.N.cv;
	this.base = props.base;
	this.pluralForm = props.pluralForm;

	this.proper = props.proper || false;
}

var Plurality = {
	'NoneSelected': 1,
	'Singular': 100,
	'Plural': 200
};

var NErrors = {
	'NOUN_BASE_UNDEFINED': 'Noun base undefined'
};

var NGenerateText = function NGenerateText(noun) {
	var pluralFormRequested = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	if (!noun.base) return { e: 'Noun base undefined'

		//const base = (noun.proper) ? noun.base.charAt(0).toUpperCase() + noun.base.slice(1) : noun.base
	};var base = noun.base;

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

	return base;
};

exports.NounOb = NounOb;
exports.NErrors = NErrors;
exports.NGenerateText = NGenerateText;
exports.Plurality = Plurality;