import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NotecrudService } from '../../service/notecrud.service';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-collaboratordialog',
  templateUrl: './collaboratordialog.component.html',
  styleUrls: ['./collaboratordialog.component.css']
})
export class CollaboratordialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<CollaboratordialogComponent>,
    private notecrudservice:NotecrudService,private userService:UserserviceService) { }
    private email:string;
  ngOnInit() {
  }

  onNoClick():void{
    this.dialogRef.close();
    }

    addCollaborator()
    {
   //   console.log("after close"+email);
      this.dialogRef.close();
      this.userService.getCollabUserId(this.email).subscribe(
        response =>
        {
          console.log(response);
        }
      )
    }

}
