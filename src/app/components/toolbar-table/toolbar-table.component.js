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
var toolbar_component_1 = require("../toolbar/toolbar.component");
var evotable_component_1 = require("../table/evotable.component");
var message_modal_component_1 = require("../modals/message/message.modal.component");
var warn_modal_component_1 = require("../modals/warn/warn.modal.component");
var edit_modal_component_1 = require("../modals/edit/edit.modal.component");
var ToolbarTableComponent = (function () {
    function ToolbarTableComponent() {
        this.Opinion = { height: 600 };
    }
    ToolbarTableComponent = __decorate([
        core_1.Component({
            selector: 'cedar-toolbar-table',
            templateUrl: './app/components/toolbar-table/toolbar-table.component.html',
            styleUrls: ['./app/components/toolbar-table/toolbar-table.component.css'],
            directives: [toolbar_component_1.ToolbarComponent, evotable_component_1.TableComponent, toolbar_component_1.ToolbarComponent, message_modal_component_1.MessageModalComponent, warn_modal_component_1.WarnModalComponent, edit_modal_component_1.EditModalComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarTableComponent);
    return ToolbarTableComponent;
})();
exports.ToolbarTableComponent = ToolbarTableComponent;
//# sourceMappingURL=toolbar-table.component.js.map