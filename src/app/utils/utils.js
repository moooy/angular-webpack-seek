var Utils = (function () {
    function Utils() {
    }
    Utils.mixin = function (dst, src) {
        if (!(dst && src))
            return;
        var result = new Object();
        for (var attr in dst) {
            result[attr] = src[attr] ? src[attr] : dst[attr];
        }
        return result;
    };
    Utils.firstLetterToUpperCase = function (s) {
        return s.charAt(0).toUpperCase() + s.substr(1);
    };
    return Utils;
})();
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map