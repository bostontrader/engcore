import test from 'ava'

import {AdvErrors} from './Adv'
import Adv         from './Adv'

test(t => {
	t.deepEqual(new Adv().analyse(),{t:undefined, e:[AdvErrors.MISSING_BASE]})
	t.deepEqual(new Adv({}).analyse(),{t:undefined, e:[AdvErrors.MISSING_BASE]})
	t.deepEqual(new Adv('the').analyse(),{t:'the', e:[]})
	t.deepEqual(new Adv({base:'the'}).analyse(),{t:'the', e:[]})
})
