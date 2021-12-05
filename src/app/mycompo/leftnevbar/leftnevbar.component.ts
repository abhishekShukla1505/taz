import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';

@Component({
  selector: 'app-leftnevbar',
  templateUrl: './leftnevbar.component.html',
  styleUrls: ['./leftnevbar.component.css']
})
export class LeftnevbarComponent implements OnInit {

 data=[];

 
  constructor(private http:HttpClient,private router:Router) { 
    this.http.post("www.taxcalculator.somee.com/api/userAllAccountData",{            
      id:Sharedata.id
    }).subscribe((d:any)=>{
      
      this.data=d;
      
      
    });
    this.reloadData();
  }

  reloadData():any{
    this.http.post("www.taxcalculator.somee.com/api/userAllAccountData",{            
      id:Sharedata.id
    }).subscribe((d:any)=>{
      
      this.data=d;
      Sharedata.data=d;
      
      
      
    });
  }

  ngOnInit(): void {

  }
  delete(Rid:any):any{
    this.http.post("www.taxcalculator.somee.com/api/deleteReport",{            
      userId:Sharedata.id,
      accountId:Rid
    }).subscribe((d:any)=>{    
      this.reloadData()
      console.log(d);
      
    });

  }
  editData(Rid:any):void{
   
    Sharedata.editDataId=Rid;
    this.router.navigate(["/editreport"]);
  }
  
}
