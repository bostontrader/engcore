import test from 'ava'

import PreDict from './PreDict'

test(t => {
	t.true(Object.keys(PreDict).length > 0)
})
