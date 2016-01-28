import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
@Component({

    selector:'abc1',
    template:`<h3>AboutC1</h3>`

})
export class AboutC1Component implements OnInit{
    ngOnInit():any {
        console.log("abc1 init");
        return undefined;
    }

    constructor(){
        console.log("abc1 construct");
    }

}