import test from 'ava'

import AdjDictOb from './AdjDict'

test(t => {
	t.true(Object.keys(AdjDictOb).length > 0)
})
