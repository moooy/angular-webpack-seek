

import {Injectable} from "angular2/core";
import {Type} from "angular2/core";
import {LoggerService} from "./logger.service";
import {RouteComponent} from "../models/routeComponent.model";
/**
 * 管理路由对应的Component切换
 */
@Injectable()
export class RouteRegistryService{

    private routeMap:{[key:string]:RouteComponent};

    private MESSAGES={
        HAS_REGISTERED:"the component had registered",
        COMPONENT_NOT_FOUND:"component not found in RouteService registry"
    };

    constructor(private _logService:LoggerService){
        console.log("a");
        this.routeMap = {};
    }



    /**
     * 注册路由Component
     * @param id
     * @param component
     */
    private internalRegisterRouteComponent(id:string,routeComponent:RouteComponent){
        let routeCmp = this.routeMap[id];
        if(routeCmp) {
            this._logService.info(this.MESSAGES.HAS_REGISTERED);
            return ;
        }
        this.routeMap[id]=routeComponent;
    }
    registerRouteComponent(id:string,name:string,routeComponent:Type){
        //let has = this.routeMap.has(id);
        //if(has) {
        //    this._logService.info(this.MESSAGES.HAS_REGISTERED);
        //    return ;
        //}
        //this.routeMap.set(id,routeComponent);
       this.internalRegisterRouteComponent(id, new RouteComponent(name,routeComponent));
    }


    /**
     * 获取路由Component
     */
    findRouteComponentById(id:string):RouteComponent{
        let has = this.routeMap[id];
        if(!has){
            this._logService.info(this.MESSAGES.COMPONENT_NOT_FOUND); return;
        }
        return this.routeMap[id];
    }





}