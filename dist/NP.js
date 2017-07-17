'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NPGenerateText = exports.NPOb = undefined;

var _Noun = require('./Noun');

var _SchemaConstants = require('./SchemaConstants');

var _SchemaConstants2 = _interopRequireDefault(_SchemaConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NPOb(props) {

    this.t = _SchemaConstants2.default.NP.t;
    this.v = _SchemaConstants2.default.NP.cv;

    this.noun = props.noun;
    this.definiteness = props.definiteness || Definiteness.NoneSelected;
    this.plurality = props.plurality || _Noun.Plurality.NoneSelected;
    this.adjectives = props.adjectives || [];
}

var Definiteness = {
    'NoneSelected': 0,
    'Definite': 100,
    'Indefinite': 200

    // np: Object
};var NPGenerateText = function NPGenerateText(np) {

    // noun: Object, adjString: String
    function aoran(noun, adjString) {
        var article = 'a';

        var firstChar = adjString === '' ? noun.base.charAt(0) : adjString.charAt(0);
        article = 'aeiouAEIOU'.indexOf(firstChar) < 0 ? 'a' : 'an';
        if (noun.soundLikeYou) article = 'a';
        if (noun.silentH) article = 'an';
        return article;
    }

    var article = '';

    var adjString = np.adjectives.map(function (n) {
        return n.base;
    }).join(' ');

    if (np.plurality === _Noun.Plurality.Singular) {
        article = 'the';
    } else if (np.plurality === _Noun.Plurality.Plural) {
        article = aoran(np.noun, adjString);
    }

    //if(np.exampleOf)          article = aoran(np.noun, adjString)

    //if(np.firstTime)          article = aoran(np.noun, adjString)
    //if(np.nameOfJob)          article = this.aoran(np.get('nound'), adjString)
    //if(np.nationalitySingular) article = aoran(nound, adjString, config)
    //if(np.religionSingular) article = aoran(nound, adjString, config)
    //if(np.dayOfWeek) article = aoran(nound, adjString, config)
    //if(np.exampleOfSomething) article = this.aoran(np.get('nound'), adjString)

    var base = (0, _Noun.NGenerateText)(np.noun);
    if (adjString !== '') base = adjString + ' ' + base;
    if (article != '') base = article + ' ' + base;

    return base;
};

exports.NPOb = NPOb;
exports.NPGenerateText = NPGenerateText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9OUC5qcyJdLCJuYW1lcyI6WyJOUE9iIiwicHJvcHMiLCJ0IiwiTlAiLCJ2IiwiY3YiLCJub3VuIiwiZGVmaW5pdGVuZXNzIiwiRGVmaW5pdGVuZXNzIiwiTm9uZVNlbGVjdGVkIiwicGx1cmFsaXR5IiwiYWRqZWN0aXZlcyIsIk5QR2VuZXJhdGVUZXh0IiwibnAiLCJhb3JhbiIsImFkalN0cmluZyIsImFydGljbGUiLCJmaXJzdENoYXIiLCJiYXNlIiwiY2hhckF0IiwiaW5kZXhPZiIsInNvdW5kTGlrZVlvdSIsInNpbGVudEgiLCJtYXAiLCJuIiwiam9pbiIsIlNpbmd1bGFyIiwiUGx1cmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjs7QUFFakIsU0FBS0MsQ0FBTCxHQUFTLDBCQUFPQyxFQUFQLENBQVVELENBQW5CO0FBQ0EsU0FBS0UsQ0FBTCxHQUFTLDBCQUFPRCxFQUFQLENBQVVFLEVBQW5COztBQUVBLFNBQUtDLElBQUwsR0FBWUwsTUFBTUssSUFBbEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CTixNQUFNTSxZQUFOLElBQXNCQyxhQUFhQyxZQUF2RDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJULE1BQU1TLFNBQU4sSUFBbUIsZ0JBQVVELFlBQTlDO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQlYsTUFBTVUsVUFBTixJQUFvQixFQUF0QztBQUNIOztBQUVELElBQU1ILGVBQWU7QUFDakIsb0JBQWdCLENBREM7QUFFakIsZ0JBQWMsR0FGRztBQUdqQixrQkFBYzs7QUFHbEI7QUFOcUIsQ0FBckIsQ0FPQSxJQUFNSSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEVBQUQsRUFBUTs7QUFFM0I7QUFDQSxhQUFTQyxLQUFULENBQWVSLElBQWYsRUFBcUJTLFNBQXJCLEVBQWdDO0FBQzVCLFlBQUlDLFVBQVUsR0FBZDs7QUFFQSxZQUFNQyxZQUFhRixjQUFjLEVBQWYsR0FBcUJULEtBQUtZLElBQUwsQ0FBVUMsTUFBVixDQUFpQixDQUFqQixDQUFyQixHQUEyQ0osVUFBVUksTUFBVixDQUFpQixDQUFqQixDQUE3RDtBQUNBSCxrQkFBVyxhQUFhSSxPQUFiLENBQXFCSCxTQUFyQixJQUFrQyxDQUFuQyxHQUF3QyxHQUF4QyxHQUE4QyxJQUF4RDtBQUNBLFlBQUlYLEtBQUtlLFlBQVQsRUFBdUJMLFVBQVUsR0FBVjtBQUN2QixZQUFJVixLQUFLZ0IsT0FBVCxFQUFrQk4sVUFBVSxJQUFWO0FBQ2xCLGVBQU9BLE9BQVA7QUFDSDs7QUFHRCxRQUFJQSxVQUFVLEVBQWQ7O0FBRUEsUUFBSUQsWUFBWUYsR0FBR0YsVUFBSCxDQUFjWSxHQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxFQUFFTixJQUFUO0FBQUEsS0FBbkIsRUFBa0NPLElBQWxDLENBQXVDLEdBQXZDLENBQWhCOztBQUVBLFFBQUdaLEdBQUdILFNBQUgsS0FBaUIsZ0JBQVVnQixRQUE5QixFQUF3QztBQUNwQ1Ysa0JBQVUsS0FBVjtBQUNILEtBRkQsTUFFTyxJQUFHSCxHQUFHSCxTQUFILEtBQWlCLGdCQUFVaUIsTUFBOUIsRUFBc0M7QUFDekNYLGtCQUFVRixNQUFNRCxHQUFHUCxJQUFULEVBQWVTLFNBQWYsQ0FBVjtBQUNIOztBQUlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFJRyxPQUFPLHlCQUFjTCxHQUFHUCxJQUFqQixDQUFYO0FBQ0EsUUFBSVMsY0FBYyxFQUFsQixFQUFzQkcsT0FBT0gsWUFBWSxHQUFaLEdBQWtCRyxJQUF6QjtBQUN0QixRQUFJRixXQUFXLEVBQWYsRUFBbUJFLE9BQU9GLFVBQVUsR0FBVixHQUFnQkUsSUFBdkI7O0FBRW5CLFdBQU9BLElBQVA7QUFFSCxDQXpDRDs7UUEyQ1FsQixJLEdBQUFBLEk7UUFFQVksYyxHQUFBQSxjIiwiZmlsZSI6Ik5QLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOR2VuZXJhdGVUZXh0fSBmcm9tICcuL05vdW4nXG5pbXBvcnQge1BsdXJhbGl0eX0gICAgIGZyb20gJy4vTm91bidcbmltcG9ydCBTY2hlbWEgICAgICAgICAgZnJvbSAnLi9TY2hlbWFDb25zdGFudHMnXG5cbmZ1bmN0aW9uIE5QT2IocHJvcHMpIHtcblxuICAgIHRoaXMudCA9IFNjaGVtYS5OUC50XG4gICAgdGhpcy52ID0gU2NoZW1hLk5QLmN2XG5cbiAgICB0aGlzLm5vdW4gPSBwcm9wcy5ub3VuXG4gICAgdGhpcy5kZWZpbml0ZW5lc3MgPSBwcm9wcy5kZWZpbml0ZW5lc3MgfHwgRGVmaW5pdGVuZXNzLk5vbmVTZWxlY3RlZFxuICAgIHRoaXMucGx1cmFsaXR5ID0gcHJvcHMucGx1cmFsaXR5IHx8IFBsdXJhbGl0eS5Ob25lU2VsZWN0ZWRcbiAgICB0aGlzLmFkamVjdGl2ZXMgPSBwcm9wcy5hZGplY3RpdmVzIHx8IFtdXG59XG5cbmNvbnN0IERlZmluaXRlbmVzcyA9IHtcbiAgICAnTm9uZVNlbGVjdGVkJzogMCxcbiAgICAnRGVmaW5pdGUnOiAgIDEwMCxcbiAgICAnSW5kZWZpbml0ZSc6IDIwMCxcbn1cblxuLy8gbnA6IE9iamVjdFxuY29uc3QgTlBHZW5lcmF0ZVRleHQgPSAobnApID0+IHtcblxuICAgIC8vIG5vdW46IE9iamVjdCwgYWRqU3RyaW5nOiBTdHJpbmdcbiAgICBmdW5jdGlvbiBhb3Jhbihub3VuLCBhZGpTdHJpbmcpIHtcbiAgICAgICAgbGV0IGFydGljbGUgPSAnYSdcblxuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSAoYWRqU3RyaW5nID09PSAnJykgPyBub3VuLmJhc2UuY2hhckF0KDApIDogYWRqU3RyaW5nLmNoYXJBdCgwKVxuICAgICAgICBhcnRpY2xlID0gKCdhZWlvdUFFSU9VJy5pbmRleE9mKGZpcnN0Q2hhcikgPCAwKSA/ICdhJyA6ICdhbidcbiAgICAgICAgaWYgKG5vdW4uc291bmRMaWtlWW91KSBhcnRpY2xlID0gJ2EnXG4gICAgICAgIGlmIChub3VuLnNpbGVudEgpIGFydGljbGUgPSAnYW4nXG4gICAgICAgIHJldHVybiBhcnRpY2xlXG4gICAgfVxuXG5cbiAgICBsZXQgYXJ0aWNsZSA9ICcnXG5cbiAgICBsZXQgYWRqU3RyaW5nID0gbnAuYWRqZWN0aXZlcy5tYXAoIChuKSA9PiBuLmJhc2UpLmpvaW4oJyAnKVxuXG4gICAgaWYobnAucGx1cmFsaXR5ID09PSBQbHVyYWxpdHkuU2luZ3VsYXIpIHtcbiAgICAgICAgYXJ0aWNsZSA9ICd0aGUnXG4gICAgfSBlbHNlIGlmKG5wLnBsdXJhbGl0eSA9PT0gUGx1cmFsaXR5LlBsdXJhbCkge1xuICAgICAgICBhcnRpY2xlID0gYW9yYW4obnAubm91biwgYWRqU3RyaW5nKVxuICAgIH1cblxuXG5cbiAgICAvL2lmKG5wLmV4YW1wbGVPZikgICAgICAgICAgYXJ0aWNsZSA9IGFvcmFuKG5wLm5vdW4sIGFkalN0cmluZylcblxuICAgIC8vaWYobnAuZmlyc3RUaW1lKSAgICAgICAgICBhcnRpY2xlID0gYW9yYW4obnAubm91biwgYWRqU3RyaW5nKVxuICAgIC8vaWYobnAubmFtZU9mSm9iKSAgICAgICAgICBhcnRpY2xlID0gdGhpcy5hb3JhbihucC5nZXQoJ25vdW5kJyksIGFkalN0cmluZylcbiAgICAvL2lmKG5wLm5hdGlvbmFsaXR5U2luZ3VsYXIpIGFydGljbGUgPSBhb3Jhbihub3VuZCwgYWRqU3RyaW5nLCBjb25maWcpXG4gICAgLy9pZihucC5yZWxpZ2lvblNpbmd1bGFyKSBhcnRpY2xlID0gYW9yYW4obm91bmQsIGFkalN0cmluZywgY29uZmlnKVxuICAgIC8vaWYobnAuZGF5T2ZXZWVrKSBhcnRpY2xlID0gYW9yYW4obm91bmQsIGFkalN0cmluZywgY29uZmlnKVxuICAgIC8vaWYobnAuZXhhbXBsZU9mU29tZXRoaW5nKSBhcnRpY2xlID0gdGhpcy5hb3JhbihucC5nZXQoJ25vdW5kJyksIGFkalN0cmluZylcblxuICAgIGxldCBiYXNlID0gTkdlbmVyYXRlVGV4dChucC5ub3VuKVxuICAgIGlmKCBhZGpTdHJpbmcgIT09ICcnKSBiYXNlID0gYWRqU3RyaW5nICsgJyAnICsgYmFzZVxuICAgIGlmIChhcnRpY2xlICE9ICcnKSBiYXNlID0gYXJ0aWNsZSArICcgJyArIGJhc2VcblxuICAgIHJldHVybiBiYXNlXG5cbn1cblxuZXhwb3J0IHtOUE9ifVxuXG5leHBvcnQge05QR2VuZXJhdGVUZXh0fVxuIl19