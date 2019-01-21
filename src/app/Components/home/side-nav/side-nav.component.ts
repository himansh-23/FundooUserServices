import { Component, OnInit, Input ,Output,EventEmitter,ViewChild} from '@angular/core';
import {DashBoardComponent} from '../dash-board/dash-board.component' 

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() {}
   
  ngOnInit() {
  }

}
