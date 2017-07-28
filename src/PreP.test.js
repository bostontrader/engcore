import test from 'ava'

import {DetOb}            from './Det'
import {NomOb}            from './Nom'
import {NPOb}             from './NP'
import {PreOb}            from './Pre'
import {PrePErrors}       from './PreP'
import {PrePGenerateText} from './PreP'
import {PrePOb}           from './PreP'
import N                  from '../pos/n/N'

test(t => {
	t.deepEqual(PrePGenerateText({}),{e:PrePErrors.NO_PRE})
	t.deepEqual(PrePGenerateText({head:new PreOb({base:'in'})}),{e:PrePErrors.NO_NP})

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'in'}),
			np:new NPOb({
				head:new NomOb({head:new N({base:'hat'})}),
				det:new DetOb({base:'the'})}
			)
		})
	),'in the hat')

})
