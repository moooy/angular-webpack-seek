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
var menu_component_1 = require("../menu/menu.component");
var tree_component_1 = require("../tree/tree.component");
var ResourceComponent = (function () {
    function ResourceComponent() {
        console.log("ResourceComponent init");
    }
    ResourceComponent = __decorate([
        core_1.Component({
            selector: 'cedar-resource',
            templateUrl: './app/components/resource/resource.component.html',
            styleUrls: ['./app/components/resource/resource.component.css'],
            directives: [menu_component_1.MenuComponent, tree_component_1.TreeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ResourceComponent);
    return ResourceComponent;
})();
exports.ResourceComponent = ResourceComponent;
//# sourceMappingURL=resource.component.js.map