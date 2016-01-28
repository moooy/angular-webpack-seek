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
var table_service_1 = require('../../services/table.service');
var event_service_1 = require('../../services/event.service');
var main_content_service_1 = require("../../services/main-content.service");
var table_model_1 = require('../../models/table.model');
var home_service_1 = require("../../services/home.service");
var TableComponent = (function () {
    function TableComponent(_tableService, _eventService, _el, _mainContent, _homdservice) {
        var _this = this;
        this._tableService = _tableService;
        this._eventService = _eventService;
        this._el = _el;
        this._mainContent = _mainContent;
        this._homdservice = _homdservice;
        this.params = {};
        this._tableModel = new table_model_1.Table();
        this._homdservice.afterLoadModuleComponent.subscribe(function (res) {
            _this.configTable();
            _this.runTable();
        });
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.configTable = function () {
        this._tableModel._table = $(this._el.nativeElement).find("table");
        this._tableModel.url = this._tableService.getDataUrl();
        this._tableModel.resourcesId = this._mainContent.getResourceId();
        this._tableModel.queryParams = this.setParams();
        this._tableService.getTableSchema(this._tableModel.resourcesId);
    };
    TableComponent.prototype.runTable = function () {
        var _this = this;
        this._tableService.getSchemeEvent.subscribe(function (res) {
            _this._tableModel.scheme = res;
            _this._tableModel.columns = res;
            console.log(_this._tableModel.columns);
            if (_this._tableModel._dirty) {
                _this.refreshTableData();
            }
            else {
                _this.initTable(_this.params);
            }
        });
    };
    TableComponent.prototype.initTable = function (obj) {
        var opinion = {};
        opinion.columns = obj && obj.columns || this._tableModel.columns;
        opinion.url = obj && obj.url || this._tableModel.url;
        opinion.sidePagination = obj && obj.sidePagination || this._tableModel.sidePagination;
        opinion.pagination = obj && obj.pagination || this._tableModel.pagination;
        opinion.pageList = obj && obj.pageList || this._tableModel.pageList;
        opinion.height = obj && obj.height || this._tableModel.height;
        opinion.queryParams = obj && obj.queryParams || this._tableModel.queryParams;
        this._tableModel._table.bootstrapTable(opinion);
        this._tableModel._dirty = true;
    };
    TableComponent.prototype.filterShownColumn = function (columns) {
        var result = columns.filter(function (column) {
            return column.show === true;
        });
        return result;
    };
    TableComponent.prototype.refreshTableData = function (obj) {
        this._tableModel._table.bootstrapTable("refresh", obj);
    };
    TableComponent.prototype.getSelections = function () {
        this._tableModel.checkRows = this._tableModel._table.bootstrapTable("getSelections");
        console.log("select rows:" + JSON.stringify(this._tableModel.checkRows));
    };
    TableComponent.prototype.setParams = function () {
        var _this = this;
        return function (params) {
            var queryparams = {};
            queryparams.resourcesId = _this._tableModel.resourcesId ? _this._tableModel.resourcesId : "[]";
            queryparams.limit = params.limit;
            queryparams.offset = params.offset;
            queryparams.orderId = params.sort ? params.sort : "no";
            queryparams.sort = params.order ? params.order : "";
            return queryparams;
        };
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'cedar-table',
            template: "\n        <table></table>\n  ",
            inputs: ['params']
        }), 
        __metadata('design:paramtypes', [table_service_1.TableService, event_service_1.EventService, core_1.ElementRef, main_content_service_1.MainContentService, home_service_1.HomeService])
    ], TableComponent);
    return TableComponent;
})();
exports.TableComponent = TableComponent;
//# sourceMappingURL=evotable.component.js.map