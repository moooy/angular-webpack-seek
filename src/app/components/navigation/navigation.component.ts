import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {NavigationService} from "../../services/navigation.service";
import {RouteRegistryService} from "../../services/route.service";
import {OnInit} from "angular2/core";
import {HomeService} from "../../services/home.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Utils} from "../../utils/utils";



@Component({
    selector:'cedar-navigation',
    directives:[ROUTER_DIRECTIVES],
    templateUrl:'./app/components/navigation/navigation.component.html',
    styleUrls:['./app/components/navigation/navigation.component.css']

})
export class NavigatorComponent implements OnInit{

    //导航数据
    navigatorData:Array<Object> = new Array<Object>() ;

    //上次激活的菜单
   // private _lastActiveNavigator:NavigatorModel;
    /**
     * 构造
     * @param _router
     * @param _navDataService
     */
    constructor(private _homeService:HomeService){

    }

    ngOnInit():any {
        //this._homeService.afterConfigHomeRouter.subscribe(json=>{
        //    this.transformData(json);
        //});
        this._homeService.responseNavigationData.subscribe(json=>{
            this.transformData(json);
        });
        //this._homeService.updateNavState.subscribe(navigator=>{
        //    //this.updateNavigatorState(navigator);
        //});
        //this._homeService.navigatorReady.subscribe((navigatorData:Array<NavigatorModel>)=>{
        //    if(navigatorData.length>0){
        //        this.onClick(navigatorData[0]);
        //    }
        //});
    }


    //导航菜单点击
    onClick(navigator){
        this._homeService.navigatorClicked.emit(navigator);
    }

    //获得导航栏数据
    transformData(json){
        json.map(item=>{
            //TODO:更改item是否影响home获取的数据？？
            item.routeName = Utils.firstLetterToUpperCase(item.resourceId);
            this.navigatorData.push(item);
        });
    }


    //更新导航菜单激活状态
    //private updateNavigatorState(navigator:NavigatorModel){
    //    console.log("导航激活",navigator);
    //    if(!this._lastActiveNavigator){
    //        navigator.active = true;
    //        this._lastActiveNavigator = navigator;
    //    }else{
    //        this._lastActiveNavigator.active = false;
    //        navigator.active = true;
    //        this._lastActiveNavigator = navigator;
    //    }
    //
    //}

}