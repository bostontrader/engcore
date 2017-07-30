import test from 'ava'

import NP         from './NP'
import {NPErrors} from './NP'
import Det        from '../det/Det'
import N          from '../n/N'

test(t => {
	t.deepEqual(new NP().analyse(),{t:undefined, e:[NPErrors.MISSING_HEAD]})
	t.deepEqual(new NP({}).analyse(),{t:undefined, e:[NPErrors.MISSING_HEAD]})
	t.deepEqual(new NP({head:new N('cat')}).analyse(),{t:'cat', e:[]})
	t.deepEqual(new NP({head:new N('cat'),det:new Det({base:'the'})}).analyse(),{t:'the cat', e:[]})
})
