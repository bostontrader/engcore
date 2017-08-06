import test from 'ava'

import Person    from '../src/pos/Person'
import Plurality from '../src/pos/Plurality'
import Adj       from '../src/pos/adj/Adj'
import Clause    from '../src/pos/clause/Clause'
import Det       from '../src/pos/det/Det'
import N         from '../src/pos/n/N'
import NP        from '../src/pos/np/NP'
import Nom       from '../src/pos/nom/Nom'
import Pre       from '../src/pos/pre/Pre'
import PreP      from '../src/pos/prep/PreP'
import Pro       from '../src/pos/pro/Pro'
import {ProType} from '../src/pos/pro/Pro'
import V         from '../src/pos/v/V'

test(t => {
	t.is(new Pro({type:ProType.Subject, plurality:Plurality.Plural, person:Person.First}).analyse().t,'we')

	t.is(new NP({
		head:new N({base:'person', plurality:Plurality.Plural}),
		det:new Det({base:'the'})
	}).analyse().t,'the people')

	t.is(
		new PreP({
			head:new Pre({base:'of'}),
			np:new NP({
				head:new Nom({head:new N({base:'state', plurality:Plurality.Plural}), modifier:new Adj({base:'united'})}),
				det:new Det({base:'the'})}
			)
		}).analyse().t
	,'of the united states')

	// in Order to
	t.is(new V({base:'form'}).analyse().t,'form')
	t.is(new Det({base:'a'}).analyse().t,'a')

	// more perfect union
	t.is(new Adj({base:'more'}),'more')
	t.is(new Nom({head:new N({base:'union'}), modifier:new Adj({base:'perfect'})}).analyse().t,'perfect union')

	// infinitival clause
	t.is(new Clause({head:new V('establish'), object:new N('justice')})
		.analyse().t,'establish justice'
	)

	// infinitival clause
	t.is(new Clause({head
		:new V('insure'), object:new Nom({head:new N({base:'tranquility'}), modifier:new Adj({base:'domestic'})})})
		.analyse().t,'insure domestic tranquility'
	)

	// infinitival clause
	t.is(new Clause({
			head: new V('provide'),
			object: new PreP({
				head: new Pre({base: 'for'}),
				np: new NP({
						head: new Nom({head: new N({base: 'defense'}), modifier: new Adj({base: 'common'})}),
						det: new Det({base: 'the'})
					}
				)
			})
		})
		.analyse().t,'provide for the common defense'
	)

	// infinitival clause
	t.is(
		new Clause({
			head:new V('promote'),
			object:new NP({
				head:new Nom({head:new N({base:'welfare'}), modifier:new Adj({base:'general'})}),
				det:new Det({base:'the'})
			})
		})
		.analyse().t,'promote the general welfare'
	)

	// and
	t.is(new V({base:'secure'}).analyse().t,'secure')

	t.is(new NP({
		head:new N({base:'blessing', plurality:Plurality.Plural}),
		det:new Det({base:'the'})
	}).analyse().t,'the blessings')

	t.is(
		new PreP({
			head:new Pre({base:'of'}),
			np:new NP({
				head:new N({base:'liberty'})
			})
		}).analyse().t
	,'of liberty')

	// to ourselves and our
	t.is(new N({base:'posterity'}).analyse().t,'posterity')

	// do
	t.is(new V({base:'ordain'}).analyse().t,'ordain')
	// and
	t.is(new V({base:'establish'}).analyse().t,'establish')

	t.is(new NP({
		head:new N({base:'constitution'}),
		det:new Det({base:'this'})
	}).analyse().t,'this constitution')

	t.is(
		new PreP({
			head:new Pre({base:'for'}),
			np:new NP({
				head:new Nom({head:new N({base:'state', plurality:Plurality.Plural}), modifier:new Adj({base:'united'})}),
				det:new Det({base:'the'})}
			)
		}).analyse().t
	,'for the united states')

	t.is(
		new PreP({
			head:new Pre({base:'of'}),
			np:new NP({
				head:new N({base:'america'})
			})
		}).analyse().t
	,'of America')
})
