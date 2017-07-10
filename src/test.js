import test from 'tape'

import {AdjGenerateText}  from './Adjective'
import {AdjDictOb}        from './AdjDictionary'
import Gender             from './Gender'
import {NDictOb}          from './NDictionary'
import {NGenerateText}    from './Noun'
import {Plurality}        from './Noun'
import {NPGenerateText}   from './NP'
import {NPOb}             from './NP'
import Person             from './Person'
import {PreDictOb}        from './PreDictionary'
import {PrePGenerateText} from './PreP'
import {PrePOb}           from './PreP'
import {ProGenerateText}  from './Pronoun'
import {PronounType}      from './Pronoun'
import {ProOb}            from './Pronoun'
import {VDictOb}          from './VDictionary'
import {Tense}            from './Verb'
import {VGenerateText}    from './Verb'
import {VPGenerateText}   from './VP'
import {VPOb}             from './VP'

test('everything', function (t) {

	t.equal(AdjGenerateText(AdjDictOb.big),'big')
	t.equal(NGenerateText(NDictOb.cat),'cat')
	t.equal(NPGenerateText(new NPOb({noun:NDictOb.cat})),'cat')

	t.equal(ProGenerateText(new ProOb({})),null)
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.NoneSelected, plurality:Plurality.NoneSelected, gender:Gender.Male})),null)

	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.First, plurality:Plurality.Singular})),'I')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.Second, plurality:Plurality.Singular})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, person:Person.Third, plurality:Plurality.Singular, gender:Gender.Male})),'he')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'she')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'it')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:Person.First})),'we')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:Person.Third})),'they')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.First})),'me')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'him')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'her')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'it')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.First})),'us')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Third})),'them')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.First})),'mine')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.Second})),'yours')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'his')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'hers')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:Person.First})),'ours')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:Person.Second})),'yours')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:Person.Third})),'theirs')

	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.First})),'us')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Second})),'you')
	t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:Person.Third})),'them')

	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.First})),'myself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Second})),'yourself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Male})),'himself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.Female})),'herself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:Person.Third, gender:Gender.NoneSelected})),'itself')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.First})),'ourselves')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Second})),'yourselves')
	t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:Person.Third})),'themselves')


	t.equal(PrePGenerateText(new PrePOb({pre:PreDictOb.in, np:new NPOb({noun:NDictOb.hat, plurality:Plurality.Singular})})),'in the hat')

	//t.equal(VGenerateText(VDictOb.play),'play')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.play, infinitive:true})),'to play')
	//t.equal(VPGenerateText(new VPOb({verb:VDictOb.look, person:Person.Third, tense:Tense.Present, plurality:Plurality.Singular})),'looks')
	//const n = new VPOb({verb:VDictOb.look})





	t.end()

})
