import { Token } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/noteservices/notes.service';
// import { AddNoteComponent } from '../create-note/create-note.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notAdded:boolean = false;
  bgcolor!:string
  display:string ='1';
  onPress(data:string) {
     //To toggle the component
    this.display=data
  }

  constructor(private services:NotesService,private router: Router) { }
  navigateToTrash() {
    this.router.navigate(['/trash']);
  }
  ngOnInit(): void {
    //this.Cretenote.ngOnInit();
  }


expand=true;

toggleexpand(){
  this.expand=!this.expand
  this.bgcolor='transparent'
  this.noteobj.isArchive=true
  this.noteobj.isTrash=true
  
}


pin=false;

togglepin(){
  this.pin=!this.pin
}
handleEvent($event:any)
{
  this.bgcolor = $event
  this.noteobj.color=$event
  // this.noteobj.isArchive=$event
  // this.noteobj.isTrash=$event
}

// NoteForm = new FormGroup({
//   title: new FormControl("",),
//   description: new FormControl("",),


// });




noteobj={
  noteID:1,
  title : "",
  description:"",
  color:"",
// imagepaths:string="welcome.png"
isArchive:true,
isPinned:false,
isTrash:true,
userId:1,
}

noteSubmited() {
  debugger;
  this.services.sendData(this.noteobj).subscribe(res =>{
    // if(res == 'Failure'){
    //   alert('Note');
      
    // } else{
    //   alert('Note created Sucessfully');

    //    this.ngOnInit();
    // }

      this.notAdded = true;
    
  

  });
}
}




