import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { UserserviceService } from '../../service/userservice.service'
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  token:string;
  constructor(private snackBar: MatSnackBar,myservice:UserserviceService,private router:Router,private activeRoute: ActivatedRoute) { 
  this.token=activeRoute.snapshot.params['token'];
console.log(this.token);
 myservice.verifyUser(this.token).subscribe(data=> {

  if(data.statusCode==200)
  {    this.snackBar.open('Email Successfully Verified', 'LogIn', {
      duration: 2000,});
      this.router.navigate(['/login']);
  }
else{
  this.snackBar.open(data.statusMessage, 'Not Verified', {
    duration: 2000,});
}
  // console.log(data); 
 })
  }

  ngOnInit() {
  }

}
