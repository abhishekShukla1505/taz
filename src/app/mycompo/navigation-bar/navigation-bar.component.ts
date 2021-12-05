import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  gotToDash():void{
   
    this.router.navigate([`/dashboard/${Sharedata.id}`]);
  }
}
