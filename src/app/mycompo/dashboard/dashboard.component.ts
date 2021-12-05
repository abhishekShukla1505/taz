import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  static data:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    DashboardComponent.data=this.router.snapshot.params;
     console.log(DashboardComponent.data.id);
  }
  
  
}
