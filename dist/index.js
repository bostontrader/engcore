'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdjDictOb = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreErrors = exports.Pre = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomOb = exports.NomGenerateText = exports.NomErrors = exports.NErrors = exports.N = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetErrors = exports.Det = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

var _Adj = require('./Adj');

var _Clause = require('./Clause');

var _DetP = require('./DetP');

var _Nom = require('./Nom');

var _NP = require('./NP');

var _PreP = require('./PreP');

var _Pro = require('./Pro');

var _VP = require('./VP');

var _Det = require('./pos/det/Det');

var _Det2 = _interopRequireDefault(_Det);

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _Pre = require('./pos/pre/Pre');

var _Pre2 = _interopRequireDefault(_Pre);

var _V = require('./pos/v/V');

var _V2 = _interopRequireDefault(_V);

var _AdjDict = require('./AdjDict');

var _AdjDict2 = _interopRequireDefault(_AdjDict);

var _DetDict = require('./pos/det/DetDict');

var _DetDict2 = _interopRequireDefault(_DetDict);

var _NDict = require('./pos/n/NDict');

var _NDict2 = _interopRequireDefault(_NDict);

var _PreDict = require('./pos/pre/PreDict');

var _PreDict2 = _interopRequireDefault(_PreDict);

var _VDict = require('./pos/v/VDict');

var _VDict2 = _interopRequireDefault(_VDict);

var _Gender = require('./Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Plurality = require('./pos/Plurality');

var _Plurality2 = _interopRequireDefault(_Plurality);

var _Tense = require('./pos/Tense');

var _Tense2 = _interopRequireDefault(_Tense);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AdjErrors = _Adj.AdjErrors;
exports.AdjGenerateText = _Adj.AdjGenerateText;
exports.AdjOb = _Adj.AdjOb;
exports.ClauseErrors = _Clause.ClauseErrors;
exports.ClauseGenerateText = _Clause.ClauseGenerateText;
exports.ClauseOb = _Clause.ClauseOb;
exports.Det = _Det2.default;
exports.DetErrors = _Det.DetErrors;
exports.DetPErrors = _DetP.DetPErrors;
exports.DetPGenerateText = _DetP.DetPGenerateText;
exports.DetPOb = _DetP.DetPOb;
exports.N = _N2.default;
exports.NErrors = _N.NErrors;
exports.NomErrors = _Nom.NomErrors;
exports.NomGenerateText = _Nom.NomGenerateText;
exports.NomOb = _Nom.NomOb;
exports.NPErrors = _NP.NPErrors;
exports.NPGenerateText = _NP.NPGenerateText;
exports.NPOb = _NP.NPOb;
exports.Pre = _Pre2.default;
exports.PreErrors = _Pre.PreErrors;
exports.PrePErrors = _PreP.PrePErrors;
exports.PrePGenerateText = _PreP.PrePGenerateText;
exports.PrePOb = _PreP.PrePOb;
exports.ProErrors = _Pro.ProErrors;
exports.ProGenerateText = _Pro.ProGenerateText;
exports.ProOb = _Pro.ProOb;
exports.V = _V2.default;
exports.VErrors = _V.VErrors;
exports.VPErrors = _VP.VPErrors;
exports.VPGenerateText = _VP.VPGenerateText;
exports.VPOb = _VP.VPOb;
exports.AdjDictOb = _AdjDict2.default;
exports.DetDict = _DetDict2.default;
exports.NDict = _NDict2.default;
exports.PreDict = _PreDict2.default;
exports.VDict = _VDict2.default;
exports.Gender = _Gender2.default;
exports.Plurality = _Plurality2.default;
exports.Person = _Person2.default;
exports.ProType = _Pro.ProType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _Tense2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpPYiIsIkNsYXVzZUVycm9ycyIsIkNsYXVzZUdlbmVyYXRlVGV4dCIsIkNsYXVzZU9iIiwiRGV0IiwiRGV0RXJyb3JzIiwiRGV0UEVycm9ycyIsIkRldFBHZW5lcmF0ZVRleHQiLCJEZXRQT2IiLCJOIiwiTkVycm9ycyIsIk5vbUVycm9ycyIsIk5vbUdlbmVyYXRlVGV4dCIsIk5vbU9iIiwiTlBFcnJvcnMiLCJOUEdlbmVyYXRlVGV4dCIsIk5QT2IiLCJQcmUiLCJQcmVFcnJvcnMiLCJQcmVQRXJyb3JzIiwiUHJlUEdlbmVyYXRlVGV4dCIsIlByZVBPYiIsIlByb0Vycm9ycyIsIlByb0dlbmVyYXRlVGV4dCIsIlByb09iIiwiViIsIlZFcnJvcnMiLCJWUEVycm9ycyIsIlZQR2VuZXJhdGVUZXh0IiwiVlBPYiIsIkFkakRpY3RPYiIsIkRldERpY3QiLCJORGljdCIsIlByZURpY3QiLCJWRGljdCIsIkdlbmRlciIsIlBsdXJhbGl0eSIsIlBlcnNvbiIsIlByb1R5cGUiLCJTY2hlbWEiLCJUZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUVRQSxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxZO1FBQ0FDLGtCO1FBQ0FDLFE7UUFDQUMsRztRQUNBQyxTO1FBQ0FDLFU7UUFDQUMsZ0I7UUFDQUMsTTtRQUNBQyxDO1FBQ0FDLE87UUFDQUMsUztRQUNBQyxlO1FBQ0FDLEs7UUFDQUMsUTtRQUNBQyxjO1FBQ0FDLEk7UUFDQUMsRztRQUNBQyxTO1FBQ0FDLFU7UUFDQUMsZ0I7UUFDQUMsTTtRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxDO1FBQ0FDLE87UUFDQUMsUTtRQUNBQyxjO1FBQ0FDLEk7UUFFQUMsUztRQUNBQyxPO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxLO1FBRUFDLE07UUFDQUMsUztRQUNBQyxNO1FBQ0FDLE87UUFDQUMsTTtRQUNBQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZGpFcnJvcnN9ICAgICAgICAgIGZyb20gJy4vQWRqJ1xuaW1wb3J0IHtBZGpHZW5lcmF0ZVRleHR9ICAgIGZyb20gJy4vQWRqJ1xuaW1wb3J0IHtBZGpPYn0gICAgICAgICAgICAgIGZyb20gJy4vQWRqJ1xuaW1wb3J0IHtDbGF1c2VFcnJvcnN9ICAgICAgIGZyb20gJy4vQ2xhdXNlJ1xuaW1wb3J0IHtDbGF1c2VHZW5lcmF0ZVRleHR9IGZyb20gJy4vQ2xhdXNlJ1xuaW1wb3J0IHtDbGF1c2VPYn0gICAgICAgICAgIGZyb20gJy4vQ2xhdXNlJ1xuaW1wb3J0IHtEZXRQRXJyb3JzfSAgICAgICAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7RGV0UEdlbmVyYXRlVGV4dH0gICBmcm9tICcuL0RldFAnXG5pbXBvcnQge0RldFBPYn0gICAgICAgICAgICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtOb21FcnJvcnN9ICAgICAgICAgIGZyb20gJy4vTm9tJ1xuaW1wb3J0IHtOb21HZW5lcmF0ZVRleHR9ICAgIGZyb20gJy4vTm9tJ1xuaW1wb3J0IHtOb21PYn0gICAgICAgICAgICAgIGZyb20gJy4vTm9tJ1xuaW1wb3J0IHtOUEVycm9yc30gICAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge05QR2VuZXJhdGVUZXh0fSAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBPYn0gICAgICAgICAgICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtQcmVQRXJyb3JzfSAgICAgICAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUEdlbmVyYXRlVGV4dH0gICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ByZVBPYn0gICAgICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcm9FcnJvcnN9ICAgICAgICAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IHtQcm9HZW5lcmF0ZVRleHR9ICAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IHtQcm9PYn0gICAgICAgICAgICAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IHtWUEVycm9yc30gICAgICAgICAgIGZyb20gJy4vVlAnXG5pbXBvcnQge1ZQR2VuZXJhdGVUZXh0fSAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBPYn0gICAgICAgICAgICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IERldCAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL2RldC9EZXQnXG5pbXBvcnQge0RldEVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvZGV0L0RldCdcbmltcG9ydCBOICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9uL04nXG5pbXBvcnQge05FcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IFByZSAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCBWICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy92L1YnXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuXG5pbXBvcnQgQWRqRGljdE9iIGZyb20gJy4vQWRqRGljdCdcbmltcG9ydCBEZXREaWN0ICAgZnJvbSAnLi9wb3MvZGV0L0RldERpY3QnXG5pbXBvcnQgTkRpY3QgICAgIGZyb20gJy4vcG9zL24vTkRpY3QnXG5pbXBvcnQgUHJlRGljdCAgIGZyb20gJy4vcG9zL3ByZS9QcmVEaWN0J1xuaW1wb3J0IFZEaWN0ICAgICBmcm9tICcuL3Bvcy92L1ZEaWN0J1xuXG5pbXBvcnQgR2VuZGVyICAgICAgZnJvbSAnLi9HZW5kZXInXG5pbXBvcnQgUGVyc29uICAgICAgZnJvbSAnLi9QZXJzb24nXG5pbXBvcnQge1Byb1R5cGV9ICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQgU2NoZW1hICAgICAgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQgUGx1cmFsaXR5ICAgZnJvbSAnLi9wb3MvUGx1cmFsaXR5J1xuaW1wb3J0IFRlbnNlICAgICAgIGZyb20gJy4vcG9zL1RlbnNlJ1xuXG5leHBvcnQge0FkakVycm9yc31cbmV4cG9ydCB7QWRqR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtBZGpPYn1cbmV4cG9ydCB7Q2xhdXNlRXJyb3JzfVxuZXhwb3J0IHtDbGF1c2VHZW5lcmF0ZVRleHR9XG5leHBvcnQge0NsYXVzZU9ifVxuZXhwb3J0IHtEZXR9XG5leHBvcnQge0RldEVycm9yc31cbmV4cG9ydCB7RGV0UEVycm9yc31cbmV4cG9ydCB7RGV0UEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7RGV0UE9ifVxuZXhwb3J0IHtOfVxuZXhwb3J0IHtORXJyb3JzfVxuZXhwb3J0IHtOb21FcnJvcnN9XG5leHBvcnQge05vbUdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7Tm9tT2J9XG5leHBvcnQge05QRXJyb3JzfVxuZXhwb3J0IHtOUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7TlBPYn1cbmV4cG9ydCB7UHJlfVxuZXhwb3J0IHtQcmVFcnJvcnN9XG5leHBvcnQge1ByZVBFcnJvcnN9XG5leHBvcnQge1ByZVBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZVBPYn1cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtQcm9HZW5lcmF0ZVRleHR9XG5leHBvcnQge1Byb09ifVxuZXhwb3J0IHtWfVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWUEVycm9yc31cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG5cbmV4cG9ydCB7QWRqRGljdE9ifVxuZXhwb3J0IHtEZXREaWN0fVxuZXhwb3J0IHtORGljdH1cbmV4cG9ydCB7UHJlRGljdH1cbmV4cG9ydCB7VkRpY3R9XG5cbmV4cG9ydCB7R2VuZGVyfVxuZXhwb3J0IHtQbHVyYWxpdHl9XG5leHBvcnQge1BlcnNvbn1cbmV4cG9ydCB7UHJvVHlwZX1cbmV4cG9ydCB7U2NoZW1hfVxuZXhwb3J0IHtUZW5zZX1cbiJdfQ==