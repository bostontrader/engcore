import test from 'ava'

import {PreErrors}       from './Pre'
import {PreGenerateText} from './Pre'
import PreDictOb         from './PreDictionary'

test(t => {
	t.deepEqual(PreGenerateText({}),{e:PreErrors.PRE_BASE_UNDEFINED})
	t.is(PreGenerateText(PreDictOb.in),'in')
})
