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
	this.person = props.person || _Person2.default.First;
	this.plurality = props.plurality || _Noun.Plurality.Singular;
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

	var retVal = null; // If a good configuration cannot be found, then return null to signal bad configuration.

	var type = pronoun.type,
	    person = pronoun.person,
	    plurality = pronoun.plurality,
	    gender = pronoun.gender;

	// Convert constant values to indices for use here.

	var type_idx = void 0;
	switch (type) {
		case PronounType.Subject:
			type_idx = 0;
			break;
		case PronounType.Object:
			type_idx = 1;
			break;
		case PronounType.Possessive:
			type_idx = 2;
			break;
		case PronounType.ReflexiveIntensive:
			type_idx = 3;
			break;
		default:
			return retVal; // If no pronoun type then this is not a good configuration
	}

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
		default:
			return retVal; // If no person then this is not a good configuration
	}

	var plurality_idx = void 0;
	switch (plurality) {
		case _Noun.Plurality.Singular:
			plurality_idx = 0;
			break;
		case _Noun.Plurality.Plural:
			plurality_idx = 1;
			break;
		default:
			return retVal; // If no plurality then this is not a good configuration
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