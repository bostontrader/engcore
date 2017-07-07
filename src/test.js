import test from 'tape'

import {AdjGenerateText}  from './Adjective'
import {AdjDictOb}        from './AdjDictionary'
import Gender             from './Gender'
import {NDictOb}          from './NDictionary'
import {NGenerateText}    from './Noun'
import {Plurality}        from './Noun'
import {NPGenerateText}   from './NP'
import {NPOb}             from './NP'
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

    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:1})),'I')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:3, gender:Gender.Male})),'he')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:3, gender:Gender.Female})),'she')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Singular, person:3, gender:Gender.NoneSelected})),'it')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:1})),'we')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Subject, plurality:Plurality.Plural, person:3})),'they')

    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:1})),'me')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:3, gender:Gender.Male})),'him')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:3, gender:Gender.Female})),'her')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Singular, person:3, gender:Gender.NoneSelected})),'it')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:1})),'us')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:3})),'them')

    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:1})),'mine')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:2})),'yours')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:3, gender:Gender.Male})),'his')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Singular, person:3, gender:Gender.Female})),'hers')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:1})),'ours')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:2})),'yours')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Possessive, plurality:Plurality.Plural, person:3})),'theirs')

    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:1})),'us')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({type:PronounType.Object, plurality:Plurality.Plural, person:3})),'them')

    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:1})),'myself')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:2})),'yourself')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:3, gender:Gender.Male})),'himself')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:3, gender:Gender.Female})),'herself')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Singular, person:3, gender:Gender.NoneSelected})),'itself')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:1})),'ourselves')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:2})),'yourselves')
    t.equal(ProGenerateText(new ProOb({type:PronounType.ReflexiveIntensive, plurality:Plurality.Plural, person:3})),'themselves')


    t.equal(PrePGenerateText(new PrePOb({pre:PreDictOb.in, np:new NPOb({noun:NDictOb.hat, plurality:Plurality.Singular})})),'in the hat')

    //t.equal(VGenerateText(VDictOb.play),'play')
    //t.equal(VPGenerateText(new VPOb({verb:VDictOb.play, infinitive:true})),'to play')
    //t.equal(VPGenerateText(new VPOb({verb:VDictOb.look, person:3, tense:Tense.Present, plurality:Plurality.Singular})),'looks')
    //const n = new VPOb({verb:VDictOb.look})





    t.end()

})
