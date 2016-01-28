import {Component} from 'angular2/core';
//import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MenuService} from '../../services/menu.service';
import {Router} from "angular2/router";
import {HomeService} from "../../services/home.service";
import {OnInit} from "angular2/core";
import {RouteData} from "angular2/router";
import {RouteConfig} from "angular2/router";
import {Utils} from "../../utils/utils";
import {RouteRegistry} from "angular2/router";
@Component({
    selector:'cedar-menu',
    templateUrl:'./app/components/menu/menu.component.html',
    styleUrls:['./app/components/menu/menu.component.css'],
    providers:[MenuService]
})
@RouteConfig([])
export class MenuComponent implements OnInit{


    menus;
    //菜单未关闭
    menuCollapse:boolean = false;

    constructor(private _homeService:HomeService,private _routeData:RouteData,private _router:Router){

    }
    ngOnInit():any {
        console.log(this._routeData.data['resourceId']);

        //TODO:根据resourceId拼出来URL，请求菜单数据
        this._homeService.requestMenuUrl.emit('./test/menus.json');
        this._homeService.responseMenuData.subscribe(json=>{
            this.menus = json;
            console.log("菜单数据",this.menus);
        });

        return undefined;
    }

    /**
     * 监听菜单点击
     * @param menu
     */
    onMenuClick(menu){
        this._homeService.menuClicked.emit(menu);
        this._router.navigate([Utils.firstLetterToUpperCase(menu.resourceId)]);
        this.toogleActive(menu);
    }
    toogleActive(menu){
        if(!menu) return;
        menu.active = !menu.active;
    }
    toggleMenu(){
        this.menuCollapse = ! this.menuCollapse;
        this._homeService.toggleMenuBtnClick.emit(this.menuCollapse);
    }
}