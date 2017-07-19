import test from 'ava'

import NDictOb            from './NDictionary'
import {Plurality}        from './Noun'
import {NPOb}             from './NP'
import PreDictOb          from './PreDictionary'
import {PrePErrors}       from './PreP'
import {PrePOb}           from './PreP'
import {PrePGenerateText} from './PreP'

test(t => {
	t.deepEqual(PrePGenerateText({}),{e:PrePErrors.NO_PRE})
	t.deepEqual(PrePGenerateText({pre:PreDictOb.in}),{e:PrePErrors.NO_NP})
	t.is(PrePGenerateText(new PrePOb({pre:PreDictOb.in, np:new NPOb({noun:NDictOb.hat, plurality:Plurality.Singular})})),'in the hat')
})
