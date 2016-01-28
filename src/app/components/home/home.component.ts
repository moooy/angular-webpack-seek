import {Component} from "angular2/core";
import {NavigatorComponent} from '../navigation/navigation.component';
import {DynamicRouteConfigurator} from "../../utils/DynamicRouteHelper";
import {RouteRegistryService} from "../../services/route.service";
import {RouteComponent} from "../../models/routeComponent.model";
import {PlatformComponent} from "../platform/platform.component";
import {ProductComponent} from "../product/product.component";
import {HomeService} from "../../services/home.service";
import {NavigationService} from "../../services/navigation.service";
import {Utils} from "../../utils/utils";
import {NavigatorModel} from "../../models/navigator.model";
import {OnInit} from "angular2/core";
import {MenuComponent} from "../menu/menu.component";
import {MainContainer} from "../main-container/main-container.component";
import {ChartComponent} from "../chart/chart.component";
import {RouteDefinition} from "angular2/router";
import {AsyncRoute} from "angular2/router";
import {RouteRegistry} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";
declare var System;
@Component({
    selector: "app",
    templateUrl:'app/components/home/home.component.html',
    styleUrls:['app/components/home/home.component.css'],

    directives:[NavigatorComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([])
export class HomeComponent implements OnInit{

    //菜单是否展开
    collecpse:boolean = false;

    routeNames = [];

    constructor(private _homeService:HomeService, private _routeRegistry:RouteRegistry,private _router:Router){
    }

    ngOnInit(){
        //触发导航栏请求数据
        this._homeService.requestNavigationUrl.emit('./test/nav.json');
        this._homeService.responseNavigationData.subscribe(json=>{
            //根据导航栏数据，动态设置路由
            this.routeNames = this.configRoute(json);
            this.navigateToDefaultRouter();
        });
        this._homeService.toggleMenuBtnClick.subscribe(isMenuollecpse=>{
            this.collecpse = isMenuollecpse;
        });
    }

    private navigateToDefaultRouter(){
        if(this.routeNames.length>0)
            this._router.navigate([this.routeNames[0]]);
    }

    configRoute(json){
        let routeNames = [];
        json.map(item=>{
            let routeName = Utils.firstLetterToUpperCase(item.resourceId);

            if(! this._routeRegistry.hasRoute(routeName)){
                let routeDefinition:AsyncRoute =new AsyncRoute({
                    path:'/' + item.resourceId,
                    name:routeName,
                    loader:()=>System.import(item.templatePath).then(m=>m[item.templateId]),
                    data:{resourceId:item.resourceId}
                });
                routeNames.push(routeName);
                this._routeRegistry.config(HomeComponent,routeDefinition);
            }

        });
       return routeNames;
    }

    toggleMenu(){
        this._homeService.toggleMenuBtnClick.emit(null);
    }



}
