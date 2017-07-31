import test from 'ava'

import Clause         from './Clause'
import {ClauseErrors} from './Clause'
import N              from '../n/N'
import NP             from '../np/NP'
import V              from '../v/V'

test(t => {
	t.deepEqual(new Clause().analyse(),{t:undefined, e:[ClauseErrors.MISSING_HEAD]})
	t.deepEqual(new Clause({}).analyse(),{t:undefined, e:[ClauseErrors.MISSING_HEAD]})
	t.deepEqual(new Clause({head:new V('run')}).analyse(),{t:undefined, e:[ClauseErrors.MISSING_SUBJECT]})
	t.deepEqual(new Clause({head:new V('run'), subject:new NP({head:new N('cat')})}).analyse(),{t:'cat run', e:[]})
})
