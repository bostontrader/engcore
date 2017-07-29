import test from 'ava'

import {PreErrors} from './Pre'
import Pre         from './Pre'

test(t => {
	t.deepEqual(new Pre().analyse(),{t:undefined, e:[PreErrors.MISSING_BASE]})
	t.deepEqual(new Pre({}).analyse(),{t:undefined, e:[PreErrors.MISSING_BASE]})
	t.deepEqual(new Pre('in').analyse(),{t:'in', e:[]})
	t.deepEqual(new Pre({base:'in'}).analyse(),{t:'in', e:[]})
})
