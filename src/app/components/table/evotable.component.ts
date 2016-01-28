import {Component , OnInit,ElementRef} from 'angular2/core';
import {TableService} from '../../services/table.service';
import {EventService} from '../../services/event.service';
import {MainContentService} from "../../services/main-content.service";
import {Table} from '../../models/table.model';
import {RouteData} from "angular2/router";



@Component({
  selector: 'cedar-table',
  template: `
        <table></table>
  `,
  inputs:['params']
})

export class TableComponent implements OnInit{

    params : Object = {};
    private _tableModel : Table = new Table();
    constructor(private _tableService : TableService,private _eventService : EventService,private _el: ElementRef,private _mainContent:MainContentService,
    private _routeData:RouteData ){}
    ngOnInit():any {
        this.configTable();
        this.runTable();
    }
    /**
     * [configTable description]
     * note:存在异步的获取数据的风险
     * @return {[type]} [description]
     */
    configTable(){
      this._tableModel._table = $(this._el.nativeElement).find("table");//获取表格实例
      this._tableModel.url = this._tableService.getDataUrl();//获取远程数据地址
      this._tableModel.resourcesId = this._routeData.get('resourceId');
      this._tableModel.queryParams = this.setParams();
      this._tableService.getTableSchema(this._tableModel.resourcesId);
    }




   /**
    * 启动表格
    * @return {[type]} [description]
    */
    runTable(){
      this._tableService.getSchemeEvent.subscribe(res => {
            this._tableModel.scheme = res;
            this._tableModel.columns = res;
            console.log(this._tableModel.columns);
            if(this._tableModel._dirty){
                this.refreshTableData();
            }else {
                this.initTable(this.params);
            }
        });
    }




    /**
     * [initTable description]
     * @param {any} obj [description]
     */
    initTable(obj?:any):void{
        var opinion = {};
        opinion.columns = obj&&obj.columns ||this._tableModel.columns;
        opinion.url = obj&& obj.url || this._tableModel.url;
        opinion.sidePagination = obj&&obj.sidePagination || this._tableModel.sidePagination;
        opinion.pagination = obj&&obj.pagination || this._tableModel.pagination;
        opinion.pageList = obj&&obj.pageList || this._tableModel.pageList;
        opinion.height = obj&&obj.height || this._tableModel.height;
        opinion.queryParams = obj&&obj.queryParams || this._tableModel.queryParams;
        this._tableModel._table.bootstrapTable(opinion);
        this._tableModel._dirty = true;
    }




    /**
     * [filterShownColumn description]
     * @param  {Array<Object>} columns [description]
     * @return {Array<Object>}         [description]
     */
    filterShownColumn(columns:Array<Object>):Array<Object>{
        var result =columns.filter(function (column) {
            return column.show === true;
        })
        return result;
    }




    /**
     * 手动更新数据(更换url，请求)
     * @param  {any}    obj [description]
     * @return {[type]}     [description]
     */
    refreshTableData(obj?: any){
        this._tableModel._table.bootstrapTable("refresh",obj);
    }





    /**
     * [getSelections description]
     * @return {[type]} [description]
     */
    getSelections(){
        //this.checkRows = [];//清空数组
        this._tableModel.checkRows=this._tableModel._table.bootstrapTable("getSelections");
        console.log("select rows:"+JSON.stringify(this._tableModel.checkRows));
    }



    /**
     * [setParams description]
     * @return {[type]} [description]
     */
    setParams(){
      var _this = this;
      return function(params){
        var queryparams = {};
        queryparams.resourcesId =_this._tableModel.resourcesId? _this._tableModel.resourcesId : "[]" ;
        queryparams.limit = params.limit;
        queryparams.offset = params.offset;
        queryparams.orderId = params.sort ? params.sort : "no" ;
        queryparams.sort = params.order ? params.order :"";
        return queryparams;
      }
    }

}
