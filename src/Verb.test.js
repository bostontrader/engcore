import test from 'ava'

import VDictOb         from './VDictionary'
import {VErrors}       from './Verb'
import {VGenerateText} from './Verb'

	test(t => {
		t.deepEqual(VGenerateText({}),{e:VErrors.VERB_BASE_UNDEFINED})
		t.is(VGenerateText(VDictOb.play),'play')
	})
