'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
 Although the inflected forms for most verbs can be generated according to a set of rules, that's too complicated to implement at this time. In addition, there are many, many irregularities that must simply be stored. Instead of getting distracted by this complexity, just store the different inflections.
 */

// Ordinary lexical verbs
var VDict = {
	arrive: { inf: ['', ['', 'arrive'], '', ',', ''] },
	ask: { inf: ['', ['', 'ask'], '', ',', ''] },
	bend: { inf: ['', ['', 'bend'], '', ',', ''] },
	bet: { inf: ['', ['', 'bet'], '', ',', ''] },
	bite: { inf: ['', ['', 'bite'], '', ',', ''] },
	bump: { inf: ['', ['', 'bump'], '', ',', ''] },
	call: { inf: ['', ['', 'call'], '', ',', ''] },
	come: { inf: ['', ['', 'come'], '', ',', ''] },
	establish: { inf: ['', ['', 'establish'], '', ',', ''] },
	fall: { inf: ['', ['', 'fall'], '', ',', ''] },
	fan: { inf: ['', ['', 'fan'], '', ',', ''] },
	find: { inf: ['', ['', 'find'], '', ',', ''] },
	fly: { inf: ['', ['', 'fly'], '', ',', ''] },
	form: { inf: ['', ['', 'form'], '', ',', ''] },
	get: { inf: ['', ['', 'get'], '', ',', ''] },
	give: { inf: ['', ['', 'give'], '', ',', ''] },
	go: { inf: ['', ['', 'go'], '', ',', ''] },
	hear: { inf: ['', ['', 'hear'], '', ',', ''] },
	hit: { inf: ['', ['', 'hit'], '', ',', ''] },
	hold: { inf: ['', ['', 'hold'], '', ',', ''] },
	hop: { inf: ['', ['', 'hop'], '', ',', ''] },
	inform: { inf: ['', ['', 'inform'], '', ',', ''] },
	insure: { inf: ['', ['', 'insure'], '', ',', ''] },
	jump: { inf: ['', ['', 'jump'], '', ',', ''] },
	know: { inf: ['', ['', 'know'], '', ',', ''] },
	leave: { inf: ['', ['', 'leave'], '', ',', ''] },
	let: { inf: ['', ['', 'let'], '', ',', ''] },
	like: { inf: ['', ['', 'like'], '', ',', ''] },
	lit: { inf: ['', ['', 'lit'], '', ',', ''] },
	look: { inf: ['', ['', 'look'], '', ',', ''] },
	make: { inf: ['', ['', 'make'], '', ',', ''] },
	ordain: { inf: ['', ['', 'ordain'], '', ',', ''] },
	place: { inf: ['', ['', 'place'], '', ',', ''] },
	play: { inf: ['', ['', 'play'], '', ',', ''] },
	provide: { inf: ['', ['', 'provide'], '', ',', ''] },
	promote: { inf: ['', ['', 'promote'], '', ',', ''] },
	put: { inf: ['', ['', 'put'], '', ',', ''] },
	run: { inf: ['', ['', 'run'], '', ',', ''] },
	say: { inf: ['', ['', 'say'], '', ',', ''] },
	secure: { inf: ['', ['', 'secure'], '', ',', ''] },
	see: { inf: ['', ['', 'see'], '', ',', ''] },
	shake: { inf: ['', ['', 'shake'], '', ',', ''] },
	shut: { inf: ['', ['', 'shut'], '', ',', ''] },
	shine: { inf: ['', ['', 'shine'], '', ',', ''] },
	show: { inf: ['', ['', 'show'], '', ',', ''] },
	sigh: { inf: ['', ['', 'sigh'], '', ',', ''] },
	sink: { inf: ['', ['', 'sink'], '', ',', ''] },
	sit: { inf: ['', ['', 'sit'], '', ',', ''] },
	stand: { inf: ['', ['', 'stand'], '', ',', ''] },
	steal: { inf: ['', ['', 'steal'], '', ',', ''] },
	step: { inf: ['', ['', 'step'], '', ',', ''] },
	stop: { inf: ['', ['', 'stop'], '', ',', ''] },
	take: { inf: ['took', ['takes', 'take'], 'take', 'taking,', 'taken'] },
	tell: { inf: ['', ['', 'tell'], '', ',', ''] },
	think: { inf: ['', ['', 'think'], '', ',', ''] },
	thump: { inf: ['', ['', 'thump'], '', ',', ''] },
	turn: { inf: ['', ['', 'turn'], '', ',', ''] },
	visit: { inf: ['', ['', 'visit'], '', ',', ''] },
	walk: { inf: ['', ['', 'walk'], '', ',', ''] },
	want: { inf: ['', ['', 'want'], '', ',', ''] },
	wash: { inf: ['', ['', 'wash'], '', ',', ''] },
	wish: { inf: ['', ['', 'wish'], '', ',', ''] },
	work: { inf: ['', ['', 'work'], '', ',', ''] }

	/*
  be:      new VOb({base:'be',     pastForm:'was'}),
  do:      new VOb({base:'do',     pastForm:'did'}),
  have:    new VOb({base:'have',   pastForm:'had'}),
  )*/

};exports.default = VDict;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wb3Mvdi9WRGljdC5qcyJdLCJuYW1lcyI6WyJWRGljdCIsImFycml2ZSIsImluZiIsImFzayIsImJlbmQiLCJiZXQiLCJiaXRlIiwiYnVtcCIsImNhbGwiLCJjb21lIiwiZXN0YWJsaXNoIiwiZmFsbCIsImZhbiIsImZpbmQiLCJmbHkiLCJmb3JtIiwiZ2V0IiwiZ2l2ZSIsImdvIiwiaGVhciIsImhpdCIsImhvbGQiLCJob3AiLCJpbmZvcm0iLCJpbnN1cmUiLCJqdW1wIiwia25vdyIsImxlYXZlIiwibGV0IiwibGlrZSIsImxpdCIsImxvb2siLCJtYWtlIiwib3JkYWluIiwicGxhY2UiLCJwbGF5IiwicHJvdmlkZSIsInByb21vdGUiLCJwdXQiLCJydW4iLCJzYXkiLCJzZWN1cmUiLCJzZWUiLCJzaGFrZSIsInNodXQiLCJzaGluZSIsInNob3ciLCJzaWdoIiwic2luayIsInNpdCIsInN0YW5kIiwic3RlYWwiLCJzdGVwIiwic3RvcCIsInRha2UiLCJ0ZWxsIiwidGhpbmsiLCJ0aHVtcCIsInR1cm4iLCJ2aXNpdCIsIndhbGsiLCJ3YW50Iiwid2FzaCIsIndpc2giLCJ3b3JrIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQSxJQUFNQSxRQUFRO0FBQ2JDLFNBQVMsRUFBQ0MsS0FBSSxDQUFDLEVBQUQsRUFBSSxDQUFDLEVBQUQsRUFBSSxRQUFKLENBQUosRUFBa0IsRUFBbEIsRUFBcUIsR0FBckIsRUFBeUIsRUFBekIsQ0FBTCxFQURJO0FBRWJDLE1BQVMsRUFBQ0QsS0FBSSxDQUFDLEVBQUQsRUFBSSxDQUFDLEVBQUQsRUFBSSxLQUFKLENBQUosRUFBZSxFQUFmLEVBQWtCLEdBQWxCLEVBQXNCLEVBQXRCLENBQUwsRUFGSTtBQUdiRSxPQUFTLEVBQUNGLEtBQUksQ0FBQyxFQUFELEVBQUksQ0FBQyxFQUFELEVBQUksTUFBSixDQUFKLEVBQWdCLEVBQWhCLEVBQW1CLEdBQW5CLEVBQXVCLEVBQXZCLENBQUwsRUFI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TCxFQTVESTtBQTZEYjRELE9BQVMsRUFBQzVELEtBQUksQ0FBQyxFQUFELEVBQUksQ0FBQyxFQUFELEVBQUksTUFBSixDQUFKLEVBQWdCLEVBQWhCLEVBQW1CLEdBQW5CLEVBQXVCLEVBQXZCLENBQUwsRUE3REk7QUE4RGI2RCxPQUFTLEVBQUM3RCxLQUFJLENBQUMsRUFBRCxFQUFJLENBQUMsRUFBRCxFQUFJLE1BQUosQ0FBSixFQUFnQixFQUFoQixFQUFtQixHQUFuQixFQUF1QixFQUF2QixDQUFMLEVBOURJO0FBK0RiOEQsT0FBUyxFQUFDOUQsS0FBSSxDQUFDLEVBQUQsRUFBSSxDQUFDLEVBQUQsRUFBSSxNQUFKLENBQUosRUFBZ0IsRUFBaEIsRUFBbUIsR0FBbkIsRUFBdUIsRUFBdkIsQ0FBTDs7QUFHVjs7Ozs7O0FBbEVjLENBQWQsQyxrQkF3RWVGLEsiLCJmaWxlIjoiVkRpY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuIEFsdGhvdWdoIHRoZSBpbmZsZWN0ZWQgZm9ybXMgZm9yIG1vc3QgdmVyYnMgY2FuIGJlIGdlbmVyYXRlZCBhY2NvcmRpbmcgdG8gYSBzZXQgb2YgcnVsZXMsIHRoYXQncyB0b28gY29tcGxpY2F0ZWQgdG8gaW1wbGVtZW50IGF0IHRoaXMgdGltZS4gSW4gYWRkaXRpb24sIHRoZXJlIGFyZSBtYW55LCBtYW55IGlycmVndWxhcml0aWVzIHRoYXQgbXVzdCBzaW1wbHkgYmUgc3RvcmVkLiBJbnN0ZWFkIG9mIGdldHRpbmcgZGlzdHJhY3RlZCBieSB0aGlzIGNvbXBsZXhpdHksIGp1c3Qgc3RvcmUgdGhlIGRpZmZlcmVudCBpbmZsZWN0aW9ucy5cbiAqL1xuXG4vLyBPcmRpbmFyeSBsZXhpY2FsIHZlcmJzXG5jb25zdCBWRGljdCA9IHtcblx0YXJyaXZlOiAge2luZjpbJycsWycnLCdhcnJpdmUnXSwnJywnLCcsJyddfSxcblx0YXNrOiAgICAge2luZjpbJycsWycnLCdhc2snXSwnJywnLCcsJyddfSxcblx0YmVuZDogICAge2luZjpbJycsWycnLCdiZW5kJ10sJycsJywnLCcnXX0sXG5cdGJldDogICAgIHtpbmY6WycnLFsnJywnYmV0J10sJycsJywnLCcnXX0sXG5cdGJpdGU6ICAgIHtpbmY6WycnLFsnJywnYml0ZSddLCcnLCcsJywnJ119LFxuXHRidW1wOiAgICB7aW5mOlsnJyxbJycsJ2J1bXAnXSwnJywnLCcsJyddfSxcblx0Y2FsbDogICAge2luZjpbJycsWycnLCdjYWxsJ10sJycsJywnLCcnXX0sXG5cdGNvbWU6ICAgIHtpbmY6WycnLFsnJywnY29tZSddLCcnLCcsJywnJ119LFxuXHRlc3RhYmxpc2g6e2luZjpbJycsWycnLCdlc3RhYmxpc2gnXSwnJywnLCcsJyddfSxcblx0ZmFsbDogICAge2luZjpbJycsWycnLCdmYWxsJ10sJycsJywnLCcnXX0sXG5cdGZhbjogICAgIHtpbmY6WycnLFsnJywnZmFuJ10sJycsJywnLCcnXX0sXG5cdGZpbmQ6ICAgIHtpbmY6WycnLFsnJywnZmluZCddLCcnLCcsJywnJ119LFxuXHRmbHk6ICAgICB7aW5mOlsnJyxbJycsJ2ZseSddLCcnLCcsJywnJ119LFxuXHRmb3JtOiAgICB7aW5mOlsnJyxbJycsJ2Zvcm0nXSwnJywnLCcsJyddfSxcblx0Z2V0OiAgICAge2luZjpbJycsWycnLCdnZXQnXSwnJywnLCcsJyddfSxcblx0Z2l2ZTogICAge2luZjpbJycsWycnLCdnaXZlJ10sJycsJywnLCcnXX0sXG5cdGdvOiAgICAgIHtpbmY6WycnLFsnJywnZ28nXSwnJywnLCcsJyddfSxcblx0aGVhcjogICAge2luZjpbJycsWycnLCdoZWFyJ10sJycsJywnLCcnXX0sXG5cdGhpdDogICAgIHtpbmY6WycnLFsnJywnaGl0J10sJycsJywnLCcnXX0sXG5cdGhvbGQ6ICAgIHtpbmY6WycnLFsnJywnaG9sZCddLCcnLCcsJywnJ119LFxuXHRob3A6ICAgICB7aW5mOlsnJyxbJycsJ2hvcCddLCcnLCcsJywnJ119LFxuXHRpbmZvcm06ICB7aW5mOlsnJyxbJycsJ2luZm9ybSddLCcnLCcsJywnJ119LFxuXHRpbnN1cmU6ICB7aW5mOlsnJyxbJycsJ2luc3VyZSddLCcnLCcsJywnJ119LFxuXHRqdW1wOiAgICB7aW5mOlsnJyxbJycsJ2p1bXAnXSwnJywnLCcsJyddfSxcblx0a25vdzogICAge2luZjpbJycsWycnLCdrbm93J10sJycsJywnLCcnXX0sXG5cdGxlYXZlOiAgIHtpbmY6WycnLFsnJywnbGVhdmUnXSwnJywnLCcsJyddfSxcblx0bGV0OiAgICAge2luZjpbJycsWycnLCdsZXQnXSwnJywnLCcsJyddfSxcblx0bGlrZTogICAge2luZjpbJycsWycnLCdsaWtlJ10sJycsJywnLCcnXX0sXG5cdGxpdDogICAgIHtpbmY6WycnLFsnJywnbGl0J10sJycsJywnLCcnXX0sXG5cdGxvb2s6ICAgIHtpbmY6WycnLFsnJywnbG9vayddLCcnLCcsJywnJ119LFxuXHRtYWtlOiAgICB7aW5mOlsnJyxbJycsJ21ha2UnXSwnJywnLCcsJyddfSxcblx0b3JkYWluOiAge2luZjpbJycsWycnLCdvcmRhaW4nXSwnJywnLCcsJyddfSxcblx0cGxhY2U6ICAge2luZjpbJycsWycnLCdwbGFjZSddLCcnLCcsJywnJ119LFxuXHRwbGF5OiAgICB7aW5mOlsnJyxbJycsJ3BsYXknXSwnJywnLCcsJyddfSxcblx0cHJvdmlkZToge2luZjpbJycsWycnLCdwcm92aWRlJ10sJycsJywnLCcnXX0sXG5cdHByb21vdGU6IHtpbmY6WycnLFsnJywncHJvbW90ZSddLCcnLCcsJywnJ119LFxuXHRwdXQ6ICAgICB7aW5mOlsnJyxbJycsJ3B1dCddLCcnLCcsJywnJ119LFxuXHRydW46ICAgICB7aW5mOlsnJyxbJycsJ3J1biddLCcnLCcsJywnJ119LFxuXHRzYXk6ICAgICB7aW5mOlsnJyxbJycsJ3NheSddLCcnLCcsJywnJ119LFxuXHRzZWN1cmU6ICB7aW5mOlsnJyxbJycsJ3NlY3VyZSddLCcnLCcsJywnJ119LFxuXHRzZWU6ICAgICB7aW5mOlsnJyxbJycsJ3NlZSddLCcnLCcsJywnJ119LFxuXHRzaGFrZTogICB7aW5mOlsnJyxbJycsJ3NoYWtlJ10sJycsJywnLCcnXX0sXG5cdHNodXQ6ICAgIHtpbmY6WycnLFsnJywnc2h1dCddLCcnLCcsJywnJ119LFxuXHRzaGluZTogICB7aW5mOlsnJyxbJycsJ3NoaW5lJ10sJycsJywnLCcnXX0sXG5cdHNob3c6ICAgIHtpbmY6WycnLFsnJywnc2hvdyddLCcnLCcsJywnJ119LFxuXHRzaWdoOiAgICB7aW5mOlsnJyxbJycsJ3NpZ2gnXSwnJywnLCcsJyddfSxcblx0c2luazogICAge2luZjpbJycsWycnLCdzaW5rJ10sJycsJywnLCcnXX0sXG5cdHNpdDogICAgIHtpbmY6WycnLFsnJywnc2l0J10sJycsJywnLCcnXX0sXG5cdHN0YW5kOiAgIHtpbmY6WycnLFsnJywnc3RhbmQnXSwnJywnLCcsJyddfSxcblx0c3RlYWw6ICAge2luZjpbJycsWycnLCdzdGVhbCddLCcnLCcsJywnJ119LFxuXHRzdGVwOiAgICB7aW5mOlsnJyxbJycsJ3N0ZXAnXSwnJywnLCcsJyddfSxcblx0c3RvcDogICAge2luZjpbJycsWycnLCdzdG9wJ10sJycsJywnLCcnXX0sXG5cdHRha2U6ICAgIHtpbmY6Wyd0b29rJyxbJ3Rha2VzJywndGFrZSddLCd0YWtlJywndGFraW5nLCcsJ3Rha2VuJ119LFxuXHR0ZWxsOiAgICB7aW5mOlsnJyxbJycsJ3RlbGwnXSwnJywnLCcsJyddfSxcblx0dGhpbms6ICAge2luZjpbJycsWycnLCd0aGluayddLCcnLCcsJywnJ119LFxuXHR0aHVtcDogICB7aW5mOlsnJyxbJycsJ3RodW1wJ10sJycsJywnLCcnXX0sXG5cdHR1cm46ICAgIHtpbmY6WycnLFsnJywndHVybiddLCcnLCcsJywnJ119LFxuXHR2aXNpdDogICB7aW5mOlsnJyxbJycsJ3Zpc2l0J10sJycsJywnLCcnXX0sXG5cdHdhbGs6ICAgIHtpbmY6WycnLFsnJywnd2FsayddLCcnLCcsJywnJ119LFxuXHR3YW50OiAgICB7aW5mOlsnJyxbJycsJ3dhbnQnXSwnJywnLCcsJyddfSxcblx0d2FzaDogICAge2luZjpbJycsWycnLCd3YXNoJ10sJycsJywnLCcnXX0sXG5cdHdpc2g6ICAgIHtpbmY6WycnLFsnJywnd2lzaCddLCcnLCcsJywnJ119LFxuXHR3b3JrOiAgICB7aW5mOlsnJyxbJycsJ3dvcmsnXSwnJywnLCcsJyddfVxufVxuXG4vKlxuIGJlOiAgICAgIG5ldyBWT2Ioe2Jhc2U6J2JlJywgICAgIHBhc3RGb3JtOid3YXMnfSksXG4gZG86ICAgICAgbmV3IFZPYih7YmFzZTonZG8nLCAgICAgcGFzdEZvcm06J2RpZCd9KSxcbiBoYXZlOiAgICBuZXcgVk9iKHtiYXNlOidoYXZlJywgICBwYXN0Rm9ybTonaGFkJ30pLFxuICkqL1xuXG5leHBvcnQgZGVmYXVsdCBWRGljdFxuIl19