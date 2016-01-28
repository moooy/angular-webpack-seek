

import {Component} from "angular2/core";
import {Renderer} from "angular2/core";
import {ElementRef} from "angular2/core";
import {ComponentRef} from "angular2/core";
@Component({
    selector:'app',
    template:`<div>ff</div>`
})
export class AppComponent{

    constructor(private _render:Renderer,private _ele:ElementRef){
        console.log(this._render);
        this._render.createElement(this._ele,'a');
    };
}