import test from 'ava'

import {ClauseErrors}       from './Clause'
import {ClauseGenerateText} from './Clause'
import {ClauseOb}           from './Clause'
import NDictOb              from './NDict'
import {Plurality}          from './N'
import {NPOb}               from './NP'
import {UnkOb}              from './Unk'
import VDictOb              from './VDict'
import {VPOb}               from './VP'

test(t => {
	t.pass()
	//t.deepEqual(ClauseGenerateText({}),{e:ClauseErrors.NO_NP})
	//t.deepEqual(ClauseGenerateText({np:{}}),{e:ClauseErrors.NO_VP})

	//const n1 = new NPOb({head:NDictOb.sun, plurality:Plurality.Singular})
	//const n2 = new VPOb({verb:VDictOb.shine, prepend:new UnkOb({base:'did not'})})
	//const n3 = new ClauseOb({np:n1, vp:n2})

	//t.is(ClauseGenerateText(n3),'the sun did not shine')
})
