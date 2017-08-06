import test from 'ava'

import AdjP         from './AdjP'
import {AdjPErrors} from './AdjP'
import Adj          from '../adj/Adj'
import Adv          from '../adv/Adv'

test(t => {
	t.deepEqual(new AdjP().analyse(),{t:undefined, e:[AdjPErrors.MISSING_HEAD]})
	t.deepEqual(new AdjP({}).analyse(),{t:undefined, e:[AdjPErrors.MISSING_HEAD]})
	t.deepEqual(new AdjP({head:new Adj('perfect')}).analyse(),{t:'perfect',e:[]})
	t.deepEqual(new AdjP({head:new Adj('perfect'),modifier:new Adv({base:'more'})}).analyse(),{t:'more perfect',e:[]})
})
