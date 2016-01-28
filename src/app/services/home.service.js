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
var HomeService = (function () {
    function HomeService(_http) {
        var _this = this;
        this._http = _http;
        this.requestNavigationUrl = new core_1.EventEmitter();
        this.responseNavigationData = new core_1.EventEmitter();
        this.navigatorReady = new core_1.EventEmitter();
        this.afterConfigHomeRouter = new core_1.EventEmitter();
        this.navigatorClicked = new core_1.EventEmitter();
        this.updateNavState = new core_1.EventEmitter();
        this.requestMenuUrl = new core_1.EventEmitter();
        this.responseMenuData = new core_1.EventEmitter();
        this.menuClicked = new core_1.EventEmitter();
        this.beginLoadModuleComponent = new core_1.EventEmitter();
        this.afterMenuClicked = new core_1.EventEmitter();
        this.afterLoadModuleComponent = new core_1.EventEmitter();
        this.beginRenderModuleComponent = new core_1.EventEmitter();
        this.toggleMenuBtnClick = new core_1.EventEmitter();
        this.toggleMenu = new core_1.EventEmitter();
        this.toggleMainContainer = new core_1.EventEmitter();
        this.requestChartData = new core_1.EventEmitter();
        this.responseChartData = new core_1.EventEmitter();
        this.transformChartData = new core_1.EventEmitter();
        this.initChart = new core_1.EventEmitter();
        this.beforeInitChart = new core_1.EventEmitter();
        this.requestNavigationUrl.subscribe(function (url) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (json) {
                _this.responseNavigationData.emit(json);
            });
        });
        this.requestMenuUrl.subscribe(function (url) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (json) {
                _this.responseMenuData.emit(json);
            });
        });
        this.menuClicked.subscribe(function (menu) {
            console.info("homeService接收到点击的Menu", menu);
            _this.beginLoadModuleComponent.emit({ component: menu.templateId, path: menu.templatePath });
            _this.afterMenuClicked.emit(menu);
        });
        this.afterLoadModuleComponent.subscribe(function (module) {
            console.log("module加载完成", module);
        });
        this.requestChartData.subscribe(function (url) {
            _this._http.get(url).map(function (res) { return res.json(); }).subscribe(function (json) {
                _this.responseChartData.emit(json);
            });
        });
    }
    HomeService.prototype.testData = function () {
        this.requestChartData.emit('./test/chart.json');
        this.beforeInitChart.emit(null);
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
})();
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map