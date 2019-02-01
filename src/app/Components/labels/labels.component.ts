import { Component, OnInit } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { CardsupdateService } from '../../service/cardsupdate.service';
import { Label } from '../../Models/label.model';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {


  private  allnotes:CreateNoteModel[];
  labelvalue:string; 
  
  constructor(private cardupdate:CardsupdateService,private router:Router,private activeRoute: ActivatedRoute) { 
   
    this.labelvalue=activeRoute.snapshot.params['labelvalue'];
    console.log(this.labelvalue);
  }

  ngOnInit() {

    this.cardupdate.currentnotes.subscribe(udnotes=>
      this.allnotes=udnotes);
  }

  

  labelcheck(label:Label)
  {
    if(label.labelName == this.labelvalue)
    {
        return true
    }
    else{
      return false;
    }
  }

}
