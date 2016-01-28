import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {AboutC1Component} from "./second/AboutC1";
import {AboutC2Component} from "./second/AboutC2";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RouteRegistry} from "angular2/router";
import {AsyncRoute} from "angular2/router";
import {Router} from "angular2/router";
declare var System;
@Component({
    selector: 'about',
    template: `<h3>About</h3><hr>
               <a [routerLink]="['C1']">AboutC1</a>
               <a [routerLink]="['C2']">AboutC2</a>
               <router-outlet>gg</router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    //{path:'./c1',name:'C1',component:AboutC1Component},
    //{path:'./c2',name:'C2',component:AboutC2Component,useAsDefault:true}
])
export class AboutCmp implements OnInit{

    constructor(private router:Router, private _routeRegistry:RouteRegistry){
        console.log("about construct");
        if(! this._routeRegistry.hasRoute('C1',AboutCmp))
            this._routeRegistry.config(AboutCmp, new AsyncRoute(
                { path: '/c1', loader:()=>System.import('./app-dy-route/second/AboutC1').then(m=>m['AboutC1Component']) , name:'C1',useAsDefault:true}
            ));

        if(! this._routeRegistry.hasRoute('C2',AboutCmp))
        this._routeRegistry.config(AboutCmp, new AsyncRoute(
            { path: '/c2', loader:()=>System.import('./app-dy-route/second/AboutC2').then(m=>m['AboutC2Component']) , name:'C2'}
        ));


    }

    ngOnInit():any {

        this.router.navigate(['C1']);
        console.log("about init");
        return undefined;
    }
    
}
