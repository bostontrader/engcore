import test from 'ava'

import AdjDictOb from './AdjDictionary'

test(t => {
	t.true(Object.keys(AdjDictOb).length > 0)
})
