import test from 'tape'

import {AdjGenerateText} from './Adjective'
import {AdjDictOb}       from './AdjDictionary'
import Gender            from './Gender'
import {NDictOb}         from './NDictionary'
import {NGenerateText}   from './Noun'
import {Plurality}       from './Noun'
import {NPGenerateText}  from './NP'
import {NPOb}            from './NP'
import {ProGenerateText} from './Pronoun'
import {ProOb}           from './Pronoun'
import {VDictOb}         from './VDictionary'
import {VGenerateText}   from './Verb'
import {VPGenerateText}  from './VP'
import {VPOb}            from './VP'

test('everything', function (t) {

    t.equal(AdjGenerateText(AdjDictOb.big),'big')
    t.equal(NGenerateText(NDictOb.cat),'cat')
    t.equal(NPGenerateText(new NPOb({noun:NDictOb.cat})),'cat')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Singular, person:1})),'I')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Singular, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Singular, person:3, gender:Gender.Male})),'he')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Singular, person:3, gender:Gender.Female})),'she')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Singular, person:3, gender:Gender.NoneSelected})),'it')

    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Plural, person:1})),'we')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Plural, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({subject:true, plurality:Plurality.Plural, person:3})),'they')

    t.equal(ProGenerateText(new ProOb({subject:false, plurality:Plurality.Singular, person:1})),'me')
    t.equal(ProGenerateText(new ProOb({subject:false, plurality:Plurality.Singular, person:2})),'you')
    t.equal(ProGenerateText(new ProOb({subject:false, plurality:Plurality.Singular, person:3, gender:Gender.Male})),'him')
    t.equal(ProGenerateText(new ProOb({subject:false, plurality:Plurality.Singular, person:3, gender:Gender.Female})),'her')
    t.equal(ProGenerateText(new ProOb({subject:false, plurality:Plurality.Singular, person:3, gender:Gender.NoneSelected})),'it')


    t.equal(ProGenerateText(new ProOb({subject:false, plurality:Plurality.Plural, person:1})),'us')
    t.equal(VGenerateText(VDictOb.play),'play')
    t.equal(VPGenerateText(new VPOb({verb:VDictOb.play, infinitive:true})),'to play')
    t.end()

})
