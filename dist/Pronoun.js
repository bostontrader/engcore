'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PronounType = exports.ProGenerateText = exports.ProOb = undefined;

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

var _Noun = require('./Noun');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProOb(props) {
	this.t = _SchemaConstants2.default.Pro.t;
	this.v = _SchemaConstants2.default.Pro.cv;
	this.type = props.type || PronounType.Subject;
	this.plurality = props.plurality || _Noun.Plurality.Singular;
	this.person = props.person || _Person2.default.First;
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

	var person_idx = void 0;
	switch (person) {
		case _Person2.default.First:
			person_idx = 0;
			break;
		case _Person2.default.Second:
			person_idx = 1;
			break;
		case _Person2.default.Third:
			person_idx = 2;
			break;
	}

	retVal = PronounTable[type_idx][person_idx][plurality_idx];

	if (person === _Person2.default.Third && plurality === _Noun.Plurality.Singular) if (gender === _Gender2.default.Male) {
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