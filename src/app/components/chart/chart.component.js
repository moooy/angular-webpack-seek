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
var echarts = require("../../../libs/echarts/echarts.js");
var home_service_1 = require("../../services/home.service");
var core_2 = require("angular2/core");
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
};
var ChartComponent = (function () {
    function ChartComponent(_homeService, _ele) {
        var _this = this;
        this._homeService = _homeService;
        this._ele = _ele;
        console.info("chart construct");
        this._chart = echarts.init($(this._ele.nativeElement)[0]);
        this._homeService.beforeInitChart.subscribe(function (_) {
            _this.onBeforeLoad();
        });
        this._homeService.initChart.subscribe(function (option) {
            _this.onAfterLoad(option);
        });
        this._homeService.beforeInitChart.emit();
        this._homeService.initChart.emit(option);
    }
    ChartComponent.prototype.onBeforeLoad = function () {
        this._chart.showLoading();
    };
    ChartComponent.prototype.onAfterLoad = function (option) {
        this._chart.hideLoading();
        this._chart.setOption(option);
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'cedar-chart',
            template: "<div class=\"chart\">asdfs</div>",
            styles: [".chart{height:100%,width:100%;}"],
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService, core_2.ElementRef])
    ], ChartComponent);
    return ChartComponent;
})();
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map