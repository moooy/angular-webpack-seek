import {Injectable,EventEmitter} from "angular2/core";

@Injectable()

export class TableToolbarService{
    public fixRowStart : EventEmitter<Object>;
    public fixRowEnd : EventEmitter<Object>;

    constructor(){
      this.fixRowStart = new EventEmitter();
      this.fixRowEnd = new EventEmitter();
    }
}
