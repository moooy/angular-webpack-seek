import {Component} from 'angular2/core';
import * as echarts from "../../../libs/echarts/echarts.js";
import {OnInit} from "angular2/core";
import {HomeService} from "../../services/home.service";
import {ElementRef} from "angular2/core";
import {AfterViewInit} from "angular2/core";
import {AfterContentInit} from "angular2/core";
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
@Component({
    selector:'cedar-chart',
    template:`<div class="chart">asdfs</div>`,
    styles:[`.chart{height:100%,width:100%;}`],
})
export class ChartComponent {
    //保存echart实例
    private _chart ;


    constructor(private _homeService:HomeService,private _ele:ElementRef){
        console.info("chart construct");
        this._chart = echarts.init($(this._ele.nativeElement)[0]);


        //开始加载图标数据之前，显示loading
        this._homeService.beforeInitChart.subscribe(_=>{
            this.onBeforeLoad();
        });


        this._homeService.initChart.subscribe(option=>{
            this.onAfterLoad(option);
        });

        this._homeService.beforeInitChart.emit();
        this._homeService.initChart.emit(option);


    }

    private onBeforeLoad(){
        this._chart.showLoading();
    }

    private onAfterLoad(option){
        this._chart.hideLoading();
        this._chart.setOption(option);
    }



}