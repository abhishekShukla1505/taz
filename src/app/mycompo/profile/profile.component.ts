import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotToDash():void{
  
    this.router.navigate([`/dashboard/${Sharedata.id}`]);
  }

}
