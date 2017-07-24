import test from 'ava'

import {AdjOb}           from './Adj'
import {AdjErrors}       from './Adj'
import {AdjGenerateText} from './Adj'

test(t => {
	t.deepEqual(AdjGenerateText(new AdjOb({})),{e:AdjErrors.ADJECTIVE_BASE_UNDEFINED})
	t.is(AdjGenerateText(new AdjOb({base:'big'})),'big')
	t.is(AdjGenerateText(new AdjOb({base:'gnarlyfoo'})),'gnarlyfoo')
})
