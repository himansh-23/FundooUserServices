import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { CardsupdateService } from '../../service/cardsupdate.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  private  allnotes:CreateNoteModel[];

  constructor(private cradupdate:CardsupdateService) { 

  }

  ngOnInit() {
    
    this.cradupdate.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes);
  }

}
