import test from 'ava'

import NDictOb           from './NDict'
import {NomErrors}       from './Nom'
import {NomGenerateText} from './Nom'
import {NomOb}           from './Nom'

test(t => {
	t.deepEqual(NomGenerateText(new NomOb({})),{e:NomErrors.MISSING_HEAD})
	//t.is(NomGenerateText(new NomOb({head:NDictOb.cat})),'cat')
})
