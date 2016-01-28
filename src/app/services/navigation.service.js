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
var http_1 = require("angular2/http");
var url_consts_1 = require("../consts/url.consts");
require('rxjs/add/operator/map');
var main_content_service_1 = require("./main-content.service");
var NavigationService = (function () {
    function NavigationService(_http, _mainContentService) {
        var _this = this;
        this._http = _http;
        this._mainContentService = _mainContentService;
        this.navDataUrl = url_consts_1.UrlConsts.URL_NAVIGATION;
        this.request = new core_1.EventEmitter();
        this.response = new core_1.EventEmitter();
        this.menuClick = new core_1.EventEmitter();
        this.requestToResponse();
        this.request.emit(this.navDataUrl);
        this.menuClick.subscribe(function (nav) {
            console.log("CAIDANDIANJI", nav);
            _this.onMenuClick(nav);
            _this._mainContentService.resourceId = nav.resourceId;
        });
    }
    NavigationService.prototype.getRequest = function () {
        return this.request;
    };
    NavigationService.prototype.getResponse = function () {
        return this.response;
    };
    NavigationService.prototype.getMenuClick = function () {
        return this.menuClick;
    };
    NavigationService.prototype.requestToResponse = function () {
        var _this = this;
        this.request.subscribe(function (url) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.response.emit(res);
            });
        });
    };
    NavigationService.prototype.onMenuClick = function (nav) {
        console.log(nav);
        if (!this.lastActiveMenu) {
            this.lastActiveMenu = nav;
            nav.active = true;
            return;
        }
        if (nav == this.lastActiveMenu) {
            return;
        }
        this.lastActiveMenu.active = false;
        nav.active = true;
        this.lastActiveMenu = nav;
    };
    NavigationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, main_content_service_1.MainContentService])
    ], NavigationService);
    return NavigationService;
})();
exports.NavigationService = NavigationService;
//# sourceMappingURL=navigation.service.js.map