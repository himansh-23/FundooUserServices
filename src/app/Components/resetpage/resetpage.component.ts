import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../Models/login.model';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserserviceService } from '../../service/userservice.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.css']
})
export class ResetpageComponent implements OnInit {

  user :LoginModel=new LoginModel();
  resetForm: FormGroup;

  token:string;

  constructor(private formBuilder: FormBuilder,private activeRoute: ActivatedRoute,private myservices:UserserviceService,private snackBar: MatSnackBar,private router:Router) {
    this.token=activeRoute.snapshot.params['token'];
    
   }

  ngOnInit() {

    this.resetForm=this.formBuilder.group({
      'email':[this.user.email,[
        Validators.required,
        Validators.minLength(8)
      ]],
      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(8)
      ]]
    })

  }

  onResetPageClick()
  {
    this.myservices.resetLink(this.user,this.token).subscribe(

      data =>
      {
        if(data.statusCode==200)
        {
          this.snackBar.open('Password Changed Successfully ', 'LogIn', {
            duration: 2000,});
            this.router.navigate(['/login']);
        }

        else{
          this.snackBar.open(data.statusMessage,"Password Reset Fails",{
            duration:2000,})
      }},
      error => {
        console.log("Error", error);
    }
    );
  }

}
