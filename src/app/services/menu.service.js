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
var http_1 = require('angular2/http');
var url_consts_1 = require('../consts/url.consts');
require('rxjs/add/operator/map');
var main_content_service_1 = require("./main-content.service");
var MenuService = (function () {
    function MenuService(_http, _mainContentService) {
        var _this = this;
        this._http = _http;
        this._mainContentService = _mainContentService;
        this.requestMenu = new core_1.EventEmitter();
        this.responseMenu = new core_1.EventEmitter();
        this.updateResourceId = new core_1.EventEmitter();
        this.requestMenu.subscribe(function (url) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (menus) {
                _this.responseMenu.emit(menus);
            });
        });
        var resourceId = this._mainContentService.getResourceId();
        console.log("菜单获取ResouceId,拼接url", resourceId);
        this.requestMenu.emit(url_consts_1.UrlConsts.URL_MENU);
        this.updateResourceId.subscribe(function (resourceId) {
            console.log("菜单点击,获取到ResourceId", resourceId);
            _this._mainContentService.requestMenuData = resourceId;
        });
    }
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, main_content_service_1.MainContentService])
    ], MenuService);
    return MenuService;
})();
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map