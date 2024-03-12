import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';
import { Router } from '@angular/router';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})


export class NotesContainerComponent implements OnInit {
  notAdded:boolean = false;
  toggledata:boolean=true;
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

  
}

handlebutton(){
  if(this.noteobj.title==''&&this.noteobj.description==''){
    this.toggleexpand();
  }
  else{
    this.noteSubmited();
    this.toggleexpand();
  }
}


pin=false;

togglepin(){
  this.pin=!this.pin
}
handleEvent($event:any)
{
  debugger
  this.bgcolor = $event.color
  this.noteobj.color=$event.color
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
isArchive:false,
isPinned:false,
isTrash:false,
userId:1,
}

noteSubmited() {
  debugger;
  this.services.sendData(this.noteobj).subscribe(res =>{
    if(res == 'Failure'){
      alert('Note');
      
    } else{
      alert('Note created Sucessfully');

      //  this.ngOnInit();
    }

      this.notAdded = true;
    
  

  });
}

}