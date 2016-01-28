import {Component,EventEmitter} from 'angular2/core';
import {EventService} from  '../../services/event.service';
import {TableService} from '../../services/table.service';


@Component({
  selector: 'cedar-toolbar',
  templateUrl: './app/components/toolbar/toolbar.component.html',
  styleUrls: ['./app/components/toolbar/toolbar.component.css'],
})
export class ToolbarComponent{

  private  toolbarOpinion = [];//工具栏条件
  public isActive = false;//精确查询条件是否激活
  public searchText :string  ;
  public searchOpinion =[];
  public searchCondition = {};

  constructor(private _eventService:EventService,private _tableService:TableService){
    this._eventService.searchOpinion.subscribe(res =>{
      this.searchOpinion = res;
      this.isActive = !this.isActive;
    })

    this._tableService.getToolbarOpinion();
    this._tableService.getToolbarEvent.subscribe(res =>{
      this.toolbarOpinion = res;
    })
  }

  action(type:string){
    if(type == "add"){
      this.addclick();
    }else if(type == "update"){
      this.fixclick();
    }else if(type =="remove"){
      this.deleteclick();
    }else if(type == "selectFilter"){
      this.searchclick();
    }
  }

  addclick(){
    this._eventService.addClick.emit({});
  }

  deleteclick(){
    this._eventService.deleteClick.emit({});
  }

  fixclick(){
    this._eventService.fixClick.emit({})}

  searchclick(){
    this._eventService.searchClick.emit({"condition":this.searchText})
  }

  exactSearch(){
    this.searchCondition = {};
    if(!this.isActive){
      this._eventService.exactClick.emit({});
    }else{
      this.isActive = !this.isActive;
    }
  }

  exactsearch(){
    console.log(this.searchCondition);
    this._eventService.searchClick.emit(this.searchCondition);
  }

}
