import test from 'ava'

import {NPErrors}       from './NP'
import {NPGenerateText} from './NP'
import {NPOb}           from './NP'
import N                from '../pos/n/N'

test(t => {
	t.deepEqual(NPGenerateText({}),{e:NPErrors.NO_HEAD})
	t.is(NPGenerateText(new NPOb({head:new N({base:'cat'})})),'cat')
})
