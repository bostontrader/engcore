'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdjDictOb = undefined;

var _Adjective = require('./Adjective');

// The dictionary should be immutable
var AdjDictOb = {
    big: new _Adjective.AdjOb({ base: 'big' }),
    cold: new _Adjective.AdjOb({ base: 'cold' }),
    good: new _Adjective.AdjOb({ base: 'good' }),
    green: new _Adjective.AdjOb({ base: 'green' }),
    honest: new _Adjective.AdjOb({ base: 'honest', silentH: true }),
    itchy: new _Adjective.AdjOb({ base: 'itchy' }),
    long: new _Adjective.AdjOb({ base: 'long' }),
    lonely: new _Adjective.AdjOb({ base: 'lonely' }),
    red: new _Adjective.AdjOb({ base: 'red' }),
    small: new _Adjective.AdjOb({ base: 'small' }),
    tiny: new _Adjective.AdjOb({ base: 'tiny' }),
    ugly: new _Adjective.AdjOb({ base: 'ugly' }),
    wet: new _Adjective.AdjOb({ base: 'wet' })
};

exports.AdjDictOb = AdjDictOb;