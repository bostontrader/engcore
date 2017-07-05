import {VerbOb} from './Verb'

// The dictionary should be immutable
const VDictOb = {
    //be:  new VerbOb({base:'be',  pastForm:'did'}),
    do:  new VerbOb({base:'do',  pastForm:'did'}),
    fall:  new VerbOb({base:'fall',  pastForm:'fell'}),
    go:  new VerbOb({base:'go',  pastForm:'went'}),
    have:  new VerbOb({base:'have',  pastForm:'had'}),
    know:  new VerbOb({base:'know',  pastForm:'knew'}),

    play:  new VerbOb({base:'play',  pastForm:'played'}),
    shake: new VerbOb({base:'shake', pastForm:'shook'}),
    shine: new VerbOb({base:'shine', pastForm:'shined'}),
    sit:   new VerbOb({base:'sit',   pastForm:'sat'}),

    say:   new VerbOb({base:'say',   pastForm:'said'}),


}

export {VDictOb}
