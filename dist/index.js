'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VPOb = exports.VPGenerateText = exports.VGenerateText = exports.VErrors = exports.VerbOb = exports.VDictOb = exports.Tense = exports.Schema = exports.PronounType = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreOb = exports.PreErrors = exports.PreDictOb = exports.Person = exports.NPOb = exports.NPGenerateText = exports.Plurality = exports.NounOb = exports.NPErrors = exports.NGenerateText = exports.NErrors = exports.NDictOb = exports.Gender = exports.AdjDictOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

var _Adj = require('./Adj');

var _AdjDictionary = require('./AdjDictionary');

var _AdjDictionary2 = _interopRequireDefault(_AdjDictionary);

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _NDictionary = require('./NDictionary');

var _NDictionary2 = _interopRequireDefault(_NDictionary);

var _Noun = require('./Noun');

var _NP = require('./NP');

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

var _Pre = require('./Pre');

var _PreDictionary = require('./PreDictionary');

var _PreDictionary2 = _interopRequireDefault(_PreDictionary);

var _PreP = require('./PreP');

var _Pro = require('./Pro');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _VDictionary = require('./VDictionary');

var _VDictionary2 = _interopRequireDefault(_VDictionary);

var _Verb = require('./Verb');

var _VP = require('./VP');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AdjErrors = _Adj.AdjErrors;
exports.AdjGenerateText = _Adj.AdjGenerateText;
exports.AdjDictOb = _AdjDictionary2.default;
exports.Gender = _Gender2.default;
exports.NDictOb = _NDictionary2.default;
exports.NErrors = _Noun.NErrors;
exports.NGenerateText = _Noun.NGenerateText;
exports.NPErrors = _NP.NPErrors;
exports.NounOb = _Noun.NounOb;
exports.Plurality = _Noun.Plurality;
exports.NPGenerateText = _NP.NPGenerateText;
exports.NPOb = _NP.NPOb;
exports.Person = _Person2.default;
exports.PreDictOb = _PreDictionary2.default;
exports.PreErrors = _Pre.PreErrors;
exports.PreOb = _Pre.PreOb;
exports.PrePErrors = _PreP.PrePErrors;
exports.PrePGenerateText = _PreP.PrePGenerateText;
exports.PrePOb = _PreP.PrePOb;
exports.ProErrors = _Pro.ProErrors;
exports.ProGenerateText = _Pro.ProGenerateText;
exports.ProOb = _Pro.ProOb;
exports.PronounType = _Pro.PronounType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _Verb.Tense;
exports.VDictOb = _VDictionary2.default;
exports.VerbOb = _Verb.VerbOb;
exports.VErrors = _Verb.VErrors;
exports.VGenerateText = _Verb.VGenerateText;
exports.VPGenerateText = _VP.VPGenerateText;
exports.VPOb = _VP.VPOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpEaWN0T2IiLCJHZW5kZXIiLCJORGljdE9iIiwiTkVycm9ycyIsIk5HZW5lcmF0ZVRleHQiLCJOUEVycm9ycyIsIk5vdW5PYiIsIlBsdXJhbGl0eSIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlBlcnNvbiIsIlByZURpY3RPYiIsIlByZUVycm9ycyIsIlByZU9iIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm9FcnJvcnMiLCJQcm9HZW5lcmF0ZVRleHQiLCJQcm9PYiIsIlByb25vdW5UeXBlIiwiU2NoZW1hIiwiVGVuc2UiLCJWRGljdE9iIiwiVmVyYk9iIiwiVkVycm9ycyIsIlZHZW5lcmF0ZVRleHQiLCJWUEdlbmVyYXRlVGV4dCIsIlZQT2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7QUFHQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7O0FBR0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7O1FBR1FBLFM7UUFDQUMsZTtRQUNBQyxTO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxPO1FBQ0FDLGE7UUFDQUMsUTtRQUNBQyxNO1FBQ0FDLFM7UUFDQUMsYztRQUNBQyxJO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxTO1FBQ0FDLEs7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFc7UUFDQUMsTTtRQUNBQyxLO1FBQ0FDLE87UUFDQUMsTTtRQUNBQyxPO1FBQ0FDLGE7UUFDQUMsYztRQUNBQyxJIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZGpFcnJvcnN9ICAgICAgICBmcm9tICcuL0FkaidcbmltcG9ydCB7QWRqR2VuZXJhdGVUZXh0fSAgZnJvbSAnLi9BZGonXG5pbXBvcnQgQWRqRGljdE9iICAgICAgICAgIGZyb20gJy4vQWRqRGljdGlvbmFyeSdcbmltcG9ydCBHZW5kZXIgICAgICAgICAgICAgZnJvbSAnLi9HZW5kZXInXG5pbXBvcnQgTkRpY3RPYiAgICAgICAgICAgIGZyb20gJy4vTkRpY3Rpb25hcnknXG5pbXBvcnQge05FcnJvcnN9ICAgICAgICAgIGZyb20gJy4vTm91bidcbmltcG9ydCB7TkdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Ob3VuJ1xuaW1wb3J0IHtOb3VuT2J9ICAgICAgICAgICBmcm9tICcuL05vdW4nXG5pbXBvcnQge1BsdXJhbGl0eX0gICAgICAgIGZyb20gJy4vTm91bidcbmltcG9ydCB7TlBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBHZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBPYn0gICAgICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCBQZXJzb24gICAgICAgICAgICAgZnJvbSAnLi9QZXJzb24nXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgIGZyb20gJy4vUHJlJ1xuaW1wb3J0IHtQcmVPYn0gICAgICAgICAgICBmcm9tICcuL1ByZSdcbmltcG9ydCBQcmVEaWN0T2IgICAgICAgICAgZnJvbSAnLi9QcmVEaWN0aW9uYXJ5J1xuaW1wb3J0IHtQcmVQRXJyb3JzfSAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ByZVBHZW5lcmF0ZVRleHR9IGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUE9ifSAgICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcm9FcnJvcnN9ICAgICAgICBmcm9tICcuL1BybydcbmltcG9ydCB7UHJvR2VuZXJhdGVUZXh0fSAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb09ifSAgICAgICAgICAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IHtQcm9ub3VuVHlwZX0gICAgICBmcm9tICcuL1BybydcbmltcG9ydCBTY2hlbWEgICAgICAgICAgICAgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQgVkRpY3RPYiAgICAgICAgICAgIGZyb20gJy4vVkRpY3Rpb25hcnknXG5pbXBvcnQge1RlbnNlfSAgICAgICAgICAgIGZyb20gJy4vVmVyYidcbmltcG9ydCB7VmVyYk9ifSAgICAgICAgICAgZnJvbSAnLi9WZXJiJ1xuaW1wb3J0IHtWRXJyb3JzfSAgICAgICAgICBmcm9tICcuL1ZlcmInXG5pbXBvcnQge1ZHZW5lcmF0ZVRleHR9ICAgIGZyb20gJy4vVmVyYidcbmltcG9ydCB7VlBHZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBPYn0gICAgICAgICAgICAgZnJvbSAnLi9WUCdcblxuZXhwb3J0IHtBZGpFcnJvcnN9XG5leHBvcnQge0FkakdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7QWRqRGljdE9ifVxuZXhwb3J0IHtHZW5kZXJ9XG5leHBvcnQge05EaWN0T2J9XG5leHBvcnQge05FcnJvcnN9XG5leHBvcnQge05HZW5lcmF0ZVRleHR9XG5leHBvcnQge05QRXJyb3JzfVxuZXhwb3J0IHtOb3VuT2J9XG5leHBvcnQge1BsdXJhbGl0eX1cbmV4cG9ydCB7TlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge05QT2J9XG5leHBvcnQge1BlcnNvbn1cbmV4cG9ydCB7UHJlRGljdE9ifVxuZXhwb3J0IHtQcmVFcnJvcnN9XG5leHBvcnQge1ByZU9ifVxuZXhwb3J0IHtQcmVQRXJyb3JzfVxuZXhwb3J0IHtQcmVQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtQcmVQT2J9XG5leHBvcnQge1Byb0Vycm9yc31cbmV4cG9ydCB7UHJvR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtQcm9PYn1cbmV4cG9ydCB7UHJvbm91blR5cGV9XG5leHBvcnQge1NjaGVtYX1cbmV4cG9ydCB7VGVuc2V9XG5leHBvcnQge1ZEaWN0T2J9XG5leHBvcnQge1ZlcmJPYn1cbmV4cG9ydCB7VkVycm9yc31cbmV4cG9ydCB7VkdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG4iXX0=