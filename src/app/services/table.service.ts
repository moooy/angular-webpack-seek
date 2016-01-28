import {Injectable, EventEmitter} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {TableConst} from './tableService.injector.ts';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {
    getToolbarEvent: EventEmitter<Object> = new EventEmitter();
    getDataEvent: EventEmitter<Object> = new EventEmitter();
    getSchemeEvent: EventEmitter<Object> = new EventEmitter();
    constructor(private _http: Http, private _TableConst: TableConst) {}

    /**
     * 返回表格数据的请求地址
     * @return {string} [description]
     */
    getDataUrl():string{
        return this._TableConst.dataUrl;
    }

    /**
     * [请求表格的scheme,全部的scheme]
     * @param {string} resourceId [description]
     */
    getTableSchema(resourceId:string):void{
        let queryUrl :string = `${this._TableConst.resourceUrl}/${resourceId}/getTableHeader`;
        this._http.get("test/table.colums.json")
            .map(res => res.json())
            .subscribe(res => {
                this.getSchemeEvent.emit(res);
            });
    }

    /**
     * 手动请求数据
     * @param  {string} resourceId [description]
     * @return {[type]}            [description]
     */
    getTableData(resourceId:string){
        let queryUrl : string = `${this._TableConst.dataUrl}?resourcesId=${resourceId}&limit=10&offset=0&sort=asc`;
        this._http.get(queryUrl)
            .map(res => res.json())
            .subscribe(res => {
                this.getDataEvent.emit(res);
            })
    }

    getToolbarOpinion(){
        this._http.get(this._TableConst.toolbarUrl)
            .map(res =>res.json())
            .subscribe(res =>{
                this.getToolbarEvent.emit(res);
            })
    }
}
