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
var router_2 = require("angular2/router");
var router_3 = require("angular2/router");
var router_4 = require("angular2/router");
var router_5 = require("angular2/router");
var AboutCmp = (function () {
    function AboutCmp(router, _routeRegistry) {
        this.router = router;
        this._routeRegistry = _routeRegistry;
        console.log("about construct");
        if (!this._routeRegistry.hasRoute('C1', AboutCmp))
            this._routeRegistry.config(AboutCmp, new router_4.AsyncRoute({ path: '/c1', loader: function () { return System.import('./app-dy-route/second/AboutC1').then(function (m) { return m['AboutC1Component']; }); }, name: 'C1', useAsDefault: true }));
        if (!this._routeRegistry.hasRoute('C2', AboutCmp))
            this._routeRegistry.config(AboutCmp, new router_4.AsyncRoute({ path: '/c2', loader: function () { return System.import('./app-dy-route/second/AboutC2').then(function (m) { return m['AboutC2Component']; }); }, name: 'C2' }));
    }
    AboutCmp.prototype.ngOnInit = function () {
        this.router.navigate(['C1']);
        console.log("about init");
        return undefined;
    };
    AboutCmp = __decorate([
        core_1.Component({
            selector: 'about',
            template: "<h3>About</h3><hr>\n               <a [routerLink]=\"['C1']\">AboutC1</a>\n               <a [routerLink]=\"['C2']\">AboutC2</a>\n               <router-outlet>gg</router-outlet>\n    ",
            directives: [router_2.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([]), 
        __metadata('design:paramtypes', [router_5.Router, router_3.RouteRegistry])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;
//# sourceMappingURL=About.js.map