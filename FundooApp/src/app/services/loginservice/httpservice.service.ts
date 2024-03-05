import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  loginurl='https://localhost:7006/api/User/';
  constructor(private http: HttpClient) { }

  loginUser(loginInfo: Array<string>){
    return this.http.post(this.loginurl + 'Login', {
      Email:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:'text',
    });
  }
}
