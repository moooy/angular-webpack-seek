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
var router_1 = require("angular2/router");
var DynamicRouteConfigurator = (function () {
    function DynamicRouteConfigurator(registry) {
        this.registry = registry;
    }
    DynamicRouteConfigurator.prototype.getRoutes = function (component) {
        var routes = Reflect.getMetadata('annotations', component)
            .filter(function (a) {
            return a.constructor.name === 'RouteConfig';
        }).pop();
        console.log("get Routes", routes);
        return routes;
    };
    DynamicRouteConfigurator.prototype.updateRoutes = function (component, routeConfig) {
        var annotations = Reflect.getMetadata('annotations', component);
        var routeConfigIndex = -1;
        for (var i = 0; i < annotations.length; i += 1) {
            if (annotations[i].constructor.name === 'RouteConfig') {
                routeConfigIndex = i;
                break;
            }
        }
        if (routeConfigIndex < 0) {
            throw new Error('No route metadata attached to the component');
        }
        annotations[routeConfigIndex] = routeConfig;
        Reflect.defineMetadata('annotations', annotations, component);
        console.log("update Routes", annotations);
    };
    DynamicRouteConfigurator.prototype.addRoute = function (component, route) {
        var routeConfig = this.getRoutes(component);
        routeConfig.configs.push(route);
        this.updateRoutes(component, routeConfig);
        this.registry.config(component, route);
        console.log("add Routes", routeConfig);
    };
    DynamicRouteConfigurator = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.RouteRegistry])
    ], DynamicRouteConfigurator);
    return DynamicRouteConfigurator;
})();
exports.DynamicRouteConfigurator = DynamicRouteConfigurator;
//# sourceMappingURL=DynamicRouteConfigurator.js.map