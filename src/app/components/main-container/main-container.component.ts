import {Component} from "angular2/core";
import {ComponentLoaderService} from "../../services/component-loader.service";
import {ElementRef} from "angular2/core";
import {DynamicComponentLoader} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {HomeService} from "../../services/home.service";
import {OnInit} from "angular2/core";
import {Injector} from "angular2/core";


@Component({
    selector: "main-container",
    template:'<div class="main-component-container" id="content-container">默认首页</div>',
    styleUrls:["./app/components/main-container/main-container.component.css"],
    directives: [CORE_DIRECTIVES]
})
export class MainContainer implements OnInit{



    constructor(private _cmpLoaderService:ComponentLoaderService,private _homeService:HomeService, loader: DynamicComponentLoader, injector:Injector){
        this._cmpLoaderService.loadCompleted.subscribe(Component=>{
            console.log("加载Component完毕",Component);
            loader.loadAsRoot(Component,"#content-container",injector).then(module=>{
                this._homeService.afterLoadModuleComponent.emit(module);
            });
        });


    }
    ngOnInit():any {
        this._homeService.beginLoadModuleComponent.subscribe(configObject=>{
            this._cmpLoaderService.loadComponentConfig(configObject);
        });
        return undefined;
    }


}
