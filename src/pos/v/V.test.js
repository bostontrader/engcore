import test from 'ava'

import {VErrors} from './V'
import V         from './V'
import Tense from '../Tense'
import Plurality from '../Plurality'
import Person from '../../Person'

test(t => {
	t.deepEqual(new V().analyse(),{t:undefined, e:[VErrors.MISSING_BASE]})
	t.deepEqual(new V({}).analyse(),{t:undefined, e:[VErrors.MISSING_BASE]})
	t.deepEqual(new V('take').analyse(),{t:'take', e:[]})
	t.deepEqual(new V('gnarliate').analyse(),{t:undefined, e:[VErrors.REQUESTED_INFLECTION_UNDEFINED]})
	t.deepEqual(new V({base:'take'}).analyse(),{t:'take', e:[]})
	t.deepEqual(new V({base:'take', tense:Tense.Present, person:Person.First, plurality:Plurality.Singular}).analyse(),{t:'take', e:[]})
	t.deepEqual(new V({base:'take', tense:Tense.Present, person:Person.Third, plurality:Plurality.Singular}).analyse(),{t:'takes', e:[]})
	t.deepEqual(new V({base:'take', passive:true}).analyse(),{t:'taken', e:[]})
	t.deepEqual(new V({base:'gnarliate'}).analyse(),{t:undefined, e:[VErrors.REQUESTED_INFLECTION_UNDEFINED]})
	t.deepEqual(new V({base:'gnarliate', inf:{}}).analyse(),{t:undefined, e:[VErrors.REQUESTED_INFLECTION_UNDEFINED]})
})
