'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ProType = exports.ProGenerateText = exports.ProOb = exports.ProErrors = undefined;

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

	this.type = props.type;
	this.person = props.person;
	this.plurality = props.plurality;
	this.gender = props.gender;
}

var ProType = {
	'Subject': 100,
	'Object': 101,
	'Possessive': 102,
	'ReflexiveIntensive': 103
};

var PronounTable = [[['I', 'we'], ['you', 'you'], [['he', 'she', 'it'], 'they']], // subject
[['me', 'us'], ['you', 'you'], [['him', 'her', 'it'], 'them']], // object
[['mine', 'ours'], ['yours', 'yours'], [['his', 'hers'], 'theirs']], // possessive pronoun
[['myself', 'ourselves'], ['yourself', 'yourselves'], [['himself', 'herself', 'itself'], 'themselves']]];

var ProErrors = {
	'BAD_PRONOUN_TYPE': 'The pronoun type is not set correctly.',
	'BAD_PERSON': 'Person is not set correctly.',
	'BAD_PLURALITY': 'Plurality is not set correctly.'
};

var ProGenerateText = function ProGenerateText(pronoun) {

	var retVal = void 0;

	var type = pronoun.type,
	    person = pronoun.person,
	    plurality = pronoun.plurality,
	    gender = pronoun.gender;

	// Convert constant values to indices for use here.

	var type_idx = void 0;
	switch (type) {
		case ProType.Subject:
			type_idx = 0;
			break;
		case ProType.Object:
			type_idx = 1;
			break;
		case ProType.Possessive:
			type_idx = 2;
			break;
		case ProType.ReflexiveIntensive:
			type_idx = 3;
			break;
		default:
			return { e: ProErrors.BAD_PRONOUN_TYPE };
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
			return { e: ProErrors.BAD_PERSON };
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
			return { e: ProErrors.BAD_PLURALITY };
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

exports.ProErrors = ProErrors;
exports.ProOb = ProOb;
exports.ProGenerateText = ProGenerateText;
exports.ProType = ProType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qcm8uanMiXSwibmFtZXMiOlsiUHJvT2IiLCJwcm9wcyIsInQiLCJQcm8iLCJ2IiwiY3YiLCJ0eXBlIiwicGVyc29uIiwicGx1cmFsaXR5IiwiZ2VuZGVyIiwiUHJvVHlwZSIsIlByb25vdW5UYWJsZSIsIlByb0Vycm9ycyIsIlByb0dlbmVyYXRlVGV4dCIsInByb25vdW4iLCJyZXRWYWwiLCJ0eXBlX2lkeCIsIlN1YmplY3QiLCJPYmplY3QiLCJQb3NzZXNzaXZlIiwiUmVmbGV4aXZlSW50ZW5zaXZlIiwiZSIsIkJBRF9QUk9OT1VOX1RZUEUiLCJwZXJzb25faWR4IiwiRmlyc3QiLCJTZWNvbmQiLCJUaGlyZCIsIkJBRF9QRVJTT04iLCJwbHVyYWxpdHlfaWR4IiwiU2luZ3VsYXIiLCJQbHVyYWwiLCJCQURfUExVUkFMSVRZIiwiTWFsZSIsIkZlbWFsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLE1BQUtDLENBQUwsR0FBUywwQkFBT0MsR0FBUCxDQUFXRCxDQUFwQjtBQUNBLE1BQUtFLENBQUwsR0FBUywwQkFBT0QsR0FBUCxDQUFXRSxFQUFwQjs7QUFFQSxNQUFLQyxJQUFMLEdBQWFMLE1BQU1LLElBQW5CO0FBQ0EsTUFBS0MsTUFBTCxHQUFjTixNQUFNTSxNQUFwQjtBQUNBLE1BQUtDLFNBQUwsR0FBaUJQLE1BQU1PLFNBQXZCO0FBQ0EsTUFBS0MsTUFBTCxHQUFjUixNQUFNUSxNQUFwQjtBQUNBOztBQUVELElBQU1DLFVBQVU7QUFDZixZQUFzQixHQURQO0FBRWYsV0FBc0IsR0FGUDtBQUdmLGVBQXNCLEdBSFA7QUFJZix1QkFBc0I7QUFKUCxDQUFoQjs7QUFPQSxJQUFNQyxlQUFlLENBQ3BCLENBQUMsQ0FBQyxHQUFELEVBQVUsSUFBVixDQUFELEVBQXdCLENBQUMsS0FBRCxFQUFZLEtBQVosQ0FBeEIsRUFBa0Qs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LEdBQUFBLFM7UUFDQVosSyxHQUFBQSxLO1FBQ0FhLGUsR0FBQUEsZTtRQUNBSCxPLEdBQUFBLE8iLCJmaWxlIjoiUHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdlbmRlciAgICAgIGZyb20gJy4vR2VuZGVyJ1xuaW1wb3J0IFBlcnNvbiAgICAgIGZyb20gJy4vUGVyc29uJ1xuaW1wb3J0IHtQbHVyYWxpdHl9IGZyb20gJy4vTm91bidcbmltcG9ydCBTY2hlbWEgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gUHJvT2IocHJvcHMpIHtcblx0dGhpcy50ID0gU2NoZW1hLlByby50XG5cdHRoaXMudiA9IFNjaGVtYS5Qcm8uY3ZcblxuXHR0aGlzLnR5cGUgID0gcHJvcHMudHlwZVxuXHR0aGlzLnBlcnNvbiA9IHByb3BzLnBlcnNvblxuXHR0aGlzLnBsdXJhbGl0eSA9IHByb3BzLnBsdXJhbGl0eVxuXHR0aGlzLmdlbmRlciA9IHByb3BzLmdlbmRlclxufVxuXG5jb25zdCBQcm9UeXBlID0ge1xuXHQnU3ViamVjdCc6ICAgICAgICAgICAgMTAwLFxuXHQnT2JqZWN0JzogICAgICAgICAgICAgMTAxLFxuXHQnUG9zc2Vzc2l2ZSc6ICAgICAgICAgMTAyLFxuXHQnUmVmbGV4aXZlSW50ZW5zaXZlJzogMTAzXG59XG5cbmNvbnN0IFByb25vdW5UYWJsZSA9IFtcblx0W1snSScsICAgICAnd2UnXSwgICAgICAgWyd5b3UnLCAgICAgJ3lvdSddLCAgICAgICBbWydoZScsICAgICAnc2hlJywnaXQnXSwgICAgICAgICAgJ3RoZXknXV0sICAgICAgIC8vIHN1YmplY3Rcblx0W1snbWUnLCAgICAndXMnXSwgICAgICAgWyd5b3UnLCAgICAgJ3lvdSddLCAgICAgICBbWydoaW0nLCAgICAnaGVyJywnaXQnXSwgICAgICAgICAgJ3RoZW0nXV0sICAgICAgIC8vIG9iamVjdFxuXHRbWydtaW5lJywgICdvdXJzJ10sICAgICBbJ3lvdXJzJywgICAneW91cnMnXSwgICAgIFtbJ2hpcycsICAgICdoZXJzJ10sICAgICAgICAgICAgICAndGhlaXJzJ11dLCAgICAgLy8gcG9zc2Vzc2l2ZSBwcm9ub3VuXG5cdFtbJ215c2VsZicsJ291cnNlbHZlcyddLFsneW91cnNlbGYnLCd5b3Vyc2VsdmVzJ10sW1snaGltc2VsZicsJ2hlcnNlbGYnLCAgJ2l0c2VsZiddLCd0aGVtc2VsdmVzJ11dLCAvLyBzdWJqZWN0XG5dXG5cbmNvbnN0IFByb0Vycm9ycyA9IHtcblx0J0JBRF9QUk9OT1VOX1RZUEUnOidUaGUgcHJvbm91biB0eXBlIGlzIG5vdCBzZXQgY29ycmVjdGx5LicsXG5cdCdCQURfUEVSU09OJzonUGVyc29uIGlzIG5vdCBzZXQgY29ycmVjdGx5LicsXG5cdCdCQURfUExVUkFMSVRZJzonUGx1cmFsaXR5IGlzIG5vdCBzZXQgY29ycmVjdGx5Lidcbn1cblxuY29uc3QgUHJvR2VuZXJhdGVUZXh0ID0gKHByb25vdW4pID0+IHtcblxuXHRsZXQgcmV0VmFsXG5cblx0Y29uc3Qge3R5cGUsIHBlcnNvbiwgcGx1cmFsaXR5LCBnZW5kZXJ9ID0gcHJvbm91blxuXG5cdC8vIENvbnZlcnQgY29uc3RhbnQgdmFsdWVzIHRvIGluZGljZXMgZm9yIHVzZSBoZXJlLlxuXHRsZXQgdHlwZV9pZHhcblx0c3dpdGNoKHR5cGUpIHtcblx0XHRjYXNlIFByb1R5cGUuU3ViamVjdDpcblx0XHRcdHR5cGVfaWR4ID0gMFxuXHRcdFx0YnJlYWtcblx0XHRjYXNlIFByb1R5cGUuT2JqZWN0OlxuXHRcdFx0dHlwZV9pZHggPSAxXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgUHJvVHlwZS5Qb3NzZXNzaXZlOlxuXHRcdFx0dHlwZV9pZHggPSAyXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgUHJvVHlwZS5SZWZsZXhpdmVJbnRlbnNpdmU6XG5cdFx0XHR0eXBlX2lkeCA9IDNcblx0XHRcdGJyZWFrXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB7ZTpQcm9FcnJvcnMuQkFEX1BST05PVU5fVFlQRX1cblx0fVxuXG5cdGxldCBwZXJzb25faWR4XG5cdHN3aXRjaChwZXJzb24pIHtcblx0XHRjYXNlIFBlcnNvbi5GaXJzdDpcblx0XHRcdHBlcnNvbl9pZHggPSAwXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgUGVyc29uLlNlY29uZDpcblx0XHRcdHBlcnNvbl9pZHggPSAxXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgUGVyc29uLlRoaXJkOlxuXHRcdFx0cGVyc29uX2lkeCA9IDJcblx0XHRcdGJyZWFrXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiB7ZTpQcm9FcnJvcnMuQkFEX1BFUlNPTn1cblx0fVxuXG5cdGxldCBwbHVyYWxpdHlfaWR4XG5cdHN3aXRjaChwbHVyYWxpdHkpIHtcblx0XHRjYXNlIFBsdXJhbGl0eS5TaW5ndWxhcjpcblx0XHRcdHBsdXJhbGl0eV9pZHggPSAwXG5cdFx0XHRicmVha1xuXHRcdGNhc2UgUGx1cmFsaXR5LlBsdXJhbDpcblx0XHRcdHBsdXJhbGl0eV9pZHggPSAxXG5cdFx0XHRicmVha1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4ge2U6UHJvRXJyb3JzLkJBRF9QTFVSQUxJVFl9XG5cdH1cblxuXHRyZXRWYWwgPSBQcm9ub3VuVGFibGVbdHlwZV9pZHhdW3BlcnNvbl9pZHhdW3BsdXJhbGl0eV9pZHhdXG5cblx0aWYocGVyc29uID09PSBQZXJzb24uVGhpcmQgJiYgcGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpXG5cdFx0aWYoZ2VuZGVyID09PSBHZW5kZXIuTWFsZSkge1xuXHRcdFx0cmV0VmFsID0gcmV0VmFsWzBdXG5cdFx0fSBlbHNlIGlmKGdlbmRlciA9PT0gR2VuZGVyLkZlbWFsZSkge1xuXHRcdFx0cmV0VmFsID0gcmV0VmFsWzFdXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldFZhbCA9IHJldFZhbFsyXVxuXHRcdH1cblxuXHRyZXR1cm4gcmV0VmFsXG5cbn1cblxuZXhwb3J0IHtQcm9FcnJvcnN9XG5leHBvcnQge1Byb09ifVxuZXhwb3J0IHtQcm9HZW5lcmF0ZVRleHR9XG5leHBvcnQge1Byb1R5cGV9XG4iXX0=