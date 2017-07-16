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