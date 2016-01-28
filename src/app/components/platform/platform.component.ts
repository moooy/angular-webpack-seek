import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";
import {MenuComponent} from "../menu/menu.component";
import {ChartComponent} from "../chart/chart.component";
import {ToolbarTableComponent} from "../toolbar-table/toolbar-table.component";
import {Router} from "angular2/router";
import {RouteRegistry} from "angular2/router";
import {OnInit} from "angular2/core";
import {HomeService} from "../../services/home.service";
import {Utils} from "../../utils/utils";
import {AsyncRoute} from "angular2/router";
declare var System;
@Component({
    selector:'cedar-platform',
    templateUrl:'./app/components/platform/platform.component.html',
    styleUrls:['./app/components/platform/platform.component.css'],
    directives:[MenuComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/toolbar-table',name:'ToolbarTable',component:ToolbarTableComponent ,  useAsDefault: true},
    {path:'/chart',name:'Chart',component:ChartComponent}
])
export class PlatformComponent implements OnInit{

    private routeNames = [];

    constructor(private _router:Router,private _routeRegistry:RouteRegistry,private _homeService:HomeService){
        console.log("Platform init");
    }

    ngOnInit():any {
       this._homeService.responseMenuData.subscribe(json=>{
            this.transform2RouteConfig(json);
            if(this.routeNames && this.routeNames.length >0)
                this._router.navigate([this.routeNames[0]]);
       });
    }

    //递归遍历，将所有route配置上，并获得所有routeNames
    transform2RouteConfig(json){

        json.map(item=>{

            let routeName = Utils.firstLetterToUpperCase(item.resourceId);

            if(! this._routeRegistry.hasRoute(routeName)){
                let routeDefinition:AsyncRoute =new AsyncRoute({
                    path:'/' + item.resourceId,
                    name:routeName,
                    loader:()=>System.import(item.templatePath).then(m=>m[item.templateId]),
                    data:{resourceId:item.resourceId}
                });
                this.routeNames.push(routeName);
                this._routeRegistry.config(PlatformComponent,routeDefinition);
            }
            if(item.children && item.children.length>0)
                this.transform2RouteConfig(item.children);

        });
    }


}