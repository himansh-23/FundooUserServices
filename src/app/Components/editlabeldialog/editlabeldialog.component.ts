import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Label } from '../../Models/label.model';
import { NotecrudService } from '../../service/notecrud.service';

@Component({
  selector: 'app-editlabeldialog',
  templateUrl: './editlabeldialog.component.html',
  styleUrls: ['./editlabeldialog.component.css']
})
export class EditlabeldialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditlabeldialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Label[],private noteCurdService:NotecrudService) { 
  }

  Label:string;
  
  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  labelnameupdate(updateLabel:Label)
  {
    console.log(updateLabel);
    this.noteCurdService.updateLabel(updateLabel).subscribe(
      response=>
      {
       console.log(response); 
      }
    );
  }

  deleteLabel(deleteLabel)
  {
    this.noteCurdService.deleteLabel(deleteLabel.id).subscribe(
      response =>
      {
        console.log(response);
        this.noteCurdService.getAllLabels().subscribe(
          response=>
          {
          //  console.log('sdfgsdfgsfgd'+response);
          //  this.data=response;
         //   console.log(response);
          })
      }
    )
    // console.log(deleteLabel.id);
  }

}
