'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
Although the inflected forms for most nouns can be generated according to a set of rules,
that's too complicated to implement at this time.  Instead, just store the different forms.
 */

var NDict = {
	america: { inf: { s: 'america' }, proper: true },
	arctic: { inf: { s: 'arctic' }, proper: true },
	bakery: { inf: { s: 'bakery' } },
	ball: { inf: { s: 'ball' } },
	bathroom: { inf: { s: 'bathroom' } },
	bed: { inf: { s: 'bed' } },
	blessing: { inf: { s: 'blessing', p: 'blessings' } },
	box: { inf: { s: 'box' } },
	bow: { inf: { s: 'bow' } },
	bump: { inf: { s: 'bump' } },
	book: { inf: { s: 'book' } },
	car: { inf: { s: 'car' } },
	cat: { inf: { s: 'cat' } },
	cake: { inf: { s: 'cake' } },
	child: { inf: { s: 'child', p: 'children', sg: 'child\'s', pg: 'children\'s' } },
	coach: { inf: { s: 'coach' } },
	constitution: { inf: { s: 'constitution' } },
	cup: { inf: { s: 'cup' } },
	day: { inf: { s: 'day' } },
	defense: { inf: { s: 'defense' } },
	dish: { inf: { s: 'dish' } },
	doctor: { inf: { s: 'doctor' } },
	dog: { inf: { s: 'dog' } },
	fan: { inf: { s: 'fan' } },
	fear: { inf: { s: 'fear' } },
	forest: { inf: { s: 'forest' } },
	fox: { inf: { s: 'fox' } },
	fish: { inf: { s: 'fish' } },
	fun: { inf: { s: 'fun' } },
	game: { inf: { s: 'game' } },
	gown: { inf: { s: 'gown' } },
	hall: { inf: { s: 'hall' } },
	hat: { inf: { s: 'hat' } },
	hand: { inf: { s: 'hand' } },
	head: { inf: { s: 'head' } },
	house: { inf: { s: 'house' } },
	hook: { inf: { s: 'hook' } },
	job: { inf: { s: 'job' } },
	justice: { inf: { s: 'justice' } },
	kite: { inf: { s: 'kite' } },
	liberty: { inf: { s: 'liberty' } },
	look: { inf: { s: 'look' } },
	man: { inf: { s: 'man' } },
	mat: { inf: { s: 'mat' } },
	mess: { inf: { s: 'mess' } },
	mother: { inf: { s: 'mother' } },
	minute: { inf: { s: 'minute' } },
	milk: { inf: { s: 'milk' } },
	net: { inf: { s: 'net' } },
	pat: { inf: { s: 'pat' } },
	person: { inf: { s: 'person', p: 'people' } },
	plaything: { inf: { s: 'plaything' } },
	posterity: { inf: { s: 'posterity' } },
	pot: { inf: { s: 'pot' } },
	rake: { inf: { s: 'rake' } },
	sun: { inf: { s: 'sun' } },
	ship: { inf: { s: 'ship' } },
	state: { inf: { s: 'state', p: 'states' } },
	string: { inf: { s: 'string' } },
	tail: { inf: { s: 'tail' } },
	tip: { inf: { s: 'tip' } },
	thief: { inf: { s: 'thief' } },
	thing: { inf: { s: 'thing' } },
	tranquility: { inf: { s: 'tranquility' } },
	trick: { inf: { s: 'trick' } },
	top: { inf: { s: 'top' } },
	union: { inf: { s: 'union' } },
	wall: { inf: { s: 'wall' } },
	way: { inf: { s: 'way' } },
	welfare: { inf: { s: 'welfare' } }
};

exports.default = NDict;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvbi9ORGljdC5qcyJdLCJuYW1lcyI6WyJORGljdCIsImFtZXJpY2EiLCJpbmYiLCJzIiwicHJvcGVyIiwiYXJjdGljIiwiYmFrZXJ5IiwiYmFsbCIsImJhdGhyb29tIiwiYmVkIiwiYmxlc3NpbmciLCJwIiwiYm94IiwiYm93IiwiYnVtcCIsImJvb2siLCJjYXIiLCJjYXQiLCJjYWtlIiwiY2hpbGQiLCJzZyIsInBnIiwiY29hY2giLCJjb25zdGl0dXRpb24iLCJjdXAiLCJkYXkiLCJkZWZlbnNlIiwiZGlzaCIsImRvY3RvciIsImRvZyIsImZhbiIsImZlYXIiLCJmb3Jlc3QiLCJmb3giLCJmaXNoIiwiZnVuIiwiZ2FtZSIsImdvd24iLCJoYWxsIiwiaGF0IiwiaGFuZCIsImhlYWQiLCJob3VzZSIsImhvb2siLCJqb2IiLCJqdXN0aWNlIiwia2l0ZSIsImxpYmVydHkiLCJsb29rIiwibWFuIiwibWF0IiwibWVzcyIsIm1vdGhlciIsIm1pbnV0ZSIsIm1pbGsiLCJuZXQiLCJwYXQiLCJwZXJzb24iLCJwbGF5dGhpbmciLCJwb3N0ZXJpdHkiLCJwb3QiLCJyYWtlIiwic3VuIiwic2hpcCIsInN0YXRlIiwic3RyaW5nIiwidGFpbCIsInRpcCIsInRoaWVmIiwidGhpbmciLCJ0cmFucXVpbGl0eSIsInRyaWNrIiwidG9wIiwidW5pb24iLCJ3YWxsIiwid2F5Iiwid2VsZmFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7QUFLQSxJQUFNQSxRQUFRO0FBQ2JDLFVBQVcsRUFBQ0MsS0FBSSxFQUFDQyxHQUFFLFNBQUgsRUFBTCxFQUFvQkMsUUFBTyxJQUEzQixFQURFO0FBRWJDLFNBQVcsRUFBQ0gsS0FBSSxFQUFDQyxHQUFFLFFBQUgsRUFBTCxFQUFtQkMsUUFBTyxJQUExQixFQUZFO0FBR2JFLFNBQVcsRUFBQ0osS0FBSSxFQUFDQyxHQUFFLFFBQUgsRUFBTCxFQUhFO0FBSWJJLE9BQVcsRUFBQ0wsS0FBSSxFQUFDQyxHQUFF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RUFBTCxFQXZERTtBQXdEYjJELE1BQVcsRUFBQzVELEtBQUksRUFBQ0MsR0FBRSxLQUFILEVBQUwsRUF4REU7QUF5RGI0RCxPQUFXLEVBQUM3RCxLQUFJLEVBQUNDLEdBQUUsTUFBSCxFQUFMLEVBekRFO0FBMERiNkQsUUFBVyxFQUFDOUQsS0FBSSxFQUFDQyxHQUFFLE9BQUgsRUFBV1EsR0FBRSxRQUFiLEVBQUwsRUExREU7QUEyRGJzRCxTQUFXLEVBQUMvRCxLQUFJLEVBQUNDLEdBQUUsUUFBSCxFQUFMLEVBM0RFO0FBNERiK0QsT0FBVyxFQUFDaEUsS0FBSSxFQUFDQyxHQUFFLE1BQUgsRUFBTCxFQTVERTtBQTZEYmdFLE1BQVcsRUFBQ2pFLEtBQUksRUFBQ0MsR0FBRSxLQUFILEVBQUwsRUE3REU7QUE4RGJpRSxRQUFXLEVBQUNsRSxLQUFJLEVBQUNDLEdBQUUsT0FBSCxFQUFMLEVBOURFO0FBK0Ria0UsUUFBVyxFQUFDbkUsS0FBSSxFQUFDQyxHQUFFLE9BQUgsRUFBTCxFQS9ERTtBQWdFYm1FLGNBQWEsRUFBQ3BFLEtBQUksRUFBQ0MsR0FBRSxhQUFILEVBQUwsRUFoRUE7QUFpRWJvRSxRQUFXLEVBQUNyRSxLQUFJLEVBQUNDLEdBQUUsT0FBSCxFQUFMLEVBakVFO0FBa0VicUUsTUFBVyxFQUFDdEUsS0FBSSxFQUFDQyxHQUFFLEtBQUgsRUFBTCxFQWxFRTtBQW1FYnNFLFFBQVcsRUFBQ3ZFLEtBQUksRUFBQ0MsR0FBRSxPQUFILEVBQUwsRUFuRUU7QUFvRWJ1RSxPQUFXLEVBQUN4RSxLQUFJLEVBQUNDLEdBQUUsTUFBSCxFQUFMLEVBcEVFO0FBcUVid0UsTUFBVyxFQUFDekUsS0FBSSxFQUFDQyxHQUFFLEtBQUgsRUFBTCxFQXJFRTtBQXNFYnlFLFVBQVcsRUFBQzFFLEtBQUksRUFBQ0MsR0FBRSxTQUFILEVBQUw7QUF0RUUsQ0FBZDs7a0JBeUVlSCxLIiwiZmlsZSI6Ik5EaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkFsdGhvdWdoIHRoZSBpbmZsZWN0ZWQgZm9ybXMgZm9yIG1vc3Qgbm91bnMgY2FuIGJlIGdlbmVyYXRlZCBhY2NvcmRpbmcgdG8gYSBzZXQgb2YgcnVsZXMsXG50aGF0J3MgdG9vIGNvbXBsaWNhdGVkIHRvIGltcGxlbWVudCBhdCB0aGlzIHRpbWUuICBJbnN0ZWFkLCBqdXN0IHN0b3JlIHRoZSBkaWZmZXJlbnQgZm9ybXMuXG4gKi9cblxuY29uc3QgTkRpY3QgPSB7XG5cdGFtZXJpY2E6ICAge2luZjp7czonYW1lcmljYSd9LCBwcm9wZXI6dHJ1ZX0sXG5cdGFyY3RpYzogICAge2luZjp7czonYXJjdGljJ30sIHByb3Blcjp0cnVlfSxcblx0YmFrZXJ5OiAgICB7aW5mOntzOidiYWtlcnknfX0sXG5cdGJhbGw6ICAgICAge2luZjp7czonYmFsbCd9fSxcblx0YmF0aHJvb206ICB7aW5mOntzOidiYXRocm9vbSd9fSxcblx0YmVkOiAgICAgICB7aW5mOntzOidiZWQnfX0sXG5cdGJsZXNzaW5nOiAge2luZjp7czonYmxlc3NpbmcnLHA6J2JsZXNzaW5ncyd9fSxcblx0Ym94OiAgICAgICB7aW5mOntzOidib3gnfX0sXG5cdGJvdzogICAgICAge2luZjp7czonYm93J319LFxuXHRidW1wOiAgICAgIHtpbmY6e3M6J2J1bXAnfX0sXG5cdGJvb2s6ICAgICAge2luZjp7czonYm9vayd9fSxcblx0Y2FyOiAgICAgICB7aW5mOntzOidjYXInfX0sXG5cdGNhdDogICAgICAge2luZjp7czonY2F0J319LFxuXHRjYWtlOiAgICAgIHtpbmY6e3M6J2Nha2UnfX0sXG5cdGNoaWxkOiAgICAge2luZjp7czonY2hpbGQnLHA6J2NoaWxkcmVuJyxzZzonY2hpbGRcXCdzJyxwZzonY2hpbGRyZW5cXCdzJ319LFxuXHRjb2FjaDogICAgIHtpbmY6e3M6J2NvYWNoJ319LFxuXHRjb25zdGl0dXRpb246IHtpbmY6e3M6J2NvbnN0aXR1dGlvbid9fSxcblx0Y3VwOiAgICAgICB7aW5mOntzOidjdXAnfX0sXG5cdGRheTogICAgICAge2luZjp7czonZGF5J319LFxuXHRkZWZlbnNlOiAgIHtpbmY6e3M6J2RlZmVuc2UnfX0sXG5cdGRpc2g6ICAgICAge2luZjp7czonZGlzaCd9fSxcblx0ZG9jdG9yOiAgICB7aW5mOntzOidkb2N0b3InfX0sXG5cdGRvZzogICAgICAge2luZjp7czonZG9nJ319LFxuXHRmYW46ICAgICAgIHtpbmY6e3M6J2Zhbid9fSxcblx0ZmVhcjogICAgICB7aW5mOntzOidmZWFyJ319LFxuXHRmb3Jlc3Q6ICAgIHtpbmY6e3M6J2ZvcmVzdCd9fSxcblx0Zm94OiAgICAgICB7aW5mOntzOidmb3gnfX0sXG5cdGZpc2g6ICAgICAge2luZjp7czonZmlzaCd9fSxcblx0ZnVuOiAgICAgICB7aW5mOntzOidmdW4nfX0sXG5cdGdhbWU6ICAgICAge2luZjp7czonZ2FtZSd9fSxcblx0Z293bjogICAgICB7aW5mOntzOidnb3duJ319LFxuXHRoYWxsOiAgICAgIHtpbmY6e3M6J2hhbGwnfX0sXG5cdGhhdDogICAgICAge2luZjp7czonaGF0J319LFxuXHRoYW5kOiAgICAgIHtpbmY6e3M6J2hhbmQnfX0sXG5cdGhlYWQ6ICAgICAge2luZjp7czonaGVhZCd9fSxcblx0aG91c2U6ICAgICB7aW5mOntzOidob3VzZSd9fSxcblx0aG9vazogICAgICB7aW5mOntzOidob29rJ319LFxuXHRqb2I6ICAgICAgIHtpbmY6e3M6J2pvYid9fSxcblx0anVzdGljZTogICB7aW5mOntzOidqdXN0aWNlJ319LFxuXHRraXRlOiAgICAgIHtpbmY6e3M6J2tpdGUnfX0sXG5cdGxpYmVydHk6ICAge2luZjp7czonbGliZXJ0eSd9fSxcblx0bG9vazogICAgICB7aW5mOntzOidsb29rJ319LFxuXHRtYW46ICAgICAgIHtpbmY6e3M6J21hbid9fSxcblx0bWF0OiAgICAgICB7aW5mOntzOidtYXQnfX0sXG5cdG1lc3M6ICAgICAge2luZjp7czonbWVzcyd9fSxcblx0bW90aGVyOiAgICB7aW5mOntzOidtb3RoZXInfX0sXG5cdG1pbnV0ZTogICAge2luZjp7czonbWludXRlJ319LFxuXHRtaWxrOiAgICAgIHtpbmY6e3M6J21pbGsnfX0sXG5cdG5ldDogICAgICAge2luZjp7czonbmV0J319LFxuXHRwYXQ6ICAgICAgIHtpbmY6e3M6J3BhdCd9fSxcblx0cGVyc29uOiAgICB7aW5mOntzOidwZXJzb24nLHA6J3Blb3BsZSd9fSxcblx0cGxheXRoaW5nOiB7aW5mOntzOidwbGF5dGhpbmcnfX0sXG5cdHBvc3Rlcml0eToge2luZjp7czoncG9zdGVyaXR5J319LFxuXHRwb3Q6ICAgICAgIHtpbmY6e3M6J3BvdCd9fSxcblx0cmFrZTogICAgICB7aW5mOntzOidyYWtlJ319LFxuXHRzdW46ICAgICAgIHtpbmY6e3M6J3N1bid9fSxcblx0c2hpcDogICAgICB7aW5mOntzOidzaGlwJ319LFxuXHRzdGF0ZTogICAgIHtpbmY6e3M6J3N0YXRlJyxwOidzdGF0ZXMnfX0sXG5cdHN0cmluZzogICAge2luZjp7czonc3RyaW5nJ319LFxuXHR0YWlsOiAgICAgIHtpbmY6e3M6J3RhaWwnfX0sXG5cdHRpcDogICAgICAge2luZjp7czondGlwJ319LFxuXHR0aGllZjogICAgIHtpbmY6e3M6J3RoaWVmJ319LFxuXHR0aGluZzogICAgIHtpbmY6e3M6J3RoaW5nJ319LFxuXHR0cmFucXVpbGl0eToge2luZjp7czondHJhbnF1aWxpdHknfX0sXG5cdHRyaWNrOiAgICAge2luZjp7czondHJpY2snfX0sXG5cdHRvcDogICAgICAge2luZjp7czondG9wJ319LFxuXHR1bmlvbjogICAgIHtpbmY6e3M6J3VuaW9uJ319LFxuXHR3YWxsOiAgICAgIHtpbmY6e3M6J3dhbGwnfX0sXG5cdHdheTogICAgICAge2luZjp7czond2F5J319LFxuXHR3ZWxmYXJlOiAgIHtpbmY6e3M6J3dlbGZhcmUnfX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTkRpY3RcbiJdfQ==