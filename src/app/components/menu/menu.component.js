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
var menu_service_1 = require('../../services/menu.service');
var router_1 = require("angular2/router");
var home_service_1 = require("../../services/home.service");
var router_2 = require("angular2/router");
var router_3 = require("angular2/router");
var utils_1 = require("../../utils/utils");
var MenuComponent = (function () {
    function MenuComponent(_homeService, _routeData, _router) {
        this._homeService = _homeService;
        this._routeData = _routeData;
        this._router = _router;
        this.menuCollapse = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._routeData.data['resourceId']);
        this._homeService.requestMenuUrl.emit('./test/menus.json');
        this._homeService.responseMenuData.subscribe(function (json) {
            _this.menus = json;
            console.log("菜单数据", _this.menus);
        });
        return undefined;
    };
    MenuComponent.prototype.onMenuClick = function (menu) {
        this._homeService.menuClicked.emit(menu);
        this._router.navigate([utils_1.Utils.firstLetterToUpperCase(menu.resourceId)]);
        this.toogleActive(menu);
    };
    MenuComponent.prototype.toogleActive = function (menu) {
        if (!menu)
            return;
        menu.active = !menu.active;
    };
    MenuComponent.prototype.toggleMenu = function () {
        this.menuCollapse = !this.menuCollapse;
        this._homeService.toggleMenuBtnClick.emit(this.menuCollapse);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'cedar-menu',
            templateUrl: './app/components/menu/menu.component.html',
            styleUrls: ['./app/components/menu/menu.component.css'],
            providers: [menu_service_1.MenuService]
        }),
        router_3.RouteConfig([]), 
        __metadata('design:paramtypes', [home_service_1.HomeService, router_2.RouteData, router_1.Router])
    ], MenuComponent);
    return MenuComponent;
})();
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map