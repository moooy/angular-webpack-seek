import {Component} from 'angular2/core';
import {Router,RouterOutlet} from 'angular2/router';
import {Output} from "angular2/core";
import {EventEmitter} from "angular2/core";

@Component({
    selector:'cedar-tree',
    template:`<div>a</div>`,
    styleUrls:['./libs/jsTree/themes/default/style.min.css'],

})

export class TreeComponent{


    constructor(private _router:Router){
        console.log("ResourceComponent init");
    }



}