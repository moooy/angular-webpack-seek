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
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var AppComponent = (function () {
    function AppComponent(_render, _ele) {
        this._render = _render;
        this._ele = _ele;
        console.log(this._render);
        this._render.createElement(this._ele, 'a');
    }
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<div>ff</div>"
        }), 
        __metadata('design:paramtypes', [core_2.Renderer, core_3.ElementRef])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=AppComponent.js.map