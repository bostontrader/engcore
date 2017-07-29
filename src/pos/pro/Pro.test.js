import test from 'ava'

import Pro         from './Pro'
import {ProErrors} from './Pro'
import {ProType}   from './Pro'
import Gender      from '../Gender'
import Person      from '../Person'
import Plurality   from '../Plurality'

test(t => {

	t.deepEqual(new Pro({}).analyse(),{t:undefined, e:[ProErrors.BAD_PRONOUN_TYPE]})
	t.deepEqual(new Pro({type:ProType.Subject}).analyse(),{t:undefined, e:[ProErrors.BAD_PERSON]})
	t.deepEqual(new Pro({type:ProType.Subject, person:Person.First}).analyse(),{t:undefined, e:[ProErrors.BAD_PLURALITY]})

	t.deepEqual(new Pro({type:ProType.Subject, person:Person.First, plurality:Plurality.Singular}).analyse(),{t:'I', e:[]})
	t.deepEqual(new Pro({type:ProType.Subject, person:Person.Second, plurality:Plurality.Singular}).analyse(),{t:'you', e:[]})
	t.deepEqual(new Pro({type:ProType.Subject, person:Person.Third, plurality:Plurality.Singular, gender:Gender.Male}).analyse(),{t:'he', e:[]})
	t.deepEqual(new Pro({type:ProType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female}).analyse(),{t:'she', e:[]})
	t.deepEqual(new Pro({type:ProType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected}).analyse(),{t:'it', e:[]})

	t.deepEqual(new Pro({type:ProType.Subject, plurality:Plurality.Plural, person:Person.First}).analyse(),{t:'we', e:[]})
	t.deepEqual(new Pro({type:ProType.Subject, plurality:Plurality.Plural, person:Person.Second}).analyse(),{t:'you', e:[]})
	t.deepEqual(new Pro({type:ProType.Subject, plurality:Plurality.Plural, person:Person.Third}).analyse(),{t:'they', e:[]})

	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Singular, person:Person.First}).analyse(),{t:'me', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Singular, person:Person.Second}).analyse(),{t:'you', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male}).analyse(),{t:'him', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female}).analyse(),{t:'her', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected}).analyse(),{t:'it', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Plural, person:Person.First}).analyse(),{t:'us', e:[]})

	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Plural, person:Person.Second}).analyse(),{t:'you', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Plural, person:Person.Third}).analyse(),{t:'them', e:[]})

	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.First}).analyse(),{t:'mine', e:[]})
	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.Second}).analyse(),{t:'yours', e:[]})
	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male}).analyse(),{t:'his', e:[]})
	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female}).analyse(),{t:'hers', e:[]})
	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Plural, person:Person.First}).analyse(),{t:'ours', e:[]})
	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Plural, person:Person.Second}).analyse(),{t:'yours', e:[]})
	t.deepEqual(new Pro({type:ProType.Possessive, plurality:Plurality.Plural, person:Person.Third}).analyse(),{t:'theirs', e:[]})

	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Plural, person:Person.First}).analyse(),{t:'us', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Plural, person:Person.Second}).analyse(),{t:'you', e:[]})
	t.deepEqual(new Pro({type:ProType.Object, plurality:Plurality.Plural, person:Person.Third}).analyse(),{t:'them', e:[]})

	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.First}).analyse(),{t:'myself', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Second}).analyse(),{t:'yourself', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male}).analyse(),{t:'himself', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female}).analyse(),{t:'herself', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected}).analyse(),{t:'itself', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.First}).analyse(),{t:'ourselves', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Second}).analyse(),{t:'yourselves', e:[]})
	t.deepEqual(new Pro({type:ProType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Third}).analyse(),{t:'themselves', e:[]})
})
