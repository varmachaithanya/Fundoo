import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {
  trashdata:any[]=[]
  constructor(private services:NotesService,public dialog: MatDialog) { }



  ngOnInit(): void {
    this.getAllnotes();
    }

    handleTrash($event:any){
      debugger;
      this.trashdata=this.trashdata.filter(result=> result.noteID!=$event)
    }

    handleArchive($event:any){
      debugger;
      this.trashdata=this.trashdata.filter(result=> result.noteID!=$event)
    }

    handleColor($event:any){
      debugger;
      this.trashdata = this.trashdata.map(item => {
        if (item.noteID === $event.noteID) {
          // Update the color for the matching noteID
          return { ...item, color: $event.color };
        }
        return item;
      });      // this.bgcolor=$event;
      this.trashdata = this.trashdata.filter(res=>res.isArchive==false&&res.isTrash==true)
  
    }

    handleEvent($event:any){
      if($event.action==='trash'){
        this.trashdata = this.trashdata.filter(res => res.noteID != $event.data.noteid);
      }
      else if($event.action==='delete'){
        debugger
        this.trashdata = this.trashdata.filter(res => res.noteID != $event.data.noteid);
      }
    }

    openDialog(notesFunction:any): void {
      const dialogRef = this.dialog.open(EditComponentComponent, {width:'560px',data:notesFunction});
    }



    getAllnotes(){
      this.services.getdata().subscribe(resp=>{
        this.trashdata=resp.filter((res)=>{
          if(res.isTrash===true){
            return true;
          }
            return false; 
        })
        console.log(this.trashdata);

        console.log(this.trashdata[0].isTrash);
    }
    )}

}
