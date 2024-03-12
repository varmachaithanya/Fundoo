import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/noteservices/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})



export class TrashComponent implements OnInit {

  trashdata:any[]=[]
  constructor(private services:NotesService) { }



  ngOnInit(): void {
    this.getAllnotes();
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
