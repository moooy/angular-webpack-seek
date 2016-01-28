import {Injectable,EventEmitter} from "angular2/core";
import {Http} from "angular2/http";
import {UrlConsts} from "../consts/url.consts";

/**
 * 界面上除了导航栏以外的部分
 */
@Injectable()
export class MainContentService{

    navigationChange:EventEmitter<Object>= new EventEmitter<Object>();

    requestMenuData:EventEmitter<Object> = new EventEmitter<Object>();

    menuClicked:EventEmitter<Object> = new EventEmitter<Object>();

    resourceId:string;

    //调整布局
    layoutChange:EventEmitter<Object> = new EventEmitter<Object>();
    constructor(){
        this.navigationChange.subscribe(nav=>{
            console.log("main get navigationChange event, params is ",nav);
            //TODO:测试，将URL写死
            var url = UrlConsts.URL_MENU;
            this.onNavigationChange(url);
        });
        this.menuClicked.subscribe(menu=>{

        });
    }
    /**
     * 返回当前的resourceId
     * @returns {string}
     */
    getResourceId(){
        return this.resourceId;
    }

    /**
     * 导航变化
     * @param url
     */
    onNavigationChange(url){
        this.requestMenuData.emit(url);
        //this._http.get(url).map(res=>res.json()).subscribe(menus=>{
        //    this.updateMenu.emit(menus);
        //});
    }

}