import {Component,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {ChartComponent} from "../chart/chart.component";

@Component({
    templateUrl:'./app/components/product/product.component.html',
    styleUrls:['./app/components/product/product.component.css'],
    selector:'cedar-product',
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/product',component:ChartComponent,name:'Chart'}
])

export class ProductComponent{


    constructor(/*private _router:Router*/){
        console.log("Product init");
    }
}