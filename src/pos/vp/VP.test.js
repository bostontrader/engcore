import test from 'ava'

import VP         from './VP'
import {VPErrors} from './VP'
import V          from '../v/V'
import N          from '../n/N'

test(t => {
	t.deepEqual(new VP().analyse(),{t:undefined, e:[VPErrors.MISSING_HEAD]})
	t.deepEqual(new VP({}).analyse(),{t:undefined, e:[VPErrors.MISSING_HEAD]})
	t.deepEqual(new VP({head:new V('run')}).analyse(),{t:undefined, e:[VPErrors.MISSING_OBJECT]})
	t.deepEqual(new VP({head:new V('run'),object:new N('cat')}).analyse(),{t:'run cat', e:[]})


	// He took the money and ran.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.take, tense:Tense.Past})),'took')
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.run, tense:Tense.Past})),'ran')

	// I visited them every day for a year.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.visit, tense:Tense.Past})),'visited')

	// I knew how to fight even as a child.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.know, tense:Tense.Past})),'knew')


	// I was born in 1980.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.be, tense:Tense.Past})),'was')

	// We turned the oven off two minutes ago.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.turn, tense:Tense.Past})),'turned')

	// She placed the letter on the table, sighed, and left the house.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.place, tense:Tense.Past})),'placed')
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.sigh, tense:Tense.Past})),'sighed')
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.leave, tense:Tense.Past})),'left')

	// Past progressive
	// At three o'clock yesterday, I was working in the garden.
	//t.is(VPGenerateText(new VPOb({verb:VDictOb.work, tense:Tense.Past, continuous:true, person:Person.First})),'was working')

})
