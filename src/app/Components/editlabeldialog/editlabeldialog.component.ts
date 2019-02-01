import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-editlabeldialog',
  templateUrl: './editlabeldialog.component.html',
  styleUrls: ['./editlabeldialog.component.css']
})
export class EditlabeldialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditlabeldialogComponent>) { }

  Label:string;

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  LabelCreted()
  {
    //console.log(this.Label);
  }

}
