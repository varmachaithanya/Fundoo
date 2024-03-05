import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordService } from 'src/app/services/forgotpassword/forgotpassword.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {

  constructor(private router: Router,private forgotAuth:ForgotpasswordService) { }

  ngOnInit(): void {
  }
  forgotpasswordForm = new FormGroup({
    email: new FormControl(""),
})

passwordSubmited() {
  debugger;
  console.log(this.forgotpasswordForm.value.email)

  this.forgotAuth.forgotPassword([this.forgotpasswordForm.value.email]).subscribe(res =>{
    if(res == 'Failure'){
      alert('Invalid mail');
    } else{
      alert('Mail sent sucessfully');
      // localStorage.setItem("Token",res);
      console.log(res)
      this.router.navigateByUrl('passwordverification');
    }


  // }, (err)=>{
  //   console.log(err.error.errors.email);
  });
}

get Email(): FormControl {
  return this.forgotpasswordForm.get('email') as FormControl;
}

}
