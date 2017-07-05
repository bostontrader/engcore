import Gender      from './Gender'
import Schema      from './SchemaConstants'
import {Plurality} from './Noun'

// Every instance of a pronoun should be immutable and have this shape
function ProOb(props) {
    this.t = Schema.Pro.t
    this.v = Schema.Pro.cv
    this.subject = props.subject || false // subject ? if not then object
    this.possessive = props.possessive || false
    this.plurality = props.plurality || Plurality.NoneSelected
    this.person = props.person
    this.gender = props.gender
}

const ProGenerateText = (pronoun) => {

    let retVal = 'BAD PRONOUN CONFIGURATION'

    const {subject, possessive, plurality, person, gender} = pronoun

    if(possessive) {
        if(plurality === Plurality.Singular) {
            if (person === 1) {
                retVal = "mine"
            } else if (person === 2) {
                retVal = "yours"
            } else if (person === 3) {
                if(gender === Gender.Male) {
                    retVal = "his"
                } else if(gender === Gender.Female) {
                    retVal = "hers"
                } else {
                }
            }
        } else if (plurality === Plurality.Plural) {
            if (person === 1) {
                retVal = "ours"
            } else if (person === 2) {
                retVal = "yours"
            } else if (person === 3) {
                retVal = "theirs"
            }
        }
    } else if(subject) {
        if(plurality === Plurality.Singular) {
            if (person === 1) {
                retVal = "I"
            } else if (person === 2) {
                retVal = "you"
            } else if (person === 3) {
                if(gender === Gender.Male) {
                    retVal = "he"
                } else if(gender === Gender.Female) {
                    retVal = "she"
                } else {
                    retVal = "it"
                }
            }
        } else if (plurality === Plurality.Plural) {
            if (person === 1) {
                retVal = "we"
            } else if (person === 2) {
                retVal = "you"
            } else if (person === 3) {
                retVal = "they"
            }
        }
    } else {
        // must be object
        if(plurality === Plurality.Singular) {
            if (person === 1) {
                retVal = "me"
            } else if (person === 2) {
                retVal = "you"
            } else if (person === 3) {
                if(gender === Gender.Male) {
                    retVal = "him"
                } else if(gender === Gender.Female) {
                    retVal = "her"
                } else {
                    retVal = "it"
                }
            }
        } else if (plurality === Plurality.Plural) {
            if (person === 1) {
                retVal = "us"
            } else if (person === 2) {

            } else if (person === 3) {

            }
        }
    }

    return retVal
}

export {ProOb}
export {ProGenerateText}
