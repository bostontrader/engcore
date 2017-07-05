import {NounOb} from './Noun'

/*
The plural form of most nouns can be made by changing the ending according to some rules.
But some nouns have an irregular form.  If so, store the irregular form in the 'plural' key.

The plural form of some nouns is the same as the base.  For example, fish, deer, and sheep.
If so, treat these nouns as with irregular plural.
 */

const NDictOb = {
    arctic:   new NounOb({base:'arctic', proper:true}),
    bakery:   new NounOb({base:'bakery'}),
    ball:     new NounOb({base:'ball'}),
    bathroom: new NounOb({base:'bathroom'}),
    bed:      new NounOb({base:'bed'}),
    box:      new NounOb({base:'box'}),
    bow:      new NounOb({base:'bow'}),
    bump:     new NounOb({base:'bump'}),
    book:     new NounOb({base:'book'}),
    car:      new NounOb({base:'car'}),
    cat:      new NounOb({base:'cat'}),
    cake:     new NounOb({base:'cake'}),
    coach:    new NounOb({base:'coach'}),
    cup:      new NounOb({base:'cup'}),
    day:      new NounOb({base:'day'}),
    dish:     new NounOb({base:'dish'}),
    doctor:   new NounOb({base:'doctor'}),
    dog:      new NounOb({base:'dog'}),
    fan:      new NounOb({base:'fan'}),
    fear:     new NounOb({base:'fear'}),
    forest:   new NounOb({base:'forest'}),
    fox:      new NounOb({base:'fox'}),
    fish:     new NounOb({base:'fish'}),
    fun:      new NounOb({base:'fun'}),
    game:     new NounOb({base:'game'}),
    gown:     new NounOb({base:'gown'}),
    hall:     new NounOb({base:'hall'}),
    hat:      new NounOb({base:'hat'}),
    hand:     new NounOb({base:'hand'}),
    head:     new NounOb({base:'head'}),
    house:    new NounOb({base:'house'}),
    hook:     new NounOb({base:'hook'}),
    job:      new NounOb({base:'job'}),
    kite:     new NounOb({base:'kite'}),
    look:     new NounOb({base:'look'}),
    man:      new NounOb({base:'man'}),
    mat:      new NounOb({base:'mat'}),
    mess:     new NounOb({base:'mess'}),
    mother:   new NounOb({base:'mother'}),
    minute:   new NounOb({base:'minute'}),
    milk:     new NounOb({base:'milk'}),
    net:      new NounOb({base:'net'}),
    pat:      new NounOb({base:'pat'}),
    pot:      new NounOb({base:'pot'}),
    rake:     new NounOb({base:'rake'}),
    sun:      new NounOb({base:'sun'}),
    ship:     new NounOb({base:'ship'}),
    string:   new NounOb({base:'string'}),
    tail:     new NounOb({base:'tail'}),
    tip:      new NounOb({base:'tip'}),
    thief:    new NounOb({base:'thief'}),
    thing:    new NounOb({base:'thing'}),
    trick:    new NounOb({base:'trick'}),
    top:      new NounOb({base:'top'}),
    wall:     new NounOb({base:'wall'}),
    way:      new NounOb({base:'way'}),
}

export {NDictOb}
