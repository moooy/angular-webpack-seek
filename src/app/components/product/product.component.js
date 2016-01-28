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
var router_2 = require("angular2/router");
var chart_component_1 = require("../chart/chart.component");
var ProductComponent = (function () {
    function ProductComponent() {
        console.log("Product init");
    }
    ProductComponent = __decorate([
        core_1.Component({
            templateUrl: './app/components/product/product.component.html',
            styleUrls: ['./app/components/product/product.component.css'],
            selector: 'cedar-product',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_2.RouteConfig([
            { path: '/product', component: chart_component_1.ChartComponent, name: 'Chart' }
        ]), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
})();
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map