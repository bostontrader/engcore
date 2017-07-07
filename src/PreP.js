import {NPGenerateText} from './NP'
import Schema           from './SchemaConstants'

function PrePOb(props) {

    this.t = Schema.PreP.t
    this.v = Schema.PreP.cv

    this.pre = props.pre
    this.np = props.np
}

// prep: Object
const PrePGenerateText = (prep) => {
    return prep.pre.base + ' ' + NPGenerateText(prep.np)
}

export {PrePOb}
export {PrePGenerateText}
