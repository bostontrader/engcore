'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VPOb = exports.VPGenerateText = exports.VGenerateText = exports.VDictOb = exports.Tense = exports.Schema = exports.PronounType = exports.ProOb = exports.ProGenerateText = exports.PrePOb = exports.PrePGenerateText = exports.PreDictOb = exports.PreOb = exports.Person = exports.NPOb = exports.NPGenerateText = exports.Plurality = exports.NounOb = exports.NGenerateText = exports.NErrors = exports.NDictOb = exports.Gender = exports.AdjDictOb = exports.AdjGenerateText = undefined;

var _Adjective = require('./Adjective');

var _AdjDictionary = require('./AdjDictionary');

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _NDictionary = require('./NDictionary');

var _Noun = require('./Noun');

var _NP = require('./NP');

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

var _Pre = require('./Pre');

var _PreDictionary = require('./PreDictionary');

var _PreP = require('./PreP');

var _Pronoun = require('./Pronoun');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _VDictionary = require('./VDictionary');

var _Verb = require('./Verb');

var _VP = require('./VP');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AdjGenerateText = _Adjective.AdjGenerateText;
exports.AdjDictOb = _AdjDictionary.AdjDictOb;
exports.Gender = _Gender2.default;
exports.NDictOb = _NDictionary.NDictOb;
exports.NErrors = _Noun.NErrors;
exports.NGenerateText = _Noun.NGenerateText;
exports.NounOb = _Noun.NounOb;
exports.Plurality = _Noun.Plurality;
exports.NPGenerateText = _NP.NPGenerateText;
exports.NPOb = _NP.NPOb;
exports.Person = _Person2.default;
exports.PreOb = _Pre.PreOb;
exports.PreDictOb = _PreDictionary.PreDictOb;
exports.PrePGenerateText = _PreP.PrePGenerateText;
exports.PrePOb = _PreP.PrePOb;
exports.ProGenerateText = _Pronoun.ProGenerateText;
exports.ProOb = _Pronoun.ProOb;
exports.PronounType = _Pronoun.PronounType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _Verb.Tense;
exports.VDictOb = _VDictionary.VDictOb;
exports.VGenerateText = _Verb.VGenerateText;
exports.VPGenerateText = _VP.VPGenerateText;
exports.VPOb = _VP.VPOb;