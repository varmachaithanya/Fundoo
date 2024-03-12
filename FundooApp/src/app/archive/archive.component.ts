import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit,OnChanges {
  @Input() addNewNote:any
  @Input() sentNote:boolean = false;

  archivedata:any[]=[]
  constructor(private services:NotesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    debugger
    if(this.sentNote == true)
    {
      this.archivedata = [this.addNewNote,...this.archivedata];
    }
  }



  ngOnInit(): void {
    this.getAllnotes();
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

}
