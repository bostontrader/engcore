import test from 'ava'

import {NErrors}       from './N'
import {NGenerateText} from './N'
import {NOb}           from './N'
import {Plurality}     from './N'

test(t => {
	t.deepEqual(NGenerateText(new NOb({})),{e:NErrors.REQUESTED_INFLECTION_UNDEFINED})
	t.deepEqual(NGenerateText(new NOb({inf:{}})),{e:NErrors.REQUESTED_INFLECTION_UNDEFINED})
	t.deepEqual(NGenerateText(new NOb({base:'rugrat'})),{e:NErrors.REQUESTED_INFLECTION_UNDEFINED})
	t.is(NGenerateText(new NOb({base:'child'})),'child')
	t.is(NGenerateText(new NOb({base:'child', plurality:Plurality.Plural})),'children')
	t.is(NGenerateText(new NOb({base:'child', plurality:Plurality.Singular, genative:true})),'child\'s')
	t.is(NGenerateText(new NOb({base:'child', plurality:Plurality.Plural, genative:true})),'children\'s')

	t.is(NGenerateText(new NOb({inf:{s:'sally'}, proper:true})),'Sally')
})
