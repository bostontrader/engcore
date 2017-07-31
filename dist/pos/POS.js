"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
function POS() {}

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
POS.prototype.analyse = function () {
  return { t: undefined, e: [] };
};

exports.default = POS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3MvUE9TLmpzIl0sIm5hbWVzIjpbIlBPUyIsInByb3RvdHlwZSIsImFuYWx5c2UiLCJ0IiwidW5kZWZpbmVkIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBLFNBQVNBLEdBQVQsR0FBZSxDQUNkOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQUEsSUFBSUMsU0FBSixDQUFjQyxPQUFkLEdBQXdCLFlBQVc7QUFDbEMsU0FBTyxFQUFDQyxHQUFFQyxTQUFILEVBQWNDLEdBQUUsRUFBaEIsRUFBUDtBQUNBLENBRkQ7O2tCQUllTCxHIiwiZmlsZSI6IlBPUy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUE9TIC0gUGFydCBvZiBzcGVlY2guXG4gKlxuICogV2hlbiBjcmVhdGluZyBQT1Mgd2UgaGF2ZSB0aGUgZm9sbG93aW5nIGdvYWxzLCBpbiBvcmRlciBvZiBpbXBvcnRhbmNlOlxuICpcbiAqIDEuIEdpdmVuIHNlbnNpYmxlIHBhcmFtZXRlcnMsIG1ha2UgYW4gb2JqZWN0IHRoYXQgaGFzIG5vIGVycm9ycyBhbmQgd2lsbCBwcm9kdWNlIGNvcnJlY3QgdGV4dC5cbiAqXG4gKiAyLiBGYWlsaW5nIHRoYXQsIG1ha2UgYW4gb2JqZWN0IHRoYXQgY2FuIGRldGVjdCBhbmQgcmVjb3JkIGVycm9ycywgYnV0IGRvZXNuJ3QgdGhyb3cgYW55IGVycm9ycy5cbiAqXG4gKi9cbmZ1bmN0aW9uIFBPUygpIHtcbn1cblxuLyoqXG4gKiBGb3IgYW55IFBPUyB3ZSB3YW50IHRvIGtub3cgd2hhdCBlcnJvcnMgaXQgaGFzIGFuZCB3aGF0IHRoZSByZXN1bHRpbmcgdGV4dCBpcy5cbiAqXG4gKiBXZSBkbyBub3QgbWVyZWx5IHN0b3JlIGEgc25pcHBldCBvZiB0ZXh0IGZvciB0aGUgdmFyaW91cyBQT1MuICBJbnN0ZWFkLCB3ZSBnZW5lcmF0ZSB0ZXh0IGFjY29yZGluZyB0byB0aGUgY29uZmlndXJhdGlvbiBvZiBhIFBPUy4gIExpa2V3aXNlLCB3ZSBkbyBub3QgbWVyZWx5IHN0b3JlIGEgbGlzdCBvZiBlcnJvcnMuICBXZSBnZW5lcmF0ZSB0aGVtIHVwb24gZGVtYW5kLlxuICpcbiAqIEhvd2V2ZXIsIHRleHQgYW5kIGVycm9ycyBhcmUgY29tcGxldGVseSBlbnR3aW5lZC4gIElmIHdlIGF0dGVtcHQgdG8gZ2VuZXJhdGUgdGV4dCwgd2Ugd2lsbCBkaXNjb3ZlciBhbnkgZXJyb3JzLiAgQW5kIGhvdyBlbHNlIHRvIGRpc2NvdmVyIGVycm9ycyBvdGhlciB0aGFuIHRvIGF0dGVtcHQgdG8gZ2VuZXJhdGUgdGhlIHRleHQ/XG4gKlxuICogV2UgYWxzbyBoYXZlIGEgcXVlc3Rpb24gb2Ygd2hhdCB0byB0ZXh0IHRvIHJldHVybiBpbiB0aGUgZXZlbnQgb2YgZXJyb3IuICBFbXB0eSBzdHJpbmc/ICBTb21lIGVycm9yIG1lc3NhZ2UgZW1iZWRkZWQgaW4gdGhlIHN0cmluZz8gIEEgc3BlY2lhbCBlcnJvciBvYmplY3QgZm9ybWF0IHRoYXQgc2F5cyBcImVycm9yXCIgPyAgQW4gZXJyb3Igb2JqZWN0IHRoYXQgY29udGFpbnMgYSBzcGVjaWZpYyBlcnJvcj9cbiAqXG4gKiBTbyBtYW55IHR3aXN0ZWQgcXVlc3Rpb25zIHRvIGRyaXZlIHVzIG1hZC4gIFNvIGhvdyBiZXN0IHRvIGV4cG9zZSBhbmQgaW1wbGVtZW50IHRoaXMgZnVuY3Rpb25hbGl0eT9cbiAqXG4gKiBBZnRlciBkdWUgY29uc2lkZXJhdGlvbiB3ZSBoYXZlIGRlY2lkZWQgdXBvbiB0aGUgZm9sbG93aW5nIGFwcHJvYWNoOlxuICpcbiAqIDEuIEVhY2ggUE9TIGhhcyBhbiAnYW5hbHlzZScgbWV0aG9kLlxuICpcbiAqIDIuIEFuYWx5c2Ugd2lsbCByZXR1cm4ge3Q6c3RyaW5nLCBlOltzdHJpbmddfSB3aGljaCBjb250YWluIGEgc3RyaW5nIG9mIHRleHQgYW5kIGFuIGFycmF5IG9mIHN0cmluZ3MgdG8gZGVzY3JpYmUgYW55IGVycm9ycy4gIFRoaXMgbWV0aG9kIHdpbGwgbWFrZSBhIHNpbmdsZSBwYXNzXG4gKlxuICogMy4gRWFjaCBQT1MgbWV0aG9kIHdpbGwgd2luZy1pdCByZTogd2hhdCB0byBzZW5kIGJhY2sgYXMgdGhlIHRleHQgc3RyaW5nIGluIHRoZSBldmVudCBvZiBhbiBlcnJvci4gIEdlbmVyYWxseSBzb21ldGhpbmcgbGlrZSBbbWlzc2luZ10gd291bGQgYmUgYSBnb29kIGNsdWUgd2hlbiBleGFtaW5pbmcgYSB3YWxsIG9mIGdlbmVyYXRlZCB0ZXh0LCB3aGlsZSBhbiBhcnJyYXkgb2YgZXJyb3JzIHdvdWxkIGNvbnRhaW4gbW9yZSBkZXRhaWxlZCBkaWFnbm9zdGljIGNsdWVzLlxuICpcbiAqL1xuUE9TLnByb3RvdHlwZS5hbmFseXNlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB7dDp1bmRlZmluZWQsIGU6W119XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBPU1xuIl19