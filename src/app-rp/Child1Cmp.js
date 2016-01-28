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
var Child2Cmp_1 = require("./Child2Cmp");
var Child1Cmp = (function () {
    function Child1Cmp(dcl, injector) {
        dcl.loadAsRoot(Child2Cmp_1.Child2Cmp, '#c', injector);
    }
    Child1Cmp.prototype.ngOnInit = function () {
        return undefined;
    };
    Child1Cmp = __decorate([
        core_1.Component({
            selector: 'child1',
            template: "<child2 id=\"c\" [testVal2]=\"testVal\">1323</child2>T:{{testVal}}",
            inputs: ['testVal']
        }), 
        __metadata('design:paramtypes', [core_3.DynamicComponentLoader, core_2.Injector])
    ], Child1Cmp);
    return Child1Cmp;
})();
exports.Child1Cmp = Child1Cmp;
//# sourceMappingURL=Child1Cmp.js.map