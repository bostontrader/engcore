'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Adjective = require('./Adjective');

var AdjDictOb = {
	big: new _Adjective.AdjOb({ base: 'big' }),
	cold: new _Adjective.AdjOb({ base: 'cold' }),
	good: new _Adjective.AdjOb({ base: 'good' }),
	green: new _Adjective.AdjOb({ base: 'green' }),
	honest: new _Adjective.AdjOb({ base: 'honest', silentH: true }),
	itchy: new _Adjective.AdjOb({ base: 'itchy' }),
	kite: new _Adjective.AdjOb({ base: 'kite' }),
	long: new _Adjective.AdjOb({ base: 'long' }),
	lonely: new _Adjective.AdjOb({ base: 'lonely' }),
	little: new _Adjective.AdjOb({ base: 'little' }),
	new: new _Adjective.AdjOb({ base: 'new' }),
	red: new _Adjective.AdjOb({ base: 'red' }),
	small: new _Adjective.AdjOb({ base: 'small' }),
	tiny: new _Adjective.AdjOb({ base: 'tiny' }),
	toy: new _Adjective.AdjOb({ base: 'toy' }),
	ugly: new _Adjective.AdjOb({ base: 'ugly' }),
	wet: new _Adjective.AdjOb({ base: 'wet' }),
	wood: new _Adjective.AdjOb({ base: 'wood' })
};

exports.default = AdjDictOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZGpEaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbIkFkakRpY3RPYiIsImJpZyIsImJhc2UiLCJjb2xkIiwiZ29vZCIsImdyZWVuIiwiaG9uZXN0Iiwic2lsZW50SCIsIml0Y2h5Iiwia2l0ZSIsImxvbmciLCJsb25lbHkiLCJsaXR0bGUiLCJuZXciLCJyZWQiLCJzbWFsbCIsInRpbnkiLCJ0b3kiLCJ1Z2x5Iiwid2V0Iiwid29vZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWTtBQUNqQkMsTUFBUSxxQkFBVSxFQUFDQyxNQUFLLEtBQU4sRUFBVixDQURTO0FBRWpCQyxPQUFRLHFCQUFVLEVBQUNELE1BQUssTUFBTixFQUFWLENBRlM7QUFHakJFLE9BQVEscUJBQVUsRUFBQ0YsTUFBSyxNQUFOLEVBQVYsQ0FIUztBQUlqQkcsUUFBUSxxQkFBVSxFQUFDSCxNQUFLLE9BQU4sRUFBVixDQUpTO0FBS2pCSSxTQUFRLHFCQUFVLEVBQUNKLE1BQUssUUFBTixFQUFnQkssU0FBUyxJQUF6QixFQUFWLENBTFM7QUFNakJDLFFBQVEscUJBQVUsRUFBQ04sTUFBSyxPQUFOLEVBQVYsQ0FOUztBQU9qQk8sT0FBUSxxQkFBVSxFQUFDUCxNQUFLLE1BQU4sRUFBVixDQVBTO0FBUWpCUSxPQUFRLHFCQUFVLEVBQUNSLE1BQUssTUFBTixFQUFWLENBUlM7QUFTakJTLFNBQVEscUJBQVUsRUFBQ1QsTUFBSyxRQUFOLEVBQVYsQ0FUUztBQVVqQlUsU0FBUSxxQkFBVSxFQUFDVixNQUFLLFFBQU4sRUFBVixDQVZTO0FBV2pCVyxNQUFRLHFCQUFVLEVBQUNYLE1BQUssS0FBTixFQUFWLENBWFM7QUFZakJZLE1BQVEscUJBQVUsRUFBQ1osTUFBSyxLQUFOLEVBQVYsQ0FaUztBQWFqQmEsUUFBUSxxQkFBVSxFQUFDYixNQUFLLE9BQU4sRUFBVixDQWJTO0FBY2pCYyxPQUFRLHFCQUFVLEVBQUNkLE1BQUssTUFBTixFQUFWLENBZFM7QUFlakJlLE1BQVEscUJBQVUsRUFBQ2YsTUFBSyxLQUFOLEVBQVYsQ0FmUztBQWdCakJnQixPQUFRLHFCQUFVLEVBQUNoQixNQUFLLE1BQU4sRUFBVixDQWhCUztBQWlCakJpQixNQUFRLHFCQUFVLEVBQUNqQixNQUFLLEtBQU4sRUFBVixDQWpCUztBQWtCakJrQixPQUFRLHFCQUFVLEVBQUNsQixNQUFLLE1BQU4sRUFBVjtBQWxCUyxDQUFsQjs7a0JBcUJlRixTIiwiZmlsZSI6IkFkakRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fkak9ifSBmcm9tICcuL0FkamVjdGl2ZSdcblxuY29uc3QgQWRqRGljdE9iID0ge1xuXHRiaWc6ICAgIG5ldyBBZGpPYih7YmFzZTonYmlnJ30pLFxuXHRjb2xkOiAgIG5ldyBBZGpPYih7YmFzZTonY29sZCd9KSxcblx0Z29vZDogICBuZXcgQWRqT2Ioe2Jhc2U6J2dvb2QnfSksXG5cdGdyZWVuOiAgbmV3IEFkak9iKHtiYXNlOidncmVlbid9KSxcblx0aG9uZXN0OiBuZXcgQWRqT2Ioe2Jhc2U6J2hvbmVzdCcsIHNpbGVudEg6IHRydWV9KSxcblx0aXRjaHk6ICBuZXcgQWRqT2Ioe2Jhc2U6J2l0Y2h5J30pLFxuXHRraXRlOiAgIG5ldyBBZGpPYih7YmFzZTona2l0ZSd9KSxcblx0bG9uZzogICBuZXcgQWRqT2Ioe2Jhc2U6J2xvbmcnfSksXG5cdGxvbmVseTogbmV3IEFkak9iKHtiYXNlOidsb25lbHknfSksXG5cdGxpdHRsZTogbmV3IEFkak9iKHtiYXNlOidsaXR0bGUnfSksXG5cdG5ldzogICAgbmV3IEFkak9iKHtiYXNlOiduZXcnfSksXG5cdHJlZDogICAgbmV3IEFkak9iKHtiYXNlOidyZWQnfSksXG5cdHNtYWxsOiAgbmV3IEFkak9iKHtiYXNlOidzbWFsbCd9KSxcblx0dGlueTogICBuZXcgQWRqT2Ioe2Jhc2U6J3RpbnknfSksXG5cdHRveTogICAgbmV3IEFkak9iKHtiYXNlOid0b3knfSksXG5cdHVnbHk6ICAgbmV3IEFkak9iKHtiYXNlOid1Z2x5J30pLFxuXHR3ZXQ6ICAgIG5ldyBBZGpPYih7YmFzZTond2V0J30pLFxuXHR3b29kOiAgIG5ldyBBZGpPYih7YmFzZTond29vZCd9KSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRqRGljdE9iXG4iXX0=