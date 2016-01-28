
import {Type} from "angular2/core";
export class RouteModel{
    path:string;
    name:string;
    component:Type;
    useAsDefault:boolean;
    constructor(obj?:Object){
        if(!obj) return;
        this.path = obj.path || '';
        this.name = obj.name || '';
        this.component = obj.component ||null;
        this.useAsDefault = obj.useAsDefault || false;
    }
}