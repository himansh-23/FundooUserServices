import { Component, OnInit } from '@angular/core';
import { CardsupdateService } from '../../service/cardsupdate.service';
import {CreateNoteModel} from '../../Models//createnote.model'

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  private  allnotes:CreateNoteModel[];

  constructor(private cradupdate:CardsupdateService) { 
    this.cradupdate.changemessage('false','true');
  }

  ngOnInit() {
    this.cradupdate.currentnotes.subscribe(
      updatenotes=>
      this.allnotes=updatenotes);
  }

}
