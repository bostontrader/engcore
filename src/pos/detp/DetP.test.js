import test from 'ava'

import DetP         from './DetP'
import {DetPErrors} from './DetP'
import Det          from '../det/Det'
import N            from '../n/N'

test(t => {
	t.deepEqual(new DetP().analyse(),{t:undefined, e:[DetPErrors.MISSING_HEAD]})
	t.deepEqual(new DetP({}).analyse(),{t:undefined, e:[DetPErrors.MISSING_HEAD]})
	t.deepEqual(new DetP({head:new N('cat')}).analyse(),{t:'cat',e:[]})
	t.deepEqual(new DetP({head:new N('cat'),det:new Det({base:'the'})}).analyse(),{t:'the cat',e:[]})
})
