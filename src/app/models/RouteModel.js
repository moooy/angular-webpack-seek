var RouteModel = (function () {
    function RouteModel(obj) {
        if (!obj)
            return;
        this.path = obj.path || '';
        this.name = obj.name || '';
        this.component = obj.component || null;
        this.useAsDefault = obj.useAsDefault || false;
    }
    return RouteModel;
})();
exports.RouteModel = RouteModel;
//# sourceMappingURL=RouteModel.js.map