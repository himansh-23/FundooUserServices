import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NotecrudService } from '../../service/notecrud.service';
import { UserserviceService } from '../../service/userservice.service';
import {CardsupdateService} from '../../service/cardsupdate.service';

@Component({
  selector: 'app-collaboratordialog',
  templateUrl: './collaboratordialog.component.html',
  styleUrls: ['./collaboratordialog.component.css']
})
export class CollaboratordialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<CollaboratordialogComponent>,
    private notecrudservice:NotecrudService,private userService:UserserviceService,
    @Inject(MAT_DIALOG_DATA) private data,private matsnackbar:MatSnackBar,private noteupdateService:CardsupdateService) { }
    private email:string;
  ngOnInit() {
    console.log(this.data.notedetails.collabList);
  }

  onNoClick():void{
    this.dialogRef.close();
    }

    addCollaborator()
    {
      this.dialogRef.close();
      this.userService.getCollabUserId(this.email).subscribe(
        (response:Number) =>
        {
          console.log(response);
          if(response >= 0)
          {
            this.notecrudservice.addCollaboratorNote(response,this.data.notedetails.note.id).subscribe(
              response =>
              {
                this.matsnackbar.open(response.statusMessage,"",{
                  duration:2000,})
                  this.noteupdateService.changemessage2();
              }
            )
          }
        }
      )
    }

    removeCollab(email)
    {
      console.log(email);
      console.log(this.data.notedetails.note.id);
      this.notecrudservice.deleteCollaborator(this.data.notedetails.note.id,email).subscribe(
        (response) =>{
        console.log(response);
        this.matsnackbar.open(response.statusMessage,"",{
          duration:2000,})
          this.noteupdateService.changemessage2();

        }
        )
      }

    }

