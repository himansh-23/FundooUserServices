import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../../Models/createnote.model';
import { NotecrudService } from '../../service/notecrud.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { EditdialogComponent } from '../editdialog/editdialog.component';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  private colors:string[][]=[['white',"red","orange","yellow"],["green","teal","blue","dark"],[ "gray",
            "purple","pink","brown"]];

  
  constructor(private notecrudservice:NotecrudService,private snackBar: MatSnackBar,private dialog: MatDialog) {
    var arr_names:string[] = new Array();
    
   }

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
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '600px',
      data: {notedetails:this.notedetails}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.notedetails = result;
      console.log(this.notedetails);
      this.notecrudservice.updateNote(this.notedetails).subscribe(
        response => {
          if(response.statusCode==166)
          {
            this.snackBar.open(response.statusMessage,"",{
              duration:2000,
            })
          }
        },
        error => {
           console.log("Error",error);
        } 
        )
    });
  }

  colorsshow(){
    
  }

}
