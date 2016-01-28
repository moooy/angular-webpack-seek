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
var navigation_component_1 = require('../navigation/navigation.component');
var home_service_1 = require("../../services/home.service");
var utils_1 = require("../../utils/utils");
var router_1 = require("angular2/router");
var router_2 = require("angular2/router");
var router_3 = require("angular2/router");
var router_4 = require("angular2/router");
var router_5 = require("angular2/router");
var HomeComponent = (function () {
    function HomeComponent(_homeService, _routeRegistry, _router) {
        this._homeService = _homeService;
        this._routeRegistry = _routeRegistry;
        this._router = _router;
        this.collecpse = false;
        this.routeNames = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.requestNavigationUrl.emit('./test/nav.json');
        this._homeService.responseNavigationData.subscribe(function (json) {
            _this.routeNames = _this.configRoute(json);
            _this.navigateToDefaultRouter();
        });
        this._homeService.toggleMenuBtnClick.subscribe(function (isMenuollecpse) {
            _this.collecpse = isMenuollecpse;
        });
    };
    HomeComponent.prototype.navigateToDefaultRouter = function () {
        if (this.routeNames.length > 0)
            this._router.navigate([this.routeNames[0]]);
    };
    HomeComponent.prototype.configRoute = function (json) {
        var _this = this;
        var routeNames = [];
        json.map(function (item) {
            var routeName = utils_1.Utils.firstLetterToUpperCase(item.resourceId);
            if (!_this._routeRegistry.hasRoute(routeName)) {
                var routeDefinition = new router_1.AsyncRoute({
                    path: '/' + item.resourceId,
                    name: routeName,
                    loader: function () { return System.import(item.templatePath).then(function (m) { return m[item.templateId]; }); },
                    data: { resourceId: item.resourceId }
                });
                routeNames.push(routeName);
                _this._routeRegistry.config(HomeComponent, routeDefinition);
            }
        });
        return routeNames;
    };
    HomeComponent.prototype.toggleMenu = function () {
        this._homeService.toggleMenuBtnClick.emit(null);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: 'app/components/home/home.component.html',
            styleUrls: ['app/components/home/home.component.css'],
            directives: [navigation_component_1.NavigatorComponent, router_4.ROUTER_DIRECTIVES]
        }),
        router_3.RouteConfig([]), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_2.RouteRegistry, router_5.Router])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map