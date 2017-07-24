import test from 'ava'

import DetDictOb from './DetDict'

test(t => {
	t.true(Object.keys(DetDictOb).length > 0)
})
