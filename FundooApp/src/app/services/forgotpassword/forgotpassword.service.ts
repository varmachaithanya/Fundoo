import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {
  email='';

  loginurl='https://localhost:7006/api/User/';
  constructor(private http: HttpClient) { }


  forgotPassword(Info: Array<string>){
    this.email=Info[0];
    //https://localhost:7006/api/User/ForgotPassword?email=fuyfhfuyf
    return this.http.post(this.loginurl + `ForgotPassword?email=${Info[0]}`
    ,{},
    {
      responseType:'text',
    });
  }

  resetPassword(loginInfo: Array<string>){
    return this.http.post(this.loginurl + 'ResetPassword', {
      Email:loginInfo[0],
      NewPassword:loginInfo[1],
      ConfirmPassword:loginInfo[2]
    },
    {
      responseType:'text',
    });
  }

  emailreturn(){
    return this.email;
  }

}
