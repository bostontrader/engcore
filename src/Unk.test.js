import test from 'ava'

import {UnkErrors}       from './Unk'
import {UnkGenerateText} from './Unk'
import {UnkOb}           from './Unk'

test(t => {
	t.deepEqual(UnkGenerateText({}),{e:UnkErrors.UNKNOWN_BASE_UNDEFINED})
	t.is(UnkGenerateText(new UnkOb({base:'did not'})),'did not')
})
