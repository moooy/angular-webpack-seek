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
var home_service_1 = require("../../services/home.service");
var router_1 = require("angular2/router");
var utils_1 = require("../../utils/utils");
var NavigatorComponent = (function () {
    function NavigatorComponent(_homeService) {
        this._homeService = _homeService;
        this.navigatorData = new Array();
    }
    NavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._homeService.responseNavigationData.subscribe(function (json) {
            _this.transformData(json);
        });
    };
    NavigatorComponent.prototype.onClick = function (navigator) {
        this._homeService.navigatorClicked.emit(navigator);
    };
    NavigatorComponent.prototype.transformData = function (json) {
        var _this = this;
        json.map(function (item) {
            item.routeName = utils_1.Utils.firstLetterToUpperCase(item.resourceId);
            _this.navigatorData.push(item);
        });
    };
    NavigatorComponent = __decorate([
        core_1.Component({
            selector: 'cedar-navigation',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './app/components/navigation/navigation.component.html',
            styleUrls: ['./app/components/navigation/navigation.component.css']
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], NavigatorComponent);
    return NavigatorComponent;
})();
exports.NavigatorComponent = NavigatorComponent;
//# sourceMappingURL=navigation.component.js.map