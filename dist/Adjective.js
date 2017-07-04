'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdjOb = exports.AdjGenerateText = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Every instance of a adj should be immutable and have this shape
function AdjOb(props) {
    this.t = _SchemaConstants2.default.Adj.t;
    this.v = _SchemaConstants2.default.Adj.cv;
    this.base = props.base;
    this.silentH = props.silentH || false;
}

var AdjGenerateText = function AdjGenerateText(adj) {
    return adj.base;
};

exports.AdjGenerateText = AdjGenerateText;
exports.AdjOb = AdjOb;