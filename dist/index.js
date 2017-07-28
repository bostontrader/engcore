'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDictOb = exports.PreDictOb = exports.NDict = exports.DetDictOb = exports.AdjDictOb = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VOb = exports.VGenerateText = exports.VErrors = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreOb = exports.PreGenerateText = exports.PreErrors = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomOb = exports.NomGenerateText = exports.NomErrors = exports.N = exports.NErrors = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetOb = exports.DetGenerateText = exports.DetErrors = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

var _Adj = require('./Adj');

var _Clause = require('./Clause');

var _Det = require('./Det');

var _DetP = require('./DetP');

var _Nom = require('./Nom');

var _NP = require('./NP');

var _Pre = require('./Pre');

var _PreP = require('./PreP');

var _Pro = require('./Pro');

var _V = require('./V');

var _VP = require('./VP');

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _AdjDict = require('./AdjDict');

var _AdjDict2 = _interopRequireDefault(_AdjDict);

var _DetDict = require('./DetDict');

var _DetDict2 = _interopRequireDefault(_DetDict);

var _PreDict = require('./PreDict');

var _PreDict2 = _interopRequireDefault(_PreDict);

var _VDict = require('./VDict');

var _VDict2 = _interopRequireDefault(_VDict);

var _NDict = require('./pos/n/NDict');

var _NDict2 = _interopRequireDefault(_NDict);

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Plurality = require('./pos/Plurality');

var _Plurality2 = _interopRequireDefault(_Plurality);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AdjErrors = _Adj.AdjErrors;
exports.AdjGenerateText = _Adj.AdjGenerateText;
exports.AdjOb = _Adj.AdjOb;
exports.ClauseErrors = _Clause.ClauseErrors;
exports.ClauseGenerateText = _Clause.ClauseGenerateText;
exports.ClauseOb = _Clause.ClauseOb;
exports.DetErrors = _Det.DetErrors;
exports.DetGenerateText = _Det.DetGenerateText;
exports.DetOb = _Det.DetOb;
exports.DetPErrors = _DetP.DetPErrors;
exports.DetPGenerateText = _DetP.DetPGenerateText;
exports.DetPOb = _DetP.DetPOb;
exports.NErrors = _N.NErrors;
exports.N = _N2.default;
exports.NomErrors = _Nom.NomErrors;
exports.NomGenerateText = _Nom.NomGenerateText;
exports.NomOb = _Nom.NomOb;
exports.NPErrors = _NP.NPErrors;
exports.NPGenerateText = _NP.NPGenerateText;
exports.NPOb = _NP.NPOb;
exports.PreErrors = _Pre.PreErrors;
exports.PreGenerateText = _Pre.PreGenerateText;
exports.PreOb = _Pre.PreOb;
exports.PrePErrors = _PreP.PrePErrors;
exports.PrePGenerateText = _PreP.PrePGenerateText;
exports.PrePOb = _PreP.PrePOb;
exports.ProErrors = _Pro.ProErrors;
exports.ProGenerateText = _Pro.ProGenerateText;
exports.ProOb = _Pro.ProOb;
exports.VErrors = _V.VErrors;
exports.VGenerateText = _V.VGenerateText;
exports.VOb = _V.VOb;
exports.VPErrors = _VP.VPErrors;
exports.VPGenerateText = _VP.VPGenerateText;
exports.VPOb = _VP.VPOb;
exports.AdjDictOb = _AdjDict2.default;
exports.DetDictOb = _DetDict2.default;
exports.NDict = _NDict2.default;
exports.PreDictOb = _PreDict2.default;
exports.VDictOb = _VDict2.default;
exports.Gender = _Gender2.default;
exports.Plurality = _Plurality2.default;
exports.Person = _Person2.default;
exports.ProType = _Pro.ProType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _V.Tense;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpPYiIsIkNsYXVzZUVycm9ycyIsIkNsYXVzZUdlbmVyYXRlVGV4dCIsIkNsYXVzZU9iIiwiRGV0RXJyb3JzIiwiRGV0R2VuZXJhdGVUZXh0IiwiRGV0T2IiLCJEZXRQRXJyb3JzIiwiRGV0UEdlbmVyYXRlVGV4dCIsIkRldFBPYiIsIk5FcnJvcnMiLCJOIiwiTm9tRXJyb3JzIiwiTm9tR2VuZXJhdGVUZXh0IiwiTm9tT2IiLCJOUEVycm9ycyIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlByZUVycm9ycyIsIlByZUdlbmVyYXRlVGV4dCIsIlByZU9iIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm9FcnJvcnMiLCJQcm9HZW5lcmF0ZVRleHQiLCJQcm9PYiIsIlZFcnJvcnMiLCJWR2VuZXJhdGVUZXh0IiwiVk9iIiwiVlBFcnJvcnMiLCJWUEdlbmVyYXRlVGV4dCIsIlZQT2IiLCJBZGpEaWN0T2IiLCJEZXREaWN0T2IiLCJORGljdCIsIlByZURpY3RPYiIsIlZEaWN0T2IiLCJHZW5kZXIiLCJQbHVyYWxpdHkiLCJQZXJzb24iLCJQcm9UeXBlIiwiU2NoZW1hIiwiVGVuc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O1FBRVFBLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsUTtRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxVO1FBQ0FDLGdCO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxDO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFE7UUFDQUMsYztRQUNBQyxJO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFU7UUFDQUMsZ0I7UUFDQUMsTTtRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxPO1FBQ0FDLGE7UUFDQUMsRztRQUNBQyxRO1FBQ0FDLGM7UUFDQUMsSTtRQUVBQyxTO1FBQ0FDLFM7UUFDQUMsSztRQUNBQyxTO1FBQ0FDLE87UUFFQUMsTTtRQUNBQyxTO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FkakVycm9yc30gICAgICAgICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0FkakdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0Fkak9ifSAgICAgICAgICAgICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0NsYXVzZUVycm9yc30gICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZUdlbmVyYXRlVGV4dH0gZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZU9ifSAgICAgICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0RldEVycm9yc30gICAgICAgICAgZnJvbSAnLi9EZXQnXG5pbXBvcnQge0RldEdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9EZXQnXG5pbXBvcnQge0RldE9ifSAgICAgICAgICAgICAgZnJvbSAnLi9EZXQnXG5pbXBvcnQge0RldFBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtEZXRQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7RGV0UE9ifSAgICAgICAgICAgICBmcm9tICcuL0RldFAnXG5pbXBvcnQge05vbUVycm9yc30gICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbUdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbU9ifSAgICAgICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05QRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZUdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZU9ifSAgICAgICAgICAgICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZVBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUE9ifSAgICAgICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1Byb0Vycm9yc30gICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb0dlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb09ifSAgICAgICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9WJ1xuaW1wb3J0IHtWR2VuZXJhdGVUZXh0fSAgICAgIGZyb20gJy4vVidcbmltcG9ydCB7Vk9ifSAgICAgICAgICAgICAgICBmcm9tICcuL1YnXG5pbXBvcnQge1ZQRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vVlAnXG5pbXBvcnQgTiAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IHtORXJyb3JzfSAgICAgICAgICAgIGZyb20gJy4vcG9zL24vTidcblxuaW1wb3J0IEFkakRpY3RPYiBmcm9tICcuL0FkakRpY3QnXG5pbXBvcnQgRGV0RGljdE9iIGZyb20gJy4vRGV0RGljdCdcbmltcG9ydCBQcmVEaWN0T2IgZnJvbSAnLi9QcmVEaWN0J1xuaW1wb3J0IFZEaWN0T2IgICBmcm9tICcuL1ZEaWN0J1xuaW1wb3J0IE5EaWN0ICAgICBmcm9tICcuL3Bvcy9uL05EaWN0J1xuXG5pbXBvcnQgR2VuZGVyICAgICAgZnJvbSAnLi9HZW5kZXInXG5pbXBvcnQgUGVyc29uICAgICAgZnJvbSAnLi9QZXJzb24nXG5pbXBvcnQge1Byb1R5cGV9ICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQgU2NoZW1hICAgICAgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQge1RlbnNlfSAgICAgZnJvbSAnLi9WJ1xuaW1wb3J0IFBsdXJhbGl0eSAgIGZyb20gJy4vcG9zL1BsdXJhbGl0eSdcblxuZXhwb3J0IHtBZGpFcnJvcnN9XG5leHBvcnQge0FkakdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7QWRqT2J9XG5leHBvcnQge0NsYXVzZUVycm9yc31cbmV4cG9ydCB7Q2xhdXNlR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtDbGF1c2VPYn1cbmV4cG9ydCB7RGV0RXJyb3JzfVxuZXhwb3J0IHtEZXRHZW5lcmF0ZVRleHR9XG5leHBvcnQge0RldE9ifVxuZXhwb3J0IHtEZXRQRXJyb3JzfVxuZXhwb3J0IHtEZXRQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtEZXRQT2J9XG5leHBvcnQge05FcnJvcnN9XG5leHBvcnQge059XG5leHBvcnQge05vbUVycm9yc31cbmV4cG9ydCB7Tm9tR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOb21PYn1cbmV4cG9ydCB7TlBFcnJvcnN9XG5leHBvcnQge05QR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOUE9ifVxuZXhwb3J0IHtQcmVFcnJvcnN9XG5leHBvcnQge1ByZUdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7UHJlT2J9XG5leHBvcnQge1ByZVBFcnJvcnN9XG5leHBvcnQge1ByZVBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZVBPYn1cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtQcm9HZW5lcmF0ZVRleHR9XG5leHBvcnQge1Byb09ifVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtWT2J9XG5leHBvcnQge1ZQRXJyb3JzfVxuZXhwb3J0IHtWUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7VlBPYn1cblxuZXhwb3J0IHtBZGpEaWN0T2J9XG5leHBvcnQge0RldERpY3RPYn1cbmV4cG9ydCB7TkRpY3R9XG5leHBvcnQge1ByZURpY3RPYn1cbmV4cG9ydCB7VkRpY3RPYn1cblxuZXhwb3J0IHtHZW5kZXJ9XG5leHBvcnQge1BsdXJhbGl0eX1cbmV4cG9ydCB7UGVyc29ufVxuZXhwb3J0IHtQcm9UeXBlfVxuZXhwb3J0IHtTY2hlbWF9XG5leHBvcnQge1RlbnNlfVxuIl19