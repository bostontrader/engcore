'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdjDict = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreErrors = exports.Pre = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomOb = exports.NomGenerateText = exports.NomErrors = exports.NErrors = exports.N = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetErrors = exports.Det = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjErrors = exports.Adj = undefined;

var _Clause = require('./Clause');

var _DetP = require('./DetP');

var _Nom = require('./Nom');

var _NP = require('./NP');

var _PreP = require('./PreP');

var _Pro = require('./Pro');

var _VP = require('./VP');

var _Adj = require('./pos/adj/Adj');

var _Adj2 = _interopRequireDefault(_Adj);

var _Det = require('./pos/det/Det');

var _Det2 = _interopRequireDefault(_Det);

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _Pre = require('./pos/pre/Pre');

var _Pre2 = _interopRequireDefault(_Pre);

var _V = require('./pos/v/V');

var _V2 = _interopRequireDefault(_V);

var _AdjDict = require('./pos/adj/AdjDict');

var _AdjDict2 = _interopRequireDefault(_AdjDict);

var _DetDict = require('./pos/det/DetDict');

var _DetDict2 = _interopRequireDefault(_DetDict);

var _NDict = require('./pos/n/NDict');

var _NDict2 = _interopRequireDefault(_NDict);

var _PreDict = require('./pos/pre/PreDict');

var _PreDict2 = _interopRequireDefault(_PreDict);

var _VDict = require('./pos/v/VDict');

var _VDict2 = _interopRequireDefault(_VDict);

var _Gender = require('./pos/Gender');

var _Gender2 = _interopRequireDefault(_Gender);

var _Person = require('./pos/Person');

var _Person2 = _interopRequireDefault(_Person);

var _Plurality = require('./pos/Plurality');

var _Plurality2 = _interopRequireDefault(_Plurality);

var _SchemaConstants = require('./pos/SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

var _Tense = require('./pos/Tense');

var _Tense2 = _interopRequireDefault(_Tense);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Adj = _Adj2.default;
exports.AdjErrors = _Adj.AdjErrors;
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
exports.AdjDict = _AdjDict2.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGoiLCJBZGpFcnJvcnMiLCJDbGF1c2VFcnJvcnMiLCJDbGF1c2VHZW5lcmF0ZVRleHQiLCJDbGF1c2VPYiIsIkRldCIsIkRldEVycm9ycyIsIkRldFBFcnJvcnMiLCJEZXRQR2VuZXJhdGVUZXh0IiwiRGV0UE9iIiwiTiIsIk5FcnJvcnMiLCJOb21FcnJvcnMiLCJOb21HZW5lcmF0ZVRleHQiLCJOb21PYiIsIk5QRXJyb3JzIiwiTlBHZW5lcmF0ZVRleHQiLCJOUE9iIiwiUHJlIiwiUHJlRXJyb3JzIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm9FcnJvcnMiLCJQcm9HZW5lcmF0ZVRleHQiLCJQcm9PYiIsIlYiLCJWRXJyb3JzIiwiVlBFcnJvcnMiLCJWUEdlbmVyYXRlVGV4dCIsIlZQT2IiLCJBZGpEaWN0IiwiRGV0RGljdCIsIk5EaWN0IiwiUHJlRGljdCIsIlZEaWN0IiwiR2VuZGVyIiwiUGx1cmFsaXR5IiwiUGVyc29uIiwiUHJvVHlwZSIsIlNjaGVtYSIsIlRlbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHUUEsRztRQUNBQyxTO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsUTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxRO1FBQ0FDLGM7UUFDQUMsSTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxRO1FBQ0FDLGM7UUFDQUMsSTtRQUVBQyxPO1FBQ0FDLE87UUFDQUMsSztRQUNBQyxPO1FBQ0FDLEs7UUFFQUMsTTtRQUNBQyxTO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsYXVzZUVycm9yc30gICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZUdlbmVyYXRlVGV4dH0gZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZU9ifSAgICAgICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0RldFBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtEZXRQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7RGV0UE9ifSAgICAgICAgICAgICBmcm9tICcuL0RldFAnXG5pbXBvcnQge05vbUVycm9yc30gICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbUdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbU9ifSAgICAgICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05QRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge1ByZVBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUE9ifSAgICAgICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1Byb0Vycm9yc30gICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb0dlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb09ifSAgICAgICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1ZQRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vVlAnXG5pbXBvcnQgQWRqICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3MvYWRqL0FkaidcbmltcG9ydCB7QWRqRXJyb3JzfSAgICAgICAgICBmcm9tICcuL3Bvcy9hZGovQWRqJ1xuaW1wb3J0IERldCAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL2RldC9EZXQnXG5pbXBvcnQge0RldEVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvZGV0L0RldCdcbmltcG9ydCBOICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9uL04nXG5pbXBvcnQge05FcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IFByZSAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCBWICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy92L1YnXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuXG5pbXBvcnQgQWRqRGljdCBmcm9tICcuL3Bvcy9hZGovQWRqRGljdCdcbmltcG9ydCBEZXREaWN0IGZyb20gJy4vcG9zL2RldC9EZXREaWN0J1xuaW1wb3J0IE5EaWN0ICAgZnJvbSAnLi9wb3Mvbi9ORGljdCdcbmltcG9ydCBQcmVEaWN0IGZyb20gJy4vcG9zL3ByZS9QcmVEaWN0J1xuaW1wb3J0IFZEaWN0ICAgZnJvbSAnLi9wb3Mvdi9WRGljdCdcblxuaW1wb3J0IEdlbmRlciAgICAgIGZyb20gJy4vcG9zL0dlbmRlcidcbmltcG9ydCBQZXJzb24gICAgICBmcm9tICcuL3Bvcy9QZXJzb24nXG5pbXBvcnQgUGx1cmFsaXR5ICAgZnJvbSAnLi9wb3MvUGx1cmFsaXR5J1xuaW1wb3J0IFNjaGVtYSAgICAgIGZyb20gJy4vcG9zL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCBUZW5zZSAgICAgICBmcm9tICcuL3Bvcy9UZW5zZSdcbmltcG9ydCB7UHJvVHlwZX0gICBmcm9tICcuL1BybydcblxuZXhwb3J0IHtBZGp9XG5leHBvcnQge0FkakVycm9yc31cbmV4cG9ydCB7Q2xhdXNlRXJyb3JzfVxuZXhwb3J0IHtDbGF1c2VHZW5lcmF0ZVRleHR9XG5leHBvcnQge0NsYXVzZU9ifVxuZXhwb3J0IHtEZXR9XG5leHBvcnQge0RldEVycm9yc31cbmV4cG9ydCB7RGV0UEVycm9yc31cbmV4cG9ydCB7RGV0UEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7RGV0UE9ifVxuZXhwb3J0IHtOfVxuZXhwb3J0IHtORXJyb3JzfVxuZXhwb3J0IHtOb21FcnJvcnN9XG5leHBvcnQge05vbUdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7Tm9tT2J9XG5leHBvcnQge05QRXJyb3JzfVxuZXhwb3J0IHtOUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7TlBPYn1cbmV4cG9ydCB7UHJlfVxuZXhwb3J0IHtQcmVFcnJvcnN9XG5leHBvcnQge1ByZVBFcnJvcnN9XG5leHBvcnQge1ByZVBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZVBPYn1cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtQcm9HZW5lcmF0ZVRleHR9XG5leHBvcnQge1Byb09ifVxuZXhwb3J0IHtWfVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWUEVycm9yc31cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG5cbmV4cG9ydCB7QWRqRGljdH1cbmV4cG9ydCB7RGV0RGljdH1cbmV4cG9ydCB7TkRpY3R9XG5leHBvcnQge1ByZURpY3R9XG5leHBvcnQge1ZEaWN0fVxuXG5leHBvcnQge0dlbmRlcn1cbmV4cG9ydCB7UGx1cmFsaXR5fVxuZXhwb3J0IHtQZXJzb259XG5leHBvcnQge1Byb1R5cGV9XG5leHBvcnQge1NjaGVtYX1cbmV4cG9ydCB7VGVuc2V9XG4iXX0=