'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PronounType = exports.ProGenerateText = exports.ProOb = undefined;

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Noun = require('./Noun');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProOb(props) {
	this.t = _SchemaConstants2.default.Pro.t;
	this.v = _SchemaConstants2.default.Pro.cv;
	this.type = props.type || PronounType.Subject;
	this.plurality = props.plurality || _Noun.Plurality.Singular;
	this.person = props.person || 1;
	this.gender = props.gender || _Gender2.default.NoneSelected;
}

var PronounType = {
	'Subject': 0,
	'Object': 1,
	'Possessive': 2,
	'ReflexiveIntensive': 3
};

var PronounTable = [[['I', 'we'], ['you', 'you'], [['he', 'she', 'it'], 'they']], // subject
[['me', 'us'], ['you', 'you'], [['him', 'her', 'it'], 'them']], // object
[['mine', 'ours'], ['yours', 'yours'], [['his', 'hers'], 'theirs']], // possessive pronoun
[['myself', 'ourselves'], ['yourself', 'yourselves'], [['himself', 'herself', 'itself'], 'themselves']]];

var ProGenerateText = function ProGenerateText(pronoun) {

	var retVal = 'BAD PRONOUN CONFIGURATION';

	var type = pronoun.type,
	    plurality = pronoun.plurality,
	    person = pronoun.person,
	    gender = pronoun.gender;

	// Convert constant values to indices for use here.

	var type_idx = type;
	var plurality_idx = plurality === _Noun.Plurality.Singular ? 0 : 1;
	var person_idx = person - 1;

	retVal = PronounTable[type_idx][person_idx][plurality_idx];

	if (person === 3 && plurality === _Noun.Plurality.Singular) if (gender === _Gender2.default.Male) {
		retVal = retVal[0];
	} else if (gender === _Gender2.default.Female) {
		retVal = retVal[1];
	} else {
		retVal = retVal[2];
	}

	return retVal;
};

exports.ProOb = ProOb;
exports.ProGenerateText = ProGenerateText;
exports.PronounType = PronounType;