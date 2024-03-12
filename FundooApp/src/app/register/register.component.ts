import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterserviceService } from 'src/app/services/registerservice/registerservice.service';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private registerauth:RegisterserviceService) { }

  ngOnInit(): void {
  }

  registerForm= new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),]),
  });
  navigateTonotes() {
    this.router.navigate(['dashboard/notes-component']);

}

RegisterSubmited() {
  debugger;
  this.registerauth.RegisterUser([this.registerForm.value.firstname,
    this.registerForm.value.lastname,
    this.registerForm.value.email,
    this.registerForm.value.password]).subscribe(res =>{
    if(res == 'Failure'){
      // this.isUserValid=false;
      alert('Employee registration Failed');
    } else{
      // this.isUserValid = true;
      alert('Employee Registered Sucessfully');
      // localStorage.setItem("Token",res);
      console.log(res)
      this.router.navigateByUrl('notes');
    }

  });
}
get FirstName(): FormControl {
  return this.registerForm.get('firstname') as FormControl;
}
get LastName(): FormControl {
  return this.registerForm.get('lastname') as FormControl;
}
get Email(): FormControl {
  return this.registerForm.get('email') as FormControl;
}
get PWD(): FormControl {
  return this.registerForm.get('password') as FormControl;
}
}