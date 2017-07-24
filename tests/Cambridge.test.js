import test from 'ava'

import {AdjGenerateText} from '../src/Adj'
import {AdjOb}           from '../src/Adj'
import {DetGenerateText} from '../src/Det'
import {DetOb}           from '../src/Det'
import Gender            from '../src/Gender'
import {Plurality}       from '../src/N'
import {NGenerateText}   from '../src/N'
import {NOb}             from '../src/N'
import {NomGenerateText} from '../src/Nom'
import {NomOb}           from '../src/Nom'
import {NPGenerateText}  from '../src/NP'
import {NPOb}            from '../src/NP'
import Person            from '../src/Person'
import {ProGenerateText} from '../src/Pro'
import {ProOb}           from '../src/Pro'
import {ProType}         from '../src/Pro'
import {VGenerateText}   from '../src/V'

test(t => {

	// p26
	// a bird hit the car

	// p48
	// liz bought a watch

	// p49
	// what max said liz bought

	// p329
	t.is(NPGenerateText(new NPOb({
		head:new NomOb({head:new NOb({base:'man'}), modifier:new AdjOb({base:'old'})}),
		det:new DetOb({base:'the'})}
	)),'the old man')




})
