'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProGenerateText = exports.ProOb = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Noun = require('./Noun');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Every instance of a pronoun should be immutable and have this shape
function ProOb(props) {
    this.t = _SchemaConstants2.default.Pro.t;
    this.v = _SchemaConstants2.default.Pro.cv;
    this.subject = props.subject || false; // subject ? if not then object
    this.plurality = props.plurality || _Noun.Plurality.NoneSelected;
    this.person = props.person;
}

var ProGenerateText = function ProGenerateText(pronoun) {

    var retVal = 'BAD PRONOUN CONFIGURATION';

    var subject = pronoun.subject,
        plurality = pronoun.plurality,
        person = pronoun.person;


    if (subject) {
        if (plurality === _Noun.Plurality.Singular) {
            if (person === 1) {
                retVal = "I";
            } else if (person === 2) {} else if (person === 3) {} else {
                // p is already set to a suitable default. do nothing.
            }
        } else if (plurality === _Noun.Plurality.Plural) {
            if (person === 1) {
                retVal = "we";
            } else if (person === 2) {} else if (person === 3) {} else {
                // p is already set to a suitable default. do nothing.
            }
        } else {
                // p is already set to a suitable default. do nothing.
            }
    } else {
        // must be object
        if (plurality === _Noun.Plurality.Singular) {
            if (person === 1) {} else if (person === 2) {} else if (person === 3) {} else {
                // p is already set to a suitable default. do nothing.
            }
        } else if (plurality === _Noun.Plurality.Plural) {
            if (person === 1) {
                retVal = "us";
            } else if (person === 2) {} else if (person === 3) {} else {
                // p is already set to a suitable default. do nothing.
            }
        } else {
                // p is already set to a suitable default. do nothing.
            }
    }

    return retVal;
};

exports.ProOb = ProOb;
exports.ProGenerateText = ProGenerateText;