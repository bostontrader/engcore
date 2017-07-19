import test from 'ava'

import AdjDictOb         from './AdjDictionary'
import {AdjErrors}       from './Adj'
import {AdjGenerateText} from './Adj'
import {AdjOb}           from './Adj'

test(t => {
	t.deepEqual(AdjGenerateText({}),{e:AdjErrors.ADJECTIVE_BASE_UNDEFINED})
	t.is(AdjGenerateText(AdjDictOb.big),'big')
})
