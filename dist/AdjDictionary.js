'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Adj = require('./Adj');

var AdjDictOb = {
	big: new _Adj.AdjOb({ base: 'big' }),
	cold: new _Adj.AdjOb({ base: 'cold' }),
	good: new _Adj.AdjOb({ base: 'good' }),
	green: new _Adj.AdjOb({ base: 'green' }),
	honest: new _Adj.AdjOb({ base: 'honest', silentH: true }),
	itchy: new _Adj.AdjOb({ base: 'itchy' }),
	kite: new _Adj.AdjOb({ base: 'kite' }),
	long: new _Adj.AdjOb({ base: 'long' }),
	lonely: new _Adj.AdjOb({ base: 'lonely' }),
	little: new _Adj.AdjOb({ base: 'little' }),
	new: new _Adj.AdjOb({ base: 'new' }),
	red: new _Adj.AdjOb({ base: 'red' }),
	small: new _Adj.AdjOb({ base: 'small' }),
	tiny: new _Adj.AdjOb({ base: 'tiny' }),
	toy: new _Adj.AdjOb({ base: 'toy' }),
	ugly: new _Adj.AdjOb({ base: 'ugly' }),
	wet: new _Adj.AdjOb({ base: 'wet' }),
	wood: new _Adj.AdjOb({ base: 'wood' })
};

exports.default = AdjDictOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZGpEaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbIkFkakRpY3RPYiIsImJpZyIsImJhc2UiLCJjb2xkIiwiZ29vZCIsImdyZWVuIiwiaG9uZXN0Iiwic2lsZW50SCIsIml0Y2h5Iiwia2l0ZSIsImxvbmciLCJsb25lbHkiLCJsaXR0bGUiLCJuZXciLCJyZWQiLCJzbWFsbCIsInRpbnkiLCJ0b3kiLCJ1Z2x5Iiwid2V0Iiwid29vZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWTtBQUNqQkMsTUFBUSxlQUFVLEVBQUNDLE1BQUssS0FBTixFQUFWLENBRFM7QUFFakJDLE9BQVEsZUFBVSxFQUFDRCxNQUFLLE1BQU4sRUFBVixDQUZTO0FBR2pCRSxPQUFRLGVBQVUsRUFBQ0YsTUFBSyxNQUFOLEVBQVYsQ0FIUztBQUlqQkcsUUFBUSxlQUFVLEVBQUNILE1BQUssT0FBTixFQUFWLENBSlM7QUFLakJJLFNBQVEsZUFBVSxFQUFDSixNQUFLLFFBQU4sRUFBZ0JLLFNBQVMsSUFBekIsRUFBVixDQUxTO0FBTWpCQyxRQUFRLGVBQVUsRUFBQ04sTUFBSyxPQUFOLEVBQVYsQ0FOUztBQU9qQk8sT0FBUSxlQUFVLEVBQUNQLE1BQUssTUFBTixFQUFWLENBUFM7QUFRakJRLE9BQVEsZUFBVSxFQUFDUixNQUFLLE1BQU4sRUFBVixDQVJTO0FBU2pCUyxTQUFRLGVBQVUsRUFBQ1QsTUFBSyxRQUFOLEVBQVYsQ0FUUztBQVVqQlUsU0FBUSxlQUFVLEVBQUNWLE1BQUssUUFBTixFQUFWLENBVlM7QUFXakJXLE1BQVEsZUFBVSxFQUFDWCxNQUFLLEtBQU4sRUFBVixDQVhTO0FBWWpCWSxNQUFRLGVBQVUsRUFBQ1osTUFBSyxLQUFOLEVBQVYsQ0FaUztBQWFqQmEsUUFBUSxlQUFVLEVBQUNiLE1BQUssT0FBTixFQUFWLENBYlM7QUFjakJjLE9BQVEsZUFBVSxFQUFDZCxNQUFLLE1BQU4sRUFBVixDQWRTO0FBZWpCZSxNQUFRLGVBQVUsRUFBQ2YsTUFBSyxLQUFOLEVBQVYsQ0FmUztBQWdCakJnQixPQUFRLGVBQVUsRUFBQ2hCLE1BQUssTUFBTixFQUFWLENBaEJTO0FBaUJqQmlCLE1BQVEsZUFBVSxFQUFDakIsTUFBSyxLQUFOLEVBQVYsQ0FqQlM7QUFrQmpCa0IsT0FBUSxlQUFVLEVBQUNsQixNQUFLLE1BQU4sRUFBVjtBQWxCUyxDQUFsQjs7a0JBcUJlRixTIiwiZmlsZSI6IkFkakRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fkak9ifSBmcm9tICcuL0FkaidcblxuY29uc3QgQWRqRGljdE9iID0ge1xuXHRiaWc6ICAgIG5ldyBBZGpPYih7YmFzZTonYmlnJ30pLFxuXHRjb2xkOiAgIG5ldyBBZGpPYih7YmFzZTonY29sZCd9KSxcblx0Z29vZDogICBuZXcgQWRqT2Ioe2Jhc2U6J2dvb2QnfSksXG5cdGdyZWVuOiAgbmV3IEFkak9iKHtiYXNlOidncmVlbid9KSxcblx0aG9uZXN0OiBuZXcgQWRqT2Ioe2Jhc2U6J2hvbmVzdCcsIHNpbGVudEg6IHRydWV9KSxcblx0aXRjaHk6ICBuZXcgQWRqT2Ioe2Jhc2U6J2l0Y2h5J30pLFxuXHRraXRlOiAgIG5ldyBBZGpPYih7YmFzZTona2l0ZSd9KSxcblx0bG9uZzogICBuZXcgQWRqT2Ioe2Jhc2U6J2xvbmcnfSksXG5cdGxvbmVseTogbmV3IEFkak9iKHtiYXNlOidsb25lbHknfSksXG5cdGxpdHRsZTogbmV3IEFkak9iKHtiYXNlOidsaXR0bGUnfSksXG5cdG5ldzogICAgbmV3IEFkak9iKHtiYXNlOiduZXcnfSksXG5cdHJlZDogICAgbmV3IEFkak9iKHtiYXNlOidyZWQnfSksXG5cdHNtYWxsOiAgbmV3IEFkak9iKHtiYXNlOidzbWFsbCd9KSxcblx0dGlueTogICBuZXcgQWRqT2Ioe2Jhc2U6J3RpbnknfSksXG5cdHRveTogICAgbmV3IEFkak9iKHtiYXNlOid0b3knfSksXG5cdHVnbHk6ICAgbmV3IEFkak9iKHtiYXNlOid1Z2x5J30pLFxuXHR3ZXQ6ICAgIG5ldyBBZGpPYih7YmFzZTond2V0J30pLFxuXHR3b29kOiAgIG5ldyBBZGpPYih7YmFzZTond29vZCd9KSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRqRGljdE9iXG4iXX0=