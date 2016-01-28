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
var core_2 = require("angular2/core");
var AppNav = (function () {
    function AppNav() {
        var _this = this;
        console.log("appNav get routes", this.routes);
        setTimeout(function (x) {
            console.log(_this.routes);
        }, 2000);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AppNav.prototype, "routes", void 0);
    AppNav = __decorate([
        core_2.Component({
            selector: 'app-nav',
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["nav{height:50px;backgr} "],
            template: "\n    <nav *ngIf=\"routes\">\n\n      <a height=\"40px\" *ngFor=\"#route of routes\" [routerLink]=\"[route.name]\">\n        {{route.name}} :{{route.as}}\n      </a>\n\n    </nav>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppNav);
    return AppNav;
})();
exports.AppNav = AppNav;
//# sourceMappingURL=AppNav.js.map