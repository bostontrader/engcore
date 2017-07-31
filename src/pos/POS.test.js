import test from 'ava'

import POS from './POS'

test(t => {
	t.deepEqual(new POS().analyse(),{t:undefined, e:[]})
})
