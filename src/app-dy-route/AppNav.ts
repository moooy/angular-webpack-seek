import {Input} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Component} from "angular2/core";
import {DynamicRouteConfigurator} from "./DynamicRouteConfigurator";
@Component({
    selector: 'app-nav',
    directives: [ROUTER_DIRECTIVES],
    styles:[`nav{height:50px;backgr} `],
    template: `
    <nav *ngIf="routes">

      <a height="40px" *ngFor="#route of routes" [routerLink]="[route.name]">
        {{route.name}} :{{route.as}}
      </a>

    </nav>
  `
})
export class AppNav {
    @Input()
    routes: string[];
    constructor(){
        console.log("appNav get routes",this.routes);
        setTimeout(x=>{
            console.log(this.routes);
        },2000);
    }

}