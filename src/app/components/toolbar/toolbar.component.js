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
var event_service_1 = require('../../services/event.service');
var table_service_1 = require('../../services/table.service');
var ToolbarComponent = (function () {
    function ToolbarComponent(_eventService, _tableService) {
        var _this = this;
        this._eventService = _eventService;
        this._tableService = _tableService;
        this.toolbarOpinion = [];
        this.isActive = false;
        this.searchOpinion = [];
        this.searchCondition = {};
        this._eventService.searchOpinion.subscribe(function (res) {
            _this.searchOpinion = res;
            _this.isActive = !_this.isActive;
        });
        this._tableService.getToolbarOpinion();
        this._tableService.getToolbarEvent.subscribe(function (res) {
            _this.toolbarOpinion = res;
        });
    }
    ToolbarComponent.prototype.action = function (type) {
        if (type == "add") {
            this.addclick();
        }
        else if (type == "update") {
            this.fixclick();
        }
        else if (type == "remove") {
            this.deleteclick();
        }
        else if (type == "selectFilter") {
            this.searchclick();
        }
    };
    ToolbarComponent.prototype.addclick = function () {
        this._eventService.addClick.emit({});
    };
    ToolbarComponent.prototype.deleteclick = function () {
        this._eventService.deleteClick.emit({});
    };
    ToolbarComponent.prototype.fixclick = function () {
        this._eventService.fixClick.emit({});
    };
    ToolbarComponent.prototype.searchclick = function () {
        this._eventService.searchClick.emit({ "condition": this.searchText });
    };
    ToolbarComponent.prototype.exactSearch = function () {
        this.searchCondition = {};
        if (!this.isActive) {
            this._eventService.exactClick.emit({});
        }
        else {
            this.isActive = !this.isActive;
        }
    };
    ToolbarComponent.prototype.exactsearch = function () {
        console.log(this.searchCondition);
        this._eventService.searchClick.emit(this.searchCondition);
    };
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'cedar-toolbar',
            templateUrl: './app/components/toolbar/toolbar.component.html',
            styleUrls: ['./app/components/toolbar/toolbar.component.css'],
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService, table_service_1.TableService])
    ], ToolbarComponent);
    return ToolbarComponent;
})();
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map