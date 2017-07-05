'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProGenerateText = exports.ProOb = undefined;

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Noun = require('./Noun');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Every instance of a pronoun should be immutable and have this shape
function ProOb(props) {
    this.t = _SchemaConstants2.default.Pro.t;
    this.v = _SchemaConstants2.default.Pro.cv;
    this.subject = props.subject || false; // subject ? if not then object
    this.possessive = props.possessive || false;
    this.plurality = props.plurality || _Noun.Plurality.NoneSelected;
    this.person = props.person;
    this.gender = props.gender;
}

var ProGenerateText = function ProGenerateText(pronoun) {

    var retVal = 'BAD PRONOUN CONFIGURATION';

    var subject = pronoun.subject,
        possessive = pronoun.possessive,
        plurality = pronoun.plurality,
        person = pronoun.person,
        gender = pronoun.gender;


    if (possessive) {
        if (plurality === _Noun.Plurality.Singular) {
            if (person === 1) {
                retVal = "mine";
            } else if (person === 2) {
                retVal = "yours";
            } else if (person === 3) {
                if (gender === _Gender2.default.Male) {
                    retVal = "his";
                } else if (gender === _Gender2.default.Female) {
                    retVal = "hers";
                } else {}
            }
        } else if (plurality === _Noun.Plurality.Plural) {
            if (person === 1) {
                retVal = "ours";
            } else if (person === 2) {
                retVal = "yours";
            } else if (person === 3) {
                retVal = "theirs";
            }
        }
    } else if (subject) {
        if (plurality === _Noun.Plurality.Singular) {
            if (person === 1) {
                retVal = "I";
            } else if (person === 2) {
                retVal = "you";
            } else if (person === 3) {
                if (gender === _Gender2.default.Male) {
                    retVal = "he";
                } else if (gender === _Gender2.default.Female) {
                    retVal = "she";
                } else {
                    retVal = "it";
                }
            }
        } else if (plurality === _Noun.Plurality.Plural) {
            if (person === 1) {
                retVal = "we";
            } else if (person === 2) {
                retVal = "you";
            } else if (person === 3) {
                retVal = "they";
            }
        }
    } else {
        // must be object
        if (plurality === _Noun.Plurality.Singular) {
            if (person === 1) {
                retVal = "me";
            } else if (person === 2) {
                retVal = "you";
            } else if (person === 3) {
                if (gender === _Gender2.default.Male) {
                    retVal = "him";
                } else if (gender === _Gender2.default.Female) {
                    retVal = "her";
                } else {
                    retVal = "it";
                }
            }
        } else if (plurality === _Noun.Plurality.Plural) {
            if (person === 1) {
                retVal = "us";
            } else if (person === 2) {} else if (person === 3) {}
        }
    }

    return retVal;
};

exports.ProOb = ProOb;
exports.ProGenerateText = ProGenerateText;