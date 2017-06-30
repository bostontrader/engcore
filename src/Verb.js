import Schema   from './SchemaConstants'

function VerbOb(props) {
    this.t = Schema.V.t
    this.v = Schema.V.cv

    this.base     = props.base
    this.pastForm = props.pastForm
    this.sForm    = props.sForm
    this.ingForm  = props.ingForm
    this.ppForm   = props.ppForm

}

// Tense:         Past or present?
// Modal:        Modal or not?
//    They could find or  They found
//Aspect:        Perfect or not?
//    It has gone
//or
//It goes
//Continuous or not?
//    It was happening
//or
//It happened
//Voice:         Passive or active?
//    They were informed
//or
//He informed them

// See: https://en.wikipedia.org/wiki/Tense%E2%80%93aspect%E2%80%93mood

const Tense = {
    'NoneSelected':0,
    'Past':      100,
    'Present':   200,
}

const VGenerateText = (verb, actionTime) => {
    if(actionTime) return verb.base + 'ed'
    return verb.base
}

export {Tense}
export {VerbOb}
export {VGenerateText}
