import {Injectable} from "angular2/core";
import {MenuComponent} from "../components/menu/menu.component";
@Injectable()
export class TestService{

    _name = 0;


    get name(){
        return this._name;
    }
    set name(name:number){
        this._name = name;
    }

}