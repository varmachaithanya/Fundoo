import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpserviceService } from 'src/app/services/loginservice/httpservice.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private loginAuth:HttpserviceService) { }
  navigateToPasswordVerification() {
    this.router.navigate(['/passwordverification']);
  }
    navigateToRegister() {
      this.router.navigate(['/register']);


}
  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    pwd: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
    ]),
  });

  isUserValid:boolean =false;

  loginSubmited() {
    this.loginAuth.loginUser([this.loginForm.value.email,
    this.loginForm.value.pwd]).subscribe(res =>{
      if(res == 'Failure'){
        this.isUserValid=false;
        alert('login unsucessful');
      } else{
        this.isUserValid = true;
        alert('login sucessfull');
        localStorage.setItem("Token",res);
        console.log(res)
        this.router.navigateByUrl('dashboard/notes-component');
      }

    });
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}
