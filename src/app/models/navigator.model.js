var NavigatorModel = (function () {
    function NavigatorModel(obj) {
        this._id = obj && obj.id || '';
        this._resourceId = obj && obj.resourceId || '';
        this._title = obj && obj.title || '';
        this._active = obj && obj.active || false;
    }
    Object.defineProperty(NavigatorModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorModel.prototype, "resourceId", {
        get: function () {
            return this._resourceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigatorModel.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            this._active = active;
        },
        enumerable: true,
        configurable: true
    });
    return NavigatorModel;
})();
exports.NavigatorModel = NavigatorModel;
//# sourceMappingURL=navigator.model.js.map