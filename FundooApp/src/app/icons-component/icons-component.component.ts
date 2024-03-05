import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NotesService } from 'src/app/services/noteservices/notes.service';



@Component({
  selector: 'app-icons-component',
  templateUrl: './icons-component.component.html',
  styleUrls: ['./icons-component.component.scss']
})
export class IconsComponentComponent implements OnInit {

  constructor(private loginAuth:NotesService) { }

  ngOnInit(): void {
  }

  color=false;
  togglecolor(){
    this.color=!this.color
  }

  // @Input() element:any;
  @Output() colorChange = new EventEmitter<string>();

  colors=''
 // @ViewChild('fetchelement') d:any ;
  handleNoteOperations($event:string){
    console.log($event);
    
    // this.colors=$event;
    // console.log(this.element);
    this.colorChange.emit($event)
    
    // this.element.nativeElement.style.backgroundColor=$event;
  }
  
}
