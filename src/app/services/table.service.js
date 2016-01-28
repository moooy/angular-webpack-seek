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
var http_1 = require('angular2/http');
var tableService_injector_ts_1 = require('./tableService.injector.ts');
require('rxjs/add/operator/map');
var TableService = (function () {
    function TableService(_http, _TableConst) {
        this._http = _http;
        this._TableConst = _TableConst;
        this.getToolbarEvent = new core_1.EventEmitter();
        this.getDataEvent = new core_1.EventEmitter();
        this.getSchemeEvent = new core_1.EventEmitter();
    }
    TableService.prototype.getDataUrl = function () {
        return this._TableConst.dataUrl;
    };
    TableService.prototype.getTableSchema = function (resourceId) {
        var _this = this;
        var queryUrl = this._TableConst.resourceUrl + "/" + resourceId + "/getTableHeader";
        this._http.get("test/table.colums.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.getSchemeEvent.emit(res);
        });
    };
    TableService.prototype.getTableData = function (resourceId) {
        var _this = this;
        var queryUrl = this._TableConst.dataUrl + "?resourcesId=" + resourceId + "&limit=10&offset=0&sort=asc";
        this._http.get(queryUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.getDataEvent.emit(res);
        });
    };
    TableService.prototype.getToolbarOpinion = function () {
        var _this = this;
        this._http.get(this._TableConst.toolbarUrl)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.getToolbarEvent.emit(res);
        });
    };
    TableService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, tableService_injector_ts_1.TableConst])
    ], TableService);
    return TableService;
})();
exports.TableService = TableService;
//# sourceMappingURL=table.service.js.map