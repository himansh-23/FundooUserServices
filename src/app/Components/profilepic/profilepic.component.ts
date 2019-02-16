import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.css'],
  
})
export class ProfilepicComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProfilepicComponent>) { 
     }

     imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
// imageLoaded() {
//     // show cropper
// }
// loadImageFailed() {
//     // show message
// }

  
  ngOnInit() {
  }
  
  setProfile()
  {
    if(this.croppedImage!='')
    {
      this.dialogRef.close(this.croppedImage);
    }
  }

}
