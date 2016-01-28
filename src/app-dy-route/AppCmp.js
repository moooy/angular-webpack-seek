var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("angular2/router");
var AppNav_1 = require("./AppNav");
var core_1 = require("angular2/core");
var router_2 = require("angular2/router");
var router_3 = require("angular2/router");
var router_4 = require("angular2/router");
var AppCmp = (function () {
    function AppCmp(_routeRegistry) {
        this._routeRegistry = _routeRegistry;
        this.appRoutes = [{ path: '/about', name: 'AboutCmp', as: '关于' }, { path: '/home', name: 'HomeCmp', as: '主页' }];
        this._routeRegistry.config(AppCmp, new router_4.AsyncRoute({ path: '/home', loader: function () { return System.import('./app-dy-route/HomeCmp').then(function (m) { return m.HomeCmp; }); }, name: 'HomeCmp' }));
        this._routeRegistry.config(AppCmp, new router_4.AsyncRoute({ path: '/about', loader: function () { return System.import('./app-dy-route/About').then(function (m) { return m.AboutCmp; }); }, name: 'AboutCmp', useAsDefault: true }));
        console.log(this.appRoutes);
    }
    AppCmp.prototype.getAppRoutes = function () {
        return this.dynamicRouteConfigurator
            .getRoutes(this.constructor).configs.map(function (route) {
            return { path: [("/" + route.as)], name: route.as };
        });
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<section class=\"sample-app-content\">\n                  <app-nav [routes]=\"appRoutes\"></app-nav>\n                  <router-outlet></router-outlet>\n                </section>",
            directives: [AppNav_1.AppNav, router_1.ROUTER_DIRECTIVES]
        }),
        router_2.RouteConfig([]), 
        __metadata('design:paramtypes', [router_3.RouteRegistry])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
//# sourceMappingURL=AppCmp.js.map