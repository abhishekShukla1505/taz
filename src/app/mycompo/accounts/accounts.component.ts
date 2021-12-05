import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotToDash():void{
    
    this.router.navigate([`/dashboard/${Sharedata.id}`]);
  }
}
