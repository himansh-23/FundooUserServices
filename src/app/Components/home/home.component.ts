import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import {NotecrudService} from '../../service/notecrud.service'
import { CreateNoteModel } from '../../Models/createnote.model';
import { NotesComponent } from '../../notes/notes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit  {

  private clickedEvent:boolean;
  private  allnotesdata:CreateNoteModel[];
  ngOnInit() {
   
  }

  constructor(private notecrudservice:NotecrudService){

  }

  childEventClicked(open:boolean)
  {
    this.clickedEvent=open;
    
  }





}
