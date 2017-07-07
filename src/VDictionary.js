import {VerbOb} from './Verb'

const VDictOb = {
    arrive: new VerbOb({base:'arrive', pastForm:'arrived'}),
    //be:  new VerbOb({base:'be',  pastForm:'did'}),
    do:     new VerbOb({base:'do',     pastForm:'did'}),
    fall:   new VerbOb({base:'fall',   pastForm:'fell'}),
    find:   new VerbOb({base:'find',   pastForm:'found'}),
    fly:    new VerbOb({base:'fly',    pastForm:'flew'}),
    go:     new VerbOb({base:'go',     pastForm:'went'}),
    have:   new VerbOb({base:'have',   pastForm:'had'}),
    inform: new VerbOb({base:'inform', pastForm:'informed'}),
    know:   new VerbOb({base:'know',   pastForm:'knew'}),
    leave:  new VerbOb({base:'leave',  pastForm:'left'}),
    play:   new VerbOb({base:'play',   pastForm:'played'}),
    say:    new VerbOb({base:'say',    pastForm:'said'}),
    shake:  new VerbOb({base:'shake',  pastForm:'shook'}),
    shine:  new VerbOb({base:'shine',  pastForm:'shined'}),
    show:   new VerbOb({base:'show',   pastForm:'showed'}),
    sit:    new VerbOb({base:'sit',    pastForm:'sat'}),
    steal:  new VerbOb({base:'steal',  pastForm:'stole'}),
    stop:   new VerbOb({base:'stop',   pastForm:'stopped'}),
    work:   new VerbOb({base:'work',   pastForm:'worked'}),
}

export {VDictOb}
