'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tense = exports.Schema = exports.ProType = exports.Person = exports.Plurality = exports.Gender = exports.VDict = exports.PreDict = exports.NDict = exports.DetDict = exports.AdvDict = exports.AdjDict = exports.VPErrors = exports.VP = exports.VErrors = exports.V = exports.ProErrors = exports.Pro = exports.PrePErrors = exports.PreP = exports.PreErrors = exports.Pre = exports.NPErrors = exports.NP = exports.NomErrors = exports.Nom = exports.NErrors = exports.N = exports.DetPErrors = exports.DetP = exports.DetErrors = exports.Det = exports.ClauseErrors = exports.Clause = exports.AdvErrors = exports.Adv = exports.AdjPErrors = exports.AdjP = exports.AdjErrors = exports.Adj = undefined;

var _Adj = require('./pos/adj/Adj');

var _Adj2 = _interopRequireDefault(_Adj);

var _AdjP = require('./pos/adjp/AdjP');

var _AdjP2 = _interopRequireDefault(_AdjP);

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

var _VP = require('./pos/vp/VP');

var _VP2 = _interopRequireDefault(_VP);

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
exports.AdjP = _AdjP2.default;
exports.AdjPErrors = _AdjP.AdjPErrors;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGoiLCJBZGpFcnJvcnMiLCJBZGpQIiwiQWRqUEVycm9ycyIsIkFkdiIsIkFkdkVycm9ycyIsIkNsYXVzZSIsIkNsYXVzZUVycm9ycyIsIkRldCIsIkRldEVycm9ycyIsIkRldFAiLCJEZXRQRXJyb3JzIiwiTiIsIk5FcnJvcnMiLCJOb20iLCJOb21FcnJvcnMiLCJOUCIsIk5QRXJyb3JzIiwiUHJlIiwiUHJlRXJyb3JzIiwiUHJlUCIsIlByZVBFcnJvcnMiLCJQcm8iLCJQcm9FcnJvcnMiLCJWIiwiVkVycm9ycyIsIlZQIiwiVlBFcnJvcnMiLCJBZGpEaWN0IiwiQWR2RGljdCIsIkRldERpY3QiLCJORGljdCIsIlByZURpY3QiLCJWRGljdCIsIkdlbmRlciIsIlBsdXJhbGl0eSIsIlBlcnNvbiIsIlByb1R5cGUiLCJTY2hlbWEiLCJUZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7UUFHUUEsRztRQUNBQyxTO1FBQ0FDLEk7UUFDQUMsVTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsTTtRQUNBQyxZO1FBQ0FDLEc7UUFDQUMsUztRQUNBQyxJO1FBQ0FDLFU7UUFDQUMsQztRQUNBQyxPO1FBQ0FDLEc7UUFDQUMsUztRQUNBQyxFO1FBQ0FDLFE7UUFDQUMsRztRQUNBQyxTO1FBQ0FDLEk7UUFDQUMsVTtRQUNBQyxHO1FBQ0FDLFM7UUFDQUMsQztRQUNBQyxPO1FBQ0FDLEU7UUFDQUMsUTtRQUVBQyxPO1FBQ0FDLE87UUFDQUMsTztRQUNBQyxLO1FBQ0FDLE87UUFDQUMsSztRQUVBQyxNO1FBQ0FDLFM7UUFDQUMsTTtRQUNBQyxPO1FBQ0FDLE07UUFDQUMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGogICAgICAgICAgICBmcm9tICcuL3Bvcy9hZGovQWRqJ1xuaW1wb3J0IHtBZGpFcnJvcnN9ICAgIGZyb20gJy4vcG9zL2Fkai9BZGonXG5pbXBvcnQgQWRqUCAgICAgICAgICAgZnJvbSAnLi9wb3MvYWRqcC9BZGpQJ1xuaW1wb3J0IHtBZGpQRXJyb3JzfSAgIGZyb20gJy4vcG9zL2FkanAvQWRqUCdcbmltcG9ydCBBZHYgICAgICAgICAgICBmcm9tICcuL3Bvcy9hZHYvQWR2J1xuaW1wb3J0IHtBZHZFcnJvcnN9ICAgIGZyb20gJy4vcG9zL2Fkdi9BZHYnXG5pbXBvcnQgQ2xhdXNlICAgICAgICAgZnJvbSAnLi9wb3MvY2xhdXNlL0NsYXVzZSdcbmltcG9ydCB7Q2xhdXNlRXJyb3JzfSBmcm9tICcuL3Bvcy9jbGF1c2UvQ2xhdXNlJ1xuaW1wb3J0IERldCAgICAgICAgICAgIGZyb20gJy4vcG9zL2RldC9EZXQnXG5pbXBvcnQge0RldEVycm9yc30gICAgZnJvbSAnLi9wb3MvZGV0L0RldCdcbmltcG9ydCBEZXRQICAgICAgICAgICBmcm9tICcuL3Bvcy9kZXRwL0RldFAnXG5pbXBvcnQge0RldFBFcnJvcnN9ICAgZnJvbSAnLi9wb3MvZGV0cC9EZXRQJ1xuaW1wb3J0IE4gICAgICAgICAgICAgIGZyb20gJy4vcG9zL24vTidcbmltcG9ydCB7TkVycm9yc30gICAgICBmcm9tICcuL3Bvcy9uL04nXG5pbXBvcnQgTm9tICAgICAgICAgICAgZnJvbSAnLi9wb3Mvbm9tL05vbSdcbmltcG9ydCB7Tm9tRXJyb3JzfSAgICBmcm9tICcuL3Bvcy9ub20vTm9tJ1xuaW1wb3J0IE5QICAgICAgICAgICAgIGZyb20gJy4vcG9zL25wL05QJ1xuaW1wb3J0IHtOUEVycm9yc30gICAgIGZyb20gJy4vcG9zL25wL05QJ1xuaW1wb3J0IFByZSAgICAgICAgICAgIGZyb20gJy4vcG9zL3ByZS9QcmUnXG5pbXBvcnQge1ByZUVycm9yc30gICAgZnJvbSAnLi9wb3MvcHJlL1ByZSdcbmltcG9ydCBQcmVQICAgICAgICAgICBmcm9tICcuL3Bvcy9wcmVwL1ByZVAnXG5pbXBvcnQge1ByZVBFcnJvcnN9ICAgZnJvbSAnLi9wb3MvcHJlcC9QcmVQJ1xuaW1wb3J0IFBybyAgICAgICAgICAgIGZyb20gJy4vcG9zL3Byby9Qcm8nXG5pbXBvcnQge1Byb0Vycm9yc30gICAgZnJvbSAnLi9wb3MvcHJvL1BybydcbmltcG9ydCBWICAgICAgICAgICAgICBmcm9tICcuL3Bvcy92L1YnXG5pbXBvcnQge1ZFcnJvcnN9ICAgICAgZnJvbSAnLi9wb3Mvdi9WJ1xuaW1wb3J0IFZQICAgICAgICAgICAgIGZyb20gJy4vcG9zL3ZwL1ZQJ1xuaW1wb3J0IHtWUEVycm9yc30gICAgIGZyb20gJy4vcG9zL3ZwL1ZQJ1xuXG5pbXBvcnQgQWRqRGljdCBmcm9tICcuL3Bvcy9hZGovQWRqRGljdCdcbmltcG9ydCBBZHZEaWN0IGZyb20gJy4vcG9zL2Fkdi9BZHZEaWN0J1xuaW1wb3J0IERldERpY3QgZnJvbSAnLi9wb3MvZGV0L0RldERpY3QnXG5pbXBvcnQgTkRpY3QgICBmcm9tICcuL3Bvcy9uL05EaWN0J1xuaW1wb3J0IFByZURpY3QgZnJvbSAnLi9wb3MvcHJlL1ByZURpY3QnXG5pbXBvcnQgVkRpY3QgICBmcm9tICcuL3Bvcy92L1ZEaWN0J1xuXG5pbXBvcnQgR2VuZGVyICAgIGZyb20gJy4vcG9zL0dlbmRlcidcbmltcG9ydCBQZXJzb24gICAgZnJvbSAnLi9wb3MvUGVyc29uJ1xuaW1wb3J0IFBsdXJhbGl0eSBmcm9tICcuL3Bvcy9QbHVyYWxpdHknXG5pbXBvcnQgU2NoZW1hICAgIGZyb20gJy4vcG9zL1NjaGVtYUNvbnN0YW50cydcbmltcG9ydCBUZW5zZSAgICAgZnJvbSAnLi9wb3MvVGVuc2UnXG5pbXBvcnQge1Byb1R5cGV9IGZyb20gJy4vcG9zL3Byby9Qcm8nXG5cbmV4cG9ydCB7QWRqfVxuZXhwb3J0IHtBZGpFcnJvcnN9XG5leHBvcnQge0FkalB9XG5leHBvcnQge0FkalBFcnJvcnN9XG5leHBvcnQge0Fkdn1cbmV4cG9ydCB7QWR2RXJyb3JzfVxuZXhwb3J0IHtDbGF1c2V9XG5leHBvcnQge0NsYXVzZUVycm9yc31cbmV4cG9ydCB7RGV0fVxuZXhwb3J0IHtEZXRFcnJvcnN9XG5leHBvcnQge0RldFB9XG5leHBvcnQge0RldFBFcnJvcnN9XG5leHBvcnQge059XG5leHBvcnQge05FcnJvcnN9XG5leHBvcnQge05vbX1cbmV4cG9ydCB7Tm9tRXJyb3JzfVxuZXhwb3J0IHtOUH1cbmV4cG9ydCB7TlBFcnJvcnN9XG5leHBvcnQge1ByZX1cbmV4cG9ydCB7UHJlRXJyb3JzfVxuZXhwb3J0IHtQcmVQfVxuZXhwb3J0IHtQcmVQRXJyb3JzfVxuZXhwb3J0IHtQcm99XG5leHBvcnQge1Byb0Vycm9yc31cbmV4cG9ydCB7Vn1cbmV4cG9ydCB7VkVycm9yc31cbmV4cG9ydCB7VlB9XG5leHBvcnQge1ZQRXJyb3JzfVxuXG5leHBvcnQge0FkakRpY3R9XG5leHBvcnQge0FkdkRpY3R9XG5leHBvcnQge0RldERpY3R9XG5leHBvcnQge05EaWN0fVxuZXhwb3J0IHtQcmVEaWN0fVxuZXhwb3J0IHtWRGljdH1cblxuZXhwb3J0IHtHZW5kZXJ9XG5leHBvcnQge1BsdXJhbGl0eX1cbmV4cG9ydCB7UGVyc29ufVxuZXhwb3J0IHtQcm9UeXBlfVxuZXhwb3J0IHtTY2hlbWF9XG5leHBvcnQge1RlbnNlfVxuIl19