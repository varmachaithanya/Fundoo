import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotemailComponent } from './forgotemail/forgotemail.component'; 
import { PasswordverificationComponent } from './passwordverification/passwordverification.component'; 
import { RegisterComponent } from './register/register.component'; 
import { NotesComponent } from './notes/notes.component'; 

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'forgotemail',component:ForgotemailComponent},
  {path:'passwordverification',component:PasswordverificationComponent},
  {path:'register',component:RegisterComponent},
  {path:'notes',component:NotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
