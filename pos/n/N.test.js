import test from 'ava'

import N         from './N'
import {NErrors} from './N'

import Plurality from '../Plurality'

test(t => {
	t.deepEqual(new N().analyse(),{t:undefined, e:[NErrors.MISSING_BASE]})
	t.deepEqual(new N({}).analyse(),{t:undefined, e:[NErrors.MISSING_BASE]})
	t.deepEqual(new N('cat').analyse(),{t:'cat', e:[]})
	t.deepEqual(new N({base:'cat'}).analyse(),{t:'cat', e:[]})
	t.deepEqual(new N({base:'rugrat'}).analyse(),{t:undefined, e:[NErrors.REQUESTED_INFLECTION_UNDEFINED]})

	t.deepEqual(new N({base:'child', plurality:Plurality.Plural}).analyse(),{t:'children', e:[]})
	t.deepEqual(new N({base:'child', plurality:Plurality.Singular, genative:true}).analyse(),{t:'child\'s', e:[]})
	t.deepEqual(new N({base:'child', plurality:Plurality.Plural, genative:true}).analyse(),{t:'children\'s', e:[]})
	t.deepEqual(new N({base:'sally', inf:{s:'sally'}, proper:true}).analyse(),{t:'Sally', e:[]})
})
