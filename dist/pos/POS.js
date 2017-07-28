'use strict';

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
  return { t: '', e: [] };
};

exports.default = POS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wb3MvUE9TLmpzIl0sIm5hbWVzIjpbIlBPUyIsInByb3RvdHlwZSIsImFuYWx5c2UiLCJ0IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBLFNBQVNBLEdBQVQsR0FBZSxDQUNkOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQUEsSUFBSUMsU0FBSixDQUFjQyxPQUFkLEdBQXdCLFlBQVc7QUFDbEMsU0FBTyxFQUFDQyxHQUFFLEVBQUgsRUFBT0MsR0FBRSxFQUFULEVBQVA7QUFDQSxDQUZEOztrQkFJZUosRyIsImZpbGUiOiJQT1MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBPUyAtIFBhcnQgb2Ygc3BlZWNoLlxuICpcbiAqIFdoZW4gY3JlYXRpbmcgUE9TIHdlIGhhdmUgdGhlIGZvbGxvd2luZyBnb2FscywgaW4gb3JkZXIgb2YgaW1wb3J0YW5jZTpcbiAqXG4gKiAxLiBHaXZlbiBzZW5zaWJsZSBwYXJhbWV0ZXJzLCBtYWtlIGFuIG9iamVjdCB0aGF0IGhhcyBubyBlcnJvcnMgYW5kIHdpbGwgcHJvZHVjZSBjb3JyZWN0IHRleHQuXG4gKlxuICogMi4gRmFpbGluZyB0aGF0LCBtYWtlIGFuIG9iamVjdCB0aGF0IGNhbiBkZXRlY3QgYW5kIHJlY29yZCBlcnJvcnMsIGJ1dCBkb2Vzbid0IHRocm93IGFueSBlcnJvcnMuXG4gKlxuICovXG5mdW5jdGlvbiBQT1MoKSB7XG59XG5cbi8qKlxuICogRm9yIGFueSBQT1Mgd2Ugd2FudCB0byBrbm93IHdoYXQgZXJyb3JzIGl0IGhhcyBhbmQgd2hhdCB0aGUgcmVzdWx0aW5nIHRleHQgaXMuXG4gKlxuICogV2UgZG8gbm90IG1lcmVseSBzdG9yZSBhIHNuaXBwZXQgb2YgdGV4dCBmb3IgdGhlIHZhcmlvdXMgUE9TLiAgSW5zdGVhZCwgd2UgZ2VuZXJhdGUgdGV4dCBhY2NvcmRpbmcgdG8gdGhlIGNvbmZpZ3VyYXRpb24gb2YgYSBQT1MuICBMaWtld2lzZSwgd2UgZG8gbm90IG1lcmVseSBzdG9yZSBhIGxpc3Qgb2YgZXJyb3JzLiAgV2UgZ2VuZXJhdGUgdGhlbSB1cG9uIGRlbWFuZC5cbiAqXG4gKiBIb3dldmVyLCB0ZXh0IGFuZCBlcnJvcnMgYXJlIGNvbXBsZXRlbHkgZW50d2luZWQuICBJZiB3ZSBhdHRlbXB0IHRvIGdlbmVyYXRlIHRleHQsIHdlIHdpbGwgZGlzY292ZXIgYW55IGVycm9ycy4gIEFuZCBob3cgZWxzZSB0byBkaXNjb3ZlciBlcnJvcnMgb3RoZXIgdGhhbiB0byBhdHRlbXB0IHRvIGdlbmVyYXRlIHRoZSB0ZXh0P1xuICpcbiAqIFdlIGFsc28gaGF2ZSBhIHF1ZXN0aW9uIG9mIHdoYXQgdG8gdGV4dCB0byByZXR1cm4gaW4gdGhlIGV2ZW50IG9mIGVycm9yLiAgRW1wdHkgc3RyaW5nPyAgU29tZSBlcnJvciBtZXNzYWdlIGVtYmVkZGVkIGluIHRoZSBzdHJpbmc/ICBBIHNwZWNpYWwgZXJyb3Igb2JqZWN0IGZvcm1hdCB0aGF0IHNheXMgXCJlcnJvclwiID8gIEFuIGVycm9yIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgc3BlY2lmaWMgZXJyb3I/XG4gKlxuICogU28gbWFueSB0d2lzdGVkIHF1ZXN0aW9ucyB0byBkcml2ZSB1cyBtYWQuICBTbyBob3cgYmVzdCB0byBleHBvc2UgYW5kIGltcGxlbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHk/XG4gKlxuICogQWZ0ZXIgZHVlIGNvbnNpZGVyYXRpb24gd2UgaGF2ZSBkZWNpZGVkIHVwb24gdGhlIGZvbGxvd2luZyBhcHByb2FjaDpcbiAqXG4gKiAxLiBFYWNoIFBPUyBoYXMgYW4gJ2FuYWx5c2UnIG1ldGhvZC5cbiAqXG4gKiAyLiBBbmFseXNlIHdpbGwgcmV0dXJuIHt0OnN0cmluZywgZTpbc3RyaW5nXX0gd2hpY2ggY29udGFpbiBhIHN0cmluZyBvZiB0ZXh0IGFuZCBhbiBhcnJheSBvZiBzdHJpbmdzIHRvIGRlc2NyaWJlIGFueSBlcnJvcnMuICBUaGlzIG1ldGhvZCB3aWxsIG1ha2UgYSBzaW5nbGUgcGFzc1xuICpcbiAqIDMuIEVhY2ggUE9TIG1ldGhvZCB3aWxsIHdpbmctaXQgcmU6IHdoYXQgdG8gc2VuZCBiYWNrIGFzIHRoZSB0ZXh0IHN0cmluZyBpbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IuICBHZW5lcmFsbHkgc29tZXRoaW5nIGxpa2UgW21pc3NpbmddIHdvdWxkIGJlIGEgZ29vZCBjbHVlIHdoZW4gZXhhbWluaW5nIGEgd2FsbCBvZiBnZW5lcmF0ZWQgdGV4dCwgd2hpbGUgYW4gYXJycmF5IG9mIGVycm9ycyB3b3VsZCBjb250YWluIG1vcmUgZGV0YWlsZWQgZGlhZ25vc3RpYyBjbHVlcy5cbiAqXG4gKi9cblBPUy5wcm90b3R5cGUuYW5hbHlzZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4ge3Q6JycsIGU6W119XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBPU1xuIl19