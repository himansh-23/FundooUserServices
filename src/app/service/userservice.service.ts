import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { UserDTO } from '../../app/Models/register.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../../app/Models/login.model';
import { UserInfo } from '../Models/userinfo.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 ={
  headers: new HttpHeaders({
    'token':localStorage.getItem('jwtToken')
  })
};

// const httpOptions3 = {

//   headers: new HttpParams({ 'Content-Type': 'multipart/form-data'}) 
//   };


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

  public forgotPassword(email:string):any {
    return this.http.get(this.userUrl+'forgotpassword/?email='+email);
  }

  public resetPassword(token:string):any {
    return this.http.get(this.userUrl+'resetpassword/'+token);
  }

  public resetLink(loginmodel :LoginModel,token:string):any
  {
    return this.http.post<LoginModel>(this.userUrl+'resetpage/'+token,loginmodel);
  }
  
  public getCollabUserId(email:string):Observable<Number>
  {
    console.log(email);
    return this.http.get<Number>(this.userUrl+"/personid"+"?email="+email,httpOptions2);
  }

  public uploadProfileImage(file: File):any
  {
    let formdata: FormData = new FormData();
    formdata.append('file',file);
    return this.http.post(this.userUrl+"imageupload",formdata,httpOptions2);
  }

  public getProfileImage():any
  {
    return this.http.get(this.userUrl+"imageget",httpOptions2);
  }

  public getUserInfo():Observable<UserInfo>{
    return this.http.get<UserInfo>(this.userUrl+"getUserDetails",httpOptions2);
  }

}
