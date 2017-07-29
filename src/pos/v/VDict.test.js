import test from 'ava'

import VDict from './VDict'

test(t => {
	t.true(Object.keys(VDict).length > 0)
})
