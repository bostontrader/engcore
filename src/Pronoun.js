import Schema from './SchemaConstants'
import {Plurality} from './Noun'

// Every instance of a pronoun should be immutable and have this shape
function ProOb(props) {
    this.t = Schema.Pro.t
    this.v = Schema.Pro.cv
    this.subject = props.subject || false // subject ? if not then object
    this.plurality = props.plurality || Plurality.NoneSelected
    this.person = props.person
}

const ProGenerateText = (pronoun) => {

    let retVal = 'BAD PRONOUN CONFIGURATION'

    const {subject, plurality, person} = pronoun

    if(subject) {
        if(plurality === Plurality.Singular) {
            if (person === 1) {
                retVal = "I"
            } else if (person === 2) {

            } else if (person === 3) {

            } else {
                // p is already set to a suitable default. do nothing.
            }
        } else if (plurality === Plurality.Plural) {
            if (person === 1) {
                retVal = "we"
            } else if (person === 2) {

            } else if (person === 3) {

            } else {
                // p is already set to a suitable default. do nothing.
            }
        } else {
            // p is already set to a suitable default. do nothing.
        }
    } else {
        // must be object
    }

    return retVal
}

export {ProOb}
export {ProGenerateText}
