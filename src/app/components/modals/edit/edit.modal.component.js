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
var event_service_1 = require('../../../services/event.service');
var EditModalComponent = (function () {
    function EditModalComponent(_eventService) {
        var _this = this;
        this._eventService = _eventService;
        this.rep_results = {};
        this.keys = [];
        this.contents = {};
        this._eventService.editModal.subscribe(function (res) {
            _this.extractData(res);
            _this.show();
        });
    }
    EditModalComponent.prototype.show = function () {
        $('#editModal').modal('show');
    };
    EditModalComponent.prototype.onsubmit = function () {
        console.log(this.contents);
        this._eventService.editModalSubmit.emit(this.contents);
    };
    EditModalComponent.prototype.extractData = function (res) {
        var keys = [];
        var values = {};
        for (var key in res) {
            if (key != '0') {
                keys.push(key);
                values[key] = (res[key]);
            }
        }
        this.keys = keys;
        this.contents = values;
        console.log(this.keys);
        console.log(this.contents);
    };
    EditModalComponent = __decorate([
        core_1.Component({
            selector: 'edit-modal',
            templateUrl: './app/components/modals/edit/edit.modal.component.html',
            styleUrls: ['./app/components/modals/edit/edit.modal.component.css'],
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EditModalComponent);
    return EditModalComponent;
})();
exports.EditModalComponent = EditModalComponent;
//# sourceMappingURL=edit.modal.component.js.map