import {ViewEncapsulation} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AppNav} from "./AppNav";
import {Component} from "angular2/core";
//import {HomeCmp} from "./HomeCmp";
import {RouteConfig} from "angular2/router";
//import {AboutCmp} from "./About";
import {bind} from "angular2/core";
import {Router} from "angular2/router";
import {RouteRegistry} from "angular2/router";
import {AsyncRoute} from "angular2/router";
import {AboutCmp} from "./About";
import {HomeCmp} from "./HomeCmp";
declare var System;
@Component({
    selector: 'app',
    template: `<section class="sample-app-content">
                  <app-nav [routes]="appRoutes"></app-nav>
                  <router-outlet></router-outlet>
                </section>`,

    //encapsulation: ViewEncapsulation.None,
    directives: [AppNav, ROUTER_DIRECTIVES]
})
@RouteConfig([
    //{ path: '/about/...', component: AboutCmp,name:'AboutCmp',useAsDefault:true},
    //{ path: '/home', component: HomeCmp,name:'HomeCmp'},



])
export class AppCmp {

    appRoutes = [{ path: '/about',name:'AboutCmp',  as: '关于'},{ path: '/home', name:'HomeCmp',as: '主页'}];
    constructor(private _routeRegistry:RouteRegistry) {

        this._routeRegistry.config(AppCmp, new AsyncRoute(
            { path: '/home', loader:()=>System.import('./app-dy-route/HomeCmp').then(m=>m.HomeCmp) , name:'HomeCmp'}
        ));


        this._routeRegistry.config(AppCmp, new AsyncRoute(
            { path: '/about', loader:()=>System.import('./app-dy-route/About').then(m=>m.AboutCmp) , name:'AboutCmp',useAsDefault:true}
        ));

        console.log(this.appRoutes);
        //this._routeRegistry.
        //console.log("AppCmp",this.appRoutes);
        //setTimeout(_ => {
        //    let route = { path: '/about', component: AboutCmp, as: '关于'};
        //    let route2 = { path: '/', component: HomeCmp, as: '主页'};
        //    this.dynamicRouteConfigurator.addRoute(this.constructor, route);
        //    this.dynamicRouteConfigurator.addRoute(this.constructor, route2);
        //    this.appRoutes = this.getAppRoutes();
        //}, 1000);

    }

    private getAppRoutes(): string[] {

        return this.dynamicRouteConfigurator
            .getRoutes(this.constructor).configs.map(route => {
                return { path: [`/${route.as}`], name: route.as };
            });
    }
}