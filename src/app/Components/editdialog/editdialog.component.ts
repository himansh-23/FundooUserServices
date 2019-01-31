import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateNoteModel } from '../../Models/createnote.model';
import { CardsupdateService } from '../../service/cardsupdate.service';
import { NotecrudService } from '../../service/notecrud.service';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})

export class EditdialogComponent implements OnInit {

  private colors:string[][]=[['white',"FireBrick","orange","LightSkyBlue"],["Lavender","HoneyDew","blue","CadetBlue"],[ "gray",
            "Peru","pink","brown"]];

  constructor(public dialogRef: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: CreateNoteModel,private cardupdate:CardsupdateService,
    private notecrudservice:NotecrudService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  colorchange(singlecolor:string){
 //  console.log(this.data);
 console.log('cc');
 console.log(singlecolor);
     this.notecrudservice.updateNote(this.data).subscribe(
       
      response => {
        if(response.statusCode==166)
        {
          console.log('j');
          
        }
        this.cardupdate.changemessage();
       
      },
      error => {
         console.log("Error",error);
      } 
      );
      

  }

}
