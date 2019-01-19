import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import { UserDTO } from '../../app/Models/register.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../../app/Models/login.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8080/api/user/';

  public createUser(user: UserDTO) :any {
    
    return this.http.post<UserDTO>(this.userUrl+'register',user);
   
  }

  public loginUser(loginmodel :LoginModel):any
  {
    return this.http.post<LoginModel>(this.userUrl+'login',loginmodel,{headers: new HttpHeaders().set("jwtTokenxxx","")
      ,observe:'response'});
  }

  public verifyUser(token:string):any
  {
    return this.http.get(this.userUrl+'verifyemail/'+token);
  }

  public forgotPassword(email:string):any{
    return this.http.get(this.userUrl+'forgotpassword/?email='+email);
  }

  public resetPassword(token:string):any{
    return this.http.get(this.userUrl+'resetpassword/'+token);
  }

  public resetLink(loginmodel :LoginModel,token:string):any
  {
    return this.http.post<LoginModel>(this.userUrl+'resetpage/'+token,loginmodel);
  }

}
