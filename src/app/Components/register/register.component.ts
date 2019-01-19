import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../Models/register.model';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service'
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user:UserDTO=new UserDTO();
  registerForm :FormGroup;
  constructor(private formBuilder:FormBuilder,private myservice:UserserviceService,private snackBar: MatSnackBar,private router:Router) { }
  //Form Builder is to validate Data Of Email or Password Type
  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      'email':[this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password':[this.user.password,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      'name':[this.user.name,[
        Validators.required
      ]],
      'mobile':[this.user.mobileNumber,[
        Validators.maxLength(10)
      ]]
    });
  }

  onRegisterSubmit()
  {
  //  alert(this.user.email+' '+this.user.mobile) //this can be use for some alter agter user press register button
  //here we will call our rest api's
  console.log(this.user.email);
  (this.myservice.createUser(this.user)).subscribe(
    
      data => { 
        if(data.statusCode== 200)
        {
            this.snackBar.open('Successfully Register Please Confirm Your Email Address', 'LogIn', {
              duration: 2000,});
              this.router.navigate(['/login']);
        }
        else{
        this.snackBar.open(data.statusMessage,"Register Fails",{
          duration:2000,})
        }},
        
       error => {
           console.log("Error", error);
       }

      );
       
  }

}
