import {AdjOb} from './Adjective'

// The dictionary should be immutable
const AdjDictOb = {
    big:    new AdjOb({base:'big'}),
    cold:   new AdjOb({base:'cold'}),
    good:   new AdjOb({base:'good'}),
    green:  new AdjOb({base:'green'}),
    honest: new AdjOb({base:'honest', silentH: true}),
    itchy:  new AdjOb({base:'itchy'}),
    long:   new AdjOb({base:'long'}),
    lonely: new AdjOb({base:'lonely'}),
    red:    new AdjOb({base:'red'}),
    small:  new AdjOb({base:'small'}),
    tiny:   new AdjOb({base:'tiny'}),
    ugly:   new AdjOb({base:'ugly'}),
    wet:    new AdjOb({base:'wet'}),
}

export {AdjDictOb}
