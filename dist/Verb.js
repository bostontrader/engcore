'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VGenerateText = exports.VErrors = exports.VerbOb = exports.Tense = undefined;

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VerbOb(props) {
	this.t = _SchemaConstants2.default.V.t;
	this.v = _SchemaConstants2.default.V.cv;

	this.base = props.base;
	this.pastForm = props.pastForm;
	this.sForm = props.sForm;
	this.ingForm = props.ingForm;
	this.ppForm = props.ppForm;
}

var VErrors = {
	'VERB_BASE_UNDEFINED': 'Verb base undefined'
	// Tense:         Past or present?
	// Modal:        Modal or not?
	//    They could find or  They found
	//Aspect:        Perfect or not?
	//    It has gone
	//or
	//It goes
	//Continuous or not?
	//    It was happening
	//or
	//It happened
	//Voice:         Passive or active?
	//    They were informed
	//or
	//He informed them

	// See: https://en.wikipedia.org/wiki/Tense%E2%80%93aspect%E2%80%93mood

};var Tense = {
	'NoneSelected': 0,
	'Past': 100,
	'Present': 200
};

var VGenerateText = function VGenerateText(verb) {

	if (!verb.base) return { e: VErrors.VERB_BASE_UNDEFINED };

	return verb.base;
};

exports.Tense = Tense;
exports.VerbOb = VerbOb;
exports.VErrors = VErrors;
exports.VGenerateText = VGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WZXJiLmpzIl0sIm5hbWVzIjpbIlZlcmJPYiIsInByb3BzIiwidCIsIlYiLCJ2IiwiY3YiLCJiYXNlIiwicGFzdEZvcm0iLCJzRm9ybSIsImluZ0Zvcm0iLCJwcEZvcm0iLCJWRXJyb3JzIiwiVGVuc2UiLCJWR2VuZXJhdGVUZXh0IiwidmVyYiIsImUiLCJWRVJCX0JBU0VfVU5ERUZJTkVEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ3RCLE1BQUtDLENBQUwsR0FBUywwQkFBT0MsQ0FBUCxDQUFTRCxDQUFsQjtBQUNBLE1BQUtFLENBQUwsR0FBUywwQkFBT0QsQ0FBUCxDQUFTRSxFQUFsQjs7QUFFQSxNQUFLQyxJQUFMLEdBQWdCTCxNQUFNSyxJQUF0QjtBQUNBLE1BQUtDLFFBQUwsR0FBZ0JOLE1BQU1NLFFBQXRCO0FBQ0EsTUFBS0MsS0FBTCxHQUFnQlAsTUFBTU8sS0FBdEI7QUFDQSxNQUFLQyxPQUFMLEdBQWdCUixNQUFNUSxPQUF0QjtBQUNBLE1BQUtDLE1BQUwsR0FBZ0JULE1BQU1TLE1BQXRCO0FBRUE7O0FBRUQsSUFBTUMsVUFBVTtBQUNmLHdCQUFzQjtBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBbkJnQixDQUFoQixDQXFCQSxJQUFNQyxRQUFRO0FBQ2IsaUJBQWUsQ0FERjtBQUViLFNBQWEsR0FGQTtBQUdiLFlBQWE7QUFIQSxDQUFkOztBQU1BLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVOztBQUUvQixLQUFHLENBQUNBLEtBQUtSLElBQVQsRUFDQyxPQUFPLEVBQUNTLEdBQUVKLFFBQVFLLG1CQUFYLEVBQVA7O0FBRUQsUUFBT0YsS0FBS1IsSUFBWjtBQUNBLENBTkQ7O1FBUVFNLEssR0FBQUEsSztRQUNBWixNLEdBQUFBLE07UUFDQVcsTyxHQUFBQSxPO1FBQ0FFLGEsR0FBQUEsYSIsImZpbGUiOiJWZXJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNjaGVtYSAgIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuXG5mdW5jdGlvbiBWZXJiT2IocHJvcHMpIHtcblx0dGhpcy50ID0gU2NoZW1hLlYudFxuXHR0aGlzLnYgPSBTY2hlbWEuVi5jdlxuXG5cdHRoaXMuYmFzZSAgICAgPSBwcm9wcy5iYXNlXG5cdHRoaXMucGFzdEZvcm0gPSBwcm9wcy5wYXN0Rm9ybVxuXHR0aGlzLnNGb3JtICAgID0gcHJvcHMuc0Zvcm1cblx0dGhpcy5pbmdGb3JtICA9IHByb3BzLmluZ0Zvcm1cblx0dGhpcy5wcEZvcm0gICA9IHByb3BzLnBwRm9ybVxuXG59XG5cbmNvbnN0IFZFcnJvcnMgPSB7XG5cdCdWRVJCX0JBU0VfVU5ERUZJTkVEJzonVmVyYiBiYXNlIHVuZGVmaW5lZCdcbn1cbi8vIFRlbnNlOiAgICAgICAgIFBhc3Qgb3IgcHJlc2VudD9cbi8vIE1vZGFsOiAgICAgICAgTW9kYWwgb3Igbm90P1xuLy8gICAgVGhleSBjb3VsZCBmaW5kIG9yICBUaGV5IGZvdW5kXG4vL0FzcGVjdDogICAgICAgIFBlcmZlY3Qgb3Igbm90P1xuLy8gICAgSXQgaGFzIGdvbmVcbi8vb3Jcbi8vSXQgZ29lc1xuLy9Db250aW51b3VzIG9yIG5vdD9cbi8vICAgIEl0IHdhcyBoYXBwZW5pbmdcbi8vb3Jcbi8vSXQgaGFwcGVuZWRcbi8vVm9pY2U6ICAgICAgICAgUGFzc2l2ZSBvciBhY3RpdmU/XG4vLyAgICBUaGV5IHdlcmUgaW5mb3JtZWRcbi8vb3Jcbi8vSGUgaW5mb3JtZWQgdGhlbVxuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RlbnNlJUUyJTgwJTkzYXNwZWN0JUUyJTgwJTkzbW9vZFxuXG5jb25zdCBUZW5zZSA9IHtcblx0J05vbmVTZWxlY3RlZCc6MCxcblx0J1Bhc3QnOiAgICAgIDEwMCxcblx0J1ByZXNlbnQnOiAgIDIwMCxcbn1cblxuY29uc3QgVkdlbmVyYXRlVGV4dCA9ICh2ZXJiKSA9PiB7XG5cblx0aWYoIXZlcmIuYmFzZSlcblx0XHRyZXR1cm4ge2U6VkVycm9ycy5WRVJCX0JBU0VfVU5ERUZJTkVEfVxuXG5cdHJldHVybiB2ZXJiLmJhc2Vcbn1cblxuZXhwb3J0IHtUZW5zZX1cbmV4cG9ydCB7VmVyYk9ifVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWR2VuZXJhdGVUZXh0fVxuIl19