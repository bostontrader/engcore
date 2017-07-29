import test from 'ava'

import {AdjGenerateText} from '../src/Adj'
import {AdjOb}           from '../src/Adj'
import Gender            from '../src/Gender'
import {NomGenerateText} from '../src/Nom'
import {NomOb}           from '../src/Nom'
import {NPGenerateText}  from '../src/NP'
import {NPOb}            from '../src/NP'
import Person            from '../src/Person'
import {ProGenerateText} from '../src/Pro'
import {ProOb}           from '../src/Pro'
import {ProType}         from '../src/Pro'

import Det               from '../src/pos/det/Det'
import Plurality         from '../src/pos/Plurality'
import N                 from '../src/pos/n/N'

test(t => {

	// p26
	// a bird hit the car

	// p48
	// liz bought a watch

	// p49
	// what max said liz bought

	// p329
	t.is(NPGenerateText(new NPOb({
		head:new NomOb({head:new N({base:'man'}), modifier:new AdjOb({base:'old'})}),
		det:new Det({base:'the'})}
	)),'the old man')

})
