'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VDictOb = undefined;

var _Verb = require('./Verb');

// The dictionary should be immutable
var VDictOb = {
    //be:  new VerbOb({base:'be',  pastForm:'did'}),
    do: new _Verb.VerbOb({ base: 'do', pastForm: 'did' }),
    fall: new _Verb.VerbOb({ base: 'fall', pastForm: 'fell' }),
    go: new _Verb.VerbOb({ base: 'go', pastForm: 'went' }),
    have: new _Verb.VerbOb({ base: 'have', pastForm: 'had' }),
    know: new _Verb.VerbOb({ base: 'know', pastForm: 'knew' }),

    play: new _Verb.VerbOb({ base: 'play', pastForm: 'played' }),
    shine: new _Verb.VerbOb({ base: 'shine', pastForm: 'shined' }),
    sit: new _Verb.VerbOb({ base: 'sit', pastForm: 'sat' }),

    say: new _Verb.VerbOb({ base: 'say', pastForm: 'said' })

};

exports.VDictOb = VDictOb;