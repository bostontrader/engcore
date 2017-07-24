import test from 'ava'

import {PreErrors}       from './Pre'
import {PreGenerateText} from './Pre'
import {PreOb}           from './Pre'

test(t => {
	t.deepEqual(PreGenerateText({}),{e:PreErrors.PRE_BASE_UNDEFINED})
	t.is(PreGenerateText(new PreOb({base:'in'})),'in')
})
