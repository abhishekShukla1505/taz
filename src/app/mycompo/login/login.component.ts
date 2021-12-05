import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sharedata } from '../welcom/sharedata';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { 

  }

  ngOnInit(): void {
  }
  
    
  

  getData(e:string,p:any):any{
    
      if(e!==""){
        if(p!=='' && p.length>=6){
          this.http.post("www.taxcalculator.somee.com/api/login",{            
            userEmail:e,
            userPassword:p,
          }).subscribe((data:any)=>{
            if(data[0].id>=1001){
              Sharedata.id=data[0].id;
              this.router.navigate([`/dashboard/${data[0].id}`]);
            };
            
          });
          return 0;
        }
        else{
          alert("Pasword feild is importent and should be grater then 6 digit ");
        }
      }
      else{
        alert("Email feild is importent");
      }
    }
    

   
  
}
class mydata {
   
  constructor() {
    
  }
  id=0;
}
