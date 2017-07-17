'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Noun = require('./Noun');

/*
The plural form of most nouns can be made by changing the ending according to some rules.
But some nouns have an irregular form.  If so, store the irregular form in the 'plural' key.

The plural form of some nouns is the same as the base.  For example, fish, deer, and sheep.
If so, treat these nouns as with irregular plural.
 */

var NDictOb = {
	arctic: new _Noun.NounOb({ base: 'arctic', proper: true }),
	bakery: new _Noun.NounOb({ base: 'bakery' }),
	ball: new _Noun.NounOb({ base: 'ball' }),
	bathroom: new _Noun.NounOb({ base: 'bathroom' }),
	bed: new _Noun.NounOb({ base: 'bed' }),
	box: new _Noun.NounOb({ base: 'box' }),
	bow: new _Noun.NounOb({ base: 'bow' }),
	bump: new _Noun.NounOb({ base: 'bump' }),
	book: new _Noun.NounOb({ base: 'book' }),
	car: new _Noun.NounOb({ base: 'car' }),
	cat: new _Noun.NounOb({ base: 'cat' }),
	cake: new _Noun.NounOb({ base: 'cake' }),
	coach: new _Noun.NounOb({ base: 'coach' }),
	cup: new _Noun.NounOb({ base: 'cup' }),
	day: new _Noun.NounOb({ base: 'day' }),
	dish: new _Noun.NounOb({ base: 'dish' }),
	doctor: new _Noun.NounOb({ base: 'doctor' }),
	dog: new _Noun.NounOb({ base: 'dog' }),
	fan: new _Noun.NounOb({ base: 'fan' }),
	fear: new _Noun.NounOb({ base: 'fear' }),
	forest: new _Noun.NounOb({ base: 'forest' }),
	fox: new _Noun.NounOb({ base: 'fox' }),
	fish: new _Noun.NounOb({ base: 'fish' }),
	fun: new _Noun.NounOb({ base: 'fun' }),
	game: new _Noun.NounOb({ base: 'game' }),
	gown: new _Noun.NounOb({ base: 'gown' }),
	hall: new _Noun.NounOb({ base: 'hall' }),
	hat: new _Noun.NounOb({ base: 'hat' }),
	hand: new _Noun.NounOb({ base: 'hand' }),
	head: new _Noun.NounOb({ base: 'head' }),
	house: new _Noun.NounOb({ base: 'house' }),
	hook: new _Noun.NounOb({ base: 'hook' }),
	job: new _Noun.NounOb({ base: 'job' }),
	kite: new _Noun.NounOb({ base: 'kite' }),
	look: new _Noun.NounOb({ base: 'look' }),
	man: new _Noun.NounOb({ base: 'man' }),
	mat: new _Noun.NounOb({ base: 'mat' }),
	mess: new _Noun.NounOb({ base: 'mess' }),
	mother: new _Noun.NounOb({ base: 'mother' }),
	minute: new _Noun.NounOb({ base: 'minute' }),
	milk: new _Noun.NounOb({ base: 'milk' }),
	net: new _Noun.NounOb({ base: 'net' }),
	pat: new _Noun.NounOb({ base: 'pat' }),
	plaything: new _Noun.NounOb({ base: 'plaything' }),
	pot: new _Noun.NounOb({ base: 'pot' }),
	rake: new _Noun.NounOb({ base: 'rake' }),
	sun: new _Noun.NounOb({ base: 'sun' }),
	ship: new _Noun.NounOb({ base: 'ship' }),
	string: new _Noun.NounOb({ base: 'string' }),
	tail: new _Noun.NounOb({ base: 'tail' }),
	tip: new _Noun.NounOb({ base: 'tip' }),
	thief: new _Noun.NounOb({ base: 'thief' }),
	thing: new _Noun.NounOb({ base: 'thing' }),
	trick: new _Noun.NounOb({ base: 'trick' }),
	top: new _Noun.NounOb({ base: 'top' }),
	wall: new _Noun.NounOb({ base: 'wall' }),
	way: new _Noun.NounOb({ base: 'way' })
};

exports.default = NDictOb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ORGljdGlvbmFyeS5qcyJdLCJuYW1lcyI6WyJORGljdE9iIiwiYXJjdGljIiwiYmFzZSIsInByb3BlciIsImJha2VyeSIsImJhbGwiLCJiYXRocm9vbSIsImJlZCIsImJveCIsImJvdyIsImJ1bXAiLCJib29rIiwiY2FyIiwiY2F0IiwiY2FrZSIsImNvYWNoIiwiY3VwIiwiZGF5IiwiZGlzaCIsImRvY3RvciIsImRvZyIsImZhbiIsImZlYXIiLCJmb3Jlc3QiLCJmb3giLCJmaXNoIiwiZnVuIiwiZ2FtZSIsImdvd24iLCJoYWxsIiwiaGF0IiwiaGFuZCIsImhlYWQiLCJob3VzZSIsImhvb2siLCJqb2IiLCJraXRlIiwibG9vayIsIm1hbiIsIm1hdCIsIm1lc3MiLCJtb3RoZXIiLCJtaW51dGUiLCJtaWxrIiwibmV0IiwicGF0IiwicGxheXRoaW5nIiwicG90IiwicmFrZSIsInN1biIsInNoaXAiLCJzdHJpbmciLCJ0YWlsIiwidGlwIiwidGhpZWYiLCJ0aGluZyIsInRyaWNrIiwidG9wIiwid2FsbCIsIndheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBUUEsSUFBTUEsVUFBVTtBQUNmQyxTQUFXLGlCQUFXLEVBQUNDLE1BQUssUUFBTixFQUFnQkMsUUFBTyxJQUF2QixFQUFYLENBREk7QUFFZkMsU0FBVyxpQkFBVyxFQUFDRixNQUFLLFFBQU4sRUFBWCxDQUZJO0FBR2ZHLE9BQVcsaUJBQVcsRUFBQ0gsTUFBSyxNQUFOLEVBQVgsQ0FISTtBQUlmSSxXQUFXLGlCQUFXLEVBQUNKLE1BQUssVUFBTixFQUFYLENBSkk7QUFLZkssTUFBVyxpQkFBVyxFQUFDTCxNQUFLLEtBQU4sRUFBWCxDQUxJO0FBTWZNLE1BQVcsaUJBQVcsRUFBQ04sTUFBSyxLQUFOLEVBQVgsQ0FOSTtBQU9mTyxNQUFXLGlCQUFXLEVBQUNQLE1BQUssS0FBTixFQUFYLENBUEk7QUFRZlEsT0FBVyxpQkFBVyxFQUFDUixNQUFLLE1BQU4sRUFBWCxD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QVgsQ0EvQ0k7QUFnRGZnRCxPQUFXLGlCQUFXLEVBQUNoRCxNQUFLLE1BQU4sRUFBWCxDQWhESTtBQWlEZmlELFNBQVcsaUJBQVcsRUFBQ2pELE1BQUssUUFBTixFQUFYLENBakRJO0FBa0Rma0QsT0FBVyxpQkFBVyxFQUFDbEQsTUFBSyxNQUFOLEVBQVgsQ0FsREk7QUFtRGZtRCxNQUFXLGlCQUFXLEVBQUNuRCxNQUFLLEtBQU4sRUFBWCxDQW5ESTtBQW9EZm9ELFFBQVcsaUJBQVcsRUFBQ3BELE1BQUssT0FBTixFQUFYLENBcERJO0FBcURmcUQsUUFBVyxpQkFBVyxFQUFDckQsTUFBSyxPQUFOLEVBQVgsQ0FyREk7QUFzRGZzRCxRQUFXLGlCQUFXLEVBQUN0RCxNQUFLLE9BQU4sRUFBWCxDQXRESTtBQXVEZnVELE1BQVcsaUJBQVcsRUFBQ3ZELE1BQUssS0FBTixFQUFYLENBdkRJO0FBd0Rmd0QsT0FBVyxpQkFBVyxFQUFDeEQsTUFBSyxNQUFOLEVBQVgsQ0F4REk7QUF5RGZ5RCxNQUFXLGlCQUFXLEVBQUN6RCxNQUFLLEtBQU4sRUFBWDtBQXpESSxDQUFoQjs7a0JBNERlRixPIiwiZmlsZSI6Ik5EaWN0aW9uYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOb3VuT2J9IGZyb20gJy4vTm91bidcblxuLypcblRoZSBwbHVyYWwgZm9ybSBvZiBtb3N0IG5vdW5zIGNhbiBiZSBtYWRlIGJ5IGNoYW5naW5nIHRoZSBlbmRpbmcgYWNjb3JkaW5nIHRvIHNvbWUgcnVsZXMuXG5CdXQgc29tZSBub3VucyBoYXZlIGFuIGlycmVndWxhciBmb3JtLiAgSWYgc28sIHN0b3JlIHRoZSBpcnJlZ3VsYXIgZm9ybSBpbiB0aGUgJ3BsdXJhbCcga2V5LlxuXG5UaGUgcGx1cmFsIGZvcm0gb2Ygc29tZSBub3VucyBpcyB0aGUgc2FtZSBhcyB0aGUgYmFzZS4gIEZvciBleGFtcGxlLCBmaXNoLCBkZWVyLCBhbmQgc2hlZXAuXG5JZiBzbywgdHJlYXQgdGhlc2Ugbm91bnMgYXMgd2l0aCBpcnJlZ3VsYXIgcGx1cmFsLlxuICovXG5cbmNvbnN0IE5EaWN0T2IgPSB7XG5cdGFyY3RpYzogICAgbmV3IE5vdW5PYih7YmFzZTonYXJjdGljJywgcHJvcGVyOnRydWV9KSxcblx0YmFrZXJ5OiAgICBuZXcgTm91bk9iKHtiYXNlOidiYWtlcnknfSksXG5cdGJhbGw6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonYmFsbCd9KSxcblx0YmF0aHJvb206ICBuZXcgTm91bk9iKHtiYXNlOidiYXRocm9vbSd9KSxcblx0YmVkOiAgICAgICBuZXcgTm91bk9iKHtiYXNlOidiZWQnfSksXG5cdGJveDogICAgICAgbmV3IE5vdW5PYih7YmFzZTonYm94J30pLFxuXHRib3c6ICAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2Jvdyd9KSxcblx0YnVtcDogICAgICBuZXcgTm91bk9iKHtiYXNlOididW1wJ30pLFxuXHRib29rOiAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2Jvb2snfSksXG5cdGNhcjogICAgICAgbmV3IE5vdW5PYih7YmFzZTonY2FyJ30pLFxuXHRjYXQ6ICAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2NhdCd9KSxcblx0Y2FrZTogICAgICBuZXcgTm91bk9iKHtiYXNlOidjYWtlJ30pLFxuXHRjb2FjaDogICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2NvYWNoJ30pLFxuXHRjdXA6ICAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2N1cCd9KSxcblx0ZGF5OiAgICAgICBuZXcgTm91bk9iKHtiYXNlOidkYXknfSksXG5cdGRpc2g6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonZGlzaCd9KSxcblx0ZG9jdG9yOiAgICBuZXcgTm91bk9iKHtiYXNlOidkb2N0b3InfSksXG5cdGRvZzogICAgICAgbmV3IE5vdW5PYih7YmFzZTonZG9nJ30pLFxuXHRmYW46ICAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2Zhbid9KSxcblx0ZmVhcjogICAgICBuZXcgTm91bk9iKHtiYXNlOidmZWFyJ30pLFxuXHRmb3Jlc3Q6ICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2ZvcmVzdCd9KSxcblx0Zm94OiAgICAgICBuZXcgTm91bk9iKHtiYXNlOidmb3gnfSksXG5cdGZpc2g6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonZmlzaCd9KSxcblx0ZnVuOiAgICAgICBuZXcgTm91bk9iKHtiYXNlOidmdW4nfSksXG5cdGdhbWU6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonZ2FtZSd9KSxcblx0Z293bjogICAgICBuZXcgTm91bk9iKHtiYXNlOidnb3duJ30pLFxuXHRoYWxsOiAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2hhbGwnfSksXG5cdGhhdDogICAgICAgbmV3IE5vdW5PYih7YmFzZTonaGF0J30pLFxuXHRoYW5kOiAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2hhbmQnfSksXG5cdGhlYWQ6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonaGVhZCd9KSxcblx0aG91c2U6ICAgICBuZXcgTm91bk9iKHtiYXNlOidob3VzZSd9KSxcblx0aG9vazogICAgICBuZXcgTm91bk9iKHtiYXNlOidob29rJ30pLFxuXHRqb2I6ICAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2pvYid9KSxcblx0a2l0ZTogICAgICBuZXcgTm91bk9iKHtiYXNlOidraXRlJ30pLFxuXHRsb29rOiAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J2xvb2snfSksXG5cdG1hbjogICAgICAgbmV3IE5vdW5PYih7YmFzZTonbWFuJ30pLFxuXHRtYXQ6ICAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J21hdCd9KSxcblx0bWVzczogICAgICBuZXcgTm91bk9iKHtiYXNlOidtZXNzJ30pLFxuXHRtb3RoZXI6ICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J21vdGhlcid9KSxcblx0bWludXRlOiAgICBuZXcgTm91bk9iKHtiYXNlOidtaW51dGUnfSksXG5cdG1pbGs6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonbWlsayd9KSxcblx0bmV0OiAgICAgICBuZXcgTm91bk9iKHtiYXNlOiduZXQnfSksXG5cdHBhdDogICAgICAgbmV3IE5vdW5PYih7YmFzZToncGF0J30pLFxuXHRwbGF5dGhpbmc6IG5ldyBOb3VuT2Ioe2Jhc2U6J3BsYXl0aGluZyd9KSxcblx0cG90OiAgICAgICBuZXcgTm91bk9iKHtiYXNlOidwb3QnfSksXG5cdHJha2U6ICAgICAgbmV3IE5vdW5PYih7YmFzZToncmFrZSd9KSxcblx0c3VuOiAgICAgICBuZXcgTm91bk9iKHtiYXNlOidzdW4nfSksXG5cdHNoaXA6ICAgICAgbmV3IE5vdW5PYih7YmFzZTonc2hpcCd9KSxcblx0c3RyaW5nOiAgICBuZXcgTm91bk9iKHtiYXNlOidzdHJpbmcnfSksXG5cdHRhaWw6ICAgICAgbmV3IE5vdW5PYih7YmFzZTondGFpbCd9KSxcblx0dGlwOiAgICAgICBuZXcgTm91bk9iKHtiYXNlOid0aXAnfSksXG5cdHRoaWVmOiAgICAgbmV3IE5vdW5PYih7YmFzZTondGhpZWYnfSksXG5cdHRoaW5nOiAgICAgbmV3IE5vdW5PYih7YmFzZTondGhpbmcnfSksXG5cdHRyaWNrOiAgICAgbmV3IE5vdW5PYih7YmFzZTondHJpY2snfSksXG5cdHRvcDogICAgICAgbmV3IE5vdW5PYih7YmFzZTondG9wJ30pLFxuXHR3YWxsOiAgICAgIG5ldyBOb3VuT2Ioe2Jhc2U6J3dhbGwnfSksXG5cdHdheTogICAgICAgbmV3IE5vdW5PYih7YmFzZTond2F5J30pLFxufVxuXG5leHBvcnQgZGVmYXVsdCBORGljdE9iXG4iXX0=