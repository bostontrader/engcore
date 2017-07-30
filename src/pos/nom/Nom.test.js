import test from 'ava'

import Nom         from './Nom'
import {NomErrors} from './Nom'
import Adj         from '../adj/Adj'
import N           from '../n/N'

test(t => {
	t.deepEqual(new Nom().analyse(),{t:undefined, e:[NomErrors.MISSING_HEAD]})
	t.deepEqual(new Nom({}).analyse(),{t:undefined, e:[NomErrors.MISSING_HEAD]})
	t.deepEqual(new Nom({head:new N('cat')}).analyse(),{t:'cat', e:[]})
	t.deepEqual(new Nom({head:new N('cat'),modifier:new Adj('perfect')}).analyse(),{t:'perfect cat', e:[]})
})
