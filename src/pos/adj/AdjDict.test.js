import test from 'ava'

import AdjDict from './AdjDict'

test(t => {
	t.true(Object.keys(AdjDict).length > 0)
})
