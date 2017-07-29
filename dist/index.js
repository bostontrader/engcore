'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDictOb = exports.NDict = exports.DetDictOb = exports.AdjDictOb = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreOb = exports.PreGenerateText = exports.PreErrors = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomOb = exports.NomGenerateText = exports.NomErrors = exports.NErrors = exports.N = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetOb = exports.DetGenerateText = exports.DetErrors = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

var _Adj = require('./Adj');

var _Clause = require('./Clause');

var _Det = require('./Det');

var _DetP = require('./DetP');

var _Nom = require('./Nom');

var _NP = require('./NP');

var _Pre = require('./Pre');

var _PreP = require('./PreP');

var _Pro = require('./Pro');

var _VP = require('./VP');

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _V = require('./pos/v/V');

var _V2 = _interopRequireDefault(_V);

var _AdjDict = require('./AdjDict');

var _AdjDict2 = _interopRequireDefault(_AdjDict);

var _DetDict = require('./DetDict');

var _DetDict2 = _interopRequireDefault(_DetDict);

var _PreDict = require('./PreDict');

var _PreDict2 = _interopRequireDefault(_PreDict);

var _NDict = require('./pos/n/NDict');

var _NDict2 = _interopRequireDefault(_NDict);

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
exports.DetErrors = _Det.DetErrors;
exports.DetGenerateText = _Det.DetGenerateText;
exports.DetOb = _Det.DetOb;
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
exports.PreErrors = _Pre.PreErrors;
exports.PreGenerateText = _Pre.PreGenerateText;
exports.PreOb = _Pre.PreOb;
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
exports.DetDictOb = _DetDict2.default;
exports.NDict = _NDict2.default;
exports.PreDictOb = _PreDict2.default;
exports.VDict = _VDict2.default;
exports.Gender = _Gender2.default;
exports.Plurality = _Plurality2.default;
exports.Person = _Person2.default;
exports.ProType = _Pro.ProType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _Tense2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpPYiIsIkNsYXVzZUVycm9ycyIsIkNsYXVzZUdlbmVyYXRlVGV4dCIsIkNsYXVzZU9iIiwiRGV0RXJyb3JzIiwiRGV0R2VuZXJhdGVUZXh0IiwiRGV0T2IiLCJEZXRQRXJyb3JzIiwiRGV0UEdlbmVyYXRlVGV4dCIsIkRldFBPYiIsIk4iLCJORXJyb3JzIiwiTm9tRXJyb3JzIiwiTm9tR2VuZXJhdGVUZXh0IiwiTm9tT2IiLCJOUEVycm9ycyIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlByZUVycm9ycyIsIlByZUdlbmVyYXRlVGV4dCIsIlByZU9iIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm9FcnJvcnMiLCJQcm9HZW5lcmF0ZVRleHQiLCJQcm9PYiIsIlYiLCJWRXJyb3JzIiwiVlBFcnJvcnMiLCJWUEdlbmVyYXRlVGV4dCIsIlZQT2IiLCJBZGpEaWN0T2IiLCJEZXREaWN0T2IiLCJORGljdCIsIlByZURpY3RPYiIsIlZEaWN0IiwiR2VuZGVyIiwiUGx1cmFsaXR5IiwiUGVyc29uIiwiUHJvVHlwZSIsIlNjaGVtYSIsIlRlbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFFUUEsUztRQUNBQyxlO1FBQ0FDLEs7UUFDQUMsWTtRQUNBQyxrQjtRQUNBQyxRO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFU7UUFDQUMsZ0I7UUFDQUMsTTtRQUNBQyxDO1FBQ0FDLE87UUFDQUMsUztRQUNBQyxlO1FBQ0FDLEs7UUFDQUMsUTtRQUNBQyxjO1FBQ0FDLEk7UUFDQUMsUztRQUNBQyxlO1FBQ0FDLEs7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxRO1FBQ0FDLGM7UUFDQUMsSTtRQUVBQyxTO1FBQ0FDLFM7UUFDQUMsSztRQUNBQyxTO1FBQ0FDLEs7UUFFQUMsTTtRQUNBQyxTO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FkakVycm9yc30gICAgICAgICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0FkakdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0Fkak9ifSAgICAgICAgICAgICAgZnJvbSAnLi9BZGonXG5pbXBvcnQge0NsYXVzZUVycm9yc30gICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZUdlbmVyYXRlVGV4dH0gZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZU9ifSAgICAgICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0RldEVycm9yc30gICAgICAgICAgZnJvbSAnLi9EZXQnXG5pbXBvcnQge0RldEdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9EZXQnXG5pbXBvcnQge0RldE9ifSAgICAgICAgICAgICAgZnJvbSAnLi9EZXQnXG5pbXBvcnQge0RldFBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtEZXRQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7RGV0UE9ifSAgICAgICAgICAgICBmcm9tICcuL0RldFAnXG5pbXBvcnQge05vbUVycm9yc30gICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbUdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05vbU9ifSAgICAgICAgICAgICAgZnJvbSAnLi9Ob20nXG5pbXBvcnQge05QRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZUdlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZU9ifSAgICAgICAgICAgICAgZnJvbSAnLi9QcmUnXG5pbXBvcnQge1ByZVBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUE9ifSAgICAgICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1Byb0Vycm9yc30gICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb0dlbmVyYXRlVGV4dH0gICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1Byb09ifSAgICAgICAgICAgICAgZnJvbSAnLi9Qcm8nXG5pbXBvcnQge1ZQRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vVlAnXG5pbXBvcnQgTiAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IHtORXJyb3JzfSAgICAgICAgICAgIGZyb20gJy4vcG9zL24vTidcbmltcG9ydCBWICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy92L1YnXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuXG5pbXBvcnQgQWRqRGljdE9iIGZyb20gJy4vQWRqRGljdCdcbmltcG9ydCBEZXREaWN0T2IgZnJvbSAnLi9EZXREaWN0J1xuaW1wb3J0IFByZURpY3RPYiBmcm9tICcuL1ByZURpY3QnXG5pbXBvcnQgTkRpY3QgICAgIGZyb20gJy4vcG9zL24vTkRpY3QnXG5pbXBvcnQgVkRpY3QgICAgIGZyb20gJy4vcG9zL3YvVkRpY3QnXG5cbmltcG9ydCBHZW5kZXIgICAgICBmcm9tICcuL0dlbmRlcidcbmltcG9ydCBQZXJzb24gICAgICBmcm9tICcuL1BlcnNvbidcbmltcG9ydCB7UHJvVHlwZX0gICBmcm9tICcuL1BybydcbmltcG9ydCBTY2hlbWEgICAgICBmcm9tICcuL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCBQbHVyYWxpdHkgICBmcm9tICcuL3Bvcy9QbHVyYWxpdHknXG5pbXBvcnQgVGVuc2UgICAgICAgZnJvbSAnLi9wb3MvVGVuc2UnXG5cbmV4cG9ydCB7QWRqRXJyb3JzfVxuZXhwb3J0IHtBZGpHZW5lcmF0ZVRleHR9XG5leHBvcnQge0Fkak9ifVxuZXhwb3J0IHtDbGF1c2VFcnJvcnN9XG5leHBvcnQge0NsYXVzZUdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7Q2xhdXNlT2J9XG5leHBvcnQge0RldEVycm9yc31cbmV4cG9ydCB7RGV0R2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtEZXRPYn1cbmV4cG9ydCB7RGV0UEVycm9yc31cbmV4cG9ydCB7RGV0UEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7RGV0UE9ifVxuZXhwb3J0IHtOfVxuZXhwb3J0IHtORXJyb3JzfVxuZXhwb3J0IHtOb21FcnJvcnN9XG5leHBvcnQge05vbUdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7Tm9tT2J9XG5leHBvcnQge05QRXJyb3JzfVxuZXhwb3J0IHtOUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7TlBPYn1cbmV4cG9ydCB7UHJlRXJyb3JzfVxuZXhwb3J0IHtQcmVHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZU9ifVxuZXhwb3J0IHtQcmVQRXJyb3JzfVxuZXhwb3J0IHtQcmVQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtQcmVQT2J9XG5leHBvcnQge1Byb0Vycm9yc31cbmV4cG9ydCB7UHJvR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtQcm9PYn1cbmV4cG9ydCB7Vn1cbmV4cG9ydCB7VkVycm9yc31cbmV4cG9ydCB7VlBFcnJvcnN9XG5leHBvcnQge1ZQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtWUE9ifVxuXG5leHBvcnQge0FkakRpY3RPYn1cbmV4cG9ydCB7RGV0RGljdE9ifVxuZXhwb3J0IHtORGljdH1cbmV4cG9ydCB7UHJlRGljdE9ifVxuZXhwb3J0IHtWRGljdH1cblxuZXhwb3J0IHtHZW5kZXJ9XG5leHBvcnQge1BsdXJhbGl0eX1cbmV4cG9ydCB7UGVyc29ufVxuZXhwb3J0IHtQcm9UeXBlfVxuZXhwb3J0IHtTY2hlbWF9XG5leHBvcnQge1RlbnNlfVxuIl19