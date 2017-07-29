'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdjDict = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProErrors = exports.Pro = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreErrors = exports.Pre = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomOb = exports.NomGenerateText = exports.NomErrors = exports.NErrors = exports.N = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetErrors = exports.Det = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjErrors = exports.Adj = undefined;

var _Clause = require('./Clause');

var _DetP = require('./DetP');

var _Nom = require('./Nom');

var _NP = require('./NP');

var _PreP = require('./PreP');

var _VP = require('./VP');

var _Adj = require('./pos/adj/Adj');

var _Adj2 = _interopRequireDefault(_Adj);

var _Det = require('./pos/det/Det');

var _Det2 = _interopRequireDefault(_Det);

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGoiLCJBZGpFcnJvcnMiLCJDbGF1c2VFcnJvcnMiLCJDbGF1c2VHZW5lcmF0ZVRleHQiLCJDbGF1c2VPYiIsIkRldCIsIkRldEVycm9ycyIsIkRldFBFcnJvcnMiLCJEZXRQR2VuZXJhdGVUZXh0IiwiRGV0UE9iIiwiTiIsIk5FcnJvcnMiLCJOb21FcnJvcnMiLCJOb21HZW5lcmF0ZVRleHQiLCJOb21PYiIsIk5QRXJyb3JzIiwiTlBHZW5lcmF0ZVRleHQiLCJOUE9iIiwiUHJlIiwiUHJlRXJyb3JzIiwiUHJlUEVycm9ycyIsIlByZVBHZW5lcmF0ZVRleHQiLCJQcmVQT2IiLCJQcm8iLCJQcm9FcnJvcnMiLCJWIiwiVkVycm9ycyIsIlZQRXJyb3JzIiwiVlBHZW5lcmF0ZVRleHQiLCJWUE9iIiwiQWRqRGljdCIsIkRldERpY3QiLCJORGljdCIsIlByZURpY3QiLCJWRGljdCIsIkdlbmRlciIsIlBsdXJhbGl0eSIsIlBlcnNvbiIsIlByb1R5cGUiLCJTY2hlbWEiLCJUZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHUUEsRztRQUNBQyxTO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsUTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxRO1FBQ0FDLGM7UUFDQUMsSTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLEc7UUFDQUMsUztRQUNBQyxDO1FBQ0FDLE87UUFDQUMsUTtRQUNBQyxjO1FBQ0FDLEk7UUFFQUMsTztRQUNBQyxPO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxLO1FBRUFDLE07UUFDQUMsUztRQUNBQyxNO1FBQ0FDLE87UUFDQUMsTTtRQUNBQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDbGF1c2VFcnJvcnN9ICAgICAgIGZyb20gJy4vQ2xhdXNlJ1xuaW1wb3J0IHtDbGF1c2VHZW5lcmF0ZVRleHR9IGZyb20gJy4vQ2xhdXNlJ1xuaW1wb3J0IHtDbGF1c2VPYn0gICAgICAgICAgIGZyb20gJy4vQ2xhdXNlJ1xuaW1wb3J0IHtEZXRQRXJyb3JzfSAgICAgICAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7RGV0UEdlbmVyYXRlVGV4dH0gICBmcm9tICcuL0RldFAnXG5pbXBvcnQge0RldFBPYn0gICAgICAgICAgICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtOb21FcnJvcnN9ICAgICAgICAgIGZyb20gJy4vTm9tJ1xuaW1wb3J0IHtOb21HZW5lcmF0ZVRleHR9ICAgIGZyb20gJy4vTm9tJ1xuaW1wb3J0IHtOb21PYn0gICAgICAgICAgICAgIGZyb20gJy4vTm9tJ1xuaW1wb3J0IHtOUEVycm9yc30gICAgICAgICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge05QR2VuZXJhdGVUZXh0fSAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7TlBPYn0gICAgICAgICAgICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtQcmVQRXJyb3JzfSAgICAgICAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJlUEdlbmVyYXRlVGV4dH0gICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ByZVBPYn0gICAgICAgICAgICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtWUEVycm9yc30gICAgICAgICAgIGZyb20gJy4vVlAnXG5pbXBvcnQge1ZQR2VuZXJhdGVUZXh0fSAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCB7VlBPYn0gICAgICAgICAgICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IEFkaiAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL2Fkai9BZGonXG5pbXBvcnQge0FkakVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvYWRqL0FkaidcbmltcG9ydCBEZXQgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9kZXQvRGV0J1xuaW1wb3J0IHtEZXRFcnJvcnN9ICAgICAgICAgIGZyb20gJy4vcG9zL2RldC9EZXQnXG5pbXBvcnQgTiAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IHtORXJyb3JzfSAgICAgICAgICAgIGZyb20gJy4vcG9zL24vTidcbmltcG9ydCBQcmUgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9wcmUvUHJlJ1xuaW1wb3J0IHtQcmVFcnJvcnN9ICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQgUHJvICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3MvcHJvL1BybydcbmltcG9ydCB7UHJvRXJyb3JzfSAgICAgICAgICBmcm9tICcuL3Bvcy9wcm8vUHJvJ1xuaW1wb3J0IFYgICAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3YvVidcbmltcG9ydCB7VkVycm9yc30gICAgICAgICAgICBmcm9tICcuL3Bvcy92L1YnXG5cbmltcG9ydCBBZGpEaWN0IGZyb20gJy4vcG9zL2Fkai9BZGpEaWN0J1xuaW1wb3J0IERldERpY3QgZnJvbSAnLi9wb3MvZGV0L0RldERpY3QnXG5pbXBvcnQgTkRpY3QgICBmcm9tICcuL3Bvcy9uL05EaWN0J1xuaW1wb3J0IFByZURpY3QgZnJvbSAnLi9wb3MvcHJlL1ByZURpY3QnXG5pbXBvcnQgVkRpY3QgICBmcm9tICcuL3Bvcy92L1ZEaWN0J1xuXG5pbXBvcnQgR2VuZGVyICAgICAgZnJvbSAnLi9wb3MvR2VuZGVyJ1xuaW1wb3J0IFBlcnNvbiAgICAgIGZyb20gJy4vcG9zL1BlcnNvbidcbmltcG9ydCBQbHVyYWxpdHkgICBmcm9tICcuL3Bvcy9QbHVyYWxpdHknXG5pbXBvcnQgU2NoZW1hICAgICAgZnJvbSAnLi9wb3MvU2NoZW1hQ29uc3RhbnRzJ1xuaW1wb3J0IFRlbnNlICAgICAgIGZyb20gJy4vcG9zL1RlbnNlJ1xuaW1wb3J0IHtQcm9UeXBlfSAgIGZyb20gJy4vcG9zL3Byby9Qcm8nXG5cbmV4cG9ydCB7QWRqfVxuZXhwb3J0IHtBZGpFcnJvcnN9XG5leHBvcnQge0NsYXVzZUVycm9yc31cbmV4cG9ydCB7Q2xhdXNlR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtDbGF1c2VPYn1cbmV4cG9ydCB7RGV0fVxuZXhwb3J0IHtEZXRFcnJvcnN9XG5leHBvcnQge0RldFBFcnJvcnN9XG5leHBvcnQge0RldFBHZW5lcmF0ZVRleHR9XG5leHBvcnQge0RldFBPYn1cbmV4cG9ydCB7Tn1cbmV4cG9ydCB7TkVycm9yc31cbmV4cG9ydCB7Tm9tRXJyb3JzfVxuZXhwb3J0IHtOb21HZW5lcmF0ZVRleHR9XG5leHBvcnQge05vbU9ifVxuZXhwb3J0IHtOUEVycm9yc31cbmV4cG9ydCB7TlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge05QT2J9XG5leHBvcnQge1ByZX1cbmV4cG9ydCB7UHJlRXJyb3JzfVxuZXhwb3J0IHtQcmVQRXJyb3JzfVxuZXhwb3J0IHtQcmVQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtQcmVQT2J9XG5leHBvcnQge1Byb31cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtWfVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWUEVycm9yc31cbmV4cG9ydCB7VlBHZW5lcmF0ZVRleHR9XG5leHBvcnQge1ZQT2J9XG5cbmV4cG9ydCB7QWRqRGljdH1cbmV4cG9ydCB7RGV0RGljdH1cbmV4cG9ydCB7TkRpY3R9XG5leHBvcnQge1ByZURpY3R9XG5leHBvcnQge1ZEaWN0fVxuXG5leHBvcnQge0dlbmRlcn1cbmV4cG9ydCB7UGx1cmFsaXR5fVxuZXhwb3J0IHtQZXJzb259XG5leHBvcnQge1Byb1R5cGV9XG5leHBvcnQge1NjaGVtYX1cbmV4cG9ydCB7VGVuc2V9XG4iXX0=