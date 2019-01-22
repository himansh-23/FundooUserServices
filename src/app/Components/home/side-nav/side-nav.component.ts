import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() value:boolean;
  @ViewChild('sidenav') public myNav: MatSidenav;
 constructor() { }
   
  ngOnInit() {
    
  }

  ngOnChanges(){
    this.myNav.toggle();
  }

  x()
  {
    console.log(this.value);
    
  }

}
