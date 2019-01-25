import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../../Models/createnote.model';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  constructor() { }

  @Input() notedetails:CreateNoteModel;

  ngOnInit() {
  }

}
