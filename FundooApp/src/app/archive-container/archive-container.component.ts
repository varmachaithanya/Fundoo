import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit  {
  // @Input() addNewNote:any
  // @Input() sentNote:boolean = true;

  archivedata:any[]=[]
  constructor(private services:NotesService,public dialog: MatDialog) { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // debugger;
  //   if(this.sentNote == true)
  //   {
  //     this.getAllnotes();
  //   }
  // }



  ngOnInit(): void {
    this.getAllnotes();
    }

    handleArchive($event:any){
      this.archivedata = this.archivedata.filter(res => res.noteID != $event);
    }

    handleTrash($event:any){
      this.archivedata = this.archivedata.filter(res => res.noteID != $event);
    }

    handleColor($event:any){
      debugger;
      this.archivedata = this.archivedata.map(item => {
        if (item.noteID === $event.data.noteID) {
          // Update the color for the matching noteID
          return { ...item, color: $event.color };
        }
        return item;
      });      // this.bgcolor=$event;
      this.archivedata = this.archivedata.filter(res=>res.isArchive==true&&res.isTrash==false)
  
    }

    updateArchiveNoteList($event:any){
        console.log($event.data.noteid)
        if($event.action==='color'){
          this.archivedata = this.archivedata.map(item => {
            if (item.noteID === $event.data.noteid) {
              // Update the color for the matching noteID
              return { ...item, color: $event.data.color };
            }
            return item;
          });      // this.bgcolor=$event;
          this.archivedata = this.archivedata.filter(res=>res.isArchive==true&&res.isTrash==false)    }
    
          if($event.action==='archive'){
            this.archivedata = this.archivedata.filter(res => res.noteID != $event.data.noteid);
          }
          if($event.action==='trash'){
            this.archivedata = this.archivedata.filter(res => res.noteID != $event.data.noteid);
          }
      
    }

    getAllnotes(){
      this.services.getdata().subscribe(resp=>{
        this.archivedata=resp.filter((res)=>{
          if(res.isArchive===true){
            return true;
          }
            return false; 
        })
        // console.log(this.archivedata);
          
        // console.log(this.archivedata[0].isTrash);
    }
    )}

    UpdatedNotes={
      noteID:'',
      title:'',
      description:'',
      color:''
  
    }
  
  
    openDialog($notesFunction:any): void {
      //const dialogRef = this.dialog.open(EditComponentComponent, {width:'560px',data:notesFunction});
  
      //dialogRef.afterClosed().subscribe(result=>{
        debugger;
        console.log("dialog closed");
        var res=this.archivedata.filter(obj => obj.noteID === $notesFunction.noteID);
        console.log(res);
        const obj = Object.assign({}, ...res);
        //console.log("==============");
        
        this.UpdatedNotes.noteID=obj.noteID;
        this.UpdatedNotes.title=obj.title;
        this.UpdatedNotes.description=obj.description;
        this.UpdatedNotes.color=obj.color;
  
        this.services.updateNotes(this.UpdatedNotes).subscribe(res=>{
          
          console.log(res);
          // this.newdata = this.newdata.filter(res=>res.isArchive==false&&res.isTrash==false)
  
          
        })
  
      // })
  
      
    }
  

}

