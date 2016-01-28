import {Injectable,EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';
import {UrlConsts} from '../consts/url.consts';
import {Provider} from "angular2/core";
import 'rxjs/add/operator/map';
import {MainContentService} from "./main-content.service";
/**
 * 三级Menu Service
 */

@Injectable()
export class MenuService{

    /**
     * 菜单请求路径
     * @type {string}
     */
    //private menuServiceUrl = UrlConsts.URL_MENU;

    //请求菜单数据
    requestMenu:EventEmitter<Object> = new EventEmitter<Object>();
    //更新菜单数据
    responseMenu:EventEmitter<Object> = new EventEmitter<Object>();

    //
    updateResourceId:EventEmitter<Object> = new EventEmitter<Object>();

    constructor(private _http:Http,private _mainContentService:MainContentService){
        //监听url request请求

        this.requestMenu.subscribe(url=>{
            //接收到数据，转为JSON，投放出去
            this._http.get(url).map(res=>res.json()).subscribe(menus=>{
                this.responseMenu.emit(menus);
            });

        });

        let resourceId = this._mainContentService.getResourceId();

        console.log("菜单获取ResouceId,拼接url",resourceId);
        this.requestMenu.emit(UrlConsts.URL_MENU);

        this.updateResourceId.subscribe(resourceId=>{
            console.log("菜单点击,获取到ResourceId",resourceId);
            this._mainContentService.requestMenuData = resourceId;
        });

    }



}