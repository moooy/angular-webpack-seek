
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
@Component({
    selector:'home',
    template:`<h3>Home</h3>

              <router-outlet></router-outlet>
    `
})
export class HomeCmp implements OnInit{

    constructor(){
        console.log("Home construct");
    }

    ngOnInit():any {
        console.log("Home init");
        return undefined;
    }

}