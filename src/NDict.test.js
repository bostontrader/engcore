import test from 'ava'

import NDictOb from './NDict'

test(t => {
	t.true(Object.keys(NDictOb).length > 0)
})
