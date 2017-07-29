'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDictOb = exports.AdjDictOb = exports.VPOb = exports.VPGenerateText = exports.VPErrors = exports.VErrors = exports.V = exports.ProOb = exports.ProGenerateText = exports.ProErrors = exports.PrePOb = exports.PrePGenerateText = exports.PrePErrors = exports.PreErrors = exports.Pre = exports.NPOb = exports.NPGenerateText = exports.NPErrors = exports.NomOb = exports.NomGenerateText = exports.NomErrors = exports.NErrors = exports.N = exports.DetPOb = exports.DetPGenerateText = exports.DetPErrors = exports.DetOb = exports.DetGenerateText = exports.DetErrors = exports.ClauseOb = exports.ClauseGenerateText = exports.ClauseErrors = exports.AdjOb = exports.AdjGenerateText = exports.AdjErrors = undefined;

var _Adj = require('./Adj');

var _Clause = require('./Clause');

var _Det = require('./Det');

var _DetP = require('./DetP');

var _Nom = require('./Nom');

var _NP = require('./NP');

var _PreP = require('./PreP');

var _Pro = require('./Pro');

var _VP = require('./VP');

var _N = require('./pos/n/N');

var _N2 = _interopRequireDefault(_N);

var _Pre = require('./pos/pre/Pre');

var _Pre2 = _interopRequireDefault(_Pre);

var _V = require('./pos/v/V');

var _V2 = _interopRequireDefault(_V);

var _AdjDict = require('./AdjDict');

var _AdjDict2 = _interopRequireDefault(_AdjDict);

var _DetDict = require('./DetDict');

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
exports.DetDictOb = _DetDict2.default;
exports.NDict = _NDict2.default;
exports.PreDict = _PreDict2.default;
exports.VDict = _VDict2.default;
exports.Gender = _Gender2.default;
exports.Plurality = _Plurality2.default;
exports.Person = _Person2.default;
exports.ProType = _Pro.ProType;
exports.Schema = _SchemaConstants2.default;
exports.Tense = _Tense2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGpFcnJvcnMiLCJBZGpHZW5lcmF0ZVRleHQiLCJBZGpPYiIsIkNsYXVzZUVycm9ycyIsIkNsYXVzZUdlbmVyYXRlVGV4dCIsIkNsYXVzZU9iIiwiRGV0RXJyb3JzIiwiRGV0R2VuZXJhdGVUZXh0IiwiRGV0T2IiLCJEZXRQRXJyb3JzIiwiRGV0UEdlbmVyYXRlVGV4dCIsIkRldFBPYiIsIk4iLCJORXJyb3JzIiwiTm9tRXJyb3JzIiwiTm9tR2VuZXJhdGVUZXh0IiwiTm9tT2IiLCJOUEVycm9ycyIsIk5QR2VuZXJhdGVUZXh0IiwiTlBPYiIsIlByZSIsIlByZUVycm9ycyIsIlByZVBFcnJvcnMiLCJQcmVQR2VuZXJhdGVUZXh0IiwiUHJlUE9iIiwiUHJvRXJyb3JzIiwiUHJvR2VuZXJhdGVUZXh0IiwiUHJvT2IiLCJWIiwiVkVycm9ycyIsIlZQRXJyb3JzIiwiVlBHZW5lcmF0ZVRleHQiLCJWUE9iIiwiQWRqRGljdE9iIiwiRGV0RGljdE9iIiwiTkRpY3QiLCJQcmVEaWN0IiwiVkRpY3QiLCJHZW5kZXIiLCJQbHVyYWxpdHkiLCJQZXJzb24iLCJQcm9UeXBlIiwiU2NoZW1hIiwiVGVuc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBRVFBLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFk7UUFDQUMsa0I7UUFDQUMsUTtRQUNBQyxTO1FBQ0FDLGU7UUFDQUMsSztRQUNBQyxVO1FBQ0FDLGdCO1FBQ0FDLE07UUFDQUMsQztRQUNBQyxPO1FBQ0FDLFM7UUFDQUMsZTtRQUNBQyxLO1FBQ0FDLFE7UUFDQUMsYztRQUNBQyxJO1FBQ0FDLEc7UUFDQUMsUztRQUNBQyxVO1FBQ0FDLGdCO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxlO1FBQ0FDLEs7UUFDQUMsQztRQUNBQyxPO1FBQ0FDLFE7UUFDQUMsYztRQUNBQyxJO1FBRUFDLFM7UUFDQUMsUztRQUNBQyxLO1FBQ0FDLE87UUFDQUMsSztRQUVBQyxNO1FBQ0FDLFM7UUFDQUMsTTtRQUNBQyxPO1FBQ0FDLE07UUFDQUMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWRqRXJyb3JzfSAgICAgICAgICBmcm9tICcuL0FkaidcbmltcG9ydCB7QWRqR2VuZXJhdGVUZXh0fSAgICBmcm9tICcuL0FkaidcbmltcG9ydCB7QWRqT2J9ICAgICAgICAgICAgICBmcm9tICcuL0FkaidcbmltcG9ydCB7Q2xhdXNlRXJyb3JzfSAgICAgICBmcm9tICcuL0NsYXVzZSdcbmltcG9ydCB7Q2xhdXNlR2VuZXJhdGVUZXh0fSBmcm9tICcuL0NsYXVzZSdcbmltcG9ydCB7Q2xhdXNlT2J9ICAgICAgICAgICBmcm9tICcuL0NsYXVzZSdcbmltcG9ydCB7RGV0RXJyb3JzfSAgICAgICAgICBmcm9tICcuL0RldCdcbmltcG9ydCB7RGV0R2VuZXJhdGVUZXh0fSAgICBmcm9tICcuL0RldCdcbmltcG9ydCB7RGV0T2J9ICAgICAgICAgICAgICBmcm9tICcuL0RldCdcbmltcG9ydCB7RGV0UEVycm9yc30gICAgICAgICBmcm9tICcuL0RldFAnXG5pbXBvcnQge0RldFBHZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9EZXRQJ1xuaW1wb3J0IHtEZXRQT2J9ICAgICAgICAgICAgIGZyb20gJy4vRGV0UCdcbmltcG9ydCB7Tm9tRXJyb3JzfSAgICAgICAgICBmcm9tICcuL05vbSdcbmltcG9ydCB7Tm9tR2VuZXJhdGVUZXh0fSAgICBmcm9tICcuL05vbSdcbmltcG9ydCB7Tm9tT2J9ICAgICAgICAgICAgICBmcm9tICcuL05vbSdcbmltcG9ydCB7TlBFcnJvcnN9ICAgICAgICAgICBmcm9tICcuL05QJ1xuaW1wb3J0IHtOUEdlbmVyYXRlVGV4dH0gICAgIGZyb20gJy4vTlAnXG5pbXBvcnQge05QT2J9ICAgICAgICAgICAgICAgZnJvbSAnLi9OUCdcbmltcG9ydCB7UHJlUEVycm9yc30gICAgICAgICBmcm9tICcuL1ByZVAnXG5pbXBvcnQge1ByZVBHZW5lcmF0ZVRleHR9ICAgZnJvbSAnLi9QcmVQJ1xuaW1wb3J0IHtQcmVQT2J9ICAgICAgICAgICAgIGZyb20gJy4vUHJlUCdcbmltcG9ydCB7UHJvRXJyb3JzfSAgICAgICAgICBmcm9tICcuL1BybydcbmltcG9ydCB7UHJvR2VuZXJhdGVUZXh0fSAgICBmcm9tICcuL1BybydcbmltcG9ydCB7UHJvT2J9ICAgICAgICAgICAgICBmcm9tICcuL1BybydcbmltcG9ydCB7VlBFcnJvcnN9ICAgICAgICAgICBmcm9tICcuL1ZQJ1xuaW1wb3J0IHtWUEdlbmVyYXRlVGV4dH0gICAgIGZyb20gJy4vVlAnXG5pbXBvcnQge1ZQT2J9ICAgICAgICAgICAgICAgZnJvbSAnLi9WUCdcbmltcG9ydCBOICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy9uL04nXG5pbXBvcnQge05FcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbi9OJ1xuaW1wb3J0IFByZSAgICAgICAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQge1ByZUVycm9yc30gICAgICAgICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCBWICAgICAgICAgICAgICAgICAgICBmcm9tICcuL3Bvcy92L1YnXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuXG5pbXBvcnQgQWRqRGljdE9iIGZyb20gJy4vQWRqRGljdCdcbmltcG9ydCBEZXREaWN0T2IgZnJvbSAnLi9EZXREaWN0J1xuaW1wb3J0IE5EaWN0ICAgICBmcm9tICcuL3Bvcy9uL05EaWN0J1xuaW1wb3J0IFByZURpY3QgICBmcm9tICcuL3Bvcy9wcmUvUHJlRGljdCdcbmltcG9ydCBWRGljdCAgICAgZnJvbSAnLi9wb3Mvdi9WRGljdCdcblxuaW1wb3J0IEdlbmRlciAgICAgIGZyb20gJy4vR2VuZGVyJ1xuaW1wb3J0IFBlcnNvbiAgICAgIGZyb20gJy4vUGVyc29uJ1xuaW1wb3J0IHtQcm9UeXBlfSAgIGZyb20gJy4vUHJvJ1xuaW1wb3J0IFNjaGVtYSAgICAgIGZyb20gJy4vU2NoZW1hQ29uc3RhbnRzJ1xuaW1wb3J0IFBsdXJhbGl0eSAgIGZyb20gJy4vcG9zL1BsdXJhbGl0eSdcbmltcG9ydCBUZW5zZSAgICAgICBmcm9tICcuL3Bvcy9UZW5zZSdcblxuZXhwb3J0IHtBZGpFcnJvcnN9XG5leHBvcnQge0FkakdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7QWRqT2J9XG5leHBvcnQge0NsYXVzZUVycm9yc31cbmV4cG9ydCB7Q2xhdXNlR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtDbGF1c2VPYn1cbmV4cG9ydCB7RGV0RXJyb3JzfVxuZXhwb3J0IHtEZXRHZW5lcmF0ZVRleHR9XG5leHBvcnQge0RldE9ifVxuZXhwb3J0IHtEZXRQRXJyb3JzfVxuZXhwb3J0IHtEZXRQR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtEZXRQT2J9XG5leHBvcnQge059XG5leHBvcnQge05FcnJvcnN9XG5leHBvcnQge05vbUVycm9yc31cbmV4cG9ydCB7Tm9tR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOb21PYn1cbmV4cG9ydCB7TlBFcnJvcnN9XG5leHBvcnQge05QR2VuZXJhdGVUZXh0fVxuZXhwb3J0IHtOUE9ifVxuZXhwb3J0IHtQcmV9XG5leHBvcnQge1ByZUVycm9yc31cbmV4cG9ydCB7UHJlUEVycm9yc31cbmV4cG9ydCB7UHJlUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7UHJlUE9ifVxuZXhwb3J0IHtQcm9FcnJvcnN9XG5leHBvcnQge1Byb0dlbmVyYXRlVGV4dH1cbmV4cG9ydCB7UHJvT2J9XG5leHBvcnQge1Z9XG5leHBvcnQge1ZFcnJvcnN9XG5leHBvcnQge1ZQRXJyb3JzfVxuZXhwb3J0IHtWUEdlbmVyYXRlVGV4dH1cbmV4cG9ydCB7VlBPYn1cblxuZXhwb3J0IHtBZGpEaWN0T2J9XG5leHBvcnQge0RldERpY3RPYn1cbmV4cG9ydCB7TkRpY3R9XG5leHBvcnQge1ByZURpY3R9XG5leHBvcnQge1ZEaWN0fVxuXG5leHBvcnQge0dlbmRlcn1cbmV4cG9ydCB7UGx1cmFsaXR5fVxuZXhwb3J0IHtQZXJzb259XG5leHBvcnQge1Byb1R5cGV9XG5leHBvcnQge1NjaGVtYX1cbmV4cG9ydCB7VGVuc2V9XG4iXX0=