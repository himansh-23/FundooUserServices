import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { Router, ActivatedRoute } from '@angular/router';
import { CardsupdateService } from '../../service/cardsupdate.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {

  //@Input() 
  private  allnotes:CreateNoteModel[];
 
  showtoolbar=false;
  constructor(private cardupdate:CardsupdateService) {}

    ngOnInit() {
    
      this.cardupdate.currentnotes.subscribe(udnotes=>
        this.allnotes=udnotes);
     
  }

 
}
