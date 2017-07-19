'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VPOb = exports.VPGenerateText = exports.VGenerateText = exports.VErrors = exports.VerbOb = exports.VDictOb = exports.Tense = exports.Schema = exports.ProType = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreOb = exports.PreErrors = exports.PreDictOb = exports.Person = exports.NPOb = exports.NPGenerateText = exports.Plurality = exports.NounOb = exports.NPErrors = exports.NGenerateText = exports.NErrors = exports.NDictOb = exports.Gender = exports.AdjDictOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

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
exports.ProType = _Pro.ProType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _Verb.Tense;
exports.VDictOb = _VDictionary2.default;
exports.VerbOb = _Verb.VerbOb;
exports.VErrors = _Verb.VErrors;
exports.VGenerateText = _Verb.VGenerateText;
exports.VPGenerateText = _VP.VPGenerateText;
exports.VPOb = _VP.VPOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpEaWN0T2IiLCJHZW5kZXIiLCJORGljdE9iIiwiTkVycm9ycyIsIk5HZW5lcmF0ZVRleHQiLCJOUEVycm9ycyIsIk5vdW5PYiIsIlBsdXJhbGl0eSIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlBlcnNvbiIsIlByZURpY3RPYiIsIlByZUVycm9ycyIsIlByZU9iIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm9FcnJvcnMiLCJQcm9HZW5lcmF0ZVRleHQiLCJQcm9PYiIsIlByb1R5cGUiLCJTY2hlbWEiLCJUZW5zZSIsIlZEaWN0T2IiLCJWZXJiT2IiLCJWRXJyb3JzIiwiVkdlbmVyYXRlVGV4dCIsIlZQR2VuZXJhdGVUZXh0IiwiVlBPYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUlBOztBQUdBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7QUFHQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7UUFHUUEsUztRQUNBQyxlO1FBQ0FDLFM7UUFDQUMsTTtRQUNBQyxPO1FBQ0FDLE87UUFDQUMsYTtRQUNBQyxRO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxjO1FBQ0FDLEk7UUFDQUMsTTtRQUNBQyxTO1FBQ0FDLFM7UUFDQUMsSztRQUNBQyxVO1FBQ0FDLGdCO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxlO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxNO1FBQ0FDLE87UUFDQUMsYTtRQUNBQyxjO1FBQ0FDLEkiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FkakVycm9yc30gICAgICAgIGZyb20gJy4vQWRqJ1xuaW1wb3J0IHtBZGpHZW5lcmF0ZVRleHR9ICBmcm9tICcuL0FkaidcbmltcG9ydCBBZGpEaWN0T2IgICAgICAgICAgZnJvbSAnLi9BZGpEaWN0aW9uYXJ5J1xuaW1wb3J0IEdlbmRlciAgICAgICAgICAgICBmcm9tICcuL0dlbmRlcidcbmltcG9ydCBORGljdE9iICAgICAgICAgICAgZnJvbSAnLi9ORGljdGlvbmFyeSdcbmltcG9ydCB7TkVycm9yc30gICAgICAgICAgZnJvbSAnLi9Ob3VuJ1xuaW1wb3J0IHtOR2VuZXJhdGVUZXh0fSAgICBmcm9tICcuL05vdW4nXG5pbXBvcnQge05vdW5PYn0gICAgICAgICAgIGZyb20gJy4vTm91bidcbmltcG9ydCB7UGx1cmFsaXR5fSAgICAgICAgZnJvbSAnLi9Ob3VuJ1xuaW1wb3J0IHtOUEVycm9yc30gICAgICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUEdlbmVyYXRlVGV4dH0gICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUE9ifSAgICAgICAgICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IFBlcnNvbiAgICAgICAgICAgICBmcm9tICcuL1BlcnNvbidcbmltcG9ydCB7UHJlRXJyb3JzfSAgICAgICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZU9ifSAgICAgICAgICAgIGZyb20gJy4vUHJlJ1xuaW1wb3J0IFByZURpY3RPYiAgICAgICAgICBmcm9tICcuL1ByZURpY3Rpb25hcnknXG5pbXBvcnQge1ByZVBFcnJvcnN9ICAgICAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUEdlbmVyYXRlVGV4dH0gZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQT2J9ICAgICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1Byb0Vycm9yc30gICAgICAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IHtQcm9HZW5lcmF0ZVRleHR9ICBmcm9tICcuL1BybydcbmltcG9ydCB7UHJvT2J9ICAgICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb1R5cGV9ICAgICAgICAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IFNjaGVtYSAgICAgICAgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCBWRGljdE9iICAgICAgICAgICAgZnJvbSAnLi9WRGljdGlvbmFyeSdcbmltcG9ydCB7VGVuc2V9ICAgICAgICAgICAgZnJvbSAnLi9WZXJiJ1xuaW1wb3J0IHtWZXJiT2J9ICAgICAgICAgICBmcm9tICcuL1ZlcmInXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgICAgIGZyb20gJy4vVmVyYidcbmltcG9ydCB7VkdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9WZXJiJ1xuaW1wb3J0IHtWUEdlbmVyYXRlVGV4dH0gICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUE9ifSAgICAgICAgICAgICBmcm9tICcuL1ZQJ1xuXG5leHBvcnQge0FkakVycm9yc31cbmV4cG9ydCB7QWRqR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtBZGpEaWN0T2J9XG5leHBvcnQge0dlbmRlcn1cbmV4cG9ydCB7TkRpY3RPYn1cbmV4cG9ydCB7TkVycm9yc31cbmV4cG9ydCB7TkdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7TlBFcnJvcnN9XG5leHBvcnQge05vdW5PYn1cbmV4cG9ydCB7UGx1cmFsaXR5fVxuZXhwb3J0IHtOUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7TlBPYn1cbmV4cG9ydCB7UGVyc29ufVxuZXhwb3J0IHtQcmVEaWN0T2J9XG5leHBvcnQge1ByZUVycm9yc31cbmV4cG9ydCB7UHJlT2J9XG5leHBvcnQge1ByZVBFcnJvcnN9XG5leHBvcnQge1ByZVBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZVBPYn1cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtQcm9HZW5lcmF0ZVRleHR9XG5leHBvcnQge1Byb09ifVxuZXhwb3J0IHtQcm9UeXBlfVxuZXhwb3J0IHtTY2hlbWF9XG5leHBvcnQge1RlbnNlfVxuZXhwb3J0IHtWRGljdE9ifVxuZXhwb3J0IHtWZXJiT2J9XG5leHBvcnQge1ZFcnJvcnN9XG5leHBvcnQge1ZHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtWUE9ifVxuIl19