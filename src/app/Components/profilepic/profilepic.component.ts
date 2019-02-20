import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css'],
  
})
export class ProfilepicComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage;

  constructor(public dialogRef: MatDialogRef<ProfilepicComponent>) { }

  ngOnInit() { }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event:any) {
  console.log(event);
  this.croppedImage = event;
  }
   
  setProfile()
  {
    if(this.croppedImage!=null)
    {
      this.dialogRef.close(this.croppedImage);
    }
  }

}
