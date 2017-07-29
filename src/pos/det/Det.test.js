import test from 'ava'

import {DetErrors} from './Det'
import Det         from './Det'

test(t => {
	t.deepEqual(new Det().analyse(),{t:undefined, e:[DetErrors.MISSING_BASE]})
	t.deepEqual(new Det({}).analyse(),{t:undefined, e:[DetErrors.MISSING_BASE]})
	t.deepEqual(new Det('the').analyse(),{t:'the', e:[]})
	t.deepEqual(new Det({base:'the'}).analyse(),{t:'the', e:[]})
})
