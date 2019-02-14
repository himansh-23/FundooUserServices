import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NotecrudService } from '../../service/notecrud.service';
import { UserserviceService } from '../../service/userservice.service';
import { CreateNoteModel } from '../../Models/createnote.model';

@Component({
  selector: 'app-collaboratordialog',
  templateUrl: './collaboratordialog.component.html',
  styleUrls: ['./collaboratordialog.component.css']
})
export class CollaboratordialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<CollaboratordialogComponent>,
    private notecrudservice:NotecrudService,private userService:UserserviceService,
    @Inject(MAT_DIALOG_DATA) private data) { }
    private email:string;
  ngOnInit() {
    console.log(this.data.notedetails.id);
  }

  onNoClick():void{
    this.dialogRef.close();
    }

    addCollaborator()
    {
   //   console.log("after close"+email);
      this.dialogRef.close();
      this.userService.getCollabUserId(this.email).subscribe(
        (response:Number) =>
        {
          console.log(response);
          if(response >= 0)
          {
            this.notecrudservice.addCollaboratorNote(response,this.data.notedetails.id).subscribe(
              response =>
              {
                console.log(response);
              }
            )
          }
        }
      )
    }

}
