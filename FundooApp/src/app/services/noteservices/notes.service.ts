import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private http: HttpClient) { }
  loginurl='https://localhost:7006/api/Notes/';


  getdata():Observable<any[]>{
    return this.http.get<any[]>(this.loginurl + 'GetAllNotes')

  }

 




  sendData(NoteInfo: any):Observable<any>{
    // debugger;
    return this.http.post(this.loginurl + 'CreateNotes', NoteInfo);
}

updateNotes(updatedata:any):Observable<any>{
  return this.http.put(this.loginurl + 'UpdateNote',updatedata)
}

toggleArchiveAndTrash(endpoint:any){
  console.log(endpoint)
  return this.http.post(this.loginurl + `Toggelarchive?noteid=${endpoint}`,{},
  {
    responseType:'text',
  })
}

toggleTrash(endpoint:any){
  debugger
  console.log(endpoint)
  return this.http.put(this.loginurl + `Toggeltrash?noteid=${endpoint}`,{},
  {
    responseType:'text',
  })
}

delete(endpoint:any){
  debugger
  console.log(endpoint)
  return this.http.delete(this.loginurl + `DeleteNote?noteid=${endpoint}`,
  {
    responseType:'text',
  })
}


colorChange(endpoint:any){
  debugger
  console.log(endpoint)
  const id=endpoint.id
  const colors=endpoint.color

  console.log(id)
  return this.http.post(this.loginurl + 'AddColour', endpoint,
  {
    responseType:'text',
  })


}
}
  


