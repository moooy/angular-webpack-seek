import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_PROVIDERS} from 'angular2/router';
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";
import {MenuComponent} from "../menu/menu.component";
import {ChartComponent} from "../chart/chart.component";
import {GisComponent} from "../gis/gis.component";
import {ToolbarTableComponent} from "../toolbar-table/toolbar-table.component";
import {TreeComponent} from "../tree/tree.component";

@Component({
    selector:'cedar-resource',
    templateUrl:'./app/components/resource/resource.component.html',
    styleUrls:['./app/components/resource/resource.component.css'],
    directives:[MenuComponent,TreeComponent]
})

export class ResourceComponent{



    constructor(){
        console.log("ResourceComponent init");
    }



}