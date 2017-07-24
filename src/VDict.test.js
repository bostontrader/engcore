import test from 'ava'

import VDictOb from './VDict'

test(t => {
	t.true(Object.keys(VDictOb).length > 0)
})
