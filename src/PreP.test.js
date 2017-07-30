import test from 'ava'

import {PrePErrors}       from './PreP'
import {PrePGenerateText} from './PreP'
import {PrePOb}           from './PreP'
import Det                from './pos/det/Det'
import N                  from './pos/n/N'
import Nom                from './pos/nom/Nom'
import NP                 from './pos/np/NP'
import Pre                from './pos/pre/Pre'

test(t => {
	t.deepEqual(PrePGenerateText({}),{e:PrePErrors.NO_PRE})
	t.deepEqual(PrePGenerateText({head:new Pre({base:'in'})}),{e:PrePErrors.NO_NP})

	t.is(PrePGenerateText(
		new PrePOb({
			head:new Pre({base:'in'}),
			np:new NP({
				head:new Nom({head:new N({base:'hat'})}),
				det:new Det({base:'the'})}
			)
		})
	),'in the hat')

})
