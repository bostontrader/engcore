import test from 'ava'

import VDictOb from './VDictionary'

test(t => {
	t.true(Object.keys(VDictOb).length > 0)
})
