import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notecommon',
  templateUrl: './notecommon.component.html',
  styleUrls: ['./notecommon.component.scss']
})
export class NotecommonComponent implements OnInit {

  constructor(private services:NotesService,public dialog: MatDialog) { }
  @Input() noteObj:any={}
  @Input() container:any

  @Output() updateList=new EventEmitter<{}>()

  noteid:any

  ngOnInit(): void {
  }
  handleNoteOperations($event:any){
    if($event==='archive'){  
      this.services.toggleArchiveAndTrash(this.noteObj.noteID).subscribe(res=>{
      console.log(res);
      // this.loginAuth.emit({action:"archive",data:{noteID:this.noteobj.noteID}})
      this.updateList.emit({action:"archive",data:{noteid:this.noteObj.noteID}})
  })
}
else if($event==='trash'){
  this.services.toggleTrash(this.noteObj.noteID).subscribe(res=>{
    console.log(res);
    this.updateList.emit({action:"trash",data:{noteid:this.noteObj.noteID}})
  })
}
else if($event==='delete'){
  this.services.delete(this.noteObj.noteID).subscribe(res=>{
    console.log(res);
    this.updateList.emit({action:"delete",data:{noteid:this.noteObj.noteID}})
  })
}
else{
  debugger
  // if(this.logic){
  //   this.colorChange.emit({color:$event})
  // }
  // else{
    this.services.colorChange({noteID:this.noteObj.noteID,color:$event}).subscribe(res=>{
      this.updateList.emit({action:"color",data:{noteid:this.noteObj.noteID,color:$event}})
  })
}





  }

  @Output() modify=new EventEmitter<any>();
  handleDialog(notes:any){
    const dialogRef = this.dialog.open(EditComponentComponent, {width:'560px',data:notes});
  
    dialogRef.afterClosed().subscribe(result=>{
      this.modify.emit(notes);
    })
  }

}
