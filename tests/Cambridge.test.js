import test from 'ava'

import Gender    from '../src/pos/Gender'
import Person    from '../src/pos/Person'
import Plurality from '../src/pos/Plurality'
import Tense     from '../src/pos/Tense'
import {ProType} from '../src/pos/pro/Pro'
import Adj       from '../src/pos/adj/Adj'
import Clause    from '../src/pos/clause/Clause'
import Det       from '../src/pos/det/Det'
import N         from '../src/pos/n/N'
import Nom       from '../src/pos/nom/Nom'
import NP        from '../src/pos/np/NP'
import V         from '../src/pos/v/V'
import VP        from '../src/pos/vp/VP'

test(t => {

	// p26
	// a bird hit the car

	// p48
	t.is(new Clause({head:new VP({head:new V({base:'buy', tense:Tense.Past}), object:new NP({head:new N('watch'),det:new Det({base:'a'})})}),subject:new N({base:'liz', inf:{s:'liz'}, proper:true})}).analyse().t,'Liz bought a watch')

	// p49
	// what max said liz bought

	// p329
	t.is(new NP({
		head:new Nom({head:new N({base:'man'}), modifier:new Adj({base:'old'})}),
		det:new Det({base:'the'})}
	).analyse().t,'the old man')

})
