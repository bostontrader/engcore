import test from 'ava'

import {DetOb}            from './Det'
import {NOb}              from './N'
import {NomOb}            from './Nom'
import {NPOb}             from './NP'
import {PreOb}            from './Pre'
import {PrePErrors}       from './PreP'
import {PrePGenerateText} from './PreP'
import {PrePOb}           from './PreP'

test(t => {
	t.deepEqual(PrePGenerateText({}),{e:PrePErrors.NO_PRE})
	t.deepEqual(PrePGenerateText({head:new PreOb({base:'in'})}),{e:PrePErrors.NO_NP})

	t.is(PrePGenerateText(
		new PrePOb({
			head:new PreOb({base:'in'}),
			np:new NPOb({
				head:new NomOb({head:new NOb({base:'hat'})}),
				det:new DetOb({base:'the'})}
			)
		})
	),'in the hat')

})
