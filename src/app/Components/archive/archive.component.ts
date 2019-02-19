import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { CardsupdateService } from '../../service/cardsupdate.service';
import { ViewchangeService } from '../../service/viewchange.service';
import { ReceiveNote } from '../../Models/receivingnote.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private  allnotes:ReceiveNote[];
  private currentView:boolean;

  constructor(private cradupdate:CardsupdateService,private viewChange:ViewchangeService) { 
    this.cradupdate.changemessage('true','false');
  }

  ngOnInit() {

    this.cradupdate.currentnotes2.subscribe(
      updatenotes=>
      this.allnotes=updatenotes 
      );

      this.viewChange.currentView.subscribe(view=>
        {
           this.currentView=view;
        }
        ); 
    }

}
