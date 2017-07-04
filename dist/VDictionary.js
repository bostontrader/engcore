'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VDictOb = undefined;

var _Verb = require('./Verb');

// The dictionary should be immutable
var VDictOb = {
    play: new _Verb.VerbOb({ base: 'play', pastForm: 'played' }),
    shine: new _Verb.VerbOb({ base: 'shine', pastForm: 'shined' }),
    sit: new _Verb.VerbOb({ base: 'sit', pastForm: 'sat' })
};

exports.VDictOb = VDictOb;