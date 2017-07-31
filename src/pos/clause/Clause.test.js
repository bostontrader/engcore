import test from 'ava'

import Clause         from './Clause'
import {ClauseErrors} from './Clause'
import N              from '../n/N'
import NP             from '../np/NP'
import V              from '../v/V'

test(t => {

	t.deepEqual(new Clause().analyse(),{t:undefined, e:[ClauseErrors.MISSING_HEAD]})
	t.deepEqual(new Clause({}).analyse(),{t:undefined, e:[ClauseErrors.MISSING_HEAD]})
	t.deepEqual(new Clause({head:new V('run')}).analyse(),{t:undefined, e:[ClauseErrors.MISSING_NP]})
	t.deepEqual(new Clause({head:new V('run'), np:new NP({head:new N('cat')})}).analyse(),{t:'cat run', e:[]})
	//t.deepEqual(new NP({head:new N('cat'),det:new Det({base:'the'})}).analyse(),{t:'the cat', e:[]})

	//t.deepEqual(ClauseGenerateText({}),{e:ClauseErrors.NO_NP})
	//t.deepEqual(ClauseGenerateText({np:{}}),{e:ClauseErrors.NO_VP})

	//const n1 = new NPOb({head:NDict.sun, plurality:Plurality.Singular})
	//const n2 = new VPOb({verb:VDictOb.shine, prepend:new UnkOb({base:'did not'})})
	//const n3 = new Clause({np:n1, vp:n2})

	//t.is(ClauseGenerateText(n3),'the sun did not shine')
})
