import test from 'ava'

import PreDictOb from './PreDictionary'

test(t => {
	t.true(Object.keys(PreDictOb).length > 0)
})
