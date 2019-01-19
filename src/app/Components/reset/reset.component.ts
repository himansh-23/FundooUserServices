import { Component,OnInit } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service'
import { Router ,ActivatedRoute} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  token:string;
  constructor(private snackBar: MatSnackBar,myservice:UserserviceService,private router:Router,private activeRoute: ActivatedRoute) { 

    this.token=activeRoute.snapshot.params['token'];
    myservice.resetPassword(this.token).subscribe(data=> {

      if(data.statusCode==200)
      { 
          this.snackBar.open('Check Your Email For ResetLink', 'Reset', {
          duration: 2000,});
          this.router.navigate(['/login']);
      }
    else{
      this.snackBar.open(data.statusMessage, 'Not Verified', {
        duration: 2000,});
    }

  });
}

}
 