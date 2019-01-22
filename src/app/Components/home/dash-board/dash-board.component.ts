import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  @Output() eventClicked = new EventEmitter<boolean>();
  
  open:boolean=false;
  constructor() { 
  }

  ngOnInit() {
  }

  onClick(){
    this.open=!this.open;
    this.eventClicked.emit(this.open);
    
  }

}
