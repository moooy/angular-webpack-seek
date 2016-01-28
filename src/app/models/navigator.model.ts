import {Utils} from "../utils/utils";
export class NavigatorModel{
    private _id:string;
    private _resourceId:string;
    private _title:string;
    private _active:boolean;

    get id(){
        return this._id;
    }
    get resourceId(){
        return this._resourceId;
    }
    get title(){
        return this._title;
    }
    get active(){
        return this._active;
    }
    set active(active:boolean){
        this._active = active;
    }


    constructor(obj){
        this._id = obj && obj.id || '';
        this._resourceId = obj && obj.resourceId || '';
        this._title = obj && obj.title || '';
        this._active = obj && obj.active || false;
    }

}