import { Token } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/services/noteservices/notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  color!:string
  constructor(private services:NotesService) { }
  ngOnInit(): void {
  
  }

expand=true;

toggleexpand(){
  this.expand=!this.expand
  this.color='transparent'
}

pin=false;

togglepin(){
  this.pin=!this.pin
}
handleEvent($event:string)
{
  this.color = $event
}

NoteForm = new FormGroup({
  title: new FormControl("",),
  description: new FormControl("",),

});

bgcolor:string="red"
// imagepaths:string="welcome.png"
isArchive:boolean=false
isPinned:boolean=false
isTrash:boolean=false
userId:number=1

noteSubmited() {
  debugger;
  this.services.sendData([this.NoteForm.value.title,
  this.NoteForm.value.description,
  this.color,
  // this.imagepaths,
  this.isArchive,
  this.isPinned,
  this.isTrash,
  this.userId]).subscribe(res =>{
    if(res == 'Failure'){
      alert('Note');
    } else{
      alert('Note created Sucessfully');
      // localStorage.setItem("Token",res);
      console.log(res)
      // this.router.navigateByUrl('notes');
    
    }
  

  });
}


}
