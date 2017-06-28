import {NDictOb}        from './NDictionary'
import {Plurality}      from './Noun'
import {NPGenerateText} from './NP'
import {NPOb}           from './NP'

describe('Examples', () => {

    it('\'s ALIVE!', () => {
        const n = (NPGenerateText(new NPOb({noun:NDictOb.sun, plurality: Plurality.Singular})))
        expect(n).toBe('the sun')
    })

})
