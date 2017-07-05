'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VPOb = exports.VPGenerateText = exports.VGenerateText = exports.VDictOb = exports.ProOb = exports.ProGenerateText = exports.NPOb = exports.NPGenerateText = exports.Plurality = exports.NounOb = exports.NGenerateText = exports.NDictOb = exports.Gender = exports.AdjDictOb = exports.AdjGenerateText = undefined;

var _Adjective = require('./Adjective');

var _AdjDictionary = require('./AdjDictionary');

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _NDictionary = require('./NDictionary');

var _Noun = require('./Noun');

var _NP = require('./NP');

var _Pronoun = require('./Pronoun');

var _VDictionary = require('./VDictionary');

var _Verb = require('./Verb');

var _VP = require('./VP');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AdjGenerateText = _Adjective.AdjGenerateText;
exports.AdjDictOb = _AdjDictionary.AdjDictOb;
exports.Gender = _Gender2.default;
exports.NDictOb = _NDictionary.NDictOb;
exports.NGenerateText = _Noun.NGenerateText;
exports.NounOb = _Noun.NounOb;
exports.Plurality = _Noun.Plurality;
exports.NPGenerateText = _NP.NPGenerateText;
exports.NPOb = _NP.NPOb;
exports.ProGenerateText = _Pronoun.ProGenerateText;
exports.ProOb = _Pronoun.ProOb;
exports.VDictOb = _VDictionary.VDictOb;
exports.VGenerateText = _Verb.VGenerateText;
exports.VPGenerateText = _VP.VPGenerateText;
exports.VPOb = _VP.VPOb;