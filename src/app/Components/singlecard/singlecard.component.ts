import { Component, OnInit,Input } from '@angular/core';
import { CreateNoteModel } from '../../Models/createnote.model';
import { NotecrudService } from '../../service/notecrud.service';
import {MatSnackBar} from '@angular/material';
import {MatDialog} from '@angular/material';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { CardsupdateService } from '../../service/cardsupdate.service';
import { Label } from '../../Models/label.model';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Note } from 'src/app/Models/note.model';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {

  private colors:string[][]=[['white',"FireBrick","orange","LightSkyBlue"],["Lavender","HoneyDew","blue","CadetBlue"],[ "gray",
            "Peru","pink","brown"]];
  
  private labelsall:Label[];
  constructor(private cardupdate:CardsupdateService,private notecrudservice:NotecrudService,private snackBar: MatSnackBar,private dialog: MatDialog) {
   }

  @Input() notedetails:CreateNoteModel;

  ngOnInit() {

    this.notecrudservice.getAllLabels().subscribe(
      response=>
      {
        this.labelsall=response;
        //console.log(this.labelsall.length);
      }
  )
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
        this.cardupdate.changemessage2();
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
   //   console.log(this.notedetails);
      this.notecrudservice.updateNote(this.notedetails).subscribe(
        response => {
          if(response.statusCode==166)
          {
            this.snackBar.open(response.statusMessage,"",{
              duration:2000,
            })
          }
          this.cardupdate.changemessage2();
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
        this.cardupdate.changemessage2();
      },
      error => {
         console.log("Error",error);
      } 
      );
      
  }

  archivenote(){
    this.notedetails.archive=!this.notedetails.archive;
    if(this.notedetails.archive)
    {
      this.notedetails.pinned=false;
    }
   // console.log(this.notedetails.archive);
    this.notecrudservice.updateNote(this.notedetails).subscribe(
      response => {
        if(response.statusCode==166)
        {
          this.snackBar.open(response.statusMessage,"",{
            duration:2000,
            
          })
          this.cardupdate.changemessage2();
        }
      },
      error => {
         console.log("Error",error);
      } 
      );
      
  }

  trashnote()
  {
    this.notedetails.trash=true;
    this.notedetails.pinned=false;

    this.notecrudservice.updateNote(this.notedetails).subscribe(
      response => {
        if(response.statusCode==166)
        {
          this.snackBar.open(response.statusMessage,"",{
            duration:2000,
            
          })
          this.cardupdate.changemessage2();
        }
      },
      error => {
         console.log("Error",error);
      } 
      );
      
  }

  restore()
  {
    this.notedetails.trash=false;
    this.notecrudservice.updateNote(this.notedetails).subscribe(
      response => {
        if(response.statusCode==166)
        {
          this.snackBar.open(response.statusMessage,"",{
            duration:2000,
            
          })
          this.cardupdate.changemessage2();
        }
      },
      error => {
         console.log("Error",error);
      } 
      );
  }

  lncheck(x,y)
  {
    console.log(x);
    console.log(y);
  }

  haveThisLabel(label:Label,note:CreateNoteModel)
  {
    this.notecrudservice.addLabelToNote(label.id,note.id).subscribe(
      response =>
      {
        
        console.log(response);
        this.cardupdate.changemessage2();
      }
    );
  }

  removeThisLabel(label:Label,note:CreateNoteModel)
  {
    console.log('ss');
  this.notecrudservice.deletenotetolabel(label.id,note.id).subscribe(
    response =>
    {
      this.cardupdate.changemessage2();
    }
  )
  }
}
