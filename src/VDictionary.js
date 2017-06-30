import {VerbOb} from './Verb'

// The dictionary should be immutable
const VDictOb = {
    play:  new VerbOb({base:'play',  pastForm:'played'}),
    shine: new VerbOb({base:'shine', pastForm:'shined'}),
    sit:   new VerbOb({base:'sit',   pastForm:'sat'}),
}

export {VDictOb}
