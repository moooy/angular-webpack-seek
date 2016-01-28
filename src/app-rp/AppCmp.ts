
import {Component} from "angular2/core";
import {Child1Cmp} from "./Child1Cmp";
@Component({
    selector:'app',
    template:`<div>Parent<child1 [testVal]="test"></child1></div>`,
    directives:[Child1Cmp]
})
export class AppCmp{

    test = 10;
}