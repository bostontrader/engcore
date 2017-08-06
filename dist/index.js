'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdvDict = exports.AdjDict = exports.VPErrors = exports.VP = exports.VErrors = exports.V = exports.ProErrors = exports.Pro = exports.PrePErrors = exports.PreP = exports.PreErrors = exports.Pre = exports.NPErrors = exports.NP = exports.NomErrors = exports.Nom = exports.NErrors = exports.N = exports.DetPErrors = exports.DetP = exports.DetErrors = exports.Det = exports.ClauseErrors = exports.Clause = exports.AdvErrors = exports.Adv = exports.AdjErrors = exports.Adj = undefined;

var _VP = require('./pos/vp/VP');

var _VP2 = _interopRequireDefault(_VP);

var _Adj = require('./pos/adj/Adj');

var _Adj2 = _interopRequireDefault(_Adj);

var _Adv = require('./pos/adv/Adv');

var _Adv2 = _interopRequireDefault(_Adv);

var _Clause = require('./pos/clause/Clause');

var _Clause2 = _interopRequireDefault(_Clause);

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

var _PreP = require('./pos/prep/PreP');

var _PreP2 = _interopRequireDefault(_PreP);

var _Pro = require('./pos/pro/Pro');

var _Pro2 = _interopRequireDefault(_Pro);

var _V = require('./pos/v/V');

var _V2 = _interopRequireDefault(_V);

var _AdjDict = require('./pos/adj/AdjDict');

var _AdjDict2 = _interopRequireDefault(_AdjDict);

var _AdvDict = require('./pos/adv/AdvDict');

var _AdvDict2 = _interopRequireDefault(_AdvDict);

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
exports.Adv = _Adv2.default;
exports.AdvErrors = _Adv.AdvErrors;
exports.Clause = _Clause2.default;
exports.ClauseErrors = _Clause.ClauseErrors;
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
exports.PreP = _PreP2.default;
exports.PrePErrors = _PreP.PrePErrors;
exports.Pro = _Pro2.default;
exports.ProErrors = _Pro.ProErrors;
exports.V = _V2.default;
exports.VErrors = _V.VErrors;
exports.VP = _VP2.default;
exports.VPErrors = _VP.VPErrors;
exports.AdjDict = _AdjDict2.default;
exports.AdvDict = _AdvDict2.default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGoiLCJBZGpFcnJvcnMiLCJBZHYiLCJBZHZFcnJvcnMiLCJDbGF1c2UiLCJDbGF1c2VFcnJvcnMiLCJEZXQiLCJEZXRFcnJvcnMiLCJEZXRQIiwiRGV0UEVycm9ycyIsIk4iLCJORXJyb3JzIiwiTm9tIiwiTm9tRXJyb3JzIiwiTlAiLCJOUEVycm9ycyIsIlByZSIsIlByZUVycm9ycyIsIlByZVAiLCJQcmVQRXJyb3JzIiwiUHJvIiwiUHJvRXJyb3JzIiwiViIsIlZFcnJvcnMiLCJWUCIsIlZQRXJyb3JzIiwiQWRqRGljdCIsIkFkdkRpY3QiLCJEZXREaWN0IiwiTkRpY3QiLCJQcmVEaWN0IiwiVkRpY3QiLCJHZW5kZXIiLCJQbHVyYWxpdHkiLCJQZXJzb24iLCJQcm9UeXBlIiwiU2NoZW1hIiwiVGVuc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztRQUdRQSxHO1FBQ0FDLFM7UUFDQUMsRztRQUNBQyxTO1FBQ0FDLE07UUFDQUMsWTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsSTtRQUNBQyxVO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsRTtRQUNBQyxRO1FBQ0FDLEc7UUFDQUMsUztRQUNBQyxJO1FBQ0FDLFU7UUFDQUMsRztRQUNBQyxTO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxFO1FBQ0FDLFE7UUFFQUMsTztRQUNBQyxPO1FBQ0FDLE87UUFDQUMsSztRQUNBQyxPO1FBQ0FDLEs7UUFFQUMsTTtRQUNBQyxTO1FBQ0FDLE07UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVlAgICAgICAgICAgICAgZnJvbSAnLi9wb3MvdnAvVlAnXG5pbXBvcnQge1ZQRXJyb3JzfSAgICAgZnJvbSAnLi9wb3MvdnAvVlAnXG5pbXBvcnQgQWRqICAgICAgICAgICAgZnJvbSAnLi9wb3MvYWRqL0FkaidcbmltcG9ydCB7QWRqRXJyb3JzfSAgICBmcm9tICcuL3Bvcy9hZGovQWRqJ1xuaW1wb3J0IEFkdiAgICAgICAgICAgIGZyb20gJy4vcG9zL2Fkdi9BZHYnXG5pbXBvcnQge0FkdkVycm9yc30gICAgZnJvbSAnLi9wb3MvYWR2L0FkdidcbmltcG9ydCBDbGF1c2UgICAgICAgICBmcm9tICcuL3Bvcy9jbGF1c2UvQ2xhdXNlJ1xuaW1wb3J0IHtDbGF1c2VFcnJvcnN9IGZyb20gJy4vcG9zL2NsYXVzZS9DbGF1c2UnXG5pbXBvcnQgRGV0ICAgICAgICAgICAgZnJvbSAnLi9wb3MvZGV0L0RldCdcbmltcG9ydCB7RGV0RXJyb3JzfSAgICBmcm9tICcuL3Bvcy9kZXQvRGV0J1xuaW1wb3J0IERldFAgICAgICAgICAgIGZyb20gJy4vcG9zL2RldHAvRGV0UCdcbmltcG9ydCB7RGV0UEVycm9yc30gICBmcm9tICcuL3Bvcy9kZXRwL0RldFAnXG5pbXBvcnQgTiAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IHtORXJyb3JzfSAgICAgIGZyb20gJy4vcG9zL24vTidcbmltcG9ydCBOb20gICAgICAgICAgICBmcm9tICcuL3Bvcy9ub20vTm9tJ1xuaW1wb3J0IHtOb21FcnJvcnN9ICAgIGZyb20gJy4vcG9zL25vbS9Ob20nXG5pbXBvcnQgTlAgICAgICAgICAgICAgZnJvbSAnLi9wb3MvbnAvTlAnXG5pbXBvcnQge05QRXJyb3JzfSAgICAgZnJvbSAnLi9wb3MvbnAvTlAnXG5pbXBvcnQgUHJlICAgICAgICAgICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCB7UHJlRXJyb3JzfSAgICBmcm9tICcuL3Bvcy9wcmUvUHJlJ1xuaW1wb3J0IFByZVAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZXAvUHJlUCdcbmltcG9ydCB7UHJlUEVycm9yc30gICBmcm9tICcuL3Bvcy9wcmVwL1ByZVAnXG5pbXBvcnQgUHJvICAgICAgICAgICAgZnJvbSAnLi9wb3MvcHJvL1BybydcbmltcG9ydCB7UHJvRXJyb3JzfSAgICBmcm9tICcuL3Bvcy9wcm8vUHJvJ1xuaW1wb3J0IFYgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3YvVidcbmltcG9ydCB7VkVycm9yc30gICAgICBmcm9tICcuL3Bvcy92L1YnXG5cbmltcG9ydCBBZGpEaWN0IGZyb20gJy4vcG9zL2Fkai9BZGpEaWN0J1xuaW1wb3J0IEFkdkRpY3QgZnJvbSAnLi9wb3MvYWR2L0FkdkRpY3QnXG5pbXBvcnQgRGV0RGljdCBmcm9tICcuL3Bvcy9kZXQvRGV0RGljdCdcbmltcG9ydCBORGljdCAgIGZyb20gJy4vcG9zL24vTkRpY3QnXG5pbXBvcnQgUHJlRGljdCBmcm9tICcuL3Bvcy9wcmUvUHJlRGljdCdcbmltcG9ydCBWRGljdCAgIGZyb20gJy4vcG9zL3YvVkRpY3QnXG5cbmltcG9ydCBHZW5kZXIgICAgZnJvbSAnLi9wb3MvR2VuZGVyJ1xuaW1wb3J0IFBlcnNvbiAgICBmcm9tICcuL3Bvcy9QZXJzb24nXG5pbXBvcnQgUGx1cmFsaXR5IGZyb20gJy4vcG9zL1BsdXJhbGl0eSdcbmltcG9ydCBTY2hlbWEgICAgZnJvbSAnLi9wb3MvU2NoZW1hQ29uc3RhbnRzJ1xuaW1wb3J0IFRlbnNlICAgICBmcm9tICcuL3Bvcy9UZW5zZSdcbmltcG9ydCB7UHJvVHlwZX0gZnJvbSAnLi9wb3MvcHJvL1BybydcblxuZXhwb3J0IHtBZGp9XG5leHBvcnQge0FkakVycm9yc31cbmV4cG9ydCB7QWR2fVxuZXhwb3J0IHtBZHZFcnJvcnN9XG5leHBvcnQge0NsYXVzZX1cbmV4cG9ydCB7Q2xhdXNlRXJyb3JzfVxuZXhwb3J0IHtEZXR9XG5leHBvcnQge0RldEVycm9yc31cbmV4cG9ydCB7RGV0UH1cbmV4cG9ydCB7RGV0UEVycm9yc31cbmV4cG9ydCB7Tn1cbmV4cG9ydCB7TkVycm9yc31cbmV4cG9ydCB7Tm9tfVxuZXhwb3J0IHtOb21FcnJvcnN9XG5leHBvcnQge05QfVxuZXhwb3J0IHtOUEVycm9yc31cbmV4cG9ydCB7UHJlfVxuZXhwb3J0IHtQcmVFcnJvcnN9XG5leHBvcnQge1ByZVB9XG5leHBvcnQge1ByZVBFcnJvcnN9XG5leHBvcnQge1Byb31cbmV4cG9ydCB7UHJvRXJyb3JzfVxuZXhwb3J0IHtWfVxuZXhwb3J0IHtWRXJyb3JzfVxuZXhwb3J0IHtWUH1cbmV4cG9ydCB7VlBFcnJvcnN9XG5cbmV4cG9ydCB7QWRqRGljdH1cbmV4cG9ydCB7QWR2RGljdH1cbmV4cG9ydCB7RGV0RGljdH1cbmV4cG9ydCB7TkRpY3R9XG5leHBvcnQge1ByZURpY3R9XG5leHBvcnQge1ZEaWN0fVxuXG5leHBvcnQge0dlbmRlcn1cbmV4cG9ydCB7UGx1cmFsaXR5fVxuZXhwb3J0IHtQZXJzb259XG5leHBvcnQge1Byb1R5cGV9XG5leHBvcnQge1NjaGVtYX1cbmV4cG9ydCB7VGVuc2V9XG4iXX0=