'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdjDict = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProErrors = exports.Pro = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreErrors = exports.Pre = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomErrors = exports.Nom = exports.NErrors = exports.N = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetErrors = exports.Det = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjErrors = exports.Adj = undefined;

var _Clause = require('./Clause');

var _DetP = require('./DetP');

var _NP = require('./NP');

var _PreP = require('./PreP');

var _VP = require('./VP');

var _Adj = require('./pos/adj/Adj');

var _Adj2 = _interopRequireDefault(_Adj);

var _Det = require('./pos/det/Det');

var _Det2 = _interopRequireDefault(_Det);

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _Nom = require('./pos/nom/Nom');

var _Nom2 = _interopRequireDefault(_Nom);

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
exports.Nom = _Nom2.default;
exports.NomErrors = _Nom.NomErrors;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGoiLCJBZGpFcnJvcnMiLCJDbGF1c2VFcnJvcnMiLCJDbGF1c2VHZW5lcmF0ZVRleHQiLCJDbGF1c2VPYiIsIkRldCIsIkRldEVycm9ycyIsIkRldFBFcnJvcnMiLCJEZXRQR2VuZXJhdGVUZXh0IiwiRGV0UE9iIiwiTiIsIk5FcnJvcnMiLCJOb20iLCJOb21FcnJvcnMiLCJOUEVycm9ycyIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlByZSIsIlByZUVycm9ycyIsIlByZVBFcnJvcnMiLCJQcmVQR2VuZXJhdGVUZXh0IiwiUHJlUE9iIiwiUHJvIiwiUHJvRXJyb3JzIiwiViIsIlZFcnJvcnMiLCJWUEVycm9ycyIsIlZQR2VuZXJhdGVUZXh0IiwiVlBPYiIsIkFkakRpY3QiLCJEZXREaWN0IiwiTkRpY3QiLCJQcmVEaWN0IiwiVkRpY3QiLCJHZW5kZXIiLCJQbHVyYWxpdHkiLCJQZXJzb24iLCJQcm9UeXBlIiwiU2NoZW1hIiwiVGVuc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHUUEsRztRQUNBQyxTO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsUTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsVTtRQUNBQyxnQjtRQUNBQyxNO1FBQ0FDLEM7UUFDQUMsTztRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsUTtRQUNBQyxjO1FBQ0FDLEk7UUFDQUMsRztRQUNBQyxTO1FBQ0FDLFU7UUFDQUMsZ0I7UUFDQUMsTTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsQztRQUNBQyxPO1FBQ0FDLFE7UUFDQUMsYztRQUNBQyxJO1FBRUFDLE87UUFDQUMsTztRQUNBQyxLO1FBQ0FDLE87UUFDQUMsSztRQUVBQyxNO1FBQ0FDLFM7UUFDQUMsTTtRQUNBQyxPO1FBQ0FDLE07UUFDQUMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2xhdXNlRXJyb3JzfSAgICAgICBmcm9tICcuL0NsYXVzZSdcbmltcG9ydCB7Q2xhdXNlR2VuZXJhdGVUZXh0fSBmcm9tICcuL0NsYXVzZSdcbmltcG9ydCB7Q2xhdXNlT2J9ICAgICAgICAgICBmcm9tICcuL0NsYXVzZSdcbmltcG9ydCB7RGV0UEVycm9yc30gICAgICAgICBmcm9tICcuL0RldFAnXG5pbXBvcnQge0RldFBHZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtEZXRQT2J9ICAgICAgICAgICAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7TlBFcnJvcnN9ICAgICAgICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUEdlbmVyYXRlVGV4dH0gICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge05QT2J9ICAgICAgICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7UHJlUEVycm9yc30gICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ByZVBHZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQT2J9ICAgICAgICAgICAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7VlBFcnJvcnN9ICAgICAgICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUEdlbmVyYXRlVGV4dH0gICAgIGZyb20gJy4vVlAnXG5pbXBvcnQge1ZQT2J9ICAgICAgICAgICAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCBBZGogICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9hZGovQWRqJ1xuaW1wb3J0IHtBZGpFcnJvcnN9ICAgICAgICAgIGZyb20gJy4vcG9zL2Fkai9BZGonXG5pbXBvcnQgRGV0ICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3MvZGV0L0RldCdcbmltcG9ydCB7RGV0RXJyb3JzfSAgICAgICAgICBmcm9tICcuL3Bvcy9kZXQvRGV0J1xuaW1wb3J0IE4gICAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL24vTidcbmltcG9ydCB7TkVycm9yc30gICAgICAgICAgICBmcm9tICcuL3Bvcy9uL04nXG5pbXBvcnQgTm9tICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbm9tL05vbSdcbmltcG9ydCB7Tm9tRXJyb3JzfSAgICAgICAgICBmcm9tICcuL3Bvcy9ub20vTm9tJ1xuaW1wb3J0IFByZSAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCBQcm8gICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9wcm8vUHJvJ1xuaW1wb3J0IHtQcm9FcnJvcnN9ICAgICAgICAgIGZyb20gJy4vcG9zL3Byby9Qcm8nXG5pbXBvcnQgViAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuaW1wb3J0IHtWRXJyb3JzfSAgICAgICAgICAgIGZyb20gJy4vcG9zL3YvVidcblxuaW1wb3J0IEFkakRpY3QgZnJvbSAnLi9wb3MvYWRqL0FkakRpY3QnXG5pbXBvcnQgRGV0RGljdCBmcm9tICcuL3Bvcy9kZXQvRGV0RGljdCdcbmltcG9ydCBORGljdCAgIGZyb20gJy4vcG9zL24vTkRpY3QnXG5pbXBvcnQgUHJlRGljdCBmcm9tICcuL3Bvcy9wcmUvUHJlRGljdCdcbmltcG9ydCBWRGljdCAgIGZyb20gJy4vcG9zL3YvVkRpY3QnXG5cbmltcG9ydCBHZW5kZXIgICAgICBmcm9tICcuL3Bvcy9HZW5kZXInXG5pbXBvcnQgUGVyc29uICAgICAgZnJvbSAnLi9wb3MvUGVyc29uJ1xuaW1wb3J0IFBsdXJhbGl0eSAgIGZyb20gJy4vcG9zL1BsdXJhbGl0eSdcbmltcG9ydCBTY2hlbWEgICAgICBmcm9tICcuL3Bvcy9TY2hlbWFDb25zdGFudHMnXG5pbXBvcnQgVGVuc2UgICAgICAgZnJvbSAnLi9wb3MvVGVuc2UnXG5pbXBvcnQge1Byb1R5cGV9ICAgZnJvbSAnLi9wb3MvcHJvL1BybydcblxuZXhwb3J0IHtBZGp9XG5leHBvcnQge0FkakVycm9yc31cbmV4cG9ydCB7Q2xhdXNlRXJyb3JzfVxuZXhwb3J0IHtDbGF1c2VHZW5lcmF0ZVRleHR9XG5leHBvcnQge0NsYXVzZU9ifVxuZXhwb3J0IHtEZXR9XG5leHBvcnQge0RldEVycm9yc31cbmV4cG9ydCB7RGV0UEVycm9yc31cbmV4cG9ydCB7RGV0UEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7RGV0UE9ifVxuZXhwb3J0IHtOfVxuZXhwb3J0IHtORXJyb3JzfVxuZXhwb3J0IHtOb219XG5leHBvcnQge05vbUVycm9yc31cbmV4cG9ydCB7TlBFcnJvcnN9XG5leHBvcnQge05QR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOUE9ifVxuZXhwb3J0IHtQcmV9XG5leHBvcnQge1ByZUVycm9yc31cbmV4cG9ydCB7UHJlUEVycm9yc31cbmV4cG9ydCB7UHJlUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7UHJlUE9ifVxuZXhwb3J0IHtQcm99XG5leHBvcnQge1Byb0Vycm9yc31cbmV4cG9ydCB7Vn1cbmV4cG9ydCB7VkVycm9yc31cbmV4cG9ydCB7VlBFcnJvcnN9XG5leHBvcnQge1ZQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtWUE9ifVxuXG5leHBvcnQge0FkakRpY3R9XG5leHBvcnQge0RldERpY3R9XG5leHBvcnQge05EaWN0fVxuZXhwb3J0IHtQcmVEaWN0fVxuZXhwb3J0IHtWRGljdH1cblxuZXhwb3J0IHtHZW5kZXJ9XG5leHBvcnQge1BsdXJhbGl0eX1cbmV4cG9ydCB7UGVyc29ufVxuZXhwb3J0IHtQcm9UeXBlfVxuZXhwb3J0IHtTY2hlbWF9XG5leHBvcnQge1RlbnNlfVxuIl19