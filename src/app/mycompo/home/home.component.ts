import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static id:any=0;
  constructor(private router:Router) {
    HomeComponent.id=Sharedata.id;
   }  
  ngOnInit(): void {
  }

  gotToDash():void{
   
    this.router.navigate([`/dashboard/${Sharedata.id}`]);
  }

}
