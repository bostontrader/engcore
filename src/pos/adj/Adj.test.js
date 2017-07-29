import test from 'ava'

import {AdjErrors} from './Adj'
import Adj         from './Adj'

test(t => {
	t.deepEqual(new Adj().analyse(),{t:undefined, e:[AdjErrors.MISSING_BASE]})
	t.deepEqual(new Adj({}).analyse(),{t:undefined, e:[AdjErrors.MISSING_BASE]})
	t.deepEqual(new Adj('the').analyse(),{t:'the', e:[]})
	t.deepEqual(new Adj({base:'the'}).analyse(),{t:'the', e:[]})
})
