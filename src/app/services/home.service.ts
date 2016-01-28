
import {Injectable,EventEmitter} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HomeService{

    //请求菜单数据
    requestNavigationUrl:EventEmitter<Object> = new EventEmitter<>();

    //返回菜单数据
    responseNavigationData:EventEmitter<Object> = new EventEmitter<>();
    //导航菜单准备完毕
    navigatorReady:EventEmitter<Object> = new EventEmitter<>();
    //上方导航才菜单route配置完毕
    afterConfigHomeRouter:EventEmitter<Object> = new EventEmitter<>();
    //上方导航菜单点击
    navigatorClicked:EventEmitter<Object> = new EventEmitter<>();

    //更新导航激活状态
    updateNavState:EventEmitter<Object> = new EventEmitter<>();

    //左侧菜单请求数据
    requestMenuUrl:EventEmitter<Object> = new EventEmitter<>();

    //左侧菜单请求得到数据
    responseMenuData:EventEmitter<Object> = new EventEmitter<>();

    //左侧菜单点击
    menuClicked:EventEmitter<Object> = new EventEmitter<>();
    //开始加载模板 Component
    beginLoadModuleComponent:EventEmitter<Object> = new EventEmitter<>();
    //左侧菜单点击并完成相关事件
    afterMenuClicked:EventEmitter<Object> = new EventEmitter<>();
    //模板加载完毕
    afterLoadModuleComponent:EventEmitter<Object> = new EventEmitter<>();

    //通知模板内部的component加载资源，将ResourceId传送过去
    beginRenderModuleComponent:EventEmitter<Object> = new EventEmitter<>();
    //菜单展开和关闭
    toggleMenuBtnClick:EventEmitter<Object> = new EventEmitter<>();

    //通知执行展开或关闭菜单
    toggleMenu:EventEmitter<Object> = new EventEmitter<>();
    //通知执行展开或关闭右侧主体区域
    toggleMainContainer:EventEmitter<Object> = new EventEmitter<>();


    //chart
    requestChartData:EventEmitter<Object> = new EventEmitter<>();
    responseChartData:EventEmitter<Object> = new EventEmitter<>();
    transformChartData:EventEmitter<Object> = new EventEmitter<>();
    initChart:EventEmitter<Object> = new EventEmitter<>();
    beforeInitChart:EventEmitter<Object> = new EventEmitter<>();


    constructor(private _http:Http){
        //接受菜单数据，并发布
        this.requestNavigationUrl.subscribe(url=>{
             this._http.get(url).map(res=>res.json()).subscribe(json=>{
                 this.responseNavigationData.emit(json);
             });
        });

        //this.navigatorClicked.subscribe(x=>{
        //    this.updateNavState.emit(x);
        //    //TODO:请求菜单数据
        //    this.requestMenuUrl.emit('./test/menus.json');
        //});

        this.requestMenuUrl.subscribe(url=>{
            this._http.get(url).map(res=>res.json()).subscribe(json=>{
                this.responseMenuData.emit(json);
            });
        });

        this.menuClicked.subscribe(menu=>{
            console.info("homeService接收到点击的Menu",menu);
            this.beginLoadModuleComponent.emit({component:menu.templateId,path:menu.templatePath});
            this.afterMenuClicked.emit(menu);
        });
        this.afterLoadModuleComponent.subscribe(module=>{
            console.log("module加载完成",module);
        });

        this.requestChartData.subscribe(url=>{
            this._http.get(url).map(res=>res.json()).subscribe(json=>{
                this.responseChartData.emit(json);
            });
        });

        //this.toggleMenuBtnClick.subscribe(_=>{
        //
        //});
    }


    testData(){
        //
        this.requestChartData.emit('./test/chart.json');

        this.beforeInitChart.emit(null);
    }


}