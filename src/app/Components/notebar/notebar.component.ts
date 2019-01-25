import { Component, OnInit } from '@angular/core';
import {NotecrudService} from '../../service/notecrud.service'
import { from } from 'rxjs';
import { CreateNoteModel } from '../../Models/createnote.model';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-notebar',
  templateUrl: './notebar.component.html',
  styleUrls: ['./notebar.component.css']
})
export class NotebarComponent implements OnInit {

  barshow:boolean=false;
  createnote:CreateNoteModel=new CreateNoteModel;
  //loginmodel:LoginModel=new LoginModel();
  constructor(private notecrudservice:NotecrudService,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  fullCardShow()
  {
    this.barshow=!this.barshow;
  }

  noteSave()
  {
    this.barshow=!this.barshow;
    this.createnote.pinned=true;
   // this.createnote.userid=20;
    this.notecrudservice.createNote(this.createnote).subscribe(
        response =>{
          if(response.statusCode==166)
          {
            this.snackBar.open(response.statusMessage,"",{
              duration:2000,
            })
          }

        },
        error =>{
          console.log("Error",error);
        } 
    );
    console.log(this.createnote.title);
    console.log(this.createnote.content);
    }

}
