import {Component} from "angular2/core";
import {Input} from "angular2/core";
import {OnInit} from "angular2/core";
import {Injector} from "angular2/core";
import {DynamicComponentLoader} from "angular2/core";
import {Child2Cmp} from "./Child2Cmp";
@Component({
    selector:'child1',
    template:`<child2 id="c" [testVal2]="testVal">1323</child2>T:{{testVal}}`,
    inputs:['testVal']
})
export class Child1Cmp implements OnInit{
    ngOnInit():any {

        return undefined;
    }
    //constructor(dcl: DynamicComponentLoader, injector: Injector){
    //    setTimeout(_=>{
    //        console.log("child2 get testVal",this.testVal);
    //    },1500);
    //
    //    dcl.loadAsRoot(Child2Cmp, '#child', injector);
    //}
    constructor(dcl: DynamicComponentLoader, injector: Injector) {
        dcl.loadAsRoot(Child2Cmp, '#c', injector);
    }


}