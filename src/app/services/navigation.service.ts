import {Injectable,EventEmitter} from "angular2/core";
import {Http} from "angular2/http";
import {UrlConsts} from "../consts/url.consts";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {NavigatorModel} from "../models/navigator.model";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {MainContentService} from "./main-content.service";
@Injectable()
export class NavigationService{

    private navDataUrl = UrlConsts.URL_NAVIGATION;

    private request:EventEmitter<Object> = new EventEmitter<Object>();

    private response:EventEmitter<Object> = new EventEmitter<Object>();

    private menuClick:EventEmitter<NavigatorModel> = new EventEmitter<NavigatorModel>();



    private lastActiveMenu:NavigatorModel;
    constructor(private _http:Http,private _mainContentService:MainContentService){
        //TODO:测试
        //this.getNavigationData();
        this.requestToResponse();
        this.request.emit(this.navDataUrl);

        this.menuClick.subscribe(nav=>{
            console.log("CAIDANDIANJI",nav);
            this.onMenuClick(nav);
            this._mainContentService.resourceId = nav.resourceId;
        });
    }

    getRequest():EventEmitter<Object>{
        return this.request;
    }

    getResponse():EventEmitter<Object>{
        return this.response;
    }

    getMenuClick():EventEmitter<Object>{
        return this.menuClick;
    }



    /**
     * 得到URL之后，请求数据，并将数据发射出去
     * @returns {Observable<R>}
     */
    requestToResponse(){
        this.request.subscribe(url=>{
            this._http.get(url).map(res=>res.json()).subscribe(res=>{
                this.response.emit(res);
            });
        })
    }


    /**
     * 侦听按钮点击
     * @param navData
     */
    onMenuClick(nav:NavigatorModel){
        console.log(nav);
        if(!this.lastActiveMenu){
            this.lastActiveMenu = nav;
            nav.active = true;
            //this._mainContentService.navigationChange.emit(nav);
            return;
        }
        if(nav == this.lastActiveMenu){
            return;
        }
        this.lastActiveMenu.active = false;
        nav.active = true;
        this.lastActiveMenu = nav;

        //将点击的菜单信息传递给左侧菜单
        //this._mainContentService.navigationChange.emit(nav);
    }





}