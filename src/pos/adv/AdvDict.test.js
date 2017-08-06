import test from 'ava'

import AdvDict from './AdvDict'

test(t => {
	t.true(Object.keys(AdvDict).length > 0)
})
