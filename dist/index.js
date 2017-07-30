'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdjDict = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProErrors = exports.Pro = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreErrors = exports.Pre = exports.NPErrors = exports.NP = exports.NomErrors = exports.Nom = exports.NErrors = exports.N = exports.DetPErrors = exports.DetP = exports.DetErrors = exports.Det = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjErrors = exports.Adj = undefined;

var _Clause = require('./Clause');

var _PreP = require('./PreP');

var _VP = require('./VP');

var _Adj = require('./pos/adj/Adj');

var _Adj2 = _interopRequireDefault(_Adj);

var _Det = require('./pos/det/Det');

var _Det2 = _interopRequireDefault(_Det);

var _DetP = require('./pos/detp/DetP');

var _DetP2 = _interopRequireDefault(_DetP);

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _Nom = require('./pos/nom/Nom');

var _Nom2 = _interopRequireDefault(_Nom);

var _NP = require('./pos/np/NP');

var _NP2 = _interopRequireDefault(_NP);

var _Pre = require('./pos/pre/Pre');

var _Pre2 = _interopRequireDefault(_Pre);

var _Pro = require('./pos/pro/Pro');

var _Pro2 = _interopRequireDefault(_Pro);

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
exports.DetP = _DetP2.default;
exports.DetPErrors = _DetP.DetPErrors;
exports.N = _N2.default;
exports.NErrors = _N.NErrors;
exports.Nom = _Nom2.default;
exports.NomErrors = _Nom.NomErrors;
exports.NP = _NP2.default;
exports.NPErrors = _NP.NPErrors;
exports.Pre = _Pre2.default;
exports.PreErrors = _Pre.PreErrors;
exports.PrePErrors = _PreP.PrePErrors;
exports.PrePGenerateText = _PreP.PrePGenerateText;
exports.PrePOb = _PreP.PrePOb;
exports.Pro = _Pro2.default;
exports.ProErrors = _Pro.ProErrors;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGoiLCJBZGpFcnJvcnMiLCJDbGF1c2VFcnJvcnMiLCJDbGF1c2VHZW5lcmF0ZVRleHQiLCJDbGF1c2VPYiIsIkRldCIsIkRldEVycm9ycyIsIkRldFAiLCJEZXRQRXJyb3JzIiwiTiIsIk5FcnJvcnMiLCJOb20iLCJOb21FcnJvcnMiLCJOUCIsIk5QRXJyb3JzIiwiUHJlIiwiUHJlRXJyb3JzIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm8iLCJQcm9FcnJvcnMiLCJWIiwiVkVycm9ycyIsIlZQRXJyb3JzIiwiVlBHZW5lcmF0ZVRleHQiLCJWUE9iIiwiQWRqRGljdCIsIkRldERpY3QiLCJORGljdCIsIlByZURpY3QiLCJWRGljdCIsIkdlbmRlciIsIlBsdXJhbGl0eSIsIlBlcnNvbiIsIlByb1R5cGUiLCJTY2hlbWEiLCJUZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUdBOztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHUUEsRztRQUNBQyxTO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsUTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsSTtRQUNBQyxVO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsRTtRQUNBQyxRO1FBQ0FDLEc7UUFDQUMsUztRQUNBQyxVO1FBQ0FDLGdCO1FBQ0FDLE07UUFDQUMsRztRQUNBQyxTO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxRO1FBQ0FDLGM7UUFDQUMsSTtRQUVBQyxPO1FBQ0FDLE87UUFDQUMsSztRQUNBQyxPO1FBQ0FDLEs7UUFFQUMsTTtRQUNBQyxTO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsYXVzZUVycm9yc30gICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZUdlbmVyYXRlVGV4dH0gZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge0NsYXVzZU9ifSAgICAgICAgICAgZnJvbSAnLi9DbGF1c2UnXG5pbXBvcnQge1ByZVBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQR2VuZXJhdGVUZXh0fSAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUE9ifSAgICAgICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ZQRXJyb3JzfSAgICAgICAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBHZW5lcmF0ZVRleHR9ICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUE9ifSAgICAgICAgICAgICAgIGZyb20gJy4vVlAnXG5pbXBvcnQgQWRqICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3MvYWRqL0FkaidcbmltcG9ydCB7QWRqRXJyb3JzfSAgICAgICAgICBmcm9tICcuL3Bvcy9hZGovQWRqJ1xuaW1wb3J0IERldCAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL2RldC9EZXQnXG5pbXBvcnQge0RldEVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvZGV0L0RldCdcbmltcG9ydCBEZXRQICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9kZXRwL0RldFAnXG5pbXBvcnQge0RldFBFcnJvcnN9ICAgICAgICAgZnJvbSAnLi9wb3MvZGV0cC9EZXRQJ1xuaW1wb3J0IE4gICAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL24vTidcbmltcG9ydCB7TkVycm9yc30gICAgICAgICAgICBmcm9tICcuL3Bvcy9uL04nXG5pbXBvcnQgTm9tICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbm9tL05vbSdcbmltcG9ydCB7Tm9tRXJyb3JzfSAgICAgICAgICBmcm9tICcuL3Bvcy9ub20vTm9tJ1xuaW1wb3J0IE5QICAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL25wL05QJ1xuaW1wb3J0IHtOUEVycm9yc30gICAgICAgICAgIGZyb20gJy4vcG9zL25wL05QJ1xuaW1wb3J0IFByZSAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCBQcm8gICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9wcm8vUHJvJ1xuaW1wb3J0IHtQcm9FcnJvcnN9ICAgICAgICAgIGZyb20gJy4vcG9zL3Byby9Qcm8nXG5pbXBvcnQgViAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuaW1wb3J0IHtWRXJyb3JzfSAgICAgICAgICAgIGZyb20gJy4vcG9zL3YvVidcblxuaW1wb3J0IEFkakRpY3QgZnJvbSAnLi9wb3MvYWRqL0FkakRpY3QnXG5pbXBvcnQgRGV0RGljdCBmcm9tICcuL3Bvcy9kZXQvRGV0RGljdCdcbmltcG9ydCBORGljdCAgIGZyb20gJy4vcG9zL24vTkRpY3QnXG5pbXBvcnQgUHJlRGljdCBmcm9tICcuL3Bvcy9wcmUvUHJlRGljdCdcbmltcG9ydCBWRGljdCAgIGZyb20gJy4vcG9zL3YvVkRpY3QnXG5cbmltcG9ydCBHZW5kZXIgICAgZnJvbSAnLi9wb3MvR2VuZGVyJ1xuaW1wb3J0IFBlcnNvbiAgICBmcm9tICcuL3Bvcy9QZXJzb24nXG5pbXBvcnQgUGx1cmFsaXR5IGZyb20gJy4vcG9zL1BsdXJhbGl0eSdcbmltcG9ydCBTY2hlbWEgICAgZnJvbSAnLi9wb3MvU2NoZW1hQ29uc3RhbnRzJ1xuaW1wb3J0IFRlbnNlICAgICBmcm9tICcuL3Bvcy9UZW5zZSdcbmltcG9ydCB7UHJvVHlwZX0gZnJvbSAnLi9wb3MvcHJvL1BybydcblxuZXhwb3J0IHtBZGp9XG5leHBvcnQge0FkakVycm9yc31cbmV4cG9ydCB7Q2xhdXNlRXJyb3JzfVxuZXhwb3J0IHtDbGF1c2VHZW5lcmF0ZVRleHR9XG5leHBvcnQge0NsYXVzZU9ifVxuZXhwb3J0IHtEZXR9XG5leHBvcnQge0RldEVycm9yc31cbmV4cG9ydCB7RGV0UH1cbmV4cG9ydCB7RGV0UEVycm9yc31cbmV4cG9ydCB7Tn1cbmV4cG9ydCB7TkVycm9yc31cbmV4cG9ydCB7Tm9tfVxuZXhwb3J0IHtOb21FcnJvcnN9XG5leHBvcnQge05QfVxuZXhwb3J0IHtOUEVycm9yc31cbmV4cG9ydCB7UHJlfVxuZXhwb3J0IHtQcmVFcnJvcnN9XG5leHBvcnQge1ByZVBFcnJvcnN9XG5leHBvcnQge1ByZVBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ByZVBPYn1cbmV4cG9ydCB7UHJvfVxuZXhwb3J0IHtQcm9FcnJvcnN9XG5leHBvcnQge1Z9XG5leHBvcnQge1ZFcnJvcnN9XG5leHBvcnQge1ZQRXJyb3JzfVxuZXhwb3J0IHtWUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7VlBPYn1cblxuZXhwb3J0IHtBZGpEaWN0fVxuZXhwb3J0IHtEZXREaWN0fVxuZXhwb3J0IHtORGljdH1cbmV4cG9ydCB7UHJlRGljdH1cbmV4cG9ydCB7VkRpY3R9XG5cbmV4cG9ydCB7R2VuZGVyfVxuZXhwb3J0IHtQbHVyYWxpdHl9XG5leHBvcnQge1BlcnNvbn1cbmV4cG9ydCB7UHJvVHlwZX1cbmV4cG9ydCB7U2NoZW1hfVxuZXhwb3J0IHtUZW5zZX1cbiJdfQ==