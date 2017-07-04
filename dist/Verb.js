'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VGenerateText = exports.VerbOb = exports.Tense = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VerbOb(props) {
    this.t = _SchemaConstants2.default.V.t;
    this.v = _SchemaConstants2.default.V.cv;

    this.base = props.base;
    this.pastForm = props.pastForm;
    this.sForm = props.sForm;
    this.ingForm = props.ingForm;
    this.ppForm = props.ppForm;
}

// Tense:         Past or present?
// Modal:        Modal or not?
//    They could find or  They found
//Aspect:        Perfect or not?
//    It has gone
//or
//It goes
//Continuous or not?
//    It was happening
//or
//It happened
//Voice:         Passive or active?
//    They were informed
//or
//He informed them

// See: https://en.wikipedia.org/wiki/Tense%E2%80%93aspect%E2%80%93mood

var Tense = {
    'NoneSelected': 0,
    'Past': 100,
    'Present': 200
};

var VGenerateText = function VGenerateText(verb, actionTime) {
    if (actionTime) return verb.base + 'ed';
    return verb.base;
};

exports.Tense = Tense;
exports.VerbOb = VerbOb;
exports.VGenerateText = VGenerateText;