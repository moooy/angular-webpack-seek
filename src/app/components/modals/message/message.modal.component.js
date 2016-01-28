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
var MessageModalComponent = (function () {
    function MessageModalComponent(_eventService) {
        var _this = this;
        this._eventService = _eventService;
        this.rep_results = {};
        this.contents = {};
        this._eventService.messageModal.subscribe(function (res) {
            _this.contents = res;
            _this.show();
        });
    }
    MessageModalComponent.prototype.show = function () {
        $('#tableModal').modal('show');
    };
    MessageModalComponent.prototype.onsubmit = function () {
        console.log(this.contents);
        this._eventService.messageModalSubmit.emit(this.contents);
    };
    MessageModalComponent = __decorate([
        core_1.Component({
            selector: 'table-modal',
            templateUrl: './app/components/modals/message/message.modal.component.html',
            styleUrls: ['./app/components/modals/message/message.modal.component.css'],
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], MessageModalComponent);
    return MessageModalComponent;
})();
exports.MessageModalComponent = MessageModalComponent;
//# sourceMappingURL=message.modal.component.js.map