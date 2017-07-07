'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PreGenerateText = exports.PreOb = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PreOb(props) {
    this.t = _SchemaConstants2.default.Pre.t;
    this.v = _SchemaConstants2.default.Pre.cv;
    this.base = props.base;
}

var PreGenerateText = function PreGenerateText(pre) {
    return pre.base;
};

exports.PreOb = PreOb;
exports.PreGenerateText = PreGenerateText;