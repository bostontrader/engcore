import Schema  from './SchemaConstants'

// Every instance of a adj should be immutable and have this shape
function AdjOb(props) {
    this.t = Schema.Adj.t
    this.v = Schema.Adj.cv
    this.base    = props.base
    this.silentH = props.silentH || false
}

const AdjGenerateText = (adj) => {return adj.base}

export {AdjGenerateText}
export {AdjOb}
