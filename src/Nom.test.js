import test from 'ava'

import NDict           from '../pos/n/NDict'
import {NomErrors}       from './Nom'
import {NomGenerateText} from './Nom'
import {NomOb}           from './Nom'

test(t => {
	t.deepEqual(NomGenerateText(new NomOb({})),{e:NomErrors.MISSING_HEAD})
	//t.is(NomGenerateText(new NomOb({head:NDict.cat})),'cat')
})
