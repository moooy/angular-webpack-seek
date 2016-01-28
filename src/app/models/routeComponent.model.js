var RouteComponent = (function () {
    function RouteComponent(name, component) {
        this.name = name;
        this.component = component;
    }
    Object.defineProperty(RouteComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteComponent.prototype, "component", {
        get: function () {
            return this._component;
        },
        set: function (component) {
            this._component = component;
        },
        enumerable: true,
        configurable: true
    });
    return RouteComponent;
})();
exports.RouteComponent = RouteComponent;
//# sourceMappingURL=routeComponent.model.js.map