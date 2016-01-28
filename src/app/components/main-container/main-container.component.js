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
var component_loader_service_1 = require("../../services/component-loader.service");
var core_2 = require("angular2/core");
var common_1 = require("angular2/common");
var home_service_1 = require("../../services/home.service");
var core_3 = require("angular2/core");
var MainContainer = (function () {
    function MainContainer(_cmpLoaderService, _homeService, loader, injector) {
        var _this = this;
        this._cmpLoaderService = _cmpLoaderService;
        this._homeService = _homeService;
        this._cmpLoaderService.loadCompleted.subscribe(function (Component) {
            console.log("加载Component完毕", Component);
            loader.loadAsRoot(Component, "#content-container", injector).then(function (module) {
                _this._homeService.afterLoadModuleComponent.emit(module);
            });
        });
    }
    MainContainer.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.beginLoadModuleComponent.subscribe(function (configObject) {
            _this._cmpLoaderService.loadComponentConfig(configObject);
        });
        return undefined;
    };
    MainContainer = __decorate([
        core_1.Component({
            selector: "main-container",
            template: '<div class="main-component-container" id="content-container">默认首页</div>',
            styleUrls: ["./app/components/main-container/main-container.component.css"],
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [component_loader_service_1.ComponentLoaderService, home_service_1.HomeService, core_2.DynamicComponentLoader, core_3.Injector])
    ], MainContainer);
    return MainContainer;
})();
exports.MainContainer = MainContainer;
//# sourceMappingURL=main-container.component.js.map