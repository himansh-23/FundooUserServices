import { Component, OnInit } from '@angular/core';
import { CardsupdateService } from '../../service/cardsupdate.service';
import {CreateNoteModel} from '../../Models//createnote.model'
import { ViewchangeService } from '../../service/viewchange.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  private  allnotes:CreateNoteModel[];
  private currentView:boolean;

  constructor(private cradupdate:CardsupdateService,private viewChange:ViewchangeService) { 
    this.cradupdate.changemessage('false','true');
  }

  ngOnInit() {
    this.cradupdate.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes);

      this.viewChange.currentView.subscribe(view=>
        {
           this.currentView=view;
        }
        );
  }

}
