'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VGenerateText = exports.VerbOb = exports.Tense = undefined;

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

var Tense = {
    'NoneSelected': 0,
    'Past': 100,
    'Present': 200
};

var VGenerateText = function VGenerateText(verb, actionTime) {
    if (actionTime) return verb.base + 'ed';
    return verb.base;
};

exports.Tense = Tense;
exports.VerbOb = VerbOb;
exports.VGenerateText = VGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WZXJiLmpzIl0sIm5hbWVzIjpbIlZlcmJPYiIsInByb3BzIiwidCIsIlYiLCJ2IiwiY3YiLCJiYXNlIiwicGFzdEZvcm0iLCJzRm9ybSIsImluZ0Zvcm0iLCJwcEZvcm0iLCJUZW5zZSIsIlZHZW5lcmF0ZVRleHQiLCJ2ZXJiIiwiYWN0aW9uVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNuQixTQUFLQyxDQUFMLEdBQVMsMEJBQU9DLENBQVAsQ0FBU0QsQ0FBbEI7QUFDQSxTQUFLRSxDQUFMLEdBQVMsMEJBQU9ELENBQVAsQ0FBU0UsRUFBbEI7O0FBRUEsU0FBS0MsSUFBTCxHQUFnQkwsTUFBTUssSUFBdEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTixNQUFNTSxRQUF0QjtBQUNBLFNBQUtDLEtBQUwsR0FBZ0JQLE1BQU1PLEtBQXRCO0FBQ0EsU0FBS0MsT0FBTCxHQUFnQlIsTUFBTVEsT0FBdEI7QUFDQSxTQUFLQyxNQUFMLEdBQWdCVCxNQUFNUyxNQUF0QjtBQUVIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQyxRQUFRO0FBQ1Ysb0JBQWUsQ0FETDtBQUVWLFlBQWEsR0FGSDtBQUdWLGVBQWE7QUFISCxDQUFkOztBQU1BLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFPQyxVQUFQLEVBQXNCO0FBQ3hDLFFBQUdBLFVBQUgsRUFBZSxPQUFPRCxLQUFLUCxJQUFMLEdBQVksSUFBbkI7QUFDZixXQUFPTyxLQUFLUCxJQUFaO0FBQ0gsQ0FIRDs7UUFLUUssSyxHQUFBQSxLO1FBQ0FYLE0sR0FBQUEsTTtRQUNBWSxhLEdBQUFBLGEiLCJmaWxlIjoiVmVyYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2hlbWEgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcblxuZnVuY3Rpb24gVmVyYk9iKHByb3BzKSB7XG4gICAgdGhpcy50ID0gU2NoZW1hLlYudFxuICAgIHRoaXMudiA9IFNjaGVtYS5WLmN2XG5cbiAgICB0aGlzLmJhc2UgICAgID0gcHJvcHMuYmFzZVxuICAgIHRoaXMucGFzdEZvcm0gPSBwcm9wcy5wYXN0Rm9ybVxuICAgIHRoaXMuc0Zvcm0gICAgPSBwcm9wcy5zRm9ybVxuICAgIHRoaXMuaW5nRm9ybSAgPSBwcm9wcy5pbmdGb3JtXG4gICAgdGhpcy5wcEZvcm0gICA9IHByb3BzLnBwRm9ybVxuXG59XG5cbi8vIFRlbnNlOiAgICAgICAgIFBhc3Qgb3IgcHJlc2VudD9cbi8vIE1vZGFsOiAgICAgICAgTW9kYWwgb3Igbm90P1xuLy8gICAgVGhleSBjb3VsZCBmaW5kIG9yICBUaGV5IGZvdW5kXG4vL0FzcGVjdDogICAgICAgIFBlcmZlY3Qgb3Igbm90P1xuLy8gICAgSXQgaGFzIGdvbmVcbi8vb3Jcbi8vSXQgZ29lc1xuLy9Db250aW51b3VzIG9yIG5vdD9cbi8vICAgIEl0IHdhcyBoYXBwZW5pbmdcbi8vb3Jcbi8vSXQgaGFwcGVuZWRcbi8vVm9pY2U6ICAgICAgICAgUGFzc2l2ZSBvciBhY3RpdmU/XG4vLyAgICBUaGV5IHdlcmUgaW5mb3JtZWRcbi8vb3Jcbi8vSGUgaW5mb3JtZWQgdGhlbVxuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RlbnNlJUUyJTgwJTkzYXNwZWN0JUUyJTgwJTkzbW9vZFxuXG5jb25zdCBUZW5zZSA9IHtcbiAgICAnTm9uZVNlbGVjdGVkJzowLFxuICAgICdQYXN0JzogICAgICAxMDAsXG4gICAgJ1ByZXNlbnQnOiAgIDIwMCxcbn1cblxuY29uc3QgVkdlbmVyYXRlVGV4dCA9ICh2ZXJiLCBhY3Rpb25UaW1lKSA9PiB7XG4gICAgaWYoYWN0aW9uVGltZSkgcmV0dXJuIHZlcmIuYmFzZSArICdlZCdcbiAgICByZXR1cm4gdmVyYi5iYXNlXG59XG5cbmV4cG9ydCB7VGVuc2V9XG5leHBvcnQge1ZlcmJPYn1cbmV4cG9ydCB7VkdlbmVyYXRlVGV4dH1cbiJdfQ==