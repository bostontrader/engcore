'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VDictOb = undefined;

var _Verb = require('./Verb');

var VDictOb = {
    arrive: new _Verb.VerbOb({ base: 'arrive', pastForm: 'arrived' }),
    //be:  new VerbOb({base:'be',  pastForm:'did'}),
    do: new _Verb.VerbOb({ base: 'do', pastForm: 'did' }),
    fall: new _Verb.VerbOb({ base: 'fall', pastForm: 'fell' }),
    find: new _Verb.VerbOb({ base: 'find', pastForm: 'found' }),
    fly: new _Verb.VerbOb({ base: 'fly', pastForm: 'flew' }),
    go: new _Verb.VerbOb({ base: 'go', pastForm: 'went' }),
    have: new _Verb.VerbOb({ base: 'have', pastForm: 'had' }),
    inform: new _Verb.VerbOb({ base: 'inform', pastForm: 'informed' }),
    know: new _Verb.VerbOb({ base: 'know', pastForm: 'knew' }),
    leave: new _Verb.VerbOb({ base: 'leave', pastForm: 'left' }),
    look: new _Verb.VerbOb({ base: 'look', pastForm: 'looked' }),
    play: new _Verb.VerbOb({ base: 'play', pastForm: 'played' }),
    say: new _Verb.VerbOb({ base: 'say', pastForm: 'said' }),
    shake: new _Verb.VerbOb({ base: 'shake', pastForm: 'shook' }),
    shine: new _Verb.VerbOb({ base: 'shine', pastForm: 'shined' }),
    show: new _Verb.VerbOb({ base: 'show', pastForm: 'showed' }),
    sit: new _Verb.VerbOb({ base: 'sit', pastForm: 'sat' }),
    steal: new _Verb.VerbOb({ base: 'steal', pastForm: 'stole' }),
    stop: new _Verb.VerbOb({ base: 'stop', pastForm: 'stopped' }),
    work: new _Verb.VerbOb({ base: 'work', pastForm: 'worked' })
};

exports.VDictOb = VDictOb;