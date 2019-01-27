import { Component, OnInit, Input } from '@angular/core';
import {CreateNoteModel} from '../../Models//createnote.model'
import { Router, ActivatedRoute } from '@angular/router';
import {NotecrudService} from '../../service/notecrud.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  //@Input() 
  private  allnotes:CreateNoteModel[];
 
  showtoolbar=false;
  constructor(private notecrudservice:NotecrudService ) { }

    ngOnInit() {
      this.notecrudservice.getNotes().subscribe(
        response=>{
          
         this.allnotes=response;
        },
        error =>{
         
          console.log("Error",error);
        } 
      )

  }

//   public showtool(){
//   this.showtoolbar=true;  
// }

// public hidetool()
// {
//   this.showtoolbar=false;  

// }

}
