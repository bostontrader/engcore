import test from 'ava'

import {NPGenerateText}  from '../src/NP'
import {NPOb}            from '../src/NP'
import Gender            from '../src/pos/Gender'
import Person            from '../src/pos/Person'
import Plurality         from '../src/pos/Plurality'
import {ProType}         from '../src/pos/pro/Pro'
import Adj               from '../src/pos/adj/Adj'
import Det               from '../src/pos/det/Det'
import N                 from '../src/pos/n/N'
import Nom               from '../src/pos/nom/Nom'

test(t => {

	// p26
	// a bird hit the car

	// p48
	// liz bought a watch

	// p49
	// what max said liz bought

	// p329
	t.is(NPGenerateText(new NPOb({
		head:new Nom({head:new N({base:'man'}), modifier:new Adj({base:'old'})}),
		det:new Det({base:'the'})}
	)),'the old man')

})
