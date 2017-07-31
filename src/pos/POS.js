/**
 * POS - Part of speech.
 *
 * When creating POS we have the following goals, in order of importance:
 *
 * 1. Given sensible parameters, make an object that has no errors and will produce correct text.
 *
 * 2. Failing that, make an object that can detect and record errors, but doesn't throw any errors.
 *
 */
function POS() {
}

/**
 * For any POS we want to know what errors it has and what the resulting text is.
 *
 * We do not merely store a snippet of text for the various POS.  Instead, we generate text according to the configuration of a POS.  Likewise, we do not merely store a list of errors.  We generate them upon demand.
 *
 * However, text and errors are completely entwined.  If we attempt to generate text, we will discover any errors.  And how else to discover errors other than to attempt to generate the text?
 *
 * We also have a question of what to text to return in the event of error.  Empty string?  Some error message embedded in the string?  A special error object format that says "error" ?  An error object that contains a specific error?
 *
 * So many twisted questions to drive us mad.  So how best to expose and implement this functionality?
 *
 * After due consideration we have decided upon the following approach:
 *
 * 1. Each POS has an 'analyse' method.
 *
 * 2. Analyse will return {t:string, e:[string]} which contain a string of text and an array of strings to describe any errors.  This method will make a single pass
 *
 * 3. Each POS method will wing-it re: what to send back as the text string in the event of an error.  Generally something like [missing] would be a good clue when examining a wall of generated text, while an arrray of errors would contain more detailed diagnostic clues.
 *
 */
POS.prototype.analyse = function() {
	return {t:undefined, e:[]}
}

export default POS
