import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { CardsupdateService } from '../../service/cardsupdate.service';
import { ViewchangeService } from '../../service/viewchange.service';
import { ReceiveNote } from '../../Models/receivingnote.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
   
  private  allnotes:ReceiveNote[];
  private currentView:boolean;
  showtoolbar=false;
  constructor(private cardupdate:CardsupdateService,private viewChange:ViewchangeService) {
    this.cardupdate.changemessage('false','false');
  }

    ngOnInit() {

      this.cardupdate.currentnotes2.subscribe(udnotes=> {
        this.allnotes=udnotes;
        console.log(udnotes);
      }
        
        );

        this.viewChange.currentView.subscribe(view=>
          {
             this.currentView=view;
          }
          );
  }

 
}
