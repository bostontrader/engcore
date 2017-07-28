import test from 'ava'

import Gender            from './Gender'
import Person            from './Person'
import {ProErrors}       from './Pro'
import {ProGenerateText} from './Pro'
import {ProOb}           from './Pro'
import {ProType}         from './Pro'
import Plurality         from './pos/Plurality'

test(t => {

	t.deepEqual(ProGenerateText(new ProOb({})),{e:ProErrors.BAD_PRONOUN_TYPE})
	t.deepEqual(ProGenerateText(new ProOb({type:ProType.Subject})),{e:ProErrors.BAD_PERSON})
	t.deepEqual(ProGenerateText(new ProOb({type:ProType.Subject, person:Person.First})),{e:ProErrors.BAD_PLURALITY})

	t.is(ProGenerateText(new ProOb({type:ProType.Subject, person:Person.First, plurality:Plurality.Singular})),'I')
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, person:Person.Second, plurality:Plurality.Singular})),'you')
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, person:Person.Third, plurality:Plurality.Singular, gender:Gender.Male})),'he')
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'she')
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'it')

	t.is(ProGenerateText(new ProOb({type:ProType.Subject, plurality:Plurality.Plural, person:Person.First})),'we')
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.is(ProGenerateText(new ProOb({type:ProType.Subject, plurality:Plurality.Plural, person:Person.Third})),'they')

	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Singular, person:Person.First})),'me')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Singular, person:Person.Second})),'you')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'him')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'her')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'it')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Plural, person:Person.First})),'us')

	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Plural, person:Person.Third})),'them')

	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.First})),'mine')
	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.Second})),'yours')
	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'his')
	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'hers')
	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Plural, person:Person.First})),'ours')
	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Plural, person:Person.Second})),'yours')
	t.is(ProGenerateText(new ProOb({type:ProType.Possessive, plurality:Plurality.Plural, person:Person.Third})),'theirs')

	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Plural, person:Person.First})),'us')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.is(ProGenerateText(new ProOb({type:ProType.Object, plurality:Plurality.Plural, person:Person.Third})),'them')

	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.First})),'myself')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Second})),'yourself')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'himself')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'herself')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'itself')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.First})),'ourselves')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Second})),'yourselves')
	t.is(ProGenerateText(new ProOb({type:ProType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Third})),'themselves')
})
