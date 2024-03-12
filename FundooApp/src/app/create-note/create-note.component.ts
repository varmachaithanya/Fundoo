import { BlockScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotesService } from 'src/app/services/noteservices/notes.service';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MatDialog } from '@angular/material/dialog';
import { Notes } from '../Model/user.model';



@Component({
  selector: 'app-add-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class AddNoteComponent implements OnInit,OnChanges{
  @Input() addNewNote:any
  @Input() sentNote:boolean = false;

  newdata:any[]=[]
  bgcolor:string=''
  constructor(private services:NotesService,public dialog: MatDialog ) { }
  ngOnChanges(changes: SimpleChanges): void {
    // debugger
    if(this.sentNote == true)
    {
      
      this.newdata = [this.addNewNote,...this.newdata];
    }
  }
  // handleArchive($event:any){
  //   debugger;
  //   this.newdata = this.newdata.filter(res => res.noteID != $event);
  // }

  // handleTrash($event:any){
  //   debugger;
  //   this.newdata = this.newdata.filter(res => res.noteID != $event);
  // }

  handleEvent($event:any){
    console.log($event.data.noteid)
    if($event.action==='color'){
      this.newdata = this.newdata.map(item => {
        if (item.noteID === $event.data.noteid) {
          // Update the color for the matching noteID
          return { ...item, color: $event.data.color };
        }
        return item;
      });      // this.bgcolor=$event;
      this.newdata = this.newdata.filter(res=>res.isArchive==false&&res.isTrash==false)    }

      if($event.action==='archive'){
        this.newdata = this.newdata.filter(res => res.noteID != $event.data.noteid);
      }
      if($event.action==='trash'){
        this.newdata = this.newdata.filter(res => res.noteID != $event.data.noteid);
      }
  }

  // handleColor($event:any){
  //   debugger;
  //   this.newdata = this.newdata.map(item => {
  //     if (item.noteID === $event.noteID) {
  //       // Update the color for the matching noteID
  //       return { ...item, color: $event.color };
  //     }
  //     return item;
  //   });      // this.bgcolor=$event;
  //   this.newdata = this.newdata.filter(res=>res.isArchive==false&&res.isTrash==false)

  // }

  UpdatedNotes={
    noteID:'',
    title:'',
    description:'',
    color:this.bgcolor

  }


  openDialog(notesFunction:any): void {
    // const dialogRef = this.dialog.open(EditComponentComponent, {width:'520px',data:notesFunction});

    // dialogRef.afterClosed().subscribe(result=>{
      debugger;
      console.log("dialog closed");
      var res=this.newdata.filter(obj => obj.noteID === notesFunction.noteID);
      console.log(res);
      const obj = Object.assign({}, ...res);
      //console.log("==============");
      
      this.UpdatedNotes.noteID=obj.noteID;
      this.UpdatedNotes.title=obj.title;
      this.UpdatedNotes.description=obj.description;
      this.UpdatedNotes.color=this.bgcolor? this.bgcolor:obj.color;

      this.services.updateNotes(this.UpdatedNotes).subscribe(res=>{
        
        console.log(res);

        
      })

    // })

    
  }



  ngOnInit(): void {
    this.services.getdata().subscribe(res=>{
      this.newdata=res;
      this.newdata.reverse();
      this.newdata = this.newdata.filter(res=>res.isArchive==false&&res.isTrash==false)

      
    })
  }
}



