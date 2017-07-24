import test from 'ava'

import {VErrors}       from './V'
import {VGenerateText} from './V'
import {VOb}           from './V'

	test(t => {
		//t.deepEqual(VGenerateText({}),{e:VErrors.VERB_BASE_UNDEFINED})
		t.deepEqual(VGenerateText(new VOb({base:'rugrat'})),{e:VErrors.REQUESTED_INFLECTION_UNDEFINED})

		t.is(VGenerateText(new VOb({base:'play'})),'play')
	})
