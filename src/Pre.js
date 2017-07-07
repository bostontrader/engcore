import Schema from './SchemaConstants'

function PreOb(props) {
    this.t = Schema.Pre.t
    this.v = Schema.Pre.cv
    this.base       = props.base
}

const PreGenerateText = (pre) => {
    return pre.base
}

export {PreOb}
export {PreGenerateText}
