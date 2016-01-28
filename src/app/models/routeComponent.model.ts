import {Type} from "angular2/core";
export class RouteComponent{
    private _name:string;
    private _component:Type;

    set name(name:string){
        this._name = name;
    }
    get name():string{
        return this._name;
    }

    set component(component:Type){
        this._component = component;
    }

    get component():Type{
        return this._component;
    }
    constructor(name:string,component:Type){
        this.name = name;
        this.component = component;
    }

}