import {Component} from 'angular2/core';
import {TableService} from '../../services/table.service';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {TableComponent} from "../table/evotable.component";
import {MessageModalComponent} from "../modals/message/message.modal.component";
import {WarnModalComponent} from "../modals/warn/warn.modal.component";
import {EditModalComponent} from "../modals/edit/edit.modal.component";


@Component({
  selector: 'cedar-toolbar-table',
  templateUrl: './app/components/toolbar-table/toolbar-table.component.html',
  styleUrls: ['./app/components/toolbar-table/toolbar-table.component.css'],
  directives:[ToolbarComponent,TableComponent,ToolbarComponent,MessageModalComponent,WarnModalComponent,EditModalComponent]
})
export class ToolbarTableComponent {
   Opinion = {height:600};
   constructor(){

   }

}
