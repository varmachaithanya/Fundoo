import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Notes } from '../Model/user.model';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponentComponent implements OnInit {

  notAdded:boolean = false;
  bgcolor!:string
  display:string ='1';

  onPress(data:string) {
     //To toggle the component
    this.display=data
  }

  constructor(private services:NotesService,private router: Router, public dialogRef: MatDialogRef<EditComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notes,
  ) { }
  navigateToTrash() {
    this.router.navigate(['/trash']);
  }
  ngOnInit(): void {
    //this.Cretenote.ngOnInit();
    // console.log(data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

expand=true;

toggleexpand(){
  this.expand=!this.expand
  // this.bgcolor='transparent'
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
  // this.noteobj.color=$event
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
    if(res == 'Failure'){
      alert('Note');
      
    } else{
      alert('Note created Sucessfully');

      //  this.ngOnInit();
    }

      this.notAdded = true;
    
  

  });
}
handleColor($event:any){
  debugger;
  this.data.color=$event

}


}
