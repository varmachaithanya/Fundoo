import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteservices/notes.service';


@Component({
  selector: 'app-add-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  newdata:any
  constructor(private services:NotesService) { }

  ngOnInit(): void {
    this.services.getdata().subscribe(res=>{
      this.newdata=res;
    })
  }
}



