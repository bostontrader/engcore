import test from 'ava'

import DetDict from './DetDict'

test(t => {
	t.true(Object.keys(DetDict).length > 0)
})
