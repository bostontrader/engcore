'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ClauseGenerateText = exports.ClauseOb = exports.ClauseErrors = undefined;

var _NP = require('./pos/np/NP');

var _SchemaConstants = require('./pos/SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _VP = require('./VP');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClauseOb(props) {

	this.t = _SchemaConstants2.default.Clause.t;
	this.v = _SchemaConstants2.default.Clause.cv;

	// p50 the head of a clause, aka the predicate is a VP
	this.np = props.np;
	this.vp = props.vp;
}

var ClauseErrors = {
	'NO_NP': 'This Clause has no noun phrase.',
	'NO_VP': 'This Clause has no verb phrase.'

};

var ClauseGenerateText = function ClauseGenerateText(clause) {

	if (!clause.np) return { e: ClauseErrors.NO_NP };

	if (!clause.vp) return { e: ClauseErrors.NO_VP };

	return (0, _NP.NPGenerateText)(clause.np) + ' ' + (0, _VP.VPGenerateText)(clause.vp);
};

exports.ClauseErrors = ClauseErrors;
exports.ClauseOb = ClauseOb;
exports.ClauseGenerateText = ClauseGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGF1c2UuanMiXSwibmFtZXMiOlsiQ2xhdXNlT2IiLCJwcm9wcyIsInQiLCJDbGF1c2UiLCJ2IiwiY3YiLCJucCIsInZwIiwiQ2xhdXNlRXJyb3JzIiwiQ2xhdXNlR2VuZXJhdGVUZXh0IiwiY2xhdXNlIiwiZSIsIk5PX05QIiwiTk9fVlAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7O0FBRXhCLE1BQUtDLENBQUwsR0FBUywwQkFBT0MsTUFBUCxDQUFjRCxDQUF2QjtBQUNBLE1BQUtFLENBQUwsR0FBUywwQkFBT0QsTUFBUCxDQUFjRSxFQUF2Qjs7QUFFQTtBQUNBLE1BQUtDLEVBQUwsR0FBVUwsTUFBTUssRUFBaEI7QUFDQSxNQUFLQyxFQUFMLEdBQVVOLE1BQU1NLEVBQWhCO0FBRUE7O0FBRUQsSUFBTUMsZUFBZTtBQUNwQixVQUFRLGlDQURZO0FBRXBCLFVBQVE7O0FBRlksQ0FBckI7O0FBTUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsTUFBRCxFQUFZOztBQUV0QyxLQUFHLENBQUNBLE9BQU9KLEVBQVgsRUFDQyxPQUFPLEVBQUNLLEdBQUVILGFBQWFJLEtBQWhCLEVBQVA7O0FBRUQsS0FBRyxDQUFDRixPQUFPSCxFQUFYLEVBQ0MsT0FBTyxFQUFDSSxHQUFFSCxhQUFhSyxLQUFoQixFQUFQOztBQUVELFFBQU8sd0JBQWVILE9BQU9KLEVBQXRCLElBQTRCLEdBQTVCLEdBQWtDLHdCQUFlSSxPQUFPSCxFQUF0QixDQUF6QztBQUVBLENBVkQ7O1FBWVFDLFksR0FBQUEsWTtRQUNBUixRLEdBQUFBLFE7UUFDQVMsa0IsR0FBQUEsa0IiLCJmaWxlIjoiQ2xhdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOUEdlbmVyYXRlVGV4dH0gZnJvbSAnLi9wb3MvbnAvTlAnXG5pbXBvcnQgU2NoZW1hICAgICAgICAgICBmcm9tICcuL3Bvcy9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQge1ZQR2VuZXJhdGVUZXh0fSBmcm9tICcuL1ZQJ1xuXG5mdW5jdGlvbiBDbGF1c2VPYihwcm9wcykge1xuXG5cdHRoaXMudCA9IFNjaGVtYS5DbGF1c2UudFxuXHR0aGlzLnYgPSBTY2hlbWEuQ2xhdXNlLmN2XG5cblx0Ly8gcDUwIHRoZSBoZWFkIG9mIGEgY2xhdXNlLCBha2EgdGhlIHByZWRpY2F0ZSBpcyBhIFZQXG5cdHRoaXMubnAgPSBwcm9wcy5ucFxuXHR0aGlzLnZwID0gcHJvcHMudnBcblxufVxuXG5jb25zdCBDbGF1c2VFcnJvcnMgPSB7XG5cdCdOT19OUCc6J1RoaXMgQ2xhdXNlIGhhcyBubyBub3VuIHBocmFzZS4nLFxuXHQnTk9fVlAnOidUaGlzIENsYXVzZSBoYXMgbm8gdmVyYiBwaHJhc2UuJ1xuXG59XG5cbmNvbnN0IENsYXVzZUdlbmVyYXRlVGV4dCA9IChjbGF1c2UpID0+IHtcblxuXHRpZighY2xhdXNlLm5wKVxuXHRcdHJldHVybiB7ZTpDbGF1c2VFcnJvcnMuTk9fTlB9XG5cblx0aWYoIWNsYXVzZS52cClcblx0XHRyZXR1cm4ge2U6Q2xhdXNlRXJyb3JzLk5PX1ZQfVxuXG5cdHJldHVybiBOUEdlbmVyYXRlVGV4dChjbGF1c2UubnApICsgJyAnICsgVlBHZW5lcmF0ZVRleHQoY2xhdXNlLnZwKVxuXG59XG5cbmV4cG9ydCB7Q2xhdXNlRXJyb3JzfVxuZXhwb3J0IHtDbGF1c2VPYn1cbmV4cG9ydCB7Q2xhdXNlR2VuZXJhdGVUZXh0fVxuIl19