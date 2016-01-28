var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var logger_service_1 = require("./logger.service");
var routeComponent_model_1 = require("../models/routeComponent.model");
var RouteRegistryService = (function () {
    function RouteRegistryService(_logService) {
        this._logService = _logService;
        this.MESSAGES = {
            HAS_REGISTERED: "the component had registered",
            COMPONENT_NOT_FOUND: "component not found in RouteService registry"
        };
        console.log("a");
        this.routeMap = {};
    }
    RouteRegistryService.prototype.internalRegisterRouteComponent = function (id, routeComponent) {
        var routeCmp = this.routeMap[id];
        if (routeCmp) {
            this._logService.info(this.MESSAGES.HAS_REGISTERED);
            return;
        }
        this.routeMap[id] = routeComponent;
    };
    RouteRegistryService.prototype.registerRouteComponent = function (id, name, routeComponent) {
        this.internalRegisterRouteComponent(id, new routeComponent_model_1.RouteComponent(name, routeComponent));
    };
    RouteRegistryService.prototype.findRouteComponentById = function (id) {
        var has = this.routeMap[id];
        if (!has) {
            this._logService.info(this.MESSAGES.COMPONENT_NOT_FOUND);
            return;
        }
        return this.routeMap[id];
    };
    RouteRegistryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService])
    ], RouteRegistryService);
    return RouteRegistryService;
})();
exports.RouteRegistryService = RouteRegistryService;
//# sourceMappingURL=route.service.js.map