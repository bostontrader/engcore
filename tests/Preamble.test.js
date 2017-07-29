import test from 'ava'

import {NomGenerateText}  from '../src/Nom'
import {NomOb}            from '../src/Nom'
import {NPGenerateText}   from '../src/NP'
import {NPOb}             from '../src/NP'
import Person             from '../src/pos/Person'
import {PrePGenerateText} from '../src/PreP'
import {PrePOb}           from '../src/PreP'
import {ProType}          from '../src/pos/pro/Pro'
import Plurality          from '../src/pos/Plurality'
import Adj                from '../src/pos/adj/Adj'
import Det                from '../src/pos/det/Det'
import N                  from '../src/pos/n/N'
import Pre                from '../src/pos/pre/Pre'
import Pro                from '../src/pos/pro/Pro'
import V                  from '../src/pos/v/V'

test(t => {
	t.is(new Pro({type:ProType.Subject, plurality:Plurality.Plural, person:Person.First}).analyse().t,'we')

	t.is(NPGenerateText(new NPOb({
		head:new N({base:'person', plurality:Plurality.Plural}),
		det:new Det({base:'the'})
	})),'the people')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new Pre({base:'of'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'state', plurality:Plurality.Plural}), modifier:new Adj({base:'united'})}),
				det:new Det({base:'the'})}
			)
		})
	),'of the united states')

	// in Order to
	t.is(new V({base:'form'}).analyse().t,'form')
	t.is(new Det({base:'a'}).analyse().t,'a')

	// more
	t.is(NomGenerateText(new NomOb({head:new N({base:'union'}), modifier:new Adj({base:'perfect'})})),'perfect union')

	t.is(new V({base:'establish'}).analyse().t,'establish')
	t.is(new N({base:'justice'}).analyse().t,'justice')
	t.is(new V({base:'insure'}).analyse().t,'insure')
	t.is(NomGenerateText(new NomOb({head:new N({base:'tranquility'}), modifier:new Adj({base:'domestic'})})),'domestic tranquility')
	t.is(new V({base:'provide'}).analyse().t,'provide')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new Pre({base:'for'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'defense'}), modifier:new Adj({base:'common'})}),
				det:new Det({base:'the'})}
			)
		})
	),'for the common defense')

	t.is(new V({base:'promote'}).analyse().t,'promote')

	t.is(NPGenerateText(new NPOb({
		head:new NomOb({head:new N({base:'welfare'}), modifier:new Adj({base:'general'})}),
		det:new Det({base:'the'})
	})),'the general welfare')

	// and
	t.is(new V({base:'secure'}).analyse().t,'secure')

	t.is(NPGenerateText(new NPOb({
		head:new N({base:'blessing', plurality:Plurality.Plural}),
		det:new Det({base:'the'})
	})),'the blessings')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new Pre({base:'of'}),
			np:new NPOb({
				head:new N({base:'liberty'})
			})
		})
	),'of liberty')

	// to ourselves and our
	t.is(new N({base:'posterity'}).analyse().t,'posterity')

	// do
	t.is(new V({base:'ordain'}).analyse().t,'ordain')
	// and
	t.is(new V({base:'establish'}).analyse().t,'establish')

	t.is(NPGenerateText(new NPOb({
		head:new N({base:'constitution'}),
		det:new Det({base:'this'})
	})),'this constitution')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new Pre({base:'for'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'state', plurality:Plurality.Plural}), modifier:new Adj({base:'united'})}),
				det:new Det({base:'the'})}
			)
		})
	),'for the united states')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new Pre({base:'of'}),
			np:new NPOb({
				head:new N({base:'america'})
			})
		})
	),'of America')
})
