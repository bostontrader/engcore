'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VPOb = exports.VPGenerateText = exports.VGenerateText = exports.VErrors = exports.VerbOb = exports.VDictOb = exports.Tense = exports.Schema = exports.PronounType = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PreDictOb = exports.PreOb = exports.Person = exports.NPOb = exports.NPGenerateText = exports.Plurality = exports.NounOb = exports.NPErrors = exports.NGenerateText = exports.NErrors = exports.NDictOb = exports.Gender = exports.AdjDictOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

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
exports.PreOb = _Pre.PreOb;
exports.PreDictOb = _PreDictionary2.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpEaWN0T2IiLCJHZW5kZXIiLCJORGljdE9iIiwiTkVycm9ycyIsIk5HZW5lcmF0ZVRleHQiLCJOUEVycm9ycyIsIk5vdW5PYiIsIlBsdXJhbGl0eSIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlBlcnNvbiIsIlByZU9iIiwiUHJlRGljdE9iIiwiUHJlUEdlbmVyYXRlVGV4dCIsIlByZVBPYiIsIlByb0Vycm9ycyIsIlByb0dlbmVyYXRlVGV4dCIsIlByb09iIiwiUHJvbm91blR5cGUiLCJTY2hlbWEiLCJUZW5zZSIsIlZEaWN0T2IiLCJWZXJiT2IiLCJWRXJyb3JzIiwiVkdlbmVyYXRlVGV4dCIsIlZQR2VuZXJhdGVUZXh0IiwiVlBPYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUlBOztBQUdBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7UUFHUUEsUztRQUNBQyxlO1FBQ0FDLFM7UUFDQUMsTTtRQUNBQyxPO1FBQ0FDLE87UUFDQUMsYTtRQUNBQyxRO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxjO1FBQ0FDLEk7UUFDQUMsTTtRQUNBQyxLO1FBQ0FDLFM7UUFDQUMsZ0I7UUFDQUMsTTtRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxXO1FBQ0FDLE07UUFDQUMsSztRQUNBQyxPO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxhO1FBQ0FDLGM7UUFDQUMsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWRqRXJyb3JzfSAgICAgICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0FkakdlbmVyYXRlVGV4dH0gIGZyb20gJy4vQWRqJ1xuaW1wb3J0IEFkakRpY3RPYiAgICAgICAgICBmcm9tICcuL0FkakRpY3Rpb25hcnknXG5pbXBvcnQgR2VuZGVyICAgICAgICAgICAgIGZyb20gJy4vR2VuZGVyJ1xuaW1wb3J0IE5EaWN0T2IgICAgICAgICAgICBmcm9tICcuL05EaWN0aW9uYXJ5J1xuaW1wb3J0IHtORXJyb3JzfSAgICAgICAgICBmcm9tICcuL05vdW4nXG5pbXBvcnQge05HZW5lcmF0ZVRleHR9ICAgIGZyb20gJy4vTm91bidcbmltcG9ydCB7Tm91bk9ifSAgICAgICAgICAgZnJvbSAnLi9Ob3VuJ1xuaW1wb3J0IHtQbHVyYWxpdHl9ICAgICAgICBmcm9tICcuL05vdW4nXG5pbXBvcnQge05QRXJyb3JzfSAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge05QR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vTlAnXG5pbXBvcnQge05QT2J9ICAgICAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQgUGVyc29uICAgICAgICAgICAgIGZyb20gJy4vUGVyc29uJ1xuaW1wb3J0IHtQcmVPYn0gICAgICAgICAgICBmcm9tICcuL1ByZSdcbmltcG9ydCBQcmVEaWN0T2IgICAgICAgICAgZnJvbSAnLi9QcmVEaWN0aW9uYXJ5J1xuaW1wb3J0IHtQcmVQR2VuZXJhdGVUZXh0fSBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ByZVBPYn0gICAgICAgICAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJvRXJyb3JzfSAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb0dlbmVyYXRlVGV4dH0gIGZyb20gJy4vUHJvJ1xuaW1wb3J0IHtQcm9PYn0gICAgICAgICAgICBmcm9tICcuL1BybydcbmltcG9ydCB7UHJvbm91blR5cGV9ICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQgU2NoZW1hICAgICAgICAgICAgIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuaW1wb3J0IFZEaWN0T2IgICAgICAgICAgICBmcm9tICcuL1ZEaWN0aW9uYXJ5J1xuaW1wb3J0IHtUZW5zZX0gICAgICAgICAgICBmcm9tICcuL1ZlcmInXG5pbXBvcnQge1ZlcmJPYn0gICAgICAgICAgIGZyb20gJy4vVmVyYidcbmltcG9ydCB7VkVycm9yc30gICAgICAgICAgZnJvbSAnLi9WZXJiJ1xuaW1wb3J0IHtWR2VuZXJhdGVUZXh0fSAgICBmcm9tICcuL1ZlcmInXG5pbXBvcnQge1ZQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vVlAnXG5pbXBvcnQge1ZQT2J9ICAgICAgICAgICAgIGZyb20gJy4vVlAnXG5cbmV4cG9ydCB7QWRqRXJyb3JzfVxuZXhwb3J0IHtBZGpHZW5lcmF0ZVRleHR9XG5leHBvcnQge0FkakRpY3RPYn1cbmV4cG9ydCB7R2VuZGVyfVxuZXhwb3J0IHtORGljdE9ifVxuZXhwb3J0IHtORXJyb3JzfVxuZXhwb3J0IHtOR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOUEVycm9yc31cbmV4cG9ydCB7Tm91bk9ifVxuZXhwb3J0IHtQbHVyYWxpdHl9XG5leHBvcnQge05QR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOUE9ifVxuZXhwb3J0IHtQZXJzb259XG5leHBvcnQge1ByZU9ifVxuZXhwb3J0IHtQcmVEaWN0T2J9XG5leHBvcnQge1ByZVBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZVBPYn1cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtQcm9HZW5lcmF0ZVRleHR9XG5leHBvcnQge1Byb09ifVxuZXhwb3J0IHtQcm9ub3VuVHlwZX1cbmV4cG9ydCB7U2NoZW1hfVxuZXhwb3J0IHtUZW5zZX1cbmV4cG9ydCB7VkRpY3RPYn1cbmV4cG9ydCB7VmVyYk9ifVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtWUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7VlBPYn1cbiJdfQ==