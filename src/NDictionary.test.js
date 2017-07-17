import test from 'ava'

import NDictOb from './NDictionary'

test(t => {
	t.true(Object.keys(NDictOb).length > 0)
})
