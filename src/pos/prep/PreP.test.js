import test from 'ava'

import PreP         from './PreP'
import {PrePErrors} from './PreP'
import Det          from '../det/Det'
import N            from '../n/N'
import Nom          from '../nom/Nom'
import NP           from '../np/NP'
import Pre          from '../pre/Pre'

test(t => {
	t.deepEqual(new PreP().analyse(),{t:undefined, e:[PrePErrors.MISSING_HEAD]})
	t.deepEqual(new PreP({}).analyse(),{t:undefined, e:[PrePErrors.MISSING_HEAD]})
	t.deepEqual(new PreP({head:new Pre('in')}).analyse(),{t:undefined, e:[PrePErrors.MISSING_NP]})

	t.deepEqual(
	 new PreP({
		head: new Pre({base: 'in'}),
		np: new NP({
			head: new Nom({head: new N({base: 'hat'})}),
			det: new Det({base: 'the'})
		})
	 }).analyse(),{t:'in the hat',e:[]})
})