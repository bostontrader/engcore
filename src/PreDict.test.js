import test from 'ava'

import PreDictOb from './PreDict'

test(t => {
	t.true(Object.keys(PreDictOb).length > 0)
})
