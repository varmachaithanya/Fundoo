import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { ForgotemailComponent } from './forgotemail/forgotemail.component';
import { PasswordverificationComponent } from './passwordverification/passwordverification.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './notes/notes.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsComponentComponent } from './icons-component/icons-component.component';
import { AddNoteComponent } from './create-note/create-note.component';
import { NotesInterceptor } from './services/notes.interceptor';
import { TrashComponent } from './trash/trash.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotecommonComponent } from './notecommon/notecommon.component';
import { ArchiveComponent } from './archive/archive.component';
import { NgModule } from '@angular/core';
// import { DemoComponent } from './services/registerservice/demo/demo.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotemailComponent,
    PasswordverificationComponent,
    RegisterComponent,
    NotesComponent,
    IconsComponentComponent,
    AddNoteComponent,
    TrashComponent,
    ArchiveComponent,
    NotesContainerComponent,
    DashboardContainerComponent,
    ArchiveContainerComponent,
    TrashContainerComponent,
    EditComponentComponent,
    NotecommonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:NotesInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
