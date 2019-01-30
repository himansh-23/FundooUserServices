import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../../Models/createnote.model';
import { NotecrudService } from '../../service/notecrud.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { CardsupdateService } from '../../service/cardsupdate.service';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  private colors:string[][]=[['white',"FireBrick","orange","LightSkyBlue"],["Lavender","HoneyDew","blue","CadetBlue"],[ "gray",
            "Peru","pink","brown"]];
  
  constructor(private cardupdate:CardsupdateService,private notecrudservice:NotecrudService,private snackBar: MatSnackBar,private dialog: MatDialog) {
   }

  @Input() notedetails:CreateNoteModel;

  ngOnInit() {
  } 
 
  noteDelete()
  {
    console.log('notedeletecall');
    this.notecrudservice.deleteNote(this.notedetails).subscribe(
      response => {
        if(response.statusCode==166)
        {
          this.snackBar.open(response.statusMessage,"",{
            duration:2000,
          })
        }
        this.cardupdate.changemessage();
      },
      error =>{
        console.log("Error",error);
      }       
    );
  
  }

  dostuff()
  {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '500px',
      data: {notedetails:this.notedetails}
    });

    dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
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
          this.cardupdate.changemessage();
        },
        error => {
           console.log("Error",error);
        } 
        )
    });
    

  }

  colorchange(singlecolor:string){
    this.notedetails.color=singlecolor;
    this.notecrudservice.updateNote(this.notedetails).subscribe(
      response => {
        if(response.statusCode==166)
        {
          this.snackBar.open(response.statusMessage,"",{
            duration:2000,
          })
        }
        this.cardupdate.changemessage();
      },
      error => {
         console.log("Error",error);
      } 
      );
      

  }

  archivenote(){
    this.notedetails.archive=!this.notedetails.archive;
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
      );
      this.cardupdate.changemessage();
  }
}
