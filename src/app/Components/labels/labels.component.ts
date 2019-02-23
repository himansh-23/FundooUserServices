import { Component, OnInit, OnDestroy } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { CardsupdateService } from '../../service/cardsupdate.service';
import { Label } from '../../Models/label.model';
import { Router ,ActivatedRoute} from '@angular/router';
import { ReceiveNote } from '../../Models/receivingnote.model';


@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {


  private  allnotes:ReceiveNote[];
  labelvalue:string; 
  
  constructor(private cardupdate:CardsupdateService,private router:Router,private activeRoute: ActivatedRoute) {   
  }

  ngOnInit() {
    
    this.labelvalue=this.activeRoute.snapshot.params['labelvalue'];
    this.cardupdate.currentnotes2.subscribe(udnotes=>{
      this.allnotes=udnotes
    });
      
      //This Is will Update filter (labelvalue ) over child route
      this.router.events.subscribe((e: any) => {
        //this.cardupdate.changemessage();
        this.labelvalue=this.activeRoute.snapshot.params['labelvalue'];
        
      });
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
