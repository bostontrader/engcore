import test from 'ava'

import NDictOb          from './NDictionary'
import {NPErrors}       from './NP'
import {NPGenerateText} from './NP'
import {NPOb}           from './NP'

test(t => {
	t.deepEqual(NPGenerateText({}),{e:NPErrors.NO_NOUN})
	t.is(NPGenerateText(new NPOb({noun:NDictOb.cat})),'cat')
})
