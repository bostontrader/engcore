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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QcmVQLmpzIl0sIm5hbWVzIjpbIlByZVBPYiIsInByb3BzIiwidCIsIlByZVAiLCJ2IiwiY3YiLCJwcmUiLCJucCIsIlByZVBHZW5lcmF0ZVRleHQiLCJwcmVwIiwiYmFzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1Qjs7QUFFbkIsU0FBS0MsQ0FBTCxHQUFTLDBCQUFPQyxJQUFQLENBQVlELENBQXJCO0FBQ0EsU0FBS0UsQ0FBTCxHQUFTLDBCQUFPRCxJQUFQLENBQVlFLEVBQXJCOztBQUVBLFNBQUtDLEdBQUwsR0FBV0wsTUFBTUssR0FBakI7QUFDQSxTQUFLQyxFQUFMLEdBQVVOLE1BQU1NLEVBQWhCO0FBQ0g7O0FBRUQ7QUFDQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxJQUFELEVBQVU7QUFDL0IsV0FBT0EsS0FBS0gsR0FBTCxDQUFTSSxJQUFULEdBQWdCLEdBQWhCLEdBQXNCLHdCQUFlRCxLQUFLRixFQUFwQixDQUE3QjtBQUNILENBRkQ7O1FBSVFQLE0sR0FBQUEsTTtRQUNBUSxnQixHQUFBQSxnQiIsImZpbGUiOiJQcmVQLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOUEdlbmVyYXRlVGV4dH0gZnJvbSAnLi9OUCdcbmltcG9ydCBTY2hlbWEgICAgICAgICAgIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuXG5mdW5jdGlvbiBQcmVQT2IocHJvcHMpIHtcblxuICAgIHRoaXMudCA9IFNjaGVtYS5QcmVQLnRcbiAgICB0aGlzLnYgPSBTY2hlbWEuUHJlUC5jdlxuXG4gICAgdGhpcy5wcmUgPSBwcm9wcy5wcmVcbiAgICB0aGlzLm5wID0gcHJvcHMubnBcbn1cblxuLy8gcHJlcDogT2JqZWN0XG5jb25zdCBQcmVQR2VuZXJhdGVUZXh0ID0gKHByZXApID0+IHtcbiAgICByZXR1cm4gcHJlcC5wcmUuYmFzZSArICcgJyArIE5QR2VuZXJhdGVUZXh0KHByZXAubnApXG59XG5cbmV4cG9ydCB7UHJlUE9ifVxuZXhwb3J0IHtQcmVQR2VuZXJhdGVUZXh0fVxuIl19