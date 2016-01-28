import {Component} from "angular2/core";
@Component({
    selector:'child2',
    template:`Child3<h3>{{testVal2}}</h3>`,
    inputs:['testVal2']

})
export class Child2Cmp{

    constructor(){
        //console.log("child3 get value from child2",this.testVal);
    }
}