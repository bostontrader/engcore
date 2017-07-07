'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrePGenerateText = exports.PrePOb = undefined;

var _NP = require('./NP');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PrePOb(props) {

    this.t = _SchemaConstants2.default.PreP.t;
    this.v = _SchemaConstants2.default.PreP.cv;

    this.pre = props.pre;
    this.np = props.np;
}

// prep: Object
var PrePGenerateText = function PrePGenerateText(prep) {
    return prep.pre.base + ' ' + (0, _NP.NPGenerateText)(prep.np);
};

exports.PrePOb = PrePOb;
exports.PrePGenerateText = PrePGenerateText;