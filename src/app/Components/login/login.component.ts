import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service'
import { Router } from '@angular/router';
import { LoginModel } from '../../Models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginmodel:LoginModel=new LoginModel();
  constructor(private snackBar: MatSnackBar,private formBuilder:FormBuilder,private myservice:UserserviceService,private router:Router) {         
  }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      'email':[this.loginmodel.email,[
        Validators.required,
        Validators.email
      ]],
      'password':[this.loginmodel.password,[
        Validators.required,
      ]]
    });
  }

  onLoginSubmit()
  {
    console.log(this.loginmodel.email);
    this.myservice.loginUser(this.loginmodel).subscribe(

      (response :any) =>{
        
        if(response.body.statusCode ==166)
        {
          this.snackBar.open(response.body.statusMessage,"",{
            duration:2000,})
         
           localStorage.setItem('jwtToken',response.headers.get('jwtTokenxxx'));
           this.router.navigate(['/home']);
            
        }
        else{
          this.snackBar.open(response.statusMessage,"Invalid Credentials",{
            duration:2000,})
          }},

          error =>{
            console.log("Error",error);
          }
    );
  }
}
