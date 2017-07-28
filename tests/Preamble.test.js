import test from 'ava'

import Plurality          from '../src/pos/Plurality'
import N                  from '../src/pos/n/N'
import {AdjOb}            from '../src/Adj'
import {DetGenerateText}  from '../src/Det'
import {DetOb}            from '../src/Det'
import {NomGenerateText}  from '../src/Nom'
import {NomOb}            from '../src/Nom'
import {NPGenerateText}   from '../src/NP'
import {NPOb}             from '../src/NP'
import Person             from '../src/Person'
import {PreOb}            from '../src/Pre'
import {PrePGenerateText} from '../src/PreP'
import {PrePOb}           from '../src/PreP'
import {ProGenerateText}  from '../src/Pro'
import {ProOb}            from '../src/Pro'
import {ProType}          from '../src/Pro'
import {VGenerateText}    from '../src/V'
import {VOb}              from '../src/V'

test(t => {
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, plurality:Plurality.Plural, person:Person.First})),'we')

	t.is(NPGenerateText(new NPOb({
		head:new N({base:'person', plurality:Plurality.Plural}),
		det:new DetOb({base:'the'})
	})),'the people')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'of'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'state', plurality:Plurality.Plural}), modifier:new AdjOb({base:'united'})}),
				det:new DetOb({base:'the'})}
			)
		})
	),'of the united states')

	// in Order to
	t.is(VGenerateText(new VOb({base:'form'})),'form')
	t.is(DetGenerateText(new DetOb({base:'a'})),'a')

	// more
	t.is(NomGenerateText(new NomOb({head:new N({base:'union'}), modifier:new AdjOb({base:'perfect'})})),'perfect union')

	t.is(VGenerateText(new VOb({base:'establish'})),'establish')
	t.is(new N({base:'justice'}).analyse().t,'justice')
	t.is(VGenerateText(new VOb({base:'insure'})),'insure')
	t.is(NomGenerateText(new NomOb({head:new N({base:'tranquility'}), modifier:new AdjOb({base:'domestic'})})),'domestic tranquility')
	t.is(VGenerateText(new VOb({base:'provide'})),'provide')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'for'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'defense'}), modifier:new AdjOb({base:'common'})}),
				det:new DetOb({base:'the'})}
			)
		})
	),'for the common defense')

	t.is(VGenerateText(new VOb({base:'promote'})),'promote')

	t.is(NPGenerateText(new NPOb({
		head:new NomOb({head:new N({base:'welfare'}), modifier:new AdjOb({base:'general'})}),
		det:new DetOb({base:'the'})
	})),'the general welfare')

	// and
	t.is(VGenerateText(new VOb({base:'secure'})),'secure')

	t.is(NPGenerateText(new NPOb({
		head:new N({base:'blessing', plurality:Plurality.Plural}),
		det:new DetOb({base:'the'})
	})),'the blessings')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'of'}),
			np:new NPOb({
				head:new N({base:'liberty'})
			})
		})
	),'of liberty')

	// to ourselves and our
	t.is(new N({base:'posterity'}).analyse().t,'posterity')

	// do
	t.is(VGenerateText(new VOb({base:'ordain'})),'ordain')
	// and
	t.is(VGenerateText(new VOb({base:'establish'})),'establish')

	t.is(NPGenerateText(new NPOb({
		head:new N({base:'constitution'}),
		det:new DetOb({base:'this'})
	})),'this constitution')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'for'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'state', plurality:Plurality.Plural}), modifier:new AdjOb({base:'united'})}),
				det:new DetOb({base:'the'})}
			)
		})
	),'for the united states')

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'of'}),
			np:new NPOb({
				head:new N({base:'america'})
			})
		})
	),'of America')
})
