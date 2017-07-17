import test from 'ava'

import VDictOb         from './VDictionary'
import {VGenerateText} from './Verb'

	test(t => {
		t.is(VGenerateText(VDictOb.play),'play')
	})
