import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotemailComponent } from './forgotemail/forgotemail.component'; 
import { PasswordverificationComponent } from './passwordverification/passwordverification.component'; 
import { RegisterComponent } from './register/register.component'; 
import { NotesComponent } from './notes/notes.component'; 
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { NotecommonComponent } from './notecommon/notecommon.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'forgotemail',component:ForgotemailComponent},
  {path:'passwordverification',component:PasswordverificationComponent},
  {path:'register',component:RegisterComponent},
  {path:'notes',component:NotesComponent},
  {path:'note',component:NotecommonComponent},

  {path:'dashboard',component:DashboardContainerComponent,children:[
    {path:'notes-component',component:NotesContainerComponent},
    {path:'archive-component',component:ArchiveContainerComponent},
    {path:'trash-component',component:TrashContainerComponent},
    {path:'edit-component',component:EditComponentComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
