import {NounOb} from './Noun'

/*
The plural form of most nouns can be made by changing the ending according to some rules.
But some nouns have an irregular form.  If so, store the irregular form in the 'plural' key.

The plural form of some nouns is the same as the base.  For example, fish, deer, and sheep.
If so, treat these nouns as with irregular plural.
 */

// The dictionary should be immutable
const NDictOb = {
    arctic:   new NounOb({base:'arctic', proper:true}),
    bakery:   new NounOb({base:'bakery'}),
    ball:     new NounOb({base:'ball'}),
    bathroom: new NounOb({base:'bathroom'}),
    bump:     new NounOb({base:'bump'}),
    car:      new NounOb({base:'car'}),
    cat:      new NounOb({base:'cat'}),
    coach:    new NounOb({base:'coach'}),
    day:      new NounOb({base:'day'}),
    doctor:   new NounOb({base:'doctor'}),
    dog:      new NounOb({base:'dog'}),
    forest:   new NounOb({base:'forest'}),
    hat:      new NounOb({base:'hat'}),
    house:    new NounOb({base:'house'}),
    job:      new NounOb({base:'job'}),
    man:      new NounOb({base:'man'}),
    mat:      new NounOb({base:'mat'}),
    minute:   new NounOb({base:'minute'}),
    sun:      new NounOb({base:'sun'}),
    thief:    new NounOb({base:'thief'}),
}

export {NDictOb}
