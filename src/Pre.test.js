import test from 'ava'

import NDictOb         from './NDictionary'
import {NErrors}       from './Noun'
import {NGenerateText} from './Noun'
import {NounOb}        from './Noun'

test(t => {
	t.deepEqual(NGenerateText({}),{e:NErrors.NOUN_BASE_UNDEFINED})
	t.is(NGenerateText(NDictOb.cat),'cat')
	t.is(NGenerateText(new NounOb({base:'sally', proper:true})),'Sally')

})
