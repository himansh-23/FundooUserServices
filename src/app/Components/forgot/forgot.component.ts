import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email:string;
  constructor(private myService:UserserviceService,private snackBar:MatSnackBar) { }

  ngOnInit() {

  }

  onResetSubmit()
  {
    this.myService.forgotPassword(this.email).subscribe(

      data =>{
        if(data.statusCode==356)
        {
          this.snackBar.open('A Reset Link Is Send To Your Email Address','',{
            duration:2000,})
        }
        
        else{
          this.snackBar.open(data.statusMessage,"",{
            duration:2000,})
        }
      }
    )
  }

}


