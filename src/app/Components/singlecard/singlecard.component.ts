import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../../Models/createnote.model';
import { NotecrudService } from '../../service/notecrud.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditdialogComponent } from '../editdialog/editdialog.component';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  constructor(private notecrudservice:NotecrudService,private snackBar: MatSnackBar,public dialog: MatDialog) { }

  @Input() notedetails:CreateNoteModel;

  ngOnInit() {
  }

  noteDelete()
  {
    console.log(this.notedetails);
    this.notecrudservice.deleteNote(this.notedetails).subscribe(
      response => {
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


  }

  dostuff()
  {
    // const dialogRef = this.dialog.open(EditdialogComponent, {
    //   width: '400px',
   //   data: {name: this.name, animal: this.animal}
    // });
  }

}
