import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { CardsupdateService } from '../../service/cardsupdate.service';
import { ViewchangeService } from '../../service/viewchange.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
   
  private  allnotes:CreateNoteModel[];

 private currentView:boolean;
  showtoolbar=false;
  constructor(private cardupdate:CardsupdateService,private viewChange:ViewchangeService) {
    this.cardupdate.changemessage('false','false');
  }

    ngOnInit() {

      this.cardupdate.currentnotes.subscribe(udnotes=>   
        this.allnotes=udnotes
        );

        this.viewChange.currentView.subscribe(view=>
          {
             this.currentView=view;
          }
          );
  }

 
}
