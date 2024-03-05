import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) { }
  loginurl='https://localhost:7006/api/Notes/';


  getdata(){
    return this.http.get(this.loginurl + 'GetAllNotes')

  }

 




  sendData(NoteInfo: Array<string>){
    debugger;
    return this.http.post(this.loginurl + 'CreateNotes', {
      Title:NoteInfo[0],
      Description:NoteInfo[1],
      Color:NoteInfo[2],
      // Imagepaths:NoteInfo[2],
      IsArchive:NoteInfo[3],
      IsPinned:NoteInfo[4],
      IsTrash:NoteInfo[5],
      UserId:NoteInfo[6],


  })
}
  }


