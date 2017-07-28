import test from 'ava'

import NDict from './NDict'

test(t => {
	t.true(Object.keys(NDict).length > 0)
})
