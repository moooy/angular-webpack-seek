var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require("angular2/router");
var menu_component_1 = require("../menu/menu.component");
var chart_component_1 = require("../chart/chart.component");
var toolbar_table_component_1 = require("../toolbar-table/toolbar-table.component");
var router_2 = require("angular2/router");
var router_3 = require("angular2/router");
var home_service_1 = require("../../services/home.service");
var utils_1 = require("../../utils/utils");
var router_4 = require("angular2/router");
var PlatformComponent = (function () {
    function PlatformComponent(_router, _routeRegistry, _homeService) {
        this._router = _router;
        this._routeRegistry = _routeRegistry;
        this._homeService = _homeService;
        this.routeNames = [];
        console.log("Platform init");
    }
    PlatformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.responseMenuData.subscribe(function (json) {
            _this.transform2RouteConfig(json);
            if (_this.routeNames && _this.routeNames.length > 0)
                _this._router.navigate([_this.routeNames[0]]);
        });
    };
    PlatformComponent.prototype.transform2RouteConfig = function (json) {
        var _this = this;
        json.map(function (item) {
            var routeName = utils_1.Utils.firstLetterToUpperCase(item.resourceId);
            if (!_this._routeRegistry.hasRoute(routeName)) {
                var routeDefinition = new router_4.AsyncRoute({
                    path: '/' + item.resourceId,
                    name: routeName,
                    loader: function () { return System.import(item.templatePath).then(function (m) { return m[item.templateId]; }); },
                    data: { resourceId: item.resourceId }
                });
                _this.routeNames.push(routeName);
                _this._routeRegistry.config(PlatformComponent, routeDefinition);
            }
            if (item.children && item.children.length > 0)
                _this.transform2RouteConfig(item.children);
        });
    };
    PlatformComponent = __decorate([
        core_1.Component({
            selector: 'cedar-platform',
            templateUrl: './app/components/platform/platform.component.html',
            styleUrls: ['./app/components/platform/platform.component.css'],
            directives: [menu_component_1.MenuComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/toolbar-table', name: 'ToolbarTable', component: toolbar_table_component_1.ToolbarTableComponent, useAsDefault: true },
            { path: '/chart', name: 'Chart', component: chart_component_1.ChartComponent }
        ]), 
        __metadata('design:paramtypes', [router_2.Router, router_3.RouteRegistry, home_service_1.HomeService])
    ], PlatformComponent);
    return PlatformComponent;
})();
exports.PlatformComponent = PlatformComponent;
//# sourceMappingURL=platform.component.js.map