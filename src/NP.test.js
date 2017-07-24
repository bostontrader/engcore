import test from 'ava'

import {NOb}            from './N'
import {NPErrors}       from './NP'
import {NPGenerateText} from './NP'
import {NPOb}           from './NP'

test(t => {
	t.deepEqual(NPGenerateText({}),{e:NPErrors.NO_HEAD})
	t.is(NPGenerateText(new NPOb({head:new NOb({base:'cat'})})),'cat')
})
