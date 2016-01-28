export class Table{
   _table = {};//±í¸ñÊµÀý
   _dirty = false;
   url :string;
   resourcesId :string ;
   scheme : Array<any>;
   columns : Array<any>;
   data : Array<any>;
   queryParams =function(params){};
   checkboxHeader = false;
   pagination =true;
   sidePagination="server";
   pageList ="[10,20,50,100,200]";
   height = 400;

   checkRows: Array<any> =[];

   constructor(){

   }
}
