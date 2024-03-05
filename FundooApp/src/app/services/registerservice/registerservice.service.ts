import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  loginurl='https://localhost:7006/api/User/';
  constructor(private http: HttpClient) { }

  RegisterUser(RegisterInfo: Array<string>){
    return this.http.post(this.loginurl + 'RegisterUser', {
      FirstName:RegisterInfo[0],
      LastName:RegisterInfo[1],
      Email:RegisterInfo[2],
      Password:RegisterInfo[3],


    },
    {
      responseType:'text',
    });
  }}
