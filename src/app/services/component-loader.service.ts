
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
//import * as System from '../system/system';
import {EventEmitter} from "angular2/core";
@Injectable()
export class ComponentLoaderService{

    loadCompleted:EventEmitter<Object> = new EventEmitter();

    constructor(/*private _http:Http*/){

    }
    loadComponentConfig(configObject){
        return System.import(configObject.path).then(componentModule =>{
            this.loadCompleted.emit(componentModule[configObject.component]);
            return componentModule[configObject.component];
        });
       //return Promise.all(componentList.map(config =>
       //                 this.loadComponent(config)
       //             )).then(componentModule=>{
       //                 this.loadCompleted.emit(componentModule);
       //             });
    }

    //loadComponent(configObject){
    //    return System.import(configObject.path).then(
    //    });
    //    //   /* .then(componentModule => {
    //    //        componentModule[configObject.component]
    //    //        console.log("接收到Component",componentModule);
    //    //    }*/
    //    //)
    //}
}