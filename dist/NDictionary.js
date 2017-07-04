'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NDictOb = undefined;

var _Noun = require('./Noun');

/*
The plural form of most nouns can be made by changing the ending according to some rules.
But some nouns have an irregular form.  If so, store the irregular form in the 'plural' key.

The plural form of some nouns is the same as the base.  For example, fish, deer, and sheep.
If so, treat these nouns as with irregular plural.
 */

// The dictionary should be immutable
var NDictOb = {
    arctic: new _Noun.NounOb({ base: 'arctic', proper: true }),
    bakery: new _Noun.NounOb({ base: 'bakery' }),
    ball: new _Noun.NounOb({ base: 'ball' }),
    bathroom: new _Noun.NounOb({ base: 'bathroom' }),
    bump: new _Noun.NounOb({ base: 'bump' }),
    car: new _Noun.NounOb({ base: 'car' }),
    cat: new _Noun.NounOb({ base: 'cat' }),
    coach: new _Noun.NounOb({ base: 'coach' }),
    day: new _Noun.NounOb({ base: 'day' }),
    doctor: new _Noun.NounOb({ base: 'doctor' }),
    dog: new _Noun.NounOb({ base: 'dog' }),
    forest: new _Noun.NounOb({ base: 'forest' }),
    hat: new _Noun.NounOb({ base: 'hat' }),
    house: new _Noun.NounOb({ base: 'house' }),
    job: new _Noun.NounOb({ base: 'job' }),
    man: new _Noun.NounOb({ base: 'man' }),
    mat: new _Noun.NounOb({ base: 'mat' }),
    minute: new _Noun.NounOb({ base: 'minute' }),
    sun: new _Noun.NounOb({ base: 'sun' }),
    thief: new _Noun.NounOb({ base: 'thief' })
};

exports.NDictOb = NDictOb;