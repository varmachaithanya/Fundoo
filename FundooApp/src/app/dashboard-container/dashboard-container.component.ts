import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigatetonotes(){
    this.router.navigate(['dashboard/notes-component']);
  }

  navigatetoarchive(){
    this.router.navigate(['dashboard/archive-component']);
  }

  navigatetotrash(){
    this.router.navigate(['dashboard/trash-component']);
  }
}
