import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NotesService } from 'src/app/services/noteservices/notes.service';



@Component({
  selector: 'app-icons-component',
  templateUrl: './icons-component.component.html',
  styleUrls: ['./icons-component.component.scss']
})
export class IconsComponentComponent implements OnInit {
@Input() noteiddata:any
@Input() logic:any

  noteId:number=6
  constructor(private loginAuth:NotesService) { }

  ngOnInit(): void {
  }

  color=false;
  togglecolor(){
    this.color=!this.color
  }

  // @Input() element:any;
  @Output() colorChange = new EventEmitter<any>();
  @Output() toggleArchive = new EventEmitter<any>();
  @Output() toggleTrash= new EventEmitter<any>();
  

  colors=''
 // @ViewChild('fetchelement') d:any ;
  handleNoteOperations($event:any){
    console.log($event);
    
    // this.colors=$event;
    // console.log(this.element);

    if($event==='archive'){  
      this.loginAuth.toggleArchiveAndTrash(this.noteiddata).subscribe(res=>{
      console.log(res);
      // this.loginAuth.emit({action:"archive",data:{noteID:this.noteobj.noteID}})
      this.toggleArchive.emit(this.noteiddata);
    })
  }
    else if($event==='trash'){
      this.loginAuth.toggleTrash(this.noteiddata).subscribe(res=>{
        console.log(res);
      this.toggleTrash.emit(this.noteiddata)
    })
  }
  else{
    debugger
    if(this.logic){
      this.colorChange.emit({color:$event})
    }
    else{
      this.loginAuth.colorChange({noteID:this.noteiddata,color:$event}).subscribe(res=>{
        this.colorChange.emit({noteID:this.noteiddata,color:$event})

    }

  )}
  }
  
}

    // this.element.nativeElement.style.backgroundColor=$event;
  
}


