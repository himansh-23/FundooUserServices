import { Component, OnInit, Input,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { Note } from '../../../Models/note.model';
import { FormGroup,FormBuilder} from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {

  @Input() value:boolean;
  @ViewChild('sidenav') public myNav: MatSidenav;
  
 constructor() { 
  
 }
   
  ngOnInit() {
    
  }

  ngOnChanges(){
    this.myNav.toggle();
  }


  saveNote()
  {
    
  
  }

}
