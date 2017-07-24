import test from 'ava'

import {DetErrors}       from './Det'
import {DetGenerateText} from './Det'
import {DetOb}           from './Det'

test(t => {
	t.deepEqual(DetGenerateText(new DetOb({})),{e:DetErrors.MISSING_BASE})
	t.is(DetGenerateText(new DetOb({base:'the'})),'the')
})
