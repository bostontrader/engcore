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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZGplY3RpdmUuanMiXSwibmFtZXMiOlsiQWRqT2IiLCJwcm9wcyIsInQiLCJBZGoiLCJ2IiwiY3YiLCJiYXNlIiwic2lsZW50SCIsIkFkakdlbmVyYXRlVGV4dCIsImFkaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNsQixTQUFLQyxDQUFMLEdBQVMsMEJBQU9DLEdBQVAsQ0FBV0QsQ0FBcEI7QUFDQSxTQUFLRSxDQUFMLEdBQVMsMEJBQU9ELEdBQVAsQ0FBV0UsRUFBcEI7QUFDQSxTQUFLQyxJQUFMLEdBQWVMLE1BQU1LLElBQXJCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCLEtBQWhDO0FBQ0g7O0FBRUQsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQVM7QUFBQyxXQUFPQSxJQUFJSCxJQUFYO0FBQWdCLENBQWxEOztRQUVRRSxlLEdBQUFBLGU7UUFDQVIsSyxHQUFBQSxLIiwiZmlsZSI6IkFkamVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2hlbWEgIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuXG4vLyBFdmVyeSBpbnN0YW5jZSBvZiBhIGFkaiBzaG91bGQgYmUgaW1tdXRhYmxlIGFuZCBoYXZlIHRoaXMgc2hhcGVcbmZ1bmN0aW9uIEFkak9iKHByb3BzKSB7XG4gICAgdGhpcy50ID0gU2NoZW1hLkFkai50XG4gICAgdGhpcy52ID0gU2NoZW1hLkFkai5jdlxuICAgIHRoaXMuYmFzZSAgICA9IHByb3BzLmJhc2VcbiAgICB0aGlzLnNpbGVudEggPSBwcm9wcy5zaWxlbnRIIHx8IGZhbHNlXG59XG5cbmNvbnN0IEFkakdlbmVyYXRlVGV4dCA9IChhZGopID0+IHtyZXR1cm4gYWRqLmJhc2V9XG5cbmV4cG9ydCB7QWRqR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtBZGpPYn1cbiJdfQ==