import { Component,Input, OnInit } from '@angular/core';
import { ForgotpasswordService } from '../services/forgotpassword/forgotpassword.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passwordverification',
  templateUrl: './passwordverification.component.html',
  styleUrls: ['./passwordverification.component.scss'],
})
export class PasswordverificationComponent implements OnInit {


  constructor(private router: Router,private forgotAuth:ForgotpasswordService,private  services: ForgotpasswordService) {}
  email='';


 
  ngOnInit(): void {
    debugger;
   this.email=this.services.emailreturn();

  }
  resetpasswordForm = new FormGroup({
    password: new FormControl(""),
    confirmpassword: new FormControl(""),
})

resetpasswordSubmited() {

  this.forgotAuth.resetPassword([this.email,this.resetpasswordForm.value.password,this.resetpasswordForm.value.confirmpassword]).subscribe(res =>{
    if(res == 'Failure'){
      alert('Invalid credentials');
    } else{
      alert('Password changed sucessfully');
      // localStorage.setItem("Token",res);
      console.log(res)
      this.router.navigateByUrl('notes');
    }
  })
}
}
